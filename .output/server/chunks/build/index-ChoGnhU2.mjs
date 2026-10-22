import { computed, withAsyncContext, ref, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, reactive, resolveDirective, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { a as useRoute, e as useRouter, f as createError, b as useHead, c as __nuxt_component_0$1, d as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$6 } from './NuxtImg-bEsxMpPe.mjs';
import { u as useGtag } from './useGtag-CozzmnIc.mjs';
import { _ as __nuxt_component_2 } from './CtaSection--kB1bezg.mjs';
import { u as useSEO } from './useSEO-SNZVZgsQ.mjs';
import { u as useAsyncData } from './asyncData-B3AJ1GQp.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'lucide-vue-next';
import 'perfect-debounce';

const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-line" }, _attrs))}><div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[600px] bg-accent opacity-[0.04] top-0 left-1/2 -translate-x-1/2"></div><div class="relative z-20 w-[90%] max-w-[1000px] mx-auto text-center flex flex-col items-center"><div${ssrRenderAttrs(mergeProps({
    class: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-panel mb-8 backdrop-blur-sm",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span><span class="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-subdued">Journal &amp; Insights</span></div><h1${ssrRenderAttrs(mergeProps({
    class: "display-title font-extrabold mb-8 text-content",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}> Ideas, tecnolog\xEDa y <br class="md:hidden"><span class="display-accent">crecimiento digital.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-xl mx-auto",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><p class="text-lg text-subdued leading-relaxed font-medium"> Explora nuestros art\xEDculos sobre arquitectura de software, escalabilidad, dise\xF1o de producto y las estrategias tecnol\xF3gicas que est\xE1n transformando negocios. </p></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-6 bg-section-dark border-y border-line relative z-10" }, _attrs))} data-v-787f652a><div class="max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6" data-v-787f652a><div class="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar md:flex-wrap md:overflow-visible" data-v-787f652a><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<button${ssrRenderAttr("aria-pressed", __props.modelValue === category.id)} class="${ssrRenderClass([__props.modelValue === category.id ? "bg-accent text-action" : "text-subdued hover:text-content hover:bg-panel", "px-4 py-1.5 text-[0.8rem] font-medium transition-all rounded-full whitespace-nowrap"])}" data-v-787f652a>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div><div class="relative w-full md:w-64 flex-shrink-0" data-v-787f652a><input type="search" aria-label="Buscar art\xEDculos"${ssrRenderAttr("value", __props.searchQuery)} placeholder="Buscar art\xEDculos..." class="w-full bg-panel border border-line rounded-full px-4 py-2 text-sm text-content placeholder-subdued focus:outline-none focus:border-line transition-colors" data-v-787f652a></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/FiltersSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-787f652a"]]);
