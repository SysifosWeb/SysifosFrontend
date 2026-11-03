# Compilación y despliegue desde GitHub Actions

Cada push a `main` ejecuta `.github/workflows/production.yml`: instala el lockfile
con `npm ci` en Linux y Node 22, ejecuta las pruebas, compila Nuxt con
`NITRO_PRESET=node-server` y arranca el servidor compilado para comprobar portada
y acceso al administrador, además de la optimización nativa de imágenes. Los pull requests ejecutan la misma compilación sin
acceder a las credenciales de producción.

El artefacto `frontend-<SHA>` contiene `frontend-release.tar.gz`, con las fuentes
exactas del commit, la carpeta `.output` completa y su firma de fuentes. Se usa
tar para conservar los enlaces simbólicos y los archivos ocultos del servidor.
GitHub conserva el artefacto 14 días. `.output` y `.output.zip` ya no se versionan.
No hay que compilar ni subir archivos desde un equipo personal.

## Producción

El job `deploy`, en el entorno `production`, transmite el artefacto por SSH.
La clave dedicada solo acepta `deploy <SHA>` mediante un comando forzado y tiene
desactivados terminal, reenvíos y funcionalidades auxiliares de SSH.

El controlador instalado en
`/home/sysifosw/.local/lib/sysifos-frontend/deploy-production.sh`:

1. Serializa los despliegues con `flock` y valida las rutas del archivo recibido.
2. Extrae una versión aislada en el directorio `.releases` de la aplicación.
3. Verifica la firma de fuentes y prueba el servidor con el Node 22 del hosting.
4. Cambia el enlace `.output` y reinicia la aplicación CloudLinux/Passenger.
5. Comprueba el identificador exacto del build servido y el acceso al administrador.
6. Si falla después del cambio, recupera el enlace anterior y reinicia esa versión.

La primera publicación convierte la carpeta física `.output` en un enlace y
conserva la carpeta anterior. Las publicaciones siguientes cambian el enlace
atómicamente. No se ejecuta `npm install` ni una compilación en producción.
El código fuente del checkout antiguo de cPanel no se actualiza: las fuentes de
cada publicación están dentro de su directorio de release. No usar el botón de
despliegue Git de cPanel para este frontend; el flujo de Actions lo reemplaza.

## Configuración de GitHub

Secretos del repositorio:

- `FRONTEND_SSH_KEY`: clave privada dedicada a este flujo.
- `FRONTEND_SSH_KNOWN_HOSTS`: clave pública del servidor comprobada, con su puerto.

Variables del repositorio:

- `FRONTEND_SSH_HOST`: `sysifosweb.cl`.
- `FRONTEND_SSH_PORT`: `50987`.
- `FRONTEND_SSH_USER`: `sysifosw`.
- `NUXT_PUBLIC_TINYMCE_API_KEY`: opcional, si se necesita una clave pública del editor.

La clave privada no se guarda en el repositorio. El controlador de despliegue
se instala mediante la conexión administrativa existente. Si se modifica ese
controlador, actualizar su copia instalada antes de usar la versión nueva.

## Publicar y recuperar

Publicar: hacer push a `main` y revisar el resultado en Actions. También se puede
ejecutar manualmente el workflow sobre `main` para volver a publicar ese commit.
Una reversión funcional se hace revirtiendo el commit y dejando que Actions
compile y publique el resultado.

Ante una emergencia, la ruta del output anterior está en
`.releases/previous-output`; conservar esa versión y la actual. Las releases se
conservan en el hosting para recuperación y necesitan una limpieza periódica de
versiones antiguas, sin borrar las dos referenciadas por esos enlaces.

El hosting usa glibc 2.28. El build se prueba allí antes de cambiar producción,
incluyendo la carga de las dependencias nativas incluidas en el servidor. Las
variables de runtime de cPanel se mantienen en la aplicación existente.
