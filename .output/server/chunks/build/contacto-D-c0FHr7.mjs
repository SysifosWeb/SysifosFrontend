import { mergeProps, reactive, ref, resolveDirective, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { b as _export_sfc } from './server.mjs';
import { X, Send, Mail, Clock, MessageSquare } from 'lucide-vue-next';
import { u as useGtag } from './useGtag-BQPT5WeZ.mjs';
import { u as useSEO } from './useSEO-VfTVF1Sf.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/5" }, _attrs))}><div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[600px] bg-sky-400 opacity-[0.03] top-0 left-1/2 -translate-x-1/2"></div><div class="relative z-20 w-[90%] max-w-[1000px] mx-auto text-center flex flex-col items-center"><div${ssrRenderAttrs(mergeProps({
    class: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span><span class="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/70">Iniciemos una colaboraci\xF3n</span></div><h1${ssrRenderAttrs(mergeProps({
    class: "text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight text-white",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}> Hablemos de tu <br class="md:hidden"><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">pr\xF3ximo proyecto.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-xl mx-auto",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><p class="text-lg text-white/60 leading-relaxed font-medium"> Nos apasiona resolver desaf\xEDos t\xE9cnicos complejos. Cu\xE9ntanos qu\xE9 quieres construir y nuestro equipo evaluar\xE1 la arquitectura \xF3ptima para escalar tu idea. </p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacto/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "ContactFormSection",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-20 lg:py-32 overflow-hidden border-b border-white/5" }, _attrs))}><div class="absolute rounded-full pointer-events-none blur-[120px] w-[500px] h-[500px] bg-sky-400 opacity-5 -top-40 -left-40"></div><div class="absolute rounded-full pointer-events-none blur-[120px] w-[400px] h-[400px] bg-indigo-500 opacity-5 top-[30%] -right-20"></div>`);
      if (showSuccess.value) {
        _push(`<div class="fixed top-24 right-4 z-50 rounded-xl bg-[#0b1222] p-4 border border-accent/30 shadow-[0_8px_32px_rgba(56,189,248,0.2)]"><div class="flex items-center gap-3"><span class="text-accent animate-pulse font-bold">\u2713</span><p class="text-sm text-white/80 mb-0 font-medium">Mensaje enviado exitosamente. Te contactaremos pronto.</p><button class="ml-4 text-white/40 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showError.value) {
        _push(`<div class="fixed top-24 right-4 z-50 rounded-xl bg-[#0b1222] p-4 border border-red-500/30 shadow-[0_8px_32px_rgba(239,68,68,0.2)]"><div class="flex items-center gap-3"><span class="text-red-500 font-bold">!</span><p class="text-sm text-red-400 mb-0 font-medium">${ssrInterpolate(errorMessage.value)}</p><button class="ml-4 text-white/40 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative z-10 w-[90%] max-w-[1200px] mx-auto"><div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"><div${ssrRenderAttrs(mergeProps({
        class: "lg:col-span-3 relative",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><div class="relative p-8 lg:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"><div class="mb-10"><h2 class="text-3xl font-extrabold text-white mb-3 tracking-tight"> Cu\xE9ntanos tu idea. </h2><p class="text-white/60 text-sm">Nuestros ingenieros revisar\xE1n tus requerimientos y te contactar\xE1n a la brevedad.</p></div><form class="space-y-8 flex flex-col"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-2"><label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Nombre</label><input${ssrRenderAttr("value", form.name)} type="text" required placeholder="Tu nombre" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300"></div><div class="space-y-2"><label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Email *</label><input${ssrRenderAttr("value", form.email)} type="email" required placeholder="tu@email.com" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-2"><label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Empresa (Opcional)</label><input${ssrRenderAttr("value", form.company)} type="text" placeholder="Tu empresa" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300"></div><div class="space-y-2 hidden"><input${ssrRenderAttr("value", form.phone)} type="tel"></div><div class="space-y-2"><label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Asunto *</label><input${ssrRenderAttr("value", form.subject)} type="text" required placeholder="\xBFEn qu\xE9 te podemos ayudar?" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300"></div></div><div class="space-y-2"><label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Detalles del Proyecto *</label><textarea rows="4" required placeholder="\xBFQu\xE9 te gustar\xEDa construir?" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300 resize-y min-h-[120px]">${ssrInterpolate(form.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="${ssrRenderClass([isSubmitting.value ? "opacity-50 cursor-not-allowed" : "", "w-full py-4 mt-2 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center group"])}">${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Comenzar colaboraci\xF3n")} `);
      if (!isSubmitting.value) {
        _push(ssrRenderComponent(unref(Send), { class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form></div></div><div${ssrRenderAttrs(mergeProps({
        class: "lg:col-span-2 flex flex-col justify-center gap-8",
        "data-delay": "150"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><div class="mb-4"><h3 class="text-2xl font-bold text-white mb-2">Siempre a tu alcance.</h3><p class="text-sm text-white/60 leading-relaxed">Respondemos en menos de 24 hrs. Trabajamos de manera remota con empresas en todo Chile y Latinoam\xE9rica, creando plataformas escalables y confiables.</p></div><div class="space-y-8"><div class="flex items-center gap-4 group"><div class="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-colors flex-shrink-0">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-sky-400" }, null, _parent));
      _push(`</div><div><p class="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-1">Email Directo</p><p class="text-sm text-white font-medium">contacto@sysifosweb.cl</p></div></div><div class="flex items-center gap-4 group"><div class="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-indigo-400/50 group-hover:bg-indigo-400/10 transition-colors flex-shrink-0">`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-indigo-400" }, null, _parent));
      _push(`</div><div><p class="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-1">Soporte y Respuesta</p><p class="text-sm text-white font-medium">Lun - Vie, 09:00 a 18:00 hrs</p></div></div></div><div class="pt-6 border-t border-white/5"><a href="https://wa.me/56949109970" target="_blank" class="block w-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all group"><div class="flex justify-between items-center mb-2"><h4 class="text-white font-bold text-sm flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4 text-green-400" }, null, _parent));
      _push(` WhatsApp </h4><span class="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-wider">Abrir chat \u2192</span></div><p class="text-xs text-white/50">\xBFPrefieres un mensaje r\xE1pido? Escr\xEDbenos y conversemos directamente.</p></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacto/ContactFormSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contacto",
  __ssrInlineRender: true,
  setup(__props) {
    useGtag();
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Contacto | Cotiza tu Proyecto Web o Software \u2014 SysifosWeb Chile",
      description: "Cont\xE1ctanos para cotizar tu p\xE1gina web, tienda online, aplicaci\xF3n o software a medida. Respondemos en menos de 24 horas. Disponible por WhatsApp, email y formulario. Coquimbo, Chile.",
      keywords: "contacto desarrollo web chile, cotizar p\xE1gina web chile, presupuesto desarrollo web, cotizar software a medida, agencia web coquimbo, contratar desarrolladores chile",
      image: "/img/og-contacto.png"
    });
    setSchema({
      type: "FAQPage",
      data: {
        questions: [
          {
            "@type": "Question",
            name: "\xBFCu\xE1nto tiempo toma desarrollar un sitio web?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sitios web: 2-4 semanas. Aplicaciones complejas: 3-6 meses. El tiempo depende de la complejidad y funcionalidades requeridas."
            }
          },
          {
            "@type": "Question",
            name: "\xBFOfrecen soporte post-lanzamiento?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "S\xED, ofrecemos planes de soporte y mantenimiento continuo para asegurar que tu sitio web o aplicaci\xF3n funcione correctamente."
            }
          },
          {
            "@type": "Question",
            name: "\xBFTrabajan con clientes fuera de Chile?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "S\xED, trabajamos con clientes de todo el mundo de forma remota."
            }
          }
        ]
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactoHeroSection = __nuxt_component_0;
      const _component_ContactoContactFormSection = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContactoHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactoContactFormSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacto-D-c0FHr7.mjs.map
