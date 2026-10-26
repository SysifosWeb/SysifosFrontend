import { resolveDirective, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Search, PenTool, Terminal, CheckCircle } from 'lucide-vue-next';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
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
        id: "proceso",
        class: "section bg-section-dark"
      }, _attrs))} data-v-0a2815a8><div class="max-w-[1400px] w-[92%] mx-auto relative z-10" data-v-0a2815a8><div class="section-header text-center mb-16" data-v-0a2815a8><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0a2815a8>As\xED trabajamos juntos</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0a2815a8> Empezar es m\xE1s f\xE1cil de lo que crees. </h2></div><div class="relative" data-v-0a2815a8><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" data-v-0a2815a8><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "relative group step-item",
          "data-delay": index * 150
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0a2815a8><div class="step-content relative w-full max-w-[200px] mx-auto flex flex-col items-start text-left" data-v-0a2815a8><div class="step-icon-wrap w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-300" data-v-0a2815a8>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8 step-icon transition-transform group-hover:scale-110" }, null), _parent);
        _push(`</div><div class="step-copy w-full text-left" data-v-0a2815a8><h3 class="card-title mb-3 transition-colors group-hover:step-title-hover" data-v-0a2815a8>${ssrInterpolate(step.title)}</h3><p class="card-text" data-v-0a2815a8>${ssrInterpolate(step.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeValue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeValue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a2815a8"]]);

export { HomeValue as default };
//# sourceMappingURL=HomeValue-DG07qlXJ.mjs.map
