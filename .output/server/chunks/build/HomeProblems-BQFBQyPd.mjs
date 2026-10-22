import { _ as _export_sfc, c as __nuxt_component_0$1 } from './server.mjs';
import { resolveDirective, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Gauge, TrendingDown, Layers, CheckCircle } from 'lucide-vue-next';
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

const _sfc_main = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "problems-section bg-section-dark" }, _attrs))} data-v-6a401263><div class="section-container" data-v-6a401263><div class="text-center mb-12" data-v-6a401263><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a401263>El problema que frena tu crecimiento</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title problems-title",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a401263> Tu negocio merece m\xE1s que un sitio web gen\xE9rico. </h2></div><div class="flex flex-col gap-4" data-v-6a401263><!--[-->`);
      ssrRenderList(pains, (pain, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: pain.id,
          "data-delay": index * 150,
          class: "pain-card group relative flex flex-col md:flex-row items-start md:items-center gap-6 bg-section-surface card-border"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a401263><div class="${ssrRenderClass([pain.iconClass, "pain-icon shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"])}" data-v-6a401263>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pain.icon), {
          class: ["w-5 h-5", pain.colorClass],
          "stroke-width": 1.8
        }, null), _parent);
        _push(`</div><div class="flex-1 min-w-0" data-v-6a401263><h3 class="card-title mb-1.5" data-v-6a401263>${ssrInterpolate(pain.title)}</h3><p class="card-text" data-v-6a401263>${ssrInterpolate(pain.description)}</p></div><div class="solution-pill shrink-0 hidden lg:flex" data-v-6a401263>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(CheckCircle)), { class: "w-4 h-4 shrink-0 text-accent" }, null), _parent);
        _push(`<span class="solution-pill__text" data-v-6a401263>${ssrInterpolate(pain.solution)}</span></div><div class="card-hover-glow" data-v-6a401263></div></div>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({
        class: "mt-12 text-center",
        "data-delay": "400"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a401263><p class="card-text mb-5" data-v-6a401263>\xBFTe identificas con alguno de estos problemas?</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "cta-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hablemos de tu proyecto <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-6a401263${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-6a401263${_scopeId}></path></svg>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProblems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeProblems = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a401263"]]);

export { HomeProblems as default };
//# sourceMappingURL=HomeProblems-BQFBQyPd.mjs.map
