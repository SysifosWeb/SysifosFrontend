import { defineComponent, computed, ref, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { Landmark, Loader2, Search, ArrowRight, X, Copy, ExternalLink } from 'lucide-vue-next';
import { _ as _export_sfc, e as useHead, g as useCookie, f as useRuntimeConfig } from './server.mjs';
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
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Mercado P\xFAblico \xB7 SysifosWeb" });
    const tabs = [
      { id: "licitaciones", label: "Licitaciones", description: "Convocatorias para ofrecer servicios y soluciones." },
      { id: "compra-agil", label: "Compra \xC1gil", description: "Solicitudes de cotizaci\xF3n publicadas por organismos del Estado." },
      { id: "ordenes-compra", label: "\xD3rdenes de compra", description: "Antecedentes de compras realizadas. No son convocatorias abiertas." }
    ];
    const stateOptions = computed(() => source.value === "compra-agil" ? [["publicada", "Publicadas"], ["cerrada", "Cerradas"], ["desierta", "Desiertas"], ["cancelada", "Canceladas"], ["proveedor_seleccionado", "Proveedor seleccionado"]] : source.value === "ordenes-compra" ? [["todos", "Todos"], ["enviadaproveedor", "Enviadas a proveedor"], ["aceptada", "Aceptadas"], ["cancelada", "Canceladas"], ["recepcionconforme", "Recepci\xF3n conforme"], ["pendienterecepcion", "Pendientes de recepci\xF3n"]] : [["activas", "Activas"], ["publicada", "Publicadas"], ["cerrada", "Cerradas"], ["adjudicada", "Adjudicadas"], ["desierta", "Desiertas"], ["revocada", "Revocadas"], ["suspendida", "Suspendidas"], ["todos", "Todos"]]);
    const regions = ["Tarapac\xE1", "Antofagasta", "Atacama", "Coquimbo", "Valpara\xEDso", "O\u2019Higgins", "Maule", "Biob\xEDo", "La Araucan\xEDa", "Los Lagos", "Ays\xE9n", "Magallanes", "Metropolitana", "Los R\xEDos", "Arica y Parinacota", "\xD1uble"];
    function day(offset = 0) {
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() + offset);
      return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Santiago", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
    }
    const source = ref("licitaciones");
    const form = reactive({ q: "web, software, inform\xE1tica, digitalizaci\xF3n", excluir: "", codigo: "", estado: "activas", fecha: "", desde: day(-14), hasta: day(), region: "" });
    useCookie("auth_token");
    const config = useRuntimeConfig();
    `${String(config.public.apiUrl).replace(/\/$/, "")}/mercado-publico/procesos`;
    const loading = ref(false);
    const error = ref("");
    const result = ref(null);
    ref(null);
    const page = ref(1);
    ref();
    const detail = ref(null);
    const detailLoading = ref(false);
    const detailError = ref("");
    const copied = ref(false);
    const activeDescription = computed(() => {
      var _a;
      return (_a = tabs.find((tab) => tab.id === source.value)) == null ? void 0 : _a.description;
    });
    function money(item) {
      if (item.monto === null || item.monto === void 0) return "Monto no informado";
      return `${new Intl.NumberFormat("es-CL", { maximumFractionDigits: 2 }).format(Number(item.monto))} ${item.moneda || ""}`.trim();
    }
    function dateText(value) {
      if (!value) return "No informada";
      if (/Z$|[+-]\d{2}:\d{2}$/.test(value)) {
        const date = new Date(value);
        if (!Number.isNaN(date.getTime())) return new Intl.DateTimeFormat("es-CL", { timeZone: "America/Santiago", dateStyle: "short", timeStyle: "short" }).format(date);
      }
      const match = value.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/);
      return match ? `${match[3]}/${match[2]}/${match[1]} ${match[4]}:${match[5]}` : value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-d5cac0dc><header data-v-d5cac0dc><p class="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400" data-v-d5cac0dc>Desarrollo comercial</p><h2 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white" data-v-d5cac0dc>`);
      _push(ssrRenderComponent(unref(Landmark), { class: "h-7 w-7 text-sky-500" }, null, _parent));
      _push(` Mercado P\xFAblico</h2><p class="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Encuentren requerimientos para Sysifosweb y revisen sus antecedentes antes de preparar una oferta.</p></header><nav aria-label="Tipo de consulta" class="flex flex-wrap gap-2" data-v-d5cac0dc><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button type="button"${ssrRenderAttr("aria-pressed", unref(source) === tab.id)} class="${ssrRenderClass([unref(source) === tab.id ? "bg-sky-600 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800", "rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"])}" data-v-d5cac0dc>${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></nav><form class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 sm:p-6" data-v-d5cac0dc><p class="mb-5 text-sm text-slate-600 dark:text-slate-300" data-v-d5cac0dc>${ssrInterpolate(unref(activeDescription))}</p><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-v-d5cac0dc><label class="mp-label" data-v-d5cac0dc>C\xF3digo exacto <input${ssrRenderAttr("value", unref(form).codigo)} class="mp-input" maxlength="100" placeholder="Opcional: buscar un proceso espec\xEDfico" data-v-d5cac0dc></label><label class="mp-label" data-v-d5cac0dc>Estado<select class="mp-input"${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""} data-v-d5cac0dc><!--[-->`);
      ssrRenderList(unref(stateOptions), (option) => {
        _push(`<option${ssrRenderAttr("value", option[0])} data-v-d5cac0dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).estado) ? ssrLooseContain(unref(form).estado, option[0]) : ssrLooseEqual(unref(form).estado, option[0])) ? " selected" : ""}>${ssrInterpolate(option[1])}</option>`);
      });
      _push(`<!--]--></select></label>`);
      if (unref(source) !== "compra-agil") {
        _push(`<label class="mp-label" data-v-d5cac0dc>Fecha de consulta<input${ssrRenderAttr("value", unref(form).fecha)} type="date" class="mp-input"${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""} data-v-d5cac0dc><span class="mp-help" data-v-d5cac0dc>${ssrInterpolate(unref(source) === "licitaciones" && unref(form).estado === "activas" ? "Activas consulta las publicadas actualmente." : "Sin fecha: consulta el d\xEDa actual.")}</span></label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="${ssrRenderClass([unref(source) !== "compra-agil" ? "lg:col-span-2" : "", "mp-label"])}" data-v-d5cac0dc>${ssrInterpolate(unref(source) === "compra-agil" ? "Buscar por palabras" : "Incluir alguna de estas palabras")}<input${ssrRenderAttr("value", unref(form).q)} class="mp-input" maxlength="200"${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""}${ssrRenderAttr("placeholder", unref(source) === "compra-agil" ? "Por ejemplo, desarrollo web" : "web, software, soporte")} data-v-d5cac0dc><span class="mp-help" data-v-d5cac0dc>${ssrInterpolate(unref(source) === "compra-agil" ? "B\xFAsqueda de la API en nombre y descripci\xF3n." : "Separa alternativas con comas. Busca en los datos disponibles del listado.")}</span></label>`);
      if (unref(source) !== "compra-agil") {
        _push(`<label class="mp-label" data-v-d5cac0dc>Excluir palabras<input${ssrRenderAttr("value", unref(form).excluir)} class="mp-input" maxlength="200" placeholder="Por ejemplo: hardware, licencias"${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""} data-v-d5cac0dc></label>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(source) === "compra-agil") {
        _push(`<!--[--><label class="mp-label" data-v-d5cac0dc>Publicada desde<input${ssrRenderAttr("value", unref(form).desde)} class="mp-input" type="date"${ssrIncludeBooleanAttr(!unref(form).codigo.trim()) ? " required" : ""}${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""} data-v-d5cac0dc></label><label class="mp-label" data-v-d5cac0dc>Publicada hasta<input${ssrRenderAttr("value", unref(form).hasta)} class="mp-input" type="date"${ssrRenderAttr("min", unref(form).desde)}${ssrIncludeBooleanAttr(!unref(form).codigo.trim()) ? " required" : ""}${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""} data-v-d5cac0dc></label><label class="mp-label" data-v-d5cac0dc>Regi\xF3n del comprador<select class="mp-input"${ssrIncludeBooleanAttr(!!unref(form).codigo.trim()) ? " disabled" : ""} data-v-d5cac0dc><option value="" data-v-d5cac0dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).region) ? ssrLooseContain(unref(form).region, "") : ssrLooseEqual(unref(form).region, "")) ? " selected" : ""}>Todas las regiones</option><!--[-->`);
        ssrRenderList(regions, (region, index2) => {
          _push(`<option${ssrRenderAttr("value", String(index2 + 1))} data-v-d5cac0dc${ssrIncludeBooleanAttr(Array.isArray(unref(form).region) ? ssrLooseContain(unref(form).region, String(index2 + 1)) : ssrLooseEqual(unref(form).region, String(index2 + 1))) ? " selected" : ""}>${ssrInterpolate(region)}</option>`);
        });
        _push(`<!--]--></select></label><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800" data-v-d5cac0dc><p class="max-w-xl text-xs leading-relaxed text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Una coincidencia no confirma que cumplan los requisitos. Los montos y fechas deben contrastarse con las bases y el portal oficial.</p><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50" data-v-d5cac0dc>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Search), { class: "h-4 w-4" }, null, _parent));
      }
      _push(`${ssrInterpolate(unref(loading) ? "Consultando\u2026" : "Buscar")}</button></div></form>`);
      if (unref(error)) {
        _push(`<div role="alert" class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200" data-v-d5cac0dc>${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section aria-live="polite"${ssrRenderAttr("aria-busy", unref(loading))} class="space-y-4" data-v-d5cac0dc>`);
      if (unref(loading)) {
        _push(`<div role="status" class="rounded-2xl border border-dashed border-slate-300 py-14 text-center text-slate-500 dark:border-slate-700" data-v-d5cac0dc>`);
        _push(ssrRenderComponent(unref(Loader2), { class: "mx-auto mb-3 h-7 w-7 animate-spin text-sky-500" }, null, _parent));
        _push(`Consultando Mercado P\xFAblico. Puede tardar unos segundos.</div>`);
      } else if (unref(result)) {
        _push(`<!--[--><div class="flex flex-wrap items-center justify-between gap-3" data-v-d5cac0dc><h3 class="font-semibold text-slate-900 dark:text-white" data-v-d5cac0dc>${ssrInterpolate(unref(result).meta.total)} resultados</h3><p class="text-xs text-slate-500" data-v-d5cac0dc>Consulta: ${ssrInterpolate(dateText(unref(result).meta.consultado_en))}</p></div><p class="rounded-xl bg-sky-50 p-3 text-sm text-sky-900 dark:bg-sky-500/10 dark:text-sky-200" data-v-d5cac0dc>${ssrInterpolate(unref(result).meta.advertencia)}</p>`);
        if (!unref(result).data.length) {
          _push(`<div class="rounded-2xl bg-white p-10 text-center text-slate-500 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800" data-v-d5cac0dc>No hay resultados para estos filtros. Prueba otra palabra o ampl\xEDa las fechas.</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(result).data, (item) => {
          _push(`<article class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800" data-v-d5cac0dc><div class="flex flex-col justify-between gap-4 sm:flex-row" data-v-d5cac0dc><div class="min-w-0 flex-1" data-v-d5cac0dc><div class="mb-2 flex flex-wrap items-center gap-2 text-xs" data-v-d5cac0dc><span class="font-mono text-slate-500 dark:text-slate-400" data-v-d5cac0dc>${ssrInterpolate(item.codigo)}</span>`);
          if (item.estado) {
            _push(`<span class="rounded-full bg-slate-100 px-2 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300" data-v-d5cac0dc>${ssrInterpolate(item.estado)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h4 class="break-words font-semibold text-slate-900 dark:text-white" data-v-d5cac0dc>${ssrInterpolate(item.nombre)}</h4><p class="mt-2 text-sm text-slate-500 dark:text-slate-400" data-v-d5cac0dc>${ssrInterpolate(item.organismo || "Organismo disponible en el detalle")}`);
          if (item.region) {
            _push(`<span data-v-d5cac0dc> \xB7 ${ssrInterpolate(item.region)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div><div class="shrink-0 sm:text-right" data-v-d5cac0dc><p class="font-semibold text-slate-900 dark:text-white" data-v-d5cac0dc>${ssrInterpolate(money(item))}</p>`);
          if (unref(source) !== "ordenes-compra") {
            _push(`<p class="mt-2 text-xs text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Cierre: ${ssrInterpolate(dateText(item.cierre))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:underline dark:text-sky-400" data-v-d5cac0dc>Revisar detalle `);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4" }, null, _parent));
          _push(`</button></div></div></article>`);
        });
        _push(`<!--]-->`);
        if (unref(result).meta.total_paginas > 1) {
          _push(`<div class="flex items-center justify-between gap-3" data-v-d5cac0dc><button class="mp-secondary"${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""} data-v-d5cac0dc>Anterior</button><p class="text-sm text-slate-500" data-v-d5cac0dc>P\xE1gina ${ssrInterpolate(unref(page))} de ${ssrInterpolate(unref(result).meta.total_paginas)}</p><button class="mp-secondary"${ssrIncludeBooleanAttr(unref(page) >= unref(result).meta.total_paginas) ? " disabled" : ""} data-v-d5cac0dc>Siguiente</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (!unref(error)) {
        _push(`<div class="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700" data-v-d5cac0dc>`);
        _push(ssrRenderComponent(unref(Search), { class: "mx-auto mb-3 h-8 w-8 text-slate-400" }, null, _parent));
        _push(`<h3 class="font-semibold text-slate-800 dark:text-slate-200" data-v-d5cac0dc>Comienza por una b\xFAsqueda</h3><p class="mt-2 text-sm text-slate-500" data-v-d5cac0dc>Los filtros iniciales incluyen servicios tecnol\xF3gicos. Puedes cambiarlos para explorar otros requerimientos.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><dialog aria-labelledby="procurement-title" class="m-auto w-[calc(100%-2rem)] max-w-3xl rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-white" data-v-d5cac0dc><div class="max-h-[85vh] overflow-y-auto p-6" data-v-d5cac0dc><div class="mb-5 flex items-center justify-between gap-3" data-v-d5cac0dc><h3 id="procurement-title" class="text-lg font-bold" data-v-d5cac0dc>Detalle del proceso</h3><button aria-label="Cerrar detalle" class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800" data-v-d5cac0dc>`);
      _push(ssrRenderComponent(unref(X), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div>`);
      if (unref(detailLoading)) {
        _push(`<p role="status" class="flex items-center gap-2 py-10" data-v-d5cac0dc>`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 animate-spin" }, null, _parent));
        _push(`Cargando antecedentes\u2026</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(detailError)) {
        _push(`<p role="alert" class="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950 dark:text-red-200" data-v-d5cac0dc>${ssrInterpolate(unref(detailError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(detail)) {
        _push(`<div class="space-y-5" data-v-d5cac0dc><div data-v-d5cac0dc><p class="mb-2 font-mono text-xs text-slate-500" data-v-d5cac0dc>${ssrInterpolate(unref(detail).codigo)}</p><h4 class="text-xl font-bold" data-v-d5cac0dc>${ssrInterpolate(unref(detail).nombre)}</h4><p class="mt-2 text-sm text-slate-500 dark:text-slate-400" data-v-d5cac0dc>${ssrInterpolate(unref(detail).organismo || "Organismo no informado")}</p></div><dl class="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-800" data-v-d5cac0dc><div data-v-d5cac0dc><dt class="text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Monto informado</dt><dd class="mt-1 font-semibold" data-v-d5cac0dc>${ssrInterpolate(money(unref(detail)))}</dd></div><div data-v-d5cac0dc><dt class="text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Estado</dt><dd class="mt-1" data-v-d5cac0dc>${ssrInterpolate(unref(detail).estado || "No informado")}</dd></div>`);
        if (unref(detail).fuente !== "ordenes-compra") {
          _push(`<div data-v-d5cac0dc><dt class="text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Cierre</dt><dd class="mt-1" data-v-d5cac0dc>${ssrInterpolate(dateText(unref(detail).cierre))}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(detail).proveedor) {
          _push(`<div data-v-d5cac0dc><dt class="text-slate-500 dark:text-slate-400" data-v-d5cac0dc>Proveedor</dt><dd class="mt-1" data-v-d5cac0dc>${ssrInterpolate(unref(detail).proveedor)}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</dl><section data-v-d5cac0dc><h5 class="mb-2 font-semibold" data-v-d5cac0dc>Descripci\xF3n</h5><p class="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 dark:text-slate-300" data-v-d5cac0dc>${ssrInterpolate(unref(detail).descripcion || "La API no inform\xF3 una descripci\xF3n. Revisa los documentos en Mercado P\xFAblico.")}</p></section>`);
        if ((_a = unref(detail).productos) == null ? void 0 : _a.length) {
          _push(`<section data-v-d5cac0dc><h5 class="mb-2 font-semibold" data-v-d5cac0dc>Servicios o productos solicitados</h5><ul class="space-y-3" data-v-d5cac0dc><!--[-->`);
          ssrRenderList(unref(detail).productos, (product, index2) => {
            _push(`<li class="rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-700" data-v-d5cac0dc><p class="font-semibold" data-v-d5cac0dc>${ssrInterpolate(product.nombre)} `);
            if (product.cantidad !== null) {
              _push(`<span class="font-normal text-slate-500" data-v-d5cac0dc>\xB7 Cantidad: ${ssrInterpolate(product.cantidad)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p>`);
            if (product.descripcion) {
              _push(`<p class="mt-1 whitespace-pre-wrap break-words text-slate-600 dark:text-slate-300" data-v-d5cac0dc>${ssrInterpolate(product.descripcion)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</li>`);
          });
          _push(`<!--]--></ul></section>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = unref(detail).documentos) == null ? void 0 : _b.length) {
          _push(`<section data-v-d5cac0dc><h5 class="mb-2 font-semibold" data-v-d5cac0dc>Documentos informados</h5><ul class="list-inside list-disc text-sm text-slate-600 dark:text-slate-300" data-v-d5cac0dc><!--[-->`);
          ssrRenderList(unref(detail).documentos, (document, index2) => {
            _push(`<li data-v-d5cac0dc>${ssrInterpolate(document.nombre)}</li>`);
          });
          _push(`<!--]--></ul><p class="mt-2 text-xs text-slate-500" data-v-d5cac0dc>Descarga los archivos desde el proceso en el portal oficial.</p></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="rounded-xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-200" data-v-d5cac0dc>Antes de ofertar, revisen requisitos acreditables, plazo de entrega, costos iniciales, garant\xEDas y condiciones de pago. Este detalle todav\xEDa no es una evaluaci\xF3n de viabilidad.</div><footer class="flex flex-wrap gap-3 border-t border-slate-200 pt-4 dark:border-slate-800" data-v-d5cac0dc><button class="mp-secondary" data-v-d5cac0dc>`);
        _push(ssrRenderComponent(unref(Copy), { class: "h-4 w-4" }, null, _parent));
        _push(`${ssrInterpolate(unref(copied) ? "Resumen copiado" : "Copiar resumen para analizar")}</button><a href="https://www.mercadopublico.cl/" target="_blank" rel="noopener noreferrer" class="mp-secondary" data-v-d5cac0dc>`);
        _push(ssrRenderComponent(unref(ExternalLink), { class: "h-4 w-4" }, null, _parent));
        _push(`Abrir Mercado P\xFAblico</a></footer></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/mercado-publico/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5cac0dc"]]);

export { index as default };
//# sourceMappingURL=index-IOJm8CIC.mjs.map
