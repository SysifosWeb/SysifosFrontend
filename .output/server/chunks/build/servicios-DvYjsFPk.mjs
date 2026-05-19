import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BLd6oUAj.mjs';
import { mergeProps, resolveDirective, withCtx, createTextVNode, openBlock, createBlock, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { TrendingUp, Database, Code2, ShoppingBag, LayoutTemplate, Smartphone, CheckCircle2, ArrowRight } from 'lucide-vue-next';
import { _ as __nuxt_component_1$1 } from './CtaSection-CcAB119T.mjs';
import { u as useGtag } from './useGtag-BS-jXPQX.mjs';
import { u as useSEO } from './useSEO-D-YRHZQs.mjs';
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
import 'vue-router';
import './v3-CiTU68zq.mjs';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section bg-section-dark pt-32 lg:pt-48 pb-16 lg:pb-24" }, _attrs))} data-v-cbc82920><div class="section-glow-cyan glow-center" data-v-cbc82920></div><div class="section-container text-center flex flex-col items-center" data-v-cbc82920><div${ssrRenderAttrs(mergeProps({
    class: "eyebrow-badge mx-auto mb-8",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-cbc82920><span class="eyebrow-badge__dot" data-v-cbc82920></span><span class="eyebrow-badge__text" data-v-cbc82920>Soluciones Digitales</span></div><h1${ssrRenderAttrs(mergeProps({
    class: "hero-headline mb-8",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-cbc82920> Construido para escalar.<br data-v-cbc82920><span class="hero-accent" data-v-cbc82920>Dise\xF1ado para liderar.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-2xl mx-auto mb-10",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-cbc82920><p class="hero-subtitle" data-v-cbc82920> Brindamos la tecnolog\xEDa, el dise\xF1o y la infraestructura que tu empresa necesita para moverse r\xE1pido, captar m\xE1s clientes y operar sin fricci\xF3n. </p></div><div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",
    "data-delay": "300"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-cbc82920>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "cta-primary-btn w-full sm:w-auto justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Iniciar un proyecto <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-cbc82920${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-cbc82920${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Iniciar un proyecto "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4 ml-2",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/portfolio",
    class: "cta-ghost w-full sm:w-auto justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ver casos de \xE9xito `);
      } else {
        return [
          createTextVNode(" Ver casos de \xE9xito ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicios/HeroSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-cbc82920"]]);
const _sfc_main$3 = {
  __name: "ListSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: "01",
        eyebrow: "Conversi\xF3n",
        title: "Landing Pages",
        description: "Embudos de venta dise\xF1ados para capturar leads calificados.",
        icon: TrendingUp,
        features: [
          "Copywriting persuasivo",
          "Dise\xF1o orientado a la acci\xF3n",
          "Velocidad de carga extrema",
          "Integraci\xF3n con tu CRM"
        ],
        ctaText: "Cotizar Landing Page",
        ctaLink: "https://wa.me/56949109970?text=Hola,%20necesito%20una%20Landing%20Page."
      },
      {
        id: "02",
        eyebrow: "Arquitectura",
        title: "Bases de Datos",
        description: "Estructuras de datos garantizando seguridad bancaria y consultas veloces.",
        icon: Database,
        features: [
          "Arquitectura Relacional / NoSQL",
          "Optimizaci\xF3n de consultas",
          "Copias de seguridad automatizadas",
          "Seguridad y encriptaci\xF3n"
        ],
        ctaText: "Cotizar Base de Datos",
        ctaLink: "https://wa.me/56949109970?text=Hola,%20necesito%20gesti\xF3n%20de%20Bases%20de%20Datos."
      },
      {
        id: "03",
        eyebrow: "Eficiencia",
        title: "Software a Medida",
        description: "Sistemas que automatizan tareas manuales y reducen costos operativos.",
        icon: Code2,
        features: [
          "Automatizaci\xF3n de procesos",
          "Paneles de administraci\xF3n",
          "Conexi\xF3n mediante APIs",
          "Soporte t\xE9cnico dedicado"
        ],
        ctaText: "Cotizar Software",
        ctaLink: "https://wa.me/56949109970?text=Hola,%20busco%20desarrollo%20de%20Software%20a%20Medida."
      },
      {
        id: "04",
        eyebrow: "Transaccional",
        title: "Desarrollo E-commerce",
        description: "Tiendas online construidas para vender 24/7 sin l\xEDmites de stock.",
        icon: ShoppingBag,
        features: [
          "Checkout sin fricci\xF3n",
          "Integraci\xF3n de pasarelas de pago",
          "Gesti\xF3n de inventarios",
          "Optimizaci\xF3n log\xEDstica"
        ],
        ctaText: "Cotizar E-commerce",
        ctaLink: "https://wa.me/56949109970?text=Hola,%20necesito%20un%20E-commerce."
      },
      {
        id: "05",
        eyebrow: "Corporativo",
        title: "Plataformas Web",
        description: "Sistemas extensos con gesti\xF3n de roles para alto volumen de tr\xE1fico.",
        icon: LayoutTemplate,
        features: [
          "CMS Empresarial",
          "Gesti\xF3n de m\xFAltiples usuarios",
          "Arquitectura escalable (Cloud)",
          "SEO T\xE9cnico avanzado"
        ],
        ctaText: "Cotizar Plataforma",
        ctaLink: "https://wa.me/56949109970?text=Hola,%20busco%20una%20Plataforma%20Web."
      },
      {
        id: "06",
        eyebrow: "Impacto",
        title: "One Page Sites",
        description: "Sitios fluidos e impactantes en una sola pantalla. Ideales para lanzamientos.",
        icon: Smartphone,
        features: [
          "Navegaci\xF3n ultra-fluida",
          "Animaciones interactivas",
          "Dise\xF1o Mobile-First",
          "Alto impacto visual"
        ],
        ctaText: "Cotizar One Page",
        ctaLink: "https://wa.me/56949109970?text=Hola,%20necesito%20un%20sitio%20One%20Page."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-8 lg:py-16 overflow-hidden" }, _attrs))} data-v-97796fb2><div class="section-container relative z-10" data-v-97796fb2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-v-97796fb2><!--[-->`);
      ssrRenderList(services, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: item.id,
          "data-delay": index * 100,
          class: "group relative flex flex-col p-8 lg:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/15 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-97796fb2><div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-97796fb2></div><div class="flex justify-between items-start mb-6 relative z-10" data-v-97796fb2><div class="w-14 h-14 rounded-2xl bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.02)] flex items-center justify-center border border-white/10 text-accent group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500" data-v-97796fb2>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "w-7 h-7 drop-shadow-lg" }, null), _parent);
        _push(`</div><span class="text-[10px] font-extrabold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20" data-v-97796fb2>${ssrInterpolate(item.eyebrow)}</span></div><h3 class="text-2xl font-bold tracking-tight text-white mb-3 relative z-10" data-v-97796fb2>${ssrInterpolate(item.title)}</h3><p class="text-white/60 text-sm leading-relaxed mb-6 h-10 relative z-10" data-v-97796fb2>${ssrInterpolate(item.description)}</p><div class="relative w-full my-6 flex items-center z-10" data-v-97796fb2><div class="w-full border-t border-dashed border-white/10 group-hover:border-white/20 transition-colors duration-500" data-v-97796fb2></div></div><div class="flex-grow mb-8 relative z-10" data-v-97796fb2><p class="text-[11px] font-bold text-accent/60 uppercase tracking-widest mb-4" data-v-97796fb2>\xBFQu\xE9 incluye?</p><ul class="flex flex-col gap-3" data-v-97796fb2><!--[-->`);
        ssrRenderList(item.features, (feature) => {
          _push(`<li class="flex items-start gap-3 text-sm text-white/80 font-medium" data-v-97796fb2><div class="relative flex items-center justify-center mt-0.5" data-v-97796fb2><div class="absolute inset-0 bg-accent/20 rounded-full blur-[4px] group-hover:blur-[6px] transition-all" data-v-97796fb2></div><div class="relative w-5 h-5 rounded-full bg-gradient-to-br from-accent/20 to-transparent border border-accent/40 flex items-center justify-center shadow-inner" data-v-97796fb2>`);
          _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3 text-accent" }, null, _parent));
          _push(`</div></div><span class="leading-tight" data-v-97796fb2>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></div><a${ssrRenderAttr("href", item.ctaLink)} target="_blank" class="w-full relative z-10 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 bg-white/5 text-white hover:bg-accent hover:text-black border border-white/10 hover:border-accent" data-v-97796fb2>${ssrInterpolate(item.ctaText)} `);
        _push(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent));
        _push(`</a></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicios/ListSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-97796fb2"]]);
const imgAnalysis = "" + buildAssetsURL("Estrategia.CCMIqNO1.webp");
const imgDesign = "" + buildAssetsURL("dise\xF1o._Zwbrrym.webp");
const imgDev = "" + buildAssetsURL("arquitectura.yTo3fKt-.webp");
const imgDeploy = "" + buildAssetsURL("despliege.CrdPmiWC.webp");
const _sfc_main$2 = {
  __name: "ProcesoSection",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        id: "01",
        title: "Diagn\xF3stico & Estrategia",
        description: "No escribimos una l\xEDnea de c\xF3digo sin entender tu negocio. Auditamos tus flujos actuales, identificamos cuellos de botella y dise\xF1amos la arquitectura exacta para escalar tus m\xE9tricas.",
        image: imgAnalysis,
        align: "right"
      },
      {
        id: "02",
        title: "Dise\xF1o Orientado a Conversi\xF3n",
        description: "La est\xE9tica sin resultados es in\xFAtil. Creamos interfaces de usuario (UI/UX) de clase mundial con un \xFAnico objetivo: guiar la psicolog\xEDa del usuario hacia la compra o registro.",
        image: imgDesign,
        align: "left"
      },
      {
        id: "03",
        title: "Ingenier\xEDa de Software",
        description: "Construimos el motor. Usamos tecnolog\xEDas modernas y arquitecturas cloud preparadas para soportar picos masivos de tr\xE1fico sin sudar. C\xF3digo limpio, seguro y mantenible.",
        image: imgDev,
        align: "right"
      },
      {
        id: "04",
        title: "Despliegue & Crecimiento",
        description: "Lanzamos tu producto al mercado con monitoreo en tiempo real. Pero el lanzamiento es solo el inicio; analizamos los datos y optimizamos continuamente para multiplicar tu ROI.",
        image: imgDeploy,
        align: "left"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-16 lg:py-24 overflow-hidden" }, _attrs))} data-v-c625b15f><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none" data-v-c625b15f></div><div class="section-container relative z-20 text-center mb-24 lg:mb-32" data-v-c625b15f><div${ssrRenderAttrs(mergeProps({
        class: "inline-flex items-center gap-3 mb-8",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c625b15f><span class="w-2 h-2 rounded-full bg-accent animate-pulse" data-v-c625b15f></span><span class="text-sm font-extrabold tracking-[0.2em] text-white/50 uppercase" data-v-c625b15f>El Camino al \xC9xito</span><span class="w-2 h-2 rounded-full bg-accent animate-pulse" data-v-c625b15f></span></div><h2${ssrRenderAttrs(mergeProps({
        class: "text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] text-white",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c625b15f> No hacemos webs. <br data-v-c625b15f><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-blue-500" data-v-c625b15f>Construimos imperios.</span></h2></div><div class="section-container relative z-10" data-v-c625b15f><div class="flex flex-col gap-32 lg:gap-48" data-v-c625b15f><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: step.id,
          class: "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative",
          "data-delay": 200
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c625b15f>`);
        if (index !== steps.length - 1) {
          _push(`<div class="hidden lg:block absolute left-1/2 top-full w-px h-48 bg-gradient-to-b from-white/10 to-transparent -translate-x-1/2 z-0" data-v-c625b15f></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{ "lg:order-2": step.align === "left" }, "flex-1 w-full"])}" data-v-c625b15f><div class="flex items-center gap-6 mb-8" data-v-c625b15f><span class="text-7xl lg:text-8xl font-black text-transparent" style="${ssrRenderStyle({ "-webkit-text-stroke": "1px rgba(255,255,255,0.15)" })}" data-v-c625b15f>${ssrInterpolate(step.id)}</span><div class="h-px w-24 bg-accent/50 hidden md:block" data-v-c625b15f></div></div><h3 class="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight" data-v-c625b15f>${ssrInterpolate(step.title)}</h3><p class="text-lg lg:text-xl text-white/60 leading-relaxed font-medium max-w-lg" data-v-c625b15f>${ssrInterpolate(step.description)}</p></div><div class="${ssrRenderClass([{ "lg:order-1": step.align === "left" }, "flex-1 w-full relative"])}" data-v-c625b15f><div class="absolute inset-0 bg-accent/10 blur-[60px] rounded-full transform scale-90" data-v-c625b15f></div><div class="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 aspect-[4/3] group shadow-2xl" data-v-c625b15f><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 mix-blend-multiply" data-v-c625b15f></div><img${ssrRenderAttr("src", step.image)}${ssrRenderAttr("alt", step.title)} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" loading="lazy" data-v-c625b15f></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicios/ProcesoSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c625b15f"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-12 lg:py-20 overflow-hidden" }, _attrs))} data-v-94265606><div class="section-glow-cyan glow-center" data-v-94265606></div><div class="section-container relative z-20 text-center mb-20 flex flex-col items-center" data-v-94265606><div${ssrRenderAttrs(mergeProps({
    class: "eyebrow-badge mx-auto mb-6",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><span class="eyebrow-badge__dot" data-v-94265606></span><span class="eyebrow-badge__text" data-v-94265606>Infraestructura Tecnol\xF3gica</span></div><h2${ssrRenderAttrs(mergeProps({
    class: "section-title text-3xl md:text-5xl mb-2",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606> Tecnolog\xEDa orientada a <span class="text-accent" data-v-94265606>Resultados.</span></h2><p${ssrRenderAttrs(mergeProps({
    class: "text-white/60 text-lg max-w-2xl mt-6",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606> Elegimos nuestro stack tecnol\xF3gico no por estar a la moda, sino porque garantizan el rendimiento, seguridad y escala que tu empresa requiere. </p></div><div class="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10" data-v-94265606><div data-v-94265606><h3 class="text-sm uppercase tracking-widest mb-6 flex items-center gap-3 font-semibold text-main" data-v-94265606><span class="w-1.5 h-1.5 rounded-full bg-accent" data-v-94265606></span> EXPERIENCIA &amp; VELOCIDAD </h3><div class="space-y-4" data-v-94265606><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><div class="flex justify-between items-center mb-4" data-v-94265606><span class="card-title text-base m-0 font-bold text-white" data-v-94265606>Velocidad Extrema &amp; Mejor SEO</span><span class="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-2 py-1 rounded" data-v-94265606>VUE / NUXT</span></div><p class="text-sm text-white/50" data-v-94265606>Tiempos de carga casi instant\xE1neos que reducen la tasa de rebote y te posicionan m\xE1s alto en Google.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><div class="flex justify-between items-center mb-4" data-v-94265606><span class="card-title text-base m-0 font-bold text-white" data-v-94265606>Interfaces Inmersivas</span><span class="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-2 py-1 rounded" data-v-94265606>REACT / NEXT.JS</span></div><p class="text-sm text-white/50" data-v-94265606>Desarrollo de aplicaciones fluidas, reactivas y modernas que aumentan la retenci\xF3n del usuario.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><div class="flex justify-between items-center mb-4" data-v-94265606><span class="card-title text-base m-0 font-bold text-white" data-v-94265606>Dise\xF1o Pixel-Perfect</span><span class="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-2 py-1 rounded" data-v-94265606>TAILWINDCSS</span></div><p class="text-sm text-white/50" data-v-94265606>Est\xE9tica hiper-personalizada sin plantillas, garantizando que tu marca se vea \xFAnica y premium en cualquier pantalla.</p></div></div></div><div data-v-94265606><h3 class="text-sm uppercase tracking-widest mb-6 flex items-center gap-3 font-semibold text-main" data-v-94265606><span class="w-1.5 h-1.5 rounded-full bg-purple" data-v-94265606></span> ESTABILIDAD &amp; ESCALA </h3><div class="space-y-4" data-v-94265606><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><div class="flex justify-between items-center mb-4" data-v-94265606><span class="card-title text-base m-0 font-bold text-white" data-v-94265606>Arquitectura Escalable</span><span class="text-[10px] font-bold tracking-widest text-purple uppercase bg-purple/10 border border-purple/20 px-2 py-1 rounded" data-v-94265606>LARAVEL / NODE</span></div><p class="text-sm text-white/50" data-v-94265606>Motores de negocio construidos para soportar miles de transacciones concurrentes sin caerse.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><div class="flex justify-between items-center mb-4" data-v-94265606><span class="card-title text-base m-0 font-bold text-white" data-v-94265606>Seguridad de Datos</span><span class="text-[10px] font-bold tracking-widest text-purple uppercase bg-purple/10 border border-purple/20 px-2 py-1 rounded" data-v-94265606>POSTGRESQL</span></div><p class="text-sm text-white/50" data-v-94265606>Bases de datos estructuradas con encriptaci\xF3n de nivel bancario para proteger tu informaci\xF3n m\xE1s valiosa.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-94265606><div class="flex justify-between items-center mb-4" data-v-94265606><span class="card-title text-base m-0 font-bold text-white" data-v-94265606>Estabilidad a Largo Plazo</span><span class="text-[10px] font-bold tracking-widest text-purple uppercase bg-purple/10 border border-purple/20 px-2 py-1 rounded" data-v-94265606>TYPESCRIPT</span></div><p class="text-sm text-white/50" data-v-94265606>C\xF3digo altamente tipado que previene errores cr\xEDticos antes de que lleguen a producci\xF3n, garantizando disponibilidad 24/7.</p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicios/TechStackSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-94265606"]]);
const _sfc_main = {
  __name: "servicios",
  __ssrInlineRender: true,
  setup(__props) {
    useGtag();
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Servicios de Desarrollo Web, E-commerce y Software a Medida",
      description: "Servicios profesionales de desarrollo web, tiendas online, landing pages, WordPress, software a medida y mantenimiento web en Chile. Laravel, Vue.js, React, Flutter. Cotiza gratis.",
      keywords: "servicios desarrollo web, servicios desarrollo software, landing pages chile",
      image: "/img/og-servicios.jpg"
    });
    setSchema({
      type: "Service",
      data: {
        name: "Servicios de Desarrollo Web y Software",
        description: "Desarrollo de p\xE1ginas web, tiendas online, aplicaciones m\xF3viles y software a medida",
        serviceType: "Desarrollo de Software"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiciosHeroSection = __nuxt_component_0;
      const _component_ServiciosListSection = __nuxt_component_1;
      const _component_ServiciosProcesoSection = __nuxt_component_2;
      const _component_ServiciosTechStackSection = __nuxt_component_3;
      const _component_NosotrosCtaSection = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ServiciosHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServiciosListSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServiciosProcesoSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServiciosTechStackSection, null, null, _parent));
      _push(ssrRenderComponent(_component_NosotrosCtaSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=servicios-DvYjsFPk.mjs.map
