import { b as useHead, i as useCookie, c as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { Sun, Moon, ShieldCheck, AlertCircle, Mail, Lock, Loader2, ArrowLeft } from 'lucide-vue-next';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Acceso \xB7 SysifosWeb", meta: [{ name: "robots", content: "noindex, nofollow" }] });
    useRouter();
    const isDark = ref(false);
    const loading = ref(false);
    const form = ref({
      email: "",
      password: "",
      remember: false
    });
    const errorMessage = ref("");
    useCookie("auth_token");
    useCookie("user_email");
    useCookie("user_name");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-scope relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B1222] px-4 py-12" }, _attrs))}><div class="pointer-events-none absolute inset-0"><div class="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div><div class="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div><div class="absolute inset-0 opacity-[0.035]" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", "background-size": "32px 32px" })}"></div></div><div class="absolute right-4 top-4 sm:right-6 sm:top-6"><button class="rounded-xl bg-white/5 p-2.5 text-slate-400 ring-1 ring-white/10 backdrop-blur transition-all hover:text-white hover:ring-white/25"${ssrRenderAttr("title", isDark.value ? "Cambiar a modo claro" : "Cambiar a modo oscuro")}>`);
      if (isDark.value) {
        _push(ssrRenderComponent(unref(Sun), { class: "h-5 w-5" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "h-5 w-5" }, null, _parent));
      }
      _push(`</button></div><div class="relative z-10 mb-8 flex flex-col items-center gap-3"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-2xl shadow-sky-500/25"><span class="font-display text-2xl font-bold text-[#07101F]">S</span></div><div class="text-center"><h2 class="font-display text-2xl font-bold text-white">SysifosWeb Admin</h2><p class="mt-1 flex items-center justify-center gap-1.5 text-sm text-slate-400">`);
      _push(ssrRenderComponent(unref(ShieldCheck), { class: "h-4 w-4 text-sky-400" }, null, _parent));
      _push(` Inicia sesi\xF3n para continuar </p></div></div><div class="relative z-10 w-full max-w-md"><div class="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl dark:bg-slate-900/60"><form class="space-y-5">`);
      if (errorMessage.value) {
        _push(`<div class="flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">`);
        _push(ssrRenderComponent(unref(AlertCircle), { class: "h-4 w-4 shrink-0" }, null, _parent));
        _push(` ${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label for="email" class="mb-1.5 block text-sm font-medium text-slate-300"> Correo Electr\xF3nico </label><div class="relative">`);
      _push(ssrRenderComponent(unref(Mail), { class: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" }, null, _parent));
      _push(`<input id="email" name="email" type="email" autocomplete="email" required${ssrRenderAttr("value", form.value.email)} placeholder="tu@empresa.cl" class="!border-white/10 !bg-white/[0.06] !pl-10 !text-white !placeholder-slate-500 focus:!border-sky-400/60"></div></div><div><label for="password" class="mb-1.5 block text-sm font-medium text-slate-300"> Contrase\xF1a </label><div class="relative">`);
      _push(ssrRenderComponent(unref(Lock), { class: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" }, null, _parent));
      _push(`<input id="password" name="password" type="password" autocomplete="current-password" required${ssrRenderAttr("value", form.value.password)} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="!border-white/10 !bg-white/[0.06] !pl-10 !text-white !placeholder-slate-500 focus:!border-sky-400/60"></div></div><div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.remember) ? ssrLooseContain(form.value.remember, null) : form.value.remember) ? " checked" : ""} class="h-4 w-4 rounded border-white/20 bg-white/10 text-sky-500 focus:ring-sky-400/40"><label for="remember-me" class="ml-2 block text-sm text-slate-400"> Recordarme </label></div></div><button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 py-3 text-sm font-bold text-[#07101F] shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60">`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(loading.value ? "Iniciando sesi\xF3n\u2026" : "Iniciar Sesi\xF3n")}</button></form></div><div class="mt-6 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` Volver al sitio principal `);
          } else {
            return [
              createVNode(unref(ArrowLeft), { class: "h-4 w-4" }),
              createTextVNode(" Volver al sitio principal ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CLm9JPET.mjs.map
