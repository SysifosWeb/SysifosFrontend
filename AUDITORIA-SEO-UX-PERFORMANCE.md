# Auditoría SEO, UX y performance de SysifosWeb

## Actualización — segunda iteración de rendimiento

La portada local obtuvo **100/100 en tres mediciones móviles consecutivas** y 100 en desktop. Mediana LCP: **1,248 s**; transferencia inicial: **80 KB**. Las métricas de 73 puntos y LCP 4,83 s de las secciones siguientes pertenecen al primer corte de auditoría. El estado vigente, los cambios de arquitectura de la portada y la propuesta visual local están documentados en **RENDIMIENTO-100-Y-PROPUESTA-LOCAL.md**. Los pendientes de seguridad, CMS y datos de campo siguen vigentes. No hubo despliegue.

Fecha: 22 de octubre de 2026. Mercado: Chile; contexto local: Coquimbo y La Serena.

## Resumen ejecutivo

Se inspeccionaron los dos repositorios reales, el sitio público, la API pública del blog y las 67 URLs de su sitemap. Se aplicaron cambios locales progresivos de bajo riesgo, preservando URLs, identidad visual, formularios, IDs de medición y arquitectura. No se publicó ni se hizo commit o push.

El problema SEO confirmado más claro era el soft 404 de artículos inexistentes: producción respondía 200; la versión corregida responde 404. Se cerró además un filtro de listado que permitía pedir borradores sin autenticación. Se redujeron fuentes, imágenes y transferencias, se corrigió metadata engañosa y se mejoró la accesibilidad de formularios y navegación.

**El objetivo de Core Web Vitals todavía no está cumplido**: el LCP móvil de laboratorio final es 4,83 s y TBT 238 ms. CLS está bajo 0,1. No hay datos de campo ni medición de INP; TBT no equivale a INP. La mejora técnica no garantiza indexación ni contactos: faltan despliegue, datos de Search Console y seguimiento comercial.

Prioridades siguientes: actualizar dependencias con evaluación de compatibilidad; reducir el coste inicial de CSS/JS; crear landings distintas por intención comercial; corregir dos enlaces editoriales del CMS; validar leads y seguimiento en producción.

## Estado original

- `Frontend`: repositorio Git independiente, Nuxt 3.21.x, Vue 3, TypeScript, Tailwind, Nuxt Image/IPX/Sharp, nuxt-security, nuxt-gtag y módulo de sitemap. Versiones declaradas y locks inspeccionados; no se actualizó el stack.
- `SysifosBackend`: repositorio independiente, PHP 8.3.6, Laravel 13.35.0, arquitectura Application/Domain/Infrastructure, API REST, Sanctum/Passport y MCP. Las consultas de blog usan eager loading de categoría/usuario; no se observó N+1 en ese listado.
- Rutas comerciales principales prerenderizadas; blog dinámico con SSR y proxy Nitro `/api/` hacia Laravel. **SSR ya existía**; hacer explícita la espera permite decidir el estado HTTP a partir de la respuesta antes de renderizar.
- Producción: dominio canónico HTTPS sin www. HTTP y www terminan en HTTPS sin www; no se certifica aquí el número exacto de saltos de todos los caminos.
- 59 artículos publicados, API de 10 elementos por página, seis páginas; `per_page=100` no modifica ese límite en el backend actual.
- Sitemap con 67 URLs: ocho estáticas y 59 artículos. Robots permite contenido y bloquea `/admin/`.
- Fuentes locales variables Manrope y Source Sans 3 en TTF; dos familias, pesos declarados por rango, `font-display: swap`.
- Consent Mode v2 con denegación inicial, banner diferido y evento de lead tras respuesta satisfactoria del formulario.
- Árboles Git inicialmente sin cambios. `.output` está versionado por el proyecto: el build actualiza y renombra archivos generados; no confundir esa cantidad de archivos con refactors de código fuente.
- El archivo previo `lighthouse-report.json`, aunque modificado en octubre, contiene una ejecución de **25 de junio de 2026** contra localhost:3001. No se usó como base del antes/después.

## Problemas encontrados

Estados: **corregido local** requiere desplegar ambos componentes según corresponda; **pendiente** no se ha implementado. Prioridades P0–P3 se refieren a impacto confirmado y riesgo; los avisos de dependencias no prueban explotación.

## Problemas P0

No se confirmó caída general, bloqueo global de indexación ni fallo total del canal de contacto. Los cambios no certifican una auditoría de seguridad completa.

## Problemas P1

