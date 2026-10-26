import { _ as __nuxt_component_1$1 } from './BrandLogo-CG19ElAN.mjs';
import { mergeProps, ref, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { e as useHead, _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { PanelsTopLeft, MessageCircle } from 'lucide-vue-next';
import { _ as __nuxt_component_2 } from './Footer-DE4_iArd.mjs';
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

const _sfc_main$2 = {
  __name: "HomeNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { to: "/", label: "Inicio" },
      { to: "/nosotros", label: "Nosotros" },
      { to: "/servicios", label: "Servicios" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/blog", label: "Blog" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BrandLogo = __nuxt_component_1$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "home-navigation absolute top-0 left-0 w-full z-[1002]",
        "aria-label": "Navegaci\xF3n principal"
      }, _attrs))} data-v-6efd6a8e><div class="site-container border-b border-[var(--border)]" data-v-6efd6a8e><div class="flex items-center justify-between py-10 lg:py-12" data-v-6efd6a8e><a href="/" class="flex items-center" data-v-6efd6a8e>`);
      _push(ssrRenderComponent(_component_BrandLogo, { class: "h-8 md:h-10 w-auto aspect-[403/80]" }, null, _parent));
      _push(`</a><ul class="hidden lg:flex items-center gap-12" data-v-6efd6a8e><!--[-->`);
      ssrRenderList(links, (item) => {
        _push(`<li data-v-6efd6a8e><a${ssrRenderAttr("href", item.to)}${ssrRenderAttr("aria-current", item.to === "/" ? "page" : void 0)} class="text-[15px] tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] font-tech uppercase" data-v-6efd6a8e>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--><li data-v-6efd6a8e><a href="/contacto" class="btn btn-primary ml-6 text-[13px] uppercase tracking-widest font-tech" data-v-6efd6a8e>Contacto</a></li></ul><details id="home-menu" class="lg:hidden" data-v-6efd6a8e><summary aria-label="Abrir men\xFA" class="text-accent min-w-11 min-h-11 flex items-center justify-center cursor-pointer list-none" data-v-6efd6a8e><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" data-v-6efd6a8e><path d="M3 6h18M3 12h18M3 18h18" data-v-6efd6a8e></path></svg></summary><div class="home-menu-panel" data-v-6efd6a8e><ul data-v-6efd6a8e><!--[-->`);
      ssrRenderList([...links, { to: "/contacto", label: "Contacto" }], (item) => {
        _push(`<li data-v-6efd6a8e><a${ssrRenderAttr("href", item.to)} data-v-6efd6a8e>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div></details></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6efd6a8e"]]);
const fareminImage = "/img/projects/faremin-1200.webp";
const _sfc_main$1 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const fareminOptimized = fareminImage;
    const tiltStyle = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-section",
        "aria-labelledby": "home-title"
      }, _attrs))} data-v-ad68ec95><div class="site-container hero-content" data-v-ad68ec95><div class="hero-copy" data-v-ad68ec95><p class="hero-eyebrow" data-v-ad68ec95><span aria-hidden="true" data-v-ad68ec95></span>Dise\xF1o y desarrollo para tu empresa</p><h1 id="home-title" data-v-ad68ec95>Desarrollo web y software <span data-v-ad68ec95>para tu empresa.</span></h1><p class="hero-description" data-v-ad68ec95>Creamos p\xE1ginas web, tiendas online y sistemas a medida para empresas en Chile. Definimos el alcance contigo y te acompa\xF1amos desde la idea hasta el lanzamiento.</p><div class="hero-actions" data-v-ad68ec95><a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20cotizar%20mi%20proyecto%20web%2Fsoftware" target="_blank" rel="noopener" class="btn btn-primary" data-v-ad68ec95> Hablemos de tu proyecto <span aria-hidden="true" data-v-ad68ec95>\u2197</span></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver nuestros proyectos <span aria-hidden="true" data-v-ad68ec95${_scopeId}>\u2193</span>`);
          } else {
            return [
              createTextVNode("Ver nuestros proyectos "),
              createVNode("span", { "aria-hidden": "true" }, "\u2193")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero-details" data-v-ad68ec95><div class="hero-detail hero-detail--design" aria-hidden="true" data-v-ad68ec95>`);
      _push(ssrRenderComponent(unref(PanelsTopLeft), null, null, _parent));
      _push(`<span data-v-ad68ec95>Dise\xF1o a medida</span></div><div class="hero-detail hero-detail--team" aria-hidden="true" data-v-ad68ec95>`);
      _push(ssrRenderComponent(unref(MessageCircle), null, null, _parent));
      _push(`<span data-v-ad68ec95>Contacto directo</span></div></div></div><div class="hero-project-motion" data-v-ad68ec95><div class="hero-project-tilt" style="${ssrRenderStyle(tiltStyle.value)}" data-v-ad68ec95><figure class="hero-project" data-v-ad68ec95><div class="hero-project__bar" data-v-ad68ec95><div class="hero-project__dots" aria-hidden="true" data-v-ad68ec95><i data-v-ad68ec95></i><i data-v-ad68ec95></i><i data-v-ad68ec95></i></div><span data-v-ad68ec95>Una muestra de nuestro trabajo</span><span class="hero-project__type" data-v-ad68ec95>Desarrollo web</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "hero-project__preview",
        "aria-label": "Ver el proyecto Maestranza Faremin en nuestro portfolio"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture data-v-ad68ec95${_scopeId}><source media="(max-width: 640px)" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-v-ad68ec95${_scopeId}><source${ssrRenderAttr("srcset", unref(fareminOptimized))} type="image/webp" data-v-ad68ec95${_scopeId}><img${ssrRenderAttr("src", fareminImage)} alt="Sitio web desarrollado para Maestranza Faremin, con su presentaci\xF3n de ingenier\xEDa para la industria minera" width="1600" height="911" fetchpriority="high" data-v-ad68ec95${_scopeId}></picture>`);
          } else {
            return [
              createVNode("picture", null, [
                createVNode("source", {
                  media: "(max-width: 640px)",
                  srcset: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }),
                createVNode("source", {
                  srcset: unref(fareminOptimized),
                  type: "image/webp"
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  src: fareminImage,
                  alt: "Sitio web desarrollado para Maestranza Faremin, con su presentaci\xF3n de ingenier\xEDa para la industria minera",
                  width: "1600",
                  height: "911",
                  fetchpriority: "high"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<figcaption data-v-ad68ec95><div data-v-ad68ec95><span class="hero-project__label" data-v-ad68ec95>Proyecto destacado</span><h2 data-v-ad68ec95>Maestranza Faremin</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "hero-project__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Conoce nuestro trabajo <span aria-hidden="true" data-v-ad68ec95${_scopeId}>\u2197</span>`);
          } else {
            return [
              createTextVNode("Conoce nuestro trabajo "),
              createVNode("span", { "aria-hidden": "true" }, "\u2197")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</figcaption></figure></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ad68ec95"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ script: [{ src: "/home-interactions.js", defer: true }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeNavigation = __nuxt_component_0;
      const _component_AppHeader = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans impulso-hybrid" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_HomeNavigation, { class: "absolute top-0 left-0 w-full z-10" }, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`</div><a href="#contenido" class="skip-link">Saltar al contenido</a><main id="contenido" tabindex="-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20sus%20servicios" target="_blank" rel="noopener" aria-label="WhatsApp" class="whatsapp-float"><svg viewBox="0 0 32 32" class="w-8 h-8 text-white" fill="currentColor"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.84-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 5.24 1.33c5.963 0 10.812-4.84 10.812-10.8 0-5.957-4.85-10.788-10.824-10.788z"></path></svg></a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-ChnSUAnM.mjs.map
