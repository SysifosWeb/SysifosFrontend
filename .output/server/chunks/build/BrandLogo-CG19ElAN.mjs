import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { a as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = publicAssetsURL("/img/brand/logo.svg");
const _imports_1 = publicAssetsURL("/img/brand/logo-dark.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "brand-logo" }, _attrs))}><img class="brand-logo__light"${ssrRenderAttr("src", _imports_0)} alt="SysifosWeb" width="403" height="80"><img class="brand-logo__dark"${ssrRenderAttr("src", _imports_1)} alt="SysifosWeb" width="403" height="80"></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BrandLogo-CG19ElAN.mjs.map
