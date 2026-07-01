import { a as buildAssetsURL } from '../nitro/nitro.mjs';
import { b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';

const logoBlanco = "" + buildAssetsURL("logo-blanco.BFdNkacE.webp");
const _sfc_main$1 = {
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const isScrolled = ref(false);
    ref(false);
    const route = useRoute();
    const currentRoute = computed(() => route.path);
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    watch(() => route.fullPath, () => {
      closeMenu();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 w-full z-[1002] bg-transparent transition-all duration-500", { "bg-[#05070a]/90 backdrop-blur-xl": isScrolled.value }]
      }, _attrs))} data-v-68fd181e><div class="max-w-[1400px] w-[92%] mx-auto border-b border-white/10" data-v-68fd181e><div class="flex items-center justify-between py-10 lg:py-12" data-v-68fd181e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoBlanco))} alt="SysifosWeb Logo" width="200" height="40" class="h-8 md:h-10 w-auto object-contain" data-v-68fd181e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoBlanco),
                alt: "SysifosWeb Logo",
                width: "200",
                height: "40",
                class: "h-8 md:h-10 w-auto object-contain"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center" data-v-68fd181e><ul class="flex items-center gap-12" data-v-68fd181e><!--[-->`);
      ssrRenderList([
        { to: "/", label: "Inicio" },
        { to: "/nosotros", label: "Nosotros" },
        { to: "/servicios", label: "Servicios" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" }
      ], (item) => {
        _push(`<li data-v-68fd181e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: ["nav-link text-[15px] tracking-widest font-bold text-gray-300 hover:text-white transition-all font-tech uppercase", { "text-accent": currentRoute.value === item.to }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li data-v-68fd181e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "ml-6 px-8 py-3 bg-accent text-black font-bold text-[15px] uppercase tracking-widest hover:bg-transparent hover:text-accent border border-accent transition-all font-tech"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contacto `);
          } else {
            return [
              createTextVNode(" Contacto ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><button class="lg:hidden text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"${ssrRenderAttr("aria-expanded", isMenuOpen.value)} aria-controls="mobile-menu"${ssrRenderAttr("aria-label", isMenuOpen.value ? "Cerrar men\xFA" : "Abrir men\xFA")} data-v-68fd181e><div class="space-y-1.5" aria-hidden="true" data-v-68fd181e><div class="${ssrRenderClass([{ "rotate-45 translate-y-2": isMenuOpen.value }, "w-5 h-[1px] bg-accent transition-all"])}" data-v-68fd181e></div><div class="${ssrRenderClass([{ "opacity-0": isMenuOpen.value }, "w-5 h-[1px] bg-accent transition-all"])}" data-v-68fd181e></div><div class="${ssrRenderClass([{ "-rotate-45 -translate-y-2": isMenuOpen.value }, "w-5 h-[1px] bg-accent transition-all"])}" data-v-68fd181e></div></div></button></div></div>`);
      if (isMenuOpen.value) {
        _push(`<div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Men\xFA de navegaci\xF3n" class="fixed inset-0 z-[2000] bg-[#05070a] flex flex-col p-10 overflow-hidden" data-v-68fd181e><div class="absolute inset-0 technical-grid opacity-5 pointer-events-none" aria-hidden="true" data-v-68fd181e></div><div class="flex items-center justify-between mb-24" data-v-68fd181e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: closeMenu,
          class: "flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(logoBlanco))} alt="SysifosWeb \u2014 ir a inicio" width="200" height="40" class="h-8 w-auto object-contain" data-v-68fd181e${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: unref(logoBlanco),
                  alt: "SysifosWeb \u2014 ir a inicio",
                  width: "200",
                  height: "40",
                  class: "h-8 w-auto object-contain"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="text-accent focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Cerrar men\xFA" data-v-68fd181e><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-v-68fd181e><path stroke-linecap="square" stroke-width="0.5" d="M6 18L18 6M6 6l12 12" data-v-68fd181e></path></svg></button></div><nav aria-label="Men\xFA principal m\xF3vil" data-v-68fd181e><ul class="flex-grow flex flex-col space-y-10" data-v-68fd181e><!--[-->`);
        ssrRenderList([
          { to: "/", label: "Inicio" },
          { to: "/nosotros", label: "Nosotros" },
          { to: "/servicios", label: "Servicios" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/blog", label: "Blog" },
          { to: "/contacto", label: "Contacto" }
        ], (item) => {
          _push(`<li data-v-68fd181e>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: "text-2xl font-bold tracking-widest text-white font-tech uppercase transition-colors hover:text-accent"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-68fd181e"]]);
const __default__ = {
  data() {
    return {
      navLinks: [
        { to: "/", label: "Inicio" },
        { to: "/nosotros", label: "Nosotros" },
        { to: "/servicios", label: "Servicios" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/contacto", label: "Contacto" }
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-section-dark" }, _attrs))} data-v-f0ceb837><div class="absolute pointer-events-none inset-0 overflow-hidden" aria-hidden="true" data-v-f0ceb837><div class="absolute -bottom-20 -left-20 w-[400px] h-[400px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--purple) 0%, transparent 70%)", "opacity": "0.1" })}" data-v-f0ceb837></div><div class="absolute top-0 right-0 w-[300px] h-[300px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--accent) 0%, transparent 70%)", "opacity": "0.08" })}" data-v-f0ceb837></div></div><div class="relative z-10 w-[88%] max-w-[1340px] mx-auto py-16 pb-8" data-v-f0ceb837><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12" style="${ssrRenderStyle({ "border-bottom": "1px solid var(--border)" })}" data-v-f0ceb837><div class="lg:col-span-5 flex flex-col gap-6" data-v-f0ceb837>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoBlanco))} alt="SysifosWeb Logo" width="200" height="80" class="h-12 md:h-20 w-auto object-contain" data-v-f0ceb837${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoBlanco),
                alt: "SysifosWeb Logo",
                width: "200",
                height: "80",
                class: "h-12 md:h-20 w-auto object-contain"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm leading-relaxed max-w-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837> Dise\xF1amos y construimos plataformas digitales que ayudan a empresas a crecer. </p><div class="flex items-center gap-4 mt-2" data-v-f0ceb837><a href="https://www.facebook.com/profile.php?id=61567859694020" target="_blank" aria-label="Facebook" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}" data-v-f0ceb837><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.65 9.1 8.4 9.84v-6.96h-2.53v-2.88h2.53v-2.19c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.77l-.44 2.88h-2.33v6.96c4.76-.74 8.41-4.87 8.41-9.84 0-5.5-4.46-9.96-9.96-9.96z" data-v-f0ceb837></path></svg></a><a href="https://www.instagram.com/sysifosweb_/" target="_blank" aria-label="Instagram" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}" data-v-f0ceb837><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 2h-8.5C5.55 4 4 5.55 4 7.75v8.5C4 18.45 5.55 20 7.75 20h8.5c2.2 0 3.75-1.55 3.75-3.75v-8.5C20 5.55 18.45 4 16.25 4ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" data-v-f0ceb837></path></svg></a><a href="https://www.linkedin.com/company/sysifos-web" target="_blank" aria-label="LinkedIn" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}" data-v-f0ceb837><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-11.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 10.5V9H6v10h3Zm2 0h3v-5.5c0-1.87 2.25-2.02 2.25 0V19h3v-6.6a4.11 4.11 0 0 0-4.1-4.4c-1.4 0-2.3.8-2.65 1.54V9h-3v10Z" data-v-f0ceb837></path></svg></a><a href="https://www.tiktok.com/@sysifosweb" target="_blank" aria-label="TikTok" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}" data-v-f0ceb837><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837><path d="M12.525.02c1.31-.02 2.61-.01 3.91.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" data-v-f0ceb837></path></svg></a></div></div><div class="hidden lg:block lg:col-span-1" data-v-f0ceb837></div><div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10" data-v-f0ceb837><div data-v-f0ceb837><h3 class="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style="${ssrRenderStyle({ "color": "var(--accent)" })}" data-v-f0ceb837> Navegaci\xF3n </h3><ul class="flex flex-col gap-3" data-v-f0ceb837><!--[-->`);
      ssrRenderList(_ctx.navLinks, (link) => {
        _push(`<li data-v-f0ceb837>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.to,
          class: "nav-link text-sm transition-colors duration-200",
          style: { "color": "var(--text-secondary)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-f0ceb837><h3 class="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style="${ssrRenderStyle({ "color": "var(--accent)" })}" data-v-f0ceb837> Contacto </h3><ul class="flex flex-col gap-4" data-v-f0ceb837><li class="flex items-center gap-3" data-v-f0ceb837><svg class="w-4 h-4 shrink-0" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-f0ceb837><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-f0ceb837></path></svg><a href="mailto:contacto@sysifosweb.cl" class="text-sm transition-colors duration-200 nav-link" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-f0ceb837> contacto@sysifosweb.cl </a></li><li class="flex items-center gap-3" data-v-f0ceb837><svg class="w-4 h-4 shrink-0" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-f0ceb837><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-f0ceb837></path></svg><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-f0ceb837>+56 9 4910 9970</span></li><li class="flex items-start gap-3" data-v-f0ceb837><svg class="w-4 h-4 shrink-0 mt-0.5" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-f0ceb837><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-f0ceb837></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-f0ceb837></path></svg><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-f0ceb837>La Serena \xB7 Coquimbo, Chile</span></li></ul></div></div></div><div class="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" data-v-f0ceb837><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SysifosWeb. Todos los derechos reservados. </p><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-f0ceb837> Hecho con \u2665 en Coquimbo, Chile </p></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f0ceb837"]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Footer-BdKUhb7v.mjs.map
