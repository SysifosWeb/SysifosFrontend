import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-CNSQWRsP.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { j as useRoute } from './server.mjs';
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

const _sfc_main = {
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans bg-section-dark" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavbar, { class: "absolute top-0 left-0 w-full z-50" }, null, _parent));
      _push(`<main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=hero-Dq7fvLzf.mjs.map
