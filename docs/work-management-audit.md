# Gestión de trabajo: auditoría y primera entrega

Fecha: 2026-10-25. Alcance de esta entrega: proyectos, miembros, configuración y autorización del Kanban existente. La aplicación completa solicitada sigue en desarrollo.

## Evidencia inicial

- Backend: `app/Models/KanbanProject.php`, `KanbanCard.php`, `KanbanActivity.php`; `app/Http/Controllers/Admin/KanbanController.php`; `routes/api.php`.
- Tareas existentes: estados backlog/todo/in_progress/review/done; prioridad independiente; posición por columna; múltiples responsables; vencimiento; creador/editor; versión de tarea y revisión de proyecto. Movimientos y actividad transaccionales. Presencia mediante caché y sondeo HTTP.
- Brecha inicial: todos los administradores/editores activos podían leer y modificar todos los proyectos; no había miembros, clave, responsable de proyecto, archivo o permisos propios.
- Frontend: `pages/admin/kanban/index.vue` y `[project].vue`. Lista/tablero con filtros compartidos en URL; alternativa al arrastre mediante selector; control de conflictos y editor que conserva entradas al fallar.
- Cambios locales preexistentes preservados: layout/dashboard/tablero frontend; BlogPostController, EloquentBlogPostRepository y pruebas de blog backend.
- Referencia inicial: 25 pruebas Kanban/170 aserciones; 20 pruebas Node. SQLite no está instalado; la suite se ejecuta con MySQL en la base dedicada `sysifos_api_test`.

## Entorno comprobado y límites

Instalado localmente: PHP 8.3.6, Laravel 13.35.0, Sanctum 4.3.3, PHPUnit 12.5.39, Node 24.14.0, Nuxt 3.21.5, Vue 3.5.34, SortableJS 1.15.7 y MySQL 8.0.46/InnoDB.

Los archivos `.cpanel.yml` declaran despliegue cPanel, PHP 8.3 y Node 22 mediante CloudLinux. `ecosystem.config.cjs` contiene una alternativa PM2, no evidencia de que se use. `routes/console.php` define tareas programadas; no confirma que cron esté instalado en el alojamiento. `config/filesystems.php` distingue almacenamiento privado/local y público. No se ha accedido al servidor remoto: versión exacta de MySQL, permisos de almacenamiento, cron y trabajadores remotos pendientes de verificación. Esta entrega no requiere colas, Redis ni procesos PHP persistentes.

Laravel Boost no está expuesto como herramienta en esta sesión. Se contrastaron las APIs con el framework instalado y la documentación oficial de Laravel 13.

## Modelo y permisos

- Usuario: identidad y rol global existente (admin/editor/user), cuenta activa requerida.
- Proyecto: contenedor estable de trabajo; ID histórico conservado, clave única e inmutable, nombre y descripción editables, responsable, visibilidad, miembros, archivo y versión propia de configuración.
- Miembro: relación única proyecto/usuario; rol gestor, colaborador o lector.
- Responsable: miembro gestor. Transferirlo añade/promueve al nuevo responsable sin borrar al anterior.
- Tarea: conserva su entidad, estados, IDs, asignaciones múltiples y control de versión. No se confunden prioridad, posición y estado. Tipos, épicas y sprints se amplían en entregas posteriores.
- Archivo: conserva tareas, relaciones, miembros e historial; bloquea modificaciones de tareas y configuración hasta recuperar.
- Actividad de configuración: registro separado semánticamente de comentarios mediante acciones y metadatos antes/después. Actor y fecha persistidos; sin inventar comentarios.

| Acción | Admin global | Gestor | Colaborador | Lector | Ajeno |
| --- | --- | --- | --- | --- | --- |
| Consultar proyecto, tablero e historial | Sí | Sí | Sí | Sí | No |
| Crear/editar/mover/eliminar tareas | Sí, activo | Sí, activo | Sí, activo | No | No |
| Configurar, gestionar miembros y archivar/recuperar | Sí | Sí | No | No | No |
| Buscar usuarios para incorporar | Sí | Sí | No | No | No |
| Crear proyectos | Sí | Según rol global | Según rol global | Según rol global | Según rol global |

Solo admin/editor activos crean proyectos. El rol de proyecto nunca concede rol global ni permisos editoriales. En proyectos de equipo los editores heredan colaboración, salvo rol explícito de lector; los administradores globales mantienen administración. Los proyectos privados exigen pertenencia, responsabilidad o administración global. Recursos privados no autorizados devuelven 404; operaciones prohibidas sobre recursos visibles, 403.

