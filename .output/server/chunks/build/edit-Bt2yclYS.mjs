import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { withAsyncContext, computed, reactive, ref, watch, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
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
  __name: "edit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    useRouter();
    const route = useRoute();
    const postId = route.query.id;
    const { data: postResponse, pending: postPending, refresh: refreshPost } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}blog/${postId}`,
      {
        key: `post-edit-${postId}`,
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        },
        getCachedData: () => null
        // deshabilitar caché, siempre fetch fresco
      },
      "$HAB0OabpAP"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: categoriesResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}category`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$qldZmM2Ki4"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const post = computed(() => {
      var _a;
      return ((_a = postResponse.value) == null ? void 0 : _a.data) || postResponse.value || {};
    });
    const categories = computed(() => {
      var _a;
      return ((_a = categoriesResponse.value) == null ? void 0 : _a.data) || [];
    });
    const form = reactive({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category_id: "",
      featured_image_url: "",
      // using the user's string-based featured_image_url from their provided edit.vue
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      status: "draft",
      featured: false,
      published_at: null
    });
    const errors = ref({});
    const processing = ref(false);
    watch(post, (newPost) => {
      if (newPost && Object.keys(newPost).length > 0) {
        form.title = newPost.title || "";
        form.slug = newPost.slug || "";
        form.excerpt = newPost.excerpt || "";
        form.content = newPost.content || "";
        form.category_id = newPost.category_id ? Number(newPost.category_id) : "";
        form.featured_image_url = newPost.featured_image_url || "";
        form.meta_title = newPost.meta_title || "";
        form.meta_description = newPost.meta_description || "";
        form.meta_keywords = Array.isArray(newPost.meta_keywords) ? newPost.meta_keywords.join(", ") : newPost.meta_keywords || "";
        form.status = newPost.status || "draft";
        form.featured = newPost.featured || false;
        form.published_at = newPost.published_at ? new Date(newPost.published_at).toISOString().slice(0, 16) : null;
      }
    }, { immediate: true });
    const generateSlug = (title) => {
      return title.toLowerCase().replace(/[áàäâ]/g, "a").replace(/[éèëê]/g, "e").replace(/[íìïî]/g, "i").replace(/[óòöô]/g, "o").replace(/[úùüû]/g, "u").replace(/[ñ]/g, "n").replace(/[ç]/g, "c").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim("-");
    };
    watch(() => form.title, (newTitle) => {
      if (newTitle && !form.slug && (!post.value || post.value.title !== newTitle)) {
        form.slug = generateSlug(newTitle);
      }
    });
    const statusOptions = [
      { value: "draft", label: "Borrador" },
      { value: "published", label: "Publicado" }
    ];
    computed(() => form.status === "published");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d45d8c55><div class="max-w-4xl mx-auto" data-v-d45d8c55><div class="mb-6" data-v-d45d8c55><div class="flex items-center justify-between" data-v-d45d8c55><div data-v-d45d8c55><h1 class="text-2xl font-semibold text-gray-900 dark:text-white" data-v-d45d8c55> Editar Post </h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-d45d8c55> Modifica la informaci\xF3n del post </p></div><div class="flex items-center space-x-3" data-v-d45d8c55>`);
      if (unref(postId)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/posts/${unref(postId)}`,
          class: "inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ver Post `);
            } else {
              return [
                createTextVNode(" Ver Post ")
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
            _push2(` Cancelar `);
          } else {
            return [
              createTextVNode(" Cancelar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (unref(postPending)) {
        _push(`<div class="flex justify-center my-12" data-v-d45d8c55><svg class="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-d45d8c55><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-d45d8c55></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-d45d8c55></path></svg></div>`);
      } else {
        _push(`<form class="space-y-6" data-v-d45d8c55><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-d45d8c55><div class="lg:col-span-2 space-y-6" data-v-d45d8c55><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-d45d8c55><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-d45d8c55><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-d45d8c55> Informaci\xF3n Principal </h3></div><div class="p-6 space-y-6" data-v-d45d8c55><div data-v-d45d8c55><label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> T\xEDtulo * </label><input id="title"${ssrRenderAttr("value", form.title)} type="text" required class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="T\xEDtulo del post" data-v-d45d8c55>`);
        if (errors.value.title) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.title[0] || errors.value.title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="slug" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Slug * </label><input id="slug"${ssrRenderAttr("value", form.slug)} type="text" required class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="slug-del-post" data-v-d45d8c55><p class="mt-1 text-sm text-gray-500 dark:text-gray-400" data-v-d45d8c55> URL: /blog/${ssrInterpolate(form.slug)}</p>`);
        if (errors.value.slug) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.slug[0] || errors.value.slug)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="excerpt" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Extracto </label><textarea id="excerpt" rows="3" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Breve descripci\xF3n del post..." data-v-d45d8c55>${ssrInterpolate(form.excerpt)}</textarea>`);
        if (errors.value.excerpt) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.excerpt[0] || errors.value.excerpt)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Contenido * </label><textarea id="content" rows="12" required class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Escribe el contenido del post aqu\xED..." data-v-d45d8c55>${ssrInterpolate(form.content)}</textarea>`);
        if (errors.value.content) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.content[0] || errors.value.content)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-d45d8c55><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-d45d8c55><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-d45d8c55> Optimizaci\xF3n SEO </h3></div><div class="p-6 space-y-6" data-v-d45d8c55><div data-v-d45d8c55><label for="meta_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Meta T\xEDtulo </label><input id="meta_title"${ssrRenderAttr("value", form.meta_title)} type="text" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="T\xEDtulo para SEO (opcional)" data-v-d45d8c55>`);
        if (errors.value.meta_title) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.meta_title[0] || errors.value.meta_title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="meta_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Meta Descripci\xF3n </label><textarea id="meta_description" rows="3" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Descripci\xF3n para motores de b\xFAsqueda..." data-v-d45d8c55>${ssrInterpolate(form.meta_description)}</textarea>`);
        if (errors.value.meta_description) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.meta_description[0] || errors.value.meta_description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="meta_keywords" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Palabras Clave </label><input id="meta_keywords"${ssrRenderAttr("value", form.meta_keywords)} type="text" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="palabra1, palabra2, palabra3" data-v-d45d8c55><p class="mt-1 text-sm text-gray-500 dark:text-gray-400" data-v-d45d8c55> Separa las palabras con comas </p>`);
        if (errors.value.meta_keywords) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.meta_keywords[0] || errors.value.meta_keywords)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div><div class="space-y-6" data-v-d45d8c55><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-d45d8c55><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-d45d8c55><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-d45d8c55> Configuraci\xF3n </h3></div><div class="p-6 space-y-6" data-v-d45d8c55><div data-v-d45d8c55><label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Estado </label><select id="status" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" data-v-d45d8c55><!--[-->`);
        ssrRenderList(statusOptions, (option) => {
          _push(`<option${ssrRenderAttr("value", option.value)} data-v-d45d8c55${ssrIncludeBooleanAttr(Array.isArray(form.status) ? ssrLooseContain(form.status, option.value) : ssrLooseEqual(form.status, option.value)) ? " selected" : ""}>${ssrInterpolate(option.label)}</option>`);
        });
        _push(`<!--]--></select>`);
        if (errors.value.status) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.status[0] || errors.value.status)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="category_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Categor\xEDa </label><select id="category_id" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" data-v-d45d8c55><option value="" data-v-d45d8c55${ssrIncludeBooleanAttr(Array.isArray(form.category_id) ? ssrLooseContain(form.category_id, "") : ssrLooseEqual(form.category_id, "")) ? " selected" : ""}>Sin categor\xEDa</option><!--[-->`);
        ssrRenderList(categories.value, (category) => {
          _push(`<option${ssrRenderAttr("value", category.id)} data-v-d45d8c55${ssrIncludeBooleanAttr(Array.isArray(form.category_id) ? ssrLooseContain(form.category_id, category.id) : ssrLooseEqual(form.category_id, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]--></select>`);
        if (errors.value.category_id) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.category_id[0] || errors.value.category_id)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-d45d8c55><label for="featured_image_url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" data-v-d45d8c55> Imagen Destacada (URL) </label><input id="featured_image_url"${ssrRenderAttr("value", form.featured_image_url)} type="url" class="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://ejemplo.com/imagen.jpg" data-v-d45d8c55>`);
        if (errors.value.featured_image_url) {
          _push(`<div class="mt-1 text-sm text-red-600" data-v-d45d8c55>${ssrInterpolate(errors.value.featured_image_url[0] || errors.value.featured_image_url)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center" data-v-d45d8c55><input id="featured"${ssrIncludeBooleanAttr(Array.isArray(form.featured) ? ssrLooseContain(form.featured, null) : form.featured) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-slate-600 dark:bg-slate-900 rounded" data-v-d45d8c55><label for="featured" class="ml-2 block text-sm text-gray-900 dark:text-gray-300" data-v-d45d8c55> Post destacado </label></div></div></div>`);
        if (form.featured_image_url) {
          _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-d45d8c55><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-d45d8c55><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-d45d8c55> Vista Previa </h3></div><div class="p-6" data-v-d45d8c55><img${ssrRenderAttr("src", form.featured_image_url)}${ssrRenderAttr("alt", form.title)} class="w-full h-32 object-cover rounded-lg" data-v-d45d8c55></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-d45d8c55><div class="p-6" data-v-d45d8c55><button type="submit"${ssrIncludeBooleanAttr(processing.value) ? " disabled" : ""} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" data-v-d45d8c55>`);
        if (processing.value) {
          _push(`<span data-v-d45d8c55>Actualizando...</span>`);
        } else {
          _push(`<span data-v-d45d8c55>Actualizar Post</span>`);
        }
        _push(`</button></div></div></div></div></form>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d45d8c55"]]);

export { edit as default };
//# sourceMappingURL=edit-Bt2yclYS.mjs.map
