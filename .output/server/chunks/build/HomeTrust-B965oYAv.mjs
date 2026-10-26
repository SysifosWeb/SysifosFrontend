import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "HomeTrust",
  __ssrInlineRender: true,
  setup(__props) {
    const technologies = [
      { name: "NUXT", fullName: "Nuxt.js", logo: "/img/tech/nuxt.svg" },
      { name: "VUE", fullName: "Vue.js", logo: "/img/tech/Vue.js.webp" },
      { name: "REACT", fullName: "React", logo: "/img/tech/React.webp" },
      { name: "NODE", fullName: "Node.js", logo: "/img/tech/Node.js.webp" },
      { name: "TYPESCRIPT", fullName: "TypeScript", logo: "/img/tech/typescript.svg" },
      { name: "TAILWIND", fullName: "Tailwind CSS", logo: "/img/tech/tailwind.svg" },
      { name: "LARAVEL", fullName: "Laravel", logo: "/img/tech/Laravel.webp" },
      { name: "AWS", fullName: "Amazon Web Services", logo: "/img/tech/aws.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "tecnologias",
        class: "py-16 overflow-hidden relative bg-section-dark"
      }, _attrs))} data-v-b7512c92><div class="absolute top-1/2 left-0 w-[300px] h-[300px] -translate-y-1/2 pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--purple) 0%, transparent 70%)", "opacity": "0.1" })}" aria-hidden="true" data-v-b7512c92></div><div class="w-[88%] max-w-[1340px] mx-auto relative z-20" data-v-b7512c92><div class="flex flex-col lg:flex-row items-center gap-12" data-v-b7512c92><div class="w-full lg:w-[380px] shrink-0 mb-12 lg:mb-0" data-v-b7512c92><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b7512c92>Stack tecnol\xF3gico</p><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col leading-tight",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b7512c92><span class="text-3xl lg:text-4xl font-bold" style="${ssrRenderStyle({ "color": "var(--text-main)", "letter-spacing": "-0.025em", "font-family": "var(--font-heading)" })}" data-v-b7512c92>Tecnolog\xEDa de</span><span class="text-3xl lg:text-4xl font-bold" style="${ssrRenderStyle({ "color": "var(--accent)", "letter-spacing": "-0.025em", "font-family": "var(--font-heading)" })}" data-v-b7512c92>vanguardia.</span><p class="mt-4 text-sm leading-relaxed max-w-[280px]" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-b7512c92>Construimos con las herramientas que usan las mejores empresas del mundo.</p></div></div><div${ssrRenderAttrs(mergeProps({
        class: "tech-carousel relative w-full min-w-0 flex-1 overflow-hidden py-20",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b7512c92><div class="flex flex-nowrap w-max animate-slow-marquee hover:[animation-play-state:paused]" data-v-b7512c92><!--[-->`);
      ssrRenderList(2, (set) => {
        _push(`<div class="flex flex-nowrap"${ssrRenderAttr("aria-hidden", set === 2 ? true : void 0)} data-v-b7512c92><!--[-->`);
        ssrRenderList(technologies, (tech, index) => {
          _push(`<div class="tech-item relative shrink-0 flex flex-col items-center justify-center w-[160px] lg:w-[240px] transition-all duration-300" data-v-b7512c92><img${ssrRenderAttr("src", tech.logo)}${ssrRenderAttr("alt", set === 1 ? tech.fullName : "")} class="tech-logo h-12 lg:h-16 w-auto max-w-[100px] object-contain" width="100" height="64" decoding="async" loading="lazy" data-v-b7512c92><div class="tech-name absolute -bottom-9 left-1/2 -translate-x-1/2 text-[14px] font-bold text-content tracking-[0.12em] text-center whitespace-nowrap uppercase" aria-hidden="true" data-v-b7512c92>${ssrInterpolate(tech.name)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-y-0 right-0 w-32 to-transparent z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to left, var(--bg-dark), transparent)" })}" aria-hidden="true" data-v-b7512c92></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeTrust.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeTrust = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b7512c92"]]);

export { HomeTrust as default };
//# sourceMappingURL=HomeTrust-B965oYAv.mjs.map
