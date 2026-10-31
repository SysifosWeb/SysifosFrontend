<template>
    <div class="admin-scope min-h-screen bg-[#f6f4fa] text-slate-900 dark:bg-[#141318] dark:text-slate-100">
        <!-- ===== Sidebar ===== -->
        <aside id="admin-navigation" class="fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col bg-[#17161b] text-white transition-[width,transform] duration-200 ease-out lg:translate-x-0 lg:inset-y-4 lg:left-4 lg:rounded-[24px]"
            :class="[sidebarOpen ? 'translate-x-0' : '-translate-x-full', sidebarCollapsed ? 'lg:w-[64px]' : 'lg:w-[232px]']">

            <!-- Brand -->
            <div class="flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-5" :class="sidebarCollapsed ? 'lg:justify-center lg:px-2' : ''">
                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                    <img src="/img/brand/mark.svg" alt="" class="h-6 w-6" />
                </div>
                <div class="min-w-0 leading-tight" :class="sidebarCollapsed ? 'lg:hidden' : ''">
                    <p class="truncate font-display text-sm font-semibold text-white">SysifosWeb</p>
                    <p class="text-xs text-slate-400">Gestión del trabajo</p>
                </div>
                <button aria-label="Cerrar menú" class="ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
                    @click="sidebarOpen = false">
                    <X class="h-5 w-5" />
                </button>
            </div>

            <!-- Nav -->
            <nav aria-label="Navegación principal" class="flex-1 space-y-5 overflow-y-auto px-3 py-5 scrollbar-thin">
                <div v-for="group in navGroups" :key="group.label">
                    <p class="mb-2 px-3 text-xs font-medium text-slate-400" :class="sidebarCollapsed ? 'lg:hidden' : ''">
                        {{ group.label }}
                    </p>
                    <div class="space-y-1">
                        <NuxtLink v-for="item in group.items" :key="item.to" :to="item.to"
                            class="group flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                            :class="[routeCurrent(item.match) ? 'bg-[#ded4f0] text-[#24202e]' : 'text-slate-400 hover:bg-white/5 hover:text-white', sidebarCollapsed ? 'lg:justify-center lg:px-0' : '']"
                            :aria-label="item.to === '/admin/contacts' && newContactsCount > 0 ? `${item.label}, ${newContactsCount} nuevos` : item.label"
                            :title="sidebarCollapsed ? item.label : undefined"
                            @click="sidebarOpen = false">
                            <component :is="item.icon" class="h-[18px] w-[18px] shrink-0 text-current" />
                            <span class="truncate" :class="sidebarCollapsed ? 'lg:hidden' : ''">{{ item.label }}</span>
                            <span v-if="item.to === '/admin/contacts' && newContactsCount > 0"
                                class="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-semibold text-slate-900"
                                :class="sidebarCollapsed ? 'lg:hidden' : ''">
                                {{ newContactsCount }}
                            </span>
                        </NuxtLink>
                    </div>
                </div>
                <AdminKanbanProjectNavigation v-if="activeProjectContext" :context="activeProjectContext" :collapsed="sidebarCollapsed" @navigate="sidebarOpen = false" />
            </nav>

            <!-- Footer: ver sitio + usuario -->
            <div class="shrink-0 border-t border-white/10 p-3">
                <NuxtLink to="/" target="_blank"
                    class="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    :class="sidebarCollapsed ? 'lg:justify-center lg:px-0' : ''" :aria-label="sidebarCollapsed ? 'Ver sitio web' : undefined" :title="sidebarCollapsed ? 'Ver sitio web' : undefined">
                    <ExternalLink class="h-[18px] w-[18px] shrink-0" />
                    <span :class="sidebarCollapsed ? 'lg:hidden' : ''">Ver sitio web</span>
                    <ChevronRight class="ml-auto h-4 w-4 text-slate-500" :class="sidebarCollapsed ? 'lg:hidden' : ''" />
                </NuxtLink>

                <div class="mt-2 flex min-w-0 items-center gap-3 rounded-lg bg-white/5 p-2" :class="sidebarCollapsed ? 'lg:flex-col lg:justify-center lg:gap-1 lg:px-0' : ''">
                    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-900">
                        {{ (userName || 'Admin').charAt(0).toUpperCase() }}
                    </div>
                    <div class="min-w-0 flex-1 leading-tight" :class="sidebarCollapsed ? 'lg:hidden' : ''">
                        <p class="truncate text-sm font-medium text-white">{{ userName || 'Admin' }}</p>
                        <p class="truncate text-xs text-slate-400">{{ userEmail || 'admin@sysifos.cl' }}</p>
                    </div>
                    <button
                        class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                        aria-label="Cerrar sesión" title="Cerrar sesión" @click="handleLogout">
                        <LogOut class="h-4 w-4" />
                    </button>
                </div>
            </div>
        </aside>

        <!-- ===== Main ===== -->
        <div class="flex min-h-screen flex-col transition-[padding] duration-200 ease-out" :class="sidebarCollapsed ? 'lg:pl-[96px]' : 'lg:pl-[264px]'">
            <!-- Topbar -->
            <header class="sticky top-0 z-40 bg-[#f6f4fa] transition-colors dark:bg-[#141318]">
                <div class="flex h-14 items-center gap-3 px-4 sm:px-6 lg:px-8">
                    <button aria-label="Abrir menú" :aria-expanded="sidebarOpen"
                        class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
                        @click="sidebarOpen = true">
                        <Menu class="h-5 w-5" />
                    </button>

                    <button :aria-label="sidebarCollapsed ? 'Expandir navegación' : 'Contraer navegación'" :aria-expanded="!sidebarCollapsed"
                        class="hidden h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex"
                        @click="sidebarCollapsed = !sidebarCollapsed">
                        <PanelLeftOpen v-if="sidebarCollapsed" class="h-[18px] w-[18px]" />
                        <PanelLeftClose v-else class="h-[18px] w-[18px]" />
                    </button>

                    <!-- Breadcrumb -->
                    <div class="flex min-w-0 items-center gap-2">
                        <NuxtLink to="/admin"
                            class="hidden text-sm font-medium text-slate-600 transition-colors hover:text-sky-800 dark:text-slate-300 dark:hover:text-sky-200 sm:block">
                            SysifosWeb
                        </NuxtLink>
                        <ChevronRight class="hidden h-4 w-4 text-slate-400 dark:text-slate-600 sm:block" />
                        <h1 class="truncate text-sm font-semibold text-slate-950 dark:text-white sm:text-base">
                            {{ pageTitle }}
                        </h1>
                    </div>

                    <!-- Global search -->
                    <div class="relative hidden min-w-0 flex-1 max-w-md md:block">
                        <input
                            v-model="searchQuery"
                            data-global-search
                            type="search"
                            placeholder="Buscar issues… ( / )"
                            aria-label="Buscar issues"
                            class="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                            @focus="searchOpen = true"
                            @keydown.esc.prevent="searchOpen = false"
                        />
                        <div v-if="searchOpen && (searchLoading || searchResults.length)" class="absolute left-0 right-0 top-11 z-50 max-h-80 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                            <p v-if="searchLoading" class="px-3 py-2 text-xs text-slate-500">Buscando…</p>
                            <button v-for="issue in searchResults" :key="issue.id" class="flex w-full items-start gap-2 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800" @click="goToIssue(issue)">
                                <span class="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ issue.issue_key }}</span>
                                <span class="min-w-0 flex-1">
                                    <span class="block truncate text-sm font-medium text-slate-900 dark:text-white">{{ issue.title }}</span>
                                    <span class="block truncate text-xs text-slate-500 dark:text-slate-400">{{ issue.project?.name || issue.project?.project_key || '' }}</span>
                                </span>
                            </button>
                            <p v-if="!searchLoading && !searchResults.length && searchQuery.trim()" class="px-3 py-2 text-xs text-slate-500">Sin resultados.</p>
                        </div>
                    </div>

                    <div class="ml-auto flex items-center gap-1.5">
                        <NuxtLink v-if="activeProjectContext?.permissions.collaborate" :to="{ path: `/admin/kanban/${activeProjectContext.project.id}`, query: { ...route.query, issue: undefined, create: '1' } }" class="mr-2 inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-sky-700 px-3 text-sm font-semibold text-white hover:bg-sky-800"><Plus class="h-4 w-4" />Crear</NuxtLink>
                        <!-- Dark mode -->
                        <button
                            class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                            :title="isDark ? 'Modo claro' : 'Modo oscuro'" @click="toggleDarkMode">
                            <Sun v-if="isDark" class="h-[18px] w-[18px]" />
                            <Moon v-else class="h-[18px] w-[18px]" />
                        </button>

                        <!-- Notificaciones -->
                        <AdminKanbanNotificationBell />
                    </div>
                </div>
            </header>

            <!-- Contenido -->
            <main class="admin-content mx-auto w-full min-w-0 max-w-[1600px] flex-1 px-4 pb-6 pt-2 sm:px-6"
                :class="isHome ? '' : 'mb-4 rounded-2xl bg-white py-6 dark:bg-slate-900'">
                <slot />
            </main>
        </div>

        <!-- Command palette -->
        <div v-if="paletteOpen" class="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 pt-16" @click.self="paletteOpen = false">
            <div class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-900">
                <div class="border-b border-slate-200 p-3 dark:border-slate-800">
                    <input
                        ref="paletteInput"
                        v-model="paletteQuery"
                        type="search"
                        placeholder="Comandos o buscar issues… (Ctrl+K)"
                        aria-label="Paleta de comandos"
                        class="h-9 w-full rounded-lg border border-slate-200 bg-transparent px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:text-slate-100"
                        @keydown.esc.prevent="paletteOpen = false"
                    />
                </div>
                <div class="max-h-80 overflow-auto p-2">
                    <p v-if="paletteLoading" class="px-3 py-2 text-xs text-slate-500">Buscando…</p>
                    <template v-else>
                        <p class="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Navegación</p>
                        <button v-for="cmd in paletteCommands" :key="cmd.label" class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800" @click="runPaletteCommand(cmd)">
                            <component :is="cmd.icon" class="h-4 w-4 text-slate-400" />
                            {{ cmd.label }}
                        </button>
                        <p v-if="paletteResults.length" class="mt-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Issues</p>
                        <button v-for="issue in paletteResults" :key="issue.id" class="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800" @click="goToIssue(issue)">
                            <span class="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ issue.issue_key }}</span>
                            <span class="min-w-0 flex-1">
                                <span class="block truncate text-sm font-medium text-slate-900 dark:text-white">{{ issue.title }}</span>
                                <span class="block truncate text-xs text-slate-500 dark:text-slate-400">{{ issue.project?.name || '' }}</span>
                            </span>
                        </button>
                    </template>
                </div>
            </div>
        </div>

        <!-- Overlay móvil -->
        <div v-show="sidebarOpen" class="fixed inset-0 z-40 bg-black/50 lg:hidden"
            @click="sidebarOpen = false" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, onBeforeUnmount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
    LayoutDashboard, SquareKanban, FileText, Tags, Inbox, Landmark, ClipboardList,
    ExternalLink, LogOut, Sun, Moon, ChevronRight, Menu, X, PanelLeftOpen, PanelLeftClose, Plus,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const projectContext = useState<any>('admin-active-project', () => null);
