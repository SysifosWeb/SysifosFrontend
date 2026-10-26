import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { resolveDirective, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Zap, Target, LockKeyhole, Handshake } from 'lucide-vue-next';
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
  __name: "HomeProposition",
  __ssrInlineRender: true,
  setup(__props) {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "proposition-section bg-section-dark" }, _attrs))} data-v-8d76da2c><div class="section-container" data-v-8d76da2c><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-8d76da2c><div data-v-8d76da2c><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-8d76da2c>Nuestra propuesta de valor</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title proposition-title mb-6",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-8d76da2c> Construimos motores de crecimiento digital. </h2><p${ssrRenderAttrs(mergeProps({
        class: "section-subtitle mb-10",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-8d76da2c> No construimos p\xE1ginas web. Cada proyecto que entregamos est\xE1 dise\xF1ado para generar resultados medibles: m\xE1s visitas, m\xE1s conversiones y m\xE1s ventas. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/contacto",
        class: "cta-primary-btn",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agenda una asesor\xEDa gratuita <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-8d76da2c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-8d76da2c${_scopeId}></path></svg>`);
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
      _push(`</div><div class="flex flex-col gap-4" data-v-8d76da2c><!--[-->`);
      ssrRenderList(differentiators, (diff, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: diff.title,
          "data-delay": index * 150,
          class: "diff-card flex items-start gap-5"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-8d76da2c><div class="diff-icon" data-v-8d76da2c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(diff.icon), {
          class: "w-5 h-5",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><div data-v-8d76da2c><h3 class="card-title mb-1" data-v-8d76da2c>${ssrInterpolate(diff.title)}</h3><p class="card-text" data-v-8d76da2c>${ssrInterpolate(diff.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProposition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeProposition = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d76da2c"]]);

export { HomeProposition as default };
//# sourceMappingURL=HomeProposition-CfgZQ4HN.mjs.map
