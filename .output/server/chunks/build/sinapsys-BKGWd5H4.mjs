import { _ as __nuxt_component_1 } from './BrandLogo-Bf-VIK_0.mjs';
import { ref, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { f as publicAssetsURL } from '../nitro/nitro.mjs';
import { MessageCircle, ArrowUpRight, Globe, BriefcaseBusiness, Instagram, Linkedin, ArrowRight, MapPin } from 'lucide-vue-next';
import { u as useSEO } from './useSEO-ysrfgIrY.mjs';
import 'vue-router';
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

const _sfc_main$1 = {
  __name: "BrandIntro",
  __ssrInlineRender: true,
  emits: ["complete"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BrandLogo = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "brand-intro",
        role: "status",
        "aria-label": "Bienvenido a SysifosWeb"
      }, _attrs))} data-v-fe5f4fce><div class="intro-halo" aria-hidden="true" data-v-fe5f4fce></div><div class="intro-composition" data-v-fe5f4fce><svg class="intro-symbol" viewBox="0 0 96 96" aria-hidden="true" data-v-fe5f4fce><g transform="translate(-9.613 -4.097) scale(1.22581)" data-v-fe5f4fce><path class="intro-ramp" d="M16 72L62 26L78 42L48 72Z" fill="#1D5FA6" data-v-fe5f4fce></path><circle class="intro-sphere" cx="41" cy="23" r="10" fill="#1D5FA6" data-v-fe5f4fce></circle></g></svg><div class="intro-lockup" data-v-fe5f4fce>`);
      _push(ssrRenderComponent(_component_BrandLogo, null, null, _parent));
      _push(`</div><p class="intro-tagline" data-v-fe5f4fce>Ideas que toman impulso.</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandIntro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe5f4fce"]]);
