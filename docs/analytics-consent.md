# Analítica y consentimiento de SysifosWeb

Estado: implementado y probado localmente. La publicación y los ajustes de la propiedad GA4 se realizan por separado.

## Arquitectura

Se mantiene el sistema propio, sin CMP externa ni dependencias nuevas. `public/consent.js` es el único dueño del estado y de la carga de Google. Lo carga `app.head` en todas las páginas, incluida la portada prerenderizada con `noScripts: true`. Esta portada conserva su JavaScript ligero para menú y efectos; no incorpora hidratación Vue por esta mejora.

`HomePrivacy.vue` contiene el banner y un `<dialog>` nativo para preferencias, montados una sola vez desde `app.vue`. El script utiliza los mismos controles en la portada y las rutas hidratadas. `plugins/consent.client.ts` informa de la navegación Nuxt después de resolver cada página. Los layouts dejan de montar banners independientes; «Nosotros» también queda cubierto. `CookieConsent.vue` y el composable conservan adaptadores al sistema compartido.

`nuxt-gtag` permanece en package.json y el lock, pero deja de ser un módulo activo: no puede inicializar otra cola o etiqueta en paralelo. No se carga un contenedor GTM. El antiguo ID `GTM-TWB2W6T9` solo figura en respaldos/informes históricos. El único Measurement ID activo sigue siendo `G-3BJ0HZ6RSH`.

## Flujo inicial

1. Crear `dataLayer` y el stub oficial `gtag` con objetos `arguments`.
2. Encolar `consent default` con los cuatro permisos denegados, antes de cualquier `config` o evento.
3. Leer y validar la preferencia local.
4. Encolar `consent update` según el permiso válido. Publicidad permanece denegada siempre.
5. Si existe aceptación válida, cargar una sola etiqueta `gtag.js`, configurar GA4 y emitir una vista de la ruta actual.
6. Sin preferencia válida, mostrar el banner inmediatamente. Sin aceptación no se descarga Google ni se encolan eventos GA4.
7. Si existe rechazo válido, ocultar el banner y conservar denegación.

Se utiliza Consent Mode v2 básico: no se envían pings previos al consentimiento a Google. Retirar un consentimiento cuando la biblioteca ya estaba cargada encola `update`, activa `ga-disable-G-3BJ0HZ6RSH` y elimina cookies propias de Google accesibles. Una biblioteca ya descargada no puede «desdescargarse»; no se promete cancelar peticiones que ya estaban en vuelo.

## Estados

| Acción | analytics_storage | ad_storage / ad_user_data / ad_personalization |
|---|---|---|
| Nuevo / inválido / caducado | denied | denied |
| Aceptar analítica | granted | denied |
| Rechazar analítica | denied | denied |
| Guardar preferencias | según casilla de analítica | denied |

No se ofrece publicidad porque el banner autoriza exclusivamente analítica. Se eliminó la conversión directa `AW-17809723983/Xs8DCL2-sNIbEM-kq6xc` del contacto. Reactivarla requerirá una finalidad publicitaria y una integración que respete esa elección.

## Almacenamiento

Clave: `localStorage.sysifos_cookie_consent`.

```json
{
  "version": "2.0",
  "timestamp": "2026-10-23T00:00:00.000Z",
  "preferences": { "necessary": true, "analytics": false, "advertising": false }
}
```

Validez: 180 días desde la elección; se valida al cargar y al sincronizar otra pestaña. Se rechazan JSON corrupto, fechas futuras, versiones diferentes o preferencias incompletas. La versión 1.1 vuelve a solicitar elección: concedía publicidad junto con analítica y no puede trasladarse silenciosamente al significado nuevo. Bloquear almacenamiento no impide elegir para el documento actual; la próxima visita volverá a preguntar. Borrar el almacenamiento desde otra pestaña vuelve a denegar.

La configuración GA establece duración máxima solicitada de cookies de 180 días y `cookie_update: false`. El navegador puede imponer límites menores. Al retirar se eliminan `_ga`, `_ga_*`, `_gid`, `_gat*`, `_gac_*` y `_gcl_*` visibles, para dominio propio/padres y rutas aplicables. Se conservan otras cookies del sitio. JavaScript no puede borrar cookies HttpOnly, de terceros o de otros dominios, ni datos ya recibidos por Google.

