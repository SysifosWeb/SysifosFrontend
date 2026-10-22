# Rendimiento 100 y propuesta visual local — SysifosWeb

22 de octubre de 2026. Segunda iteración de optimización.

## Resultado comprobado

La **portada existente** obtuvo **100/100 en las tres mediciones móviles consecutivas**, con el mismo perfil móvil estándar de Lighthouse que la auditoría anterior. También obtuvo 100 en la medición desktop. Accesibilidad, SEO y buenas prácticas automáticas: 100 en estas ejecuciones.

No se bloquearon recursos desde Lighthouse, no se modificaron los pesos de puntuación, no se desactivó el throttling y no existe código que detecte Lighthouse o bots. La navegación real recibe la misma versión optimizada.

| Ejecución móvil | Rendimiento | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|
| 1 | 100 | 0.950 s | 1.248 s | 53 ms | 0.0170 |
| 2 | 100 | 0.950 s | 1.248 s | 40 ms | 0.0170 |
| 3 | 100 | 1.018 s | 1.237 s | 8 ms | 0.0170 |

Mediana de LCP: **1,248 s**. Transferencia inicial: **79.906 bytes**, aproximadamente 80 KB. Frente a la iteración anterior: 73 → 100; LCP 4,83 → 1,25 s; transferencia 850 → 80 KB. La primera auditoría original daba 66 puntos, LCP 9,83 s y 1,83 MB.

La evaluación corresponde a primera visita local sin consentimiento guardado. Google Analytics se inicializa al aceptar y se restaura si ya fue aceptado; ese estado incorpora recursos externos y no se presenta como medido a 100. El objetivo no se consiguió suprimiendo la medición de visitantes que consienten.

Estas son métricas de laboratorio de la portada; **no significan que cada URL del sitio dé 100, ni sustituyen INP/CrUX o datos reales de producción**. No se ha desplegado en el dominio público.

## Qué cambió

- La portada se sirve como HTML prerenderizado y un script propio de unos 4,4 KB sin comprimir, aproximadamente 1,9 KB transferidos. Evita cargar el motor de Vue para texto y enlaces estáticos.
- Menú móvil con `<details>`, teclado y Escape; navegación de documento al entrar o regresar a home. Las páginas dinámicas, blog, contacto y administración conservan Nuxt/Vue.
- Menú, links, apertura y decisiones de cookies, restauración de consentimiento, Analytics y movimiento del proyecto en desktop se mantienen mediante `public/home-interactions.js`.
- Las secciones son visibles desde el HTML. No dependen de hidratarse para mostrar contenido.
- Analytics usa inicialización manual tras consentimiento. Se evita duplicar el primer page_view; los IDs se mantienen. Hay dos implementaciones de presentación (portada estática y páginas Vue); deben conservar la misma clave `sysifos_cookie_consent`, versión 1.1, ID y significado de las decisiones. Las pruebas cubren ambos lados.
- Fuentes variables originales, mismas familias y pesos. Un subconjunto español compacto se incluye en los estilos críticos; los WOFF2 completos siguen como fallback para otros caracteres. Las licencias se conservan. `scripts/generate-critical-fonts.py` permite regenerar esos datos con fonttools[woff]/brotli; el build normal usa los activos ya preparados y no requiere Python.
- Estilos pequeños compartidos de navegación, logo, banner y footer pasan a la hoja inicial para evitar peticiones bloqueantes. Selectores de footer y navegación quedan limitados a su contenedor.
- Se evita la precarga automática de imágenes de escritorio ocultas en móvil usando la imagen del hero desde `public/img/projects`.
- Se prioriza el contenido visible frente a las precargas de módulos y se limita el prefetch de enlaces a intención de interacción.

No hubo cambio de gestor de paquetes, nuevas dependencias de producción, migración de framework, cambios de URLs, alteración del backend ni sustitución de la identidad visual.

## Archivos principales

- `nuxt.config.ts`: home prerender/noScripts, caché de activos, Analytics manual, prefetch por interacción.
- `layouts/default.vue`, `components/HomeNavigation.vue`, `components/HomePrivacy.vue`, `public/home-interactions.js`: portada progresiva.
- `components/AppNavbar.vue`, `components/Footer.vue`, breadcrumb de artículo: navegación completa al volver a home.
- `composables/useCookieConsent.ts`: inicialización tras aceptar o restaurar consentimiento.
- `assets/css/base.css`, `assets/css/main.css`: tipografía crítica y estilos compartidos.
- `components/AppHeader.vue`: imagen pública sin prefetch innecesario.
- `pages/index.vue`, directivas reveal: SSR legible y carga de interactividad acotada.
- `server/plugins/resource-priority.ts`: prioridades de descarga, sin retrasos artificiales ni detección de herramientas.

