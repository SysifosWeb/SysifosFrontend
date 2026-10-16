import { defineAsyncComponent, unref, resolveDirective, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Search, PenTool, Terminal, CheckCircle, Gauge, TrendingDown, Layers, Zap, Target, LockKeyhole, Handshake } from 'lucide-vue-next';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { u as useSEO } from './useSEO-BIcZW3-z.mjs';
import '../_/nitro.mjs';
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

const _sfc_main$3 = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section bg-section-dark" }, _attrs))} data-v-333ac341><div class="max-w-[1400px] w-[92%] mx-auto relative z-10" data-v-333ac341><div class="section-header text-center mb-16" data-v-333ac341><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-333ac341>As\xED trabajamos juntos</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-333ac341> Empezar es m\xE1s f\xE1cil de lo que crees. </h2></div><div class="relative" data-v-333ac341><div class="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px connector-line" data-v-333ac341></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" data-v-333ac341><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "relative group step-item",
          "data-delay": index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-333ac341><div class="flex flex-col items-center text-center" data-v-333ac341><div class="step-icon-wrap w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-300" data-v-333ac341>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8 step-icon transition-transform group-hover:scale-110" }, null), _parent);
        _push(`</div><h3 class="card-title mb-3 transition-colors group-hover:step-title-hover" data-v-333ac341>${ssrInterpolate(step.title)}</h3><p class="card-text max-w-[200px]" data-v-333ac341>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeValue.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-333ac341"]]);
const _sfc_main$2 = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "problems-section bg-section-dark" }, _attrs))} data-v-48b96650><div class="section-container" data-v-48b96650><div class="text-center mb-12" data-v-48b96650><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-48b96650>El problema que frena tu crecimiento</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title problems-title",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-48b96650> Tu negocio merece m\xE1s que un sitio web gen\xE9rico. </h2></div><div class="flex flex-col gap-4" data-v-48b96650><!--[-->`);
      ssrRenderList(pains, (pain, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: pain.id,
          "data-delay": index * 150,
          class: "pain-card group relative flex flex-col md:flex-row items-start md:items-center gap-6 bg-section-surface card-border"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-48b96650><div class="${ssrRenderClass([pain.iconClass, "pain-icon shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"])}" data-v-48b96650>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pain.icon), {
          class: ["w-5 h-5", pain.colorClass],
          "stroke-width": 1.8
        }, null), _parent);
        _push(`</div><div class="flex-1 min-w-0" data-v-48b96650><h3 class="card-title mb-1.5" data-v-48b96650>${ssrInterpolate(pain.title)}</h3><p class="card-text" data-v-48b96650>${ssrInterpolate(pain.description)}</p></div><div class="solution-pill shrink-0 hidden lg:flex" data-v-48b96650>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(CheckCircle)), { class: "w-4 h-4 shrink-0 text-accent" }, null), _parent);
        _push(`<span class="solution-pill__text" data-v-48b96650>${ssrInterpolate(pain.solution)}</span></div><div class="card-hover-glow" data-v-48b96650></div></div>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({
        class: "mt-12 text-center",
        "data-delay": "400"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-48b96650><p class="card-text mb-5" data-v-48b96650>\xBFTe identificas con alguno de estos problemas?</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "cta-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hablemos de tu proyecto <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-48b96650${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-48b96650${_scopeId}></path></svg>`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProblems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-48b96650"]]);
