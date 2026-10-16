import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-DICStifo.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_2$1 } from './CookieConsent-BxCi5EwN.mjs';
import 'vue-router';
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
      { label: "Proyectos activos", value: "24", trend: "\u2191 +12% este mes", color: "var(--accent)" },
      { label: "Clientes satisfechos", value: "98%", trend: "\u25CF Siempre", color: "var(--accent)" },
      { label: "Uptime garantizado", value: "99.9%", trend: "\u25CF Operacional", color: "var(--accent)" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "relative w-full min-h-[95vh] flex items-center overflow-hidden",
        style: { "background": "var(--bg-dark)" }
      }, _attrs))} data-v-daafdbd9><div class="absolute inset-0 pointer-events-none z-0" data-v-daafdbd9><div class="absolute -top-60 -left-60 w-[700px] h-[700px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--purple) 0%, transparent 70%)", "opacity": "0.15" })}" data-v-daafdbd9></div><div class="absolute bottom-0 right-0 w-[550px] h-[550px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--accent) 0%, transparent 70%)", "opacity": "0.12" })}" data-v-daafdbd9></div><div class="absolute top-0 left-0 right-0 h-px" style="${ssrRenderStyle({ "background": "linear-gradient(to right, transparent, rgba(var(--decoration-rgb), 0.15), transparent)" })}" data-v-daafdbd9></div></div><div class="relative z-10 site-container pt-36 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 xl:gap-28 items-center" data-v-daafdbd9><div class="flex flex-col items-start text-left" data-v-daafdbd9><div class="hero-enter inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8" style="${ssrRenderStyle({ "background": "rgba(var(--decoration-rgb), 0.06)", "border": "1px solid rgba(var(--decoration-rgb), 0.18)" })}" data-v-daafdbd9><span class="w-1.5 h-1.5 rounded-full pulse-dot" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-v-daafdbd9></span><span class="text-xs font-medium tracking-wide" style="${ssrRenderStyle({ "color": "var(--accent)" })}" data-v-daafdbd9> Desarrollo de software premium \xB7 La Serena, Chile </span></div><h1 class="hero-enter delay-1 font-bold leading-[1.06] mb-5" style="${ssrRenderStyle({ "font-size": "clamp(2.4rem, 5vw, 3.8rem)", "color": "var(--text-main)", "letter-spacing": "-0.035em", "font-family": "'Inter', sans-serif" })}" data-v-daafdbd9> Tu plataforma trabaja por ti. </h1><p class="hero-enter delay-2 text-[1.08rem] leading-[1.75] mb-10 max-w-[460px]" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-daafdbd9> Tu negocio necesita una plataforma digital que trabaje por ti. Somos el equipo de tecnolog\xEDa detr\xE1s de empresas que crecen. Dise\xF1amos, construimos y escalamos plataformas web que generan resultados reales. </p><div class="hero-enter delay-3 flex flex-col sm:flex-row gap-3.5 mb-12" data-v-daafdbd9><a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20cotizar%20mi%20proyecto%20web%2Fsoftware" target="_blank" rel="noopener" class="cta-primary group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[0.9rem]" style="${ssrRenderStyle({ "background": "var(--accent)", "color": "var(--button-text)" })}" data-v-daafdbd9><span data-v-daafdbd9>Hablemos por WhatsApp</span><svg class="w-4 h-4 cta-arrow" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" data-v-daafdbd9><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.222-.644.073-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.08 4.487.707.307 1.255.491 1.68.626.711.226 1.36.195 1.874.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" data-v-daafdbd9></path></svg></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "cta-secondary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-[0.9rem]",
        style: { "color": "var(--text-main)", "border": "1px solid var(--border)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver portfolio `);
          } else {
            return [
              createTextVNode(" Ver portfolio ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero-enter delay-4 flex flex-wrap items-center gap-x-6 gap-y-3 pt-8" style="${ssrRenderStyle({ "border-top": "1px solid var(--border)" })}" data-v-daafdbd9><!--[-->`);
      ssrRenderList(trustItems, (trust) => {
        _push(`<div class="flex items-center gap-2" data-v-daafdbd9><svg class="w-3.5 h-3.5 shrink-0" aria-hidden="true" style="${ssrRenderStyle({ "color": "var(--accent)" })}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-daafdbd9><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-daafdbd9></path></svg><span class="text-xs font-medium" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-daafdbd9>${ssrInterpolate(trust.label)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="relative hidden lg:flex items-center justify-center mockup-container" aria-hidden="true" data-v-daafdbd9><div class="absolute inset-8 rounded-3xl pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse at 60% 50%, rgba(var(--decoration-rgb), 0.1) 0%, transparent 65%)" })}" data-v-daafdbd9></div><div class="relative w-full max-w-[600px] rounded-2xl overflow-hidden mockup-float" style="${ssrRenderStyle({ "background": "var(--bg-surface)", "border": "1px solid rgba(var(--neutral-rgb), 0.07)", "box-shadow": "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(var(--neutral-rgb), 0.04)" })}" data-v-daafdbd9><div class="flex items-center gap-2 px-5 py-3.5" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border-bottom": "1px solid rgba(var(--neutral-rgb), 0.06)" })}" data-v-daafdbd9><div class="flex items-center gap-1.5" data-v-daafdbd9><div class="w-3 h-3 rounded-full" style="${ssrRenderStyle({ "background": "#FF5F57" })}" data-v-daafdbd9></div><div class="w-3 h-3 rounded-full" style="${ssrRenderStyle({ "background": "#FEBC2E" })}" data-v-daafdbd9></div><div class="w-3 h-3 rounded-full" style="${ssrRenderStyle({ "background": "#28C840" })}" data-v-daafdbd9></div></div><div class="flex-1 flex justify-center" data-v-daafdbd9><div class="h-[22px] rounded-md px-3 flex items-center gap-2 w-52" style="${ssrRenderStyle({ "background": "var(--bg-dark)", "border": "1px solid rgba(var(--neutral-rgb), 0.07)" })}" data-v-daafdbd9><div class="w-3 h-3 opacity-40" data-v-daafdbd9><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-daafdbd9><circle cx="5" cy="5" r="3.5" data-v-daafdbd9></circle><path d="M8.5 8.5l2 2" stroke-linecap="round" data-v-daafdbd9></path></svg></div><span class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-daafdbd9>sysifosweb.cl/dashboard</span></div></div></div><div class="p-5 grid grid-cols-[140px_1fr] gap-5" data-v-daafdbd9><div class="flex flex-col gap-2 pr-4" style="${ssrRenderStyle({ "border-right": "1px solid rgba(var(--neutral-rgb), 0.05)" })}" data-v-daafdbd9><div class="flex items-center gap-2 px-2 py-2 rounded-lg mb-1" style="${ssrRenderStyle({ "background": "rgba(var(--decoration-rgb), 0.08)" })}" data-v-daafdbd9><div class="w-4 h-4 rounded" style="${ssrRenderStyle({ "background": "rgba(var(--decoration-rgb), 0.3)" })}" data-v-daafdbd9></div><div class="w-16 h-2.5 rounded" style="${ssrRenderStyle({ "background": "rgba(var(--decoration-rgb), 0.4)" })}" data-v-daafdbd9></div></div><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="flex items-center gap-2 px-2 py-1.5 rounded-md" data-v-daafdbd9><div class="w-3.5 h-3.5 rounded" style="${ssrRenderStyle({ "background": "rgba(var(--neutral-rgb), 0.07)" })}" data-v-daafdbd9></div><div class="h-2 rounded" style="${ssrRenderStyle({ background: "rgba(var(--neutral-rgb), 0.06)", width: ["70%", "85%", "60%", "75%"][i - 1] })}" data-v-daafdbd9></div></div>`);
      });
      _push(`<!--]--><div class="mt-auto pt-4" data-v-daafdbd9><div class="w-full h-[72px] rounded-xl p-3 flex flex-col justify-between" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, rgba(var(--decoration-rgb), 0.08), rgba(var(--decoration-rgb), 0.08))", "border": "1px solid rgba(var(--decoration-rgb), 0.15)" })}" data-v-daafdbd9><div class="w-4 h-4 rounded-md" style="${ssrRenderStyle({ "background": "rgba(var(--decoration-rgb), 0.25)" })}" data-v-daafdbd9></div><div class="w-3/4 h-2 rounded" style="${ssrRenderStyle({ "background": "rgba(var(--neutral-rgb), 0.1)" })}" data-v-daafdbd9></div></div></div></div><div class="flex flex-col gap-4" data-v-daafdbd9><div class="grid grid-cols-3 gap-3" data-v-daafdbd9><!--[-->`);
      ssrRenderList(dashStats, (stat) => {
        _push(`<div class="p-3 rounded-xl flex flex-col gap-1.5" style="${ssrRenderStyle({ "background": "var(--bg-dark)", "border": "1px solid rgba(var(--neutral-rgb), 0.06)" })}" data-v-daafdbd9><p class="text-[9px] font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-daafdbd9>${ssrInterpolate(stat.label)}</p><p class="text-xl font-bold leading-none" style="${ssrRenderStyle({ "color": "var(--text-main)" })}" data-v-daafdbd9>${ssrInterpolate(stat.value)}</p><p class="text-[9px] font-medium" style="${ssrRenderStyle({ color: stat.color })}" data-v-daafdbd9>${ssrInterpolate(stat.trend)}</p></div>`);
      });
      _push(`<!--]--></div><div class="rounded-xl p-4" style="${ssrRenderStyle({ "background": "var(--bg-dark)", "border": "1px solid rgba(var(--neutral-rgb), 0.06)" })}" data-v-daafdbd9><div class="flex items-center justify-between mb-3" data-v-daafdbd9><p class="text-[10px] font-semibold" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-daafdbd9>Rendimiento del mes</p><div class="flex items-center gap-3" data-v-daafdbd9><span class="flex items-center gap-1 text-[8px]" style="${ssrRenderStyle({ "color": "var(--accent)" })}" data-v-daafdbd9><span class="w-4 h-px inline-block" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-v-daafdbd9></span>Tr\xE1fico </span><span class="flex items-center gap-1 text-[8px]" style="${ssrRenderStyle({ "color": "var(--accent)" })}" data-v-daafdbd9><span class="w-4 h-px inline-block border-t border-dashed" style="${ssrRenderStyle({ "border-color": "var(--accent)" })}" data-v-daafdbd9></span>Conversi\xF3n </span></div></div><svg viewBox="0 0 340 88" class="w-full overflow-visible" data-v-daafdbd9><defs data-v-daafdbd9><linearGradient id="g1" x1="0" x2="0" y1="0" y2="1" data-v-daafdbd9><stop offset="0%" stop-color="var(--accent)" stop-opacity="0.18" data-v-daafdbd9></stop><stop offset="100%" stop-color="var(--accent)" stop-opacity="0" data-v-daafdbd9></stop></linearGradient><linearGradient id="g2" x1="0" x2="0" y1="0" y2="1" data-v-daafdbd9><stop offset="0%" stop-color="var(--accent)" stop-opacity="0.12" data-v-daafdbd9></stop><stop offset="100%" stop-color="var(--accent)" stop-opacity="0" data-v-daafdbd9></stop></linearGradient></defs><!--[-->`);
      ssrRenderList([22, 44, 66, 88], (y) => {
        _push(`<line x1="0"${ssrRenderAttr("y1", y)} x2="340"${ssrRenderAttr("y2", y)} stroke="rgba(var(--neutral-rgb), 0.04)" stroke-width="1" data-v-daafdbd9></line>`);
      });
      _push(`<!--]--><path d="M0 80 L0 58 C30 50 55 68 85 50 S120 28 155 30 S200 18 240 14 S290 9 340 6 L340 80 Z" fill="url(#g1)" data-v-daafdbd9></path><path d="M0 58 C30 50 55 68 85 50 S120 28 155 30 S200 18 240 14 S290 9 340 6" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" data-v-daafdbd9></path><path d="M0 80 L0 70 C35 64 65 76 100 66 S148 58 180 60 S225 55 265 48 S300 44 340 42 L340 80 Z" fill="url(#g2)" data-v-daafdbd9></path><path d="M0 70 C35 64 65 76 100 66 S148 58 180 60 S225 55 265 48 S300 44 340 42" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" data-v-daafdbd9></path><circle cx="340" cy="6" r="3" fill="var(--accent)" data-v-daafdbd9></circle><circle cx="340" cy="6" r="6" fill="var(--accent)" fill-opacity="0.15" data-v-daafdbd9></circle></svg></div></div></div></div><div class="absolute -top-5 -right-6 flex items-center gap-3 px-4 py-3 rounded-2xl float-card-1" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid rgba(var(--neutral-rgb), 0.08)", "box-shadow": "0 16px 40px rgba(0,0,0,0.4)", "min-width": "200px" })}" data-v-daafdbd9><div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, var(--heading-gradient-end), var(--heading-gradient-end))", "color": "white" })}" data-v-daafdbd9>JM</div><div data-v-daafdbd9><p class="text-[11px] font-semibold leading-none mb-0.5" style="${ssrRenderStyle({ "color": "var(--text-main)" })}" data-v-daafdbd9>Nuevo proyecto iniciado</p><p class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-daafdbd9>E-commerce \xB7 Retail</p></div><div class="w-2 h-2 rounded-full ml-auto shrink-0" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-v-daafdbd9></div></div><div class="absolute -bottom-5 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl float-card-2" style="${ssrRenderStyle({ "background": "var(--bg-elevated)", "border": "1px solid rgba(var(--neutral-rgb), 0.08)", "box-shadow": "0 16px 40px rgba(0,0,0,0.4)" })}" data-v-daafdbd9><div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style="${ssrRenderStyle({ "background": "rgba(var(--decoration-rgb), 0.12)" })}" data-v-daafdbd9><svg class="w-4 h-4" style="${ssrRenderStyle({ "color": "var(--accent)" })}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-daafdbd9><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-daafdbd9></path></svg></div><div data-v-daafdbd9><p class="text-[11px] font-semibold leading-none mb-0.5" style="${ssrRenderStyle({ "color": "var(--text-main)" })}" data-v-daafdbd9>Deploy completado </p><p class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-daafdbd9>Producci\xF3n \xB7 Hace 3 min</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-daafdbd9"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavbar = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  const _component_CookieConsent = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans impulso-hybrid" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-10" }, null, _parent));
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_CookieConsent, null, null, _parent));
  _push(`<a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20sus%20servicios" target="_blank" rel="noopener" aria-label="WhatsApp" class="whatsapp-float"><svg viewBox="0 0 32 32" class="w-8 h-8 text-white" fill="currentColor"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.84-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 5.24 1.33c5.963 0 10.812-4.84 10.812-10.8 0-5.957-4.85-10.788-10.824-10.788z"></path></svg></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CqYKXtAa.mjs.map