| Problema y ubicación | Impacto | Solución | Estado | Impacto/esfuerzo |
|---|---|---|---|---|
| Artículo inexistente responde 200, `pages/blog/[slug].vue` | Soft 404, señales de indexación incorrectas | Esperar consulta; devolver 404 real; 503 ante fallo de API | Corregido local | Alto/bajo |
| Listado público acepta `status=draft`, controlador Laravel | Expone contenido no publicado por un parámetro | Forzar `published` para visitantes; mantener filtros autenticados | Corregido local y probado | Alto/bajo |
| LCP móvil 9,83 s inicial | Espera elevada en móvil | WOFF2, compresión estática, imagen móvil evitada, retirar aparición del texto principal | Mejorado, objetivo pendiente | Alto/medio |
| Ilustraciones de servicios 2,9–4 MB cada una | Descarga excesiva al navegar/leer | Derivados WebP de 1200 px, conservar originales | Corregido local | Alto/bajo |
| Paginación cambia el conjunto al quitar destacado solo en página 1 | Puede repetir/omitir artículos entre páginas | Excluir el mismo destacado de la secuencia y usar enlaces navegables | Corregido local | Alto/bajo |
| 32 avisos npm en árbol de producción, 2 críticos y 15 altos | Riesgo de dependencias; aplicabilidad requiere revisión | Actualizar en cambio dedicado y validar Nuxt/IPX/Sharp | Pendiente | Alto/alto |
| No hay landing específica por servicio comercial | Compite una página genérica para intenciones distintas | Crear desarrollo web, ecommerce y software/automatización con contenido propio | Pendiente de alcance comercial | Alto/alto |

## Problemas P2

| Problema y ubicación | Impacto | Solución | Estado |
|---|---|---|---|
| TTF variables, `assets/css/base.css` | 811.040 bytes en fuentes | WOFF2: 223.256 bytes; mismas familias y pesos | Corregido local |
| Fechas ficticias globales, OG duplicado/MIME fijo, `useSEO.ts` | Metadata inexacta | Fechas solo para artículos con datos reales; MIME por extensión | Corregido local |
| Logo de schema `/img/logo.png` inexistente | Referencia rota | Usar SVG de marca existente | Corregido local |
| SearchAction apunta a búsqueda inexistente en servicios | Schema sin función equivalente | Retirado | Corregido local |
| Hreflang global siempre a home | Relación de idiomas incorrecta | Retirado: sitio de un idioma, `lang=es` y OG `es_CL` | Corregido local |
| FAQ de contacto no visible | Schema que no corresponde al contenido | Reemplazado por WebPage | Corregido local |
| Coordenadas genéricas del centro de Coquimbo | Apariencia de ubicación exacta no acreditada | Retirar coordenadas predeterminadas y geo.position | Corregido local |
| Campos de contacto sin labels asociados; mensajes desaparecen | Fricción con lector de pantalla/errores | `for/id`, autocomplete, límites alineados, roles y cierre con nombre | Corregido local |
| Búsqueda y email del boletín sin nombre accesible | Controles ambiguos | Etiquetas accesibles y anuncios de respuesta | Corregido local |
| Panel solo bloqueado por robots | Robots no garantiza desindexación | `X-Robots-Tag: noindex, nofollow` en admin | Corregido local |
| Canonical de páginas del blog siempre sin página | Consolida páginas distintas | Canonical paginado y title por página | Corregido local |
| Falta breadcrumb de artículo | Orientación/jerarquía | Breadcrumb visible y JSON-LD consistente | Corregido local |
| Meta title/description editorial ignorada | Se pierde optimización del CMS | Dar prioridad a campos SEO, con fallback al título/extracto | Corregido local |
| Dos enlaces editoriales llevan a artículos ausentes | Ruptura de navegación | Editar enlaces en CMS, con destinos verificados | Pendiente |
| RSS declaraba enclosures sin length y MIME fijo | XML semánticamente incorrecto | Quitar enclosure inválido y escapar categoría | Corregido local |
| Blog consulta seis páginas en cada carga SSR | Latencia crece con el catálogo | API de búsqueda/paginación server-side y categorías independientes | Pendiente |

## Problemas P3

- Unificar marca escrita Sysifos Web/SysifosWeb y terminología Blog/Journal/Portfolio.
- OG originales son cuadrados en varios casos: se retiraron dimensiones globales falsas de 1200×630. Preparar piezas sociales reales de 1200×630 en una fase editorial.
- Componente `ContactForm.vue` antiguo simula envío. La página activa usa `ContactoContactFormSection` y envía a la API real. No se retiró el componente sin necesidad; impedir reutilización accidental.
- Revisar paquetes GTM antiguos instalados y dos lockfiles npm/pnpm. No hay doble loader activo demostrado en el código actual; no se eliminaron dependencias por su nombre.
- Evaluar AVIF para imágenes grandes con presupuesto de CPU y calidad visual; WebP ya reduce sustancialmente el peso.

## Cambios realizados

