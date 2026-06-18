import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-BUcCVHIk.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-AtPHY__i.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { a as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
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

const _sfc_main$1 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const trustItems = [
      { label: "+50 proyectos entregados" },
      { label: "Rendimiento optimizado" },
      { label: "Escalable desde el d\xEDa 1" },
      { label: "Soporte continuo" }
    ];
    const dashStats = [
      { label: "Proyectos activos", value: "24", trend: "\u2191 +12% este mes", color: "#38BDF8" },
      { label: "Clientes satisfechos", value: "98%", trend: "\u25CF Siempre", color: "#34D399" },
      { label: "Uptime garantizado", value: "99.9%", trend: "\u25CF Operacional", color: "#6366F1" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative w-full min-h-[95vh] flex items-center overflow-hidden",
        style: { "background": "var(--bg-dark)" }
      }, _attrs))} data-v-48f4b37c><div class="absolute inset-0 pointer-events-none z-0" data-v-48f4b37c><div class="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full" style="${ssrRenderStyle({ "background": "var(--purple)", "opacity": "0.12", "filter": "blur(180px)" })}" data-v-48f4b37c></div><div class="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full" style="${ssrRenderStyle({ "background": "var(--accent)", "opacity": "0.08", "filter": "blur(200px)" })}" data-v-48f4b37c></div><div class="absolute top-0 left-0 right-0 h-px" style="${ssrRenderStyle({ "background": "linear-gradient(to right, transparent, rgba(56,189,248,0.15), transparent)" })}" data-v-48f4b37c></div></div><div class="relative z-10 w-[88%] max-w-[1340px] mx-auto pt-36 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 xl:gap-28 items-center" data-v-48f4b37c><div class="flex flex-col items-start text-left" data-v-48f4b37c><div class="hero-enter inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style="${ssrRenderStyle({ "background": "rgba(56,189,248,0.06)", "border": "1px solid rgba(56,189,248,0.18)" })}" data-v-48f4b37c><span class="w-1.5 h-1.5 rounded-full pulse-dot" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-v-48f4b37c></span><span class="text-xs font-medium tracking-wide" style="${ssrRenderStyle({ "color": "var(--accent)" })}" data-v-48f4b37c> Desarrollo de software premium \xB7 La Serena, Chile </span></div><h1 class="hero-enter delay-1 font-bold leading-[1.06] mb-5" style="${ssrRenderStyle({ "font-size": "clamp(2.4rem, 5vw, 3.8rem)", "color": "var(--text-main)", "letter-spacing": "-0.035em", "font-family": "'Inter', sans-serif" })}" data-v-48f4b37c> Tu negocio necesita<br data-v-48f4b37c> una plataforma digital<br data-v-48f4b37c><span class="hero-accent" data-v-48f4b37c>que trabaje por ti.</span></h1><p class="hero-enter delay-2 text-[1.08rem] leading-[1.75] mb-10 max-w-[460px]" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-48f4b37c> Somos el equipo de tecnolog\xEDa detr\xE1s de empresas que crecen. Dise\xF1amos, construimos y escalamos plataformas web que generan resultados reales. </p><div class="hero-enter delay-3 flex flex-col sm:flex-row gap-3.5 mb-12" data-v-48f4b37c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "cta-primary group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[0.9rem]",
        style: { "background": "var(--accent)", "color": "#07101F" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-48f4b37c${_scopeId}>Hablemos de tu proyecto</span><svg class="w-4 h-4 cta-arrow" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-48f4b37c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-48f4b37c${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, "Hablemos de tu proyecto"),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 cta-arrow",
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "cta-secondary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-[0.9rem]",
        style: { "color": "var(--text-main)", "border": "1px solid var(--border)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver nuestros proyectos `);
          } else {
            return [
              createTextVNode(" Ver nuestros proyectos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero-enter delay-4 flex flex-wrap items-center gap-x-6 gap-y-3 pt-8" style="${ssrRenderStyle({ "border-top": "1px solid var(--border)" })}" data-v-48f4b37c><!--[-->`);
      ssrRenderList(trustItems, (trust) => {
        _push(`<div class="flex items-center gap-2" data-v-48f4b37c><svg class="w-3.5 h-3.5 shrink-0" style="${ssrRenderStyle({ "color": "var(--accent)" })}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-48f4b37c><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-48f4b37c></path></svg><span class="text-xs font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-48f4b37c>${ssrInterpolate(trust.label)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="relative hidden lg:flex items-center justify-center mockup-container" data-v-48f4b37c><div class="absolute inset-8 rounded-3xl pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse at 60% 50%, rgba(56,189,248,0.1) 0%, transparent 65%)", "filter": "blur(16px)" })}" data-v-48f4b37c></div><div class="relative w-full max-w-[600px] rounded-2xl overflow-hidden mockup-float" style="${ssrRenderStyle({ "background": "var(--bg-surface)", "border": "1px solid rgba(255,255,255,0.07)", "box-shadow": "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)" })}" data-v-48f4b37c><div class="flex items-center gap-2 px-5 py-3.5" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border-bottom": "1px solid rgba(255,255,255,0.06)" })}" data-v-48f4b37c><div class="flex items-center gap-1.5" data-v-48f4b37c><div class="w-3 h-3 rounded-full" style="${ssrRenderStyle({ "background": "#FF5F57" })}" data-v-48f4b37c></div><div class="w-3 h-3 rounded-full" style="${ssrRenderStyle({ "background": "#FEBC2E" })}" data-v-48f4b37c></div><div class="w-3 h-3 rounded-full" style="${ssrRenderStyle({ "background": "#28C840" })}" data-v-48f4b37c></div></div><div class="flex-1 flex justify-center" data-v-48f4b37c><div class="h-[22px] rounded-md px-3 flex items-center gap-2 w-52" style="${ssrRenderStyle({ "background": "var(--bg-dark)", "border": "1px solid rgba(255,255,255,0.07)" })}" data-v-48f4b37c><div class="w-3 h-3 opacity-40" data-v-48f4b37c><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-48f4b37c><circle cx="5" cy="5" r="3.5" data-v-48f4b37c></circle><path d="M8.5 8.5l2 2" stroke-linecap="round" data-v-48f4b37c></path></svg></div><span class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-48f4b37c>sysifosweb.cl/dashboard</span></div></div></div><div class="p-5 grid grid-cols-[140px_1fr] gap-5" data-v-48f4b37c><div class="flex flex-col gap-2 pr-4" style="${ssrRenderStyle({ "border-right": "1px solid rgba(255,255,255,0.05)" })}" data-v-48f4b37c><div class="flex items-center gap-2 px-2 py-2 rounded-lg mb-1" style="${ssrRenderStyle({ "background": "rgba(56,189,248,0.08)" })}" data-v-48f4b37c><div class="w-4 h-4 rounded" style="${ssrRenderStyle({ "background": "rgba(56,189,248,0.3)" })}" data-v-48f4b37c></div><div class="w-16 h-2.5 rounded" style="${ssrRenderStyle({ "background": "rgba(56,189,248,0.4)" })}" data-v-48f4b37c></div></div><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="flex items-center gap-2 px-2 py-1.5 rounded-md" data-v-48f4b37c><div class="w-3.5 h-3.5 rounded" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}" data-v-48f4b37c></div><div class="h-2 rounded" style="${ssrRenderStyle({ background: "rgba(255,255,255,0.06)", width: ["70%", "85%", "60%", "75%"][i - 1] })}" data-v-48f4b37c></div></div>`);
      });
      _push(`<!--]--><div class="mt-auto pt-4" data-v-48f4b37c><div class="w-full h-[72px] rounded-xl p-3 flex flex-col justify-between" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(99,102,241,0.08))", "border": "1px solid rgba(56,189,248,0.15)" })}" data-v-48f4b37c><div class="w-4 h-4 rounded-md" style="${ssrRenderStyle({ "background": "rgba(56,189,248,0.25)" })}" data-v-48f4b37c></div><div class="w-3/4 h-2 rounded" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.1)" })}" data-v-48f4b37c></div></div></div></div><div class="flex flex-col gap-4" data-v-48f4b37c><div class="grid grid-cols-3 gap-3" data-v-48f4b37c><!--[-->`);
      ssrRenderList(dashStats, (stat) => {
        _push(`<div class="p-3 rounded-xl flex flex-col gap-1.5" style="${ssrRenderStyle({ "background": "var(--bg-dark)", "border": "1px solid rgba(255,255,255,0.06)" })}" data-v-48f4b37c><p class="text-[9px] font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-48f4b37c>${ssrInterpolate(stat.label)}</p><p class="text-xl font-bold leading-none" style="${ssrRenderStyle({ "color": "var(--text-main)" })}" data-v-48f4b37c>${ssrInterpolate(stat.value)}</p><p class="text-[9px] font-medium" style="${ssrRenderStyle({ color: stat.color })}" data-v-48f4b37c>${ssrInterpolate(stat.trend)}</p></div>`);
      });
      _push(`<!--]--></div><div class="rounded-xl p-4" style="${ssrRenderStyle({ "background": "var(--bg-dark)", "border": "1px solid rgba(255,255,255,0.06)" })}" data-v-48f4b37c><div class="flex items-center justify-between mb-3" data-v-48f4b37c><p class="text-[10px] font-semibold" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-48f4b37c>Rendimiento del mes</p><div class="flex items-center gap-3" data-v-48f4b37c><span class="flex items-center gap-1 text-[8px]" style="${ssrRenderStyle({ "color": "#38BDF8" })}" data-v-48f4b37c><span class="w-4 h-px inline-block" style="${ssrRenderStyle({ "background": "#38BDF8" })}" data-v-48f4b37c></span>Tr\xE1fico </span><span class="flex items-center gap-1 text-[8px]" style="${ssrRenderStyle({ "color": "#6366F1" })}" data-v-48f4b37c><span class="w-4 h-px inline-block border-t border-dashed" style="${ssrRenderStyle({ "border-color": "#6366F1" })}" data-v-48f4b37c></span>Conversi\xF3n </span></div></div><svg viewBox="0 0 340 88" class="w-full overflow-visible" data-v-48f4b37c><defs data-v-48f4b37c><linearGradient id="g1" x1="0" x2="0" y1="0" y2="1" data-v-48f4b37c><stop offset="0%" stop-color="#38BDF8" stop-opacity="0.18" data-v-48f4b37c></stop><stop offset="100%" stop-color="#38BDF8" stop-opacity="0" data-v-48f4b37c></stop></linearGradient><linearGradient id="g2" x1="0" x2="0" y1="0" y2="1" data-v-48f4b37c><stop offset="0%" stop-color="#6366F1" stop-opacity="0.12" data-v-48f4b37c></stop><stop offset="100%" stop-color="#6366F1" stop-opacity="0" data-v-48f4b37c></stop></linearGradient></defs><!--[-->`);
      ssrRenderList([22, 44, 66, 88], (y) => {
        _push(`<line x1="0"${ssrRenderAttr("y1", y)} x2="340"${ssrRenderAttr("y2", y)} stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-48f4b37c></line>`);
      });
      _push(`<!--]--><path d="M0 80 L0 58 C30 50 55 68 85 50 S120 28 155 30 S200 18 240 14 S290 9 340 6 L340 80 Z" fill="url(#g1)" data-v-48f4b37c></path><path d="M0 58 C30 50 55 68 85 50 S120 28 155 30 S200 18 240 14 S290 9 340 6" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" data-v-48f4b37c></path><path d="M0 80 L0 70 C35 64 65 76 100 66 S148 58 180 60 S225 55 265 48 S300 44 340 42 L340 80 Z" fill="url(#g2)" data-v-48f4b37c></path><path d="M0 70 C35 64 65 76 100 66 S148 58 180 60 S225 55 265 48 S300 44 340 42" fill="none" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" data-v-48f4b37c></path><circle cx="340" cy="6" r="3" fill="#38BDF8" data-v-48f4b37c></circle><circle cx="340" cy="6" r="6" fill="#38BDF8" fill-opacity="0.15" data-v-48f4b37c></circle></svg></div></div></div></div><div class="absolute -top-5 -right-6 flex items-center gap-3 px-4 py-3 rounded-2xl float-card-1" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid rgba(255,255,255,0.08)", "box-shadow": "0 16px 40px rgba(0,0,0,0.4)", "min-width": "200px" })}" data-v-48f4b37c><div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #38BDF8, #6366F1)", "color": "white" })}" data-v-48f4b37c>JM</div><div data-v-48f4b37c><p class="text-[11px] font-semibold leading-none mb-0.5" style="${ssrRenderStyle({ "color": "var(--text-main)" })}" data-v-48f4b37c>Nuevo proyecto iniciado</p><p class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-48f4b37c>E-commerce \xB7 Retail</p></div><div class="w-2 h-2 rounded-full ml-auto shrink-0" style="${ssrRenderStyle({ "background": "#34D399" })}" data-v-48f4b37c></div></div><div class="absolute -bottom-5 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl float-card-2" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid rgba(255,255,255,0.08)", "box-shadow": "0 16px 40px rgba(0,0,0,0.4)" })}" data-v-48f4b37c><div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style="${ssrRenderStyle({ "background": "rgba(52,211,153,0.12)" })}" data-v-48f4b37c><svg class="w-4 h-4" style="${ssrRenderStyle({ "color": "#34D399" })}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-48f4b37c><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-48f4b37c></path></svg></div><div data-v-48f4b37c><p class="text-[11px] font-semibold leading-none mb-0.5" style="${ssrRenderStyle({ "color": "var(--text-main)" })}" data-v-48f4b37c>Deploy completado</p><p class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-48f4b37c>Producci\xF3n \xB7 Hace 3 min</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-48f4b37c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavbar = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-10" }, null, _parent));
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-nAA6NSGS.mjs.map
