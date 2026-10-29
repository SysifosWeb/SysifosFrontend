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
                        <NuxtLink to="/admin/contacts"
                            class="relative flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                            :title="newContactsCount > 0 ? `${newContactsCount} contactos nuevos` : 'Contactos'">
                            <Bell class="h-[18px] w-[18px]" />
                            <span v-if="newContactsCount > 0"
                                class="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-950">
                                {{ newContactsCount > 9 ? '9+' : newContactsCount }}
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </header>

            <!-- Contenido -->
            <main class="admin-content mx-auto w-full min-w-0 max-w-[1600px] flex-1 px-4 pb-6 pt-2 sm:px-6"
                :class="isHome ? '' : 'mb-4 rounded-2xl bg-white py-6 dark:bg-slate-900'">
                <slot />
            </main>
        </div>

        <!-- Overlay móvil -->
        <div v-show="sidebarOpen" class="fixed inset-0 z-40 bg-black/50 lg:hidden"
            @click="sidebarOpen = false" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
    LayoutDashboard, SquareKanban, FileText, Tags, Inbox, Landmark,
    ExternalLink, LogOut, Sun, Moon, Bell, ChevronRight, Menu, X, PanelLeftOpen, PanelLeftClose, Plus,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const projectContext = useState('admin-active-project', () => null);
const activeProjectContext = computed(() => projectContext.value?.project.id === Number(route.params.project) ? projectContext.value : null);

const isHome = computed(() => /^\/admin\/?$/.test(route.path));
const sidebarOpen = ref(false);
const sidebarCollapsed = ref(true);
const isDark = ref(false);
const newContactsCount = ref(0);

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
    if (p === '/admin/kanban' || p === '/admin/kanban/') return 'Proyectos Kanban';
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

const routeCurrent = (path) => {
    if (path === '/admin') return isHome.value;
    if (path === '/admin/kanban') return route.path.startsWith(path) || route.path.startsWith('/admin/projects/');
    return route.path.startsWith(path);
};

const fetchNewContacts = async () => {
    try {
        const res = await $fetch(`${config.public.apiUrl}contact`, {
            headers: { Authorization: `Bearer ${authToken.value}`, Accept: 'application/json' },
            query: { status: 'new', per_page: 1 },
        });
        newContactsCount.value = res?.total ?? res?.data?.total ?? 0;
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

onMounted(() => {
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    }
    fetchNewContacts();
});
</script>
