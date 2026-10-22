import { _ as _export_sfc, c as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './BrandLogo-CG19ElAN.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_BrandLogo = __nuxt_component_1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer relative overflow-hidden bg-section-dark impulso-closing" }, _attrs))}><div class="absolute pointer-events-none inset-0 overflow-hidden" aria-hidden="true"><div class="absolute -bottom-20 -left-20 w-[400px] h-[400px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--purple) 0%, transparent 70%)", "opacity": "0.1" })}"></div><div class="absolute top-0 right-0 w-[300px] h-[300px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--accent) 0%, transparent 70%)", "opacity": "0.08" })}"></div></div><div class="relative z-10 site-container py-16 pb-8"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12" style="${ssrRenderStyle({ "border-bottom": "1px solid var(--border)" })}"><div class="lg:col-span-5 flex flex-col gap-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    external: "",
    to: "/",
    class: "flex items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BrandLogo, { class: "h-12 md:h-20 w-auto aspect-[403/80]" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BrandLogo, { class: "h-12 md:h-20 w-auto aspect-[403/80]" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-sm leading-relaxed max-w-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Dise\xF1amos y construimos plataformas digitales que ayudan a empresas a crecer. </p><div class="flex items-center gap-4 mt-2"><a href="https://www.facebook.com/profile.php?id=61567859694020" target="_blank" aria-label="Facebook" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.65 9.1 8.4 9.84v-6.96h-2.53v-2.88h2.53v-2.19c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.77l-.44 2.88h-2.33v6.96c4.76-.74 8.41-4.87 8.41-9.84 0-5.5-4.46-9.96-9.96-9.96z"></path></svg></a><a href="https://www.instagram.com/sysifosweb_/" target="_blank" aria-label="Instagram" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 2h-8.5C5.55 4 4 5.55 4 7.75v8.5C4 18.45 5.55 20 7.75 20h8.5c2.2 0 3.75-1.55 3.75-3.75v-8.5C20 5.55 18.45 4 16.25 4ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"></path></svg></a><a href="https://www.linkedin.com/company/sysifos-web" target="_blank" aria-label="LinkedIn" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-11.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 10.5V9H6v10h3Zm2 0h3v-5.5c0-1.87 2.25-2.02 2.25 0V19h3v-6.6a4.11 4.11 0 0 0-4.1-4.4c-1.4 0-2.3.8-2.65 1.54V9h-3v10Z"></path></svg></a><a href="https://www.tiktok.com/@sysifosweb" target="_blank" aria-label="TikTok" class="social-icon w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid var(--border)" })}"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg></a></div></div><div class="hidden lg:block lg:col-span-1"></div><div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10"><div><h3 class="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style="${ssrRenderStyle({ "color": "var(--accent)" })}"> Navegaci\xF3n </h3><ul class="flex flex-col gap-3"><!--[-->`);
  ssrRenderList($data.navLinks, (link) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      external: link.to === "/",
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
  _push(`<!--]--></ul></div><div><h3 class="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style="${ssrRenderStyle({ "color": "var(--accent)" })}"> Contacto </h3><ul class="flex flex-col gap-4"><li class="flex items-center gap-3"><svg class="w-4 h-4 shrink-0" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a href="mailto:contacto@sysifosweb.cl" class="text-sm transition-colors duration-200 nav-link" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}"> contacto@sysifosweb.cl </a></li><li class="flex items-center gap-3"><svg class="w-4 h-4 shrink-0" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}">+56 9 8502 1549</span></li><li class="flex items-start gap-3"><svg class="w-4 h-4 shrink-0 mt-0.5" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}">Coquimbo, Chile</span></li></ul></div></div></div><div class="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SysifosWeb. Todos los derechos reservados. </p><div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacidad",
    class: "nav-link text-xs transition-colors duration-200",
    style: { "color": "var(--text-muted)" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Pol\xEDtica de Privacidad `);
      } else {
        return [
          createTextVNode(" Pol\xEDtica de Privacidad ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="#cookies" class="nav-link text-xs transition-colors duration-200" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Configurar cookies </a><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Hecho con \u2665 en Coquimbo, Chile </p></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Footer-DE4_iArd.mjs.map
