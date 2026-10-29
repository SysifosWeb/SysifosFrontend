import { _ as _export_sfc, b as useRoute, m as useState, e as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, ref, watch, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { ArrowLeft, Settings2, Users, X, Search, Archive, RotateCcw } from 'lucide-vue-next';
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
import 'vue-router';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-settings" }, _attrs))} data-v-9ede5498>`);
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
      _push(`<header class="page-heading" data-v-9ede5498><div data-v-9ede5498><p data-v-9ede5498>${ssrInterpolate(((_a = unref(project)) == null ? void 0 : _a.project_key) || "Proyecto")}</p><h2 data-v-9ede5498>${ssrInterpolate(((_b = unref(project)) == null ? void 0 : _b.name) || "Configuraci\xF3n del proyecto")}</h2></div>`);
      if ((_c = unref(project)) == null ? void 0 : _c.archived_at) {
        _push(`<span class="tag" data-v-9ede5498>Archivado \xB7 Solo lectura</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (unref(project)) {
        _push(`<nav class="project-tabs" aria-label="Vistas del proyecto" data-v-9ede5498>`);
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
        _push(`<span aria-current="page" data-v-9ede5498>Configuraci\xF3n y miembros</span></nav>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<p role="status" class="panel" data-v-9ede5498>Cargando configuraci\xF3n\u2026</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div role="alert" class="message error" data-v-9ede5498><p data-v-9ede5498>${ssrInterpolate(unref(error))}</p>`);
        if (unref(conflict)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} data-v-9ede5498>Descartar borrador y cargar versi\xF3n actual</button>`);
        } else if (!unref(project)) {
          _push(`<button data-v-9ede5498>Reintentar</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<p role="status" class="message" data-v-9ede5498>${ssrInterpolate(unref(success))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(project) && !unref(loading)) {
        _push(`<!--[-->`);
        if (!unref(project).permissions.manage) {
          _push(`<p class="message" data-v-9ede5498>Puedes consultar el proyecto. Solo sus gestores pueden cambiar la configuraci\xF3n y los miembros.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="settings-grid" data-v-9ede5498><section class="panel" data-v-9ede5498><h3 data-v-9ede5498>`);
        _push(ssrRenderComponent(unref(Settings2), { size: 18 }, null, _parent));
        _push(` Configuraci\xF3n</h3><form data-v-9ede5498><fieldset${ssrIncludeBooleanAttr(!unref(editable) || unref(busy)) ? " disabled" : ""} data-v-9ede5498><label data-v-9ede5498>Nombre<input type="text"${ssrRenderAttr("value", unref(form).name)} required minlength="2" maxlength="120" data-v-9ede5498></label><label data-v-9ede5498>Clave del proyecto<input type="text"${ssrRenderAttr("value", unref(project).project_key)} readonly disabled data-v-9ede5498><small data-v-9ede5498>La clave es estable y no cambia al renombrar el proyecto.</small></label><label data-v-9ede5498>Descripci\xF3n<textarea rows="4" maxlength="2000" data-v-9ede5498>${ssrInterpolate(unref(form).description)}</textarea></label><label data-v-9ede5498>Responsable<select data-v-9ede5498>`);
        if (!unref(form).owner_id) {
          _push(`<option${ssrRenderAttr("value", null)} disabled data-v-9ede5498${ssrIncludeBooleanAttr(Array.isArray(unref(form).owner_id) ? ssrLooseContain(unref(form).owner_id, null) : ssrLooseEqual(unref(form).owner_id, null)) ? " selected" : ""}>Selecciona un miembro</option>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(project).members.filter((m) => m.active), (member) => {
          _push(`<option${ssrRenderAttr("value", member.id)} data-v-9ede5498${ssrIncludeBooleanAttr(Array.isArray(unref(form).owner_id) ? ssrLooseContain(unref(form).owner_id, member.id) : ssrLooseEqual(unref(form).owner_id, member.id)) ? " selected" : ""}>${ssrInterpolate(member.name)}</option>`);
        });
        _push(`<!--]--></select><small data-v-9ede5498>Al transferir la responsabilidad, esa persona recibe el rol de gestor.</small></label><label data-v-9ede5498>Acceso<select data-v-9ede5498><option value="private" data-v-9ede5498${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, "private") : ssrLooseEqual(unref(form).visibility, "private")) ? " selected" : ""}>Privado: miembros y administradores globales</option><option value="team" data-v-9ede5498${ssrIncludeBooleanAttr(Array.isArray(unref(form).visibility) ? ssrLooseContain(unref(form).visibility, "team") : ssrLooseEqual(unref(form).visibility, "team")) ? " selected" : ""}>Equipo: tambi\xE9n administradores y editores activos</option></select></label><p class="hint" data-v-9ede5498>${ssrInterpolate(unref(form).visibility === "private" ? "Solo las personas incorporadas al proyecto y los administradores globales pueden consultarlo." : "Los administradores y editores activos pueden colaborar. Un rol expl\xEDcito de lector limita la edici\xF3n de los editores.")}</p>`);
        if (unref(project).permissions.manage) {
          _push(`<button class="primary" type="submit" data-v-9ede5498>${ssrInterpolate(unref(busy) ? "Guardando\u2026" : "Guardar configuraci\xF3n")}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</fieldset></form></section><aside class="settings-side" data-v-9ede5498><section class="panel" data-v-9ede5498><h3 data-v-9ede5498>`);
        _push(ssrRenderComponent(unref(Users), { size: 18 }, null, _parent));
        _push(` Miembros</h3><p class="hint" data-v-9ede5498>Gestor: configura el proyecto. Colaborador: trabaja en las tareas. Lector: solo consulta.</p><ul class="members" data-v-9ede5498><!--[-->`);
        ssrRenderList(unref(project).members, (member) => {
          _push(`<li data-v-9ede5498><div data-v-9ede5498><strong data-v-9ede5498>${ssrInterpolate(member.name)}</strong><small data-v-9ede5498>${ssrInterpolate(member.id === unref(project).owner_id ? "Responsable del proyecto" : !member.active ? "Cuenta inactiva" : membershipRoles[member.role])}</small></div>`);
          if (unref(editable)) {
            _push(`<select${ssrRenderAttr("value", member.role)}${ssrIncludeBooleanAttr(unref(busy) || member.id === unref(project).owner_id || !member.active) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Rol de ${member.name}`)} data-v-9ede5498><!--[-->`);
            ssrRenderList(membershipRoles, (label, role) => {
              _push(`<option${ssrRenderAttr("value", role)} data-v-9ede5498>${ssrInterpolate(label)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(editable) && member.id !== unref(project).owner_id) {
            _push(`<button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Retirar a ${member.name}`)} class="icon-button" data-v-9ede5498>`);
            _push(ssrRenderComponent(unref(X), { size: 16 }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
        if (!unref(project).members.length) {
          _push(`<p class="hint" data-v-9ede5498>Sin miembros expl\xEDcitos. El acceso depende de la visibilidad y de los administradores globales.</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(editable)) {
          _push(`<form class="member-search" data-v-9ede5498><label data-v-9ede5498>Incorporar un usuario existente<input type="search"${ssrRenderAttr("value", unref(candidateQuery))} minlength="2" maxlength="120" required placeholder="Nombre o correo exacto" data-v-9ede5498></label><button${ssrIncludeBooleanAttr(unref(searching) || unref(busy)) ? " disabled" : ""} class="secondary" data-v-9ede5498>`);
          _push(ssrRenderComponent(unref(Search), { size: 16 }, null, _parent));
          _push(` Buscar</button></form>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(searchError)) {
          _push(`<p role="alert" class="hint" data-v-9ede5498>${ssrInterpolate(unref(searchError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(searching)) {
          _push(`<p role="status" class="hint" data-v-9ede5498>Buscando usuarios\u2026</p>`);
        } else if (unref(searched) && !unref(candidates).length) {
          _push(`<p role="status" class="hint" data-v-9ede5498>No hay usuarios nuevos que incorporar con esta b\xFAsqueda.</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(candidates).length && unref(editable)) {
          _push(`<!--[--><label data-v-9ede5498>Rol al incorporar<select data-v-9ede5498><!--[-->`);
          ssrRenderList(membershipRoles, (label, role) => {
            _push(`<option${ssrRenderAttr("value", role)} data-v-9ede5498${ssrIncludeBooleanAttr(Array.isArray(unref(candidateRole)) ? ssrLooseContain(unref(candidateRole), role) : ssrLooseEqual(unref(candidateRole), role)) ? " selected" : ""}>${ssrInterpolate(label)}</option>`);
          });
          _push(`<!--]--></select></label><ul class="members" data-v-9ede5498><!--[-->`);
          ssrRenderList(unref(candidates), (candidate) => {
            _push(`<li data-v-9ede5498><strong data-v-9ede5498>${ssrInterpolate(candidate.name)}</strong><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="secondary" data-v-9ede5498>Incorporar</button></li>`);
          });
          _push(`<!--]--></ul>`);
          if (unref(candidateLastPage) > 1) {
            _push(`<div class="pagination" data-v-9ede5498><button${ssrIncludeBooleanAttr(unref(searching) || unref(candidatePage) <= 1) ? " disabled" : ""} data-v-9ede5498>Anterior</button><span data-v-9ede5498>${ssrInterpolate(unref(candidatePage))} / ${ssrInterpolate(unref(candidateLastPage))}</span><button${ssrIncludeBooleanAttr(unref(searching) || unref(candidatePage) >= unref(candidateLastPage)) ? " disabled" : ""} data-v-9ede5498>Siguiente</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
        if (unref(project).permissions.manage) {
          _push(`<section class="panel archive-panel" data-v-9ede5498><h3 data-v-9ede5498>`);
          _push(ssrRenderComponent(unref(Archive), { size: 18 }, null, _parent));
          _push(` ${ssrInterpolate(unref(project).archived_at ? "Recuperar proyecto" : "Archivar proyecto")}</h3><p class="hint" data-v-9ede5498>Archivar conserva las tareas, los miembros y el historial. El proyecto queda disponible en Archivados y no admite cambios hasta recuperarlo.</p><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="secondary" data-v-9ede5498>`);
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
          _push(`<section class="panel history" data-v-9ede5498><h3 data-v-9ede5498>Historial de configuraci\xF3n</h3><ul data-v-9ede5498><!--[-->`);
          ssrRenderList(unref(project).activity, (event) => {
            var _a2;
            _push(`<li data-v-9ede5498><p data-v-9ede5498><strong data-v-9ede5498>${ssrInterpolate(((_a2 = event.user) == null ? void 0 : _a2.name) || "Usuario eliminado")}</strong> ${ssrInterpolate(activityLabels[event.action])}.</p><time data-v-9ede5498>${ssrInterpolate(new Date(event.created_at).toLocaleString("es-CL", { timeZone: "America/Santiago" }))}</time></li>`);
          });
          _push(`<!--]--></ul></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<dialog aria-labelledby="archive-heading" data-v-9ede5498><form data-v-9ede5498><h3 id="archive-heading" data-v-9ede5498>${ssrInterpolate(((_d = unref(project)) == null ? void 0 : _d.archived_at) ? "Recuperar" : "Archivar")} ${ssrInterpolate((_e = unref(project)) == null ? void 0 : _e.name)}</h3><p data-v-9ede5498>${ssrInterpolate(((_f = unref(project)) == null ? void 0 : _f.archived_at) ? "El equipo podr\xE1 volver a trabajar en sus tareas." : "El proyecto quedar\xE1 en modo de solo lectura. Puedes recuperarlo despu\xE9s.")}</p><div class="dialog-actions" data-v-9ede5498><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} type="button" class="secondary" data-v-9ede5498>Cancelar</button><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="primary" data-v-9ede5498>${ssrInterpolate(unref(busy) ? "Guardando\u2026" : "Confirmar")}</button></div></form></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/projects/[project]/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ede5498"]]);

export { settings as default };
//# sourceMappingURL=settings-DdegDTXo.mjs.map