## Eventos

Todos los eventos de consentimiento se notifican en `sysifos:consent-event` y se registran mediante `POST /api/consent-events` sin credenciales/cookies. Solo si la analítica está concedida en ese instante se envía también una copia a GA4. No se reproducen retroactivamente eventos anteriores al permiso.

| Evento | Momento |
|---|---|
| consent_banner_view | Primera presentación del banner en el documento sin decisión válida |
| consent_accept | Botón Aceptar |
| consent_reject | Botón Rechazar |
| consent_preferences_open | Apertura del diálogo desde Configurar o el pie de página |
| consent_preferences_save | Guardado de la casilla del diálogo |
| consent_change | Una decisión previa cambia entre permitido y rechazado |

`context` distingue `initial` de `settings`. `first_interaction` marca una sola primera acción inicial (aceptar, rechazar o abrir preferencias) por documento. Abrir/cerrar varias veces el diálogo no aumenta este contador. Guardar en preferencias genera `consent_preferences_save`; no genera además `consent_accept` o `consent_reject`.

Es normal que `consent_banner_view` inicial, `consent_reject` y `consent_change` hacia rechazo NO aparezcan en GA4/DebugView: en esos momentos no hay permiso analítico. Se verifican en el evento local y el registro Laravel. Medir el embudo solo con GA4 sesgaría las tasas hacia quienes aceptan.

Contacto: `generate_lead` después de respuesta satisfactoria y solo con analítica permitida. Newsletter: `sign_up` después de 201 (alta nueva); no cuenta como lead comercial ni vuelve a medir una suscripción existente con 200. Los campos personales del formulario no se incluyen en estos eventos. No deben añadirse llamadas directas a gtag en componentes; utilizar `window.SysifosConsent.track(...)`.

## Backend y métricas

Archivos: `ConsentEventController`, `ConsentEvent`, migración `create_consent_events_table`, rutas API/consola y `GetConsentStats` en SysifosBackend.

El endpoint público valida evento, versión, contexto y booleanos; limita a 60 peticiones/minuto por el middleware existente de Laravel. Solo guarda evento, versión, contexto, permiso analítico, primera interacción y fecha del servidor. No guarda IP, user-agent, URL, contenido de formularios ni identificador de visitante en esa tabla. No requiere autenticación porque deben poder registrar su elección visitantes nuevos. Los registros de infraestructura y la clave temporal del limitador de frecuencia son mecanismos separados y requieren revisar su propia retención.

Los eventos se conservan 90 días mediante MassPrunable y una tarea diaria `model:prune` limitada a ConsentEvent. El scheduler de Laravel debe estar activo. La transacción conserva además decisiones en la tabla histórica `consent_decisions` para no romper los informes existentes. Esa tabla histórica tiene su retención previa, no la purga de 90 días de eventos. La ruta antigua `/api/consent` se conserva para clientes anteriores durante la transición.

La herramienta MCP existente `get-consent-stats` devuelve además `banner_funnel`:

- Tasa de aceptación = decisiones iniciales aceptadas / decisiones iniciales totales × 100.
- Tasa de rechazo = decisiones iniciales rechazadas / decisiones iniciales totales × 100.
- Tasa de interacción = primeras interacciones iniciales / banners mostrados × 100.
- Decisiones por impresión = decisiones iniciales / banners mostrados × 100.
- Aperturas de preferencias: contador adicional; puede superar primeras interacciones si una persona abre varias veces.

No son tasas por visitantes únicos: no existe identificador persistente para deduplicar personas o recargas. Una recarga sin elegir es una nueva impresión; cambios posteriores de preferencias se excluyen de las decisiones iniciales. Bloqueadores, fallos de red y límites de frecuencia pueden producir pérdidas y desajustes; no existe garantía de entrega exactamente una vez. Se evita reintentar automáticamente para no duplicar registros. Los periodos que cruzan el límite de retención o el momento de despliegue tienen datos parciales. `totals` conserva las métricas históricas de decisiones; no confundir su denominador con `banner_funnel`.

