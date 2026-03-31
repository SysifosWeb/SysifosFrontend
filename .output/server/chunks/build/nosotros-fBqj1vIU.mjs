import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$1 } from './Hero-BSvxdtqE.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useSEO } from './useSEO-CT_mGU6v.mjs';
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
import './server.mjs';
import 'vue-router';
import './v3-5QZ-FU-s.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const diego = "" + buildAssetsURL("Diego.BExUej--.png");
const karen = "" + buildAssetsURL("Karen.BK_KPaIo.png");
const osman = "" + buildAssetsURL("Osman.BZj2Jzqp.png");
const team = "" + buildAssetsURL("team.DoDC3Q1E.jpg");
const mision = "" + buildAssetsURL("mision.ByLiOYvt.png");
const vision = "" + buildAssetsURL("vision.B2z1ymn6.png");
const valores = "" + buildAssetsURL("valores.CyEwSgvW.png");
const _sfc_main = {
  __name: "nosotros",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Nosotros - Equipo de Desarrollo de Software en Chile",
      description: "Conoce al equipo de Sysifos Web. Especialistas en desarrollo de software, aplicaciones web y soluciones digitales con a\xF1os de experiencia en Chile. Diego, Karen y Osman - Full Stack Developers.",
      keywords: "equipo desarrollo software, equipo desarrollo web, empresa desarrollo software chile, empresa desarrollo web chile",
      image: "/img/og-nosotros.jpg"
    });
    setSchema({
      type: "WebPage",
      data: {
        name: "Nosotros - Sysifos Web",
        description: "Equipo de desarrollo de software especializado en soluciones digitales en Chile"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: "Conoce a Sysifos Web",
        description: "Somos un equipo apasionado por la tecnolog\xEDa, dedicado a transformar ideas en soluciones digitales innovadoras"
      }, null, _parent));
      _push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Nuestra Historia </h2><p class="text-lg text-gray-600 mb-6"> Fundada en 2024, SysifosWeb naci\xF3 con un objetivo claro: hacer que la tecnolog\xEDa de vanguardia est\xE9 al alcance de todos. </p><p class="text-lg text-gray-600 mb-6"> Nuestro nombre, inspirado en el mito de S\xEDsifo, refleja nuestra forma de trabajar: con perseverancia y pasi\xF3n, convirtiendo cada desaf\xEDo en una oportunidad para innovar y crear soluciones que realmente hagan la diferencia. </p></div><div class="relative"><div class="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center"><div class="text-center"><img${ssrRenderAttr("src", unref(team))} alt="SysifosWeb" class="w-full h-full object-cover rounded-2xl"></div></div></div></div></div></section><section class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Nuestros Principios </h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white rounded-xl shadow-lg p-8 text-center"><div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"><img${ssrRenderAttr("src", unref(mision))} alt="Misi\xF3n" class="w-16 h-16"></div><h3 class="text-xl font-semibold text-gray-900 mb-4">Misi\xF3n</h3><p class="text-gray-600"> Empoderar a las empresas con soluciones tecnol\xF3gicas innovadoras que impulsen su crecimiento y mejoren su competitividad en el mercado digital. </p></div><div class="bg-white rounded-xl shadow-lg p-8 text-center"><div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"><img${ssrRenderAttr("src", unref(vision))} alt="Visi\xF3n" class="w-16 h-16"></div><h3 class="text-xl font-semibold text-gray-900 mb-4">Visi\xF3n</h3><p class="text-gray-600"> Ser la empresa de desarrollo de software m\xE1s confiable de Latinoam\xE9rica, reconocida por nuestra excelencia t\xE9cnica y compromiso con la innovaci\xF3n. </p></div><div class="bg-white rounded-xl shadow-lg p-8 text-center"><div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"><img${ssrRenderAttr("src", unref(valores))} alt="Valores" class="w-16 h-16"></div><h3 class="text-xl font-semibold text-gray-900 mb-4">Valores</h3><p class="text-gray-600"> Innovaci\xF3n, calidad, transparencia y compromiso con nuestros clientes. Creemos en el poder de la tecnolog\xEDa para crear un futuro mejor. </p></div></div></div></section><section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Nuestro Equipo </h2><p class="text-xl text-gray-600"> Profesionales apasionados por la tecnolog\xEDa y comprometidos con la excelencia </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="text-center"><img${ssrRenderAttr("src", unref(diego))} alt="Diego Araya" class="w-32 h-32 rounded-full mx-auto mb-4"><h3 class="text-xl font-semibold text-gray-900 mb-2">Diego Araya</h3><p class="text-blue-600 font-medium mb-2">Full Stack Developer</p><p class="text-gray-600 text-sm"> Desarrollador full stack especializado en crear aplicaciones web responsivas. </p></div><div class="text-center"><img${ssrRenderAttr("src", unref(karen))} alt="Karen Godoy" class="w-32 h-32 rounded-full mx-auto mb-4"><h3 class="text-xl font-semibold text-gray-900 mb-2">Karen Godoy</h3><p class="text-green-600 font-medium mb-2">DBA &amp; Frontend Developer</p><p class="text-gray-600 text-sm"> Mi especialidad son las bases de datos y el desarrollo web frontend. </p></div><div class="text-center"><img${ssrRenderAttr("src", unref(osman))} alt="Osman Ahumada" class="w-32 h-32 rounded-full mx-auto mb-4"><h3 class="text-xl font-semibold text-gray-900 mb-2">Osman Ahumada</h3><p class="text-purple-600 font-medium mb-2">Web &amp; Mobile Developer</p><p class="text-gray-600 text-sm"> Desarrollador web, con conocimientos en backend,frontend y desarrollo mobile en flutter. </p></div></div></div></section><section class="py-20 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Nuestra Metodolog\xEDa </h2><p class="text-xl text-gray-600"> Aplicamos metodolog\xEDas \xE1giles para garantizar entregas de calidad en tiempo y forma </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div><div class="space-y-6"><div class="flex items-start space-x-4"><div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><span class="text-white font-bold text-sm">1</span></div><div><h3 class="text-lg font-semibold text-gray-900 mb-2">Scrum Framework</h3><p class="text-gray-600">Sprints de 2 semanas con entregas incrementales y feedback continuo.</p></div></div><div class="flex items-start space-x-4"><div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"><span class="text-white font-bold text-sm">2</span></div><div><h3 class="text-lg font-semibold text-gray-900 mb-2">Comunicaci\xF3n Transparente</h3><p class="text-gray-600">Reuniones diarias, demos y retrospectivas para mantener alineaci\xF3n total.</p></div></div><div class="flex items-start space-x-4"><div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0"><span class="text-white font-bold text-sm">3</span></div><div><h3 class="text-lg font-semibold text-gray-900 mb-2">Calidad Asegurada</h3><p class="text-gray-600">Testing automatizado, code reviews y mejores pr\xE1cticas de desarrollo.</p></div></div></div></div><div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">Stack Tecnol\xF3gico</h3><div class="space-y-4"><div><div class="flex justify-between items-center mb-2"><span class="text-sm font-medium text-gray-700">Frontend</span><span class="text-sm text-gray-500">React, Vue.js, Angular</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full" style="${ssrRenderStyle({ "width": "95%" })}"></div></div></div><div><div class="flex justify-between items-center mb-2"><span class="text-sm font-medium text-gray-700">Backend</span><span class="text-sm text-gray-500">Laravel, Node.js, Python</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-green-600 h-2 rounded-full" style="${ssrRenderStyle({ "width": "90%" })}"></div></div></div><div><div class="flex justify-between items-center mb-2"><span class="text-sm font-medium text-gray-700">Mobile</span><span class="text-sm text-gray-500">React Native, Flutter</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-purple-600 h-2 rounded-full" style="${ssrRenderStyle({ "width": "85%" })}"></div></div></div></div></div></div></div></section><section class="py-20 bg-gradient-to-r from-blue-900 to-cyan-600 text-white"><div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"><h2 class="text-3xl md:text-4xl font-bold mb-6"> \xBFQuieres Conocer M\xE1s? </h2><p class="text-xl mb-8 text-blue-100"> Conversemos sobre c\xF3mo podemos ayudarte a alcanzar tus objetivos tecnol\xF3gicos </p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contacto" class="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"> Contactar Equipo </a></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nosotros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nosotros-fBqj1vIU.mjs.map
