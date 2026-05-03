export default defineNuxtConfig({
  compatibilityDate: '2026-04-09',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/main.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  // @ts-ignore
  nitro: {
      devProxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        prependPath: true
      }
    }
  }
})
