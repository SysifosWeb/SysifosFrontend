<script setup>
import { computed } from 'vue'
import {
    FileText, Plus, ArrowUpRight,
    Activity as ActivityIcon, CheckCircle2, FolderOpen,
} from 'lucide-vue-next'

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
const token = useCookie('auth_token')
const userName = useCookie('user_name')

const { data: dashboardData, pending, error: dashboardError, refresh: refreshDashboard } = await useFetch(() => `${config.public.apiUrl}dashboard`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    }
})

const { data: kanbanProjectsResponse, error: kanbanProjectsError, pending: kanbanProjectsPending, refresh: refreshProjects } = await useFetch(() => `${config.public.apiUrl}kanban/projects`, {
    headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: 'application/json'
    },
    default: () => ({ data: [] }),
})

const kanbanProjects = computed(() => {
    const projects = kanbanProjectsResponse.value?.data
    if (Array.isArray(projects)) return projects

    return Array.isArray(projects?.data) ? projects.data : []
})

const totalProjectTasks = computed(() => kanbanProjects.value.reduce((total, project) => total + (Number(project.cards_count) || 0), 0))

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
        label: 'Posts', value: stats.value.total_posts,
        detail: [{ text: `${stats.value.published_posts} publicados` }, { text: `${stats.value.draft_posts} borradores` }],
        foot: `${periodStats.value.posts_last_7_days} nuevos esta semana`,
    },
    {
        label: 'Contactos', value: stats.value.total_contacts,
        detail: [{ text: `${stats.value.new_contacts} nuevos` }, { text: `${stats.value.replied_contacts} respondidos` }],
        foot: `${periodStats.value.contacts_last_7_days} recibidos esta semana`,
    },
    {
        label: 'Categorías', value: stats.value.total_categories,
        detail: [{ text: `${stats.value.active_categories} activas` }],
        foot: `${stats.value.total_users} usuarios · ${stats.value.admin_users} administradores`,
    },
])

const maxMonthlyValue = computed(() => {
    if (!monthlyStats.value.length) return 1
    return Math.max(1, ...monthlyStats.value.map(m => Math.max(m.posts || 0, m.contacts || 0)))
})

const currentMonthActivity = computed(() => {
    if (!monthlyStats.value.length) return 0
    const m = monthlyStats.value[monthlyStats.value.length - 1]
    return (m.posts || 0) + (m.contacts || 0)
})

const getStatusText = (status) => ({
    new: 'Nuevo', read: 'Leído', replied: 'Respondido', archived: 'Archivado'
}[status] || status)

const formatDate = (date) => {
    if (!date) return '-'
    return new Date(date).toLocaleDateString('es-CL', { year: 'numeric', month: 'short', day: 'numeric' })
}
useHead({ title: 'Inicio · Administración SysifosWeb' })
const dashboardState = computed(() => pending.value ? 'Cargando información…' : dashboardError.value ? 'No se pudo cargar esta información.' : '')
const monthHeight = (value) => `${Math.max(0, Number(value) || 0) / maxMonthlyValue.value * 100}%`
</script>