const activeProjectContext = computed(() => projectContext.value?.project.id === Number(route.params.project) ? projectContext.value : null);
const paletteCommands = computed(() => [
    { label: 'Ir al inicio', to: '/admin', icon: LayoutDashboard },
    { label: 'Mi trabajo', to: '/admin/kanban/my-work', icon: ClipboardList },
    { label: 'Proyectos', to: '/admin/kanban', icon: SquareKanban },
    { label: 'Posts del Blog', to: '/admin/posts', icon: FileText },
    { label: 'Categorías', to: '/admin/categories', icon: Tags },
    { label: 'Contactos', to: '/admin/contacts', icon: Inbox },
])


const isHome = computed(() => /^\/admin\/?$/.test(route.path));
const sidebarOpen = ref(false);
const sidebarCollapsed = ref(true);
const isDark = ref(false);
const newContactsCount = ref(0);
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const searchOpen = ref(false)
const searchLoading = ref(false)
let searchTimer: ReturnType<typeof setTimeout> | undefined

const paletteOpen = ref(false)
const paletteQuery = ref('')
const paletteInput = ref<any>(null)
const paletteResults = ref<any[]>([])
const paletteLoading = ref(false)
let paletteTimer: ReturnType<typeof setTimeout> | undefined


const userEmail = useCookie('user_email');
const userName = useCookie('user_name');
const authToken = useCookie('auth_token');
const config = useRuntimeConfig();
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] });

