import { toRaw } from 'vue';
import { d as useRuntimeConfig } from './server.mjs';

function resolveTags(options) {
  const _options = toRaw(options);
  const tags = _options.tags.filter(Boolean).map((i) => typeof i === "string" ? { id: i } : i);
  if (_options.id) {
    const { id, config, initCommands } = _options;
    tags.unshift({ id, config, initCommands });
  }
  return tags;
}
function useGtag() {
  const options = useRuntimeConfig().public.gtag;
  resolveTags(options);
  let _gtag;
  _gtag = () => {
  };
  const initialize = (id) => {
  };
  function disableAnalytics(id) {
  }
  function enableAnalytics(id) {
  }
  return {
    gtag: _gtag,
    initialize,
    disableAnalytics,
    enableAnalytics
  };
}

export { useGtag as u };
//# sourceMappingURL=useGtag-B_tBU-vW.mjs.map