<template>
<div class="workspace">
    <section class="welcome">
        <div><h2>{{ greeting }}, {{ userName || 'Admin' }}</h2><p>El trabajo del equipo, en un solo lugar.</p></div>
        <NuxtLink class="button" to="/admin/posts/create"><Plus :size="16" /> Nuevo post</NuxtLink>
    </section>
    <div class="workspace-date"><span>SysifosWeb · Espacio de trabajo</span><time>{{ todayLabel }}</time></div>
    <!-- 12 columns: primary 8 + secondary 4; one shared 16px gutter. -->
    <div class="workspace-grid">
        <section class="panel projects">
            <header><div><h3>Proyectos</h3><p>Continúa donde quedó el equipo.</p></div><NuxtLink class="text-link" to="/admin/kanban">Ver todos <ArrowUpRight :size="15" /></NuxtLink></header>
            <p v-if="kanbanProjectsPending" class="state" role="status">Cargando proyectos…</p>
            <div v-else-if="kanbanProjectsError" class="state" role="alert"><p>No se pudieron cargar los proyectos.</p><button class="text-link" @click="refreshProjects()">Reintentar</button></div>
            <div v-else-if="!kanbanProjects.length" class="state"><p>Crea el primer proyecto para organizar las tareas del equipo.</p><NuxtLink class="text-link" to="/admin/kanban">Crear proyecto <Plus :size="15" /></NuxtLink></div>
            <div v-else class="project-list">
                <NuxtLink v-for="project in kanbanProjects.slice(0, 4)" :key="project.id" :to="`/admin/kanban/${project.id}`" class="project-row">
                    <FolderOpen :size="20" /><div><h4>{{ project.name }}</h4><p>{{ Number(project.cards_count) || 0 }} tareas registradas</p></div><ArrowUpRight :size="16" />
                </NuxtLink>
            </div>
            <footer v-if="!kanbanProjectsPending && !kanbanProjectsError">{{ kanbanProjectsResponse?.meta?.total ?? kanbanProjects.length }} proyectos · {{ totalProjectTasks }} tareas en la selección cargada</footer>
        </section>
        <section class="panel contacts">
            <header><div><h3>Contactos recientes</h3><p>Conversaciones por continuar.</p></div><NuxtLink class="icon-link" to="/admin/contacts" aria-label="Ver todos los contactos"><ArrowUpRight :size="18" /></NuxtLink></header>
            <div v-if="dashboardState" class="state" :role="dashboardError ? 'alert' : 'status'"><p>{{ dashboardState }}</p><button v-if="dashboardError" class="text-link" @click="refreshDashboard()">Reintentar</button></div>
            <p v-else-if="!recentContacts.length" class="state">Todavía no hay contactos recibidos.</p>
            <NuxtLink v-for="contact in dashboardState ? [] : recentContacts.slice(0, 2)" :key="contact.id" :to="`/admin/contacts/${contact.id}`" class="contact-row">
                <span class="avatar">{{ (contact.name || '?').charAt(0).toUpperCase() }}</span><div><h4>{{ contact.name }}</h4><p>{{ contact.subject || contact.email }}</p><small>{{ contact.time_ago || formatDate(contact.created_at) }}</small></div><span class="status" :class="{ unread: contact.status === 'new' }">{{ getStatusText(contact.status) }}</span>
            </NuxtLink>
        </section>
        <section class="panel metrics" aria-label="Resumen de contenido" :aria-busy="pending">
            <div v-for="card in statCards" :key="card.label" class="metric"><span>{{ card.label }}</span><strong>{{ pending ? '…' : dashboardError ? '—' : card.value }}</strong><template v-if="!pending && !dashboardError"><p>{{ card.detail.map(d => d.text).join(' · ') }}</p><small>{{ card.foot }}</small></template><p v-else>{{ pending ? 'Cargando…' : 'Información no disponible' }}</p></div>
        </section>
        <section class="panel chart-panel">
            <header><div><h3>Actividad mensual</h3><p>Posts creados y contactos recibidos.</p></div><span class="legend"><span><i class="post-key" /> Posts</span><span><i class="contact-key" /> Contactos</span></span></header>
            <div v-if="dashboardState" class="state"><p>{{ dashboardState }}</p><button v-if="dashboardError" class="text-link" @click="refreshDashboard()">Reintentar</button></div>
            <p v-else-if="!monthlyStats.length" class="state">Todavía no hay actividad mensual registrada.</p>
            <template v-else><div class="chart-scale"><span>{{ maxMonthlyValue }}</span><span>0</span></div><div class="chart" role="list" aria-label="Actividad por mes">
                <div v-for="month in monthlyStats" :key="month.month" class="month" role="listitem" :aria-label="`${month.month_short}: ${month.posts || 0} posts, ${month.contacts || 0} contactos`"><div class="bars"><div class="post-bar" :style="{ height: monthHeight(month.posts) }" :title="`${month.posts || 0} posts`" /><div class="contact-bar" :style="{ height: monthHeight(month.contacts) }" :title="`${month.contacts || 0} contactos`" /></div><span>{{ month.month_short }}</span></div>
            </div></template>
        </section>
        <section class="panel activity">
            <header><div><h3>Actividad reciente</h3><p>Lo último en SysifosWeb.</p></div><ActivityIcon :size="18" /></header>
            <p v-if="dashboardState" class="state">{{ dashboardState }}</p><p v-else-if="!recentActivity.length" class="state">Todavía no hay actividad reciente.</p>
            <div v-for="(activity, index) in dashboardState ? [] : recentActivity.slice(0, 4)" :key="`${activity.type}-${activity.time}-${index}`" class="activity-row"><span class="activity-dot" /><div><p><b>{{ activity.user }}</b> {{ activity.action }} <b>{{ activity.title }}</b></p><small>{{ activity.time_ago }}</small></div></div>
        </section>
        <section class="panel posts">
            <header><h3>Posts recientes</h3><NuxtLink class="text-link" to="/admin/posts">Ver todos <ArrowUpRight :size="15" /></NuxtLink></header>
            <p v-if="dashboardState" class="state">{{ dashboardState }}</p><p v-else-if="!recentPosts.length" class="state">Todavía no hay posts. Tu próxima publicación empieza aquí.</p>
            <NuxtLink v-for="post in dashboardState ? [] : recentPosts.slice(0, 3)" :key="post.id" :to="`/admin/posts/${post.id}`" class="post-row"><FileText :size="18" /><div><h4>{{ post.title }}</h4><p>{{ formatDate(post.created_at) }}</p></div><span class="status">{{ post.is_published || post.status === 'published' ? 'Publicado' : 'Borrador' }}</span></NuxtLink>
        </section>
        <section v-if="!dashboardState && topCategories.length" class="panel categories">
            <header><h3>Categorías más activas</h3><NuxtLink class="text-link" to="/admin/categories">Gestionar <ArrowUpRight :size="15" /></NuxtLink></header>
            <div v-for="category in topCategories.slice(0, 4)" :key="category.id" class="category-row"><span>{{ category.name }}</span><strong>{{ category.blog_posts_count || 0 }} <small>posts</small></strong></div>
        </section>
        <section v-if="!dashboardState && performanceStats" class="panel performance">
            <header><h3>Rendimiento</h3><CheckCircle2 :size="18" /></header>
            <div class="category-row"><span>Contactos por día</span><strong>{{ performanceStats.avg_contacts_per_day || 0 }}</strong></div><div class="category-row"><span>Actividad este mes</span><strong>{{ currentMonthActivity }}</strong></div>
            <p v-if="performanceStats.most_active_category" class="performance-note">{{ performanceStats.most_active_category.name }} · {{ performanceStats.most_active_category.published_posts_count }} posts publicados</p>
        </section>
    </div>