const navGroups = [
    {
        label: 'General',
        items: [
            { label: 'Inicio', to: '/admin', match: '/admin', icon: LayoutDashboard },
            { label: 'Mercado Público', to: '/admin/mercado-publico', match: '/admin/mercado-publico', icon: Landmark },
            { label: 'Proyectos', to: '/admin/kanban', match: '/admin/kanban', icon: SquareKanban },
            { label: 'Mi trabajo', to: '/admin/kanban/my-work', match: '/admin/kanban/my-work', icon: ClipboardList },
        ],
    },
    {
        label: 'Contenido',
        items: [
            { label: 'Posts del Blog', to: '/admin/posts', match: '/admin/posts', icon: FileText },
            { label: 'Categorías', to: '/admin/categories', match: '/admin/categories', icon: Tags },
        ],
    },
    {
        label: 'Comunicación',
        items: [
            { label: 'Contactos', to: '/admin/contacts', match: '/admin/contacts', icon: Inbox },
        ],
    },
];

const pageTitle = computed(() => {
    const p = route.path;
    if (p === '/admin' || p === '/admin/') return 'Inicio';
    if (p === '/admin/kanban/my-work' || p === '/admin/kanban/my-work/') return 'Mi trabajo';
    if (p === '/admin/kanban' || p === '/admin/kanban/') return 'Proyectos Kanban';
    if (p.startsWith('/admin/kanban/') && p.endsWith('/timeline')) return 'Timeline del proyecto';
    if (p.startsWith('/admin/kanban/') && p.endsWith('/reports')) return 'Reportes del proyecto';
    if (p.startsWith('/admin/kanban/')) return route.query.view === 'list' ? 'Issues del proyecto' : 'Tablero Kanban';
    if (p.startsWith('/admin/projects/')) return 'Configuración del proyecto';
    if (p.startsWith('/admin/mercado-publico')) return 'Mercado Público';
    if (p.startsWith('/admin/posts')) {
        if (p.endsWith('/create')) return 'Nuevo Post';
        if (p.includes('/edit')) return 'Editar Post';
        if (/^\/admin\/posts\/\d+/.test(p)) return 'Detalle de Post';
        return 'Posts del Blog';
    }
    if (p.startsWith('/admin/categories')) {
        if (p.endsWith('/create')) return 'Nueva Categoría';
        if (p.includes('/edit')) return 'Editar Categoría';
        if (/^\/admin\/categories\/\d+/.test(p)) return 'Detalle de Categoría';
        return 'Categorías';
    }
    if (p.startsWith('/admin/contacts')) {
        if (/^\/admin\/contacts\/\d+/.test(p)) return 'Detalle de Contacto';
        return 'Contactos';
    }
    return 'Panel de Administración';
});

