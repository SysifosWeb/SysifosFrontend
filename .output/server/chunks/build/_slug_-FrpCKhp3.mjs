import { _ as __nuxt_component_0 } from './nuxt-link-wkVs9ydf.mjs';
import { _ as __nuxt_component_1 } from './CtaSection-D5Wpf3fA.mjs';
import { computed, withAsyncContext, watch, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { i as useRoute, k as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-BT1JJvSL.mjs';
import { a as useSeoMeta } from './v3-DsolQCPF.mjs';
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
import 'lucide-vue-next';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const slug = computed(() => route.params.slug);
    const {
      data: postResponse,
      pending: postPending,
      error: postError,
      refresh: refreshPost
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${apiUrl}blog/${slug.value}`,
      {
        key: () => `post-${slug.value}`,
        watch: [slug]
      },
      "$Og5Owp4W5a"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const postData = computed(() => {
      var _a;
      return ((_a = postResponse.value) == null ? void 0 : _a.data) || postResponse.value || null;
    });
    const post = computed(() => {
      var _a, _b, _c;
      if (!postData.value) return null;
      return {
        id: postData.value.id,
        title: postData.value.title,
        category: ((_a = postData.value.category) == null ? void 0 : _a.name) || "Blog",
        date: new Date(postData.value.published_at || postData.value.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
        readingTime: (postData.value.reading_time || 1) + " min de lectura",
        author: {
          name: ((_b = postData.value.user) == null ? void 0 : _b.name) || "Sysifos Team",
          role: "Autor",
          avatar: ((_c = postData.value.user) == null ? void 0 : _c.name) ? postData.value.user.name.substring(0, 2).toUpperCase() : "SE"
        },
        image: postData.value.featured_image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        content: postData.value.content ? postData.value.content.includes("<") ? postData.value.content : "<p>" + postData.value.content.replace(/\n\n/g, "</p><p>") + "</p>" : "",
        tags: postData.value.meta_keywords || []
      };
    });
    watch(slug, async (newSlug, oldSlug) => {
      if (newSlug && newSlug !== oldSlug) {
        await refreshPost();
      }
    });
    computed(() => {
      return `https://www.sysifosweb.cl/blog/${slug.value}`;
    });
    const showToast = ref(false);
    useSeoMeta({
      title: () => post.value ? `${post.value.title} | Blog` : "Art\xEDculo no encontrado",
      description: () => {
        var _a;
        return ((_a = postData.value) == null ? void 0 : _a.excerpt) || "Lee nuestro \xFAltimo art\xEDculo.";
      },
      ogImage: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.image) || "";
      }
    });
    const { data: relatedResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${apiUrl}blog`,
      {
        key: "blog-list"
      },
      "$TgItTaiLuY"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const relatedPosts = computed(() => {
      var _a;
      const posts = ((_a = relatedResponse.value) == null ? void 0 : _a.data) || [];
      return posts.filter((p) => {
        var _a2;
        return p.id !== ((_a2 = post.value) == null ? void 0 : _a2.id);
      }).slice(0, 2).map((p) => {
        var _a2;
        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          category: ((_a2 = p.category) == null ? void 0 : _a2.name) || "Blog",
          reading_time: (p.reading_time || 1) + " min",
          image: p.featured_image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NosotrosCtaSection = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen pb-0" }, _attrs))}>`);
      if (unref(postPending)) {
        _push(`<div class="animate-pulse"><section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden"><div class="max-w-[800px] w-[90%] mx-auto relative z-20"><div class="w-28 h-4 bg-white/10 rounded mb-10"></div><div class="flex items-center gap-4 mb-6"><div class="w-16 h-5 bg-white/10 rounded"></div><div class="w-32 h-4 bg-white/10 rounded"></div></div><div class="w-full h-14 bg-white/10 rounded-xl mb-4"></div><div class="w-3/4 h-14 bg-white/10 rounded-xl mb-10"></div><div class="flex items-center gap-4 pt-8 border-t border-white/10"><div class="w-12 h-12 rounded-full bg-white/10"></div><div><div class="w-24 h-4 bg-white/10 rounded mb-2"></div><div class="w-16 h-3 bg-white/10 rounded"></div></div></div></div></section><section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24"><div class="w-full h-[300px] md:h-[500px] rounded-3xl bg-white/10"></div></section><section class="max-w-[700px] w-[90%] mx-auto"><div class="space-y-4"><div class="w-full h-4 bg-white/10 rounded"></div><div class="w-full h-4 bg-white/10 rounded"></div><div class="w-5/6 h-4 bg-white/10 rounded"></div><div class="w-full h-4 bg-white/10 rounded"></div><div class="w-4/6 h-4 bg-white/10 rounded"></div></div></section></div>`);
      } else if (post.value) {
        _push(`<div><section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden"><div class="absolute rounded-full pointer-events-none blur-[150px] w-[800px] h-[800px] bg-sky-500 opacity-[0.03] top-[-20%] left-1/2 -translate-x-1/2"></div><div class="max-w-[800px] w-[90%] mx-auto relative z-20">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Volver al Journal `);
            } else {
              return [
                createTextVNode(" \u2190 Volver al Journal ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-4 mb-6"><span class="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">${ssrInterpolate(post.value.category)}</span><span class="text-xs text-white/40 font-medium">${ssrInterpolate(post.value.date)} \u2022 ${ssrInterpolate(post.value.readingTime)}</span></div><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-10">${ssrInterpolate(post.value.title)}</h1><div class="flex items-center gap-4 pt-8 border-t border-white/10"><div class="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px]"><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"><span class="text-sm font-bold text-white">${ssrInterpolate(post.value.author.avatar)}</span></div></div><div><p class="text-sm font-bold text-white">${ssrInterpolate(post.value.author.name)}</p><p class="text-xs text-white/50">${ssrInterpolate(post.value.author.role)}</p></div></div></div></section><section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24 relative z-20"><div class="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"><img${ssrRenderAttr("src", post.value.image)}${ssrRenderAttr("alt", post.value.title)} class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 opacity-80"></div></section><section class="max-w-[700px] w-[90%] mx-auto relative z-20">`);
        if (post.value) {
          _push(`<div class="prose prose-invert prose-lg max-w-none text-white/70">${(_a = post.value.content) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"><div class="flex items-center gap-2 flex-wrap"><span class="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Tags:</span><!--[-->`);
        ssrRenderList(post.value.tags, (tag) => {
          _push(`<span class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 capitalize">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]-->`);
        if (post.value.tags.length === 0) {
          _push(`<span class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">${ssrInterpolate(post.value.category)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-3"><span class="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Compartir:</span><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-white group-hover:text-[#1DA1F2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></button><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-white group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></button><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1877F2]/20 hover:text-[#1877F2] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-white group-hover:text-[#1877F2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></button><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-white group-hover:text-[#25D366] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2zm5.882 14.161c-.247.696-1.432 1.34-1.97 1.455-.494.106-1.139.222-3.418-.72-2.73-1.127-4.498-3.92-4.636-4.103-.137-.184-1.109-1.474-1.109-2.812s.696-2.001.942-2.278c.246-.277.534-.347.712-.347.177 0 .356.004.512.011.168.008.396-.067.621.474.233.56.793 1.933.864 2.076.071.144.119.313.028.497-.092.184-.139.299-.277.456-.139.157-.291.341-.416.471-.138.143-.284.298-.124.573.16.276.711 1.173 1.528 1.905 1.053.945 1.93 1.238 2.205 1.382.276.143.438.118.601-.067.163-.186-.71-8.23-8.23-1.107.123-.277.167-.456.123-.655-.044-.199-.163-.318-.44-.456z"></path></svg></button><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors"><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></button></div></div><div class="mt-12 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6"><div class="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px] flex-shrink-0"><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"><span class="text-lg font-bold text-white">${ssrInterpolate(post.value.author.avatar)}</span></div></div><div class="text-center md:text-left"><p class="text-[0.65rem] font-bold uppercase tracking-widest text-sky-400 mb-1">Escrito por</p><h4 class="text-lg font-bold text-white mb-2">${ssrInterpolate(post.value.author.name)}</h4><p class="text-sm text-white/60 leading-relaxed">Equipo de ingenieros y arquitectos cloud de SysifosWeb. Apasionados por el performance, sistemas distribuidos y la construcci\xF3n de productos digitales escalables.</p></div></div></section><section class="py-24 bg-section-dark relative z-10 border-t border-white/5 mt-16"><div class="max-w-[1200px] w-[90%] mx-auto"><h3 class="text-2xl font-bold text-white mb-10">Lecturas Recomendadas</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><!--[-->`);
        ssrRenderList(relatedPosts.value, (relPost) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: relPost.id,
            to: `/blog/${relPost.slug}`,
            class: "group relative flex flex-col lg:flex-row rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 overflow-hidden"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden bg-[#0a0f18]"${_scopeId}><img${ssrRenderAttr("src", relPost.image)}${ssrRenderAttr("alt", relPost.title)} class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"${_scopeId}></div><div class="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5"${_scopeId}><div class="flex items-center gap-3 mb-3"${_scopeId}><span class="text-[0.65rem] font-bold uppercase tracking-wider text-sky-400"${_scopeId}>${ssrInterpolate(relPost.category)}</span></div><h4 class="text-lg font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors"${_scopeId}>${ssrInterpolate(relPost.title)}</h4><p class="text-sm text-white/50 line-clamp-2"${_scopeId}>${ssrInterpolate(relPost.excerpt)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "relative h-48 lg:h-auto lg:w-2/5 overflow-hidden bg-[#0a0f18]" }, [
                    createVNode("img", {
                      src: relPost.image,
                      alt: relPost.title,
                      class: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "p-6 lg:p-8 flex flex-col justify-center lg:w-3/5" }, [
                    createVNode("div", { class: "flex items-center gap-3 mb-3" }, [
                      createVNode("span", { class: "text-[0.65rem] font-bold uppercase tracking-wider text-sky-400" }, toDisplayString(relPost.category), 1)
                    ]),
                    createVNode("h4", { class: "text-lg font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors" }, toDisplayString(relPost.title), 1),
                    createVNode("p", { class: "text-sm text-white/50 line-clamp-2" }, toDisplayString(relPost.excerpt), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
        _push(ssrRenderComponent(_component_NosotrosCtaSection, null, null, _parent));
        _push(`<div class="${ssrRenderClass([showToast.value ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none", "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out"])}"><div class="flex items-center gap-3 bg-[#0f1522] border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] px-5 py-3.5 rounded-full backdrop-blur-2xl"><div class="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm font-medium text-white/90">Enlace copiado exitosamente</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-FrpCKhp3.mjs.map
