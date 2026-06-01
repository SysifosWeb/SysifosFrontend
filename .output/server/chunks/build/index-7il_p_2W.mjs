import { resolveDirective, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, openBlock, createBlock, ref, defineComponent, useAttrs, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { Search, PenTool, Terminal, CheckCircle, Gauge, TrendingDown, Layers, Globe, ShoppingBag, Cpu } from 'lucide-vue-next';
import { a as _export_sfc, u as useNuxtApp, k as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-wkVs9ydf.mjs';
import { g as defu, t as hasProtocol, H as withLeadingSlash, x as joinURL, B as parseURL, j as encodeParam, k as encodePath } from '../nitro/nitro.mjs';
import { u as useHead } from './v3-DsolQCPF.mjs';
import { u as useSEO } from './useSEO-BMyRhQ88.mjs';
import 'vue-router';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$8 = {
  __name: "HomeValue",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        title: "Conversamos",
        description: "Nos cuentas sobre tu negocio, tus objetivos y lo que necesitas. Sin formularios complicados.",
        icon: Search
      },
      {
        title: "Dise\xF1amos",
        description: "Creamos la propuesta visual y la estructura de tu soluci\xF3n. T\xFA la apruebas antes de construir.",
        icon: PenTool
      },
      {
        title: "Construimos",
        description: "Desarrollamos con tecnolog\xEDa moderna y te mantenemos informado en cada etapa.",
        icon: Terminal
      },
      {
        title: "Lanzamos",
        description: "Tu plataforma sale al mundo. Y seguimos contigo despu\xE9s del lanzamiento.",
        icon: CheckCircle
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section bg-section-dark",
        style: { "padding": "4rem 0 5rem" }
      }, _attrs))} data-v-a9a002c8><div class="max-w-[1400px] w-[92%] mx-auto relative z-10" data-v-a9a002c8><div class="section-header text-center mb-16" data-v-a9a002c8><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-a9a002c8>As\xED trabajamos juntos</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title text-3xl md:text-4xl",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-a9a002c8> Empezar es m\xE1s f\xE1cil de lo que crees. </h2></div><div class="relative" data-v-a9a002c8><div class="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px connector-line" data-v-a9a002c8></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" data-v-a9a002c8><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "relative group step-item",
          "data-delay": index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-a9a002c8><div class="flex flex-col items-center text-center" data-v-a9a002c8><div class="step-icon-wrap w-20 h-20 rounded-2xl flex items-center justify-center mb-10 relative z-10 transition-all duration-300" data-v-a9a002c8>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8 step-icon transition-transform group-hover:scale-110" }, null), _parent);
        _push(`<div class="step-number absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold" data-v-a9a002c8> 0${ssrInterpolate(index + 1)}</div></div><h3 class="card-title mb-3 transition-colors group-hover:step-title-hover" data-v-a9a002c8>${ssrInterpolate(step.title)}</h3><p class="card-text max-w-[200px]" data-v-a9a002c8>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeValue.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a9a002c8"]]);
const _sfc_main$7 = {
  __name: "HomeProblems",
  __ssrInlineRender: true,
  setup(__props) {
    const pains = [
      {
        id: 1,
        icon: Gauge,
        title: "Tu web tarda en cargar y pierdes clientes antes de que te conozcan",
        description: "Cada segundo de espera cuesta visitas, confianza y ventas. Una web lenta es una oportunidad perdida antes de comenzar.",
        solution: "Construimos con velocidad como prioridad desde el primer d\xEDa",
        iconClass: "pain-icon--cyan",
        colorClass: "text-accent"
      },
      {
        id: 2,
        icon: TrendingDown,
        title: "Inviertes en publicidad pero tu sitio no convierte ese tr\xE1fico en ventas",
        description: "Atraer visitantes es solo la mitad del trabajo. Sin una estrategia de conversi\xF3n clara, el presupuesto publicitario se pierde.",
        solution: "Dise\xF1amos cada p\xE1gina con un objetivo: que el visitante act\xFAe",
        iconClass: "pain-icon--purple",
        colorClass: "text-purple"
      },
      {
        id: 3,
        icon: Layers,
        title: "Tu plataforma actual ya no da abasto con el crecimiento de tu empresa",
        description: "Lo que funcion\xF3 al principio tiene un l\xEDmite. Cuando tu negocio crece, tu tecnolog\xEDa debe crecer con \xE9l \u2014 no frenarlo.",
        solution: "Arquitecturas flexibles que evolucionan con tu negocio",
        iconClass: "pain-icon--cyan",
        colorClass: "text-accent"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "problems-section bg-section-dark" }, _attrs))} data-v-da7d8d3c><div class="section-line-top" data-v-da7d8d3c></div><div class="section-glow-purple glow-bottom-left" data-v-da7d8d3c></div><div class="section-container" data-v-da7d8d3c><div class="text-center mb-12" data-v-da7d8d3c><div${ssrRenderAttrs(mergeProps({
        class: "eyebrow-badge mx-auto mb-6",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da7d8d3c><span class="eyebrow-badge__dot" data-v-da7d8d3c></span><span class="eyebrow-badge__text" data-v-da7d8d3c>El problema que frena tu crecimiento</span></div><h2${ssrRenderAttrs(mergeProps({
        class: "section-title problems-title",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da7d8d3c> Tu negocio merece m\xE1s que<br class="hidden md:block" data-v-da7d8d3c> un sitio web gen\xE9rico. </h2></div><div class="flex flex-col gap-4" data-v-da7d8d3c><!--[-->`);
      ssrRenderList(pains, (pain, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: pain.id,
          "data-delay": index * 150,
          class: "pain-card group relative flex flex-col md:flex-row items-start md:items-center gap-6 bg-section-surface card-border"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da7d8d3c><div class="step-badge" data-v-da7d8d3c>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div><div class="${ssrRenderClass([pain.iconClass, "pain-icon shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"])}" data-v-da7d8d3c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pain.icon), {
          class: ["w-5 h-5", pain.colorClass],
          "stroke-width": 1.8
        }, null), _parent);
        _push(`</div><div class="flex-1 min-w-0" data-v-da7d8d3c><h3 class="card-title mb-1.5" data-v-da7d8d3c>${ssrInterpolate(pain.title)}</h3><p class="card-text" data-v-da7d8d3c>${ssrInterpolate(pain.description)}</p></div><div class="solution-pill shrink-0 hidden lg:flex" data-v-da7d8d3c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(CheckCircle)), { class: "w-4 h-4 shrink-0 text-accent" }, null), _parent);
        _push(`<span class="solution-pill__text" data-v-da7d8d3c>${ssrInterpolate(pain.solution)}</span></div><div class="card-hover-glow" data-v-da7d8d3c></div></div>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({
        class: "mt-12 text-center",
        "data-delay": "400"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da7d8d3c><p class="card-text mb-5" data-v-da7d8d3c>\xBFTe identificas con alguno de estos problemas?</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "cta-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hablemos de tu proyecto <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-da7d8d3c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-da7d8d3c${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Hablemos de tu proyecto "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProblems.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-da7d8d3c"]]);
const _sfc_main$6 = {
  __name: "HomeProposition",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { number: "+50", label: "Proyectos entregados con \xE9xito" },
      { number: "98%", label: "Clientes que repiten o nos recomiendan" },
      { number: "3\xD7", label: "Mejora promedio en conversiones" }
    ];
    const differentiators = [
      {
        icon: "\u26A1",
        title: "Ves resultados r\xE1pido",
        description: "No esperamos meses para mostrarte avances. En 2\u20134 semanas ya tienes algo real funcionando."
      },
      {
        icon: "\u{1F3AF}",
        title: "Nos importa tu negocio, no solo el c\xF3digo",
        description: "Medimos el \xE9xito en ventas, leads y crecimiento. No en cu\xE1ntas l\xEDneas de c\xF3digo escribimos."
      },
      {
        icon: "\u{1F512}",
        title: "Tu plataforma crece contigo",
        description: "Construimos pensando en el futuro de tu empresa. Sin bloqueos t\xE9cnicos ni reescrituras costosas."
      },
      {
        icon: "\u{1F91D}",
        title: "Hablas con quien construye",
        description: "Sin intermediarios. Tienes acceso directo al equipo que trabaja en tu proyecto, siempre."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "proposition-section bg-section-dark" }, _attrs))} data-v-0cc5a304><div class="section-glow-cyan glow-right-center" data-v-0cc5a304></div><div class="section-glow-purple glow-bottom-left-sm" data-v-0cc5a304></div><div class="section-container" data-v-0cc5a304><div class="stats-grid" data-v-0cc5a304><!--[-->`);
      ssrRenderList(stats, (stat, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: stat.label,
          class: "text-center md:text-left",
          "data-delay": index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0cc5a304><div class="stat-number" data-v-0cc5a304>${ssrInterpolate(stat.number)}</div><p class="card-text" data-v-0cc5a304>${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-0cc5a304><div data-v-0cc5a304><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0cc5a304>Nuestra propuesta de valor</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title proposition-title mb-6",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0cc5a304> No construimos p\xE1ginas web.<br data-v-0cc5a304><span class="text-accent" data-v-0cc5a304>Construimos motores de crecimiento</span> digital para tu empresa. </h2><p${ssrRenderAttrs(mergeProps({
        class: "section-subtitle mb-10",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0cc5a304> Cada proyecto que entregamos est\xE1 dise\xF1ado para generar resultados medibles: m\xE1s visitas, m\xE1s conversiones y m\xE1s ventas. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/contacto",
        class: "cta-primary-btn",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agenda una asesor\xEDa gratuita <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-0cc5a304${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-0cc5a304${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Agenda una asesor\xEDa gratuita "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
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
      _push(`</div><div class="flex flex-col gap-4" data-v-0cc5a304><!--[-->`);
      ssrRenderList(differentiators, (diff, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: diff.title,
          "data-delay": index * 150,
          class: "diff-card flex items-start gap-5"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0cc5a304><div class="diff-icon" data-v-0cc5a304>${ssrInterpolate(diff.icon)}</div><div data-v-0cc5a304><h3 class="card-title mb-1" data-v-0cc5a304>${ssrInterpolate(diff.title)}</h3><p class="card-text" data-v-0cc5a304>${ssrInterpolate(diff.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProposition.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0cc5a304"]]);
const _sfc_main$5 = {
  __name: "HomeBusinessUnits",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "P\xE1ginas web que convierten visitantes en clientes",
        description: "Dise\xF1amos sitios r\xE1pidos, modernos y estrat\xE9gicamente construidos para llevar a cada visitante hacia la acci\xF3n que necesitas. Sin plantillas, sin atajos.",
        icon: Globe,
        features: ["Dise\xF1o a medida", "SEO desde el inicio", "Optimizado para m\xF3vil"],
        variant: "cyan"
      },
      {
        title: "Tu tienda online lista para vender las 24 horas",
        description: "Creamos plataformas de venta seguras, f\xE1ciles de administrar y preparadas para escalar cuando tu negocio lo necesite.",
        icon: ShoppingBag,
        features: ["Pagos seguros", "Gesti\xF3n de inventario", "Experiencia de compra fluida"],
        variant: "purple"
      },
      {
        title: "Software hecho exactamente para tu empresa",
        description: "Cuando las herramientas gen\xE9ricas no son suficientes, construimos la soluci\xF3n exacta que tu negocio necesita para crecer sin fricciones.",
        icon: Cpu,
        features: ["Automatizaci\xF3n de procesos", "Integraci\xF3n con sistemas actuales", "Soporte continuo"],
        variant: "green"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "servicios",
        class: "services-section bg-section-dark"
      }, _attrs))} data-v-5364e36c><div class="section-glow-purple glow-right-center" data-v-5364e36c></div><div class="section-container" data-v-5364e36c><div class="mb-12 max-w-xl" data-v-5364e36c><div${ssrRenderAttrs(mergeProps({
        class: "eyebrow-badge mx-auto mb-6",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5364e36c><span class="eyebrow-badge__dot" data-v-5364e36c></span><span class="eyebrow-badge__text" data-v-5364e36c>Lo que podemos hacer por ti</span></div><h2${ssrRenderAttrs(mergeProps({
        class: "section-title text-3xl md:text-4xl",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5364e36c> Soluciones digitales que impulsan tu negocio. </h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-5" data-v-5364e36c><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          "data-delay": index * 150,
          class: ["service-card group relative flex flex-col p-8 rounded-2xl cursor-default bg-section-surface", `service-card--${service.variant}`]
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5364e36c><div class="service-top-line absolute top-0 left-8 right-8 h-px rounded-full" data-v-5364e36c></div><div class="service-icon mb-7 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" data-v-5364e36c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
          class: "w-5 h-5",
          "stroke-width": 1.8
        }, null), _parent);
        _push(`</div><h3 class="card-title mb-3" data-v-5364e36c>${ssrInterpolate(service.title)}</h3><p class="card-text mb-8 flex-1" data-v-5364e36c>${ssrInterpolate(service.description)}</p><div class="flex flex-wrap gap-2 mb-8" data-v-5364e36c><!--[-->`);
        ssrRenderList(service.features, (feat) => {
          _push(`<span class="feature-pill" data-v-5364e36c>${ssrInterpolate(feat)}</span>`);
        });
        _push(`<!--]--></div><div class="service-cta-wrap pt-5" data-v-5364e36c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contacto",
          class: "service-cta group/link inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Hablemos de tu proyecto <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-5364e36c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-5364e36c${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Hablemos de tu proyecto "),
                (openBlock(), createBlock("svg", {
                  class: "w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
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
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({
        class: "mt-10 flex justify-end",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5364e36c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicios",
        class: "cta-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver todos los servicios <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-5364e36c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-5364e36c${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Ver todos los servicios "),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBusinessUnits.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5364e36c"]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$WYe91U9uM14DYVEOrt_45ecvzXtjprAZcdqr2VucsaQEg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  operationsGenerator,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  ...{
    "screens": {
      "xs": 320,
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "xxl": 1536,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipx",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp"
    ]
  },
  providers: {
    ["ipx"]: { provider: ipxRuntime$WYe91U9uM14DYVEOrt_45ecvzXtjprAZcdqr2VucsaQEg, defaults: {} }
  }
};
const useImage = (event) => {
  var _a;
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "HomeTrust",
  __ssrInlineRender: true,
  setup(__props) {
    const technologies = [
      { name: "NUXT", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" },
      { name: "VUE", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
      { name: "REACT", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "NODE", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "TYPESCRIPT", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
      { name: "TAILWIND", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "LARAVEL", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
    ];
    const carouselContainer = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 overflow-hidden relative bg-section-dark" }, _attrs))} data-v-526a94cb><div class="absolute top-1/2 left-0 w-[300px] h-[300px] -translate-y-1/2 rounded-full pointer-events-none" style="${ssrRenderStyle({ "background": "var(--purple)", "opacity": "0.07", "filter": "blur(120px)" })}" data-v-526a94cb></div><div class="w-[88%] max-w-[1340px] mx-auto relative z-20" data-v-526a94cb><div class="flex flex-col lg:flex-row items-center gap-12" data-v-526a94cb><div class="w-full lg:w-[380px] shrink-0 mb-12 lg:mb-0" data-v-526a94cb><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-526a94cb>Stack tecnol\xF3gico</p><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col leading-tight",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-526a94cb><span class="text-3xl lg:text-4xl font-bold" style="${ssrRenderStyle({ "color": "var(--text-main)", "letter-spacing": "-0.025em", "font-family": "'Inter', sans-serif" })}" data-v-526a94cb>Tecnolog\xEDa de</span><span class="text-3xl lg:text-4xl font-bold" style="${ssrRenderStyle({ "color": "var(--accent)", "letter-spacing": "-0.025em", "font-family": "'Inter', sans-serif" })}" data-v-526a94cb>vanguardia.</span><p class="mt-4 text-sm leading-relaxed max-w-[280px]" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-526a94cb>Construimos con las herramientas que usan las mejores empresas del mundo.</p></div></div><div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselContainer",
        ref: carouselContainer,
        class: "relative flex-grow overflow-hidden py-32",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-526a94cb><div class="flex flex-nowrap w-max animate-slow-marquee hover:[animation-play-state:paused]" data-v-526a94cb><!--[-->`);
      ssrRenderList(2, (set) => {
        _push(`<div class="flex flex-nowrap" data-v-526a94cb><!--[-->`);
        ssrRenderList(technologies, (tech, index) => {
          _push(`<div class="tech-item relative shrink-0 flex flex-col items-center justify-center w-[160px] lg:w-[240px] transition-all duration-300" data-v-526a94cb>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: tech.logo,
            alt: tech.name,
            class: "tech-logo h-12 lg:h-16 w-auto object-contain transition-all duration-300",
            format: "webp",
            loading: "lazy"
          }, null, _parent));
          _push(`<div class="tech-name absolute -bottom-12 left-1/2 -translate-x-1/2 text-[14px] font-bold text-accent opacity-0 transition-opacity tracking-[0.4em] font-mono text-center whitespace-nowrap uppercase" data-v-526a94cb>${ssrInterpolate(tech.name)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-y-0 right-0 w-32 to-transparent z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to left, var(--bg-dark), transparent)" })}" data-v-526a94cb></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeTrust.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-526a94cb"]]);
const _sfc_main$2 = {
  __name: "HomeTestimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        name: "Mar\xEDa Rodr\xEDguez",
        initials: "MR",
        company: "Gerente General \xB7 Tech Solutions Corp",
        text: "Antes ten\xEDa una web que no me tra\xEDa nada. Desde que trabajamos con SysifosWeb, nuestras consultas online se triplicaron. El equipo entendi\xF3 exactamente lo que necesitaba y lo ejecutaron con precisi\xF3n.",
        metric: "3\xD7",
        metricLabel: "consultas online en 3 meses",
        avatarBg: "linear-gradient(135deg, #38BDF8, #6366F1)"
      },
      {
        name: "Carlos L\xF3pez",
        initials: "CL",
        company: "Founder \xB7 Innovatech",
        text: "Lanzamos nuestra tienda online en tiempo r\xE9cord. Nuestras ventas crecieron un 40% en el primer trimestre.",
        metric: "+40%",
        metricLabel: "en ventas el primer trimestre",
        avatarBg: "linear-gradient(135deg, #6366F1, #8B5CF6)"
      },
      {
        name: "Ana Silva",
        initials: "AS",
        company: "Directora de Operaciones \xB7 Global Systems",
        text: "El sistema que desarrollaron nos ahorr\xF3 horas de trabajo manual cada semana. Ahora el equipo se enfoca en lo que realmente importa.",
        metric: "12h",
        metricLabel: "ahorradas por semana",
        avatarBg: "linear-gradient(135deg, #34D399, #38BDF8)"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section relative overflow-hidden bg-section-dark" }, _attrs))} data-v-c0382bac><div class="ambient-orb" data-v-c0382bac></div><div class="section-container" data-v-c0382bac><div class="section-header" data-v-c0382bac><div data-v-c0382bac><p${ssrRenderAttrs(mergeProps({
        class: "overline-label",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c0382bac>Clientes</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-headline",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c0382bac> Empresas que crecieron<br data-v-c0382bac><em data-v-c0382bac>con nuestra tecnolog\xEDa.</em></h2></div><div${ssrRenderAttrs(mergeProps({
        class: "proof-strip",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c0382bac><div class="proof-stars" data-v-c0382bac><!--[-->`);
      ssrRenderList(5, (s) => {
        _push(`<svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#F59E0B" data-v-c0382bac><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-c0382bac></path></svg>`);
      });
      _push(`<!--]--></div><p class="proof-label" data-v-c0382bac>5.0 \xB7 98% clientes satisfechos</p></div></div><div class="bento-grid" data-v-c0382bac><div${ssrRenderAttrs(mergeProps({
        class: "bento-card bento-card--featured group",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c0382bac><div class="card-accent-line card-accent-line--cyan" data-v-c0382bac></div><span class="quote-mark" data-v-c0382bac>&quot;</span><p class="quote-text quote-text--lg" data-v-c0382bac>${ssrInterpolate(testimonials[0].text)}</p><div class="metric-block metric-block--featured" data-v-c0382bac><span class="metric-number metric-number--cyan" data-v-c0382bac>${ssrInterpolate(testimonials[0].metric)}</span><span class="metric-label" data-v-c0382bac>${ssrInterpolate(testimonials[0].metricLabel)}</span></div><div class="author-row" data-v-c0382bac><div class="author-avatar" style="${ssrRenderStyle({ background: testimonials[0].avatarBg })}" data-v-c0382bac>${ssrInterpolate(testimonials[0].initials)}</div><div data-v-c0382bac><p class="author-name" data-v-c0382bac>${ssrInterpolate(testimonials[0].name)}</p><p class="author-company" data-v-c0382bac>${ssrInterpolate(testimonials[0].company)}</p></div></div></div><div class="bento-col-right" data-v-c0382bac><div${ssrRenderAttrs(mergeProps({
        class: "bento-card group",
        "data-delay": "150"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c0382bac><div class="card-accent-line card-accent-line--purple" data-v-c0382bac></div><span class="quote-mark quote-mark--sm" data-v-c0382bac>&quot;</span><p class="quote-text" data-v-c0382bac>${ssrInterpolate(testimonials[1].text)}</p><div class="metric-block" data-v-c0382bac><span class="metric-number metric-number--purple" data-v-c0382bac>${ssrInterpolate(testimonials[1].metric)}</span><span class="metric-label" data-v-c0382bac>${ssrInterpolate(testimonials[1].metricLabel)}</span></div><div class="author-row" data-v-c0382bac><div class="author-avatar" style="${ssrRenderStyle({ background: testimonials[1].avatarBg })}" data-v-c0382bac>${ssrInterpolate(testimonials[1].initials)}</div><div data-v-c0382bac><p class="author-name" data-v-c0382bac>${ssrInterpolate(testimonials[1].name)}</p><p class="author-company" data-v-c0382bac>${ssrInterpolate(testimonials[1].company)}</p></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "bento-card group",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c0382bac><div class="card-accent-line card-accent-line--cyan" data-v-c0382bac></div><span class="quote-mark quote-mark--sm" data-v-c0382bac>&quot;</span><p class="quote-text" data-v-c0382bac>${ssrInterpolate(testimonials[2].text)}</p><div class="metric-block" data-v-c0382bac><span class="metric-number metric-number--cyan" data-v-c0382bac>${ssrInterpolate(testimonials[2].metric)}</span><span class="metric-label" data-v-c0382bac>${ssrInterpolate(testimonials[2].metricLabel)}</span></div><div class="author-row" data-v-c0382bac><div class="author-avatar" style="${ssrRenderStyle({ background: testimonials[2].avatarBg })}" data-v-c0382bac>${ssrInterpolate(testimonials[2].initials)}</div><div data-v-c0382bac><p class="author-name" data-v-c0382bac>${ssrInterpolate(testimonials[2].name)}</p><p class="author-company" data-v-c0382bac>${ssrInterpolate(testimonials[2].company)}</p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeTestimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c0382bac"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full py-32 flex items-center justify-center overflow-hidden group/banner bg-section-dark" }, _attrs))} data-v-36b0907c><div class="absolute inset-0 pointer-events-none z-0" data-v-36b0907c><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20" data-v-36b0907c><svg viewBox="0 0 1000 1000" class="w-full h-full" data-v-36b0907c><g class="portal-lines transition-all duration-1000 group-hover/banner:scale-95 group-hover/banner:opacity-35" stroke="#00f2ff" stroke-width="0.3" data-v-36b0907c><!--[-->`);
  ssrRenderList(36, (n) => {
    _push(`<line x1="500" y1="500"${ssrRenderAttr("x2", 500 + Math.cos(n * 10 * Math.PI / 180) * 800)}${ssrRenderAttr("y2", 500 + Math.sin(n * 10 * Math.PI / 180) * 800)} class="transition-all duration-700 portal-ray" data-v-36b0907c></line>`);
  });
  _push(`<!--]--><circle cx="500" cy="500" r="150" fill="none" stroke-dasharray="4 8" data-v-36b0907c></circle><circle cx="500" cy="500" r="300" fill="none" stroke-dasharray="2 10" data-v-36b0907c></circle></g></svg></div></div><div class="max-w-[1400px] w-[92%] mx-auto relative z-10 text-center" data-v-36b0907c><p${ssrRenderAttrs(mergeProps({
    class: "text-sm font-medium mb-4",
    style: { "color": "var(--text-muted)" },
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-36b0907c>Empieza hoy</p><h2${ssrRenderAttrs(mergeProps({
    class: "text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto mb-6",
    style: { "color": "var(--text-main)", "letter-spacing": "-0.025em" },
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-36b0907c> \xBFListo para hacer crecer<br class="hidden md:block" data-v-36b0907c> tu negocio? </h2><p${ssrRenderAttrs(mergeProps({
    class: "text-lg mb-12 max-w-xl mx-auto",
    style: { "color": "var(--text-secondary)" },
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-36b0907c> Agenda una llamada de 30 minutos sin costo. Te escuchamos y te decimos honestamente c\xF3mo podemos ayudarte. </p><div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col items-center gap-5",
    "data-delay": "300"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-36b0907c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5",
    style: { "background": "var(--accent)", "color": "#0b0f1c", "box-shadow": "0 0 24px rgba(56,189,248,0.2)" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Agenda tu asesor\xEDa gratuita <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-36b0907c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-36b0907c${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Agenda tu asesor\xEDa gratuita "),
          (openBlock(), createBlock("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
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
  _push(`<p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-36b0907c>Sin compromisos \xB7 Sin contratos largos \xB7 Respuesta en 24 horas</p></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-36b0907c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "SysifosWeb | Ingenier\xEDa de Software y Consultor\xEDa T\xE9cnica en Chile",
      description: "Desarrollamos soluciones de software a medida, aplicaciones web de alto rendimiento y consultor\xEDa tecnol\xF3gica avanzada. Especialistas en Laravel, Nuxt y arquitecturas escalables en Chile.",
      keywords: "desarrollo de software chile, consultor\xEDa tecnol\xF3gica, ingenier\xEDa de software, aplicaciones web personalizadas, desarrollo web profesional",
      image: "/img/og-home.jpg"
    });
    setSchema({
      type: "WebPage",
      data: {
        name: "SysifosWeb - Consultor\xEDa Tecnol\xF3gica",
        description: "Consultor\xEDa t\xE9cnica de alto nivel y soluciones de ingenier\xEDa avanzada."
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeValue = __nuxt_component_0;
      const _component_HomeProblems = __nuxt_component_1;
      const _component_HomeProposition = __nuxt_component_2;
      const _component_HomeBusinessUnits = __nuxt_component_3;
      const _component_HomeTrust = __nuxt_component_4;
      const _component_HomeTestimonials = __nuxt_component_5;
      const _component_HomeBanner = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HomeValue, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeProblems, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeProposition, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeBusinessUnits, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeTrust, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeBanner, null, null, _parent));
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
//# sourceMappingURL=index-7il_p_2W.mjs.map
