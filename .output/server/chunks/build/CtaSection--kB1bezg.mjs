import { resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight } from 'lucide-vue-next';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "CtaSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "conversemos",
        class: "nosotros-cta relative py-20 lg:py-32 overflow-hidden bg-section-dark impulso-closing"
      }, _attrs))} data-v-064ee42a><div class="section-container relative z-10 flex flex-col items-center text-center" data-v-064ee42a><h2${ssrRenderAttrs(mergeProps({
        class: "section-title cta-title text-content mb-8",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-064ee42a><span class="cta-title__intro" data-v-064ee42a>Tu empresa est\xE1 lista para escalar.</span><span class="cta-title__accent" data-v-064ee42a>Tu tecnolog\xEDa tambi\xE9n deber\xEDa estarlo.</span></h2><p${ssrRenderAttrs(mergeProps({
        class: "text-lead text-subdued max-w-3xl mb-12",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-064ee42a> Deja de perder ingresos por culpa de sistemas lentos o est\xE1ticos. As\xF3ciate con nosotros y transformemos tu operaci\xF3n en una m\xE1quina de crecimiento, ventas y eficiencia automatizada. </p><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col sm:flex-row items-center gap-6",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-064ee42a><a href="https://wa.me/56985021549?text=Hola,%20busco%20un%20partner%20tecnol\xF3gico%20para%20escalar%20mi%20empresa." target="_blank" class="btn btn-primary px-8 py-4 text-body" data-v-064ee42a> Empezar la Transformaci\xF3n `);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5" }, null, _parent));
      _push(`</a></div><div${ssrRenderAttrs(mergeProps({
        class: "mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-small font-medium text-subdued",
        "data-delay": "400"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-064ee42a><div class="flex items-center gap-2" data-v-064ee42a><span class="w-1.5 h-1.5 rounded-full bg-green-500" data-v-064ee42a></span> Disponibilidad inmediata </div><span class="hidden sm:inline" aria-hidden="true" data-v-064ee42a>\u2022</span><span data-v-064ee42a>Partnership Estrat\xE9gico</span><span class="hidden sm:inline" aria-hidden="true" data-v-064ee42a>\u2022</span><span data-v-064ee42a>Cero plantillas</span></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nosotros/CtaSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-064ee42a"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CtaSection--kB1bezg.mjs.map
