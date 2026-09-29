import { d as defineEventHandler, s as setHeader } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'ipx';

const SITE_URL = "https://sysifosweb.cl";
const CORE = `# SysifosWeb

> Agencia de desarrollo de software en La Serena, Chile. Especialistas en p\xE1ginas web profesionales, tiendas online y software a medida para empresas.

SysifosWeb (Sysifos) construye productos digitales escalables: sitios web de alto rendimiento, ecommerce autoadministrable y sistemas empresariales a medida. Trabajamos con Laravel, Nuxt/Vue.js, React y Flutter, con foco en performance, SEO t\xE9cnico y arquitecturas robustas.

## Datos de contacto

- Sitio web: ${SITE_URL}
- Email: contacto@sysifosweb.cl
- Tel\xE9fono: +56 9 8502 1549
- WhatsApp: https://wa.me/56985021549
- Ubicaci\xF3n: La Serena, Regi\xF3n de Coquimbo, Chile
- Horario: Lunes a viernes, 09:00\u201318:00
- Tiempo de respuesta: menos de 24 horas

## Servicios

- [Servicios](${SITE_URL}/servicios): listado completo de servicios y proceso de trabajo
- P\xE1ginas Web Profesionales: dise\xF1o mobile-first, copywriting persuasivo y estructura lista para SEO
- Tiendas Online y Ecommerce: proceso de compra optimizado, integraci\xF3n de pagos y panel autoadministrable
- Sistemas y Software a Medida: desarrollo full-stack y automatizaci\xF3n de procesos empresariales
- Mantenimiento web y soporte post-lanzamiento

## P\xE1ginas principales

- [Inicio](${SITE_URL}/): propuesta de valor, unidades de negocio y testimonios de clientes
- [Nosotros](${SITE_URL}/nosotros): historia, equipo de ingenieros y metodolog\xEDa de trabajo
- [Portfolio](${SITE_URL}/portfolio): casos de \xE9xito reales (Ansar Automotriz, Maestranza Faremin, StahlForm)
- [Contacto](${SITE_URL}/contacto): formulario de cotizaci\xF3n para proyectos web y software
- [Blog](${SITE_URL}/blog): art\xEDculos sobre desarrollo web, software, ecommerce y SEO
- [Sinapsys](${SITE_URL}/sinapsys): hub de enlaces y recursos
- [Pol\xEDtica de Privacidad](${SITE_URL}/privacidad): tratamiento de datos personales conforme a la Ley 19.628 y la Ley 21.719 de Chile

## Recursos para LLMs y crawlers

- [RSS del blog](${SITE_URL}/blog/feed.xml): \xFAltimos art\xEDculos en formato RSS 2.0
- [Sitemap](${SITE_URL}/sitemap.xml): todas las URLs indexables del sitio
- Contenido del blog: HTML renderizado en servidor (SSR), sin paywall ni registro
- Idioma: espa\xF1ol (es-CL)
`;
const llms_txt = defineEventHandler(async (event) => {
  var _a;
  let blogSection = "";
  try {
    const response = await $fetch(
      `https://olimpo.sysifosweb.cl/api/blog?per_page=20`
    );
    const posts = (_a = response == null ? void 0 : response.data) != null ? _a : [];
    if (posts.length > 0) {
      const lines = posts.map((p) => {
        const title = p.title.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1").trim();
        const excerpt = (p.excerpt || "").replace(/\s+/g, " ").trim().slice(0, 160);
        return `- [${title}](${SITE_URL}/blog/${p.slug})${excerpt ? `: ${excerpt}` : ""}`;
      });
      blogSection = `
## Art\xEDculos recientes del blog

${lines.join("\n")}
`;
    }
  } catch {
    blogSection = `
## Art\xEDculos recientes del blog

- [Ver blog](${SITE_URL}/blog): listado completo de art\xEDculos
`;
  }
  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=3600");
  return CORE + blogSection;
});

export { llms_txt as default };
//# sourceMappingURL=llms.txt.mjs.map
