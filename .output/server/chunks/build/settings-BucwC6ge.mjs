import { _ as _export_sfc, b as useRoute, m as useState, e as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, ref, watch, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, isRef, useModel, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { h as boardConfiguration, K as KANBAN_COLUMNS } from './kanban-Dgq-owKx.mjs';
import { ArrowLeft, Settings2, Users, X, Search, Archive, RotateCcw } from 'lucide-vue-next';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { u as useApi } from './useApi-B4bgMxIg.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BoardSettings",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean }
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<fieldset${ssrRenderAttrs(mergeProps({
        disabled: __props.disabled,
        class: "min-w-0 space-y-5 border-t border-slate-200 pt-5 dark:border-slate-700"
      }, _attrs))}><legend class="px-1 text-sm font-semibold">Columnas y flujo del tablero</legend><p class="text-xs text-slate-600 dark:text-slate-300">Conservamos los cinco estados y sus identificadores. Puedes cambiar nombres y l\xEDmites. Un WIP vac\xEDo no tiene l\xEDmite; cero avisa desde la primera tarjeta. El WIP no bloquea movimientos.</p><!--[-->`);
      ssrRenderList(unref(KANBAN_COLUMNS), (column) => {
        var _a;
        _push(`<div class="grid grid-cols-[minmax(0,1fr)_100px] gap-3"><label class="block text-xs">Nombre \xB7 ${ssrInterpolate(column.id)}<input${ssrRenderAttr("value", model.value.columns[column.id].label)} required maxlength="60"></label><label class="block text-xs">L\xEDmite WIP<input type="number"${ssrRenderAttr("value", (_a = model.value.columns[column.id].wip) != null ? _a : "")} min="0" max="9999" step="1" placeholder="Sin l\xEDmite"></label></div>`);
      });
      _push(`<!--]--><details><summary class="cursor-pointer py-2 text-sm font-semibold">Transiciones permitidas</summary><p class="my-2 text-xs text-slate-600 dark:text-slate-300">Filas: origen. Columnas: destino. Desmarcar impide ese cambio en el tablero, detalle y API. Reordenar dentro del mismo estado siempre est\xE1 permitido. La creaci\xF3n inicial y la sincronizaci\xF3n editorial autom\xE1tica no son transiciones.</p><div class="overflow-x-auto"><table class="w-full text-left text-xs"><caption class="sr-only">Flujo de estados del proyecto</caption><thead><tr><th scope="col" class="p-2">Desde / hacia</th><!--[-->`);
      ssrRenderList(unref(KANBAN_COLUMNS), (target) => {
        _push(`<th scope="col" class="p-2">${ssrInterpolate(model.value.columns[target.id].label)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(KANBAN_COLUMNS), (source) => {
        _push(`<tr><th scope="row" class="p-2">${ssrInterpolate(model.value.columns[source.id].label)}</th><!--[-->`);
        ssrRenderList(unref(KANBAN_COLUMNS), (target) => {
          _push(`<td class="p-2">`);
          if (source.id === target.id) {
            _push(`<span title="Reordenar siempre est\xE1 permitido">\u2713</span>`);
          } else {
            _push(`<input type="checkbox"${ssrRenderAttr("aria-label", `Permitir ${model.value.columns[source.id].label} a ${model.value.columns[target.id].label}`)}${ssrIncludeBooleanAttr(model.value.transitions[source.id].includes(target.id)) ? " checked" : ""}>`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div><button type="button"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} class="mt-3 text-xs font-semibold underline">Permitir todas las transiciones</button></details></fieldset>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/BoardSettings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const api = useApi();
    const projectContext = useState("admin-active-project", () => null);
    const base = computed(() => `kanban/projects/${route.params.project}`);
    const project = ref(null);
    watch(project, (value) => {
      projectContext.value = value ? { project: value, permissions: value.permissions } : null;
    });
    let requestEpoch = 0;
    let disposed = false;
    const loading = ref(true);
    const busy = ref(false);
    const error = ref("");
    const success = ref("");
    const conflict = ref(false);
    const form = reactive({ name: "", description: "", visibility: "private", owner_id: null });
    const boardForm = ref(boardConfiguration());
    const original = ref("");
    const dirty = computed(() => !!project.value && JSON.stringify({ form, board: boardForm.value }) !== original.value);
    function canNavigate() {
      return !busy.value && (!dirty.value || (void 0).confirm("Hay cambios de configuraci\xF3n sin guardar. \xBFQuieres descartarlos?"));
    }
    onBeforeRouteLeave(canNavigate);
    onBeforeRouteUpdate((to, from) => to.params.project === from.params.project || canNavigate());
    const candidateQuery = ref("");
    const candidates = ref([]);
    const candidateRole = ref("collaborator");
    const candidatePage = ref(1);
    const candidateLastPage = ref(1);
    const searching = ref(false);
    const searchError = ref("");
    const searched = ref(false);
    const membershipRoles = { manager: "Gestor", collaborator: "Colaborador", viewer: "Lector" };
    ref();
    const editable = computed(() => {
      var _a, _b;
      return Boolean(((_a = project.value) == null ? void 0 : _a.permissions.manage) && !((_b = project.value) == null ? void 0 : _b.archived_at));
    });
    const boardLink = computed(() => ({ path: `/admin/kanban/${route.params.project}`, query: route.query }));
    useHead(() => {
      var _a;
      return { title: `${((_a = project.value) == null ? void 0 : _a.name) || "Proyecto"} \xB7 Configuraci\xF3n \xB7 SysifosWeb` };
    });
    async function failure(cause) {
      var _a, _b, _c;
      const status = cause.statusCode || cause.status || ((_a = cause.response) == null ? void 0 : _a.status);
      conflict.value = status === 409;
      if ([403, 404].includes(status)) project.value = null;
      const fields = (_b = cause.data) == null ? void 0 : _b.errors;
      error.value = fields ? Object.values(fields).flat().join(" ") : ((_c = cause.data) == null ? void 0 : _c.message) || "No se pudo guardar. Comprueba la conexi\xF3n e int\xE9ntalo otra vez.";
    }
    function applyProject(value) {
      project.value = value;
      Object.assign(form, { name: value.name, description: value.description || "", visibility: value.visibility, owner_id: value.owner_id });
      boardForm.value = boardConfiguration(value.columns, value.transitions);
      original.value = JSON.stringify({ form, board: boardForm.value });
    }
    async function load() {
      const epoch = requestEpoch;
      loading.value = true;
      error.value = "";
      conflict.value = false;
      try {
        const response = await api.request(base.value);
        if (!disposed && epoch === requestEpoch) applyProject(response.data);
      } catch (cause) {
        if (epoch === requestEpoch) await failure(cause);
      } finally {
        if (epoch === requestEpoch) loading.value = false;
      }
    }
    const activityLabels = { project_updated: "actualiz\xF3 la configuraci\xF3n", project_archived: "archiv\xF3 el proyecto", project_restored: "recuper\xF3 el proyecto", member_updated: "actualiz\xF3 un miembro", member_removed: "retir\xF3 un miembro" };
    watch(() => route.params.project, () => {
      requestEpoch++;
      busy.value = false;
      project.value = null;
      candidates.value = [];
      success.value = "";
      load();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AdminKanbanBoardSettings = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-settings" }, _attrs))} data-v-48a2e3dc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(boardLink),
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeft), { size: 16 }, null, _parent2, _scopeId));
            _push2(` Volver al tablero`);
          } else {
            return [
              createVNode(unref(ArrowLeft), { size: 16 }),
              createTextVNode(" Volver al tablero")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header class="page-heading" data-v-48a2e3dc><div data-v-48a2e3dc><p data-v-48a2e3dc>${ssrInterpolate(((_a = unref(project)) == null ? void 0 : _a.project_key) || "Proyecto")}</p><h2 data-v-48a2e3dc>${ssrInterpolate(((_b = unref(project)) == null ? void 0 : _b.name) || "Configuraci\xF3n del proyecto")}</h2></div>`);
      if ((_c = unref(project)) == null ? void 0 : _c.archived_at) {
        _push(`<span class="tag" data-v-48a2e3dc>Archivado \xB7 Solo lectura</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (unref(project)) {
        _push(`<nav class="project-tabs" aria-label="Vistas del proyecto" data-v-48a2e3dc>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: unref(boardLink) }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Tablero y lista`);
            } else {
              return [
                createTextVNode("Tablero y lista")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span aria-current="page" data-v-48a2e3dc>Configuraci\xF3n y miembros</span></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<p role="status" class="panel" data-v-48a2e3dc>Cargando configuraci\xF3n\u2026</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div role="alert" class="message error" data-v-48a2e3dc><p data-v-48a2e3dc>${ssrInterpolate(unref(error))}</p>`);
        if (unref(conflict)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} data-v-48a2e3dc>Descartar borrador y cargar versi\xF3n actual</button>`);
        } else if (!unref(project)) {
          _push(`<button data-v-48a2e3dc>Reintentar</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<p role="status" class="message" data-v-48a2e3dc>${ssrInterpolate(unref(success))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(project) && !unref(loading)) {
        _push(`<!--[-->`);
        if (!unref(project).permissions.manage) {
          _push(`<p class="message" data-v-48a2e3dc>Puedes consultar el proyecto. Solo sus gestores pueden cambiar la configuraci\xF3n y los miembros.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="settings-grid" data-v-48a2e3dc><section class="panel" data-v-48a2e3dc><h3 data-v-48a2e3dc>`);
        _push(ssrRenderComponent(unref(Settings2), { size: 18 }, null, _parent));
        _push(` Configuraci\xF3n</h3><form data-v-48a2e3dc><fieldset${ssrIncludeBooleanAttr(!unref(editable) || unref(busy)) ? " disabled" : ""} data-v-48a2e3dc><label data-v-48a2e3dc>Nombre<input type="text"${ssrRenderAttr("value", unref(form).name)} required minlength="2" maxlength="120" data-v-48a2e3dc></label><label data-v-48a2e3dc>Clave del proyecto<input type="text"${ssrRenderAttr("value", unref(project).project_key)} readonly disabled data-v-48a2e3dc><small data-v-48a2e3dc>La clave es estable y no cambia al renombrar el proyecto.</small></label><label data-v-48a2e3dc>Descripci\xF3n<textarea rows="4" maxlength="2000" data-v-48a2e3dc>${ssrInterpolate(unref(form).description)}</textarea></label><label data-v-48a2e3dc>Responsable<select data-v-48a2e3dc>`);
        if (!unref(form).owner_id) {
          _push(`<option${ssrRenderAttr("value", null)} disabled data-v-48a2e3dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).owner_id) ? ssrLooseContain(unref(form).owner_id, null) : ssrLooseEqual(unref(form).owner_id, null)) ? " selected" : ""}>Selecciona un miembro</option>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(project).members.filter((m) => m.active), (member) => {
          _push(`<option${ssrRenderAttr("value", member.id)} data-v-48a2e3dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).owner_id) ? ssrLooseContain(unref(form).owner_id, member.id) : ssrLooseEqual(unref(form).owner_id, member.id)) ? " selected" : ""}>${ssrInterpolate(member.name)}</option>`);
        });
        _push(`<!--]--></select><small data-v-48a2e3dc>Al transferir la responsabilidad, esa persona recibe el rol de gestor.</small></label><label data-v-48a2e3dc>Acceso<select data-v-48a2e3dc><option value="private" data-v-48a2e3dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, "private") : ssrLooseEqual(unref(form).visibility, "private")) ? " selected" : ""}>Privado: miembros y administradores globales</option><option value="team" data-v-48a2e3dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, "team") : ssrLooseEqual(unref(form).visibility, "team")) ? " selected" : ""}>Equipo: tambi\xE9n administradores y editores activos</option></select></label><p class="hint" data-v-48a2e3dc>${ssrInterpolate(unref(form).visibility === "private" ? "Solo las personas incorporadas al proyecto y los administradores globales pueden consultarlo." : "Los administradores y editores activos pueden colaborar. Un rol expl\xEDcito de lector limita la edici\xF3n de los editores.")}</p>`);
        _push(ssrRenderComponent(_component_AdminKanbanBoardSettings, {
          modelValue: unref(boardForm),
          "onUpdate:modelValue": ($event) => isRef(boardForm) ? boardForm.value = $event : null,
          disabled: !unref(editable) || unref(busy)
        }, null, _parent));
        if (unref(project).permissions.manage) {
          _push(`<button class="primary" type="submit" data-v-48a2e3dc>${ssrInterpolate(unref(busy) ? "Guardando\u2026" : "Guardar configuraci\xF3n")}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</fieldset></form></section><aside class="settings-side" data-v-48a2e3dc><section class="panel" data-v-48a2e3dc><h3 data-v-48a2e3dc>`);
        _push(ssrRenderComponent(unref(Users), { size: 18 }, null, _parent));
        _push(` Miembros</h3><p class="hint" data-v-48a2e3dc>Gestor: configura el proyecto. Colaborador: trabaja en las tareas. Lector: solo consulta.</p><ul class="members" data-v-48a2e3dc><!--[-->`);
        ssrRenderList(unref(project).members, (member) => {
          _push(`<li data-v-48a2e3dc><div data-v-48a2e3dc><strong data-v-48a2e3dc>${ssrInterpolate(member.name)}</strong><small data-v-48a2e3dc>${ssrInterpolate(member.id === unref(project).owner_id ? "Responsable del proyecto" : !member.active ? "Cuenta inactiva" : membershipRoles[member.role])}</small></div>`);
          if (unref(editable)) {
            _push(`<select${ssrRenderAttr("value", member.role)}${ssrIncludeBooleanAttr(unref(busy) || member.id === unref(project).owner_id || !member.active) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Rol de ${member.name}`)} data-v-48a2e3dc><!--[-->`);
            ssrRenderList(membershipRoles, (label, role) => {
              _push(`<option${ssrRenderAttr("value", role)} data-v-48a2e3dc>${ssrInterpolate(label)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(editable) && member.id !== unref(project).owner_id) {
            _push(`<button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Retirar a ${member.name}`)} class="icon-button" data-v-48a2e3dc>`);
            _push(ssrRenderComponent(unref(X), { size: 16 }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
        if (!unref(project).members.length) {
          _push(`<p class="hint" data-v-48a2e3dc>Sin miembros expl\xEDcitos. El acceso depende de la visibilidad y de los administradores globales.</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(editable)) {
          _push(`<form class="member-search" data-v-48a2e3dc><label data-v-48a2e3dc>Incorporar un usuario existente<input type="search"${ssrRenderAttr("value", unref(candidateQuery))} minlength="2" maxlength="120" required placeholder="Nombre o correo exacto" data-v-48a2e3dc></label><button${ssrIncludeBooleanAttr(unref(searching) || unref(busy)) ? " disabled" : ""} class="secondary" data-v-48a2e3dc>`);
          _push(ssrRenderComponent(unref(Search), { size: 16 }, null, _parent));
          _push(` Buscar</button></form>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(searchError)) {
          _push(`<p role="alert" class="hint" data-v-48a2e3dc>${ssrInterpolate(unref(searchError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(searching)) {
          _push(`<p role="status" class="hint" data-v-48a2e3dc>Buscando usuarios\u2026</p>`);
        } else if (unref(searched) && !unref(candidates).length) {
          _push(`<p role="status" class="hint" data-v-48a2e3dc>No hay usuarios nuevos que incorporar con esta b\xFAsqueda.</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(candidates).length && unref(editable)) {
          _push(`<!--[--><label data-v-48a2e3dc>Rol al incorporar<select data-v-48a2e3dc><!--[-->`);
          ssrRenderList(membershipRoles, (label, role) => {
            _push(`<option${ssrRenderAttr("value", role)} data-v-48a2e3dc${ssrIncludeBooleanAttr(Array.isArray(unref(candidateRole)) ? ssrLooseContain(unref(candidateRole), role) : ssrLooseEqual(unref(candidateRole), role)) ? " selected" : ""}>${ssrInterpolate(label)}</option>`);
          });
          _push(`<!--]--></select></label><ul class="members" data-v-48a2e3dc><!--[-->`);
          ssrRenderList(unref(candidates), (candidate) => {
            _push(`<li data-v-48a2e3dc><strong data-v-48a2e3dc>${ssrInterpolate(candidate.name)}</strong><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="secondary" data-v-48a2e3dc>Incorporar</button></li>`);
          });
          _push(`<!--]--></ul>`);
          if (unref(candidateLastPage) > 1) {
            _push(`<div class="pagination" data-v-48a2e3dc><button${ssrIncludeBooleanAttr(unref(searching) || unref(candidatePage) <= 1) ? " disabled" : ""} data-v-48a2e3dc>Anterior</button><span data-v-48a2e3dc>${ssrInterpolate(unref(candidatePage))} / ${ssrInterpolate(unref(candidateLastPage))}</span><button${ssrIncludeBooleanAttr(unref(searching) || unref(candidatePage) >= unref(candidateLastPage)) ? " disabled" : ""} data-v-48a2e3dc>Siguiente</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
        if (unref(project).permissions.manage) {
          _push(`<section class="panel archive-panel" data-v-48a2e3dc><h3 data-v-48a2e3dc>`);
          _push(ssrRenderComponent(unref(Archive), { size: 18 }, null, _parent));
          _push(` ${ssrInterpolate(unref(project).archived_at ? "Recuperar proyecto" : "Archivar proyecto")}</h3><p class="hint" data-v-48a2e3dc>Archivar conserva las tareas, los miembros y el historial. El proyecto queda disponible en Archivados y no admite cambios hasta recuperarlo.</p><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="secondary" data-v-48a2e3dc>`);
          if (unref(project).archived_at) {
            _push(ssrRenderComponent(unref(RotateCcw), { size: 16 }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`${ssrInterpolate(unref(project).archived_at ? "Recuperar proyecto" : "Archivar proyecto")}</button></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</aside>`);
        if (unref(project).activity.length) {
          _push(`<section class="panel history" data-v-48a2e3dc><h3 data-v-48a2e3dc>Historial de configuraci\xF3n</h3><ul data-v-48a2e3dc><!--[-->`);
          ssrRenderList(unref(project).activity, (event) => {
            var _a2;
            _push(`<li data-v-48a2e3dc><p data-v-48a2e3dc><strong data-v-48a2e3dc>${ssrInterpolate(((_a2 = event.user) == null ? void 0 : _a2.name) || "Usuario eliminado")}</strong> ${ssrInterpolate(activityLabels[event.action])}.</p><time data-v-48a2e3dc>${ssrInterpolate(new Date(event.created_at).toLocaleString("es-CL", { timeZone: "America/Santiago" }))}</time></li>`);
          });
          _push(`<!--]--></ul></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<dialog aria-labelledby="archive-heading" data-v-48a2e3dc><form data-v-48a2e3dc><h3 id="archive-heading" data-v-48a2e3dc>${ssrInterpolate(((_d = unref(project)) == null ? void 0 : _d.archived_at) ? "Recuperar" : "Archivar")} ${ssrInterpolate((_e = unref(project)) == null ? void 0 : _e.name)}</h3><p data-v-48a2e3dc>${ssrInterpolate(((_f = unref(project)) == null ? void 0 : _f.archived_at) ? "El equipo podr\xE1 volver a trabajar en sus tareas." : "El proyecto quedar\xE1 en modo de solo lectura. Puedes recuperarlo despu\xE9s.")}</p><div class="dialog-actions" data-v-48a2e3dc><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} type="button" class="secondary" data-v-48a2e3dc>Cancelar</button><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="primary" data-v-48a2e3dc>${ssrInterpolate(unref(busy) ? "Guardando\u2026" : "Confirmar")}</button></div></form></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/projects/[project]/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48a2e3dc"]]);

export { settings as default };
//# sourceMappingURL=settings-BucwC6ge.mjs.map