## Page views y ajustes imprescindibles en GA4

`send_page_view: false` desactiva la vista del comando config. El servicio emite una vista al aceptar/restaurar y por cambio de pathname, incluido Atrás/Adelante; no repite una vista al abrir preferencias, cambiar hash, volver a aceptar en la misma página ni al repetirse page:finish. Una recarga sí cuenta una nueva vista. Se minimizan location/referrer eliminando querystring y hash; esto también elimina atribución UTM en esos parámetros explícitos. No se mide `/admin` mediante este servicio. Google Signals y personalización publicitaria se configuran en falso.

**Ajuste fuera del repositorio, pendiente de acceso a GA4:** en Administrar → Recogida y modificación de datos → Flujos de datos → flujo web `G-3BJ0HZ6RSH` → Medición mejorada → Vistas de página → ajustes avanzados, desactivar «Cambios de página basados en eventos del historial del navegador». Google documenta que esa medición puede seguir activa aunque send_page_view sea false. Revisar también búsqueda interna, formularios, destinos conectados y etiquetas Google adicionales para evitar recopilaciones automáticas que no formen parte de esta implementación. No se ha comprobado ni cambiado la propiedad remota o un contenedor GTM.

## UX y accesibilidad

Banner no modal, sin robar foco al aparecer. Aceptar, rechazar y configurar tienen igual tratamiento visual y botones de al menos 48 px. Texto legible y contraste alto. Aparece al iniciar, sin temporizador de 45 s ni requisito de scroll. El diálogo nativo proporciona semántica modal, fondo inerte, Escape y cierre sin guardar. Se limita Tab/Shift+Tab a controles utilizables, se enfoca la casilla de analítica y se devuelve el foco al control de origen o al enlace del pie. Contenido desplazable en pantallas cortas, ancho limitado al viewport y sin animaciones nuevas. La opción necesaria queda marcada y deshabilitada; la analítica inicia desmarcada.

## Debug y verificación manual

1. En una copia local, abrir `/servicios?consent_debug=1`. El modo debug se activa solo en localhost/127.0.0.1. Añade debug_mode a GA4 cuando exista permiso y muestra eventos `[consent]` en Console. No concede permiso por sí mismo.
2. DevTools → Application → Local Storage: borrar únicamente `sysifos_cookie_consent`. Application → Cookies: borrar cookies GA de la prueba. Recargar con Network abierto y Preserve log.
3. Antes de elegir: banner visible; cero carga de gtag.js/gtm.js y cero cookies GA. Console: `window.dataLayer.map(x => Array.from(x))` muestra default con los cuatro denied y ninguna config/event de Google.
4. Pulsar Rechazar: se guarda versión 2.0 con analytics false; Network muestra consent-events con consent_reject, sin peticiones Google. Recargar: no reaparece el banner.
5. «Configurar cookies» → marcar analítica → Guardar: analytics_storage granted y publicidad denied. Network debe mostrar una sola descarga de gtag.js para el Measurement ID; una vista de la página actual.
6. Navegar por enlaces internos, Atrás y Adelante. Inspeccionar collect y `en=page_view`; comprobar una vista por página. Eliminar el filtro para revisar posibles cargas de Google adicionales procedentes de configuración remota.
7. Reabrir preferencias, desmarcar, guardar. Ver update denied, ga-disable true, desaparición de cookies GA propias y consent_change en la métrica local; no exigir ese evento en GA4 al rechazar. Volver a marcar no debe cargar otra etiqueta ni duplicar la vista actual.
8. Repetir desde la portada y Nosotros; probar restauración de aceptación y rechazo tras recargar. Abrir otra pestaña y retirar allí: la primera debe actualizar su estado.
9. Emular 360×640 y 320×568: no overflow horizontal; botones del banner accesibles. El diálogo admite scroll para pantallas cortas. Probar Tab, Shift+Tab, Enter y Escape; comprobar retorno de foco. Aumentar texto/zoom como comprobación adicional de accesibilidad.
10. Abrir Tag Assistant y conectar la copia de prueba publicada. En modo básico es normal que no detecte una etiqueta Google antes de aceptar. Tras aceptar, revisar Consent: default cuatro denied; update solo analytics granted; orden default anterior a config/event. No debe aparecer el contenedor GTM antiguo ni dos etiquetas del mismo ID.
11. GA4 → Administrar → DebugView: elegir dispositivo de prueba con debug_mode. Revisar page_view, consent_accept, consent_preferences_open/save y consent_change al conceder. Para ver consent_accept usar una elección inicial con debug habilitado; para preferencias usar una sesión ya aceptada. Validar banner_view/reject/retirada con `sysifos:consent-event` y Laravel, pues se descartan de GA4 sin permiso. No relajar el consentimiento para conseguir que aparezcan allí.
12. En producción sin debug comprobar recepción en informes tras su latencia normal y confirmar filtros de tráfico de desarrollador/interno. No activar debug público por defecto.

