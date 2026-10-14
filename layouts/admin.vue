<template>
    <div class="admin-scope min-h-screen bg-slate-100/70 dark:bg-slate-950">
        <!-- ===== Sidebar ===== -->
        <aside class="fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col border-r border-white/[0.06] bg-[#0B1222] transition-transform duration-300 ease-in-out lg:translate-x-0"
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">

            <!-- Brand -->
            <div class="flex h-16 items-center gap-3 border-b border-white/[0.06] px-5">
                <div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-lg shadow-sky-500/25">
                    <span class="font-display text-lg font-bold text-[#07101F]">S</span>
                </div>
                <div class="min-w-0 leading-tight">
                    <p class="truncate font-display text-sm font-semibold text-white">SysifosWeb</p>
                    <p class="text-[11px] font-medium tracking-wide text-sky-400/80">Panel de gestión</p>
                </div>
                <button aria-label="Cerrar menú" class="ml-auto rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
                    @click="sidebarOpen = false">
                    <X class="h-5 w-5" />
                </button>
            </div>

            <!-- Nav -->
            <nav class="flex-1 space-y-6 overflow-y-auto px-3 py-5 scrollbar-thin">
                <div v-for="group in navGroups" :key="group.label">
                    <p class="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {{ group.label }}
                    </p>
                    <div class="space-y-1">
                        <NuxtLink v-for="item in group.items" :key="item.to" :to="item.to"
                            class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200"
                            :class="routeCurrent(item.match)
                                ? 'bg-white/[0.07] text-white'
                                : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-100'"
                            @click="sidebarOpen = false">
                            <span class="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-sky-400 transition-all duration-200"
                                :class="routeCurrent(item.match) ? 'opacity-100' : 'opacity-0'" />
                            <component :is="item.icon" class="h-[18px] w-[18px] shrink-0 transition-colors"
                                :class="routeCurrent(item.match) ? 'text-sky-400' : 'text-slate-500 group-hover:text-slate-300'" />
                            {{ item.label }}
                            <span v-if="item.to === '/admin/contacts' && newContactsCount > 0"
                                class="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500/90 px-1.5 text-[11px] font-bold text-[#07101F]">
                                {{ newContactsCount }}
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </nav>

            <!-- Footer: ver sitio + usuario -->
            <div class="border-t border-white/[0.06] p-3">
                <NuxtLink to="/" target="_blank"
                    class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-slate-100">
                    <ExternalLink class="h-[18px] w-[18px] text-slate-500" />
                    Ver sitio web
                    <ChevronRight class="ml-auto h-4 w-4 text-slate-600" />
                </NuxtLink>

                <div class="mt-2 flex items-center gap-3 rounded-xl bg-white/[0.04] p-3">
                    <div
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-sm font-bold text-[#07101F]">
                        {{ (userName || 'Admin').charAt(0).toUpperCase() }}
                    </div>
                    <div class="min-w-0 flex-1 leading-tight">
                        <p class="truncate text-sm font-medium text-white">{{ userName || 'Admin' }}</p>
                        <p class="truncate text-xs text-slate-500">{{ userEmail || 'admin@sysifos.cl' }}</p>
                    </div>
                    <button
                        class="rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
                        title="Cerrar sesión" @click="handleLogout">
                        <LogOut class="h-4 w-4" />
                    </button>
                </div>
            </div>
        </aside>

        <!-- ===== Main ===== -->
        <div class="flex min-h-screen flex-col lg:pl-[264px]">
            <!-- Topbar -->
            <header
                class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-slate-950/80">
                <div class="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
                    <button aria-label="Abrir menú" :aria-expanded="sidebarOpen"
                        class="rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-200 lg:hidden"
                        @click="sidebarOpen = true">
                        <Menu class="h-5 w-5" />
                    </button>

                    <!-- Breadcrumb -->
                    <div class="flex min-w-0 items-center gap-2">
                        <NuxtLink to="/admin"
                            class="hidden text-sm font-medium text-slate-400 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-400 sm:block">
                            Admin
                        </NuxtLink>
                        <ChevronRight class="hidden h-4 w-4 text-slate-300 dark:text-slate-600 sm:block" />
                        <h1 class="truncate text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                            {{ pageTitle }}
                        </h1>
                    </div>

                    <div class="ml-auto flex items-center gap-1.5">
                        <!-- Dark mode -->
                        <button
                            class="rounded-xl p-2.5 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-100"
                            :title="isDark ? 'Modo claro' : 'Modo oscuro'" @click="toggleDarkMode">
                            <Sun v-if="isDark" class="h-[18px] w-[18px]" />
                            <Moon v-else class="h-[18px] w-[18px]" />
                        </button>

                        <!-- Notificaciones -->
                        <NuxtLink to="/admin/contacts"
                            class="relative rounded-xl p-2.5 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-100"
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
            <main class="mx-auto w-full max-w-[1600px] flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
                <slot />
            </main>
        </div>

        <!-- Overlay móvil -->
        <div v-show="sidebarOpen" class="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            @click="sidebarOpen = false" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
    LayoutDashboard, SquareKanban, FileText, Tags, Inbox,
    ExternalLink, LogOut, Sun, Moon, Bell, ChevronRight, Menu, X,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();

const sidebarOpen = ref(false);
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
            { label: 'Dashboard', to: '/admin', match: '/admin', icon: LayoutDashboard },
            { label: 'Kanban', to: '/admin/kanban', match: '/admin/kanban', icon: SquareKanban },
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
    if (p === '/admin' || p === '/admin/') return 'Dashboard';
    if (p === '/admin/kanban' || p === '/admin/kanban/') return 'Proyectos Kanban';
    if (p.startsWith('/admin/kanban/')) return 'Tablero Kanban';
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
    if (path === '/admin') return route.path === '/admin';
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
