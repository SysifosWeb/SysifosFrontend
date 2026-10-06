import { defineComponent, onErrorCaptured, createVNode } from 'vue';
import { i as islandComponents, c as createError } from './server.mjs';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'ipx';
import 'vue-router';

function findReservedRootIslandPropKey(value, component) {
  if (!value || typeof value !== "object" || Array.isArray(value) || !Object.hasOwn(value, "as")) {
    return;
  }
  const options = component;
  if (options.inheritAttrs === false || declaresProp(options.props, "as")) {
    return;
  }
  return "as";
}
function declaresProp(props, name) {
  if (!props) {
    return false;
  }
  return Array.isArray(props) ? props.includes(name) : Object.hasOwn(props, name);
}
const islandRenderer = defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    const name = props.context.name;
    const component = Object.hasOwn(islandComponents, name) ? islandComponents[name] : void 0;
    if (!component) {
      throw createError({
        status: 404,
        statusText: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
    });
    const loader = component.__asyncLoader;
    const reservedKey = findReservedRootIslandPropKey(props.context.props, loader ? await loader() : component);
    if (reservedKey) {
      throw createError({
        status: 400,
        statusText: "Invalid island request props"
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-CxCrqx7I.mjs.map
