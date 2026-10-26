import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, resolveDirective, withCtx, createTextVNode, openBlock, createBlock, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { TrendingUp, ShoppingBag, Database, CheckCircle2, ArrowRight } from 'lucide-vue-next';
import { _ as __nuxt_component_2$1 } from './CtaSection--kB1bezg.mjs';
import { u as useSEO } from './useSEO-Bnh4dISb.mjs';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section bg-section-dark pt-32 lg:pt-48 pb-16 lg:pb-24" }, _attrs))} data-v-658cae55><div class="section-container text-center flex flex-col items-center" data-v-658cae55><p${ssrRenderAttrs(mergeProps({
    class: "section-eyebrow mb-6",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-658cae55>Soluciones digitales</p><h1${ssrRenderAttrs(mergeProps({
    class: "hero-headline mb-8",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-658cae55> P\xE1ginas web, ecommerce <span class="display-accent" data-v-658cae55>y software a medida.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-2xl mx-auto mb-10",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-658cae55><p class="hero-subtitle" data-v-658cae55> Brindamos la tecnolog\xEDa, el dise\xF1o y la infraestructura que tu empresa necesita para moverse r\xE1pido, captar m\xE1s clientes y operar sin fricci\xF3n. </p></div><div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",
    "data-delay": "300"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-658cae55>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "cta-primary-btn w-full sm:w-auto justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Iniciar un proyecto <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-658cae55${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-658cae55${_scopeId}></path></svg>`);
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
        _push2(` Ver proyectos `);
      } else {
        return [
          createTextVNode(" Ver proyectos ")
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-658cae55"]]);
const _sfc_main$3 = {
  __name: "ListSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: "01",
        eyebrow: "CONVERSI\xD3N INMEDIATA",
        title: "P\xE1ginas Web",
        description: "El aliado digital para captar clientes en piloto autom\xE1tico sin perder tiempo.",
        icon: TrendingUp,
        features: [
          "Copywriting persuasivo (Textos que atrapan).",
          "Dise\xF1o Mobile-First (Carga ultra fluida en celulares).",
          "Bot\xF3n directo a tu WhatsApp o formulario.",
          "Estructura lista para aparecer en Google."
        ],
        ctaText: "Cotizar desde $200.000 + IVA",
        ctaLink: "https://wa.me/56985021549?text=Hola,%20me%20interesa%20una%20Landing%20Page/One%20Page."
      },
      {
        id: "02",
        eyebrow: "LIBERTAD Y VENTAS 24/7",
        title: "Tiendas Online",
        description: "Tu tienda online construida para vender y cobrar sola, eliminando la gesti\xF3n manual.",
        icon: ShoppingBag,
        features: [
          "Proceso de compra r\xE1pido y f\xE1cil para el cliente.",
          "Conexi\xF3n autom\xE1tica de inventario y stock.",
          "Recibe pagos con Tarjetas de Cr\xE9dito y D\xE9bito.",
          "Panel autoadministrable (Control total desde tu celular)."
        ],
        ctaText: "Automatizar mi Negocio",
        ctaLink: "https://wa.me/56985021549?text=Hola,%20me%20interesa%20Desarrollo%20E-commerce%20o%20Plataforma."
      },
      {
        id: "03",
        eyebrow: "EFICIENCIA & ESCALABILIDAD",
        title: "Sistemas y Software a Medida",
        description: "Sistemas robustos que reducen costos operativos y blindan la seguridad de tu empresa.",
        icon: Database,
        features: [
          "Sistemas r\xE1pidos y accesibles desde cualquier lugar.",
          "Automatizaci\xF3n de procesos internos pesados.",
          "Seguridad, encriptaci\xF3n y respaldos autom\xE1ticos.",
          "Conexi\xF3n e integraci\xF3n con tus sistemas actuales."
        ],
        ctaText: "Solicitar Evaluaci\xF3n T\xE9cnica",
        ctaLink: "https://wa.me/56985021549?text=Hola,%20necesito%20una%20evaluaci\xF3n%20t\xE9cnica%20para%20Software%20a%20Medida."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-12 lg:py-20 overflow-hidden" }, _attrs))} data-v-2a14b254><div class="section-container relative z-10" data-v-2a14b254><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-v-2a14b254><!--[-->`);
      ssrRenderList(services, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: item.id,
          "data-delay": index * 100,
          class: "plan-card group relative flex flex-col p-8 lg:p-10 rounded-2xl bg-panel border border-line overflow-hidden hover:bg-quiet hover:border-accent/30"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-2a14b254><div class="flex flex-wrap justify-between items-start gap-4 mb-6 relative z-10" data-v-2a14b254><div class="plan-icon w-14 h-14 shrink-0 rounded-2xl bg-quiet flex items-center justify-center border border-line text-accent transition-colors duration-300 group-hover:bg-accent/10 group-hover:border-accent/30" data-v-2a14b254>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "w-7 h-7" }, null), _parent);
        _push(`</div><span class="text-small font-semibold text-accent" data-v-2a14b254>${ssrInterpolate(item.eyebrow)}</span></div><h3 class="text-h3 text-content mb-3 relative z-10" data-v-2a14b254>${ssrInterpolate(item.title)}</h3><p class="text-subdued text-body leading-relaxed mb-6 relative z-10" data-v-2a14b254>${ssrInterpolate(item.description)}</p><div class="flex-grow mb-8 relative z-10" data-v-2a14b254><p class="text-small font-semibold text-accent mb-4" data-v-2a14b254>\xBFQu\xE9 incluye?</p><ul class="flex flex-col gap-3" data-v-2a14b254><!--[-->`);
        ssrRenderList(item.features, (feature) => {
          _push(`<li class="flex items-start gap-3 text-body text-content font-medium" data-v-2a14b254><div class="flex items-center justify-center mt-0.5" data-v-2a14b254>`);
          _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5 text-accent" }, null, _parent));
          _push(`</div><span class="leading-tight" data-v-2a14b254>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></div><a${ssrRenderAttr("href", item.ctaLink)} target="_blank" class="btn btn-secondary w-full relative z-10 py-3.5 hover:bg-accent hover:text-action hover:border-accent" data-v-2a14b254>${ssrInterpolate(item.ctaText)} `);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2a14b254"]]);
const imgAnalysis = "" + buildAssetsURL("Estrategia-optimized.CwPLgnBG.webp");
const imgDesign = "" + buildAssetsURL("design-optimized.5g16EdrB.webp");
const imgDev = "" + buildAssetsURL("arquitectura-optimized.KpoumXuR.webp");
const imgDeploy = "" + buildAssetsURL("despliege-optimized.DcmMIRVr.webp");
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-process relative bg-section-dark pb-16 lg:pb-24 overflow-hidden" }, _attrs))} data-v-edb49640><div class="section-container relative z-20 text-center mb-16 lg:mb-24" data-v-edb49640><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow mb-6",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-edb49640>El camino al resultado</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title process-title mx-auto",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-edb49640> No hacemos webs. Construimos imperios. </h2></div><div class="section-container relative z-10" data-v-edb49640><div class="flex flex-col gap-32 lg:gap-48" data-v-edb49640><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: step.id,
          class: "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative",
          "data-delay": 200
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-edb49640><div class="${ssrRenderClass([{ "lg:order-2": step.align === "left" }, "flex-1 w-full"])}" data-v-edb49640><h3 class="text-h2 text-content mb-6" data-v-edb49640>${ssrInterpolate(step.title)}</h3><p class="text-lead text-subdued max-w-lg" data-v-edb49640>${ssrInterpolate(step.description)}</p></div><div class="${ssrRenderClass([{ "lg:order-1": step.align === "left" }, "flex-1 w-full relative"])}" data-v-edb49640><div class="relative rounded-2xl overflow-hidden bg-panel border border-line aspect-[4/3] group" data-v-edb49640><img${ssrRenderAttr("src", step.image)}${ssrRenderAttr("alt", step.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" data-v-edb49640></div></div></div>`);
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-edb49640"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-12 lg:py-20 overflow-hidden" }, _attrs))} data-v-4e2022cd><div class="section-container relative z-20 text-center mb-20 flex flex-col items-center" data-v-4e2022cd><p${ssrRenderAttrs(mergeProps({
    class: "section-eyebrow mb-4",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd>Infraestructura tecnol\xF3gica</p><h2${ssrRenderAttrs(mergeProps({
    class: "section-title tech-title mb-2",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd> Tecnolog\xEDa orientada a resultados. </h2><p${ssrRenderAttrs(mergeProps({
    class: "text-subdued text-lead max-w-2xl mt-6",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd> Elegimos nuestro stack tecnol\xF3gico no por estar a la moda, sino porque garantizan el rendimiento, seguridad y escala que tu empresa requiere. </p></div><div class="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10" data-v-4e2022cd><div data-v-4e2022cd><h3 class="text-h3 mb-6 flex items-center gap-3 text-main" data-v-4e2022cd> Experiencia y velocidad </h3><div class="space-y-4" data-v-4e2022cd><div${ssrRenderAttrs(mergeProps({
    class: "tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd><div class="flex flex-wrap justify-between items-start gap-3 mb-4" data-v-4e2022cd><span class="card-title m-0 font-bold text-content" data-v-4e2022cd>Velocidad Extrema &amp; Mejor SEO</span><span class="text-small font-semibold text-accent" data-v-4e2022cd>VUE / NUXT</span></div><p class="text-body text-subdued" data-v-4e2022cd>Tiempos de carga casi instant\xE1neos que reducen la tasa de rebote y te posicionan m\xE1s alto en Google.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd><div class="flex flex-wrap justify-between items-start gap-3 mb-4" data-v-4e2022cd><span class="card-title m-0 font-bold text-content" data-v-4e2022cd>Interfaces Inmersivas</span><span class="text-small font-semibold text-accent" data-v-4e2022cd>REACT / NEXT.JS</span></div><p class="text-body text-subdued" data-v-4e2022cd>Desarrollo de aplicaciones fluidas, reactivas y modernas que aumentan la retenci\xF3n del usuario.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd><div class="flex flex-wrap justify-between items-start gap-3 mb-4" data-v-4e2022cd><span class="card-title m-0 font-bold text-content" data-v-4e2022cd>Dise\xF1o Pixel-Perfect</span><span class="text-small font-semibold text-accent" data-v-4e2022cd>TAILWINDCSS</span></div><p class="text-body text-subdued" data-v-4e2022cd>Est\xE9tica hiper-personalizada sin plantillas, garantizando que tu marca se vea \xFAnica y premium en cualquier pantalla.</p></div></div></div><div data-v-4e2022cd><h3 class="text-h3 mb-6 flex items-center gap-3 text-main" data-v-4e2022cd> Estabilidad y escala </h3><div class="space-y-4" data-v-4e2022cd><div${ssrRenderAttrs(mergeProps({
    class: "tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd><div class="flex flex-wrap justify-between items-start gap-3 mb-4" data-v-4e2022cd><span class="card-title m-0 font-bold text-content" data-v-4e2022cd>Arquitectura Escalable</span><span class="text-small font-semibold text-purple" data-v-4e2022cd>LARAVEL / NODE</span></div><p class="text-body text-subdued" data-v-4e2022cd>Motores de negocio construidos para soportar miles de transacciones concurrentes sin caerse.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd><div class="flex flex-wrap justify-between items-start gap-3 mb-4" data-v-4e2022cd><span class="card-title m-0 font-bold text-content" data-v-4e2022cd>Seguridad de Datos</span><span class="text-small font-semibold text-purple" data-v-4e2022cd>POSTGRESQL</span></div><p class="text-body text-subdued" data-v-4e2022cd>Bases de datos estructuradas con encriptaci\xF3n de nivel bancario para proteger tu informaci\xF3n m\xE1s valiosa.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-4e2022cd><div class="flex flex-wrap justify-between items-start gap-3 mb-4" data-v-4e2022cd><span class="card-title m-0 font-bold text-content" data-v-4e2022cd>Estabilidad a Largo Plazo</span><span class="text-small font-semibold text-purple" data-v-4e2022cd>TYPESCRIPT</span></div><p class="text-body text-subdued" data-v-4e2022cd>C\xF3digo altamente tipado que previene errores cr\xEDticos antes de que lleguen a producci\xF3n, garantizando disponibilidad 24/7.</p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicios/TechStackSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4e2022cd"]]);
const _sfc_main = {
  __name: "servicios",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Servicios de Desarrollo Web, Ecommerce y Software a Medida | SysifosWeb Chile",
      description: "P\xE1ginas web profesionales, tiendas online, aplicaciones m\xF3viles, software a medida y mantenimiento web para empresas en Chile. Trabajamos con Laravel, Vue.js, React y Flutter. Cotiza tu proyecto gratis.",
      keywords: "servicios desarrollo web chile, dise\xF1o p\xE1ginas web empresas chile, tienda online chile, ecommerce chile, landing pages profesionales, software a medida empresas, aplicaciones m\xF3viles chile, mantenimiento web",
      image: "/img/og-servicios.webp"
    });
    setSchema({
      type: "Service",
      data: {
        services: [
          {
            name: "P\xE1ginas Web Profesionales",
            description: "P\xE1ginas web modernas, r\xE1pidas y optimizadas para captar clientes. Dise\xF1o Mobile-First, copywriting persuasivo y estructura lista para SEO.",
            serviceType: "Desarrollo de P\xE1ginas Web"
          },
          {
            name: "Tiendas Online y Ecommerce",
            description: "Tiendas online construidas para vender y cobrar autom\xE1ticamente. Proceso de compra optimizado, integraci\xF3n de pagos y panel autoadministrable.",
            serviceType: "Desarrollo de Tiendas Online y Ecommerce"
          },
          {
            name: "Sistemas y Software a Medida",
            description: "Sistemas robustos que reducen costos operativos y automatizan procesos empresariales. Desarrollo full-stack con tecnolog\xEDas modernas.",
            serviceType: "Desarrollo de Software a Medida"
          }
        ]
      }
    });
    setSchema({
      type: "LocalBusiness",
      data: {
        name: "Sysifos Web",
        description: "Agencia de desarrollo de software, p\xE1ginas web profesionales y tiendas online en coquimbo, Chile.",
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
      const _component_ServiciosHeroSection = __nuxt_component_0;
      const _component_ServiciosListSection = __nuxt_component_1;
      const _component_ServiciosProcesoSection = __nuxt_component_2;
      const _component_ServiciosTechStackSection = __nuxt_component_3;
      const _component_NosotrosCtaSection = __nuxt_component_2$1;
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
//# sourceMappingURL=servicios-BhdUqj5T.mjs.map