Para escuchar eventos locales, ejecutar antes de interactuar:

```js
window.addEventListener('sysifos:consent-event', event => console.log(event.detail))
window.SysifosConsent.getState()
```

## Testing

Sin añadir dependencias al producto. Pruebas de navegador reales con Playwright del runtime de herramientas; interceptan Google y la API de métricas para no generar tráfico falso. Verifican la aplicación y la cola de comandos, no la recepción remota de GA4 ni cookies creadas por una biblioteca Google real.

```bash
# Frontend, desde su raíz: iniciar en una terminal y dejarla abierta
HOST=127.0.0.1 PORT=3218 node .output/server/index.mjs

# Ejecutar las pruebas desde otra terminal, también en la raíz del frontend
NODE_PATH=/home/osman-ahumada/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules CONSENT_TEST_URL=http://127.0.0.1:3218 node --test scripts/consent.browser.test.cjs
node --test scripts/check-production-build.test.cjs scripts/restart-production.test.cjs
./node_modules/.bin/nuxt typecheck
npm run build

# Backend, base de datos sysifos_api_test según phpunit.xml
php artisan test --compact --filter=ConsentEventTest
php artisan test --compact
vendor/bin/pint --dirty --format agent
```

El runner acepta CHROME_BIN y CONSENT_TEST_URL. La ruta NODE_PATH depende del runtime local; en otro equipo puede usarse un Playwright ya disponible sin instalarlo como dependencia del sitio. No hay script lint declarado en package.json; no se inventa un resultado de lint. La base MySQL de pruebas requiere conectividad local; no ejecutar RefreshDatabase contra producción.

## Publicación

1. Publicar primero el backend y ejecutar su migración nueva mediante el procedimiento de despliegue del proyecto. Verificar endpoint y scheduler. No ejecutar migraciones destructivas ni modificar las anteriores.
2. Ajustar la propiedad GA4 para desactivar vistas automáticas por historial y revisar etiquetas/destinos vinculados.
3. Publicar el frontend con `.output` completo generado por npm run build y su firma de fuentes. El repositorio versiona .output: la regeneración cambia nombres de chunks; no mezclar HTML de un build con assets de otro. Purgar caché antigua de consent.js/home-interactions.js si existe.
4. Ejecutar la verificación manual anterior en la versión publicada.

En esta tarea no se publica, reinicia producción ni migra su base de datos. La migración sí se ejercita en la base de pruebas. Pendientes externos: recepción real en Tag Assistant/DebugView, ajustes de propiedad y revisión legal de política, retenciones, uso del registro operativo del banner y transferencias/proveedor Google. No se afirma cumplimiento legal absoluto.

## Fuentes técnicas

- [Google: Consent Mode y modo básico](https://developers.google.com/tag-platform/security/concepts/consent-mode).
- [Google: integración propia y orden default/update](https://developers.google.com/tag-platform/security/guides/consent).
- [Google: vistas manuales y medición mejorada por historial](https://developers.google.com/analytics/devguides/collection/ga4/views).
