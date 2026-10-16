import { _ as _sfc_main$1 } from './NuxtImg-CcZJOIep.mjs';
import { ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "HomeTrust",
  __ssrInlineRender: true,
  setup(__props) {
    const technologies = [
      { name: "NUXT", fullName: "Nuxt.js", logo: "/img/tech/nuxt.svg" },
      { name: "VUE", fullName: "Vue.js", logo: "/img/tech/Vue.js.png" },
      { name: "REACT", fullName: "React", logo: "/img/tech/React.png" },
      { name: "NODE", fullName: "Node.js", logo: "/img/tech/Node.js.png" },
      { name: "TYPESCRIPT", fullName: "TypeScript", logo: "/img/tech/typescript.svg" },
      { name: "TAILWIND", fullName: "Tailwind CSS", logo: "/img/tech/tailwind.svg" },
      { name: "LARAVEL", fullName: "Laravel", logo: "/img/tech/Laravel.png" },
      { name: "AWS", fullName: "Amazon Web Services", logo: "/img/tech/aws.svg" }
    ];
    const carouselContainer = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 overflow-hidden relative bg-section-dark" }, _attrs))} data-v-9b44a5b6><div class="absolute top-1/2 left-0 w-[300px] h-[300px] -translate-y-1/2 pointer-events-none" style="${ssrRenderStyle({ "background": "radial-gradient(circle, var(--purple) 0%, transparent 70%)", "opacity": "0.1" })}" aria-hidden="true" data-v-9b44a5b6></div><div class="w-[88%] max-w-[1340px] mx-auto relative z-20" data-v-9b44a5b6><div class="flex flex-col lg:flex-row items-center gap-12" data-v-9b44a5b6><div class="w-full lg:w-[380px] shrink-0 mb-12 lg:mb-0" data-v-9b44a5b6><p${ssrRenderAttrs(mergeProps({
        class: "section-eyebrow section-eyebrow--purple mb-4",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-9b44a5b6>Stack tecnol\xF3gico</p><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col leading-tight",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-9b44a5b6><span class="text-3xl lg:text-4xl font-bold" style="${ssrRenderStyle({ "color": "var(--text-main)", "letter-spacing": "-0.025em", "font-family": "'Inter', sans-serif" })}" data-v-9b44a5b6>Tecnolog\xEDa de</span><span class="text-3xl lg:text-4xl font-bold" style="${ssrRenderStyle({ "color": "var(--accent)", "letter-spacing": "-0.025em", "font-family": "'Inter', sans-serif" })}" data-v-9b44a5b6>vanguardia.</span><p class="mt-4 text-sm leading-relaxed max-w-[280px]" style="${ssrRenderStyle({ "color": "var(--text-secondary)" })}" data-v-9b44a5b6>Construimos con las herramientas que usan las mejores empresas del mundo.</p></div></div><div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselContainer",
        ref: carouselContainer,
        class: "relative flex-grow overflow-hidden py-32",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-9b44a5b6><div class="flex flex-nowrap w-max animate-slow-marquee hover:[animation-play-state:paused]" data-v-9b44a5b6><!--[-->`);
      ssrRenderList(2, (set) => {
        _push(`<div class="flex flex-nowrap" data-v-9b44a5b6><!--[-->`);
        ssrRenderList(technologies, (tech, index) => {
          _push(`<div class="tech-item relative shrink-0 flex flex-col items-center justify-center w-[160px] lg:w-[240px] transition-all duration-300" data-v-9b44a5b6>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: tech.logo,
            alt: "",
            "aria-hidden": "true",
            class: "tech-logo h-12 lg:h-16 w-auto object-contain transition-all duration-300",
            format: "webp",
            loading: "lazy"
          }, null, _parent));
          _push(`<div class="tech-name absolute -bottom-12 left-1/2 -translate-x-1/2 text-[14px] font-bold text-accent opacity-0 transition-opacity tracking-[0.4em] font-mono text-center whitespace-nowrap uppercase" aria-hidden="true" data-v-9b44a5b6>${ssrInterpolate(tech.name)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-y-0 right-0 w-32 to-transparent z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to left, var(--bg-dark), transparent)" })}" aria-hidden="true" data-v-9b44a5b6></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeTrust.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeTrust = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b44a5b6"]]);

export { HomeTrust as default };
//# sourceMappingURL=HomeTrust-8iFw7UAa.mjs.map
