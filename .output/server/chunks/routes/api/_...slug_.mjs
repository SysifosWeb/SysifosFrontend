import { c as defineEventHandler, u as useRuntimeConfig, g as getRequestURL, p as proxyRequest, e as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'node:crypto';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'ipx';

const ____slug_ = defineEventHandler(async (event) => {
  var _a, _b;
  const config = useRuntimeConfig();
  const reqUrl = getRequestURL(event);
  const path = reqUrl.pathname.replace("/api/", "");
  const base = `${(config.apiBase || "https://olimpo.sysifosweb.cl/api/").replace(/\/+$/, "")}/`;
  const target = `${base}${path}${reqUrl.search}`;
  try {
    return await proxyRequest(event, target);
  } catch (error) {
    const proxyError = error;
    console.error(`[API Proxy Error] ${target}:`, proxyError.message || error);
    throw createError({
      statusCode: ((_a = proxyError.response) == null ? void 0 : _a.status) || 502,
      statusMessage: ((_b = proxyError.response) == null ? void 0 : _b.statusText) || "Bad Gateway"
    });
  }
});

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.mjs.map