1. SSR del artículo con decisiones HTTP reales; elimina refresh duplicado; respeta metadata editorial; canonical reactivo e imágenes absolutas en schema.
2. Listado SSR explícito, destacado estable, enlaces de paginación, canonical/title paginados y 404 de página fuera de rango.
3. Fuente del sitemap y RSS usa `runtimeConfig.apiBase`; sitemap admite ambas formas de `last_page`.
4. Metadata sin fechas ficticias, OG duplicado, tipo fijo incorrecto, hreflang ajeno a la ruta ni SearchAction inexistente. JSON-LD serializado escapando `<`, deduplicado por tipo/nombre.
5. Imágenes de tarjetas del blog con NuxtImg, sizes y dimensiones; portada del artículo eager/high y tamaño responsive; fallback local permitido por CSP.
6. WOFF2 sin cambiar tipografía; originales y licencias conservados.
7. Derivados WebP de hero, servicios, equipo y visual de nosotros; logos tecnológicos pequeños en WebP y lazy.
8. `<picture>` del hero evita el recurso de escritorio donde se oculta a ≤640 px. No se aplica lazy a la imagen principal visible.
9. Compresión de activos públicos en Nitro, incluidos JS/CSS/HTML generados.
10. H1 de home y servicios explican qué se ofrece. Conservados composición, paleta, CTAs y proyectos reales. Se eliminó la animación de entrada del H1 y descripción de home.
11. Accesibilidad: salto al contenido en layouts públicos principales, botón móvil de 44 px, formularios etiquetados, autocomplete, límites, mensajes anunciados y email enlazado.
12. Privacidad del blog: filtro público no puede pedir borradores; seis pruebas nuevas.

## Performance antes/después

Lighthouse móvil local, mismo Chrome instalado, throttling simulado predeterminado. Antes: build original verificado con firma, puerto 3100. Después: build final, puerto 3103. Perfil limpio por ejecución; distintas ejecuciones y carga del equipo introducen variación. La ejecución final se hizo sin el rastreo y las comprobaciones visuales simultáneas.

| Métrica | Antes | Después |
|---|---|---|
| FCP | 2.808 s | 2.855 s |
| LCP | 9.831 s | 4.830 s |
| TBT | 241.500 ms | 237.500 ms |
| CLS | 0.000  | 0.013  |
| Transferencia total | 1834.725 KB | 849.870 KB |
| Lighthouse: Rendimiento | 66 | 73 |
| Lighthouse: Accesibilidad | 100 | 100 |
| Lighthouse: Buenas prácticas | 100 | 100 |
| Lighthouse: SEO | 100 | 100 |
| Solicitudes | 63 | 57 |

Reducción de transferencia total aproximada: **54 %**. Reducción de LCP observada: **51 %**. No atribuir cada milisegundo a un único cambio. FCP no mejoró materialmente y TBT sigue cerca de 240 ms. Una ejecución intermedia dio 64/100 con carga concurrente del equipo; se conserva como evidencia de variación, no se ocultó para afirmar estabilidad.

La compresión genera recursos `.gz/.br`; verificar que el hosting conserve y sirva esos archivos. Estas cifras corresponden al servidor local y no a TTFB/velocidad de visitantes chilenos. El despliegue público aún no incluye estos cambios.

### Imágenes y fuentes

| Recurso | Antes | Derivado servido |
|---|---:|---:|
| Manrope variable | 164.700 B | 53.664 B |
| Source Sans 3 variable | 646.340 B | 169.592 B |
| Estrategia | 3.873.292 B | 88.732 B |
| Diseño | 2.938.194 B | 37.168 B |
| Arquitectura | 3.995.906 B | 111.910 B |
| Despliegue | 3.585.168 B | 63.636 B |
| Karen | 2.288.607 B | 64.534 B |
| Osman | 1.807.317 B | 35.420 B |
| Hero Faremin | Original conservado | 47.222 B; móvil oculto no lo descarga |

Se inventariaron dimensiones y pesos de imágenes locales. No se han reescrito todas las imágenes dentro del HTML almacenado de los 59 artículos ni se certifica la adecuación de cada una a todos sus tamaños renderizados. Ese contenido requiere inventario editorial adicional. No se generaron imágenes nuevas ni se sustituyó evidencia real de proyectos.

## SEO técnico

Las 67 URLs del sitemap local devuelven 200 y tienen exactamente un H1, un canonical y description. Se preservan rutas y enlaces comerciales. La página de artículos inexistentes pasa de 200 público a 404 local; fallos de backend pasan a 503, evitando confundir indisponibilidad con inexistencia.

Sitemap y robots se analizaron como documentos reales; XML se parseó. No hay necesidad de hreflang en una única versión lingüística. HTTPS y host principal ya están resueltos en producción; no se añadieron redirecciones masivas ni cambios de slug.

Se retiraron dimensiones OG globales no verificadas. Pendiente crear imágenes sociales normalizadas y comprobar previews en cada plataforma. Hacer una política de slash al nivel del servidor solo si Search Console evidencia duplicados; no generar redirecciones preventivas sin pruebas.

## Indexación

Robots facilita rastreo; no garantiza indexación ni protege datos. El panel tiene ahora noindex HTTP además del bloqueo existente de robots. Si hubiera URLs admin ya indexadas, Google necesita poder rastrearlas para ver el noindex: revisar primero Search Console y decidir temporalmente su permiso de rastreo.