const _imports_0 = publicAssetsURL("/img/brand/mark.svg");
const _sfc_main = {
  __name: "sinapsys",
  __ssrInlineRender: true,
  setup(__props) {
    const introActive = ref(true);
    const links = [
      { title: "Nuestro sitio web", desc: "Conoce c\xF3mo podemos ayudarte.", url: "https://sysifosweb.cl/", icon: Globe, label: "Explorar" },
      { title: "Portafolio", desc: "Descubre los proyectos que hemos creado.", url: "https://sysifosweb.cl/portfolio", icon: BriefcaseBusiness, label: "Ver proyectos" },
      { title: "Instagram", desc: "Ideas, novedades y nuestro d\xEDa a d\xEDa.", url: "https://www.instagram.com/sysifosweb_/", icon: Instagram, label: "S\xEDguenos" },
      { title: "LinkedIn", desc: "Conecta con nuestro equipo.", url: "https://www.linkedin.com/company/sysifos-web", icon: Linkedin, label: "Conectemos" }
    ];
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Sinapsys \xB7 Conecta con SysifosWeb",
      description: "Conoce nuestros proyectos, explora nuestras redes y conversemos sobre tu pr\xF3xima p\xE1gina web o software a medida. SysifosWeb, Coquimbo, Chile.",
      keywords: "enlaces sysifosweb, contacto sysifos, redes sociales sysifosweb",
      image: "/img/og-sinapsys.jpg"
    });
    setSchema({ type: "WebPage", data: { name: "Sinapsys \u2014 Enlaces de SysifosWeb", description: "Sitio web, proyectos, redes sociales y contacto de SysifosWeb." } });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BrandIntro = __nuxt_component_0;
      const _component_BrandLogo = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["sinapsys impulso-hybrid", { "sinapsys--intro": introActive.value }]
      }, _attrs))} data-v-ab5a8b56>`);
      if (introActive.value) {
        _push(ssrRenderComponent(_component_BrandIntro, {
          onComplete: ($event) => introActive.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sinapsys-container"${ssrIncludeBooleanAttr(introActive.value) ? " inert" : ""}${ssrRenderAttr("aria-hidden", introActive.value ? "true" : void 0)} data-v-ab5a8b56><header class="sinapsys-header" data-v-ab5a8b56><a href="https://sysifosweb.cl/" aria-label="Ir al sitio de SysifosWeb" class="sinapsys-brand" data-v-ab5a8b56>`);
      _push(ssrRenderComponent(_component_BrandLogo, null, null, _parent));
      _push(`</a><span class="sinapsys-label" data-v-ab5a8b56><span aria-hidden="true" data-v-ab5a8b56></span> Sinapsys \xB7 Conecta con nosotros</span></header><main class="sinapsys-main" data-v-ab5a8b56><section class="sinapsys-intro" aria-labelledby="sinapsys-title" data-v-ab5a8b56><p class="sinapsys-eyebrow" data-v-ab5a8b56>Dise\xF1o y desarrollo con prop\xF3sito</p><h1 id="sinapsys-title" data-v-ab5a8b56>Tu pr\xF3ximo paso digital${ssrInterpolate(" ")}<span data-v-ab5a8b56>empieza aqu\xED.</span></h1><p class="sinapsys-description" data-v-ab5a8b56>P\xE1ginas web y software a medida, con un equipo cercano.</p><a class="sinapsys-whatsapp" href="https://wa.me/56985021549?text=Hola%2C%20quiero%20conversar%20sobre%20un%20proyecto%20digital." target="_blank" rel="noopener noreferrer" data-v-ab5a8b56>`);
      _push(ssrRenderComponent(unref(MessageCircle), { "aria-hidden": "true" }, null, _parent));
      _push(` Hablemos de tu proyecto `);
      _push(ssrRenderComponent(unref(ArrowUpRight), {
        class: "sinapsys-cta-arrow",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</a><p class="sinapsys-contact-note" data-v-ab5a8b56>Conversemos directamente por WhatsApp.</p><img class="sinapsys-watermark"${ssrRenderAttr("src", _imports_0)} alt="" aria-hidden="true" data-v-ab5a8b56></section><section class="sinapsys-links" aria-labelledby="sinapsys-links-title" data-v-ab5a8b56><div class="sinapsys-links-heading" data-v-ab5a8b56><p class="sinapsys-eyebrow" data-v-ab5a8b56>Explora y conecta</p><h2 id="sinapsys-links-title" data-v-ab5a8b56>Todo SysifosWeb, <span data-v-ab5a8b56>m\xE1s cerca.</span></h2></div><!--[-->`);
      ssrRenderList(links, (item, index) => {
        _push(`<a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener noreferrer" class="sinapsys-link" style="${ssrRenderStyle({ "--entrance-delay": `${0.24 + index * 0.07}s` })}" data-v-ab5a8b56><span class="sinapsys-link-icon" data-v-ab5a8b56>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { "aria-hidden": "true" }, null), _parent);
        _push(`</span><span class="sinapsys-link-copy" data-v-ab5a8b56><span class="sinapsys-link-title" data-v-ab5a8b56>${ssrInterpolate(item.title)}</span><span class="sinapsys-link-description" data-v-ab5a8b56>${ssrInterpolate(item.desc)}</span></span><span class="sinapsys-link-action" data-v-ab5a8b56>${ssrInterpolate(item.label)} `);
        _push(ssrRenderComponent(unref(ArrowUpRight), { "aria-hidden": "true" }, null, _parent));
        _push(`</span></a>`);
      });
      _push(`<!--]--><a href="https://sysifosweb.cl/servicios" class="sinapsys-services-link" data-v-ab5a8b56>\xBFQu\xE9 podemos construir para ti? `);
      _push(ssrRenderComponent(unref(ArrowRight), { "aria-hidden": "true" }, null, _parent));
      _push(`</a></section></main><footer class="sinapsys-footer" data-v-ab5a8b56><p data-v-ab5a8b56>C\xF3digo que impulsa. Soluciones que transforman.</p><span data-v-ab5a8b56>`);
      _push(ssrRenderComponent(unref(MapPin), { "aria-hidden": "true" }, null, _parent));
      _push(` Coquimbo, Chile</span></footer></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sinapsys.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sinapsys = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab5a8b56"]]);

export { sinapsys as default };
//# sourceMappingURL=sinapsys-BKGWd5H4.mjs.map
