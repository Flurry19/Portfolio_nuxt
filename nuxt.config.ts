import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  link: [
   { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
   {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
   {rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap'}
],

  css: [
      '~/assets/css/main.css',
    '~/assets/css/styles.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  

  modules: ['nuxt-swiper'],
  swiper: {
    modules: ['autoplay', 'pagination', 'free-mode']
  },
})