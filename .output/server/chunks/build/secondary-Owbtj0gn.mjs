import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-CNSQWRsP.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { j as useRoute, b as _export_sfc } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = {
  __name: "AppHeaderSecundary",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "secondary-header-container bg-section-dark relative overflow-hidden flex items-center" }, _attrs))} data-v-f1294f69><div class="absolute inset-0 pointer-events-none z-0" data-v-f1294f69><div class="section-glow-purple glow-top-left" data-v-f1294f69></div><div class="section-glow-cyan glow-bottom-right" data-v-f1294f69></div><div class="absolute top-0 left-0 right-0 h-px" style="${ssrRenderStyle({ "background": "linear-gradient(to right, transparent, rgba(56,189,248,0.15), transparent)" })}" data-v-f1294f69></div></div><div class="w-full relative z-10 custom-container flex items-center pt-20" data-v-f1294f69><div class="flex flex-col items-center md:items-start text-center md:text-left w-full" data-v-f1294f69><div class="eyebrow-badge mb-6" data-v-f1294f69><span class="eyebrow-badge__dot" data-v-f1294f69></span><span class="eyebrow-badge__text" data-v-f1294f69>SysifosWeb</span></div><h1 class="section-title text-4xl md:text-5xl lg:text-6xl text-white" data-v-f1294f69>${ssrInterpolate(__props.title)}<span class="text-accent" data-v-f1294f69>.</span></h1></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeaderSecundary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f1294f69"]]);
const _sfc_main = {
  __name: "secondary",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = __nuxt_component_0;
      const _component_AppHeaderSecundary = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-10" }, null, _parent));
      _push(ssrRenderComponent(_component_AppHeaderSecundary, {
        title: unref(route).meta.title || ""
      }, null, _parent));
      _push(`</div><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/secondary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=secondary-Owbtj0gn.mjs.map
