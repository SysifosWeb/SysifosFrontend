import { computed, ref, watch, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { u as useRoute, f as useRouter, d as useRuntimeConfig, _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './CtaSection--lLeRgjO.mjs';
import { u as useSEO } from './useSEO-D6bVbkIH.mjs';
import { u as useAsyncData } from './asyncData--YpoKdca.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:diagnostics_channel';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'ipx';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'lucide-vue-next';
import 'perfect-debounce';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/5" }, _attrs))}><div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[600px] bg-indigo-500 opacity-[0.04] top-0 left-1/2 -translate-x-1/2"></div><div class="relative z-20 w-[90%] max-w-[1000px] mx-auto text-center flex flex-col items-center"><div${ssrRenderAttrs(mergeProps({
    class: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span><span class="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/70">Journal &amp; Insights</span></div><h1${ssrRenderAttrs(mergeProps({
    class: "text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight text-white",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}> Ideas, tecnolog\xEDa y <br class="md:hidden"><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">crecimiento digital.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-xl mx-auto",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><p class="text-lg text-white/60 leading-relaxed font-medium"> Explora nuestros art\xEDculos sobre arquitectura de software, escalabilidad, dise\xF1o de producto y las estrategias tecnol\xF3gicas que est\xE1n transformando negocios. </p></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/HeroSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "FiltersSection",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    searchQuery: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "update:searchQuery"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-6 bg-section-dark border-y border-white/5 relative z-10" }, _attrs))} data-v-2624d2d0><div class="max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6" data-v-2624d2d0><div class="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar md:flex-wrap md:overflow-visible" data-v-2624d2d0><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<button class="${ssrRenderClass([__props.modelValue === category.id ? "bg-white text-black" : "text-white/60 hover:text-white hover:bg-white/5", "px-4 py-1.5 text-[0.8rem] font-medium transition-all rounded-full whitespace-nowrap"])}" data-v-2624d2d0>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div><div class="relative w-full md:w-64 flex-shrink-0" data-v-2624d2d0><input type="text"${ssrRenderAttr("value", __props.searchQuery)} placeholder="Buscar art\xEDculos..." class="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors" data-v-2624d2d0></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/FiltersSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2624d2d0"]]);
const _sfc_main$2 = {
  __name: "FeaturedPost",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-24 bg-section-dark relative z-10" }, _attrs))}><div class="max-w-[1200px] w-[90%] mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blog/${__props.post.slug}`,
        class: "group relative block rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col lg:flex-row hover:border-white/20 transition-all duration-500 shadow-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center"${_scopeId}><div class="flex items-center gap-3 mb-6"${_scopeId}><span class="px-2.5 py-1 rounded-md bg-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-white"${_scopeId}>${ssrInterpolate(__props.post.category.name)}</span><span class="text-xs text-white/50"${_scopeId}>${ssrInterpolate(__props.post.date)}</span></div><h3 class="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight transition-all line-clamp-2 break-words"${_scopeId}>${ssrInterpolate(__props.post.title)}</h3><p class="text-white/60 text-lg leading-relaxed mb-10 line-clamp-3 break-words"${_scopeId}>${ssrInterpolate(__props.post.excerpt)}</p><div class="flex items-center justify-between mt-auto"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px]"${_scopeId}><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"${_scopeId}><span class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(__props.post.author ? __props.post.author.substring(
              0,
              2
            ).toUpperCase() : "SE")}</span></div></div><div${_scopeId}><p class="text-xs font-bold text-white"${_scopeId}>${ssrInterpolate(__props.post.author)}</p><p class="text-[0.65rem] text-white/50 uppercase tracking-widest mt-0.5"${_scopeId}>${ssrInterpolate(__props.post.reading_time)}</p></div></div><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black group-hover:scale-110 transition-transform"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg></span></div></div><div class="lg:w-1/2 relative overflow-hidden" style="${ssrRenderStyle({ "min-height": "300px" })}"${_scopeId}><img${ssrRenderAttr("src", __props.post.image)}${ssrRenderAttr("alt", __props.post.title)} loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-transparent hidden lg:block"${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent lg:hidden block"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center" }, [
                createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                  createVNode("span", { class: "px-2.5 py-1 rounded-md bg-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-white" }, toDisplayString(__props.post.category.name), 1),
                  createVNode("span", { class: "text-xs text-white/50" }, toDisplayString(__props.post.date), 1)
                ]),
                createVNode("h3", { class: "text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight transition-all line-clamp-2 break-words" }, toDisplayString(__props.post.title), 1),
                createVNode("p", { class: "text-white/60 text-lg leading-relaxed mb-10 line-clamp-3 break-words" }, toDisplayString(__props.post.excerpt), 1),
                createVNode("div", { class: "flex items-center justify-between mt-auto" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px]" }, [
                      createVNode("div", { class: "w-full h-full bg-section-dark rounded-full flex items-center justify-center" }, [
                        createVNode("span", { class: "text-sm font-bold text-white" }, toDisplayString(__props.post.author ? __props.post.author.substring(
                          0,
                          2
                        ).toUpperCase() : "SE"), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs font-bold text-white" }, toDisplayString(__props.post.author), 1),
                      createVNode("p", { class: "text-[0.65rem] text-white/50 uppercase tracking-widest mt-0.5" }, toDisplayString(__props.post.reading_time), 1)
                    ])
                  ]),
                  createVNode("span", { class: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black group-hover:scale-110 transition-transform" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                      })
                    ]))
                  ])
                ])
              ]),
              createVNode("div", {
                class: "lg:w-1/2 relative overflow-hidden",
                style: { "min-height": "300px" }
              }, [
                createVNode("img", {
                  src: __props.post.image,
                  alt: __props.post.title,
                  loading: "lazy",
                  decoding: "async",
                  class: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-[#05070a] via-transparent to-transparent hidden lg:block" }),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent lg:hidden block" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/FeaturedPost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PostGrid",
  __ssrInlineRender: true,
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-section-dark relative z-10" }, _attrs))}><div class="max-w-[1200px] w-[90%] mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.id,
          to: `/blog/${post.slug}`,
          class: "group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative overflow-hidden bg-[#0a0f18]" style="${ssrRenderStyle({ "aspect-ratio": "16/10" })}"${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"${_scopeId}></div><div class="p-6 lg:p-8 flex flex-col flex-grow"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><span class="text-[0.65rem] font-bold uppercase tracking-wider text-sky-400"${_scopeId}>${ssrInterpolate(post.category.name)}</span><span class="text-[0.65rem] font-medium text-white/40"${_scopeId}>${ssrInterpolate(post.reading_time)}</span></div><h3 class="text-xl font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors line-clamp-2 break-words"${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="text-sm text-white/50 mb-6 flex-grow line-clamp-3 leading-relaxed break-words"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between pt-6 border-t border-white/5 mt-auto"${_scopeId}><span class="text-xs text-white/40"${_scopeId}>${ssrInterpolate(post.date)}</span><span class="text-xs font-bold text-white group-hover:translate-x-1 transition-transform"${_scopeId}>Leer \u2192</span></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "relative overflow-hidden bg-[#0a0f18]",
                  style: { "aspect-ratio": "16/10" }
                }, [
                  createVNode("img", {
                    src: post.image,
                    alt: post.title,
                    loading: "lazy",
                    decoding: "async",
                    class: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "p-6 lg:p-8 flex flex-col flex-grow" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("span", { class: "text-[0.65rem] font-bold uppercase tracking-wider text-sky-400" }, toDisplayString(post.category.name), 1),
                    createVNode("span", { class: "text-[0.65rem] font-medium text-white/40" }, toDisplayString(post.reading_time), 1)
                  ]),
                  createVNode("h3", { class: "text-xl font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors line-clamp-2 break-words" }, toDisplayString(post.title), 1),
                  createVNode("p", { class: "text-sm text-white/50 mb-6 flex-grow line-clamp-3 leading-relaxed break-words" }, toDisplayString(post.excerpt), 1),
                  createVNode("div", { class: "flex items-center justify-between pt-6 border-t border-white/5 mt-auto" }, [
                    createVNode("span", { class: "text-xs text-white/40" }, toDisplayString(post.date), 1),
                    createVNode("span", { class: "text-xs font-bold text-white group-hover:translate-x-1 transition-transform" }, "Leer \u2192")
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (__props.posts.length === 0) {
        _push(`<div class="text-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]"><h3 class="text-lg font-bold text-white mb-2">No hay art\xEDculos aqu\xED</h3><p class="text-sm text-white/50">Pronto publicaremos contenido en esta categor\xEDa.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/PostGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const itemsPerPage = 10;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const { setMeta } = useSEO();
    setMeta({
      title: "Blog | Tecnolog\xEDa, Desarrollo Web y Negocios Digitales \u2014 SysifosWeb",
      description: "Art\xEDculos sobre desarrollo web, software, ecommerce, SEO y estrategias digitales para empresas. Aprende c\xF3mo escalar tu negocio con tecnolog\xEDa de parte del equipo de SysifosWeb.",
      keywords: "blog desarrollo web chile, art\xEDculos tecnolog\xEDa empresas, tips ecommerce chile, arquitectura de software, marketing digital pymes, SEO para negocios, digitalizaci\xF3n empresas",
      image: "/img/og-blog.png"
    });
    const route = useRoute();
    const router = useRouter();
    const currentPage = computed({
      get: () => Number(route.query.page) || 1,
      set: (val) => {
        router.push({ query: { ...route.query, page: val } });
      }
    });
    const { data: allFetchedPosts, pending } = useAsyncData("all-blog-posts", async () => {
      const firstPage = await $fetch(`${apiUrl}blog?page=1`);
      let posts = firstPage.data || [];
      const lastPage = firstPage.last_page || 1;
      if (lastPage > 1) {
        const promises = [];
        for (let i = 2; i <= lastPage; i++) {
          promises.push($fetch(`${apiUrl}blog?page=${i}`));
        }
        const results = await Promise.all(promises);
        results.forEach((res) => {
          posts = posts.concat(res.data || []);
        });
      }
      return posts;
    });
    const allPosts = computed(() => {
      const posts = allFetchedPosts.value || [];
      return posts.map((p) => {
        var _a;
        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          category: p.category || { name: "Blog", slug: "blog" },
          reading_time: (p.reading_time || 1) + " min",
          date: new Date(p.published_at || p.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
          author: ((_a = p.user) == null ? void 0 : _a.name) || "Sysifos Team",
          image: p.featured_image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
          featured: !!p.featured
        };
      });
    });
    const categories = computed(() => {
      const catMap = /* @__PURE__ */ new Map();
      catMap.set("all", { id: "all", name: "Todos" });
      allPosts.value.forEach((p) => {
        var _a;
        if (((_a = p.category) == null ? void 0 : _a.slug) && !catMap.has(p.category.slug)) {
          catMap.set(p.category.slug, { id: p.category.slug, name: p.category.name });
        }
      });
      return Array.from(catMap.values());
    });
    const selectedCategory = ref("all");
    const searchQuery = ref("");
    const featuredPost = computed(() => {
      if (selectedCategory.value !== "all" || searchQuery.value.trim() !== "" || currentPage.value !== 1) return null;
      return allPosts.value.find((p) => p.featured) || allPosts.value[0] || null;
    });
    const filteredPostsAll = computed(() => {
      let posts = allPosts.value;
      if (featuredPost.value) {
        posts = posts.filter((p) => p.id !== featuredPost.value.id);
      }
      if (selectedCategory.value !== "all") {
        posts = posts.filter((p) => {
          var _a;
          return ((_a = p.category) == null ? void 0 : _a.slug) === selectedCategory.value;
        });
      }
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase();
        posts = posts.filter(
          (p) => {
            var _a;
            return p.title.toLowerCase().includes(q) || ((_a = p.excerpt) == null ? void 0 : _a.toLowerCase().includes(q));
          }
        );
      }
      return posts;
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredPostsAll.value.length / itemsPerPage) || 1;
    });
    watch([selectedCategory, searchQuery], () => {
      if (currentPage.value !== 1) {
        currentPage.value = 1;
      }
    });
    const filteredPosts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredPostsAll.value.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogHeroSection = __nuxt_component_0;
      const _component_BlogFiltersSection = __nuxt_component_1;
      const _component_BlogFeaturedPost = _sfc_main$2;
      const _component_BlogPostGrid = _sfc_main$1;
      const _component_NosotrosCtaSection = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BlogHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_BlogFiltersSection, {
        modelValue: selectedCategory.value,
        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
        categories: categories.value,
        searchQuery: searchQuery.value,
        "onUpdate:searchQuery": ($event) => searchQuery.value = $event
      }, null, _parent));
      if (selectedCategory.value === "all" && featuredPost.value) {
        _push(ssrRenderComponent(_component_BlogFeaturedPost, { post: featuredPost.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BlogPostGrid, { posts: filteredPosts.value }, null, _parent));
      if (totalPages.value > 1) {
        _push(`<div class="flex justify-center items-center gap-4 py-12 bg-section-dark"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-5 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"> \u2190 Anterior </button><div class="flex items-center gap-2"><span class="text-white/80 text-sm font-medium">P\xE1gina ${ssrInterpolate(currentPage.value)} de ${ssrInterpolate(totalPages.value)}</span></div><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="px-5 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"> Siguiente \u2192 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NosotrosCtaSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CQHa2ron.mjs.map
