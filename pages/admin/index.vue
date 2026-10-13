<script setup>
import { computed } from 'vue'
import {
    FileText, Mail, Tags, SquareKanban, TrendingUp, Plus, ArrowUpRight,
    Inbox, Star, Clock, Activity as ActivityIcon, Eye, Pencil, ExternalLink, Sparkles, CheckCircle2,
} from 'lucide-vue-next'

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const userName = useCookie('user_name')

const { data: dashboardData, pending } = await useFetch(() => `${config.public.apiUrl}dashboard`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
})

// Mapeos predeterminados con safe fallback en caso de que un endpoint de dashboard no tenga estas propiedades.
const stats = computed(() => dashboardData.value?.stats || dashboardData.value?.data?.stats || {
    total_posts: 0, published_posts: 0, draft_posts: 0, featured_posts: 0,
    total_contacts: 0, new_contacts: 0, replied_contacts: 0,
    total_categories: 0, active_categories: 0,
    total_users: 0, admin_users: 0
})

const periodStats = computed(() => dashboardData.value?.periodStats || dashboardData.value?.data?.periodStats || {
    posts_last_7_days: 0, contacts_last_7_days: 0
})

const recentPosts = computed(() => dashboardData.value?.recentPosts || dashboardData.value?.data?.recentPosts || [])
const recentContacts = computed(() => dashboardData.value?.recentContacts || dashboardData.value?.data?.recentContacts || [])
const topCategories = computed(() => dashboardData.value?.topCategories || dashboardData.value?.data?.topCategories || [])
const monthlyStats = computed(() => dashboardData.value?.monthlyStats || dashboardData.value?.data?.monthlyStats || [])
const recentActivity = computed(() => dashboardData.value?.recentActivity || dashboardData.value?.data?.recentActivity || [])
const performanceStats = computed(() => dashboardData.value?.performanceStats || dashboardData.value?.data?.performanceStats || null)

const greeting = computed(() => {
    const h = new Date().getHours()
    if (h < 12) return 'Buenos días'
    if (h < 19) return 'Buenas tardes'
    return 'Buenas noches'
})

const todayLabel = computed(() =>
    new Date().toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })
)

const statCards = computed(() => [
    {
        label: 'Total Posts',
        value: stats.value.total_posts,
        icon: FileText,
        tint: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
        ring: 'from-sky-400 to-sky-600',
        detail: [
            { text: `${stats.value.published_posts} publicados`, cls: 'text-emerald-600 dark:text-emerald-400' },
            { text: `${stats.value.draft_posts} borradores`, cls: 'text-amber-600 dark:text-amber-400' },
            { text: `${stats.value.featured_posts} destacados`, cls: 'text-violet-600 dark:text-violet-400' },
        ],
        foot: `${periodStats.value.posts_last_7_days} nuevos esta semana`,
    },
    {
        label: 'Contactos',
        value: stats.value.total_contacts,
        icon: Mail,
        tint: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
        ring: 'from-violet-400 to-violet-600',
        detail: [
            { text: `${stats.value.new_contacts} nuevos`, cls: 'text-red-600 dark:text-red-400' },
            { text: `${stats.value.replied_contacts} respondidos`, cls: 'text-emerald-600 dark:text-emerald-400' },
        ],
        foot: `${periodStats.value.contacts_last_7_days} recibidos esta semana`,
    },
    {
        label: 'Categorías',
        value: stats.value.total_categories,
        icon: Tags,
        tint: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
        ring: 'from-amber-400 to-amber-600',
        detail: [
            { text: `${stats.value.active_categories} activas`, cls: 'text-emerald-600 dark:text-emerald-400' },
        ],
        foot: `${stats.value.total_users} usuarios (${stats.value.admin_users} admins)`,
    },
])

const maxMonthlyValue = computed(() => {
    if (!monthlyStats.value.length) return 1
    return Math.max(...monthlyStats.value.map(m => Math.max(m.posts || 0, m.contacts || 0)))
})

const currentMonthActivity = computed(() => {
    if (!monthlyStats.value.length) return 0
    const m = monthlyStats.value[monthlyStats.value.length - 1]
    return (m.posts || 0) + (m.contacts || 0)
})

const getStatusText = (status) => ({
    new: 'Nuevo', read: 'Leído', replied: 'Respondido', archived: 'Archivado'
}[status] || status)

