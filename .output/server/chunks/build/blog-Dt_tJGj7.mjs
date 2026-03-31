import { H as Head, T as Title, M as Meta } from './components-Bj0Uoy77.mjs';
import { _ as _sfc_main$1 } from './Hero-BSvxdtqE.mjs';
import { ref, withAsyncContext, computed, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-CHFNaGwH.mjs';
import './v3-5QZ-FU-s.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const config = useRuntimeConfig();
    const { data: postsResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}blog`,
      {
        query: {
          per_page: 100,
          // Ajustar según necesidad
          status: "published"
        }
      },
      "$WiMfC8pHRf"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: categoriesResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}category`,
      "$X5uxFzG32_"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a;
      return ((_a = postsResponse.value) == null ? void 0 : _a.data) ? postsResponse.value : { data: [], links: [] };
    });
    const categories = computed(() => categoriesResponse.value || []);
    const allCategories = computed(() => {
      var _a, _b;
      if (!categories.value || !Array.isArray(categories.value)) {
        return [{ id: "all", name: "Todos", count: 0 }];
      }
      const backendCategories = categories.value.map((cat) => ({
        id: cat.slug,
        name: cat.name,
        count: cat.posts_count || 0
      }));
      const totalCount = ((_a = posts.value) == null ? void 0 : _a.total) || (((_b = posts.value) == null ? void 0 : _b.data) ? posts.value.data.length : 0);
      return [
        { id: "all", name: "Todos", count: totalCount },
        ...backendCategories
      ];
    });
    const allPosts = computed(() => {
      if (!posts.value) return [];
      return posts.value.data || posts.value || [];
    });
    const filteredPosts = computed(() => {
      let blogPosts = allPosts.value;
      if (selectedCategory.value !== "all") {
        blogPosts = blogPosts.filter((post) => {
          var _a;
          return ((_a = post.category) == null ? void 0 : _a.slug) === selectedCategory.value;
        });
      }
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        blogPosts = blogPosts.filter(
          (post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.content && post.content.toLowerCase().includes(query)
        );
      }
      return blogPosts;
    });
    const featuredPosts = computed(() => allPosts.value.filter((p) => p.featured));
    const featuredPost = computed(() => {
      if (!featuredPosts.value || featuredPosts.value.length === 0) {
        return null;
      }
      return featuredPosts.value[0];
    });
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("es-ES", options);
    };
    const getPostUrl = (post) => {
      return `/blog/${post.slug}`;
    };
    const getImageUrl = (post) => {
      return post.featured_image || "/img/blog-default.jpg";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Hero = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Blog - Art\xEDculos sobre Desarrollo Web | SysifosWeb`);
                } else {
                  return [
                    createTextVNode("Blog - Art\xEDculos sobre Desarrollo Web | SysifosWeb")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Lee nuestros art\xEDculos sobre desarrollo web, programaci\xF3n y tecnolog\xEDa."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Blog - Art\xEDculos sobre Desarrollo Web | SysifosWeb")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Lee nuestros art\xEDculos sobre desarrollo web, programaci\xF3n y tecnolog\xEDa."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Hero, {
        title: "Blog",
        description: "Art\xEDculos, tutoriales y novedades sobre desarrollo web y tecnolog\xEDa"
      }, null, _parent));
      _push(`<section class="py-8 bg-gray-50 border-b"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-6 items-center justify-between"><div class="relative flex-1 max-w-md"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Buscar art\xEDculos..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></div><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(allCategories), (category) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
          unref(selectedCategory) === category.id ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
        ])}">${ssrInterpolate(category.name)} (${ssrInterpolate(category.count)}) </button>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      if (unref(featuredPost) && unref(selectedCategory) === "all" && !unref(searchQuery)) {
        _push(`<section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl font-bold text-gray-900 mb-4">Art\xEDculo Destacado</h2></div><div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-xl"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12"><div><div class="flex items-center gap-4 mb-4"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"> Destacado </span><span class="text-gray-500 text-sm">${ssrInterpolate(formatDate(unref(featuredPost).published_at || unref(featuredPost).created_at))}</span></div><h3 class="text-3xl font-bold text-gray-900 mb-4">${ssrInterpolate(unref(featuredPost).title)}</h3><p class="text-gray-600 text-lg mb-6">${ssrInterpolate(unref(featuredPost).excerpt)}</p><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"><span class="text-white font-semibold text-sm">${ssrInterpolate(((_a = unref(featuredPost).user) == null ? void 0 : _a.name) ? unref(featuredPost).user.name.split(" ").map((n) => n[0]).join("") : "A")}</span></div><div><p class="font-semibold text-gray-900">${ssrInterpolate(((_b = unref(featuredPost).user) == null ? void 0 : _b.name) || "Autor")}</p><p class="text-gray-500 text-sm">${ssrInterpolate(unref(featuredPost).reading_time || "5 min de lectura")}</p></div></div><a${ssrRenderAttr("href", getPostUrl(unref(featuredPost)))} class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"> Leer Art\xEDculo </a></div></div><div class="relative"><img${ssrRenderAttr("src", getImageUrl(unref(featuredPost)))}${ssrRenderAttr("alt", unref(featuredPost).title)} class="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"><div class="absolute top-4 right-4"><div class="flex flex-wrap gap-2">`);
        if (unref(featuredPost).category) {
          _push(`<span class="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">${ssrInterpolate(unref(featuredPost).category.name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between mb-12"><h2 class="text-3xl font-bold text-gray-900">${ssrInterpolate(unref(selectedCategory) === "all" ? "\xDAltimos Art\xEDculos" : (_c = unref(allCategories).find((c) => c.id === unref(selectedCategory))) == null ? void 0 : _c.name)}</h2><p class="text-gray-600">${ssrInterpolate(unref(filteredPosts).length)} art\xEDculo${ssrInterpolate(unref(filteredPosts).length !== 1 ? "s" : "")} encontrado${ssrInterpolate(unref(filteredPosts).length !== 1 ? "s" : "")}</p></div>`);
      if (unref(filteredPosts).length > 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"><!--[-->`);
        ssrRenderList(unref(filteredPosts), (post) => {
          var _a2, _b2, _c2;
          _push(`<article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"><div class="relative"><img${ssrRenderAttr("src", getImageUrl(post))}${ssrRenderAttr("alt", post.title)} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"><div class="absolute top-4 left-4"><span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">${ssrInterpolate(((_a2 = post.category) == null ? void 0 : _a2.name) || "General")}</span></div></div><div class="p-6"><div class="flex items-center gap-2 text-sm text-gray-500 mb-3"><span>${ssrInterpolate(formatDate(post.published_at || post.created_at))}</span><span>\u2022</span><span>${ssrInterpolate(post.reading_time || "5 min de lectura")}</span></div><h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200"><a${ssrRenderAttr("href", getPostUrl(post))}>${ssrInterpolate(post.title)}</a></h3><p class="text-gray-600 mb-4">${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"><span class="text-gray-700 font-semibold text-xs">${ssrInterpolate(((_b2 = post.user) == null ? void 0 : _b2.name) ? post.user.name.split(" ").map((n) => n[0]).join("") : "A")}</span></div><span class="text-sm text-gray-700">${ssrInterpolate(((_c2 = post.user) == null ? void 0 : _c2.name) || "Autor")}</span></div><a${ssrRenderAttr("href", getPostUrl(post))} class="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"> Leer m\xE1s \u2192 </a></div><div class="flex items-center gap-2 mt-4"><span class="text-sm text-gray-500">${ssrInterpolate(post.views || 0)} vistas</span>`);
          if (post.featured) {
            _push(`<span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs"> Destacado </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-12"><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path></svg><h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron art\xEDculos</h3><p class="text-gray-500">Intenta con otros t\xE9rminos de b\xFAsqueda o categor\xEDas.</p></div>`);
      }
      if (unref(posts) && unref(posts).links && unref(posts).links.length > 3) {
        _push(`<div class="flex justify-center"><nav class="flex items-center space-x-1"><!--[-->`);
        ssrRenderList(unref(posts).links, (link, index) => {
          var _a2, _b2;
          _push(`<!--[-->`);
          if (link.url) {
            _push(`<a${ssrRenderAttr("href", link.url)} class="${ssrRenderClass([
              "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
              link.active ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            ])}">${(_a2 = link.label) != null ? _a2 : ""}</a>`);
          } else {
            _push(`<span class="px-3 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">${(_b2 = link.label) != null ? _b2 : ""}</span>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white"><div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"><h2 class="text-3xl md:text-4xl font-bold mb-6"> \xBFListo para Comenzar tu Proyecto? </h2><p class="text-xl mb-8 text-blue-100"> Conversemos sobre tus necesidades y te ayudaremos a encontrar la soluci\xF3n perfecta </p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"> Solicitar Cotizaci\xF3n </a></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-Dt_tJGj7.mjs.map
