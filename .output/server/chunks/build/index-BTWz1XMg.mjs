import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { withAsyncContext, computed, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { u as useCookie } from './cookie-D3QZ8Gbb.mjs';
import { u as useFetch } from './fetch-CHFNaGwH.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    const { data: dashboardData, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}dashboard`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$T_faF23Rna"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
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
        total_views: 0,
        avg_views_per_post: 0,
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
        contacts_last_7_days: 0,
        views_last_7_days: 0
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
    const popularPosts = computed(() => {
      var _a, _b, _c;
      return ((_a = dashboardData.value) == null ? void 0 : _a.popularPosts) || ((_c = (_b = dashboardData.value) == null ? void 0 : _b.data) == null ? void 0 : _c.popularPosts) || [];
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
    const getStatusText = (status) => {
      const statusMap = {
        "new": "Nuevo",
        "read": "Le\xEDdo",
        "replied": "Respondido",
        "archived": "Archivado"
      };
      return statusMap[status] || status;
    };
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const maxMonthlyValue = computed(() => {
      if (!monthlyStats.value || monthlyStats.value.length === 0) return 1;
      return Math.max(
        ...monthlyStats.value.map(
          (month) => Math.max(month.posts || 0, month.contacts || 0, (month.views || 0) / 10)
        )
      );
    });
    const currentMonthActivity = computed(() => {
      if (!monthlyStats.value || monthlyStats.value.length === 0) return 0;
      const currentMonth = monthlyStats.value[monthlyStats.value.length - 1];
      return (currentMonth.posts || 0) + (currentMonth.contacts || 0);
    });
    const getActivityIcon = (type) => {
      const icons = {
        post: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        contact: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      };
      return icons[type] || icons.post;
    };
    const getActivityColor = (color) => {
      const colors = {
        green: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
        yellow: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400",
        blue: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400",
        red: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400"
      };
      return colors[color] || colors.blue;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3f419133>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center items-center h-64" data-v-3f419133><svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-3f419133><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-3f419133></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-3f419133></path></svg></div>`);
      } else {
        _push(`<div class="p-6 space-y-6" data-v-3f419133><div class="mb-6 flex items-center justify-between" data-v-3f419133><div data-v-3f419133><h1 class="text-2xl font-semibold text-gray-900 dark:text-white" data-v-3f419133>Dashboard</h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-3f419133>Resumen y estado del sistema</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-v-3f419133><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="flex items-center" data-v-3f419133><div class="flex-shrink-0" data-v-3f419133><div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center" data-v-3f419133><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f419133><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-3f419133></path></svg></div></div><div class="ml-5 w-0 flex-1" data-v-3f419133><dl data-v-3f419133><dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate" data-v-3f419133>Total Posts</dt><dd class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate(stats.value.total_posts)}</dd></dl></div></div><div class="mt-4" data-v-3f419133><div class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133><span class="text-green-600 dark:text-green-400 font-medium" data-v-3f419133>${ssrInterpolate(stats.value.published_posts)}</span> publicados, <span class="text-yellow-600 dark:text-yellow-400 font-medium" data-v-3f419133>${ssrInterpolate(stats.value.draft_posts)}</span> borradores, <span class="text-purple-600 dark:text-purple-400 font-medium" data-v-3f419133>${ssrInterpolate(stats.value.featured_posts)}</span> desc. </div><div class="text-xs text-gray-500 mt-1" data-v-3f419133>${ssrInterpolate(periodStats.value.posts_last_7_days)} nuevos esta semana </div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="flex items-center" data-v-3f419133><div class="flex-shrink-0" data-v-3f419133><div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center" data-v-3f419133><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f419133><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-3f419133></path></svg></div></div><div class="ml-5 w-0 flex-1" data-v-3f419133><dl data-v-3f419133><dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate" data-v-3f419133>Contactos</dt><dd class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate(stats.value.total_contacts)}</dd></dl></div></div><div class="mt-4" data-v-3f419133><div class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133><span class="text-red-600 dark:text-red-400 font-medium" data-v-3f419133>${ssrInterpolate(stats.value.new_contacts)}</span> nuevos, <span class="text-green-600 dark:text-green-400 font-medium" data-v-3f419133>${ssrInterpolate(stats.value.replied_contacts)}</span> respondidos </div><div class="text-xs text-gray-500 mt-1" data-v-3f419133>${ssrInterpolate(periodStats.value.contacts_last_7_days)} esta semana </div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="flex items-center" data-v-3f419133><div class="flex-shrink-0" data-v-3f419133><div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center" data-v-3f419133><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f419133><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-3f419133></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-3f419133></path></svg></div></div><div class="ml-5 w-0 flex-1" data-v-3f419133><dl data-v-3f419133><dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate" data-v-3f419133>Total Vistas</dt><dd class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate((_a = stats.value.total_views) == null ? void 0 : _a.toLocaleString())}</dd></dl></div></div><div class="mt-4" data-v-3f419133><div class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133> Promedio: <span class="font-medium dark:text-white" data-v-3f419133>${ssrInterpolate(stats.value.avg_views_per_post)}</span> por post </div><div class="text-xs text-gray-500 mt-1" data-v-3f419133>${ssrInterpolate((_b = periodStats.value.views_last_7_days) == null ? void 0 : _b.toLocaleString())} esta semana </div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="flex items-center" data-v-3f419133><div class="flex-shrink-0" data-v-3f419133><div class="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center" data-v-3f419133><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f419133><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-v-3f419133></path></svg></div></div><div class="ml-5 w-0 flex-1" data-v-3f419133><dl data-v-3f419133><dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate" data-v-3f419133>Categor\xEDas</dt><dd class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate(stats.value.total_categories)}</dd></dl></div></div><div class="mt-4" data-v-3f419133><div class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133><span class="text-green-600 dark:text-green-400 font-medium" data-v-3f419133>${ssrInterpolate(stats.value.active_categories)}</span> activas </div><div class="text-xs text-gray-500 mt-1" data-v-3f419133>${ssrInterpolate(stats.value.total_users)} usuarios (${ssrInterpolate(stats.value.admin_users)} admins) </div></div></div></div>`);
        if (monthlyStats.value.length) {
          _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4" data-v-3f419133>Actividad de los \xFAltimos 12 meses</h3><div class="h-64 flex items-end justify-between space-x-1" data-v-3f419133><!--[-->`);
          ssrRenderList(monthlyStats.value, (month) => {
            _push(`<div class="flex-1 flex flex-col items-center" data-v-3f419133><div class="w-full flex flex-col items-center space-y-1" data-v-3f419133><div class="w-6 bg-blue-500 rounded-t" style="${ssrRenderStyle({ height: `${Math.max((month.posts || 0) / maxMonthlyValue.value * 200, 4)}px` })}"${ssrRenderAttr("title", `${month.posts} posts`)} data-v-3f419133></div><div class="w-6 bg-purple-500" style="${ssrRenderStyle({ height: `${Math.max((month.contacts || 0) / maxMonthlyValue.value * 200, 4)}px` })}"${ssrRenderAttr("title", `${month.contacts} contactos`)} data-v-3f419133></div><div class="w-6 bg-green-500 rounded-b" style="${ssrRenderStyle({ height: `${Math.max((month.views || 0) / 10 / maxMonthlyValue.value * 200, 4)}px` })}"${ssrRenderAttr("title", `${month.views} vistas`)} data-v-3f419133></div></div><span class="text-xs text-gray-500 dark:text-gray-400 mt-2 transform -rotate-45 origin-top-left" data-v-3f419133>${ssrInterpolate(month.month_short)}</span></div>`);
          });
          _push(`<!--]--></div><div class="flex justify-center mt-4 space-x-6" data-v-3f419133><div class="flex items-center" data-v-3f419133><div class="w-3 h-3 bg-blue-500 rounded mr-2" data-v-3f419133></div><span class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133>Posts</span></div><div class="flex items-center" data-v-3f419133><div class="w-3 h-3 bg-purple-500 rounded mr-2" data-v-3f419133></div><span class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133>Contactos</span></div><div class="flex items-center" data-v-3f419133><div class="w-3 h-3 bg-green-500 rounded mr-2" data-v-3f419133></div><span class="text-sm text-gray-600 dark:text-gray-400" data-v-3f419133>Vistas</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-3f419133><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-3f419133><div class="flex items-center justify-between" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>Posts Recientes</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/posts",
          class: "text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ver todos `);
            } else {
              return [
                createTextVNode(" Ver todos ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="divide-y divide-gray-200 dark:divide-slate-700 max-h-96 overflow-y-auto" data-v-3f419133>`);
        if (recentPosts.value.length === 0) {
          _push(`<div class="px-6 py-4 text-center text-gray-500" data-v-3f419133> No hay posts a\xFAn </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(recentPosts.value, (post) => {
          var _a2;
          _push(`<div class="px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50" data-v-3f419133><div class="flex items-start justify-between" data-v-3f419133><div class="flex-1 min-w-0" data-v-3f419133><p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-v-3f419133>${ssrInterpolate(post.title)}</p><div class="flex items-center mt-1 space-x-2" data-v-3f419133><span class="text-xs text-gray-500" data-v-3f419133>${ssrInterpolate(((_a2 = post.user) == null ? void 0 : _a2.name) || post.author || "Usuario")}</span>`);
          if (post.category) {
            _push(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white shadow-sm" style="${ssrRenderStyle({ backgroundColor: post.category_color ? post.category_color : "#6b7280" })}" data-v-3f419133>${ssrInterpolate(post.category.name)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-xs text-gray-400 mt-1" data-v-3f419133>${ssrInterpolate(post.time_ago || formatDate(post.created_at))} \u2022 ${ssrInterpolate(post.views)} vistas</p></div><div class="ml-4 flex-shrink-0 flex flex-col items-end space-y-1" data-v-3f419133><span class="${ssrRenderClass([post.is_published || post.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800", "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}" data-v-3f419133>${ssrInterpolate(post.is_published || post.status === "published" ? "Publicado" : "Borrador")}</span>`);
          if (post.featured) {
            _push(`<span class="text-xs text-yellow-600" data-v-3f419133>\u2B50 Destacado</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-3f419133><div class="flex items-center justify-between" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>Contactos Recientes</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/contacts",
          class: "text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ver todos `);
            } else {
              return [
                createTextVNode(" Ver todos ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="divide-y divide-gray-200 dark:divide-slate-700 max-h-96 overflow-y-auto" data-v-3f419133>`);
        if (recentContacts.value.length === 0) {
          _push(`<div class="px-6 py-4 text-center text-gray-500" data-v-3f419133> No hay contactos a\xFAn </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(recentContacts.value, (contact) => {
          _push(`<div class="px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50" data-v-3f419133><div class="flex items-start justify-between" data-v-3f419133><div class="flex-1 min-w-0" data-v-3f419133><p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-v-3f419133>${ssrInterpolate(contact.name)}</p><p class="text-sm text-gray-700 dark:text-gray-300 truncate" data-v-3f419133>${ssrInterpolate(contact.subject)}</p><p class="text-xs text-gray-500 truncate" data-v-3f419133>${ssrInterpolate(contact.email)}</p><p class="text-xs text-gray-400 mt-1" data-v-3f419133>${ssrInterpolate(contact.time_ago || formatDate(contact.created_at))}</p></div><div class="ml-4 flex-shrink-0" data-v-3f419133><span class="${ssrRenderClass([{
            "bg-red-100 text-red-800": contact.status === "new",
            "bg-yellow-100 text-yellow-800": contact.status === "read",
            "bg-green-100 text-green-800": contact.status === "replied",
            "bg-gray-100 text-gray-800": contact.status === "archived"
          }, "inline-flex px-2 py-1 text-xs font-semibold rounded-full"])}" data-v-3f419133>${ssrInterpolate(getStatusText(contact.status))}</span></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>Actividad Reciente</h3></div><div class="divide-y divide-gray-200 dark:divide-slate-700 max-h-96 overflow-y-auto" data-v-3f419133>`);
        if (recentActivity.value.length === 0) {
          _push(`<div class="px-6 py-4 text-center text-gray-500" data-v-3f419133> No hay actividad reciente (o el backend no provee esta info a\xFAn) </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(recentActivity.value, (activity) => {
          _push(`<div class="px-6 py-3" data-v-3f419133><div class="flex items-start" data-v-3f419133><div class="flex-shrink-0" data-v-3f419133><div class="${ssrRenderClass([getActivityColor(activity.color), "w-8 h-8 rounded-full flex items-center justify-center p-2"])}" data-v-3f419133><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3f419133><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${ssrRenderAttr("d", getActivityIcon(activity.type))} data-v-3f419133></path></svg></div></div><div class="ml-3 flex-1 min-w-0" data-v-3f419133><p class="text-sm text-gray-900 dark:text-gray-100" data-v-3f419133><span class="font-medium" data-v-3f419133>${ssrInterpolate(activity.user)}</span> ${ssrInterpolate(activity.action)} <span class="font-medium" data-v-3f419133>&quot;${ssrInterpolate(activity.title)}&quot;</span></p><p class="text-xs text-gray-500" data-v-3f419133>${ssrInterpolate(activity.time_ago)}</p></div></div></div>`);
        });
        _push(`<!--]--></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-3f419133><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>Posts M\xE1s Populares</h3></div><div class="divide-y divide-gray-200 dark:divide-slate-700" data-v-3f419133>`);
        if (popularPosts.value.length === 0) {
          _push(`<div class="px-6 py-4 text-center text-gray-500" data-v-3f419133> No hay posts populares a\xFAn </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(popularPosts.value, (post) => {
          var _a2;
          _push(`<div class="px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50" data-v-3f419133><div class="flex items-center justify-between" data-v-3f419133><div class="flex-1 min-w-0" data-v-3f419133><p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-v-3f419133>${ssrInterpolate(post.title)}</p><div class="flex items-center mt-1 space-x-2" data-v-3f419133>`);
          if (post.category) {
            _push(`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white shadow-sm" style="${ssrRenderStyle({ backgroundColor: post.category_color ? post.category_color : "#6b7280" })}" data-v-3f419133>${ssrInterpolate(post.category.name)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="text-xs text-gray-500" data-v-3f419133>${ssrInterpolate(formatDate(post.published_at) || formatDate(post.created_at))}</span></div></div><div class="ml-4 flex-shrink-0 text-right" data-v-3f419133><p class="text-sm font-medium text-gray-900 dark:text-gray-100" data-v-3f419133>${ssrInterpolate(((_a2 = post.views) == null ? void 0 : _a2.toLocaleString()) || 0)}</p><p class="text-xs text-gray-500" data-v-3f419133>vistas</p></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-3f419133><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>Categor\xEDas M\xE1s Activas</h3></div><div class="divide-y divide-gray-200 dark:divide-slate-700" data-v-3f419133>`);
        if (topCategories.value.length === 0) {
          _push(`<div class="px-6 py-4 text-center text-gray-500" data-v-3f419133> No hay categor\xEDas a\xFAn </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(topCategories.value, (category) => {
          _push(`<div class="px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-700/50" data-v-3f419133><div class="flex items-center justify-between" data-v-3f419133><div class="flex-1 min-w-0" data-v-3f419133><div class="flex items-center" data-v-3f419133><div class="w-3 h-3 rounded-full mr-2" style="${ssrRenderStyle({ backgroundColor: category.color || "#6b7280" })}" data-v-3f419133></div><p class="text-sm font-medium text-gray-900 dark:text-white truncate" data-v-3f419133>${ssrInterpolate(category.name)}</p></div><p class="text-xs text-gray-500 dark:text-gray-400 mt-1" data-v-3f419133>${ssrInterpolate(category.description)}</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-1" data-v-3f419133>${ssrInterpolate(formatDate(category.created_at))}</p></div><div class="ml-4 flex-shrink-0 text-right" data-v-3f419133><p class="text-sm font-medium text-gray-900 dark:text-gray-100" data-v-3f419133>${ssrInterpolate(category.blog_posts_count || 0)}</p><p class="text-xs text-gray-500" data-v-3f419133>posts</p></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
        if (performanceStats.value && (performanceStats.value.most_viewed_post || performanceStats.value.most_active_category)) {
          _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-100 dark:border-slate-700" data-v-3f419133><h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4" data-v-3f419133>Estad\xEDsticas de Rendimiento</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-v-3f419133>`);
          if (performanceStats.value.most_viewed_post) {
            _push(`<div class="text-center" data-v-3f419133><p class="text-sm text-gray-500 dark:text-gray-400" data-v-3f419133>Post M\xE1s Visto</p><p class="text-lg font-medium text-gray-900 dark:text-white truncate" data-v-3f419133>${ssrInterpolate(performanceStats.value.most_viewed_post.title)}</p><p class="text-sm text-blue-600 dark:text-blue-400" data-v-3f419133>${ssrInterpolate(((_c = performanceStats.value.most_viewed_post.views) == null ? void 0 : _c.toLocaleString()) || 0)} vistas</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (performanceStats.value.most_active_category) {
            _push(`<div class="text-center" data-v-3f419133><p class="text-sm text-gray-500 dark:text-gray-400" data-v-3f419133>Categor\xEDa M\xE1s Activa</p><p class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate(performanceStats.value.most_active_category.name)}</p><p class="text-sm text-green-600 dark:text-green-400" data-v-3f419133>${ssrInterpolate(performanceStats.value.most_active_category.published_posts_count)} posts</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="text-center" data-v-3f419133><p class="text-sm text-gray-500 dark:text-gray-400" data-v-3f419133>Promedio Contactos/D\xEDa</p><p class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate(performanceStats.value.avg_contacts_per_day || 0)}</p><p class="text-sm text-purple-600 dark:text-purple-400" data-v-3f419133>contactos diarios</p></div><div class="text-center" data-v-3f419133><p class="text-sm text-gray-500 dark:text-gray-400" data-v-3f419133>Actividad Total</p><p class="text-lg font-medium text-gray-900 dark:text-white" data-v-3f419133>${ssrInterpolate(currentMonthActivity.value)}</p><p class="text-sm text-orange-600 dark:text-orange-400" data-v-3f419133>este mes</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f419133"]]);

export { index as default };
//# sourceMappingURL=index-BTWz1XMg.mjs.map
