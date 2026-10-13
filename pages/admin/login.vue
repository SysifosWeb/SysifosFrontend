<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Sun, Moon, Mail, Lock, ArrowLeft, Loader2, AlertCircle, ShieldCheck } from 'lucide-vue-next';

// Usar layout oculto para que sea una pantalla independiente
definePageMeta({
    layout: false
});
useHead({ title: 'Acceso · SysifosWeb', meta: [{ name: 'robots', content: 'noindex, nofollow' }] });

const router = useRouter();
const isDark = ref(false);
const loading = ref(false);
const form = ref({
    email: '',
    password: '',
    remember: false
});

const config = useRuntimeConfig();
const errorMessage = ref('');
const tokenCookie = useCookie('auth_token', { maxAge: 60 * 60 * 24 * 7 }); // Definir de forma sincrona en setup
const userEmailCookie = useCookie('user_email', { maxAge: 60 * 60 * 24 * 7 }); // Cookie para guardar el email
const userNameCookie = useCookie('user_name', { maxAge: 60 * 60 * 24 * 7 }); // Cookie para guardar el nombre

// Manejo del Login
const handleLogin = async () => {
    loading.value = true;
    errorMessage.value = '';

    try {
        const response = await $fetch(`${config.public.apiUrl}auth/login`, {
            method: 'POST',
            body: {
                email: form.value.email,
                password: form.value.password,
            }
        });

        // Guardar token en cookie
        tokenCookie.value = response.token || response?.data?.token || response?.access_token;

        const profile = response.user || await $fetch(`${config.public.apiUrl}auth/me`, {
            headers: { Authorization: `Bearer ${tokenCookie.value}`, Accept: 'application/json' }
        });
        userEmailCookie.value = profile.email || form.value.email;
        userNameCookie.value = profile.name || 'Admin';

        // Redirigir al área de admin
        await navigateTo('/admin');
    } catch (error) {
        console.error('Error de login:', error);
        const status = error.response?.status || error.status;
        if (status === 429) {
            errorMessage.value = 'Demasiados intentos fallidos. Por favor espera un momento antes de intentar de nuevo.';
        } else if (status === 401 || status === 422) {
            errorMessage.value = error.response?._data?.message || error.data?.message || 'Credenciales inválidas.';
        } else {
            errorMessage.value = error.response?._data?.message || error.data?.message || 'Credenciales inválidas o error de conexión.';
        }
    } finally {
        loading.value = false;
    }
};

// Manejo del Modo Oscuro
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

// Verificar estado inicial al renderizar
onMounted(() => {
    // Revisar preferencia guardada o color del sistema
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    }
});
</script>

<template>
    <div class="admin-scope relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B1222] px-4 py-12">
        <!-- Fondo decorativo -->
        <div class="pointer-events-none absolute inset-0">
            <div class="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
            <div class="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
            <div class="absolute inset-0 opacity-[0.035]"
                style="background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0); background-size: 32px 32px;" />
        </div>

        <!-- Toggle Modo Oscuro -->
        <div class="absolute right-4 top-4 sm:right-6 sm:top-6">
            <button @click="toggleDarkMode"
                class="rounded-xl bg-white/5 p-2.5 text-slate-400 ring-1 ring-white/10 backdrop-blur transition-all hover:text-white hover:ring-white/25"
                :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'">
                <Sun v-if="isDark" class="h-5 w-5" />
                <Moon v-else class="h-5 w-5" />
            </button>
        </div>

        <!-- Brand -->
        <div class="relative z-10 mb-8 flex flex-col items-center gap-3">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-2xl shadow-sky-500/25">
                <span class="font-display text-2xl font-bold text-[#07101F]">S</span>
            </div>
            <div class="text-center">
                <h2 class="font-display text-2xl font-bold text-white">SysifosWeb Admin</h2>
                <p class="mt-1 flex items-center justify-center gap-1.5 text-sm text-slate-400">
                    <ShieldCheck class="h-4 w-4 text-sky-400" />
                    Inicia sesión para continuar
                </p>
            </div>
        </div>

        <!-- Card -->
        <div class="relative z-10 w-full max-w-md">
            <div class="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl dark:bg-slate-900/60">
                <form class="space-y-5" @submit.prevent="handleLogin">
                    <!-- Mensaje de error -->
                    <div v-if="errorMessage"
                        class="flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                        <AlertCircle class="h-4 w-4 shrink-0" />
                        {{ errorMessage }}
                    </div>

                    <!-- Email -->
                    <div>
                        <label for="email" class="mb-1.5 block text-sm font-medium text-slate-300">
                            Correo Electrónico
                        </label>
                        <div class="relative">
                            <Mail class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                            <input id="email" name="email" type="email" autocomplete="email" required
                                v-model="form.email" placeholder="tu@empresa.cl"
                                class="!border-white/10 !bg-white/[0.06] !pl-10 !text-white !placeholder-slate-500 focus:!border-sky-400/60" />
                        </div>
                    </div>

                    <!-- Password -->
                    <div>
                        <label for="password" class="mb-1.5 block text-sm font-medium text-slate-300">
                            Contraseña
                        </label>
                        <div class="relative">
                            <Lock class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                required v-model="form.password" placeholder="••••••••"
                                class="!border-white/10 !bg-white/[0.06] !pl-10 !text-white !placeholder-slate-500 focus:!border-sky-400/60" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" v-model="form.remember"
                                class="h-4 w-4 rounded border-white/20 bg-white/10 text-sky-500 focus:ring-sky-400/40" />
                            <label for="remember-me" class="ml-2 block text-sm text-slate-400">
                                Recordarme
                            </label>
                        </div>
                    </div>

                    <button type="submit" :disabled="loading"
                        class="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 py-3 text-sm font-bold text-[#07101F] shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60">
                        <Loader2 v-if="loading" class="h-4 w-4 animate-spin" />
                        {{ loading ? 'Iniciando sesión…' : 'Iniciar Sesión' }}
                    </button>
                </form>
            </div>

            <div class="mt-6 text-center">
                <NuxtLink to="/"
                    class="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                    <ArrowLeft class="h-4 w-4" />
                    Volver al sitio principal
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
