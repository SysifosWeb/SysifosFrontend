import { e as useHead, b as useRoute, n as navigateTo, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, watch, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrInterpolate, ssrRenderList, ssrLooseEqual } from 'vue/server-renderer';
import { FolderOpen, RefreshCw, Plus, Loader2, FolderPlus, SquareKanban, ArrowUpRight, X } from 'lucide-vue-next';
import { u as useApi } from './useApi-CzfxiAaW.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'ipx';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Proyectos Kanban \xB7 SysifosWeb", meta: [{ name: "robots", content: "noindex, nofollow" }] });
    const route = useRoute();
    const search = ref(typeof route.query.q === "string" ? route.query.q : "");
    const archived = ref(route.query.archived === "1");
    const page = ref(Math.max(1, Number(route.query.page) || 1));
    const total = ref(0);
    const lastPage = ref(1);
    const canCreate = ref(false);
    const appliedSearch = ref(search.value);
    watch([archived, page], () => fetchProjects(true));
    const projects = ref([]);
    const loading = ref(true);
    const refreshing = ref(false);
    const busy = ref(false);
    const connected = ref(false);
    const retryable = ref(true);
    const notice = ref("");
    const projectError = ref("");
    ref();
    const dialogOpen = ref(false);
    const form = reactive({ name: "", description: "", project_key: "", visibility: "private" });
    const api = useApi();
    let fetching = false;
    let refreshQueued = false;
    let disposed = false;
    async function fetchProjects(force = false) {
      var _a;
      if (fetching) {
        refreshQueued || (refreshQueued = force);
        return;
      }
      if (!force && (busy.value || dialogOpen.value)) return;
      fetching = true;
      refreshing.value = true;
      const requested = { q: appliedSearch.value, archived: archived.value ? 1 : 0, page: page.value, per_page: 24 };
      const isCurrent = () => requested.q === appliedSearch.value && requested.archived === (archived.value ? 1 : 0) && requested.page === page.value;
      try {
        const response = await api.request("kanban/projects", { query: requested });
        if (disposed || !isCurrent()) return;
        total.value = response.meta.total;
        lastPage.value = response.meta.last_page;
        canCreate.value = response.meta.can_create;
        await navigateTo({ query: { q: appliedSearch.value || void 0, archived: archived.value ? "1" : void 0, page: page.value > 1 ? String(page.value) : void 0 } }, { replace: true });
        if (disposed) ;
        if (!Array.isArray(response.data) || response.data.some((project) => !project || !Number.isSafeInteger(project.id) || project.id <= 0 || typeof project.name !== "string" || typeof project.cards_count !== "number")) {
          throw new Error("KANBAN_INVALID_RESPONSE");
        }
        projects.value = response.data;
        connected.value = true;
        retryable.value = true;
        notice.value = "";
      } catch (error) {
        connected.value = false;
        const status = error.statusCode || error.status || ((_a = error.response) == null ? void 0 : _a.status);
        if ([401, 403, 404, 419].includes(status)) projects.value = [];
        retryable.value = ![403, 404].includes(status);
        if (status === 403) {
          notice.value = "Tu cuenta no tiene acceso a los proyectos Kanban. Comprueba que tu cuenta est\xE1 activa y pertenece a un proyecto.";
        } else if (status === 404) {
          notice.value = "No se encontr\xF3 la API de proyectos Kanban. Comprueba que el backend est\xE1 actualizado y que sus migraciones est\xE1n aplicadas.";
        } else if (error.message === "KANBAN_INVALID_RESPONSE") {
          retryable.value = false;
          notice.value = "La API respondi\xF3 con un formato inesperado para los proyectos Kanban. Comprueba la versi\xF3n del backend.";
        } else {
          notice.value = "No se pudieron cargar los proyectos Kanban. Comprueba la conexi\xF3n y vuelve a intentarlo.";
        }
      } finally {
        fetching = false;
        refreshing.value = false;
        loading.value = false;
        if (refreshQueued) {
          refreshQueued = false;
          await fetchProjects(true);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="flex items-center gap-2 font-display text-2xl font-bold text-slate-900 dark:text-white">`);
      _push(ssrRenderComponent(unref(FolderOpen), { class: "h-6 w-6 text-sky-500" }, null, _parent));
      _push(` Proyectos</h2><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Elige un proyecto para abrir su tablero o crea uno nuevo para comenzar.</p></div><div class="flex items-center gap-2"><button aria-label="Actualizar proyectos"${ssrIncludeBooleanAttr(unref(loading) || unref(busy)) ? " disabled" : ""} class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-500 ring-1 ring-slate-200 hover:text-sky-600 disabled:opacity-50 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-800">`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4" }, null, _parent));
      _push(`</button>`);
      if (unref(canCreate)) {
        _push(`<button${ssrIncludeBooleanAttr(unref(loading) || unref(busy) || !unref(connected)) ? " disabled" : ""} class="inline-flex min-h-11 items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
        _push(` Crear proyecto Kanban</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><form class="flex flex-wrap items-end gap-3"><label class="min-w-0 flex-1 text-sm font-medium text-slate-700 dark:text-slate-200">Buscar proyectos<input${ssrRenderAttr("value", unref(search))} type="search" maxlength="120" placeholder="Nombre o clave del proyecto" class="mt-1 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900 placeholder:text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"></label><button${ssrIncludeBooleanAttr(unref(refreshing)) ? " disabled" : ""} class="min-h-11 rounded-xl bg-[#25222c] px-4 text-sm font-semibold text-white">Buscar</button><label class="flex min-h-11 items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><input${ssrIncludeBooleanAttr(Array.isArray(unref(archived)) ? ssrLooseContain(unref(archived), null) : unref(archived)) ? " checked" : ""} type="checkbox"> Archivados</label>`);
      if (unref(appliedSearch)) {
        _push(`<button type="button" class="min-h-11 px-3 text-sm underline">Limpiar b\xFAsqueda</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
      if (unref(refreshing) && !unref(loading)) {
        _push(`<p role="status" class="text-sm text-slate-500">Actualizando proyectos\u2026</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(notice)) {
        _push(`<div role="alert" class="rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300"><p>${ssrInterpolate(unref(notice))}</p>`);
        if (unref(retryable)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(loading) || unref(busy)) ? " disabled" : ""} class="mt-2 font-semibold underline underline-offset-2">Reintentar conexi\xF3n</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div role="status" class="flex h-64 flex-col items-center justify-center gap-3">`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 animate-spin text-sky-500" }, null, _parent));
        _push(`<p class="text-sm text-slate-500 dark:text-slate-400">Cargando proyectos\u2026</p></div>`);
      } else if (unref(connected) && !unref(projects).length) {
        _push(`<section aria-labelledby="empty-projects-heading" class="flex flex-col items-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"><div class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 dark:bg-sky-500/10">`);
        _push(ssrRenderComponent(unref(FolderPlus), { class: "h-8 w-8" }, null, _parent));
        _push(`</div><h3 id="empty-projects-heading" class="text-lg font-bold text-slate-900 dark:text-white">${ssrInterpolate(unref(appliedSearch) || unref(archived) ? "No hay proyectos con estos filtros" : "Todav\xEDa no hay proyectos")}</h3><p class="mt-2 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">Los proyectos que puedes consultar aparecer\xE1n aqu\xED. Cambia los filtros o crea un proyecto si tienes permiso.</p>`);
        if (unref(canCreate) && !unref(archived)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50">`);
          _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
          _push(` Crear proyecto Kanban</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else if (unref(projects).length) {
        _push(`<section aria-label="Proyectos Kanban" class="space-y-4"><p class="text-xs font-medium text-slate-500 dark:text-slate-400">${ssrInterpolate(unref(total))} ${ssrInterpolate(unref(total) === 1 ? "proyecto" : "proyectos")} \xB7 Solo se muestran proyectos a los que tienes acceso.</p><div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(projects), (project) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: project.id,
            to: `/admin/kanban/${project.id}`,
            "aria-label": `Abrir tablero de ${project.name}`,
            "data-project": project.id,
            class: "group flex min-w-0 flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-sky-700"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-4 flex items-start justify-between gap-3"${_scopeId}><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FolderOpen), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                _push2(`</div><span class="rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"${_scopeId}>${ssrInterpolate(project.project_key)}</span></div><p class="mb-2 text-xs text-slate-500"${_scopeId}>${ssrInterpolate(project.archived_at ? "Archivado \xB7 Solo lectura" : project.visibility === "private" ? "Privado \xB7 Miembros del proyecto" : "Equipo \xB7 Administradores y editores")}</p><h3 class="break-words font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400"${_scopeId}>${ssrInterpolate(project.name)}</h3><p class="mb-5 mt-2 line-clamp-3 whitespace-pre-line break-words text-sm leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(project.description || "Organiza y sigue las tareas de este proyecto.")}</p><div class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800"${_scopeId}><span class="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(SquareKanban), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`${ssrInterpolate(project.cards_count)} ${ssrInterpolate(project.cards_count === 1 ? "tarea" : "tareas")}</span><span class="flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400"${_scopeId}>Abrir tablero`);
                _push2(ssrRenderComponent(unref(ArrowUpRight), { class: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "mb-4 flex items-start justify-between gap-3" }, [
                    createVNode("div", { class: "flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10" }, [
                      createVNode(unref(FolderOpen), { class: "h-5 w-5" })
                    ]),
                    createVNode("span", { class: "rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400" }, toDisplayString(project.project_key), 1)
                  ]),
                  createVNode("p", { class: "mb-2 text-xs text-slate-500" }, toDisplayString(project.archived_at ? "Archivado \xB7 Solo lectura" : project.visibility === "private" ? "Privado \xB7 Miembros del proyecto" : "Equipo \xB7 Administradores y editores"), 1),
                  createVNode("h3", { class: "break-words font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400" }, toDisplayString(project.name), 1),
                  createVNode("p", { class: "mb-5 mt-2 line-clamp-3 whitespace-pre-line break-words text-sm leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(project.description || "Organiza y sigue las tareas de este proyecto."), 1),
                  createVNode("div", { class: "mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800" }, [
                    createVNode("span", { class: "flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400" }, [
                      createVNode(unref(SquareKanban), { class: "h-4 w-4" }),
                      createTextVNode(toDisplayString(project.cards_count) + " " + toDisplayString(project.cards_count === 1 ? "tarea" : "tareas"), 1)
                    ]),
                    createVNode("span", { class: "flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400" }, [
                      createTextVNode("Abrir tablero"),
                      createVNode(unref(ArrowUpRight), { class: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(lastPage) > 1) {
        _push(`<nav aria-label="P\xE1ginas de proyectos" class="flex items-center justify-between gap-3 text-sm"><button${ssrIncludeBooleanAttr(unref(page) <= 1 || unref(busy) || unref(refreshing)) ? " disabled" : ""} class="min-h-11 rounded-xl border px-4 disabled:opacity-40">Anterior</button><span>P\xE1gina ${ssrInterpolate(unref(page))} de ${ssrInterpolate(unref(lastPage))}</span><button${ssrIncludeBooleanAttr(unref(page) >= unref(lastPage) || unref(busy) || unref(refreshing)) ? " disabled" : ""} class="min-h-11 rounded-xl border px-4 disabled:opacity-40">Siguiente</button></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<dialog aria-labelledby="project-heading" class="admin-scope m-auto max-h-[90vh] w-[min(520px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-slate-100"><form class="space-y-5 p-6"><header class="flex items-center justify-between gap-3"><h3 id="project-heading" class="text-lg font-bold">Crear proyecto Kanban</h3><button type="button" aria-label="Cerrar creaci\xF3n de proyecto"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="flex h-11 w-11 items-center justify-center text-slate-400">`);
      _push(ssrRenderComponent(unref(X), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></header><p class="text-sm text-slate-500 dark:text-slate-400">Cada proyecto tendr\xE1 su propio tablero, tareas e historial de actividad. El acceso depende de los miembros y de la visibilidad que elijas.</p>`);
      if (unref(projectError)) {
        _push(`<p role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">${ssrInterpolate(unref(projectError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="block text-sm font-medium">Nombre del proyecto<input${ssrRenderAttr("value", unref(form).name)} type="text" required minlength="2" maxlength="120" placeholder="Por ejemplo, Sitio web de un cliente" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"></label><label class="block text-sm font-medium">Clave estable<input${ssrRenderAttr("value", unref(form).project_key)} type="text" required minlength="2" maxlength="16" pattern="[A-Z][A-Z0-9]{1,15}" placeholder="WEB" class="mt-1.5 min-h-11 uppercase"><span class="mt-1 block text-xs text-slate-500">De 2 a 16 letras may\xFAsculas o n\xFAmeros. Empieza por una letra. No podr\xE1 modificarse.</span></label><label class="block text-sm font-medium">Acceso<select class="mt-1.5 min-h-11"><option value="private"${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, "private") : ssrLooseEqual(unref(form).visibility, "private")) ? " selected" : ""}>Privado: solo miembros y administradores globales</option><option value="team"${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, "team") : ssrLooseEqual(unref(form).visibility, "team")) ? " selected" : ""}>Equipo: tambi\xE9n administradores y editores activos</option></select></label><label class="block text-sm font-medium">Descripci\xF3n del proyecto<textarea rows="3" maxlength="2000" placeholder="Objetivo, contexto o alcance del proyecto\u2026" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">${ssrInterpolate(unref(form).description)}</textarea></label><footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-xl min-h-11 px-4 py-2 text-sm text-slate-500">Cancelar</button><button type="submit"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-xl bg-sky-500 min-h-11 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">`);
      if (unref(busy)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "mr-1 inline h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`${ssrInterpolate(unref(busy) ? "Creando\u2026" : "Crear proyecto")}</button></footer></form></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-COS4sA2K.mjs.map
