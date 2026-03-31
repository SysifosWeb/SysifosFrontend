import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { withAsyncContext, computed, reactive, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useRuntimeConfig } from './server.mjs';
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
  __name: "create",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    useRouter();
    const { data: categoriesResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}category`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$hWYqi6ICca"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      return ((_a = categoriesResponse.value) == null ? void 0 : _a.data) || [];
    });
    const form = reactive({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image: null,
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      status: "draft",
      featured: false,
      category_id: "",
      published_at: ""
    });
    const errors = ref({});
    const processing = ref(false);
    const previewImage = ref(null);
    ref(false);
    const canPublish = computed(() => {
      return form.title && form.content && form.category_id;
    });
    const excerptLength = computed(() => {
      var _a;
      return ((_a = form.excerpt) == null ? void 0 : _a.length) || 0;
    });
    const metaDescriptionLength = computed(() => {
      var _a;
      return ((_a = form.meta_description) == null ? void 0 : _a.length) || 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-4xl mx-auto"><div class="mb-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Crear Nuevo Post</h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Completa la informaci\xF3n para crear un nuevo post en el blog </p></div><div class="flex items-center space-x-3"><button${ssrIncludeBooleanAttr(processing.value || !form.title) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"></path></svg> Guardar Borrador </button><button${ssrIncludeBooleanAttr(processing.value || !canPublish.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Publicar </button></div></div></div><form class="space-y-6"><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700"><h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Informaci\xF3n B\xE1sica</h2><div class="grid grid-cols-1 gap-6"><div><label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> T\xEDtulo * </label><input id="title"${ssrRenderAttr("value", form.title)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa el t\xEDtulo del post">`);
      if (errors.value.title) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(errors.value.title[0] || errors.value.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="slug" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Slug (URL amigable) </label><div class="mt-1 flex rounded-md shadow-sm"><span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-500 dark:text-gray-300 text-sm"> /blog/ </span><input id="slug"${ssrRenderAttr("value", form.slug)} type="text" class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" placeholder="se-genera-automaticamente"></div><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> Se genera autom\xE1ticamente si se deja vac\xEDo </p>`);
      if (errors.value.slug) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(errors.value.slug[0] || errors.value.slug)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="category_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Categor\xEDa * </label><select id="category_id" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.category_id) ? ssrLooseContain(form.category_id, "") : ssrLooseEqual(form.category_id, "")) ? " selected" : ""}>Selecciona una categor\xEDa</option><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(form.category_id) ? ssrLooseContain(form.category_id, category.id) : ssrLooseEqual(form.category_id, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (errors.value.category_id) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(errors.value.category_id[0] || errors.value.category_id)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="excerpt" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Extracto <span class="text-gray-500 dark:text-gray-400 font-normal">(${ssrInterpolate(excerptLength.value)}/500)</span></label><textarea id="excerpt" rows="3" maxlength="500" class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Breve descripci\xF3n del post...">${ssrInterpolate(form.excerpt)}</textarea><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> Resumen corto que aparecer\xE1 en las listas de posts </p>`);
      if (errors.value.excerpt) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(errors.value.excerpt[0] || errors.value.excerpt)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700"><h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Contenido</h2><div><label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Contenido del Post * </label><textarea id="content" rows="15" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Escribe aqu\xED el contenido completo del post...">${ssrInterpolate(form.content)}</textarea><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> Puedes usar HTML para dar formato </p>`);
      if (errors.value.content) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(errors.value.content[0] || errors.value.content)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700"><h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Imagen Destacada</h2><div class="space-y-4">`);
      if (!previewImage.value) {
        _push(`<div class="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-6"><div class="text-center"><svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="mt-4"><label for="featured_image" class="cursor-pointer"><span class="mt-2 block text-sm font-medium text-gray-900 dark:text-white text-blue-600 hover:text-blue-500 transition-colors"> Selecciona una imagen </span><input id="featured_image" type="file" accept="image/*" class="sr-only"></label><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">PNG, JPG, GIF hasta 2MB</p></div></div></div>`);
      } else {
        _push(`<div class="relative"><img${ssrRenderAttr("src", previewImage.value)} alt="Preview" class="w-full h-64 object-cover rounded-lg"><button type="button" class="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
      }
      if (errors.value.featured_image) {
        _push(`<p class="text-sm text-red-600">${ssrInterpolate(errors.value.featured_image[0] || errors.value.featured_image)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700"><h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Configuraci\xF3n</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="space-y-4"><h3 class="text-sm font-medium text-gray-900 dark:text-white">Opciones de Publicaci\xF3n</h3><div class="flex items-center"><input id="featured"${ssrIncludeBooleanAttr(Array.isArray(form.featured) ? ssrLooseContain(form.featured, null) : form.featured) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 dark:bg-slate-900 rounded"><label for="featured" class="ml-2 block text-sm text-gray-900 dark:text-gray-300"> Marcar como post destacado </label></div><div><label for="published_at" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Fecha de publicaci\xF3n </label><input id="published_at"${ssrRenderAttr("value", form.published_at)} type="datetime-local" class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> Deja vac\xEDo para publicar inmediatamente </p></div></div><div class="space-y-4"><h3 class="text-sm font-medium text-gray-900 dark:text-white">SEO</h3><div><label for="meta_title" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Meta t\xEDtulo </label><input id="meta_title"${ssrRenderAttr("value", form.meta_title)} type="text" maxlength="255" class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="T\xEDtulo para motores de b\xFAsqueda"><button type="button" class="mt-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 block"> Usar t\xEDtulo del post </button></div><div><label for="meta_description" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Meta descripci\xF3n <span class="text-gray-500 dark:text-gray-400 font-normal">(${ssrInterpolate(metaDescriptionLength.value)}/500)</span></label><textarea id="meta_description" rows="3" maxlength="500" class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Descripci\xF3n para motores de b\xFAsqueda">${ssrInterpolate(form.meta_description)}</textarea><button type="button" class="mt-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 block"> Usar extracto </button></div><div><label for="meta_keywords" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Palabras clave </label><input id="meta_keywords"${ssrRenderAttr("value", form.meta_keywords)} type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="palabra1, palabra2, palabra3"><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> Separa las palabras con comas </p></div></div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700"><div class="flex flex-col sm:flex-row items-center justify-between"><div class="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0"> * Campos obligatorios </div><div class="flex items-center space-x-3 w-full sm:w-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/posts",
        class: "inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
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
      _push(`<button type="button"${ssrIncludeBooleanAttr(processing.value || !form.title) ? " disabled" : ""} class="inline-flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 w-full sm:w-auto">`);
      if (processing.value) {
        _push(`<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Guardar Borrador </button><button type="button"${ssrIncludeBooleanAttr(processing.value || !canPublish.value) ? " disabled" : ""} class="inline-flex justify-center items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 w-full sm:w-auto">`);
      if (processing.value) {
        _push(`<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Publicar Post </button></div></div></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-D6UblB9C.mjs.map
