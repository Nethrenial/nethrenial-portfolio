// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-capo",
    "@nuxt/content",
    "nuxt-csurf",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@nuxtjs/html-validator",
    "nuxt-icon",
    "@nuxt/image-edge",
    // Seo modules
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-og-image',
    'nuxt-link-checker',
    'nuxt-schema-org',
    // utility modules
    "nuxt-typed-router"
  ]
})