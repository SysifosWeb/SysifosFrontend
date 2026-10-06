import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { unref, mergeProps, withCtx, createTextVNode, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const CONSENT_KEY = "sysifos_cookie_consent";
const CONSENT_VERSION = "1.1";
const consent = ref(null);
const bannerVisible = ref(false);
function writeStored(decision) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    decision,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: CONSENT_VERSION
  }));
}
function useCookieConsent() {
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
const _sfc_main = {
  __name: "CookieConsent",
  __ssrInlineRender: true,
  setup(__props) {
    const { bannerVisible: bannerVisible2 } = useCookieConsent();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(bannerVisible2)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9999] rounded-2xl border border-white/10 bg-[#0b1222]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-6",
          role: "dialog",
          "aria-labelledby": "cookie-title",
          "aria-describedby": "cookie-desc"
        }, _attrs))} data-v-9b6ead63><div class="flex flex-col gap-4" data-v-9b6ead63><div data-v-9b6ead63><h2 id="cookie-title" class="text-sm font-bold text-white mb-2" data-v-9b6ead63> Tu lectura nos ense\xF1a \u{1F4A1} </h2><p id="cookie-desc" class="text-xs text-white/60 leading-relaxed" data-v-9b6ead63> Con tu permiso medimos qu\xE9 art\xEDculos se leen (Google Analytics, <strong class="text-white/80" data-v-9b6ead63>sin publicidad personalizada</strong> y sin compartir tus datos con terceros) para seguir publicando contenido como el que est\xE1s leyendo. Puedes cambiar de opini\xF3n cuando quieras. M\xE1s detalles en nuestra `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacidad",
          class: "text-sky-400 underline hover:text-sky-300"
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
        _push(`. </p></div><div class="flex flex-col gap-2" data-v-9b6ead63><button class="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-gray-200 hover:scale-[1.02] transition-all" data-v-9b6ead63> Aceptar medici\xF3n </button><button class="w-full py-2 rounded-lg border border-white/15 text-white/70 font-medium text-[0.7rem] hover:text-white hover:bg-white/5 transition-colors" data-v-9b6ead63> Solo lo necesario </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b6ead63"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CookieConsent-ILwkEg0B.mjs.map
