import { _ as _export_sfc, c as __nuxt_component_0$1 } from './server.mjs';
import { resolveDirective, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-closing relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-section-dark impulso-closing" }, _attrs))} data-v-55b1d815><div class="absolute inset-0 pointer-events-none z-0 portal-backdrop" data-v-55b1d815><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl" data-v-55b1d815><svg viewBox="0 0 1000 1000" class="w-full h-full" data-v-55b1d815><g class="portal-lines" stroke="var(--accent)" stroke-width="0.3" data-v-55b1d815><!--[-->`);
  ssrRenderList(36, (n) => {
    _push(`<line x1="500" y1="500"${ssrRenderAttr("x2", 500 + Math.cos(n * 10 * Math.PI / 180) * 800)}${ssrRenderAttr("y2", 500 + Math.sin(n * 10 * Math.PI / 180) * 800)} class="portal-ray" data-v-55b1d815></line>`);
  });
  _push(`<!--]--><circle cx="500" cy="500" r="150" fill="none" stroke-dasharray="4 8" data-v-55b1d815></circle><circle cx="500" cy="500" r="300" fill="none" stroke-dasharray="2 10" data-v-55b1d815></circle></g></svg></div></div><div class="max-w-[1000px] w-[88%] mx-auto relative z-10 text-center" data-v-55b1d815><p${ssrRenderAttrs(mergeProps({
    class: "banner-eyebrow mb-4",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-55b1d815>Empieza hoy</p><h2${ssrRenderAttrs(mergeProps({
    class: "section-title banner-title mx-auto mb-6",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-55b1d815> \xBFListo para hacer crecer tu negocio? </h2><p${ssrRenderAttrs(mergeProps({
    class: "banner-description mb-12 max-w-2xl mx-auto",
    style: { "color": "var(--text-secondary)" },
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-55b1d815> Agenda una llamada de 30 minutos sin costo. Te escuchamos y te decimos honestamente c\xF3mo podemos ayudarte. </p><div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col items-center gap-5",
    "data-delay": "300"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-55b1d815>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contacto",
    class: "btn btn-primary px-10 py-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Agenda tu asesor\xEDa gratuita <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-55b1d815${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-55b1d815${_scopeId}></path></svg>`);
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
  _push(`<p class="text-small" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-55b1d815>Sin compromisos \xB7 Sin contratos largos \xB7 Respuesta en 24 horas</p></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-55b1d815"]]);

export { HomeBanner as default };
//# sourceMappingURL=HomeBanner-CeP4KTiY.mjs.map
