import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-20 pt-36" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6">${ssrInterpolate(__props.title)}</h1><p class="text-xl text-blue-100 max-w-3xl mx-auto">${ssrInterpolate(__props.description)}</p></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Hero-BSvxdtqE.mjs.map
