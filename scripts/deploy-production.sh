#!/bin/bash
# Installed outside the repository as the forced command of the CI SSH key.
set -Eeuo pipefail
umask 022

APP_ROOT=/home/sysifosw/repositories/SysifosFrontend
NODE=/home/sysifosw/nodevenv/repositories/SysifosFrontend/22/bin/node
SITE=https://sysifosweb.cl

if [[ ! ${SSH_ORIGINAL_COMMAND:-} =~ ^deploy\ ([a-f0-9]{40})$ ]]; then
    echo 'Only deploy <commit SHA> is permitted.' >&2
    exit 64
fi
revision=${BASH_REMATCH[1]}
cd "$APP_ROOT"
mkdir -p .releases
exec 9>.releases/deploy.lock
flock -w 120 9

release=$(mktemp -d "$APP_ROOT/.releases/${revision}.XXXXXX")
archive=$(mktemp "$APP_ROOT/.releases/upload.XXXXXX")
switched=false
previous=
cleanup() {
    rm -f "$archive" "$APP_ROOT/.output-next"
}
trap cleanup EXIT
cat > "$archive"

# Validate paths and link targets before extracting into an isolated release.
python3 - "$archive" <<'PY'
import posixpath, sys, tarfile
with tarfile.open(sys.argv[1], 'r:gz') as archive:
    for member in archive.getmembers():
        name = posixpath.normpath(member.name)
        if name.startswith('/') or name == '..' or name.startswith('../'):
            raise SystemExit('Unsafe archive path')
        if not (member.isfile() or member.isdir() or member.issym() or member.islnk()):
            raise SystemExit('Unsupported archive entry')
        if member.issym() or member.islnk():
            target = posixpath.normpath(posixpath.join(posixpath.dirname(name) if member.issym() else '', member.linkname))
            if target.startswith('/') or target == '..' or target.startswith('../'):
                raise SystemExit('Unsafe archive link')
PY
tar --no-same-owner --no-same-permissions -xzf "$archive" -C "$release"
[[ $(cat "$release/REVISION") == "$revision" ]]
"$NODE" "$release/scripts/check-production-build.cjs"

# Exercise the candidate with the hosting's own Node and native libraries.
(cd "$release" && "$NODE" scripts/smoke-production.cjs)

restart() {
    mkdir -p "$APP_ROOT/tmp"
    touch "$APP_ROOT/tmp/restart.txt"
    PATH=/usr/local/bin:/usr/bin:/usr/sbin:/bin:/sbin cloudlinux-selector stop --json --interpreter nodejs --app-root repositories/SysifosFrontend
    PATH=/usr/local/bin:/usr/bin:/usr/sbin:/bin:/sbin cloudlinux-selector start --json --interpreter nodejs --app-root repositories/SysifosFrontend
    "$NODE" "$APP_ROOT/scripts/restart-production.cjs"
}

rollback() {
    local status=$?
    trap - ERR
    if [[ $switched == true && -n $previous ]]; then
        ln -s "$previous" "$APP_ROOT/.output-next"
        mv -Tf "$APP_ROOT/.output-next" "$APP_ROOT/.output"
        restart || true
        echo "Deployment failed; restored $previous" >&2
    fi
    exit "$status"
}
trap rollback ERR

if [[ -L .output ]]; then
    previous=$(readlink -f .output)
elif [[ -d .output ]]; then
    previous="$APP_ROOT/.releases/before-actions-$(date +%Y%m%d%H%M%S)"
    mv .output "$previous"
    # Initial conversion from a physical directory; later switches are atomic.
    ln -s "$previous" .output
else
    echo 'An existing production output is required for rollback.' >&2
    exit 1
fi
ln -s "$release/.output" .output-next
mv -Tf .output-next .output
switched=true
restart

healthy=false
build_id=$("$NODE" -p "require('$release/.output/build-source.json').buildId")
for attempt in $(seq 1 12); do
    # A cache-busting URL and exact build ID prevent an old worker from passing.
    remote_id=$(curl --fail --silent --show-error --max-time 15 --header 'Cache-Control: no-cache' "$SITE/_nuxt/builds/latest.json?deploy=$revision-$attempt" | "$NODE" -e 'let s="";process.stdin.on("data",d=>s+=d);process.stdin.on("end",()=>{try{console.log(JSON.parse(s).id)}catch{process.exitCode=1}})') || remote_id=
    if [[ $remote_id == "$build_id" ]] && curl --fail --silent --show-error --max-time 20 "$SITE/admin/login?deploy=$revision-$attempt" | grep 'SysifosWeb' > /dev/null; then
        healthy=true
        break
    fi
    sleep 3
done
[[ $healthy == true ]]
printf '%s\n' "$revision" > .releases/current-revision
printf '%s\n' "$previous" > .releases/previous-output
echo "Production deployed: $revision (build $build_id)"