</div>
</template>
<style scoped>
.workspace { --surface:#fff; --ink:#25222c; --muted:#696473; --soft:#f7f5fa; --line:#eeebf2; color:var(--ink); font-size:14px; }
.welcome { display:flex; align-items:center; justify-content:space-between; gap:20px; padding:24px 28px; border-radius:20px; background:#ded4f0; }
.welcome h2 { font-family:Manrope,sans-serif; font-size:26px; font-weight:600; line-height:1.3; letter-spacing:-.025em; }
.welcome p { margin-top:6px; color:#51465f; }
.button { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:44px; padding:0 18px; border-radius:999px; font-weight:600; white-space:nowrap; background:#25222c; color:white; }
.button:hover { background:#41384e; }
.workspace-date { display:flex; justify-content:space-between; gap:12px; padding:16px 2px; color:var(--muted); font-size:12px; }
.workspace-date time { text-transform:none; }
.workspace-grid { display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:16px; align-items:start; }
.panel { background:var(--surface); border-radius:20px; padding:20px; min-width:0; }
.projects,.chart-panel,.posts,.categories { grid-column:span 8; }
.contacts,.activity,.performance { grid-column:span 4; }
.projects,.contacts { min-height:200px; }
.metrics { grid-column:1/-1; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); padding:20px 4px; }
.panel header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; }
h3 { font-size:16px; font-weight:600; line-height:24px; }
.panel header p { color:var(--muted); font-size:12px; margin-top:2px; }
.text-link { display:inline-flex; align-items:center; gap:5px; min-height:36px; color:var(--ink); font-size:12px; font-weight:600; flex-shrink:0; }
.text-link:hover { text-decoration:underline; }
.icon-link { display:grid; place-items:center; width:44px; height:44px; flex-shrink:0; border-radius:50%; background:var(--soft); }
.project-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; }
.project-row { display:flex; align-items:center; gap:12px; padding:14px; background:var(--soft); border-radius:12px; min-width:0; }
.project-row>div { flex:1; min-width:0; }
h4 { font-size:14px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.project-row p,.post-row p { color:var(--muted); font-size:12px; margin-top:3px; }
.project-row:hover,.contact-row:hover,.post-row:hover { background:var(--line); }
.panel footer { margin-top:16px; font-size:12px; color:var(--muted); }
.state { display:flex; flex-direction:column; align-items:flex-start; justify-content:center; gap:8px; min-height:96px; color:var(--muted); line-height:1.6; }
.metric { padding:0 20px; border-right:1px solid var(--line); }
.metric:last-child { border:0; }
.metric>span { color:var(--muted); }
.metric strong { display:block; margin:4px 0; font-size:28px; font-weight:400; font-variant-numeric:tabular-nums; }
.metric p,.metric small { color:var(--muted); font-size:12px; line-height:1.7; }
.contact-row { display:flex; align-items:flex-start; gap:10px; padding:12px 0; border-bottom:1px solid var(--line); }
.contact-row:last-child { border:0; }
.contact-row>div { flex:1; min-width:0; }
.contact-row p { color:var(--muted); font-size:12px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
small { color:var(--muted); font-size:12px; }
.avatar { display:grid; place-items:center; width:32px; height:32px; flex-shrink:0; border-radius:50%; background:#eae3f2; color:#51465f; font-weight:600; }
.status { flex:none; white-space:nowrap; padding:3px 8px; border-radius:999px; background:var(--soft); color:var(--muted); font-size:11px; }
.unread { background:#fce8e6; color:#943a32; }
.chart-panel { position:relative; }
.legend { display:flex; gap:12px; font-size:12px; color:var(--muted); flex-wrap:wrap; }
.legend>span { display:flex; align-items:center; gap:5px; }
.legend i { width:8px; height:8px; border-radius:2px; }
.post-key,.post-bar { background:#a58bc9; }
.contact-key,.contact-bar { background:#47404f; }
.chart { display:flex; gap:10px; height:172px; margin-left:30px; border-bottom:1px solid var(--line); }
.month { display:flex; flex:1; min-width:0; flex-direction:column; gap:8px; text-align:center; }
.bars { display:flex; align-items:flex-end; justify-content:center; gap:3px; flex:1; min-height:0; }
.bars>div { width:12px; max-width:45%; border-radius:3px 3px 0 0; }
.month>span { color:var(--muted); font-size:11px; }
.chart-scale { position:absolute; top:82px; bottom:39px; left:20px; display:flex; flex-direction:column; justify-content:space-between; color:var(--muted); font-size:11px; }
.activity-row { display:flex; gap:12px; padding:10px 0; line-height:1.5; overflow-wrap:anywhere; }
.activity-row b { font-weight:600; }
.activity-dot { width:6px; height:6px; margin-top:7px; border-radius:50%; background:#a58bc9; flex-shrink:0; }
.post-row { display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid var(--line); }
.post-row:last-child { border:0; }
.post-row>div { flex:1; min-width:0; }
.category-row { display:flex; justify-content:space-between; gap:16px; padding:10px 0; border-bottom:1px solid var(--line); }
.category-row strong { font-weight:500; font-variant-numeric:tabular-nums; white-space:nowrap; }
.performance-note { margin-top:12px; color:var(--muted); font-size:12px; }
.workspace :is(a,button):focus-visible { outline:2px solid #765494; outline-offset:4px; }
:global(.dark .workspace) { --surface:#211f26; --ink:#f4f1f7; --muted:#b9b2c3; --soft:#2b2832; --line:#38323f; }
:global(.dark .welcome) { background:#3c304d; }
:global(.dark .welcome p) { color:#d8c9e8; }
:global(.dark .workspace .button) { background:#e4d9f1; color:#25222c; }
@media(min-width:1100px) {
.workspace-grid { grid-template-areas: 'projects projects projects projects projects projects projects projects contacts contacts contacts contacts' 'metrics metrics metrics metrics metrics metrics metrics metrics activity activity activity activity' 'chart chart chart chart chart chart chart chart posts posts posts posts' 'categories categories categories categories categories categories categories categories performance performance performance performance'; align-items:stretch; }
.projects { grid-area:projects; } .contacts { grid-area:contacts; } .metrics { grid-area:metrics; } .activity { grid-area:activity; } .chart-panel { grid-area:chart; } .posts { grid-area:posts; } .categories { grid-area:categories; } .performance { grid-area:performance; }
.chart-panel,.posts { min-height:250px; } .activity .state { min-height:48px; }
}
@media(max-width:1099px) { .projects,.chart-panel,.posts { grid-column:span 7; } .contacts,.activity { grid-column:span 5; } .categories,.performance { grid-column:span 6; } .workspace-grid { align-items:stretch; } .posts { grid-column:1/-1; } }
@media(max-width:639px) {
.welcome { padding:20px; align-items:flex-start; flex-direction:column; gap:16px; }
.welcome h2 { font-size:24px; }
.workspace-date { flex-direction:column; gap:3px; padding:12px 2px; }
.workspace-date>span { display:none; }
.workspace-grid { display:flex; flex-direction:column; }
.panel { width:100%; padding:18px; }
.contacts { order:0; min-height:0; } .projects { order:1; min-height:0; } .metrics { order:2; } .activity { order:3; } .posts { order:4; } .chart-panel { order:5; } .categories,.performance { order:6; }
.metrics { display:flex; flex-direction:column; padding:8px 18px; }
.metric { width:100%; display:grid; grid-template-columns:1fr auto; padding:12px 0; border-right:0; border-bottom:1px solid var(--line); align-items:center; }
.metric strong { grid-column:2; grid-row:1/3; margin:0; font-size:24px; }
.metric p { grid-column:1; } .metric small { display:none; }
.panel header { flex-wrap:wrap; margin-bottom:10px; } .panel header h3 { font-size:15px; }
.state { min-height:56px; } .project-list { grid-template-columns:1fr; }
.chart { gap:5px; } .month:nth-child(even)>span { visibility:hidden; }
}
</style>
