<template>
    <div class="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <!-- Sidebar -->
        <div class="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-lg border-r border-transparent dark:border-slate-700 transform transition-all duration-300 ease-in-out"
            :class="sidebarOpen
                    ? 'translate-x-0'
                    : '-translate-x-full lg:translate-x-0'
                ">
            <!-- Logo -->
            <div class="flex items-center justify-center h-16 px-4 bg-blue-600 dark:bg-blue-700 transition-colors duration-300">
                <div class="text-white font-bold text-lg">SysifosWeb Admin</div>
            </div>

            <!-- Navigation -->
            <nav class="mt-8">
                <div class="px-4 space-y-2">
                    <!-- Dashboard -->
                    <NuxtLink to="/admin"
                        class="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors" :class="routeCurrent('/admin')
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                            ">
                        <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                        </svg>
                        Dashboard
                    </NuxtLink>

                    <!-- Posts -->
                    <NuxtLink to="/admin/posts"
                        class="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors" :class="routeCurrent('/admin/posts')
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                            ">
                        <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Posts del Blog
                    </NuxtLink>

                    <!-- Categorías -->
                    <NuxtLink to="/admin/categories"
                        class="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors" :class="routeCurrent('/admin/categories')
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                            ">
                        <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Categorías
                    </NuxtLink>

                    <!-- Contactos -->
                    <NuxtLink to="/admin/contacts"
                        class="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors" :class="routeCurrent('/admin/contacts')
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                            ">
                        <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contactos
                        <span v-if="newContactsCount > 0"
                            class="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                            {{ newContactsCount }}
                        </span>
                    </NuxtLink>
                </div>

                <!-- Separador -->
                <div class="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700 transition-colors">
                    <div class="px-4 space-y-2">
                        <!-- Ver sitio -->
                        <NuxtLink to="/" target="_blank"
                            class="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                            <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ver Sitio Web
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Main content -->
        <div class="lg:pl-64 flex flex-col min-h-screen">
            <!-- Top bar -->
            <div class="sticky top-0 z-40 bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
                <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                    <!-- Mobile menu button -->
                    <button @click="sidebarOpen = !sidebarOpen"
                        class="lg:hidden p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <!-- Page title -->
                    <div class="flex-1 min-w-0">
                        <h1 class="text-lg font-semibold text-gray-900 dark:text-white truncate transition-colors duration-300">
                            Panel de Administración
                        </h1>
                    </div>

                    <!-- Botones derecha -->
                    <div class="relative ml-4 flex items-center space-x-4">
                        
                        <!-- Toggle Modo Oscuro -->
                        <button @click="toggleDarkMode"
                            class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                            :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
                            <!-- Sol (Light Mode) -->
                            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                            <!-- Luna (Dark Mode) -->
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                </path>
                            </svg>
                        </button>

                        <!-- Notifications -->
                        <NuxtLink to="/admin/contacts"
                            class="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 relative transition-colors"
                            :title="newContactsCount > 0 ? `${newContactsCount} contactos nuevos` : 'Ver contactos'">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-5 5v-5zM10.5 3.5a6 6 0 0 1 6 6v2l1.5 1.5v1h-13v-1L6.5 11.5v-2a6 6 0 0 1 6-6z" />
                            </svg>
                            <span v-if="newContactsCount > 0"
                                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                {{ newContactsCount }}
                            </span>
                        </NuxtLink>

                        <!-- User dropdown -->
                        <div class="relative">
                            <button @click="userMenuOpen = !userMenuOpen"
                                class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900">
                                <div class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                    <span class="text-white font-medium text-sm">
                                        A
                                    </span>
                                </div>
                                <span class="ml-2 text-gray-700 dark:text-gray-200 font-medium hidden sm:block">
                                    Admin
                                </span>
                                <svg class="ml-1 h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="userMenuOpen" @click.away="userMenuOpen = false"
                                class="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-slate-700 transition">
                                <div class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-slate-700">
                                    admin@sysifos.cl
                                </div>
                                <button @click="handleLogout"
                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page content -->
            <main class="flex-1 p-4 sm:p-6 lg:p-8">
                <slot />
            </main>
        </div>

        <!-- Mobile sidebar overlay -->
        <div v-show="sidebarOpen" @click="sidebarOpen = false"
            class="fixed inset-0 z-40 bg-gray-600/75 dark:bg-slate-900/80 lg:hidden transition-opacity"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const sidebarOpen = ref(false);
const userMenuOpen = ref(false);
const isDark = ref(false);
const newContactsCount = ref(0);

const routeCurrent = (path) => {
    return route.path.startsWith(path) && path !== '/admin' || (path === '/admin' && route.path === '/admin');
};

const handleLogout = () => {
    const token = useCookie('auth_token');
    token.value = null; // Limpiar token
    router.push('/admin/login');
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
});
</script>
