import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { resolveDirective, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Globe, ShoppingBag, Cpu } from 'lucide-vue-next';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import 'vue-router';

const _sfc_main = {
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
      }, _attrs))} data-v-18604fe9><div class="section-container" data-v-18604fe9><div class="mb-12 max-w-xl" data-v-18604fe9><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-18604fe9>Lo que podemos hacer por ti</p><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-18604fe9> Soluciones digitales que impulsan tu negocio. </h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-5" data-v-18604fe9><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          "data-delay": index * 150,
          class: ["service-card group relative flex flex-col p-8 cursor-default bg-section-surface", `service-card--${service.variant}`]
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-18604fe9><div class="service-icon mb-7 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" data-v-18604fe9>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
          class: "w-5 h-5",
          "stroke-width": 1.8
        }, null), _parent);
        _push(`</div><h3 class="card-title mb-3" data-v-18604fe9>${ssrInterpolate(service.title)}</h3><p class="card-text mb-8 flex-1" data-v-18604fe9>${ssrInterpolate(service.description)}</p><div class="flex flex-wrap gap-2 mb-8" data-v-18604fe9><!--[-->`);
        ssrRenderList(service.features, (feat) => {
          _push(`<span class="feature-pill" data-v-18604fe9>${ssrInterpolate(feat)}</span>`);
        });
        _push(`<!--]--></div><div class="service-cta-wrap pt-5" data-v-18604fe9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contacto",
          class: "service-cta group/link inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Hablemos de tu proyecto <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-18604fe9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-18604fe9${_scopeId}></path></svg>`);
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
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-18604fe9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicios",
        class: "cta-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver todos los servicios <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-18604fe9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-18604fe9${_scopeId}></path></svg>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBusinessUnits.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeBusinessUnits = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18604fe9"]]);

export { HomeBusinessUnits as default };
//# sourceMappingURL=HomeBusinessUnits-D9Ea7UHH.mjs.map
