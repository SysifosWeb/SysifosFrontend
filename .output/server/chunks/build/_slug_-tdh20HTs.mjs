import { u as useRoute, m as useSeoMeta, b as useHead, a as __nuxt_component_0$1, d as useRuntimeConfig, f as useNuxtApp } from './server.mjs';
import { computed, watch, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, defineComponent, useAttrs, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { V as defu, A as hasProtocol, Y as withLeadingSlash, C as joinURL, K as parseURL, Z as encodeParam, L as encodePath } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_2 } from './CtaSection-CFT2rkn2.mjs';
import { u as useFetch } from './fetch-CiSCxzIt.mjs';
import 'vue-router';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import 'lucide-vue-next';
import '@vue/shared';
import './asyncData-Dh6BNKXL.mjs';
import 'perfect-debounce';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$WYe91U9uM14DYVEOrt_45ecvzXtjprAZcdqr2VucsaQEg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  operationsGenerator,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  ...{
    "screens": {
      "xs": 320,
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "xxl": 1536,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipx",
    "domains": [
      "olimpo.sysifosweb.cl",
      "picsum.photos"
    ],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp",
      "avif",
      "webp"
    ]
  },
  providers: {
    ["ipx"]: { provider: ipxRuntime$WYe91U9uM14DYVEOrt_45ecvzXtjprAZcdqr2VucsaQEg, defaults: {} }
  }
};
const useImage = (event) => {
  var _a;
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const slug = computed(() => route.params.slug);
    const {
      data: postResponse,
      pending: postPending,
      error: postError,
      refresh: refreshPost
    } = useFetch(
      () => `${apiUrl}blog/${slug.value}`,
      {
        key: () => `post-${slug.value}`,
        watch: [slug]
      },
      "$Og5Owp4W5a"
      /* nuxt-injected */
    );
    const postData = computed(() => {
      var _a;
      return ((_a = postResponse.value) == null ? void 0 : _a.data) || postResponse.value || null;
    });
    const post = computed(() => {
      var _a, _b, _c;
      if (!postData.value) return null;
      return {
        id: postData.value.id,
        title: postData.value.title,
        category: ((_a = postData.value.category) == null ? void 0 : _a.name) || "Blog",
        date: new Date(postData.value.published_at || postData.value.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }),
        readingTime: (postData.value.reading_time || 1) + " min de lectura",
        author: {
          name: ((_b = postData.value.user) == null ? void 0 : _b.name) || "Sysifos Team",
          role: "Autor",
          avatar: ((_c = postData.value.user) == null ? void 0 : _c.name) ? postData.value.user.name.substring(0, 2).toUpperCase() : "SE"
        },
        image: postData.value.featured_image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        content: postData.value.content ? postData.value.content.includes("<") ? postData.value.content : "<p>" + postData.value.content.replace(/\n\n/g, "</p><p>") + "</p>" : "",
        tags: postData.value.meta_keywords || []
      };
    });
    watch(slug, async (newSlug, oldSlug) => {
      if (newSlug && newSlug !== oldSlug) {
        await refreshPost();
      }
    });
    const canonicalUrl = computed(() => `https://sysifosweb.cl/blog/${slug.value}`);
    computed(() => {
      return canonicalUrl.value;
    });
    const ogImageUrl = computed(() => {
      var _a;
      const img = ((_a = post.value) == null ? void 0 : _a.image) || "";
      if (!img) return "https://sysifosweb.cl/og-default.jpg";
      if (img.startsWith("http")) return img;
      return `https://sysifosweb.cl${img.startsWith("/") ? "" : "/"}${img}`;
    });
    const showToast = ref(false);
    useSeoMeta({
      // Meta estándar
      title: () => post.value ? `${post.value.title} | Blog SysifosWeb` : "Art\xEDculo no encontrado",
      description: () => {
        var _a;
        return ((_a = postData.value) == null ? void 0 : _a.excerpt) || "Lee nuestro \xFAltimo art\xEDculo en el blog de SysifosWeb.";
      },
      // Open Graph (Instagram/Facebook)
      fbAppId: "1215450019494398",
      ogType: "article",
      ogSiteName: "SysifosWeb",
      ogTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "Blog SysifosWeb";
      },
      ogDescription: () => {
        var _a;
        return ((_a = postData.value) == null ? void 0 : _a.excerpt) || "Lee nuestro \xFAltimo art\xEDculo en el blog de SysifosWeb.";
      },
      ogImage: () => ogImageUrl.value,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageAlt: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "Blog SysifosWeb";
      },
      ogUrl: () => canonicalUrl.value,
      // Open Graph — Article namespace
      articleAuthor: () => {
        var _a, _b;
        return ((_b = (_a = postData.value) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "SysifosWeb";
      },
      articlePublishedTime: () => {
        var _a, _b;
        return ((_a = postData.value) == null ? void 0 : _a.published_at) || ((_b = postData.value) == null ? void 0 : _b.created_at) || void 0;
      },
      articleModifiedTime: () => {
        var _a;
        return ((_a = postData.value) == null ? void 0 : _a.updated_at) || void 0;
      },
      articleSection: () => {
        var _a, _b;
        return ((_b = (_a = postData.value) == null ? void 0 : _a.category) == null ? void 0 : _b.name) || "Blog";
      },
      // Twitter / X Card
      twitterCard: "summary_large_image",
      twitterTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "Blog SysifosWeb";
      },
      twitterDescription: () => {
        var _a;
        return ((_a = postData.value) == null ? void 0 : _a.excerpt) || "Lee nuestro \xFAltimo art\xEDculo en el blog de SysifosWeb.";
      },
      twitterImage: () => ogImageUrl.value
    });
    const articleSchema = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      if (!post.value) return null;
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.value.title,
        description: ((_a = postData.value) == null ? void 0 : _a.excerpt) || "",
        author: {
          "@type": "Person",
          name: ((_b = post.value.author) == null ? void 0 : _b.name) || "Sysifos Team"
        },
        publisher: {
          "@type": "Organization",
          name: "Sysifos Web",
          logo: {
            "@type": "ImageObject",
            url: "https://sysifosweb.cl/img/logo.png"
          }
        },
        datePublished: ((_c = postData.value) == null ? void 0 : _c.published_at) || ((_d = postData.value) == null ? void 0 : _d.created_at),
        dateModified: ((_e = postData.value) == null ? void 0 : _e.updated_at) || ((_f = postData.value) == null ? void 0 : _f.published_at),
        image: post.value.image,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl.value
        }
      };
    });
    useHead({
      link: [{ rel: "canonical", href: () => canonicalUrl.value }],
      meta: [
        { name: "image", property: "og:image", content: () => ogImageUrl.value }
      ],
      script: () => articleSchema.value ? [
        { type: "application/ld+json", innerHTML: JSON.stringify(articleSchema.value) }
      ] : []
    });
    const { data: relatedResponse } = useFetch(
      `${apiUrl}blog`,
      {
        key: "blog-list"
      },
      "$TgItTaiLuY"
      /* nuxt-injected */
    );
    const relatedPosts = computed(() => {
      var _a;
      const posts = ((_a = relatedResponse.value) == null ? void 0 : _a.data) || [];
      return posts.filter((p) => {
        var _a2;
        return p.id !== ((_a2 = post.value) == null ? void 0 : _a2.id);
      }).slice(0, 2).map((p) => {
        var _a2;
        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          category: ((_a2 = p.category) == null ? void 0 : _a2.name) || "Blog",
          reading_time: (p.reading_time || 1) + " min",
          image: p.featured_image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$1;
      const _component_NosotrosCtaSection = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-section-dark min-h-screen pb-0" }, _attrs))}>`);
      if (unref(postPending)) {
        _push(`<div class="animate-pulse"><section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden"><div class="max-w-[800px] w-[90%] mx-auto relative z-20"><div class="w-28 h-4 bg-panel rounded mb-10"></div><div class="flex items-center gap-4 mb-6"><div class="w-16 h-5 bg-panel rounded"></div><div class="w-32 h-4 bg-panel rounded"></div></div><div class="w-full h-14 bg-panel rounded-xl mb-4"></div><div class="w-3/4 h-14 bg-panel rounded-xl mb-10"></div><div class="flex items-center gap-4 pt-8 border-t border-line"><div class="w-12 h-12 rounded-full bg-panel"></div><div><div class="w-24 h-4 bg-panel rounded mb-2"></div><div class="w-16 h-3 bg-panel rounded"></div></div></div></div></section><section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24"><div class="w-full h-[300px] md:h-[500px] rounded-3xl bg-panel"></div></section><section class="max-w-[700px] w-[90%] mx-auto"><div class="space-y-4"><div class="w-full h-4 bg-panel rounded"></div><div class="w-full h-4 bg-panel rounded"></div><div class="w-5/6 h-4 bg-panel rounded"></div><div class="w-full h-4 bg-panel rounded"></div><div class="w-4/6 h-4 bg-panel rounded"></div></div></section></div>`);
      } else if (post.value) {
        _push(`<div><section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden"><div class="absolute rounded-full pointer-events-none blur-[150px] w-[800px] h-[800px] bg-accent opacity-[0.03] top-[-20%] left-1/2 -translate-x-1/2"></div><div class="max-w-[800px] w-[90%] mx-auto relative z-20">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-subdued hover:text-content transition-colors mb-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Volver al Journal `);
            } else {
              return [
                createTextVNode(" \u2190 Volver al Journal ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center gap-4 mb-6"><span class="px-3 py-1 rounded-md bg-panel border border-line text-[0.65rem] font-bold uppercase tracking-wider text-accent">${ssrInterpolate(post.value.category)}</span><span class="text-xs text-subdued font-medium">${ssrInterpolate(post.value.date)} \u2022 ${ssrInterpolate(post.value.readingTime)}</span></div><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-content leading-[1.1] tracking-tight mb-10">${ssrInterpolate(post.value.title)}</h1><div class="flex items-center gap-4 pt-8 border-t border-line"><div class="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-accent p-[2px]"><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"><span class="text-sm font-bold text-content">${ssrInterpolate(post.value.author.avatar)}</span></div></div><div><p class="text-sm font-bold text-content">${ssrInterpolate(post.value.author.name)}</p><p class="text-xs text-subdued">${ssrInterpolate(post.value.author.role)}</p></div></div></div></section><section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24 relative z-20"><div class="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-line shadow-2xl">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: post.value.image,
          alt: post.value.title,
          loading: "lazy",
          decoding: "async",
          format: "webp",
          class: "w-full h-full object-cover transition-all duration-1000"
        }, null, _parent));
        _push(`</div></section><section class="max-w-[700px] w-[90%] mx-auto relative z-20">`);
        if (post.value) {
          _push(`<div class="prose impulso-article prose-lg max-w-none text-subdued">${(_a = post.value.content) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6"><div class="flex items-center gap-2 flex-wrap"><span class="text-xs text-subdued uppercase tracking-widest font-bold mr-2">Tags:</span><!--[-->`);
        ssrRenderList(post.value.tags, (tag) => {
          _push(`<span class="px-3 py-1 rounded-full bg-panel text-xs text-subdued capitalize">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]-->`);
        if (post.value.tags.length === 0) {
          _push(`<span class="px-3 py-1 rounded-full bg-panel text-xs text-subdued">${ssrInterpolate(post.value.category)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-3"><span class="text-xs text-subdued uppercase tracking-widest font-bold mr-2">Compartir:</span><button aria-label="Compartir en Twitter/X" class="w-8 h-8 rounded-full bg-panel hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-content group-hover:text-[#1DA1F2] transition-colors" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></button><button aria-label="Compartir en LinkedIn" class="w-8 h-8 rounded-full bg-panel hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-content group-hover:text-[#0A66C2] transition-colors" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></button><button aria-label="Compartir en Facebook" class="w-8 h-8 rounded-full bg-panel hover:bg-[#1877F2]/20 hover:text-[#1877F2] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-content group-hover:text-[#1877F2] transition-colors" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></button><button aria-label="Compartir en WhatsApp" class="w-8 h-8 rounded-full bg-panel hover:bg-[#25D366]/20 hover:text-[#25D366] flex items-center justify-center transition-colors group"><svg class="w-4 h-4 text-content group-hover:text-[#25D366] transition-colors" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2zm5.882 14.161c-.247.696-1.432 1.34-1.97 1.455-.494.106-1.139.222-3.418-.72-2.73-1.127-4.498-3.92-4.636-4.103-.137-.184-1.109-1.474-1.109-2.812s.696-2.001.942-2.278c.246-.277.534-.347.712-.347.177 0 .356.004.512.011.168.008.396-.067.621.474.233.56.793 1.933.864 2.076.071.144.119.313.028.497-.092.184-.139.299-.277.456-.139.157-.291.341-.416.471-.138.143-.284.298-.124.573.16.276.711 1.173 1.528 1.905 1.053.945 1.93 1.238 2.205 1.382.276.143.438.118.601-.067.163-.186-.71-8.23-8.23-1.107.123-.277.167-.456.123-.655-.044-.199-.163-.318-.44-.456z"></path></svg></button><button aria-label="Copiar enlace del art\xEDculo" class="w-8 h-8 rounded-full bg-panel hover:bg-panel flex items-center justify-center transition-colors"><svg class="w-4 h-4 text-content" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></button></div></div><div class="mt-12 p-8 rounded-3xl bg-panel border border-line flex flex-col md:flex-row items-center md:items-start gap-6"><div class="w-16 h-16 rounded-full bg-gradient-to-tr from-accent to-accent p-[2px] flex-shrink-0"><div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center"><span class="text-lg font-bold text-content">${ssrInterpolate(post.value.author.avatar)}</span></div></div><div class="text-center md:text-left"><p class="text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">Escrito por</p><h4 class="text-lg font-bold text-content mb-2">${ssrInterpolate(post.value.author.name)}</h4><p class="text-sm text-subdued leading-relaxed">Equipo de ingenieros y arquitectos cloud de SysifosWeb. Apasionados por el performance, sistemas distribuidos y la construcci\xF3n de productos digitales escalables.</p></div></div></section><section class="py-24 bg-section-dark relative z-10 border-t border-line mt-16"><div class="max-w-[1200px] w-[90%] mx-auto"><h3 class="text-2xl font-bold text-content mb-10">Lecturas Recomendadas</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><!--[-->`);
        ssrRenderList(relatedPosts.value, (relPost) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: relPost.id,
            to: `/blog/${relPost.slug}`,
            class: "group relative flex flex-col lg:flex-row rounded-2xl border border-line bg-panel hover:bg-panel hover:border-line transition-all duration-300 overflow-hidden"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative overflow-hidden bg-panel lg:w-2/5" style="${ssrRenderStyle({ "aspect-ratio": "16/10", "min-height": "120px" })}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: relPost.image,
                  alt: relPost.title,
                  loading: "lazy",
                  decoding: "async",
                  format: "webp",
                  class: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5"${_scopeId}><div class="flex items-center gap-3 mb-3"${_scopeId}><span class="text-[0.65rem] font-bold uppercase tracking-wider text-accent"${_scopeId}>${ssrInterpolate(relPost.category)}</span></div><h4 class="text-lg font-bold text-content mb-3 leading-snug group-hover:text-accent transition-colors"${_scopeId}>${ssrInterpolate(relPost.title)}</h4><p class="text-sm text-subdued line-clamp-2"${_scopeId}>${ssrInterpolate(relPost.excerpt)}</p></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "relative overflow-hidden bg-panel lg:w-2/5",
                    style: { "aspect-ratio": "16/10", "min-height": "120px" }
                  }, [
                    createVNode(_component_NuxtImg, {
                      src: relPost.image,
                      alt: relPost.title,
                      loading: "lazy",
                      decoding: "async",
                      format: "webp",
                      class: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "p-6 lg:p-8 flex flex-col justify-center lg:w-3/5" }, [
                    createVNode("div", { class: "flex items-center gap-3 mb-3" }, [
                      createVNode("span", { class: "text-[0.65rem] font-bold uppercase tracking-wider text-accent" }, toDisplayString(relPost.category), 1)
                    ]),
                    createVNode("h4", { class: "text-lg font-bold text-content mb-3 leading-snug group-hover:text-accent transition-colors" }, toDisplayString(relPost.title), 1),
                    createVNode("p", { class: "text-sm text-subdued line-clamp-2" }, toDisplayString(relPost.excerpt), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section>`);
        _push(ssrRenderComponent(_component_NosotrosCtaSection, null, null, _parent));
        _push(`<div class="${ssrRenderClass([showToast.value ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none", "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out"])}"><div class="flex items-center gap-3 bg-panel border border-line shadow-[0_0_40px_rgba(var(--decoration-rgb), 0.15)] px-5 py-3.5 rounded-full backdrop-blur-2xl"><div class="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"><svg class="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm font-medium text-content">Enlace copiado exitosamente</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-tdh20HTs.mjs.map