Las páginas comerciales entregan contenido HTML prerenderizado y el blog entrega contenido SSR. La indexación real, exclusiones, canonical elegido por Google y URLs huérfanas en el índice no pueden confirmarse sin acceso a Search Console. No se accedió a Search Console ni GA4 autenticado y no se inventaron clicks, impresiones o ranking.

## Core Web Vitals

| Indicador | Meta | Evidencia final | Estado |
|---|---|---|---|
| LCP | ≤2,5 s | 4,83 s lab móvil | Pendiente |
| INP | ≤200 ms | Sin datos de campo | No evaluado |
| CLS | ≤0,1 | 0,0126 lab móvil | Dentro de meta en la prueba |

Recoger 28 días de datos de campo tras publicar. Próxima intervención: analizar trace de LCP, fuentes y coste del CSS/JS inicial; presupuesto de JS por ruta y carga de terceros. No sustituir INP por TBT ni presentar Lighthouse 100 SEO como garantía de posicionamiento.

## UX

La home originalmente tenía un H1 abstracto; ahora dice “Desarrollo web y software para tu empresa”. Servicios presenta sus tres tipos de solución. La composición y proximidad del equipo se conservan.

Se probaron home, servicios, nosotros, portfolio, contacto y blog en 360, 390, 768, 1366 y 1920 px: sin overflow horizontal ni excepciones JS en la revisión. No equivale a un ensayo manual de cada navegador ni a todas las combinaciones de contenido.

El menú móvil ya tenía control de foco y Escape: se conservó y comprobó el cierre. Falta validar navegación prolongada con lector de pantalla real y controles de cookies en todos los tamaños. Las capturas completas sin scroll pueden mostrar espacios porque `v-reveal` revela al entrar en viewport; la inspección visual se realizó también desplazándose.

## Accesibilidad

Mejoras implementadas en controles, labels, mensajes y salto al contenido. La home obtiene 100 en el chequeo automático de Lighthouse, tanto antes como después; esto **no certifica WCAG 2.2 AA en todo el sitio**. Focus visible y `prefers-reduced-motion` ya existían y se mantienen.

Pendiente revisar contraste por componente/estado, orden de lectura del banner, zoom al 200–400 %, lectores de pantalla y artículos con tablas o imágenes largas. La prueba de tamaños de pantalla es distinta de una prueba formal de zoom.

## Diseño

Se conserva la paleta azul, los dos tipos de letra, sistema de espacios y proyectos reales. Cambios visibles acotados: títulos descriptivos, controles utilizables, breadcrumb y eliminación de entrada demorada en el texto principal. No hubo sustitución de identidad ni rediseño completo.

La página de servicios usa ilustraciones conceptuales: ahora pesan menos, pero conviene priorizar diagramas o capturas que expliquen decisiones reales. No usar imágenes para insinuar clientes o resultados no acreditados.

## Conversión

WhatsApp y contacto siguen siendo rutas principales. El formulario activo envía nombre, email, asunto, mensaje y consentimiento a Laravel; navegador y servidor alinean mínimos/máximos. Los mensajes de error no desaparecen antes de poder leerlos.

Se probaron éxito y error mediante respuestas interceptadas en el navegador: **no se envió un contacto real**. La suite backend verifica sus propias rutas; el envío completo con correo/notificación y recepción por el responsable debe probarse en staging o con un lead acordado.

Evento existente `generate_lead` solo tras respuesta satisfactoria; conversión Ads conserva su ID. Verificar si `conversion` llega al destino Ads configurado: el código por sí solo no acredita recepción. Mantener las consultas de usuarios fuera de parámetros de eventos.

## Contenido

Priorizar problemas del comprador: qué se entrega, qué necesita aportar, cómo se cotiza, qué queda bajo su propiedad, mantenimiento y límites. No asegurar ventas, plazos universales ni cifras sin respaldo. La propuesta de valor actual contiene promesas como avances en 2–4 semanas y resultados comerciales: revisar con datos de cada servicio antes de ampliarlas.

Los textos deben explicar web corporativa, tienda y sistema interno de forma distinta. Las páginas actuales ya tienen titles propios; no se impuso el mismo title a todas. Se respetan los meta titles/descriptions escritos en el CMS.

## SEO local

Mantener cobertura nacional y una sección real de atención desde Coquimbo para Chile. Añadir La Serena de forma natural cuando explique disponibilidad, reuniones o proyectos reales. No construir clones de ciudad.

Verificar y completar Google Business Profile solo con datos empresariales verificables; elegir área de servicio según operación real y no publicar domicilio privado. Unificar nombre, teléfono, email y perfiles sociales. Se retiraron coordenadas genéricas; no se inventó dirección, reseñas, ratings ni premios.

### Investigación de palabras clave

Investigación exploratoria con resultados web consultados el 22-10-2026. No es un ranking certificado de Google Chile localizado ni una herramienta de volumen/KD. Dificultad **cualitativa**, inferida de las ofertas observadas; validar con Search Console y un planificador antes de presupuestar adquisición.

