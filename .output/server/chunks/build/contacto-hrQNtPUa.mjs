import { mergeProps, resolveDirective, reactive, ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { X, Send, Mail, Clock, MessageSquare } from 'lucide-vue-next';
import { u as useGtag } from './useGtag-B_tBU-vW.mjs';
import { u as useSEO } from './useSEO-DmqgVml9.mjs';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-line" }, _attrs))}><div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[600px] bg-accent opacity-[0.03] top-0 left-1/2 -translate-x-1/2"></div><div class="relative z-20 w-[90%] max-w-[1000px] mx-auto text-center flex flex-col items-center"><div${ssrRenderAttrs(mergeProps({
    class: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-panel mb-8 backdrop-blur-sm",
    "data-delay": "0"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span><span class="text-small font-bold tracking-[0.2em] uppercase text-subdued">Iniciemos una colaboraci\xF3n</span></div><h1${ssrRenderAttrs(mergeProps({
    class: "display-title font-extrabold mb-8 text-content",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}> Hablemos de tu <br class="md:hidden"><span class="display-accent">pr\xF3ximo proyecto.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-xl mx-auto",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><p class="text-lead text-subdued leading-relaxed font-medium"> Nos apasiona resolver desaf\xEDos t\xE9cnicos complejos. Cu\xE9ntanos qu\xE9 quieres construir y nuestro equipo evaluar\xE1 la arquitectura \xF3ptima para escalar tu idea. </p></div></div></section>`);
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
    useGtag();
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      consent: false
    });
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-section-dark py-20 lg:py-32 overflow-hidden border-b border-line" }, _attrs))} data-v-44cf5768><div class="absolute rounded-full pointer-events-none blur-[120px] w-[500px] h-[500px] bg-accent opacity-5 -top-40 -left-40" data-v-44cf5768></div><div class="absolute rounded-full pointer-events-none blur-[120px] w-[400px] h-[400px] bg-accent opacity-5 top-[30%] -right-20" data-v-44cf5768></div>`);
      if (showSuccess.value) {
        _push(`<div class="fixed top-24 right-4 z-50 rounded-xl bg-panel p-4 border border-accent/30 shadow-[0_8px_32px_rgba(var(--decoration-rgb), 0.2)]" data-v-44cf5768><div class="flex items-center gap-3" data-v-44cf5768><span class="text-accent animate-pulse font-bold" data-v-44cf5768>\u2713</span><p class="text-body text-content mb-0 font-medium" data-v-44cf5768>Mensaje enviado exitosamente. Te contactaremos pronto.</p><button class="ml-4 text-subdued hover:text-content transition-colors" data-v-44cf5768>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showError.value) {
        _push(`<div class="fixed top-24 right-4 z-50 rounded-xl bg-panel p-4 border border-red-500/30 shadow-[0_8px_32px_rgba(239,68,68,0.2)]" data-v-44cf5768><div class="flex items-center gap-3" data-v-44cf5768><span class="text-red-500 font-bold" data-v-44cf5768>!</span><p class="text-body text-red-400 mb-0 font-medium" data-v-44cf5768>${ssrInterpolate(errorMessage.value)}</p><button class="ml-4 text-subdued hover:text-content transition-colors" data-v-44cf5768>`);
        _push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative z-10 w-[90%] max-w-[1200px] mx-auto" data-v-44cf5768><div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16" data-v-44cf5768><div${ssrRenderAttrs(mergeProps({
        class: "lg:col-span-3 relative",
        "data-delay": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-44cf5768><div class="relative p-8 lg:p-12 rounded-[2rem] border border-line bg-panel shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl" data-v-44cf5768><div class="mb-10" data-v-44cf5768><h2 class="text-h2 font-extrabold text-content mb-3 tracking-tight" data-v-44cf5768> Cu\xE9ntanos tu idea. </h2><p class="text-subdued text-body" data-v-44cf5768>Nuestros ingenieros revisar\xE1n tus requerimientos y te contactar\xE1n a la brevedad.</p></div><form class="space-y-8 flex flex-col" data-v-44cf5768><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-44cf5768><div class="space-y-2" data-v-44cf5768><label class="text-bodyall font-semibold uppercase tracking-wider text-subdued" data-v-44cf5768>Nombre</label><input${ssrRenderAttr("value", form.name)} type="text" required placeholder="Tu nombre" class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300" data-v-44cf5768></div><div class="space-y-2" data-v-44cf5768><label class="text-bodyall font-semibold uppercase tracking-wider text-subdued" data-v-44cf5768>Email *</label><input${ssrRenderAttr("value", form.email)} type="email" required placeholder="tu@email.com" class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300" data-v-44cf5768></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-44cf5768><div class="space-y-2" data-v-44cf5768><label class="text-bodyall font-semibold uppercase tracking-wider text-subdued" data-v-44cf5768>Empresa (Opcional)</label><input${ssrRenderAttr("value", form.company)} type="text" placeholder="Tu empresa" class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300" data-v-44cf5768></div><div class="space-y-2 hidden" data-v-44cf5768><input${ssrRenderAttr("value", form.phone)} type="tel" data-v-44cf5768></div><div class="space-y-2" data-v-44cf5768><label class="text-bodyall font-semibold uppercase tracking-wider text-subdued" data-v-44cf5768>Asunto *</label><input${ssrRenderAttr("value", form.subject)} type="text" required placeholder="\xBFEn qu\xE9 te podemos ayudar?" class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300" data-v-44cf5768></div></div><div class="space-y-2" data-v-44cf5768><label class="text-bodyall font-semibold uppercase tracking-wider text-subdued" data-v-44cf5768>Detalles del Proyecto *</label><textarea rows="4" required placeholder="\xBFQu\xE9 te gustar\xEDa construir?" class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300 resize-y min-h-[120px]" data-v-44cf5768>${ssrInterpolate(form.message)}</textarea></div><div class="space-y-2" data-v-44cf5768><label class="flex items-start gap-3 cursor-pointer select-none" data-v-44cf5768><input${ssrIncludeBooleanAttr(Array.isArray(form.consent) ? ssrLooseContain(form.consent, null) : form.consent) ? " checked" : ""} type="checkbox" class="mt-1 w-4 h-4 rounded border-line bg-quiet accent-accent" data-v-44cf5768><span class="text-body text-subdued leading-relaxed" data-v-44cf5768> Acepto que mis datos personales sean tratados de acuerdo a la `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacidad",
        class: "text-accent underline hover:text-accent transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pol\xEDtica de Privacidad`);
          } else {
            return [
              createTextVNode("Pol\xEDtica de Privacidad")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` y autorizo a Sysifos a contactarme sobre mi consulta. Puedo ejercer mis derechos de acceso, rectificaci\xF3n, cancelaci\xF3n y oposici\xF3n cuando lo desee. </span></label></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="${ssrRenderClass([isSubmitting.value ? "opacity-50 cursor-not-allowed" : "", "w-full py-4 mt-2 rounded-xl bg-accent text-action font-bold text-body hover:bg-quiet hover:text-content transition-colors flex items-center justify-center group"])}" data-v-44cf5768>${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Comenzar colaboraci\xF3n")} `);
      if (!isSubmitting.value) {
        _push(ssrRenderComponent(unref(Send), { class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form></div></div><div${ssrRenderAttrs(mergeProps({
        class: "lg:col-span-2 flex flex-col justify-center gap-8",
        "data-delay": "150"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-44cf5768><div class="mb-4" data-v-44cf5768><h3 class="text-h3 font-bold text-content mb-2" data-v-44cf5768>Siempre a tu alcance.</h3><p class="text-body text-subdued leading-relaxed" data-v-44cf5768>Respondemos en menos de 24 hrs. Trabajamos de manera remota con empresas en todo Chile y Latinoam\xE9rica, creando plataformas escalables y confiables.</p></div><div class="space-y-8" data-v-44cf5768><div class="flex items-center gap-4 group" data-v-44cf5768><div class="w-12 h-12 rounded-full border border-line bg-panel flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors flex-shrink-0" data-v-44cf5768>`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-5 h-5 text-accent" }, null, _parent));
      _push(`</div><div data-v-44cf5768><p class="text-bodyall font-bold uppercase tracking-wider text-subdued mb-1" data-v-44cf5768>Email Directo</p><p class="text-body text-content font-medium" data-v-44cf5768>contacto@sysifosweb.cl</p></div></div><div class="flex items-center gap-4 group" data-v-44cf5768><div class="w-12 h-12 rounded-full border border-line bg-panel flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors flex-shrink-0" data-v-44cf5768>`);
      _push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5 text-accent" }, null, _parent));
      _push(`</div><div data-v-44cf5768><p class="text-bodyall font-bold uppercase tracking-wider text-subdued mb-1" data-v-44cf5768>Soporte y Respuesta</p><p class="text-body text-content font-medium" data-v-44cf5768>Lun - Vie, 09:00 a 18:00 hrs</p></div></div></div><div class="pt-6 border-t border-line" data-v-44cf5768><a href="https://wa.me/56985021549" target="_blank" rel="noopener noreferrer" class="whatsapp-card block w-full p-6 rounded-2xl border border-line bg-panel group" data-v-44cf5768><div class="flex justify-between items-center mb-2" data-v-44cf5768><h4 class="text-content font-bold text-body flex items-center gap-2" data-v-44cf5768>`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "whatsapp-card__icon w-5 h-5" }, null, _parent));
      _push(` WhatsApp </h4><span class="whatsapp-card__action text-small font-bold" data-v-44cf5768>Abrir chat <span class="whatsapp-card__arrow" aria-hidden="true" data-v-44cf5768>\u2192</span></span></div><p class="text-small text-subdued" data-v-44cf5768>\xBFPrefieres un mensaje r\xE1pido? Escr\xEDbenos y conversemos directamente.</p></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacto/ContactFormSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-44cf5768"]]);
const _sfc_main = {
  __name: "contacto",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Contacto | Cotiza tu Proyecto Web o Software \u2014 SysifosWeb Chile",
      description: "Cont\xE1ctanos para cotizar tu p\xE1gina web, tienda online, aplicaci\xF3n o software a medida. Respondemos en menos de 24 horas. Disponible por WhatsApp, email y formulario. Coquimbo, Chile.",
      keywords: "contacto desarrollo web chile, cotizar p\xE1gina web chile, presupuesto desarrollo web, cotizar software a medida, agencia web coquimbo, contratar desarrolladores chile",
      image: "/img/og-contacto.webp"
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
      const _component_ContactoContactFormSection = __nuxt_component_1;
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
//# sourceMappingURL=contacto-hrQNtPUa.mjs.map
