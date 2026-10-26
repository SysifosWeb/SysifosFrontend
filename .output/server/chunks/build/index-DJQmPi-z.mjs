import { _ as _export_sfc, g as useCookie, e as useHead, a as __nuxt_component_0$1, f as useRuntimeConfig } from './server.mjs';
import { withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { Plus, ArrowUpRight, FolderOpen, Activity, FileText, CheckCircle2 } from 'lucide-vue-next';
import { u as useFetch } from './fetch-Bbxk1Asx.mjs';
import '../nitro/nitro.mjs';
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
import 'ipx';
import 'vue-router';
import '@vue/shared';
import './asyncData-C-8lkVtE.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    const userName = useCookie("user_name");
    const { data: dashboardData, pending, error: dashboardError, refresh: refreshDashboard } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}dashboard`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$WIsOYkEBaY"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: kanbanProjectsResponse, error: kanbanProjectsError, pending: kanbanProjectsPending, refresh: refreshProjects } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}kanban/projects`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        },
        default: () => ({ data: [] })
      },
      "$x0JNH3tVA6"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const kanbanProjects = computed(() => {
      var _a;
      const projects = (_a = kanbanProjectsResponse.value) == null ? void 0 : _a.data;
      if (Array.isArray(projects)) return projects;
      return Array.isArray(projects == null ? void 0 : projects.data) ? projects.data : [];
    });
    const totalProjectTasks = computed(() => kanbanProjects.value.reduce((total, project) => total + (Number(project.cards_count) || 0), 0));
    const stats = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.stats) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.stats) || {
        total_posts: 0,
        published_posts: 0,
        draft_posts: 0,
        featured_posts: 0,
        total_contacts: 0,
        new_contacts: 0,
        replied_contacts: 0,
        total_categories: 0,
        active_categories: 0,
        total_users: 0,
        admin_users: 0
      };
    });
    const periodStats = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.periodStats) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.periodStats) || {
        posts_last_7_days: 0,
        contacts_last_7_days: 0
      };
    });
    const recentPosts = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.recentPosts) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.recentPosts) || [];
    });
    const recentContacts = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.recentContacts) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.recentContacts) || [];
    });
    const topCategories = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.topCategories) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.topCategories) || [];
    });
    const monthlyStats = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.monthlyStats) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.monthlyStats) || [];
    });
    const recentActivity = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.recentActivity) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.recentActivity) || [];
    });
    const performanceStats = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.performanceStats) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.performanceStats) || null;
    });
    const greeting = computed(() => {
      const h = (/* @__PURE__ */ new Date()).getHours();
      if (h < 12) return "Buenos d\xEDas";
      if (h < 19) return "Buenas tardes";
      return "Buenas noches";
    });
    const todayLabel = computed(
      () => (/* @__PURE__ */ new Date()).toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" })
    );
    const statCards = computed(() => [
      {
        label: "Posts",
        value: stats.value.total_posts,
        detail: [{ text: `${stats.value.published_posts} publicados` }, { text: `${stats.value.draft_posts} borradores` }],
        foot: `${periodStats.value.posts_last_7_days} nuevos esta semana`
      },
      {
        label: "Contactos",
        value: stats.value.total_contacts,
        detail: [{ text: `${stats.value.new_contacts} nuevos` }, { text: `${stats.value.replied_contacts} respondidos` }],
        foot: `${periodStats.value.contacts_last_7_days} recibidos esta semana`
      },
      {
        label: "Categor\xEDas",
        value: stats.value.total_categories,
        detail: [{ text: `${stats.value.active_categories} activas` }],
        foot: `${stats.value.total_users} usuarios \xB7 ${stats.value.admin_users} administradores`
      }
    ]);
    const maxMonthlyValue = computed(() => {
      if (!monthlyStats.value.length) return 1;
      return Math.max(1, ...monthlyStats.value.map((m) => Math.max(m.posts || 0, m.contacts || 0)));
    });
    const currentMonthActivity = computed(() => {
      if (!monthlyStats.value.length) return 0;
      const m = monthlyStats.value[monthlyStats.value.length - 1];
      return (m.posts || 0) + (m.contacts || 0);
    });
    const getStatusText = (status) => ({
      new: "Nuevo",
      read: "Le\xEDdo",
      replied: "Respondido",
      archived: "Archivado"
    })[status] || status;
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("es-CL", { year: "numeric", month: "short", day: "numeric" });
    };
    useHead({ title: "Inicio \xB7 Administraci\xF3n SysifosWeb" });
    const dashboardState = computed(() => pending.value ? "Cargando informaci\xF3n\u2026" : dashboardError.value ? "No se pudo cargar esta informaci\xF3n." : "");
    const monthHeight = (value) => `${Math.max(0, Number(value) || 0) / maxMonthlyValue.value * 100}%`;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "workspace" }, _attrs))} data-v-4c75635a><section class="welcome" data-v-4c75635a><div data-v-4c75635a><h2 data-v-4c75635a>${ssrInterpolate(greeting.value)}, ${ssrInterpolate(unref(userName) || "Admin")}</h2><p data-v-4c75635a>El trabajo del equipo, en un solo lugar.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "button",
        to: "/admin/posts/create"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { size: 16 }, null, _parent2, _scopeId));
            _push2(` Nuevo post`);
          } else {
            return [
              createVNode(unref(Plus), { size: 16 }),
              createTextVNode(" Nuevo post")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><div class="workspace-date" data-v-4c75635a><span data-v-4c75635a>SysifosWeb \xB7 Espacio de trabajo</span><time data-v-4c75635a>${ssrInterpolate(todayLabel.value)}</time></div><div class="workspace-grid" data-v-4c75635a><section class="panel projects" data-v-4c75635a><header data-v-4c75635a><div data-v-4c75635a><h3 data-v-4c75635a>Proyectos</h3><p data-v-4c75635a>Contin\xFAa donde qued\xF3 el equipo.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-link",
        to: "/admin/kanban"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todos `);
            _push2(ssrRenderComponent(unref(ArrowUpRight), { size: 15 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Ver todos "),
              createVNode(unref(ArrowUpRight), { size: 15 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      if (unref(kanbanProjectsPending)) {
        _push(`<p class="state" role="status" data-v-4c75635a>Cargando proyectos\u2026</p>`);
      } else if (unref(kanbanProjectsError)) {
        _push(`<div class="state" role="alert" data-v-4c75635a><p data-v-4c75635a>No se pudieron cargar los proyectos.</p><button class="text-link" data-v-4c75635a>Reintentar</button></div>`);
      } else if (!kanbanProjects.value.length) {
        _push(`<div class="state" data-v-4c75635a><p data-v-4c75635a>Crea el primer proyecto para organizar las tareas del equipo.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-link",
          to: "/admin/kanban"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Crear proyecto `);
              _push2(ssrRenderComponent(unref(Plus), { size: 15 }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode("Crear proyecto "),
                createVNode(unref(Plus), { size: 15 })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="project-list" data-v-4c75635a><!--[-->`);
        ssrRenderList(kanbanProjects.value.slice(0, 4), (project) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: project.id,
            to: `/admin/kanban/${project.id}`,
            class: "project-row"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(FolderOpen), { size: 20 }, null, _parent2, _scopeId));
                _push2(`<div data-v-4c75635a${_scopeId}><h4 data-v-4c75635a${_scopeId}>${ssrInterpolate(project.name)}</h4><p data-v-4c75635a${_scopeId}>${ssrInterpolate(Number(project.cards_count) || 0)} tareas registradas</p></div>`);
                _push2(ssrRenderComponent(unref(ArrowUpRight), { size: 16 }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(FolderOpen), { size: 20 }),
                  createVNode("div", null, [
                    createVNode("h4", null, toDisplayString(project.name), 1),
                    createVNode("p", null, toDisplayString(Number(project.cards_count) || 0) + " tareas registradas", 1)
                  ]),
                  createVNode(unref(ArrowUpRight), { size: 16 })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (!unref(kanbanProjectsPending) && !unref(kanbanProjectsError)) {
        _push(`<footer data-v-4c75635a>${ssrInterpolate((_c = (_b = (_a = unref(kanbanProjectsResponse)) == null ? void 0 : _a.meta) == null ? void 0 : _b.total) != null ? _c : kanbanProjects.value.length)} proyectos \xB7 ${ssrInterpolate(totalProjectTasks.value)} tareas en la selecci\xF3n cargada</footer>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="panel contacts" data-v-4c75635a><header data-v-4c75635a><div data-v-4c75635a><h3 data-v-4c75635a>Contactos recientes</h3><p data-v-4c75635a>Conversaciones por continuar.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "icon-link",
        to: "/admin/contacts",
        "aria-label": "Ver todos los contactos"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowUpRight), { size: 18 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ArrowUpRight), { size: 18 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      if (dashboardState.value) {
        _push(`<div class="state"${ssrRenderAttr("role", unref(dashboardError) ? "alert" : "status")} data-v-4c75635a><p data-v-4c75635a>${ssrInterpolate(dashboardState.value)}</p>`);
        if (unref(dashboardError)) {
          _push(`<button class="text-link" data-v-4c75635a>Reintentar</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (!recentContacts.value.length) {
        _push(`<p class="state" data-v-4c75635a>Todav\xEDa no hay contactos recibidos.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(dashboardState.value ? [] : recentContacts.value.slice(0, 2), (contact) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: contact.id,
          to: `/admin/contacts/${contact.id}`,
          class: "contact-row"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="avatar" data-v-4c75635a${_scopeId}>${ssrInterpolate((contact.name || "?").charAt(0).toUpperCase())}</span><div data-v-4c75635a${_scopeId}><h4 data-v-4c75635a${_scopeId}>${ssrInterpolate(contact.name)}</h4><p data-v-4c75635a${_scopeId}>${ssrInterpolate(contact.subject || contact.email)}</p><small data-v-4c75635a${_scopeId}>${ssrInterpolate(contact.time_ago || formatDate(contact.created_at))}</small></div><span class="${ssrRenderClass([{ unread: contact.status === "new" }, "status"])}" data-v-4c75635a${_scopeId}>${ssrInterpolate(getStatusText(contact.status))}</span>`);
            } else {
              return [
                createVNode("span", { class: "avatar" }, toDisplayString((contact.name || "?").charAt(0).toUpperCase()), 1),
                createVNode("div", null, [
                  createVNode("h4", null, toDisplayString(contact.name), 1),
                  createVNode("p", null, toDisplayString(contact.subject || contact.email), 1),
                  createVNode("small", null, toDisplayString(contact.time_ago || formatDate(contact.created_at)), 1)
                ]),
                createVNode("span", {
                  class: ["status", { unread: contact.status === "new" }]
                }, toDisplayString(getStatusText(contact.status)), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section><section class="panel metrics" aria-label="Resumen de contenido"${ssrRenderAttr("aria-busy", unref(pending))} data-v-4c75635a><!--[-->`);
      ssrRenderList(statCards.value, (card) => {
        _push(`<div class="metric" data-v-4c75635a><span data-v-4c75635a>${ssrInterpolate(card.label)}</span><strong data-v-4c75635a>${ssrInterpolate(unref(pending) ? "\u2026" : unref(dashboardError) ? "\u2014" : card.value)}</strong>`);
        if (!unref(pending) && !unref(dashboardError)) {
          _push(`<!--[--><p data-v-4c75635a>${ssrInterpolate(card.detail.map((d) => d.text).join(" \xB7 "))}</p><small data-v-4c75635a>${ssrInterpolate(card.foot)}</small><!--]-->`);
        } else {
          _push(`<p data-v-4c75635a>${ssrInterpolate(unref(pending) ? "Cargando\u2026" : "Informaci\xF3n no disponible")}</p>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></section><section class="panel chart-panel" data-v-4c75635a><header data-v-4c75635a><div data-v-4c75635a><h3 data-v-4c75635a>Actividad mensual</h3><p data-v-4c75635a>Posts creados y contactos recibidos.</p></div><span class="legend" data-v-4c75635a><span data-v-4c75635a><i class="post-key" data-v-4c75635a></i> Posts</span><span data-v-4c75635a><i class="contact-key" data-v-4c75635a></i> Contactos</span></span></header>`);
      if (dashboardState.value) {
        _push(`<div class="state" data-v-4c75635a><p data-v-4c75635a>${ssrInterpolate(dashboardState.value)}</p>`);
        if (unref(dashboardError)) {
          _push(`<button class="text-link" data-v-4c75635a>Reintentar</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (!monthlyStats.value.length) {
        _push(`<p class="state" data-v-4c75635a>Todav\xEDa no hay actividad mensual registrada.</p>`);
      } else {
        _push(`<!--[--><div class="chart-scale" data-v-4c75635a><span data-v-4c75635a>${ssrInterpolate(maxMonthlyValue.value)}</span><span data-v-4c75635a>0</span></div><div class="chart" role="list" aria-label="Actividad por mes" data-v-4c75635a><!--[-->`);
        ssrRenderList(monthlyStats.value, (month) => {
          _push(`<div class="month" role="listitem"${ssrRenderAttr("aria-label", `${month.month_short}: ${month.posts || 0} posts, ${month.contacts || 0} contactos`)} data-v-4c75635a><div class="bars" data-v-4c75635a><div class="post-bar" style="${ssrRenderStyle({ height: monthHeight(month.posts) })}"${ssrRenderAttr("title", `${month.posts || 0} posts`)} data-v-4c75635a></div><div class="contact-bar" style="${ssrRenderStyle({ height: monthHeight(month.contacts) })}"${ssrRenderAttr("title", `${month.contacts || 0} contactos`)} data-v-4c75635a></div></div><span data-v-4c75635a>${ssrInterpolate(month.month_short)}</span></div>`);
        });
        _push(`<!--]--></div><!--]-->`);
      }
      _push(`</section><section class="panel activity" data-v-4c75635a><header data-v-4c75635a><div data-v-4c75635a><h3 data-v-4c75635a>Actividad reciente</h3><p data-v-4c75635a>Lo \xFAltimo en SysifosWeb.</p></div>`);
      _push(ssrRenderComponent(unref(Activity), { size: 18 }, null, _parent));
      _push(`</header>`);
      if (dashboardState.value) {
        _push(`<p class="state" data-v-4c75635a>${ssrInterpolate(dashboardState.value)}</p>`);
      } else if (!recentActivity.value.length) {
        _push(`<p class="state" data-v-4c75635a>Todav\xEDa no hay actividad reciente.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(dashboardState.value ? [] : recentActivity.value.slice(0, 4), (activity, index2) => {
        _push(`<div class="activity-row" data-v-4c75635a><span class="activity-dot" data-v-4c75635a></span><div data-v-4c75635a><p data-v-4c75635a><b data-v-4c75635a>${ssrInterpolate(activity.user)}</b> ${ssrInterpolate(activity.action)} <b data-v-4c75635a>${ssrInterpolate(activity.title)}</b></p><small data-v-4c75635a>${ssrInterpolate(activity.time_ago)}</small></div></div>`);
      });
      _push(`<!--]--></section><section class="panel posts" data-v-4c75635a><header data-v-4c75635a><h3 data-v-4c75635a>Posts recientes</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-link",
        to: "/admin/posts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver todos `);
            _push2(ssrRenderComponent(unref(ArrowUpRight), { size: 15 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Ver todos "),
              createVNode(unref(ArrowUpRight), { size: 15 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      if (dashboardState.value) {
        _push(`<p class="state" data-v-4c75635a>${ssrInterpolate(dashboardState.value)}</p>`);
      } else if (!recentPosts.value.length) {
        _push(`<p class="state" data-v-4c75635a>Todav\xEDa no hay posts. Tu pr\xF3xima publicaci\xF3n empieza aqu\xED.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(dashboardState.value ? [] : recentPosts.value.slice(0, 3), (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.id,
          to: `/admin/posts/${post.id}`,
          class: "post-row"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(FileText), { size: 18 }, null, _parent2, _scopeId));
              _push2(`<div data-v-4c75635a${_scopeId}><h4 data-v-4c75635a${_scopeId}>${ssrInterpolate(post.title)}</h4><p data-v-4c75635a${_scopeId}>${ssrInterpolate(formatDate(post.created_at))}</p></div><span class="status" data-v-4c75635a${_scopeId}>${ssrInterpolate(post.is_published || post.status === "published" ? "Publicado" : "Borrador")}</span>`);
            } else {
              return [
                createVNode(unref(FileText), { size: 18 }),
                createVNode("div", null, [
                  createVNode("h4", null, toDisplayString(post.title), 1),
                  createVNode("p", null, toDisplayString(formatDate(post.created_at)), 1)
                ]),
                createVNode("span", { class: "status" }, toDisplayString(post.is_published || post.status === "published" ? "Publicado" : "Borrador"), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section>`);
      if (!dashboardState.value && topCategories.value.length) {
        _push(`<section class="panel categories" data-v-4c75635a><header data-v-4c75635a><h3 data-v-4c75635a>Categor\xEDas m\xE1s activas</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-link",
          to: "/admin/categories"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Gestionar `);
              _push2(ssrRenderComponent(unref(ArrowUpRight), { size: 15 }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode("Gestionar "),
                createVNode(unref(ArrowUpRight), { size: 15 })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><!--[-->`);
        ssrRenderList(topCategories.value.slice(0, 4), (category) => {
          _push(`<div class="category-row" data-v-4c75635a><span data-v-4c75635a>${ssrInterpolate(category.name)}</span><strong data-v-4c75635a>${ssrInterpolate(category.blog_posts_count || 0)} <small data-v-4c75635a>posts</small></strong></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
      if (!dashboardState.value && performanceStats.value) {
        _push(`<section class="panel performance" data-v-4c75635a><header data-v-4c75635a><h3 data-v-4c75635a>Rendimiento</h3>`);
        _push(ssrRenderComponent(unref(CheckCircle2), { size: 18 }, null, _parent));
        _push(`</header><div class="category-row" data-v-4c75635a><span data-v-4c75635a>Contactos por d\xEDa</span><strong data-v-4c75635a>${ssrInterpolate(performanceStats.value.avg_contacts_per_day || 0)}</strong></div><div class="category-row" data-v-4c75635a><span data-v-4c75635a>Actividad este mes</span><strong data-v-4c75635a>${ssrInterpolate(currentMonthActivity.value)}</strong></div>`);
        if (performanceStats.value.most_active_category) {
          _push(`<p class="performance-note" data-v-4c75635a>${ssrInterpolate(performanceStats.value.most_active_category.name)} \xB7 ${ssrInterpolate(performanceStats.value.most_active_category.published_posts_count)} posts publicados</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c75635a"]]);

export { index as default };
//# sourceMappingURL=index-DJQmPi-z.mjs.map
