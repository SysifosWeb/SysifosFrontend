import { _ as _sfc_main$1 } from './Workspace-C_gOy2vS.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import 'lucide-vue-next';
import './kanban-DnRkN1iU.mjs';
import './useApi-B4bgMxIg.mjs';
import './useKanbanBoard--KKVqRCV.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "active-sprint",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanWorkspace = _sfc_main$1;
      _push(ssrRenderComponent(_component_AdminKanbanWorkspace, mergeProps({
        key: String(_ctx.$route.params.project),
        mode: "board",
        scope: "active"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/[project]/active-sprint.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=active-sprint-bZqrKrJR.mjs.map