const _sfc_main$3 = {
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
      const _component_NuxtImg = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-24 bg-section-dark relative z-10" }, _attrs))}><div class="max-w-[1200px] w-[90%] mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blog/${__props.post.slug}`,
        class: "blog-zoom-card group relative block rounded-[2rem] border border-line bg-panel overflow-hidden flex flex-col lg:flex-row shadow-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center"${_scopeId}><div class="flex items-center gap-3 mb-6"${_scopeId}><span class="px-2.5 py-1 rounded-md bg-panel text-[0.65rem] font-bold uppercase tracking-wider text-content"${_scopeId}>${ssrInterpolate(__props.post.category.name)}</span><span class="text-xs text-subdued"${_scopeId}>${ssrInterpolate(__props.post.date)}</span></div><h3 class="text-3xl lg:text-5xl font-extrabold text-content mb-6 leading-tight tracking-tight transition-all line-clamp-2 break-words"${_scopeId}>${ssrInterpolate(__props.post.title)}</h3><p class="text-subdued text-lg leading-relaxed mb-10 line-clamp-3 break-words"${_scopeId}>${ssrInterpolate(__props.post.excerpt)}</p><div class="flex items-center justify-between mt-auto"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-accent p-[2px]"${_scopeId}><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"${_scopeId}><span class="text-sm font-bold text-content"${_scopeId}>${ssrInterpolate(__props.post.author ? __props.post.author.substring(
              0,
              2
            ).toUpperCase() : "SE")}</span></div></div><div${_scopeId}><p class="text-xs font-bold text-content"${_scopeId}>${ssrInterpolate(__props.post.author)}</p><p class="text-[0.65rem] text-subdued uppercase tracking-widest mt-0.5"${_scopeId}>${ssrInterpolate(__props.post.reading_time)}</p></div></div><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-action"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg></span></div></div><div class="lg:w-1/2 relative overflow-hidden" style="${ssrRenderStyle({ "min-height": "300px" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: __props.post.image,
              width: "900",
              height: "600",
              sizes: "100vw lg:50vw",
              format: "webp",
              alt: __props.post.title,
              loading: "lazy",
              decoding: "async",
              class: "absolute inset-0 w-full h-full object-cover"
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute inset-0 bg-gradient-to-r from-panel via-transparent to-transparent hidden lg:block"${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent lg:hidden block"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center" }, [
                createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                  createVNode("span", { class: "px-2.5 py-1 rounded-md bg-panel text-[0.65rem] font-bold uppercase tracking-wider text-content" }, toDisplayString(__props.post.category.name), 1),
                  createVNode("span", { class: "text-xs text-subdued" }, toDisplayString(__props.post.date), 1)
                ]),
                createVNode("h3", { class: "text-3xl lg:text-5xl font-extrabold text-content mb-6 leading-tight tracking-tight transition-all line-clamp-2 break-words" }, toDisplayString(__props.post.title), 1),
                createVNode("p", { class: "text-subdued text-lg leading-relaxed mb-10 line-clamp-3 break-words" }, toDisplayString(__props.post.excerpt), 1),
                createVNode("div", { class: "flex items-center justify-between mt-auto" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("div", { class: "w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-accent p-[2px]" }, [
                      createVNode("div", { class: "w-full h-full bg-section-dark rounded-full flex items-center justify-center" }, [
                        createVNode("span", { class: "text-sm font-bold text-content" }, toDisplayString(__props.post.author ? __props.post.author.substring(
                          0,
                          2
                        ).toUpperCase() : "SE"), 1)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs font-bold text-content" }, toDisplayString(__props.post.author), 1),
                      createVNode("p", { class: "text-[0.65rem] text-subdued uppercase tracking-widest mt-0.5" }, toDisplayString(__props.post.reading_time), 1)
                    ])
                  ]),
                  createVNode("span", { class: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-action" }, [
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
                createVNode(_component_NuxtImg, {
                  src: __props.post.image,
                  width: "900",
                  height: "600",
                  sizes: "100vw lg:50vw",
                  format: "webp",
                  alt: __props.post.title,
                  loading: "lazy",
                  decoding: "async",
                  class: "absolute inset-0 w-full h-full object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-panel via-transparent to-transparent hidden lg:block" }),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent lg:hidden block" })
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/FeaturedPost.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
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
      const _component_NuxtImg = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-section-dark relative z-10" }, _attrs))}><div class="max-w-[1200px] w-[90%] mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
      ssrRenderList(__props.posts, (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.id,
          to: `/blog/${post.slug}`,
          class: "blog-zoom-card group relative flex flex-col rounded-2xl border border-line bg-panel overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative overflow-hidden bg-panel" style="${ssrRenderStyle({ "aspect-ratio": "16/10" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: post.image,
                width: "600",
                height: "375",
                sizes: "100vw sm:50vw lg:33vw",
                format: "webp",
                alt: post.title,
                loading: "lazy",
                decoding: "async",
                class: "absolute inset-0 w-full h-full object-cover"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="p-6 lg:p-8 flex flex-col flex-grow"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><span class="text-[0.65rem] font-bold uppercase tracking-wider text-accent"${_scopeId}>${ssrInterpolate(post.category.name)}</span><span class="text-[0.65rem] font-medium text-subdued"${_scopeId}>${ssrInterpolate(post.reading_time)}</span></div><h3 class="text-xl font-bold text-content mb-3 leading-snug line-clamp-2 break-words"${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="text-sm text-subdued mb-6 flex-grow line-clamp-3 leading-relaxed break-words"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between pt-6 border-t border-line mt-auto"${_scopeId}><span class="text-xs text-subdued"${_scopeId}>${ssrInterpolate(post.date)}</span><span class="text-xs font-bold text-content"${_scopeId}>Leer \u2192</span></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "relative overflow-hidden bg-panel",
                  style: { "aspect-ratio": "16/10" }
                }, [
                  createVNode(_component_NuxtImg, {
                    src: post.image,
                    width: "600",
                    height: "375",
                    sizes: "100vw sm:50vw lg:33vw",
                    format: "webp",
                    alt: post.title,
                    loading: "lazy",
                    decoding: "async",
                    class: "absolute inset-0 w-full h-full object-cover"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "p-6 lg:p-8 flex flex-col flex-grow" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("span", { class: "text-[0.65rem] font-bold uppercase tracking-wider text-accent" }, toDisplayString(post.category.name), 1),
                    createVNode("span", { class: "text-[0.65rem] font-medium text-subdued" }, toDisplayString(post.reading_time), 1)
                  ]),
                  createVNode("h3", { class: "text-xl font-bold text-content mb-3 leading-snug line-clamp-2 break-words" }, toDisplayString(post.title), 1),
                  createVNode("p", { class: "text-sm text-subdued mb-6 flex-grow line-clamp-3 leading-relaxed break-words" }, toDisplayString(post.excerpt), 1),
                  createVNode("div", { class: "flex items-center justify-between pt-6 border-t border-line mt-auto" }, [
                    createVNode("span", { class: "text-xs text-subdued" }, toDisplayString(post.date), 1),
                    createVNode("span", { class: "text-xs font-bold text-content" }, "Leer \u2192")
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
        _push(`<div class="text-center py-20 border border-line rounded-2xl bg-panel"><h3 class="text-lg font-bold text-content mb-2">No hay art\xEDculos aqu\xED</h3><p class="text-sm text-subdued">Pronto publicaremos contenido en esta categor\xEDa.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/PostGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "NewsletterSection",
  __ssrInlineRender: true,
  setup(__props) {
    useGtag();
    const form = reactive({
      email: "",
      consent: false,
      website: ""
      // honeypot: los bots lo rellenan
    });
    const isSubmitting = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-section-dark border-t border-line" }, _attrs))}><div class="max-w-2xl mx-auto text-center px-6"><div class="w-16 h-16 mx-auto bg-panel rounded-2xl border border-line flex items-center justify-center mb-6"><svg class="w-6 h-6 text-content" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg></div><h3 class="text-2xl lg:text-3xl font-bold text-content mb-4">Recibe insights tecnol\xF3gicos</h3><p class="text-subdued text-sm mb-8">\xDAnete a nuestra lista para recibir art\xEDculos mensuales sobre arquitectura web y escalabilidad. Sin spam.</p><form class="flex flex-col sm:flex-row gap-3"><input${ssrRenderAttr("value", form.email)} aria-label="Correo electr\xF3nico para el bolet\xEDn" type="email" placeholder="tu@email.com" autocomplete="email" class="flex-grow bg-panel border border-line rounded-xl px-5 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 transition-colors" required><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="px-6 py-3.5 rounded-xl bg-accent text-action font-bold text-sm hover:bg-quiet hover:text-content transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Suscribirse")}</button><input${ssrRenderAttr("value", form.website)} type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true"></form><label class="flex items-start gap-3 cursor-pointer select-none text-left mt-5"><input${ssrIncludeBooleanAttr(Array.isArray(form.consent) ? ssrLooseContain(form.consent, null) : form.consent) ? " checked" : ""} type="checkbox" class="mt-1 w-4 h-4 rounded border-line bg-quiet accent-accent"><span class="text-xs text-subdued leading-relaxed"> Acepto que mis datos personales sean tratados para enviarme el bolet\xEDn, de acuerdo a la `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacidad",
        class: "text-accent underline hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pol\xEDtica de Privacidad`);
          } else {
            return [
              createTextVNode("Pol\xEDtica de Privacidad")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. Puedo darme de baja en cualquier momento. </span></label>`);
      if (successMessage.value) {
        _push(`<p role="status" class="mt-4 text-sm text-emerald-400 font-medium">${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<p role="alert" class="mt-4 text-sm text-red-400 font-medium">${ssrInterpolate(errorMessage.value)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/NewsletterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
async function fetchPublicBlog(fetchPage, limit = Infinity) {
  var _a, _b, _c;
  const posts = [];
  let lastPage = 1;
  for (let page = 1; page <= lastPage; page++) {
    const response = await fetchPage(page);
    if (!response || !Array.isArray(response.data) || response.data.some((post) => !post || typeof post.slug !== "string" || !post.slug || typeof post.title !== "string")) {
      throw new Error("Invalid public blog response");
    }
    const reportedLastPage = (_c = (_b = (_a = response.meta) == null ? void 0 : _a.last_page) != null ? _b : response.last_page) != null ? _c : 1;
    if (!Number.isInteger(reportedLastPage) || reportedLastPage < page || reportedLastPage > 100) {
      throw new Error("Invalid public blog pagination");
    }
    lastPage = reportedLastPage;
    posts.push(...response.data);
    if (posts.length >= limit) break;
  }
  return posts.slice(0, limit);
}
const itemsPerPage = 10;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const { setMeta } = useSEO();
    setMeta({
      title: "Blog | Tecnolog\xEDa, Desarrollo Web y Negocios Digitales \u2014 SysifosWeb",
      description: "Art\xEDculos sobre desarrollo web, software, ecommerce, SEO y estrategias digitales para empresas. Aprende c\xF3mo escalar tu negocio con tecnolog\xEDa de parte del equipo de SysifosWeb.",
      keywords: "blog desarrollo web chile, art\xEDculos tecnolog\xEDa empresas, tips ecommerce chile, arquitectura de software, marketing digital pymes, SEO para negocios, digitalizaci\xF3n empresas",
      image: "/img/og-blog.jpg"
    });
    const route = useRoute();
    const router = useRouter();
    const currentPage = computed({
      get: () => Math.max(1, Math.floor(Number(route.query.page)) || 1),
      set: (val) => {
        router.push({ query: { ...route.query, page: val } });
      }
    });
    const { data: allFetchedPosts, pending, error: catalogueError } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("all-blog-posts", () => fetchPublicBlog((page) => $fetch(`${apiUrl}blog`, {
      query: { page, per_page: 100 },
      timeout: 8e3,
      retry: 0
    })), { default: () => [] })), __temp = await __temp, __restore(), __temp);
    if (catalogueError.value) {
      throw createError({ statusCode: 503, statusMessage: "Blog temporalmente no disponible", fatal: true });
    }
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
          image: p.featured_image || "/img/og-blog.jpg",
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
    const featuredCandidate = computed(() => allPosts.value.find((p) => p.featured) || allPosts.value[0] || null);
    const featuredPost = computed(() => {
      if (selectedCategory.value !== "all" || searchQuery.value.trim() !== "" || currentPage.value !== 1) return null;
      return featuredCandidate.value;
    });
    const filteredPostsAll = computed(() => {
      let posts = allPosts.value;
      if (selectedCategory.value === "all" && !searchQuery.value.trim() && featuredCandidate.value) {
        posts = posts.filter((p) => p.id !== featuredCandidate.value.id);
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
    if (currentPage.value > totalPages.value) {
      throw createError({ statusCode: 404, statusMessage: "P\xE1gina no encontrada", fatal: true });
    }
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
    useHead(() => ({
      title: currentPage.value > 1 ? `Blog, p\xE1gina ${currentPage.value} | SysifosWeb` : "Blog | Tecnolog\xEDa y negocios digitales \u2014 SysifosWeb",
      link: [{ rel: "canonical", href: `https://sysifosweb.cl/blog${currentPage.value > 1 ? `?page=${currentPage.value}` : ""}` }]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogHeroSection = __nuxt_component_0;
      const _component_BlogFiltersSection = __nuxt_component_1;
      const _component_BlogFeaturedPost = _sfc_main$3;
      const _component_BlogPostGrid = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BlogNewsletterSection = _sfc_main$1;
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
        _push(`<div class="flex justify-center items-center gap-4 py-12 bg-section-dark">`);
        if (currentPage.value > 1) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/blog", query: { ...unref(route).query, page: currentPage.value - 1 } },
            class: "px-5 py-2.5 text-sm font-semibold text-content bg-panel border border-line rounded-full hover:bg-panel hover:border-line disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u2190 Anterior `);
              } else {
                return [
                  createTextVNode(" \u2190 Anterior ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center gap-2"><span class="text-content text-sm font-medium">P\xE1gina ${ssrInterpolate(currentPage.value)} de ${ssrInterpolate(totalPages.value)}</span></div>`);
        if (currentPage.value < totalPages.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/blog", query: { ...unref(route).query, page: currentPage.value + 1 } },
            class: "px-5 py-2.5 text-sm font-semibold text-content bg-panel border border-line rounded-full hover:bg-panel hover:border-line disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Siguiente \u2192 `);
              } else {
                return [
                  createTextVNode(" Siguiente \u2192 ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BlogNewsletterSection, null, null, _parent));
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
//# sourceMappingURL=index-ChoGnhU2.mjs.map
