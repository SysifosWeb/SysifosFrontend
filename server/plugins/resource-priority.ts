export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    // Let the browser finish visible text and fonts before background module preloads.
    html.head = html.head.map(part => part
      .replace(/<link(?=[^>]*rel="modulepreload")/g, '<link fetchpriority="low"')
      .replace(/<script(?=[^>]*type="module")/g, '<script fetchpriority="low"'))
  })
})
