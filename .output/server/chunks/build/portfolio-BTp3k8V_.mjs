import { e as buildAssetsURL } from '../nitro/nitro.mjs';
import { mergeProps, resolveDirective, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { ExternalLink, ArrowRight } from 'lucide-vue-next';
import { f as fareminImage } from './Faremin-DOST-GWp.mjs';
import { u as useSEO } from './useSEO-DmqgVml9.mjs';
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-hero bg-section-dark" }, _attrs))} data-v-fe5f470d><div class="section-container relative z-20 text-center flex flex-col items-center" data-v-fe5f470d><h1${ssrRenderAttrs(mergeProps({
    class: "portfolio-headline mb-8",
    "data-delay": "100"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-fe5f470d> Ideas que toman <span class="display-accent" data-v-fe5f470d>forma digital.</span></h1><div${ssrRenderAttrs(mergeProps({
    class: "relative max-w-xl mx-auto",
    "data-delay": "200"
  }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-fe5f470d><p class="portfolio-subtitle" data-v-fe5f470d> Conoce algunos de los sitios y plataformas que hemos creado para nuestros clientes. </p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fe5f470d"]]);
const stahlformImg = "" + buildAssetsURL("StahlForm.f_-F-LCh.jpeg");
const ansarImg = "" + buildAssetsURL("Ansar.BIRTxN9m.jpeg");
const _sfc_main$1 = {
  __name: "GridSection",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "Maestranza Faremin",
        name: "Maestranza",
        accentName: "Faremin",
        category: "Industria \xB7 Sitio corporativo",
        description: "Una presencia digital a la altura de su trabajo en ingenier\xEDa.",
        problem: "Presentar sus servicios y capacidades t\xE9cnicas con claridad a potenciales clientes.",
        solution: "Una presentaci\xF3n visual de la maestranza, sus capacidades operativas y sus servicios, con acceso directo al contacto.",
        image: fareminImage,
        width: 1600,
        height: 911,
        link: "https://faremin.cl/",
        details: ["Presentaci\xF3n de la empresa", "Servicios y capacidades", "Contacto"]
      },
      {
        title: "StahlForm",
        name: "Stahl",
        accentName: "Form",
        joined: true,
        category: "Manufactura \xB7 Sitio corporativo",
        description: "El dise\xF1o como primera muestra de su identidad industrial.",
        problem: "Trasladar la identidad de la empresa a una presentaci\xF3n digital clara y reconocible.",
        solution: "Un sitio que re\xFAne la presentaci\xF3n de la marca y su propuesta en una experiencia visual coherente.",
        image: stahlformImg,
        width: 1600,
        height: 777,
        link: "https://www.stahlform.cl/",
        details: ["Identidad visual", "Presentaci\xF3n de servicios", "Presencia digital"]
      },
      {
        title: "Ansar Automotriz",
        name: "Ansar",
        accentName: "Automotriz",
        category: "Automotriz \xB7 Plataforma web",
        description: "Una vitrina digital para acercar los veh\xEDculos a sus pr\xF3ximos due\xF1os.",
        problem: "Facilitar la exploraci\xF3n de veh\xEDculos y el contacto con la automotora.",
        solution: "Una presentaci\xF3n del inventario y de la empresa que acompa\xF1a al visitante desde la b\xFAsqueda hasta la consulta.",
        image: ansarImg,
        width: 1600,
        height: 911,
        archived: true,
        details: ["Vitrina de veh\xEDculos", "Presentaci\xF3n de la empresa", "Consultas"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-section-dark pb-20" }, _attrs))} data-v-b39fbb66><!--[-->`);
      ssrRenderList(projects, (project, index) => {
        _push(`<article class="project-section" data-v-b39fbb66><div class="section-container" data-v-b39fbb66><header${ssrRenderAttrs(mergeProps({ class: "project-header" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b39fbb66><p class="section-eyebrow" data-v-b39fbb66>${ssrInterpolate(String(index + 1).padStart(2, "0"))} / ${ssrInterpolate(project.category)}</p><h2 class="project-title" data-v-b39fbb66>${ssrInterpolate(project.name)}${ssrInterpolate(project.joined ? "" : " ")}<span class="display-accent" data-v-b39fbb66>${ssrInterpolate(project.accentName)}</span></h2><p class="project-description" data-v-b39fbb66>${ssrInterpolate(project.description)}</p></header><div${ssrRenderAttrs(mergeProps({ "data-delay": "100" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b39fbb66><figure class="project-visual" data-v-b39fbb66><div class="project-browser" aria-hidden="true" data-v-b39fbb66><span class="browser-dots" data-v-b39fbb66><i data-v-b39fbb66></i><i data-v-b39fbb66></i><i data-v-b39fbb66></i></span><span data-v-b39fbb66>${ssrInterpolate(project.title)}</span><span class="browser-label" data-v-b39fbb66>Vista del proyecto</span></div><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", `Dise\xF1o del sitio de ${project.title}`)}${ssrRenderAttr("width", project.width)}${ssrRenderAttr("height", project.height)} class="project-image" loading="lazy" data-v-b39fbb66></figure></div><div${ssrRenderAttrs(mergeProps({
          class: "project-story",
          "data-delay": "100"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b39fbb66><div data-v-b39fbb66><h3 class="card-title mb-3" data-v-b39fbb66>El desaf\xEDo</h3><p class="project-copy" data-v-b39fbb66>${ssrInterpolate(project.problem)}</p></div><div data-v-b39fbb66><h3 class="card-title mb-3" data-v-b39fbb66>La propuesta</h3><p class="project-copy" data-v-b39fbb66>${ssrInterpolate(project.solution)}</p></div></div>`);
        if (project.archived) {
          _push(`<p class="project-archive-note" data-v-b39fbb66>Dise\xF1o realizado por SysifosWeb. El sitio actual fue modificado posteriormente.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="project-bottom" data-v-b39fbb66><ul class="project-details" aria-label="Aspectos del proyecto" data-v-b39fbb66><!--[-->`);
        ssrRenderList(project.details, (detail) => {
          _push(`<li data-v-b39fbb66>${ssrInterpolate(detail)}</li>`);
        });
        _push(`<!--]--></ul>`);
        if (project.link) {
          _push(`<a${ssrRenderAttr("href", project.link)} target="_blank" rel="noopener noreferrer" class="project-link" data-v-b39fbb66> Visitar sitio `);
          _push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4" }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></article>`);
      });
      _push(`<!--]--><div${ssrRenderAttrs(mergeProps({
        class: "section-container relative z-10 mt-20",
        "data-delay": "200"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b39fbb66><div class="impulso-closing portfolio-cta bg-section-dark p-12 lg:p-20 text-center" data-v-b39fbb66><div class="relative z-10 max-w-3xl mx-auto" data-v-b39fbb66><h2 class="section-title portfolio-cta__title mb-6" data-v-b39fbb66>Construyamos tu plataforma.</h2><p class="text-lead text-subdued mb-10" data-v-b39fbb66>Deja de competir por precio y empieza a competir por innovaci\xF3n. Dise\xF1amos ecosistemas digitales que transforman marcas y multiplican conversiones.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "cta-primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Iniciar Proyecto `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Iniciar Proyecto "),
              createVNode(unref(ArrowRight), { class: "w-5 h-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio/GridSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b39fbb66"]]);
const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const { setMeta, setSchema } = useSEO();
    setMeta({
      title: "Portfolio | Proyectos de Desarrollo Web y Software a Medida \u2014 SysifosWeb",
      description: "Conoce nuestros proyectos reales: Ansar Automotriz, Maestranza Faremin, StahlForm y m\xE1s. Desarrollamos soluciones digitales que generan resultados medibles para empresas en Chile y el mundo.",
      keywords: "portfolio desarrollo web chile, casos de \xE9xito software, proyectos desarrollo web empresas, ejemplos software a medida, soluciones digitales automotriz, ecommerce chile",
      image: "/img/og-portfolio.webp"
    });
    setSchema({
      type: "WebPage",
      data: {
        name: "Portfolio de Proyectos \u2014 SysifosWeb",
        description: "Casos de \xE9xito en desarrollo web, ecommerce y software a medida para empresas en Chile y el mundo."
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortfolioHeroSection = __nuxt_component_0;
      const _component_PortfolioGridSection = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-[100svh]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PortfolioHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioGridSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-BTp3k8V_.mjs.map
