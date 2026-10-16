import { j as buildAssetsURL } from '../_/nitro.mjs';
import { mergeProps, resolveDirective, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { TrendingUp, ArrowRight, Zap, Activity, ShieldCheck } from 'lucide-vue-next';
import { u as useSEO } from './useSEO-BIcZW3-z.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'node:crypto';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import 'vue-router';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark pt-32 pb-10 lg:pt-48 lg:pb-16 overflow-hidden" }, _attrs))} data-v-63070594><div class="section-glow-purple glow-center" data-v-63070594></div><div class="section-container relative z-20 text-center flex flex-col items-center" data-v-63070594><div${ssrRenderAttrs(mergeProps({
    class: "eyebrow-badge mx-auto mb-6",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-63070594><span class="eyebrow-badge__dot" data-v-63070594></span><span class="eyebrow-badge__text" data-v-63070594>Impacto y Resultados</span></div><h1${ssrRenderAttrs(mergeProps({
    class: "section-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-63070594> Plataformas que <br class="md:hidden" data-v-63070594><span class="text-accent" data-v-63070594>Escalan Negocios.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-xl mx-auto",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-63070594><p class="section-subtitle text-lg text-subdued font-medium" data-v-63070594> No construimos simples webs; desarrollamos infraestructuras digitales de alto rendimiento. Descubre c\xF3mo ayudamos a empresas a optimizar sus procesos, multiplicar su conversi\xF3n y liderar su sector mediante ingenier\xEDa de software premium. </p></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-63070594"]]);
const fareminImg = "" + buildAssetsURL("Faremin.BJNiIC4f.jpeg");
const stahlformImg = "" + buildAssetsURL("StahlForm.f_-F-LCh.jpeg");
const ansarImg = "" + buildAssetsURL("Ansar.BIRTxN9m.jpeg");
const _sfc_main$2 = {
  __name: "GridSection",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        id: "01",
        title: "Maestranza Faremin",
        description: "Plataforma B2B para industria metalmec\xE1nica de alta precisi\xF3n.",
        problem: "Operaciones dependientes de procesos manuales, dificultad para exhibir capacidad t\xE9cnica a clientes internacionales y cuellos de botella en la adquisici\xF3n de clientes corporativos.",
        solution: "Desarrollamos una plataforma de gesti\xF3n operativa y exhibici\xF3n t\xE9cnica, implementando un cat\xE1logo din\xE1mico con renderizado de activos y optimizaci\xF3n extrema de carga LCP.",
        result: "Posicionamiento instant\xE1neo como l\xEDder tecnol\xF3gico en su sector, abriendo nuevas l\xEDneas de negocio internacionales gracias a una infraestructura digital escalable.",
        stats: [
          { label: "Uptime Operacional", value: "99.9%" },
          { label: "Tiempo de Carga", value: "0.8s" },
          { label: "Activos Digitalizados", value: "200+" }
        ],
        image: fareminImg,
        link: "#",
        stack: ["Vue.js", "Laravel", "PostgreSQL", "Performance-First"]
      },
      {
        id: "02",
        title: "StahlForm",
        description: "Infraestructura web de alta conversi\xF3n para manufactura.",
        problem: "Falta de presencia digital alineada con la calidad de sus servicios premium de manufactura, resultando en una baja tasa de captura de leads calificados.",
        solution: "Dise\xF1amos y construimos una landing page estrat\xE9gica, utilizando una arquitectura est\xE1tica moderna para garantizar m\xE9tricas perfectas de Core Web Vitals.",
        result: "Incremento exponencial en la captaci\xF3n de prospectos B2B y posicionamiento premium en canales digitales, dominando la percepci\xF3n frente a su competencia directa.",
        stats: [
          { label: "Score Web Vitals", value: "100/100" },
          { label: "Optimizaci\xF3n SEO", value: "Perfecta" },
          { label: "Aumento en Conversi\xF3n", value: "25%" }
        ],
        image: stahlformImg,
        link: "#",
        stack: ["Nuxt 3", "Tailwind", "Vite", "SEO Optimized"]
      },
      {
        id: "03",
        title: "Ansar Automotriz",
        description: "Plataforma digital integral para gesti\xF3n y venta automotriz.",
        problem: "Canales de venta digitales fragmentados y falta de una plataforma centralizada que brindara una experiencia de usuario premium al nivel de su inventario.",
        solution: "Arquitecturamos un ecosistema completo con integraci\xF3n de cat\xE1logo en tiempo real, utilizando una aproximaci\xF3n API-First con notificaciones din\xE1micas.",
        result: "Modernizaci\xF3n del flujo de ventas y cotizaciones, reduciendo dram\xE1ticamente la fricci\xF3n en la compra y elevando el est\xE1ndar digital en su mercado.",
        stats: [
          { label: "Tasa de Disponibilidad", value: "Alta" },
          { label: "Arquitectura", value: "API-First" },
          { label: "Performance", value: "95/100" }
        ],
        image: ansarImg,
        link: "#",
        stack: ["Nuxt 3", "Tailwind", "Firebase", "Secure Platform"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-section-dark pb-20" }, _attrs))} data-v-56ea9726><!--[-->`);
      ssrRenderList(projects, (project, index) => {
        _push(`<div class="relative py-10 lg:py-12 overflow-hidden group/section" data-v-56ea9726><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] opacity-0 group-hover/section:opacity-100 transition-opacity duration-1000 pointer-events-none" data-v-56ea9726></div><div class="section-container relative z-10" data-v-56ea9726><div class="mb-10 lg:mb-12 flex flex-col items-start relative" data-v-56ea9726><div${ssrRenderAttrs(mergeProps({
          class: "flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent",
          "data-delay": "0"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><span class="w-8 h-[1px] bg-accent/50" data-v-56ea9726></span> CASO DE ESTUDIO ${ssrInterpolate(project.id)}</div><h2${ssrRenderAttrs(mergeProps({
          class: "text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-content mb-4",
          "data-delay": "100"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726>${ssrInterpolate(project.title.split(" ")[0])} <span class="text-transparent bg-clip-text bg-gradient-to-r from-heading-start to-heading-end" data-v-56ea9726>${ssrInterpolate(project.title.split(" ").slice(1).join(" "))}</span></h2><p${ssrRenderAttrs(mergeProps({
          class: "text-xl text-subdued font-medium max-w-2xl",
          "data-delay": "200"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726>${ssrInterpolate(project.description)}</p></div><div class="${ssrRenderClass([index % 2 !== 0 ? "lg:flex-row-reverse" : "", "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"])}" data-v-56ea9726><div class="${ssrRenderClass([index % 2 !== 0 ? "lg:order-2" : "", "lg:col-span-5 flex flex-col gap-8"])}" data-v-56ea9726><div class="space-y-8" data-v-56ea9726><div${ssrRenderAttrs(mergeProps({ "data-delay": "200" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><h3 class="text-sm font-bold uppercase tracking-widest text-subdued mb-3" data-v-56ea9726>El Desaf\xEDo</h3><p class="text-content leading-relaxed font-medium" data-v-56ea9726>${ssrInterpolate(project.problem)}</p></div><div${ssrRenderAttrs(mergeProps({ "data-delay": "300" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><h3 class="text-sm font-bold uppercase tracking-widest text-subdued mb-3" data-v-56ea9726>Nuestra Soluci\xF3n</h3><p class="text-content leading-relaxed font-medium" data-v-56ea9726>${ssrInterpolate(project.solution)}</p></div><div${ssrRenderAttrs(mergeProps({ "data-delay": "400" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><h3 class="text-sm font-bold uppercase tracking-widest text-accent mb-3 flex items-center gap-2" data-v-56ea9726>`);
        _push(ssrRenderComponent(unref(TrendingUp), { class: "w-4 h-4" }, null, _parent));
        _push(` Impacto de Negocio </h3><p class="text-content leading-relaxed font-semibold" data-v-56ea9726>${ssrInterpolate(project.result)}</p></div></div><div${ssrRenderAttrs(mergeProps({
          class: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4",
          "data-delay": "500"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><!--[-->`);
        ssrRenderList(project.stats, (stat) => {
          _push(`<div class="bg-panel border border-line rounded-2xl p-5 flex flex-col justify-center transition-all hover:bg-panel hover:border-line hover:-translate-y-1" data-v-56ea9726><div class="text-3xl font-black text-content mb-2 tracking-tight" data-v-56ea9726>${ssrInterpolate(stat.value)}</div><div class="text-[11px] font-bold text-subdued uppercase tracking-widest leading-snug" data-v-56ea9726>${ssrInterpolate(stat.label)}</div></div>`);
        });
        _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({
          class: "mt-6",
          "data-delay": "600"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><a${ssrRenderAttr("href", project.link)} target="_blank" class="inline-flex items-center justify-center gap-3 bg-accent text-action font-bold py-4 px-8 rounded-xl hover:bg-accent hover:text-action transition-all duration-300 group hover:shadow-[0_0_30px_rgba(var(--color-accent),0.3)] w-full sm:w-auto" data-v-56ea9726> Explorar caso completo `);
        _push(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5 group-hover:translate-x-1 transition-transform" }, null, _parent));
        _push(`</a></div></div><div${ssrRenderAttrs(mergeProps({
          class: ["lg:col-span-7 relative group", index % 2 !== 0 ? "lg:order-1" : ""],
          "data-delay": "400"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><div class="absolute inset-0 bg-accent/20 blur-[80px] rounded-full transform scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-v-56ea9726></div><div class="impulso-closing relative overflow-hidden aspect-[4/3] rounded-[2rem] border border-line shadow-2xl bg-panel transform transition-transform duration-700 group-hover:-translate-y-2 isolate" style="${ssrRenderStyle({ "-webkit-mask-image": "-webkit-radial-gradient(white, black)" })}" data-v-56ea9726><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none rounded-[2rem]" data-v-56ea9726></div><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" loading="lazy" data-v-56ea9726><div class="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2 z-20 pointer-events-none" data-v-56ea9726><!--[-->`);
        ssrRenderList(project.stack, (tech, i) => {
          _push(`<span class="${ssrRenderClass([i === project.stack.length - 1 ? "bg-accent/20 text-accent border-accent/30" : "bg-panel text-content border-line", "px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md border transition-colors"])}" data-v-56ea9726>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
      });
      _push(`<!--]--><div${ssrRenderAttrs(mergeProps({
        class: "section-container relative z-10 mt-20",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-56ea9726><div class="impulso-closing bg-section-dark relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-quiet to-transparent border border-line p-12 lg:p-20 text-center backdrop-blur-sm transition-colors hover:border-line" data-v-56ea9726><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-accent/10 rounded-[100%] blur-[100px] pointer-events-none" data-v-56ea9726></div><div class="relative z-10 max-w-3xl mx-auto" data-v-56ea9726><h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-content mb-6 tracking-tight" data-v-56ea9726>Construyamos tu pr\xF3xima <br class="hidden md:block" data-v-56ea9726><span class="text-transparent bg-clip-text bg-gradient-to-r from-heading-start to-heading-end" data-v-56ea9726>plataforma digital.</span></h2><p class="text-lg md:text-xl text-subdued font-medium mb-10" data-v-56ea9726>Deja de competir por precio y empieza a competir por innovaci\xF3n. Dise\xF1amos ecosistemas digitales que transforman marcas y multiplican conversiones.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "inline-flex items-center justify-center gap-3 bg-accent text-action font-bold py-5 px-10 rounded-xl hover:bg-quiet hover:text-content transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--color-accent),0.4)] hover:-translate-y-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Iniciar Proyecto `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Iniciar Proyecto "),
              createVNode(unref(ArrowRight), { class: "w-5 h-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/GridSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-56ea9726"]]);
const _sfc_main$1 = {
  __name: "StatsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { label: "Proyectos Entregados", value: "24", icon: Zap },
      { label: "Disponibilidad Activa", value: "100%", icon: Activity },
      { label: "Clientes Satisfechos", value: "15+", icon: ShieldCheck }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-12 lg:py-16 overflow-hidden" }, _attrs))} data-v-d6df368c><div class="section-glow-cyan glow-bottom-right" data-v-d6df368c></div><div class="section-container relative z-10" data-v-d6df368c><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-d6df368c><!--[-->`);
      ssrRenderList(stats, (stat, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: stat.label,
          class: "card-border bg-section-dark p-10 flex flex-col items-center text-center relative group transition-colors hover:border-accent/30",
          "data-delay": index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-d6df368c><div class="w-16 h-16 rounded-xl bg-section-surface border border-line flex items-center justify-center mb-6 transition-all group-hover:bg-accent/10 group-hover:border-accent/30" data-v-d6df368c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(stat.icon), { class: "w-8 h-8 text-accent opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" }, null), _parent);
        _push(`</div><div class="text-4xl md:text-5xl font-bold text-content mb-3" data-v-d6df368c>${ssrInterpolate(stat.value)}</div><div class="text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-content transition-colors" data-v-d6df368c>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/StatsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d6df368c"]]);
const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Portfolio | Proyectos de Desarrollo Web y Software a Medida \u2014 SysifosWeb",
      description: "Conoce nuestros proyectos reales: Ansar Automotriz, Maestranza Faremin, StahlForm y m\xE1s. Desarrollamos soluciones digitales que generan resultados medibles para empresas en Chile y el mundo.",
      keywords: "portfolio desarrollo web chile, casos de \xE9xito software, proyectos desarrollo web empresas, ejemplos software a medida, soluciones digitales automotriz, ecommerce chile",
      image: "/img/og-portfolio.webp"
    });
    setSchema({
      type: "WebPage",
      data: {
        name: "Portfolio de Proyectos \u2014 SysifosWeb",
        description: "Casos de \xE9xito en desarrollo web, ecommerce y software a medida para empresas en Chile y el mundo."
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioHeroSection = __nuxt_component_0;
      const _component_PortfolioGridSection = __nuxt_component_1;
      const _component_PortfolioStatsSection = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PortfolioHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioGridSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioStatsSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-CBkiTKc6.mjs.map
