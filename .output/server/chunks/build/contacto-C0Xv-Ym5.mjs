import { H as Head, T as Title, M as Meta } from './components-Bw4HtV_h.mjs';
import { _ as _sfc_main$1 } from './Hero-BSvxdtqE.mjs';
import { reactive, ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useSEO } from './useSEO-E9H-rDFk.mjs';
import './v3-BdFpCGQX.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'consola';
import 'ipx';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "contacto",
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
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Contacto - Cotiza tu Proyecto de Desarrollo Web",
      description: "Cont\xE1ctanos para cotizar tu proyecto de desarrollo web, tienda online, aplicaci\xF3n m\xF3vil o software a medida. Respuesta en menos de 24 horas. WhatsApp, email y formulario. Coquimbo, Chile.",
      keywords: "contacto desarrollo web, cotizar desarrollo web, cotizaci\xF3n p\xE1gina web, presupuesto desarrollo web, contacto sysifosweb, solicitar cotizaci\xF3n, pedir presupuesto, contactar desarrolladores, contratar desarrollo web, contratar programadores, formulario contacto, whatsapp desarrollo web, email desarrollo web, consulta desarrollo web, asesor\xEDa desarrollo web, contacto coquimbo, contacto chile",
      image: "/img/og-contacto.jpg"
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
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Hero = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contacto - Cotiza tu Proyecto | SysifosWeb`);
                } else {
                  return [
                    createTextVNode("Contacto - Cotiza tu Proyecto | SysifosWeb")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Cont\xE1ctanos para cotizar tu proyecto de desarrollo web o software. Estamos listos para ayudarte."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Contacto - Cotiza tu Proyecto | SysifosWeb")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Cont\xE1ctanos para cotizar tu proyecto de desarrollo web o software. Estamos listos para ayudarte."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (showSuccess.value) {
        _push(`<div class="bg-green-50 border-l-4 border-green-400 p-4 fixed top-20 left-4 right-4 z-50 shadow-lg rounded-r-lg"><div class="flex items-center justify-between"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><p class="text-sm text-green-700 font-medium"> \xA1Mensaje enviado exitosamente! Te contactaremos pronto. </p></div></div><button class="text-green-400 hover:text-green-600"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showError.value) {
        _push(`<div class="bg-red-50 border-l-4 border-red-400 p-4 fixed top-20 left-4 right-4 z-50 shadow-lg rounded-r-lg"><div class="flex items-center justify-between"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><p class="text-sm text-red-700 font-medium">${ssrInterpolate(errorMessage.value)}</p></div></div><button class="text-red-400 hover:text-red-600"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Hero, {
        title: "Cont\xE1ctanos",
        description: "Estamos listos para ayudarte a hacer realidad tu proyecto"
      }, null, _parent));
      _push(`<section class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-4xl mx-auto mb-16"><div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12"><div class="text-center mb-8"><h2 class="text-3xl font-bold text-gray-900 mb-4">Cu\xE9ntanos sobre tu proyecto</h2><p class="text-lg text-gray-600">Completa el formulario y te contactaremos en menos de 24 horas</p></div><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2"> Nombre completo * </label><input${ssrRenderAttr("value", form.name)} type="text" id="name" placeholder="Tu nombre" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required></div><div><label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email * </label><input${ssrRenderAttr("value", form.email)} type="email" id="email" placeholder="tu@email.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="phone" class="block text-sm font-medium text-gray-700 mb-2"> Tel\xE9fono </label><input${ssrRenderAttr("value", form.phone)} type="tel" id="phone" placeholder="+56 9 4910 9970" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"></div><div><label for="company" class="block text-sm font-medium text-gray-700 mb-2"> Empresa </label><input${ssrRenderAttr("value", form.company)} type="text" id="company" placeholder="Nombre de tu empresa" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"></div></div><div><label for="subject" class="block text-sm font-medium text-gray-700 mb-2"> Asunto * </label><input${ssrRenderAttr("value", form.subject)} type="text" id="subject" placeholder="\xBFEn qu\xE9 podemos ayudarte?" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required></div><div><label for="message" class="block text-sm font-medium text-gray-700 mb-2"> Describe tu proyecto * </label><textarea id="message" rows="6" placeholder="Cu\xE9ntanos sobre tu proyecto, objetivos, funcionalidades que necesitas, etc." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" required>${ssrInterpolate(form.message)}</textarea></div><div class="flex justify-center"><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">`);
      if (!isSubmitting.value) {
        _push(`<span>Enviar Mensaje</span>`);
      } else {
        _push(`<span class="flex items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando... </span>`);
      }
      _push(`</button></div></form></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="bg-white rounded-2xl shadow-xl p-8"><h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Cont\xE1ctanos Ahora</h3><div class="space-y-6 mb-8"><div class="flex items-center"><div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"><svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="font-semibold text-gray-900">Email</p><p class="text-gray-600">contacto@sysifosweb.cl</p></div></div><div class="flex items-center"><div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4"><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><p class="font-semibold text-gray-900">Tel\xE9fono</p><p class="text-gray-600">+56 9 4910 9970</p></div></div><div class="flex items-center"><div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4"><svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><p class="font-semibold text-gray-900">Ubicaci\xF3n</p><p class="text-gray-600">Coquimbo, Chile</p></div></div><div class="flex items-center"><div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4"><svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><p class="font-semibold text-gray-900">Horarios</p><p class="text-gray-600">Lun - Vie: 9:00 - 18:00</p></div></div></div><div class="border-t border-gray-200 pt-6"><h4 class="text-lg font-semibold text-gray-900 mb-4">Contacto Directo</h4><div class="space-y-3"><a href="https://wa.me/56949109970" target="_blank" class="flex items-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"><svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg><span class="font-medium">Chatear por WhatsApp</span></a></div></div></div><div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8"><h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Informaci\xF3n \xDAtil</h3><div class="space-y-6 mb-8"><div><h4 class="font-semibold text-gray-900 mb-2 flex items-center"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3"><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> Tiempo de Desarrollo </h4><p class="text-gray-600 text-sm ml-11">Sitios web: 2-4 semanas. Aplicaciones complejas: 3-6 meses.</p></div><div><h4 class="font-semibold text-gray-900 mb-2 flex items-center"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3"><svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> Soporte Post-Lanzamiento </h4><p class="text-gray-600 text-sm ml-11">S\xED, ofrecemos planes de soporte y mantenimiento continuo.</p></div><div><h4 class="font-semibold text-gray-900 mb-2 flex items-center"><div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3"><svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path></svg></div> Alcance Global </h4><p class="text-gray-600 text-sm ml-11">Trabajamos con clientes de todo el mundo.</p></div></div><div class="border-t border-blue-200 pt-6"><h4 class="text-lg font-semibold text-gray-900 mb-4">Tecnolog\xEDas que Utilizamos</h4><div class="grid grid-cols-3 gap-3"><div class="bg-white rounded-lg p-3 text-center shadow-sm"><div class="w-8 h-8 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center"><span class="text-white text-xs font-bold">R</span></div><span class="text-xs font-medium text-gray-700">React</span></div><div class="bg-white rounded-lg p-3 text-center shadow-sm"><div class="w-8 h-8 bg-green-500 rounded mx-auto mb-2 flex items-center justify-center"><span class="text-white text-xs font-bold">V</span></div><span class="text-xs font-medium text-gray-700">Vue.js</span></div><div class="bg-white rounded-lg p-3 text-center shadow-sm"><div class="w-8 h-8 bg-red-500 rounded mx-auto mb-2 flex items-center justify-center"><span class="text-white text-xs font-bold">L</span></div><span class="text-xs font-medium text-gray-700">Laravel</span></div><div class="bg-white rounded-lg p-3 text-center shadow-sm"><div class="w-8 h-8 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center"><span class="text-white text-xs font-bold">N</span></div><span class="text-xs font-medium text-gray-700">Node.js</span></div><div class="bg-white rounded-lg p-3 text-center shadow-sm"><div class="w-8 h-8 bg-blue-400 rounded mx-auto mb-2 flex items-center justify-center"><span class="text-white text-xs font-bold">RN</span></div><span class="text-xs font-medium text-gray-700">React Native</span></div><div class="bg-white rounded-lg p-3 text-center shadow-sm"><div class="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center"><span class="text-white text-xs font-bold">F</span></div><span class="text-xs font-medium text-gray-700">Flutter</span></div></div></div></div></div></div></section></div>`);
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
//# sourceMappingURL=contacto-C0Xv-Ym5.mjs.map