const _sfc_main$1 = {
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
        icon: Zap,
        title: "Ves resultados r\xE1pido",
        description: "No esperamos meses para mostrarte avances. En 2\u20134 semanas ya tienes algo real funcionando."
      },
      {
        icon: Target,
        title: "Nos importa tu negocio, no solo el c\xF3digo",
        description: "Medimos el \xE9xito en ventas, leads y crecimiento. No en cu\xE1ntas l\xEDneas de c\xF3digo escribimos."
      },
      {
        icon: LockKeyhole,
        title: "Tu plataforma crece contigo",
        description: "Construimos pensando en el futuro de tu empresa. Sin bloqueos t\xE9cnicos ni reescrituras costosas."
      },
      {
        icon: Handshake,
        title: "Hablas con quien construye",
        description: "Sin intermediarios. Tienes acceso directo al equipo que trabaja en tu proyecto, siempre."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "proposition-section bg-section-dark" }, _attrs))} data-v-69f31b31><div class="section-container" data-v-69f31b31><div class="stats-grid" data-v-69f31b31><!--[-->`);
      ssrRenderList(stats, (stat, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: stat.label,
          class: "text-center md:text-left",
          "data-delay": index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-69f31b31><div class="stat-number" data-v-69f31b31>${ssrInterpolate(stat.number)}</div><p class="card-text" data-v-69f31b31>${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-69f31b31><div data-v-69f31b31><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-69f31b31>Nuestra propuesta de valor</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title proposition-title mb-6",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-69f31b31> Construimos motores de crecimiento digital. </h2><p${ssrRenderAttrs(mergeProps({
        class: "section-subtitle mb-10",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-69f31b31> No construimos p\xE1ginas web. Cada proyecto que entregamos est\xE1 dise\xF1ado para generar resultados medibles: m\xE1s visitas, m\xE1s conversiones y m\xE1s ventas. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/contacto",
        class: "cta-primary-btn",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agenda una asesor\xEDa gratuita <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-69f31b31${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-69f31b31${_scopeId}></path></svg>`);
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
      _push(`</div><div class="flex flex-col gap-4" data-v-69f31b31><!--[-->`);
      ssrRenderList(differentiators, (diff, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: diff.title,
          "data-delay": index * 150,
          class: "diff-card flex items-start gap-5"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-69f31b31><div class="diff-icon" data-v-69f31b31>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(diff.icon), {
          class: "w-5 h-5",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><div data-v-69f31b31><h3 class="card-title mb-1" data-v-69f31b31>${ssrInterpolate(diff.title)}</h3><p class="card-text" data-v-69f31b31>${ssrInterpolate(diff.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProposition.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69f31b31"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    const HomeBusinessUnits = defineAsyncComponent(() => import('./HomeBusinessUnits-H3MyGwer.mjs'));
    const HomeTrust = defineAsyncComponent(() => import('./HomeTrust-8iFw7UAa.mjs'));
    const HomeTestimonials = defineAsyncComponent(() => import('./HomeTestimonials-DJQhB97i.mjs'));
    const HomeBanner = defineAsyncComponent(() => import('./HomeBanner-s720K8K5.mjs'));
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
        description: "Agencia de desarrollo de software, p\xE1ginas web profesionales y tiendas online en La Serena, Chile. Especialistas en Laravel, Nuxt, Vue.js y React.",
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
    setSchema({
      type: "Review",
      data: {
        reviews: [
          {
            author: "Mar\xEDa Rodr\xEDguez",
            text: "Antes ten\xEDa una web que no me tra\xEDa nada. Desde que trabajamos con SysifosWeb, nuestras consultas online se triplicaron. El equipo entendi\xF3 exactamente lo que necesitaba y lo ejecutaron con precisi\xF3n.",
            rating: "5"
          },
          {
            author: "Carlos L\xF3pez",
            text: "Lanzamos nuestra tienda online en tiempo r\xE9cord. Nuestras ventas crecieron un 40% en el primer trimestre.",
            rating: "5"
          },
          {
            author: "Ana Silva",
            text: "El sistema que desarrollaron nos ahorr\xF3 horas de trabajo manual cada semana. Ahora el equipo se enfoca en lo que realmente importa.",
            rating: "5"
          }
        ]
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeValue = __nuxt_component_0;
      const _component_HomeProblems = __nuxt_component_1;
      const _component_HomeProposition = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HomeValue, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeProblems, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeProposition, null, null, _parent));
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(HomeBusinessUnits), null, null, _parent));
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(HomeTrust), null, null, _parent));
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(HomeTestimonials), null, null, _parent));
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(HomeBanner), null, null, _parent));
        },
        _: 1
      });
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
//# sourceMappingURL=index-DnWHZ7X8.mjs.map
