import { _ as __nuxt_component_0 } from './nuxt-link-BiKUttek.mjs';
import { _ as __nuxt_component_1 } from './CtaSection-CcAB119T.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import 'vue-router';
import 'lucide-vue-next';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const post = {
      title: "Arquitectura Invisible: C\xF3mo construir sistemas que resisten hiper-crecimiento",
      category: "Escalabilidad",
      date: "14 Mayo 2026",
      readingTime: "8 min de lectura",
      author: {
        name: "Sysifos Engineering Team",
        role: "Arquitectura & Core Systems",
        avatar: "SE"
      },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
    };
    const relatedPosts = [
      {
        id: 2,
        title: "El impacto del Performance en la Conversi\xF3n Ecommerce",
        excerpt: "Por qu\xE9 cada 100ms de latencia te cuesta miles de d\xF3lares en ventas perdidas.",
        category: "Performance",
        reading_time: "5 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Migrando a arquitecturas Serverless en 2026",
        excerpt: "Patrones, beneficios y los costos ocultos de migrar tu monolito.",
        category: "Desarrollo Web",
        reading_time: "10 min",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NosotrosCtaSection = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen pb-0" }, _attrs))}><section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden"><div class="absolute rounded-full pointer-events-none blur-[150px] w-[800px] h-[800px] bg-sky-500 opacity-[0.03] top-[-20%] left-1/2 -translate-x-1/2"></div><div class="max-w-[800px] w-[90%] mx-auto relative z-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Volver al Journal `);
          } else {
            return [
              createTextVNode(" \u2190 Volver al Journal ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4 mb-6"><span class="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">${ssrInterpolate(post.category)}</span><span class="text-xs text-white/40 font-medium">${ssrInterpolate(post.date)} \u2022 ${ssrInterpolate(post.readingTime)}</span></div><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-10">${ssrInterpolate(post.title)}</h1><div class="flex items-center gap-4 pt-8 border-t border-white/10"><div class="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px]"><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"><span class="text-sm font-bold text-white">${ssrInterpolate(post.author.avatar)}</span></div></div><div><p class="text-sm font-bold text-white">${ssrInterpolate(post.author.name)}</p><p class="text-xs text-white/50">${ssrInterpolate(post.author.role)}</p></div></div></div></section><section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24 relative z-20"><div class="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 opacity-80"></div></section><section class="max-w-[700px] w-[90%] mx-auto relative z-20"><div class="prose prose-invert prose-lg max-w-none text-white/70"><p class="text-xl leading-relaxed text-white/90 font-medium mb-8"> Cuando una plataforma alcanza la marca de los 100,000 usuarios concurrentes, las reglas del juego cambian por completo. Lo que funcionaba perfectamente en un MVP monol\xEDtico, de repente se convierte en un cuello de botella cr\xEDtico. </p><h2 class="text-2xl font-bold text-white mt-12 mb-6">La falacia de la escalabilidad vertical</h2><p class="mb-6 leading-relaxed"> El instinto inicial de muchos equipos t\xE9cnicos frente a problemas de rendimiento es simplemente &quot;comprar un servidor m\xE1s grande&quot;. Aumentar RAM y CPU (escalabilidad vertical) es r\xE1pido y no requiere refactorizaci\xF3n de c\xF3digo. Sin embargo, este enfoque tiene un l\xEDmite f\xEDsico y econ\xF3mico muy marcado. </p><p class="mb-8 leading-relaxed"> La verdadera escalabilidad no se trata de fuerza bruta, sino de <strong>distribuci\xF3n inteligente de la carga</strong>. </p><blockquote class="border-l-4 border-sky-400 bg-white/[0.02] p-8 rounded-r-2xl my-10 text-white/90 text-lg italic font-medium"> &quot;Una arquitectura escalable es aquella donde el costo de a\xF1adir un nuevo usuario tiende a cero a medida que el sistema crece.&quot; </blockquote><h3 class="text-xl font-bold text-white mt-10 mb-4">Estrategias de desacoplamiento</h3><p class="mb-6 leading-relaxed"> Para preparar una aplicaci\xF3n para hiper-crecimiento, debemos implementar patrones arquitect\xF3nicos que permitan a los componentes fallar y escalar de manera aislada: </p><ul class="space-y-4 mb-8"><li class="flex items-start gap-3"><span class="text-sky-400 mt-1">\u2726</span><span><strong>Microservicios Event-Driven:</strong> Pasar de llamadas s\xEDncronas (HTTP) a comunicaci\xF3n as\xEDncrona mediante colas de mensajes (Kafka, RabbitMQ).</span></li><li class="flex items-start gap-3"><span class="text-sky-400 mt-1">\u2726</span><span><strong>CQRS (Command Query Responsibility Segregation):</strong> Separar las bases de datos de lectura y escritura para optimizar cada operaci\xF3n de manera independiente.</span></li><li class="flex items-start gap-3"><span class="text-sky-400 mt-1">\u2726</span><span><strong>Caching Estrat\xE9gico:</strong> Implementar Redis no solo para sesiones, sino para respuestas completas de API y fragmentos de UI.</span></li></ul><div class="my-10 rounded-xl overflow-hidden border border-white/10 bg-[#0a0f18] shadow-2xl"><div class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5"><div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div><div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div><div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div><span class="text-[0.65rem] text-white/40 ml-2 font-mono">architecture.yml</span></div><div class="p-6 overflow-x-auto"><pre class="text-sm font-mono text-white/70 leading-loose"><code><span class="text-sky-400">services:</span>
  <span class="text-indigo-300">api_gateway:</span>
    <span class="text-white/40">image:</span> kong:latest
    <span class="text-white/40">ports:</span>
      - &quot;80:8000&quot;
  <span class="text-indigo-300">auth_service:</span>
    <span class="text-white/40">scale:</span> 3
    <span class="text-white/40">depends_on:</span>
      - redis_cluster
  <span class="text-indigo-300">worker_nodes:</span>
    <span class="text-white/40">scale:</span> auto
    <span class="text-white/40">metrics_target:</span> cpu_80_percent</code></pre></div></div><h2 class="text-2xl font-bold text-white mt-12 mb-6">Conclusi\xF3n</h2><p class="mb-6 leading-relaxed"> Construir sistemas resilientes es un arte que combina ingenier\xEDa de software pura con una comprensi\xF3n profunda de la infraestructura cloud. Si est\xE1s planeando escalar tu plataforma este a\xF1o, el momento de auditar tu arquitectura es ahora, no cuando los servidores empiecen a caer. </p></div><div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"><div class="flex items-center gap-2"><span class="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Tags:</span><span class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">Arquitectura</span><span class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">Cloud</span><span class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">Backend</span></div><div class="flex items-center gap-3"><span class="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Compartir:</span><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></button><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></button><button class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></button></div></div><div class="mt-12 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6"><div class="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px] flex-shrink-0"><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"><span class="text-lg font-bold text-white">${ssrInterpolate(post.author.avatar)}</span></div></div><div class="text-center md:text-left"><p class="text-[0.65rem] font-bold uppercase tracking-widest text-sky-400 mb-1">Escrito por</p><h4 class="text-lg font-bold text-white mb-2">${ssrInterpolate(post.author.name)}</h4><p class="text-sm text-white/60 leading-relaxed">Equipo de ingenieros y arquitectos cloud de SysifosWeb. Apasionados por el performance, sistemas distribuidos y la construcci\xF3n de productos digitales escalables.</p></div></div></section><section class="py-24 bg-section-dark relative z-10 border-t border-white/5 mt-16"><div class="max-w-[1200px] w-[90%] mx-auto"><h3 class="text-2xl font-bold text-white mb-10">Lecturas Recomendadas</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><!--[-->`);
      ssrRenderList(relatedPosts, (relPost) => {
        _push(`<article class="group relative flex flex-col lg:flex-row rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 overflow-hidden"><div class="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden bg-[#0a0f18]"><img${ssrRenderAttr("src", relPost.image)}${ssrRenderAttr("alt", relPost.title)} class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"></div><div class="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5"><div class="flex items-center gap-3 mb-3"><span class="text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">${ssrInterpolate(relPost.category)}</span></div><h4 class="text-lg font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors">${ssrInterpolate(relPost.title)}</h4><p class="text-sm text-white/50 line-clamp-2">${ssrInterpolate(relPost.excerpt)}</p></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_NosotrosCtaSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-B6-f3Nk-.mjs.map