const routeCurrent = (path: string) => {
    if (path === '/admin') return isHome.value;
    if (path === '/admin/kanban/my-work') return route.path === path || route.path.startsWith(path + '/');
    if (path === '/admin/kanban') return (route.path === path || route.path.startsWith(path + '/')) && !route.path.startsWith('/admin/kanban/my-work') || route.path.startsWith('/admin/projects/');
    return route.path.startsWith(path);
};

const fetchNewContacts = async () => {
    try {
        const res = await $fetch(`${config.public.apiUrl}contact`, {
            headers: { Authorization: `Bearer ${authToken.value}`, Accept: 'application/json' },
            query: { status: 'new', per_page: 1 },
        });
        const r = res as any
        newContactsCount.value = r?.total ?? r?.data?.total ?? 0;
    } catch {
        newContactsCount.value = 0;
    }
};

const handleLogout = async () => {
    const { default: Swal } = await import('sweetalert2');
    const result = await Swal.fire({
        title: '¿Cerrar sesión?',
        text: 'Serás redirigido al login',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#0ea5e9',
        cancelButtonColor: '#64748b',
        background: '#1e293b',
        color: '#fff',
    });
    if (result.isConfirmed) {
        try {
            await $fetch(`${config.public.apiUrl}auth/logout`, {
                method: 'POST', headers: { Authorization: `Bearer ${authToken.value}`, Accept: 'application/json' }
            });
        } catch { /* La sesión local debe cerrarse también si el servidor no responde. */ }
        authToken.value = null;
        userEmail.value = null;
        userName.value = null;
        projectContext.value = null;
        router.push('/admin/login');
    }
};

