import { defineComponent, defineAsyncComponent, h, mergeProps, hydrateOnVisible, useSSRContext } from 'vue';
import { u as useNuxtApp } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSEO } from './useSEO-Bnh4dISb.mjs';
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

function defineLazyComponent(props, defineStrategy) {
  return (id, loader) => defineComponent({
    inheritAttrs: false,
    props,
    emits: ["hydrated"],
    setup(props2, ctx) {
      {
        const nuxtApp = useNuxtApp();
        nuxtApp.hook("app:rendered", ({ ssrContext }) => {
          ssrContext["~lazyHydratedModules"] || (ssrContext["~lazyHydratedModules"] = /* @__PURE__ */ new Set());
          ssrContext["~lazyHydratedModules"].add(id);
        });
      }
      const child = defineAsyncComponent({ loader });
      const comp = defineAsyncComponent({
        hydrate: defineStrategy(props2),
        loader: () => Promise.resolve(child)
      });
      const onVnodeMounted = () => {
        ctx.emit("hydrated");
      };
      return () => h(comp, mergeProps(ctx.attrs, { onVnodeMounted }), ctx.slots);
    }
  });
}
const createLazyVisibleComponent = defineLazyComponent(
  {
    hydrateOnVisible: {
      type: [Object, Boolean],
      required: false,
      default: true
    }
  },
  (props) => hydrateOnVisible(props.hydrateOnVisible === true ? void 0 : props.hydrateOnVisible)
);
const __nuxt_component_0_lazy_visible = createLazyVisibleComponent("components/home/HomeValue.vue", () => import('./HomeValue-DG07qlXJ.mjs').then((c) => c.default || c));
const __nuxt_component_1_lazy_visible = createLazyVisibleComponent("components/home/HomeProblems.vue", () => import('./HomeProblems-C8E4huYe.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy_visible = createLazyVisibleComponent("components/home/HomeProposition.vue", () => import('./HomeProposition-CfgZQ4HN.mjs').then((c) => c.default || c));
const __nuxt_component_3_lazy_visible = createLazyVisibleComponent("components/home/HomeBusinessUnits.vue", () => import('./HomeBusinessUnits-DY8NjIvf.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy_visible = createLazyVisibleComponent("components/home/HomeTrust.vue", () => import('./HomeTrust-B965oYAv.mjs').then((c) => c.default || c));
const __nuxt_component_5_lazy_visible = createLazyVisibleComponent("components/home/HomeBanner.vue", () => import('./HomeBanner-CJFevK_c.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "SysifosWeb | Desarrollo de Software y P\xE1ginas Web en Chile",
      description: "Creamos software a medida, p\xE1ginas web profesionales y tiendas online para empresas en Chile. Especialistas en Laravel, Nuxt y arquitecturas escalables. \xA1Cotiza gratis hoy!",
      keywords: "desarrollo de software chile, p\xE1ginas web profesionales chile, desarrollo web coquimbo, software a medida, tiendas online chile, consultor\xEDa tecnol\xF3gica chile, aplicaciones web empresas",
      image: "/img/og-home.jpg"
    });
    setSchema({
      type: "WebPage",
      data: {
        name: "SysifosWeb \u2014 Desarrollo de Software y P\xE1ginas Web en Chile",
        description: "Agencia de desarrollo de software, p\xE1ginas web y ecommerce para empresas en Chile. Laravel, Nuxt, Vue.js y m\xE1s."
      }
    });
    setSchema({
      type: "LocalBusiness",
      data: {
        name: "Sysifos Web",
        description: "Agencia de desarrollo de software, p\xE1ginas web profesionales y tiendas online en coquimbo, Chile. Especialistas en Laravel, Nuxt, Vue.js y React.",
        telephone: "+56-9-8502-1549",
        email: "contacto@sysifosweb.cl",
        addressLocality: "coquimbo",
        addressRegion: "Coquimbo",
        addressCountry: "CL",
        openingHours: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }
        ],
        priceRange: "$$"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyVisibleHomeValue = __nuxt_component_0_lazy_visible;
      const _component_LazyVisibleHomeProblems = __nuxt_component_1_lazy_visible;
      const _component_LazyVisibleHomeProposition = __nuxt_component_2_lazy_visible;
      const _component_LazyVisibleHomeBusinessUnits = __nuxt_component_3_lazy_visible;
      const _component_LazyVisibleHomeTrust = __nuxt_component_4_lazy_visible;
      const _component_LazyVisibleHomeBanner = __nuxt_component_5_lazy_visible;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LazyVisibleHomeValue, { "hydrate-on-visible": "" }, null, _parent));
      _push(ssrRenderComponent(_component_LazyVisibleHomeProblems, { "hydrate-on-visible": "" }, null, _parent));
      _push(ssrRenderComponent(_component_LazyVisibleHomeProposition, { "hydrate-on-visible": "" }, null, _parent));
      _push(ssrRenderComponent(_component_LazyVisibleHomeBusinessUnits, { "hydrate-on-visible": "" }, null, _parent));
      _push(ssrRenderComponent(_component_LazyVisibleHomeTrust, { "hydrate-on-visible": "" }, null, _parent));
      _push(ssrRenderComponent(_component_LazyVisibleHomeBanner, { "hydrate-on-visible": "" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cd2Q6_Vi.mjs.map