const getStatusPill = (status) => ({
    new: 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-400/20',
    read: 'bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20',
    replied: 'bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20',
    archived: 'bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20',
}[status] || 'bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20')

const formatDate = (date) => {
    if (!date) return '-'
    return new Date(date).toLocaleDateString('es-CL', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
    <div>
        <!-- Loading -->
        <div v-if="pending" class="flex h-64 items-center justify-center">
            <div class="flex flex-col items-center gap-3">
                <div class="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
                <p class="text-sm text-slate-500 dark:text-slate-400">Cargando panel…</p>
            </div>
        </div>

        <div v-else class="space-y-6">
            <!-- Hero header -->
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1222] via-[#0E1B33] to-[#0B1222] p-6 sm:p-8">
                <div class="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
                <div class="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
                <div class="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p class="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400/90">
                            <Sparkles class="h-3.5 w-3.5" /> Panel de administración
                        </p>
                        <h2 class="font-display text-2xl font-bold text-white sm:text-3xl">
                            {{ greeting }}, {{ userName || 'Admin' }}
                        </h2>
                        <p class="mt-1 text-sm text-slate-400"><span class="capitalize">{{ todayLabel }}</span> — esto es lo que está pasando en tu sitio.</p>
                    </div>
                    <div class="flex flex-wrap gap-2.5">
                        <NuxtLink to="/admin/posts/create"
                            class="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-semibold text-[#07101F] shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-300 hover:shadow-sky-400/30">
                            <Plus class="h-4 w-4" /> Nuevo Post
                        </NuxtLink>
                        <NuxtLink to="/admin/kanban"
                            class="inline-flex items-center gap-2 rounded-xl bg-white/[0.07] px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition-all hover:bg-white/[0.12]">
                            <SquareKanban class="h-4 w-4 text-sky-400" /> Kanban
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Stat cards -->
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div v-for="card in statCards" :key="card.label"
                    class="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-md hover:ring-slate-300/60 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-slate-700">
                    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        :class="card.ring" />
                    <div class="flex items-center gap-4">
                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" :class="card.tint">
                            <component :is="card.icon" class="h-6 w-6" />
                        </div>
                        <div>
                            <p class="text-sm font-medium text-slate-500 dark:text-slate-400">{{ card.label }}</p>
                            <p class="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                {{ card.value }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium">
                        <span v-for="d in card.detail" :key="d.text" :class="d.cls">{{ d.text }}</span>
                    </div>
                    <p class="mt-1.5 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                        <TrendingUp class="h-3.5 w-3.5" /> {{ card.foot }}
                    </p>
                </div>
            </div>

            <!-- Chart -->
            <div v-if="monthlyStats.length"
                class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                <div class="mb-5 flex items-center justify-between">
                    <div>
                        <h3 class="font-semibold text-slate-900 dark:text-white">Actividad de los últimos 12 meses</h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Posts creados y contactos recibidos por mes</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span class="h-2.5 w-2.5 rounded-sm bg-gradient-to-t from-sky-500 to-sky-400" /> Posts
                        </span>
                        <span class="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span class="h-2.5 w-2.5 rounded-sm bg-gradient-to-t from-violet-500 to-violet-400" /> Contactos
                        </span>
                    </div>
                </div>
                <div class="flex h-56 items-end justify-between gap-1.5 sm:gap-2">
                    <div v-for="month in monthlyStats" :key="month.month" class="group flex h-full flex-1 flex-col items-center justify-end gap-2">
                        <div class="flex w-full flex-1 items-end justify-center gap-1">
                            <div class="w-full max-w-[14px] rounded-t-md bg-gradient-to-t from-sky-500 to-sky-400 transition-all duration-300 group-hover:from-sky-400 group-hover:to-sky-300"
                                :style="{ height: `${Math.max(((month.posts || 0) / maxMonthlyValue) * 100, 2)}%` }"
                                :title="`${month.posts} posts`" />
                            <div class="w-full max-w-[14px] rounded-t-md bg-gradient-to-t from-violet-500 to-violet-400 transition-all duration-300 group-hover:from-violet-400 group-hover:to-violet-300"
                                :style="{ height: `${Math.max(((month.contacts || 0) / maxMonthlyValue) * 100, 2)}%` }"
                                :title="`${month.contacts} contactos`" />
                        </div>
                        <span class="text-[10px] font-medium text-slate-400 transition-colors group-hover:text-sky-600 dark:text-slate-500 dark:group-hover:text-sky-400">
                            {{ month.month_short }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Tres columnas: posts, contactos, actividad -->
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <!-- Posts recientes -->
                <div class="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                    <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                        <h3 class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                            <FileText class="h-4 w-4 text-sky-500" /> Posts recientes
                        </h3>
                        <NuxtLink to="/admin/posts"
                            class="flex items-center gap-1 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                            Ver todos <ArrowUpRight class="h-3.5 w-3.5" />
                        </NuxtLink>
                    </div>
                    <div class="max-h-96 divide-y divide-slate-100 overflow-y-auto scrollbar-thin dark:divide-slate-800">
                        <div v-if="recentPosts.length === 0" class="flex flex-col items-center gap-2 px-5 py-10 text-center">
                            <Inbox class="h-8 w-8 text-slate-300 dark:text-slate-600" />
                            <p class="text-sm text-slate-500 dark:text-slate-400">No hay posts aún</p>
                        </div>
                        <NuxtLink v-for="post in recentPosts" :key="post.id" :to="`/admin/posts/${post.id}`"
                            class="flex items-start justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <div class="min-w-0 flex-1">
                                <p class="truncate text-sm font-medium text-slate-900 dark:text-white">{{ post.title }}</p>
                                <div class="mt-1 flex items-center gap-2">
                                    <span class="text-xs text-slate-500 dark:text-slate-400">{{ post.user?.name || post.author || 'Usuario' }}</span>
                                    <span v-if="post.category"
                                        class="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-white shadow-sm"
                                        :style="{ backgroundColor: post.category_color ? post.category_color : '#6b7280' }">
                                        {{ post.category.name }}
                                    </span>
                                </div>
                                <p class="mt-0.5 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                                    <Clock class="h-3 w-3" /> {{ post.time_ago || formatDate(post.created_at) }}
                                </p>
                            </div>
                            <div class="flex shrink-0 flex-col items-end gap-1">
                                <span class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ring-1"
                                    :class="post.is_published || post.status === 'published'
                                        ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20'
                                        : 'bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20'">
                                    {{ post.is_published || post.status === 'published' ? 'Publicado' : 'Borrador' }}
                                </span>
                                <span v-if="post.featured" class="flex items-center gap-0.5 text-[11px] font-medium text-amber-500">
                                    <Star class="h-3 w-3" /> Destacado
                                </span>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Contactos recientes -->
                <div class="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                    <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                        <h3 class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                            <Mail class="h-4 w-4 text-violet-500" /> Contactos recientes
                        </h3>
                        <NuxtLink to="/admin/contacts"
                            class="flex items-center gap-1 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                            Ver todos <ArrowUpRight class="h-3.5 w-3.5" />
                        </NuxtLink>
                    </div>
                    <div class="max-h-96 divide-y divide-slate-100 overflow-y-auto scrollbar-thin dark:divide-slate-800">
                        <div v-if="recentContacts.length === 0" class="flex flex-col items-center gap-2 px-5 py-10 text-center">
                            <Inbox class="h-8 w-8 text-slate-300 dark:text-slate-600" />
                            <p class="text-sm text-slate-500 dark:text-slate-400">No hay contactos aún</p>
                        </div>
                        <NuxtLink v-for="contact in recentContacts" :key="contact.id" :to="`/admin/contacts/${contact.id}`"
                            class="flex items-start justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <div class="min-w-0 flex-1">
                                <p class="truncate text-sm font-medium text-slate-900 dark:text-white">{{ contact.name }}</p>
                                <p class="truncate text-xs text-slate-500 dark:text-slate-400">{{ contact.subject }}</p>
                                <p class="truncate text-xs text-slate-400 dark:text-slate-500">{{ contact.email }}</p>
                                <p class="mt-0.5 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                                    <Clock class="h-3 w-3" /> {{ contact.time_ago || formatDate(contact.created_at) }}
                                </p>
                            </div>
                            <span class="inline-flex shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold ring-1"
                                :class="getStatusPill(contact.status)">
                                {{ getStatusText(contact.status) }}
                            </span>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Actividad reciente -->
                <div class="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                    <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                        <h3 class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                            <ActivityIcon class="h-4 w-4 text-emerald-500" /> Actividad reciente
                        </h3>
                    </div>
                    <div class="max-h-96 divide-y divide-slate-100 overflow-y-auto scrollbar-thin dark:divide-slate-800">
                        <div v-if="recentActivity.length === 0" class="flex flex-col items-center gap-2 px-5 py-10 text-center">
                            <ActivityIcon class="h-8 w-8 text-slate-300 dark:text-slate-600" />
                            <p class="text-sm text-slate-500 dark:text-slate-400">Sin actividad reciente</p>
                        </div>
                        <div v-for="activity in recentActivity" :key="`${activity.type}-${activity.time}`" class="px-5 py-3.5">
                            <div class="flex items-start gap-3">
                                <div class="relative flex h-2 w-2 shrink-0 mt-1.5">
                                    <span class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60 animate-ping" />
                                    <span class="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
                                </div>
                                <div class="min-w-0 flex-1">
                                    <p class="text-sm text-slate-700 dark:text-slate-200">
                                        <span class="font-semibold text-slate-900 dark:text-white">{{ activity.user }}</span>
                                        {{ activity.action }}
                                        <span class="font-medium">"{{ activity.title }}"</span>
                                    </p>
                                    <p class="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{{ activity.time_ago }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Categorías top + rendimiento -->
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <div v-if="topCategories.length"
                    class="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 lg:col-span-2 dark:bg-slate-900 dark:ring-slate-800">
                    <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                        <h3 class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                            <Tags class="h-4 w-4 text-amber-500" /> Categorías más activas
                        </h3>
                        <NuxtLink to="/admin/categories"
                            class="flex items-center gap-1 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                            Gestionar <ArrowUpRight class="h-3.5 w-3.5" />
                        </NuxtLink>
                    </div>
                    <div class="divide-y divide-slate-100 dark:divide-slate-800">
                        <div v-for="category in topCategories" :key="category.id"
                            class="flex items-center justify-between gap-4 px-5 py-3.5">
                            <div class="flex min-w-0 items-center gap-3">
                                <span class="h-3 w-3 shrink-0 rounded-full ring-2 ring-white dark:ring-slate-900"
                                    :style="{ backgroundColor: category.color || '#6b7280' }" />
                                <div class="min-w-0">
                                    <p class="truncate text-sm font-medium text-slate-900 dark:text-white">{{ category.name }}</p>
                                    <p class="truncate text-xs text-slate-500 dark:text-slate-400">{{ category.description || 'Sin descripción' }}</p>
                                </div>
                            </div>
                            <div class="shrink-0 text-right">
                                <p class="text-sm font-bold text-slate-900 dark:text-white">{{ category.blog_posts_count || 0 }}</p>
                                <p class="text-[11px] text-slate-400 dark:text-slate-500">posts</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="performanceStats"
                    class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
                    <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                        <CheckCircle2 class="h-4 w-4 text-sky-500" /> Rendimiento
                    </h3>
                    <div class="space-y-4">
                        <div v-if="performanceStats.most_active_category" class="rounded-xl bg-sky-50 p-4 dark:bg-sky-500/10">
                            <p class="text-xs font-medium text-sky-700 dark:text-sky-400">Categoría más activa</p>
                            <p class="mt-0.5 font-semibold text-slate-900 dark:text-white">{{ performanceStats.most_active_category.name }}</p>
                            <p class="text-xs text-slate-500 dark:text-slate-400">{{ performanceStats.most_active_category.published_posts_count }} posts publicados</p>
                        </div>
                        <div class="rounded-xl bg-violet-50 p-4 dark:bg-violet-500/10">
                            <p class="text-xs font-medium text-violet-700 dark:text-violet-400">Promedio contactos/día</p>
                            <p class="mt-0.5 font-display text-2xl font-bold text-slate-900 dark:text-white">{{ performanceStats.avg_contacts_per_day || 0 }}</p>
                        </div>
                        <div class="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                            <p class="text-xs font-medium text-emerald-700 dark:text-emerald-400">Actividad total este mes</p>
                            <p class="mt-0.5 font-display text-2xl font-bold text-slate-900 dark:text-white">{{ currentMonthActivity }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
