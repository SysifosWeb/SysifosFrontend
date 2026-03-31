import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { withAsyncContext, computed, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { u as useCookie } from './cookie-D3QZ8Gbb.mjs';
import { u as useFetch } from './fetch-CHFNaGwH.mjs';
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
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    const route = useRoute();
    const postId = route.params.id;
    const { data: postResponse, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}blog/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$rlVFJ3z7M1"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const post = computed(() => {
      var _a;
      return ((_a = postResponse.value) == null ? void 0 : _a.data) || postResponse.value || {};
    });
    console.log(post.value);
    const statusClass = computed(() => {
      return post.value.status === "published" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    });
    const statusText = computed(() => {
      return post.value.status === "published" ? "Publicado" : "Borrador";
    });
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-47f955c4><div class="max-w-4xl mx-auto" data-v-47f955c4><div class="mb-6" data-v-47f955c4><div class="flex items-center justify-between" data-v-47f955c4><div data-v-47f955c4><h1 class="text-2xl font-semibold text-gray-900 dark:text-white" data-v-47f955c4>${ssrInterpolate(post.value.title)}</h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-47f955c4> Visualizaci\xF3n del post </p></div><div class="flex items-center space-x-3" data-v-47f955c4>`);
      if (post.value.id) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/posts/edit?id=${post.value.id}`,
          class: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Editar `);
            } else {
              return [
                createTextVNode(" Editar ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/posts",
        class: "inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700"
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
      _push(`</div></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12" data-v-47f955c4><svg class="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-47f955c4><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-47f955c4></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-47f955c4></path></svg></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-47f955c4><div class="lg:col-span-2" data-v-47f955c4>`);
        if (post.value.featured_image_url) {
          _push(`<div class="mb-6" data-v-47f955c4><img${ssrRenderAttr("src", post.value.featured_image_url)}${ssrRenderAttr("alt", post.value.title)} class="w-full h-64 object-cover rounded-lg shadow" data-v-47f955c4></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-47f955c4><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-47f955c4><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-47f955c4> Contenido del Post </h3></div><div class="p-6" data-v-47f955c4>`);
        if (post.value.excerpt) {
          _push(`<div class="mb-6" data-v-47f955c4><h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-v-47f955c4>Extracto</h4><p class="text-gray-600 dark:text-gray-400 italic" data-v-47f955c4>${ssrInterpolate(post.value.excerpt)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="prose dark:prose-invert max-w-none" data-v-47f955c4><div data-v-47f955c4>${(_a = post.value.content) != null ? _a : ""}</div></div></div></div>`);
        if (post.value.meta_title || post.value.meta_description || post.value.meta_keywords) {
          _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow mt-6 border border-gray-100 dark:border-slate-700" data-v-47f955c4><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-47f955c4><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-47f955c4> Informaci\xF3n SEO </h3></div><div class="p-6 space-y-4" data-v-47f955c4>`);
          if (post.value.meta_title) {
            _push(`<div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Meta T\xEDtulo </label><p class="text-gray-900 dark:text-gray-100" data-v-47f955c4>${ssrInterpolate(post.value.meta_title)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (post.value.meta_description) {
            _push(`<div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Meta Descripci\xF3n </label><p class="text-gray-900 dark:text-gray-100" data-v-47f955c4>${ssrInterpolate(post.value.meta_description)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (post.value.meta_keywords && post.value.meta_keywords.length) {
            _push(`<div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Palabras Clave </label><div class="flex flex-wrap gap-2" data-v-47f955c4><!--[-->`);
            ssrRenderList(Array.isArray(post.value.meta_keywords) ? post.value.meta_keywords : post.value.meta_keywords.split(","), (keyword) => {
              _push(`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" data-v-47f955c4>${ssrInterpolate(keyword.trim())}</span>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-6" data-v-47f955c4><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-47f955c4><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-47f955c4><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-47f955c4> Informaci\xF3n </h3></div><div class="p-6 space-y-4" data-v-47f955c4><div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Estado </label><span class="${ssrRenderClass([statusClass.value, "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-47f955c4>${ssrInterpolate(statusText.value)}</span></div>`);
        if (post.value.category) {
          _push(`<div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Categor\xEDa </label><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style="${ssrRenderStyle({
            backgroundColor: post.value.category.color ? post.value.category.color + "20" : "#e5e7eb",
            color: post.value.category.color || "#374151"
          })}" data-v-47f955c4>${ssrInterpolate(post.value.category.name)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Autor </label><p class="text-gray-900 dark:text-gray-100" data-v-47f955c4>${ssrInterpolate(((_b = post.value.user) == null ? void 0 : _b.name) || "Usuario")}</p></div><div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Slug </label><code class="px-2 py-1 bg-gray-100 dark:bg-slate-900 rounded text-sm dark:text-gray-300" data-v-47f955c4> /blog/${ssrInterpolate(post.value.slug)}</code></div>`);
        if (post.value.featured) {
          _push(`<div class="flex items-center" data-v-47f955c4><svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" data-v-47f955c4><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-47f955c4></path></svg><span class="text-sm text-gray-600 dark:text-gray-400" data-v-47f955c4>Post destacado</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-47f955c4><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-47f955c4><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-47f955c4> Estad\xEDsticas </h3></div><div class="p-6 space-y-4" data-v-47f955c4><div class="text-center" data-v-47f955c4><div class="text-2xl font-bold text-blue-600 dark:text-blue-400" data-v-47f955c4>${ssrInterpolate(((_c = post.value.views) == null ? void 0 : _c.toLocaleString()) || 0)}</div><div class="text-sm text-gray-500 dark:text-gray-400" data-v-47f955c4> Visualizaciones </div></div><div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Creado </label><p class="text-sm text-gray-600 dark:text-gray-400" data-v-47f955c4>${ssrInterpolate(formatDate(post.value.created_at))}</p></div><div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Actualizado </label><p class="text-sm text-gray-600 dark:text-gray-400" data-v-47f955c4>${ssrInterpolate(formatDate(post.value.updated_at))}</p></div>`);
        if (post.value.published_at) {
          _push(`<div data-v-47f955c4><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-47f955c4> Publicado </label><p class="text-sm text-gray-600 dark:text-gray-400" data-v-47f955c4>${ssrInterpolate(formatDate(post.value.published_at))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-47f955c4><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-47f955c4><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-47f955c4> Acciones </h3></div><div class="p-6 space-y-3" data-v-47f955c4>`);
        if (post.value.slug) {
          _push(`<a${ssrRenderAttr("href", `/blog/${post.value.slug}`)} target="_blank" class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" data-v-47f955c4> Ver en el sitio <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-47f955c4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-v-47f955c4></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47f955c4"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DElhuGTz.mjs.map
