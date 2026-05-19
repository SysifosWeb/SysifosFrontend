import { resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent } from 'vue/server-renderer';
import { Sparkles, ArrowRight } from 'lucide-vue-next';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "CtaSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-20 lg:py-32 overflow-hidden bg-section-dark" }, _attrs))} data-v-c93deb20><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" data-v-c93deb20></div><div class="section-container relative z-10 flex flex-col items-center text-center" data-v-c93deb20><div${ssrRenderAttrs(mergeProps({
        class: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c93deb20>`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 text-accent" }, null, _parent));
      _push(`<span class="text-xs font-bold tracking-widest text-white/80 uppercase" data-v-c93deb20>\xDAnete a la nueva era digital</span></div><h2${ssrRenderAttrs(mergeProps({
        class: "text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1] text-white mb-8",
        "data-delay": "100"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c93deb20> Tu empresa est\xE1 lista para escalar.<br data-v-c93deb20><span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-blue-500" data-v-c93deb20>Tu tecnolog\xEDa tambi\xE9n deber\xEDa estarlo.</span></h2><p${ssrRenderAttrs(mergeProps({
        class: "text-lg md:text-2xl text-white/50 font-medium leading-relaxed max-w-3xl mb-12",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c93deb20> Deja de perder ingresos por culpa de sistemas lentos o est\xE1ticos. As\xF3ciate con nosotros y transformemos tu operaci\xF3n en una m\xE1quina de crecimiento, ventas y eficiencia automatizada. </p><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col sm:flex-row items-center gap-6",
        "data-delay": "300"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c93deb20><a href="https://wa.me/56949109970?text=Hola,%20busco%20un%20partner%20tecnol\xF3gico%20para%20escalar%20mi%20empresa." target="_blank" class="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-accent hover:text-white transition-all duration-500 hover:scale-105" data-v-c93deb20> Empezar la Transformaci\xF3n `);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5 group-hover:translate-x-1 transition-transform" }, null, _parent));
      _push(`</a></div><div${ssrRenderAttrs(mergeProps({
        class: "mt-8 flex items-center gap-4 text-sm font-medium text-white/40",
        "data-delay": "400"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c93deb20><div class="flex items-center gap-2" data-v-c93deb20><span class="w-1.5 h-1.5 rounded-full bg-green-500" data-v-c93deb20></span> Disponibilidad inmediata </div><span data-v-c93deb20>\u2022</span><span data-v-c93deb20>Partnership Estrat\xE9gico</span><span data-v-c93deb20>\u2022</span><span data-v-c93deb20>Cero plantillas</span></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nosotros/CtaSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c93deb20"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=CtaSection-CcAB119T.mjs.map
