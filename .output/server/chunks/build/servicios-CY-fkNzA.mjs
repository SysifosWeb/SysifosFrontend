import { j as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, resolveDirective, withCtx, createTextVNode, openBlock, createBlock, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { TrendingUp, ShoppingBag, Database, CheckCircle2, ArrowRight } from 'lucide-vue-next';
import { _ as __nuxt_component_2$1 } from './CtaSection-Cmmm84hs.mjs';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section bg-section-dark pt-32 lg:pt-48 pb-16 lg:pb-24" }, _attrs))} data-v-fde17ec5><div class="section-container text-center flex flex-col items-center" data-v-fde17ec5><p${ssrRenderAttrs(mergeProps({
    class: "section-eyebrow mb-6",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-fde17ec5>Soluciones digitales</p><h1${ssrRenderAttrs(mergeProps({
    class: "hero-headline mb-8",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-fde17ec5> Construido para escalar. Dise\xF1ado para liderar. </h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-2xl mx-auto mb-10",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-fde17ec5><p class="hero-subtitle" data-v-fde17ec5> Brindamos la tecnolog\xEDa, el dise\xF1o y la infraestructura que tu empresa necesita para moverse r\xE1pido, captar m\xE1s clientes y operar sin fricci\xF3n. </p></div><div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",
    "data-delay": "300"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-fde17ec5>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "cta-primary-btn w-full sm:w-auto justify-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Iniciar un proyecto <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-fde17ec5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-fde17ec5${_scopeId}></path></svg>`);
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fde17ec5"]]);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-12 lg:py-20 overflow-hidden" }, _attrs))} data-v-ab2cfb13><div class="section-container relative z-10" data-v-ab2cfb13><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-v-ab2cfb13><!--[-->`);
      ssrRenderList(services, (item, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: item.id,
          "data-delay": index * 100,
          class: "group relative flex flex-col p-8 lg:p-10 rounded-2xl bg-panel border border-line overflow-hidden transition-colors duration-300 hover:bg-quiet hover:border-accent/30"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-ab2cfb13><div class="flex justify-between items-start mb-6 relative z-10" data-v-ab2cfb13><div class="w-14 h-14 rounded-2xl bg-quiet flex items-center justify-center border border-line text-accent transition-colors duration-300 group-hover:bg-accent/10 group-hover:border-accent/30" data-v-ab2cfb13>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "w-7 h-7" }, null), _parent);
        _push(`</div><span class="text-small font-semibold text-accent" data-v-ab2cfb13>${ssrInterpolate(item.eyebrow)}</span></div><h3 class="text-h3 text-content mb-3 relative z-10" data-v-ab2cfb13>${ssrInterpolate(item.title)}</h3><p class="text-subdued text-body leading-relaxed mb-6 relative z-10" data-v-ab2cfb13>${ssrInterpolate(item.description)}</p><div class="flex-grow mb-8 relative z-10" data-v-ab2cfb13><p class="text-small font-semibold text-accent mb-4" data-v-ab2cfb13>\xBFQu\xE9 incluye?</p><ul class="flex flex-col gap-3" data-v-ab2cfb13><!--[-->`);
        ssrRenderList(item.features, (feature) => {
          _push(`<li class="flex items-start gap-3 text-body text-content font-medium" data-v-ab2cfb13><div class="flex items-center justify-center mt-0.5" data-v-ab2cfb13>`);
          _push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5 text-accent" }, null, _parent));
          _push(`</div><span class="leading-tight" data-v-ab2cfb13>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></div><a${ssrRenderAttr("href", item.ctaLink)} target="_blank" class="btn btn-secondary w-full relative z-10 py-3.5 hover:bg-accent hover:text-action hover:border-accent" data-v-ab2cfb13>${ssrInterpolate(item.ctaText)} `);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ab2cfb13"]]);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-16 lg:py-24 overflow-hidden" }, _attrs))} data-v-11c407ed><div class="section-container relative z-20 text-center mb-16 lg:mb-24" data-v-11c407ed><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow mb-6",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-11c407ed>El camino al resultado</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title process-title mx-auto",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-11c407ed> No hacemos webs. Construimos imperios. </h2></div><div class="section-container relative z-10" data-v-11c407ed><div class="flex flex-col gap-32 lg:gap-48" data-v-11c407ed><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: step.id,
          class: "flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative",
          "data-delay": 200
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-11c407ed><div class="${ssrRenderClass([{ "lg:order-2": step.align === "left" }, "flex-1 w-full"])}" data-v-11c407ed><h3 class="text-h2 text-content mb-6" data-v-11c407ed>${ssrInterpolate(step.title)}</h3><p class="text-lead text-subdued max-w-lg" data-v-11c407ed>${ssrInterpolate(step.description)}</p></div><div class="${ssrRenderClass([{ "lg:order-1": step.align === "left" }, "flex-1 w-full relative"])}" data-v-11c407ed><div class="relative rounded-2xl overflow-hidden bg-panel border border-line aspect-[4/3] group" data-v-11c407ed><img${ssrRenderAttr("src", step.image)}${ssrRenderAttr("alt", step.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" data-v-11c407ed></div></div></div>`);
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-11c407ed"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-12 lg:py-20 overflow-hidden" }, _attrs))} data-v-89e5792d><div class="section-container relative z-20 text-center mb-20 flex flex-col items-center" data-v-89e5792d><p${ssrRenderAttrs(mergeProps({
    class: "section-eyebrow mb-4",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d>Infraestructura tecnol\xF3gica</p><h2${ssrRenderAttrs(mergeProps({
    class: "section-title tech-title mb-2",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d> Tecnolog\xEDa orientada a resultados. </h2><p${ssrRenderAttrs(mergeProps({
    class: "text-subdued text-lg max-w-2xl mt-6",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d> Elegimos nuestro stack tecnol\xF3gico no por estar a la moda, sino porque garantizan el rendimiento, seguridad y escala que tu empresa requiere. </p></div><div class="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10" data-v-89e5792d><div data-v-89e5792d><h3 class="text-h3 mb-6 flex items-center gap-3 text-main" data-v-89e5792d> Experiencia y velocidad </h3><div class="space-y-4" data-v-89e5792d><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d><div class="flex justify-between items-center mb-4" data-v-89e5792d><span class="card-title text-base m-0 font-bold text-content" data-v-89e5792d>Velocidad Extrema &amp; Mejor SEO</span><span class="text-small font-semibold text-accent" data-v-89e5792d>VUE / NUXT</span></div><p class="text-sm text-subdued" data-v-89e5792d>Tiempos de carga casi instant\xE1neos que reducen la tasa de rebote y te posicionan m\xE1s alto en Google.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d><div class="flex justify-between items-center mb-4" data-v-89e5792d><span class="card-title text-base m-0 font-bold text-content" data-v-89e5792d>Interfaces Inmersivas</span><span class="text-small font-semibold text-accent" data-v-89e5792d>REACT / NEXT.JS</span></div><p class="text-sm text-subdued" data-v-89e5792d>Desarrollo de aplicaciones fluidas, reactivas y modernas que aumentan la retenci\xF3n del usuario.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d><div class="flex justify-between items-center mb-4" data-v-89e5792d><span class="card-title text-base m-0 font-bold text-content" data-v-89e5792d>Dise\xF1o Pixel-Perfect</span><span class="text-small font-semibold text-accent" data-v-89e5792d>TAILWINDCSS</span></div><p class="text-sm text-subdued" data-v-89e5792d>Est\xE9tica hiper-personalizada sin plantillas, garantizando que tu marca se vea \xFAnica y premium en cualquier pantalla.</p></div></div></div><div data-v-89e5792d><h3 class="text-h3 mb-6 flex items-center gap-3 text-main" data-v-89e5792d> Estabilidad y escala </h3><div class="space-y-4" data-v-89e5792d><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d><div class="flex justify-between items-center mb-4" data-v-89e5792d><span class="card-title text-base m-0 font-bold text-content" data-v-89e5792d>Arquitectura Escalable</span><span class="text-small font-semibold text-purple" data-v-89e5792d>LARAVEL / NODE</span></div><p class="text-sm text-subdued" data-v-89e5792d>Motores de negocio construidos para soportar miles de transacciones concurrentes sin caerse.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d><div class="flex justify-between items-center mb-4" data-v-89e5792d><span class="card-title text-base m-0 font-bold text-content" data-v-89e5792d>Seguridad de Datos</span><span class="text-small font-semibold text-purple" data-v-89e5792d>POSTGRESQL</span></div><p class="text-sm text-subdued" data-v-89e5792d>Bases de datos estructuradas con encriptaci\xF3n de nivel bancario para proteger tu informaci\xF3n m\xE1s valiosa.</p></div><div${ssrRenderAttrs(mergeProps({
    class: "card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-89e5792d><div class="flex justify-between items-center mb-4" data-v-89e5792d><span class="card-title text-base m-0 font-bold text-content" data-v-89e5792d>Estabilidad a Largo Plazo</span><span class="text-small font-semibold text-purple" data-v-89e5792d>TYPESCRIPT</span></div><p class="text-sm text-subdued" data-v-89e5792d>C\xF3digo altamente tipado que previene errores cr\xEDticos antes de que lleguen a producci\xF3n, garantizando disponibilidad 24/7.</p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicios/TechStackSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-89e5792d"]]);
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
        description: "Agencia de desarrollo de software, p\xE1ginas web profesionales y tiendas online en La Serena, Chile.",
        telephone: "+56-9-8502-1549",
        email: "contacto@sysifosweb.cl",
        addressLocality: "La Serena",
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
//# sourceMappingURL=servicios-CY-fkNzA.mjs.map
