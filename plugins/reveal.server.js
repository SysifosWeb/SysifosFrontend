export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding, vnode) {
      return {
        class: 'reveal-content'
      }
    }
  })
})