| Grupo e intención | Consultas candidatas | Dificultad orientativa | Destino útil |
|---|---|---|---|
| Web empresarial, transaccional | desarrollo web Chile; empresa desarrollo web; página web para empresa | Alta nacional | Landing web corporativa |
| Atención regional, transaccional | páginas web La Serena; desarrollo web Coquimbo | Media/alta local, agencias con oferta concreta | Misma landing con evidencia local real |
| Tiendas, transaccional | desarrollo ecommerce Chile; tienda online con Webpay; integración tienda e inventario | Alta general; evaluar long tail | Landing ecommerce con alcance |
| Sistemas, transaccional | software a medida Chile; sistema de cotizaciones para empresas; integrar CRM y ERP | Alta general; más específica por proceso | Landing sistemas/integraciones |
| Automatización, mixta | automatizar seguimiento de cotizaciones WhatsApp; automatización de procesos para pymes | Media/alta, intención variable | Servicio y guía con ejemplo |
| Mantención, transaccional | mantenimiento web empresas Chile; mejorar velocidad sitio Nuxt | Media, especialidad acotada | Servicio solo si existe capacidad y condiciones |
| Evaluación, informacional comercial | cuánto cuesta página web profesional Chile; comparar cotizaciones desarrollo web | Competida, cercana a decisión | Artículos existentes reforzados |

No agrupar “crear tienda online gratis” con contratación a medida: intención y valor comercial diferentes. Priorizar conversaciones calificadas sobre tráfico total.

### Competencia observada