Asignaciones nuevas: usuarios activos que sean responsables o miembros gestores/colaboradores; en proyectos de equipo se conserva el acceso implícito de admin/editor. No se permiten asignaciones a lectores ni a administradores ajenos de proyectos privados. Retirar/demover miembros o restringir acceso exige resolver las asignaciones activas incompatibles. Las asignaciones históricas de cuentas inactivas se conservan y pueden retirarse al editar.

## Migración, copia y recuperación

Migración incremental: `2026_10_25_215500_add_project_membership_and_access.php`. Añade columnas/tablas/índices; backfill acotado por lotes. Proyectos existentes conservan visibilidad de equipo, claves deterministas SYS{id} y su creador como responsable cuando existe. No cambia IDs, tarjetas, posiciones, versiones ni actividad histórica. Nuevos proyectos privados por defecto. Clave única en la base de datos; conflictos de configuración mediante versión y bloqueo de fila compartido con las mutaciones de tareas.

Antes de desplegar sobre datos reales:
1. Pausar escrituras durante la ventana de actualización y tomar copia consistente MySQL con `mysqldump --single-transaction --routines --triggers`, usando credenciales fuera de la línea de comandos y un archivo fuera del directorio público con permisos 0600.
2. Guardar código/artefacto anterior y copia de configuración/almacenamiento privado por el mecanismo del alojamiento. No registrar secretos en Git.
3. Restaurar la copia en una base aislada y verificar proyectos, tareas, asignaciones e historial; probar la migración y recorridos con usuarios gestor/lector/ajeno.
4. Aplicar la migración incremental, publicar backend y frontend compatibles y comprobar accesos antes de reabrir escrituras.
5. Ante fallo, preferir corrección incremental. Si se restaura la copia, conservar también una copia del estado posterior para reconciliar escrituras. El rollback de esquema elimina configuración de acceso y NO es una recuperación segura de datos nuevos.

La migración se aplicó también a la base local de aplicación, después de guardar una copia privada en /home/osman-ahumada/.codex/backups/sysifos-project-access-20261025/database.sql. Se verificaron por SHA-256 todas las columnas originales de proyectos, tarjetas, asignaciones y actividad: 1 proyecto y 37 actividades intactos; no había tarjetas ni asignaciones. El ejecutor aplicó además la migración aditiva de consent_events que ya estaba pendiente. El alojamiento remoto no se ha modificado. Las migraciones antiguas desplegadas no se han modificado.

## Ruta priorizada

1. Esta entrega: proyectos, clave, responsable, miembros, roles, acceso, búsqueda/paginación, archivo/recuperación, auditoría de configuración y autorización de todas las operaciones Kanban existentes.
2. Tareas: identificador de incidencia concurrente, tipos, detalle compartible/contextual, fechas/estimación, transiciones y jerarquía.
3. Lista/tablero: búsqueda y filtros en servidor, paginación de tareas, acciones masivas y coherencia entre vistas.
4. Colaboración: comentarios, adjuntos privados, relaciones, seguidores, menciones fiables y notificaciones idempotentes.
5. Backlog/épicas/sprints opcionales con cierre explícito de incompletas e historial.
6. Calendario/agenda/timeline; métricas agregadas con alcance/período explícitos; vistas guardadas.
7. Consolidación de rendimiento, accesibilidad y despliegue. Auditar permisos de los módulos editoriales existentes: estar autenticado actualmente permite acceso amplio en varios endpoints; no se declara resuelto por los nuevos roles de proyecto.

No se incluyen botones de funcionalidades futuras ni se declara equivalencia completa con Jira.

## Comprobaciones de la entrega

- Backend completo final: 235 pruebas, 920 aserciones; 48 pruebas de proyectos y Kanban, incluidas migración, permisos, versiones y revocación de acceso.
- Frontend: 20 pruebas Node; vue-tsc sin errores; compilación de producción y comprobador de artefactos correctos.
- Recorrido real navegador/API/MySQL dedicado: crear proyecto, recargar, editar, incorporar un miembro, archivar/recuperar, provocar conflicto y conservar borrador, mantener filtros al pasar por configuración, consultar como lector y rechazar acceso directo a otro proyecto.
- Vistas comprobadas a 1440, 768 y 390 px sin desbordamiento de la página; diálogo de tarea cerrable con Escape; modo oscuro; sin excepciones no capturadas en navegador.
- Se corrigió el empaquetado de renderizado de unhead en nuxt.config.ts. La combinación instalada producía enlaces externos a una versión incorrecta; incluir unhead y @unhead/vue en el paquete del servidor elimina el 500 de arranque. No se añadieron dependencias.
- La compilación advierte sobre binarios de sharp en este entorno; no impidió las vistas comprobadas. Cron, trabajadores y despliegue remoto siguen pendientes de verificación real.
