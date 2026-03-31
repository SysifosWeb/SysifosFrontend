import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useCookie } from './cookie-D3QZ8Gbb.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import './server.mjs';

const _sfc_main = {
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    useCookie("auth_token");
    const loading = ref(false);
    const fetching = ref(true);
    const errors = ref({});
    const form = ref({
      name: "",
      slug: "",
      description: "",
      color: "#3B82F6",
      active: true,
      sort_order: 0
    });
    route.query.id;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto" }, _attrs))}><div class="mb-6 flex items-center justify-between"><div><h1 class="text-2xl font-semibold text-gray-900 dark:text-white"> Editar Categor\xEDa </h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Modifica los campos que necesites actualizar </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/categories",
        class: "inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Volver `);
          } else {
            return [
              createTextVNode(" Volver ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (fetching.value) {
        _push(`<div class="flex justify-center py-12"><svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700 overflow-hidden"><form class="p-6 space-y-6"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label><input${ssrRenderAttr("value", form.value.name)} type="text" required class="${ssrRenderClass([{ "border-red-500 focus:border-red-500 focus:ring-red-500": errors.value.name }, "w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"])}">`);
        if (errors.value.name) {
          _push(`<p class="mt-1 text-sm text-red-600 dark:text-red-400">${ssrInterpolate(errors.value.name[0])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Slug (URL)</label><input${ssrRenderAttr("value", form.value.slug)} type="text" required class="${ssrRenderClass([{ "border-red-500 focus:border-red-500 focus:ring-red-500": errors.value.slug }, "w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"])}"><p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Se usar\xE1 en la URL: /blog/categoria/{slug} </p>`);
        if (errors.value.slug) {
          _push(`<p class="mt-1 text-sm text-red-600 dark:text-red-400">${ssrInterpolate(errors.value.slug[0])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descripci\xF3n</label><textarea rows="3" class="${ssrRenderClass([{ "border-red-500 focus:border-red-500 focus:ring-red-500": errors.value.description }, "w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"])}">${ssrInterpolate(form.value.description)}</textarea>`);
        if (errors.value.description) {
          _push(`<p class="mt-1 text-sm text-red-600 dark:text-red-400">${ssrInterpolate(errors.value.description[0])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Color representativo</label><div class="flex items-center space-x-3"><input${ssrRenderAttr("value", form.value.color)} type="color" class="h-10 w-20 rounded border border-gray-300 dark:border-slate-600 cursor-pointer p-0"><span class="text-sm font-mono text-gray-600 dark:text-gray-400">${ssrInterpolate(form.value.color)}</span></div>`);
        if (errors.value.color) {
          _push(`<p class="mt-1 text-sm text-red-600 dark:text-red-400">${ssrInterpolate(errors.value.color[0])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Orden</label><input${ssrRenderAttr("value", form.value.sort_order)} type="number" min="0" required class="${ssrRenderClass([{ "border-red-500 focus:border-red-500 focus:ring-red-500": errors.value.sort_order }, "w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"])}">`);
        if (errors.value.sort_order) {
          _push(`<p class="mt-1 text-sm text-red-600 dark:text-red-400">${ssrInterpolate(errors.value.sort_order[0])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center pt-6"><label class="flex items-center cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(form.value.active) ? ssrLooseContain(form.value.active, null) : form.value.active) ? " checked" : ""} type="checkbox" class="h-5 w-5 rounded border-gray-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900"><span class="ml-2 text-sm text-gray-700 dark:text-gray-300"> Categor\xEDa activa </span></label></div></div><div class="pt-4 flex justify-end"><button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">`);
        if (loading.value) {
          _push(`<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(` Guardar Cambios </button></div></form></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-DGMPNrQy.mjs.map