- [Faroweb](https://faroweb.cl/): presenta proyectos, pasos de contratación, planes y condiciones visibles. Oportunidad: explicar el alcance y proceso de SysifosWeb con la misma claridad, aportando sus propios casos verificables. No copiar precios ni promesas.
- [Apollo.TI, software a medida](https://apolloti.cl/software-a-medida): página específica sobre sistemas, integraciones y dudas de contratación. Oportunidad: explicar propiedad, entregables y cuándo conviene una solución existente.
- [VENDEWEB](https://vendeweb.cl/): conecta atención local y cobertura de Chile con FAQs comerciales. Oportunidad: resolver objeciones regionales sin limitar el mercado nacional.
- [Aeris, diseño web La Serena](https://agencia-web.com/diseno-web-la-serena/): ofrece niveles de alcance y servicios complementarios. Oportunidad: detallar qué incluye cada solución y sus costes operativos, sin competir solo por precio.

Las páginas fueron identificadas en búsquedas web; su posición exacta, tráfico, conversiones y resultados prometidos no fueron verificados. El análisis es de estructura y comunicación, no una validación de su servicio.

## Blog

59 artículos rastreados dentro de las 67 URLs. El tema WhatsApp/CRM/automatización tiene afinidad comercial; separar guías educativas de oferta de implementación. Hay varios artículos sobre ANCI, privacidad e IA: revisar solapamiento semántico antes de fusionar; sin impresiones/query data no se puede afirmar canibalización.

### Acciones editoriales concretas

| Artículo/grupo | Acción propuesta | Servicio a reforzar |
|---|---|---|
| `comparar-cotizaciones-desarrollo-web-alcance-entregables` | Añadir ejemplo de alcance/criterios de comparación y CTA a diagnóstico | Desarrollo web |
| `cuanto-cuesta-desarrollar-pagina-web-profesional-chile-2026` | Aclarar supuestos, costes recurrentes y revisar anualmente | Desarrollo web/ecommerce |
| `whatsapp-crm-seguimiento-cotizaciones-empresas` | Mostrar flujo real, límites e integración posible | Sistemas/automatización |
| `como-cobrar-whatsapp-chile-guia-2026` | Revisar pasos y proveedores, enlazar implementación si procede | Ecommerce/integraciones |
| ANCI y Ley 21.719 | Revisar con fuentes oficiales y especialista; no tratar checklist técnica como asesoría legal | Mantenimiento y seguridad técnica |
| IA piloto/adopción | Delimitar cada pregunta y evitar repetir recomendaciones | Automatización |

### Enlaces rotos existentes en contenido del CMS

1. `/blog/automatizar-respuestas-whatsapp-negocio-5-dias` enlaza a `/blog/digitalizar-cobros-whatsapp-empresas-chile`, inexistente. Candidato por tema: `/blog/como-cobrar-whatsapp-chile-guia-2026`; revisar frase y alcance antes de reemplazar.
2. `/blog/cuanto-cuesta-desarrollar-pagina-web-profesional-chile-2026` enlaza a `/blog/proteccion-datos-personales-chile-2026-ley`, inexistente. Candidato: `/blog/ley-21719-checklist-10-puntos-sitio-web-cumplimiento`; revisar equivalencia editorial.

No se escribieron artículos ni se alteró la base de producción. Estos enlaces no nacieron de los cambios de código y no se encubrieron con redirecciones genéricas.

## Arquitectura de información

Actual: home → servicios generales/portfolio/blog/contacto. Categorías son filtros en cliente, no landings de categoría con URL propia. Todas las páginas rastreadas tienen enlace a servicios al menos en navegación; eso no demuestra enlaces contextuales suficientes dentro de cada artículo.

Propuesta: `/servicios` como índice → landings por web corporativa, ecommerce y software/sistemas; automatización e integraciones si tienen oferta distinta y ejemplos. Evitar duplicar “desarrollo web” y “diseño y desarrollo de páginas web” en dos páginas casi iguales. Mantenimiento solo con servicio definido. Cada landing debe enlazar proyectos reales, una guía útil y contacto; cada guía relevante debe devolver un enlace contextual a la solución.

La paginación del blog tiene enlaces rastreables y conserva el destacado entre páginas. El listado aún descarga todos los resúmenes para mantener filtros existentes: evolucionar a búsqueda de API antes de que el catálogo crezca mucho más. No se cambiaron URLs de artículos.

## Datos estructurados

Organization y WebSite se deduplican; referencias de logo válidas. WebPage/Service/LocalBusiness corresponden a páginas existentes; Article usa fechas/autores del contenido y hay BreadcrumbList visible equivalente. Se retiró SearchAction inexistente, FAQ no visible y coordenadas predeterminadas. No hay ratings nuevos ni testimonios inventados.

Se parseó el JSON-LD de páginas inspeccionadas y se comprobaron tipos. Esto valida sintaxis y correspondencia revisada, **no equivale a aprobar Rich Results Test de Google ni a garantizar resultados enriquecidos**. Revisar las redes `sameAs` y horario declarado con el propietario; ya existían y no se verificó la titularidad de cada perfil.

## Seguridad y privacidad

No se leyeron ni imprimieron secretos `.env`. La auditoría no es un pentest. CSP existente permite inline/eval y varios orígenes de Google por compatibilidad: estudiar nonces/hash y la interacción con prerender antes de endurecer. No imponer una CSP que rompa el admin o editor.

`npm audit --omit=dev`: 32 avisos (14 bajos, 1 moderado, 15 altos, 2 críticos) en el árbol; críticos de simple-git/argv-parser, varios avisos altos alrededor de Nuxt/IPX/Sharp. Muchos son transitivos y algunos de herramientas de build, aunque figuren en el árbol de producción. Identificar alcance real, versión instalada y rutas expuestas antes de decidir prioridad por explotación.

`composer audit`: sin advisories ni paquetes abandonados reportados en la ejecución. No significa ausencia de vulnerabilidades. Dependencias no actualizadas automáticamente para evitar migraciones forzadas de framework.

## Analytics

nuxt-gtag es el módulo activo; paquetes GTM instalados/constantes no demuestran otro contenedor ejecutándose. No se observó un segundo script de GTM escrito en componentes. Consentimiento inicial denegado, decisiones persistidas y lead tras éxito son bases existentes.

Pendientes: comprobar DebugView/Tag Assistant y propiedad Ads; revisar page_view al aceptar consentimiento para evitar duplicación; distinguir newsletter de contacto comercial al contar leads. No se cambiaron IDs.

Eventos sugeridos: `contact_navigation`, `whatsapp_click`, `email_click`, `service_cta`, `project_view` y `generate_lead` de contacto exitoso. Añadir `service_type`, `placement` y ruta; nunca email, teléfono o texto libre. Un click a WhatsApp expresa interés, no un lead recibido ni una venta.

## Control de calidad

- Build de producción Nuxt completado (ID final `7057839e-77ab-4772-8e92-4180f61db8a9`) y firma de fuentes verificada; genera las cinco rutas prerenderizadas configuradas.
- `nuxt typecheck` completado sin errores. No existe script de lint ni suite de tests del frontend declarada; no se presenta un lint inexistente como aprobado.
- Laravel: 192 tests, 638 assertions, todos pasan, incluidos seis nuevos de visibilidad del blog.
- Pint aplicado a PHP modificado y pruebas.
- Un intento de pruebas en SQLite no pudo ejecutarse por ausencia de driver; se repitió con la base de pruebas MySQL configurada y pasó. No se migró ni sembró la base de producción.
- Rastreo final de las 67 URLs sin títulos duplicados, parseo XML/JSON-LD, revisión de metadatos y dos enlaces editoriales rotos identificados. Página 999 del blog y artículo ausente: 404. Admin: noindex HTTP. HTML servido con Brotli: 29.204 bytes en la comprobación.
- Revisión de seis páginas en cinco anchos; comprobaciones del menú y formulario con red simulada, sin enviar leads.
- Advertencia del build: Nuxt Image indica que no encuentra binarios Sharp para linux-x64 durante empaquetado. El build finaliza; verificar una transformación IPX real en el servidor de destino antes del despliegue. La transformación IPX de una portada remota se comprobó localmente: HTTP 200, `image/webp`, 41.504 bytes. Esto no prueba que cPanel tenga los mismos binarios.

## Mejoras pendientes

1. Desplegar frontend y corrección de visibilidad del backend; aún no activos en el sitio público.
2. Resolver advisories mediante actualización compatible y suite completa; probar editor, imágenes y admin.
3. Obtener datos de campo y reducir LCP hasta ≤2,5 s; medir INP real.
4. Corregir los dos enlaces del CMS y revisar contexto de enlaces a servicios.
5. Definir landings comerciales diferenciadas y casos verificables; no lanzar páginas vacías.
6. API de blog con búsqueda/paginación y categorías, respetando contratos del admin.
7. Confirmar recepción de leads, atribución y cambios de consentimiento.
8. Auditoría manual WCAG y revisión de imágenes internas de artículos.

## Recomendaciones futuras

Presupuesto por ruta: separar JS de administración, vigilar CSS inicial y no agregar librerías visuales sin medir. Cachear contenido público solo con invalidación al publicar/editar y sin mezclar autenticación. No cachear el proxy genérico ni respuestas privadas. Mantener pruebas de draft/published y de errores de API.

Unificar gestor de paquetes en un cambio dedicado, conservar original de imágenes fuera del camino crítico, medir antes/después con tres ejecuciones y registrar mediana en CI/staging. Repetir Lighthouse en producción tras publicar y observar Search Console/CrUX durante 28 días. No añadir caché de una hora al blog si no existe invalidación.

## ¿Qué debería hacer Sysifosweb para conseguir más clientes desde su web?

Orden por impacto comercial esperado, como hipótesis a validar con leads calificados:

1. **Tres landings que permitan elegir**: web empresarial, ecommerce y software/sistemas. Para cada una: problema, destinatario, entregables, proceso, ejemplo real, dudas, qué no incluye y CTA de cotización. Automatización puede ser cuarta oferta si se distingue de sistemas.
2. **Casos reales con contexto**: convertir Faremin/StahlForm y otros proyectos autorizados en problema → solución → qué se entregó → resultado demostrable. Sin porcentajes de ventas ni testimonios sin permiso. Mientras no existan métricas, describir capacidades verificables.
3. **Cotización más fácil**: CTA “Cuéntanos qué necesitas” con servicio preseleccionado y preguntas mínimas. Explicar quién responde y siguiente paso; prometer plazo de respuesta solo si se cumple.
4. **Oferta de entrada definida**: evaluación técnica o diagnóstico de alcance con entregable concreto; decidir si es gratis o pagado según tiempo y capacidad. No publicar precios universales inventados.
5. **Demostrar propiedad y continuidad**: aclarar dominio, cuentas, código, hosting, soporte y costes recurrentes en la propuesta y FAQs visibles. Resolver objeciones antes de la reunión.
6. **Tráfico local pertinente**: perfil empresarial legítimo y ejemplos de la región; presencia nacional en servicios. Evitar clones de Coquimbo/La Serena sin contenido distinto.
7. **Blog que ayuda a decidir**: actualizar cotizaciones/precios/mantenimiento/WhatsApp con un CTA contextual. Medir artículo → servicio → contacto, no solo páginas vistas.
8. **Medir calidad comercial**: fuente, servicio solicitado, lead válido, propuesta enviada y cierre en CRM. Comparar por canal sin enviar datos personales a Analytics.

## Propuesta visual Sysifosweb 2027

Evolución progresiva desde el diseño existente, no sustitución de identidad. Las propuestas grandes no están implementadas.

| Parte | Problema actual | Cambio propuesto | Beneficio |
|---|---|---|---|
| Navbar | Mucho espacio vertical y servicio genérico | Revisar altura con pruebas; acceso claro a tipos de solución sin mega menú | Más espacio útil y orientación |
| Hero | Mensaje anterior abstracto; imagen desktop escondida en móvil | H1 concreto ya aplicado; evaluar evidencia de proyecto compacta si cabe en móvil | Comprensión rápida sin descarga inútil |
| Secciones | Repetición de promesas amplias y páginas largas | Cada bloque responde una duda del comprador; reducir repetición antes que quitar contenido útil | Lectura más fácil |
| Servicios | Tres tarjetas explican poco para decidir alcance | Tarjetas breves que enlazan a landings con requisitos y entregables | Mejor auto selección |
| Portfolio | Capturas y descripción sin medición verificable | Historias de proyectos con límites y entregables; métricas solo con evidencia | Confianza demostrable |
| Blog | Listado genérico, filtro solo cliente | Taxonomía por problema/servicio y artículos vinculados, con URLs si hay contenido suficiente | Descubrimiento y conversión |
| CTA | Verbos distintos y promesas de asesoría sin detalle | Jerarquía coherente de cotizar/consultar/ver ejemplo | Menos incertidumbre |
| Contacto | Tarjeta con efectos y nombres de campo débiles | Labels ya corregidos; simplificar adorno y explicar próximo paso | Accesibilidad y menor fricción |
| Footer | Navegación extensa y texto pequeño | Agrupar servicio, empresa y recursos; datos legibles y verificables | Cierre confiable |
| Tipografía | Dos variables TTF pesadas | WOFF2 ya aplicado; revisar escala y ancho de lectura | Mantiene identidad con menos peso |
| Ilustraciones | Imágenes conceptuales enormes | Derivados ya aplicados; evolucionar a diagramas de procesos reales | Explican valor y cargan rápido |
| Imágenes | Múltiples originales sobredimensionados | Pipeline de variantes con presupuesto por componente | Calidad consistente |
| Animaciones | Revelado y desplazamiento pueden retrasar lectura | Texto principal inmediato; movimiento breve en feedback y controles | Respuesta más rápida |
| Iconos | Decoración abundante en algunos bloques | Un sistema consistente; iconos con función y texto accesible | Menos ruido |

## Backlog de evolución

| Prioridad | Área | Problema | Impacto | Esfuerzo | Acción | Estado |
|---|---|---|---|---|---|---|
| P1 | SEO | Soft 404 de artículos | Alto | Bajo | Estado HTTP 404/503 correcto | Corregido local |
| P1 | Privacidad | Filtro público de borradores | Alto | Bajo | Forzar published y pruebas | Corregido local |
| P1 | Performance | LCP móvil fuera de meta | Alto | Alto | Trace, CSS/JS inicial y terceros; repetir mediciones | Mejorado, pendiente meta |
| P1 | Dependencias | 32 avisos npm | Alto potencial | Alto | Evaluar exposición, actualizar compatible y probar | Pendiente |
| P1 | Imágenes | Ilustraciones de varios MB | Alto | Bajo | Derivados WebP | Corregido local |
| P1 | CRO/SEO | Sin landings específicas | Alto | Alto | Definir ofertas y contenido único | Propuesto |
| P1 | Operación | Cambios solo locales | Alto | Medio | Validación staging y despliegue de ambos repos | Pendiente |
| P2 | Tipografías | TTF pesados | Medio | Bajo | WOFF2 con licencias | Corregido local |
| P2 | Metadata | Fechas/OG/hreflang inexactos | Medio | Bajo | Tags veraces y por ruta | Corregido local |
| P2 | Schema | FAQ/SearchAction no equivalentes | Medio | Bajo | Retirar y usar marcado correspondiente | Corregido local |
| P2 | Accesibilidad | Labels, targets, mensajes | Medio | Bajo | HTML accesible y comprobaciones | Corregido local |
| P2 | Blog | Destacado rompe paginación estable | Medio | Bajo | Conjunto estable y enlaces | Corregido local |
| P2 | Blog | Dos enlaces a artículos ausentes | Medio | Bajo | Actualizar en CMS tras revisar equivalencia | Pendiente |
| P2 | Blog/API | Se descargan todas las páginas | Medio creciente | Alto | Filtros server-side sin romper admin | Pendiente |
| P2 | Imágenes | Warning de empaquetado Sharp | Medio | Medio | Probar IPX y binarios en cPanel | Pendiente en destino |
| P2 | Analytics | Recepción/atribución no verificada | Alto comercial | Medio | DebugView, Ads y CRM | Pendiente |
| P2 | Confianza | Falta evidencia de resultados | Alto comercial | Medio | Casos y reseñas autorizadas | Propuesto |
| P2 | Local | Perfil y datos empresariales sin verificación | Medio | Medio | NAP y área real de servicio | Pendiente |
| P2 | Accesibilidad | Falta prueba manual AA completa | Medio | Medio | Lector de pantalla, zoom y contraste | Pendiente |
| P3 | Marca | Términos inconsistentes | Bajo | Bajo | Unificar nomenclatura | Propuesto |
| P3 | Social | OG sin composición 1200×630 normalizada | Bajo | Medio | Piezas por familia de página | Propuesto |
| P3 | Código | Componente antiguo simula envío | Bajo latente | Bajo | Marcar/retirar tras comprobar referencias | Pendiente |
| P3 | Tooling | Dos lockfiles y paquetes GTM antiguos | Bajo | Medio | Unificar instalación en cambio aislado | Pendiente |

## Evidencias y límites

Se adjuntan informes Lighthouse JSON, inventario de imágenes, rastreo de rutas/enlaces, resultados de tamaños de pantalla y capturas de la versión final. La última recompilación solo limpia un espacio final y actualiza un comentario; la medición final corresponde al mismo comportamiento y recursos. El informe está en la raíz del proyecto y en el repositorio Frontend para versionarlo junto a los cambios. La copia de `outputs` permite descargarlo desde este chat.

No se ejecutaron acciones de despliegue, envíos de correo/WhatsApp ni modificaciones del CMS de producción. No se comprobó cada combinación de navegador/dispositivo, resultados enriquecidos externos, recepción real de notificaciones, posiciones localizadas ni datos de campo. Los pendientes están diferenciados de las correcciones probadas.