const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

const fetchSearch = async (q: string) => {
    if (!q.trim()) return []
    try {
        const res = await $fetch<any>(`${config.public.apiUrl}kanban/search`, {
            headers: { Authorization: `Bearer ${authToken.value}`, Accept: 'application/json' },
            query: { q: q.trim(), limit: 15 },
        })
        return (res?.data || res || []) as any[]
    } catch {
        return []
    }
}

const goToIssue = (issue: any) => {
    searchOpen.value = false
    paletteOpen.value = false
    searchQuery.value = ''
    paletteQuery.value = ''
    searchResults.value = []
    paletteResults.value = []
    void router.push({ path: `/admin/kanban/${issue.kanban_project_id}`, query: { issue: String(issue.id) } })
}

const openPalette = () => {
    paletteOpen.value = true
    paletteQuery.value = ''
    paletteResults.value = []
    nextTick(() => paletteInput.value?.focus())
}

const runPaletteCommand = (cmd: any) => {
    paletteOpen.value = false
    paletteQuery.value = ''
    paletteResults.value = []
    void router.push(cmd.to)
}

const closeSearch = () => { searchOpen.value = false }

watch(searchQuery, (q) => {
    clearTimeout(searchTimer)
    if (!q.trim()) { searchResults.value = []; return }
    searchTimer = setTimeout(async () => {
        searchLoading.value = true
        searchResults.value = await fetchSearch(q)
        searchLoading.value = false
    }, 250)
})

watch(paletteQuery, (q) => {
    clearTimeout(paletteTimer)
    if (!q.trim()) { paletteResults.value = []; return }
    paletteTimer = setTimeout(async () => {
        paletteLoading.value = true
        paletteResults.value = await fetchSearch(q)
        paletteLoading.value = false
    }, 250)
})

const handleKeydown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null
    const isInput = !!target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
    if (e.key === 'Escape') {
        if (paletteOpen.value) { paletteOpen.value = false; e.preventDefault(); return }
        if (searchOpen.value) { searchOpen.value = false; return }
        return
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (paletteOpen.value) paletteOpen.value = false
        else openPalette()
        return
    }
    if (isInput) return
    if (e.key === '/') {
        e.preventDefault()
        const input = document.querySelector('[data-global-search]') as HTMLInputElement | null
        input?.focus()
        searchOpen.value = true
        return
    }
    if (e.key.toLowerCase() === 'c') {
        const ctx = projectContext.value
        if (ctx?.project?.id && ctx?.permissions?.collaborate) {
            e.preventDefault()
            void router.push({ path: `/admin/kanban/${ctx.project.id}`, query: { ...route.query, create: '1' } })
        }
    }
}

onMounted(() => {
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    }
    fetchNewContacts();
    window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
});
</script>
