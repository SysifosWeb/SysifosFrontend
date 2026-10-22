# Revisión técnica del sitio actual

Fecha: 22 de octubre de 2026. La propuesta visual quedó descartada y separada del proyecto. Esta revisión mantiene el diseño actual. Cambios locales, sin publicar.

## Cambios realizados

- **Blog y API:** `per_page` admite de 1 a 100 elementos, con validación y valor predeterminado de 10. El catálogo solicita 100; con los 59 artículos actuales permite pasar de seis consultas a una cuando se publique el backend actualizado. El frontend sigue recorriendo páginas si una API antigua ignora ese parámetro. Los artículos con igual fecha tienen un orden estable por ID.
- **Fallos visibles para buscadores:** blog, RSS y sitemap devuelven HTTP 503 si falla la API o devuelve una estructura inválida. Un catálogo legítimamente vacío sigue devolviendo 200. El sitemap ya no publica solamente las páginas estáticas cuando no logra consultar los artículos; se corrigió también la captura silenciosa de errores del módulo. RSS y sitemap indican reintento en 60 segundos y evitan almacenar la respuesta de error.
- **RSS:** reúne hasta 50 artículos incluso con una API antigua que entrega 10 por página. Escapa texto XML, codifica las rutas de los artículos y omite fechas inválidas.
- **Cookies:** el enlace directo `#cookies` abre el panel después de completar la inicialización de Nuxt. Lectura y escritura protegidas frente al bloqueo del almacenamiento del navegador. Las decisiones guardadas se validan; un registro inválido no equivale a aceptar seguimiento.
- **Dependencias:** retirados `@nuxtjs/gtm`, `@zadigetvoltaire/nuxt-gtm` y `@nuxtjs/google-fonts`, sin uso en la configuración activa. Aplicados parches compatibles, sin `--force`. Desactivado `componentIslands`, que no se utiliza.

## Seguridad y límites

La auditoría completa de npm, incluyendo dependencias de desarrollo, pasó de **42 a 21 avisos**: antes 16 bajos, 7 moderados, 17 altos y 2 críticos; después 6 moderados y 15 altos, sin críticos. Son entradas del árbol de dependencias, no 21 ataques demostrados contra el sitio.

Quedan avisos vinculados a Nuxt 3, Tailwind 3 y la cadena antigua de imágenes/IPX/Sharp. El `sharp` directo actualizado no sustituye el `sharp` antiguo incluido por IPX. No se forzaron versiones incompatibles ni se declara resuelta toda la seguridad. La siguiente prioridad es una migración aislada y comprobada del framework y sus módulos.

Nuxt 3 terminó su mantenimiento y algunos avisos requieren una rama posterior. La configuración actual utiliza reglas de rutas para caché y no indexación, por lo que debe revisarse su comportamiento ante diferencias de mayúsculas durante esa migración. Las autorizaciones del backend requieren su propia verificación y no se reemplazan por reglas del frontend.

Fuentes oficiales: [avisos de Nuxt](https://github.com/nuxt/nuxt/security/advisories), [reglas de rutas y mayúsculas](https://github.com/nuxt/nuxt/security/advisories/GHSA-vjh5-4x84-xrqp), [releases de Nuxt](https://github.com/nuxt/nuxt/releases).

## Verificación

- Backend: **198 pruebas correctas y 657 aserciones**, con comprobaciones nuevas de paginación, límite, orden y exclusión de borradores. Formato PHP comprobado.
- Catálogo compartido: **12 pruebas correctas**, incluidas respuestas inválidas y fallo de una página intermedia sin devolver un resultado parcial.
- Integración: **20 escenarios correctos** para blog, fuente del sitemap, sitemap público y RSS, con API actualizada, antigua, vacía, caída y malformada. Con API actualizada: una consulta por solicitud; con la antigua se conserva el recorrido completo.
- Cookies: cuatro escenarios correctos en portada y página interior, con almacenamiento bloqueado o decisión inválida; rechazo y aceptación sin excepciones.
- Navegador: 30 combinaciones de rutas y tamaños sin desbordamiento, menú móvil, consentimiento y formulario de contacto con envío interceptado. Sin contactos reales enviados.
- Optimización de imágenes: respuesta WebP correcta en `/_ipx/`; ruta de islas desactivada devuelve 404. Página inexistente del blog devuelve 404.

- Compilación de producción y comprobación de tipos correctas.
- Portada local, Lighthouse móvil: **100/100 rendimiento**, 100/100 accesibilidad, 100/100 buenas prácticas y 100/100 SEO. LCP 1.31 s, TBT 10 ms y CLS 0.0170.

Las mediciones locales de la portada no equivalen a una garantía para todas las rutas, estados de consentimiento o condiciones de producción. Las mejoras de consultas necesitan publicar también el backend. Se conserva el catálogo completo para mantener los filtros actuales; una paginación y búsqueda totalmente del servidor requiere otro cambio si el volumen crece mucho.
