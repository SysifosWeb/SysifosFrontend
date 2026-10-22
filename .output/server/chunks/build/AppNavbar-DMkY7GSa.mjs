import { c as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './BrandLogo-CG19ElAN.mjs';
import { ref, computed, watch, nextTick, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
const _sfc_main = {
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const menuRef = ref(null);
    let lastFocused = null;
    const route = useRoute();
    const currentRoute = computed(() => route.path);
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !menuRef.value) return;
      const nodes = Array.from(menuRef.value.querySelectorAll(FOCUSABLE)).filter((el) => el.offsetParent !== null || el === (void 0).activeElement);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && (void 0).activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (void 0).activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const lockBodyScroll = (lock) => {
      (void 0).body.style.overflow = lock ? "hidden" : "";
    };
    watch(isMenuOpen, async (open) => {
      var _a;
      if (open) {
        lastFocused = (void 0).activeElement;
        lockBodyScroll(true);
        (void 0).addEventListener("keydown", handleKeydown);
        await nextTick();
        const nodes = (_a = menuRef.value) == null ? void 0 : _a.querySelectorAll(FOCUSABLE);
        if (nodes && nodes.length) nodes[0].focus();
      } else {
        lockBodyScroll(false);
        (void 0).removeEventListener("keydown", handleKeydown);
        if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
      }
    });
    watch(() => route.fullPath, () => {
      closeMenu();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BrandLogo = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "site-nav absolute top-0 left-0 w-full z-[1002] bg-transparent" }, _attrs))}><div class="site-container border-b border-[var(--border)]"><div class="flex items-center justify-between py-10 lg:py-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        external: "",
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BrandLogo, { class: "h-8 md:h-10 w-auto aspect-[403/80]" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BrandLogo, { class: "h-8 md:h-10 w-auto aspect-[403/80]" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center"><ul class="flex items-center gap-12"><!--[-->`);
      ssrRenderList([
        { to: "/", label: "Inicio" },
        { to: "/nosotros", label: "Nosotros" },
        { to: "/servicios", label: "Servicios" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" }
      ], (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          external: item.to === "/",
          to: item.to,
          class: ["nav-link text-[15px] tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-all font-tech uppercase", { "text-accent": currentRoute.value === item.to }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        class: "btn btn-primary ml-6 text-[13px] uppercase tracking-widest font-tech"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contacto `);
          } else {
            return [
              createTextVNode(" Contacto ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><button class="lg:hidden text-accent rounded-sm min-w-11 min-h-11 flex items-center justify-center"${ssrRenderAttr("aria-expanded", isMenuOpen.value)} aria-controls="mobile-menu"${ssrRenderAttr("aria-label", isMenuOpen.value ? "Cerrar men\xFA" : "Abrir men\xFA")}><div class="space-y-1.5" aria-hidden="true"><div class="${ssrRenderClass([{ "rotate-45 translate-y-2": isMenuOpen.value }, "w-5 h-[1px] bg-accent transition-all"])}"></div><div class="${ssrRenderClass([{ "opacity-0": isMenuOpen.value }, "w-5 h-[1px] bg-accent transition-all"])}"></div><div class="${ssrRenderClass([{ "-rotate-45 -translate-y-2": isMenuOpen.value }, "w-5 h-[1px] bg-accent transition-all"])}"></div></div></button></div></div>`);
      if (isMenuOpen.value) {
        _push(`<div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Men\xFA de navegaci\xF3n" tabindex="-1" class="fixed inset-0 z-[2000] bg-[var(--bg-dark)] flex flex-col p-10 overflow-y-auto"><div class="absolute inset-0 technical-grid opacity-5 pointer-events-none" aria-hidden="true"></div><div class="flex items-center justify-between mb-24">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          external: "",
          to: "/",
          onClick: closeMenu,
          class: "flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BrandLogo, { class: "h-8 md:h-10 w-auto aspect-[403/80]" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BrandLogo, { class: "h-8 md:h-10 w-auto aspect-[403/80]" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="text-accent rounded-sm" aria-label="Cerrar men\xFA"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="square" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><nav aria-label="Men\xFA principal m\xF3vil"><ul class="flex-grow flex flex-col space-y-10"><!--[-->`);
        ssrRenderList([
          { to: "/", label: "Inicio" },
          { to: "/nosotros", label: "Nosotros" },
          { to: "/servicios", label: "Servicios" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/blog", label: "Blog" },
          { to: "/contacto", label: "Contacto" }
        ], (item) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            external: item.to === "/",
            to: item.to,
            class: "text-2xl font-bold tracking-widest text-[var(--text-main)] font-tech uppercase transition-colors hover:text-accent"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppNavbar-DMkY7GSa.mjs.map
