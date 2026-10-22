import { _ as _sfc_main$2 } from './AppNavbar-DMkY7GSa.mjs';
import { _ as __nuxt_component_2 } from './Footer-DE4_iArd.mjs';
import { a as useRoute, c as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useGtag } from './useGtag-CozzmnIc.mjs';
import './BrandLogo-CG19ElAN.mjs';
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

const CONSENT_KEY = "sysifos_cookie_consent";
const CONSENT_VERSION = "1.1";
const consent = ref(null);
const bannerVisible = ref(false);
function writeStored(decision) {
  try {
    (void 0).localStorage.setItem(CONSENT_KEY, JSON.stringify({
      decision,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      version: CONSENT_VERSION
    }));
  } catch {
  }
}
function useCookieConsent() {
  useGtag();
  function accept() {
    consent.value = "accepted";
    writeStored("accepted");
    bannerVisible.value = false;
    syncConsent("accepted");
    trackDecision("accepted");
    stripCookiesHash();
    firePageView();
  }
  function reject() {
    consent.value = "rejected";
    writeStored("rejected");
    bannerVisible.value = false;
    syncConsent("rejected");
    trackDecision("rejected");
    stripCookiesHash();
  }
  return {
    consent,
    bannerVisible,
    accept,
    reject
  };
}
function stripCookiesHash() {
  if ((void 0).location.hash === "#cookies") {
    history.replaceState(null, "", (void 0).location.pathname + (void 0).location.search);
  }
}
function trackDecision(decision) {
  if (decision === "accepted") {
    const gtag = getGtag();
    if (gtag) {
      gtag("event", "consent_accepted", { page_path: (void 0).location.pathname });
    }
  }
  try {
    const payload = JSON.stringify({
      decision,
      path: (void 0).location.pathname,
      ts: Date.now()
    });
    if ((void 0).sendBeacon) {
      (void 0).sendBeacon("/api/consent", new Blob([payload], { type: "application/json" }));
    } else {
      fetch("/api/consent", {
        method: "POST",
        body: payload,
        headers: { "Content-Type": "application/json" },
        keepalive: true
      });
    }
  } catch {
  }
}
function getGtag() {
  {
    return null;
  }
}
function syncConsent(decision) {
  const gtag = getGtag();
  if (gtag) {
    gtag("consent", "update", {
      ad_storage: decision === "accepted" ? "granted" : "denied",
      analytics_storage: decision === "accepted" ? "granted" : "denied",
      ad_user_data: decision === "accepted" ? "granted" : "denied",
      ad_personalization: decision === "accepted" ? "granted" : "denied"
    });
  }
}
function firePageView() {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }
  gtag("event", "page_view", {
    page_location: (void 0).location.href,
    page_title: (void 0).title,
    page_path: (void 0).location.pathname
  });
}
const _sfc_main$1 = {
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const { bannerVisible: bannerVisible2 } = useCookieConsent();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(bannerVisible2)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "impulso-closing fixed bottom-20 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-24 sm:max-w-md z-[9999] rounded-2xl border border-white/10 bg-[#102b46]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-6",
          role: "dialog",
          "aria-labelledby": "cookie-title",
          "aria-describedby": "cookie-desc"
        }, _attrs))}><div class="flex flex-col gap-4"><div><h2 id="cookie-title" class="text-sm font-bold text-white mb-2"> Tu lectura nos ense\xF1a </h2><p id="cookie-desc" class="text-xs text-white/60 leading-relaxed"> Con tu permiso medimos qu\xE9 art\xEDculos se leen (Google Analytics, <strong class="text-white/80">sin publicidad personalizada</strong> y sin compartir tus datos con terceros) para seguir publicando contenido como el que est\xE1s leyendo. Puedes cambiar de opini\xF3n cuando quieras. M\xE1s detalles en nuestra `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacidad",
          class: "text-accent underline hover:text-content"
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
        _push(`. </p></div><div class="flex flex-col gap-2"><button class="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-gray-200 hover:scale-[1.02] transition-all"> Aceptar medici\xF3n </button><button class="w-full py-2 rounded-lg border border-white/15 text-white/70 font-medium text-[0.7rem] hover:text-white hover:bg-white/5 transition-colors"> Solo lo necesario </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = _sfc_main$2;
      const _component_Footer = __nuxt_component_2;
      const _component_CookieConsent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans impulso-hybrid bg-section-dark" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-50" }, null, _parent));
      _push(`<a href="#contenido" class="skip-link">Saltar al contenido</a><main id="contenido" tabindex="-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_CookieConsent, null, null, _parent));
      _push(`<a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20sus%20servicios" target="_blank" rel="noopener" aria-label="WhatsApp" class="whatsapp-float"><svg viewBox="0 0 32 32" class="w-8 h-8 text-white" fill="currentColor"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.84-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 5.24 1.33c5.963 0 10.812-4.84 10.812-10.8 0-5.957-4.85-10.788-10.824-10.788z"></path></svg></a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=hero-DcxJAUn8.mjs.map