## Validación

- Build de producción completado y firma de fuentes verificada.
- Typecheck de Nuxt sin errores y diff sin errores de espacios.
- 67 URLs del sitemap rastreadas: 200, un H1, canonical y description. La portada no requiere ejecutar Vue para entregar su contenido.
- Seis páginas públicas en cinco tamaños (360, 390, 768, 1366 y 1920 px): sin overflow ni excepciones de JavaScript en la revisión.
- Menú y Escape; ausencia de Analytics antes de consentir; una inicialización y un primer page_view al aceptar; restauración de aceptación; rechazo persistente sin loader.
- Contacto: éxito con la petición interceptada; ningún lead real enviado.
- Propuesta: cinco anchos, tabs de proyectos por ratón/teclado, detalles de servicios, diálogo con Escape e imágenes cargadas.
- Lighthouse desktop de portada: rendimiento 100/100.

La suite backend de la auditoría anterior ya pasaba 192 pruebas; no se modificó PHP en esta iteración. No se certifica una auditoría manual WCAG completa ni recepción de leads en producción. El warning de empaquetado Sharp debe comprobarse en el hosting real, como se indicó en la auditoría inicial.

## Propuesta visual para revisar

Vista local: **http://127.0.0.1:3118/**

Sitio existente optimizado para comparar: **http://127.0.0.1:3121/**

La propuesta está separada del código de producción, en `outputs/propuesta-sysifosweb-2027/`. Abre su `index.html` para una revisión sin servidor, o usa la vista local para navegar. El ZIP incluye HTML, imágenes, licencias y capturas.

### Decisiones visuales

| Elemento | Evolución propuesta | Motivo |
|---|---|---|
| Navbar | Menor altura y cuatro destinos claros | Más espacio para entender la oferta |
| Hero | Tipografía protagonista y servicios explícitos | Comprensión rápida y carga ligera |
| Proyectos | Faremin/StahlForm con cambio interactivo | Evidencia real antes de promesas |
| Servicios | Tres soluciones con dudas desplegables | Elegir según problema y necesidad |
| Proceso | Cuatro pasos y equipo identificable | Reducir incertidumbre de contratación |
| Blog | Tres artículos relacionados con decisiones | Conectar educación y consultas |
| Cierre | Una llamada principal a conversar | Próximo paso claro |
| Identidad | Marca, azul y fuentes actuales | Evolución reconocible, no reemplazo de marca |

No se añadieron testimonios, clientes, resultados o métricas comerciales inventadas. Las cifras de Lighthouse de este informe pertenecen a la **portada existente optimizada**, no se atribuyen a esta propuesta visual. Su integración final deberá conservar el presupuesto de carga y repetir las mediciones.

## Revisión y siguientes pasos

Revisar en la propuesta jerarquía, tono, posición de proyectos y contenido de las tres soluciones. El botón «Criterios de diseño» explica las decisiones; los tabs de proyectos y detalles de servicios permiten probar estados reales. Los enlaces a equipo, blog y contacto abren la versión local existente.

La propuesta no está aplicada al sitio público ni sustituye todavía la portada en el repositorio. Los cambios de rendimiento sí están aplicados localmente. Tras definir la dirección visual, integrarla por secciones y medir nuevamente antes de desplegar.

## Evidencias

`LIGHTHOUSE-100-MOVIL.html`, `rendimiento-100/benchmark.json`, tres JSON móviles, JSON desktop, QA de funcionalidades/propuesta, rastreo completo, build/typecheck y capturas. Configuración móvil: Lighthouse CLI, red simulada estándar (~1,6 Mbps), RTT de 150 ms y CPU ×4; perfil limpio por ejecución. No se cambiaron estas condiciones para conseguir la puntuación.

Fuentes de implementación: [Nuxt, noScripts por ruta](https://nuxt.com/docs/3.x/api/nuxt-config#noscripts), [nuxt-gtag, inicialización manual](https://nuxt.com/modules/gtag). Se contrastaron además las APIs con los paquetes instalados.
