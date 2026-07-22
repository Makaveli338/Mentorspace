// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    ssr: true,
  compatibilityDate: '2025-07-09',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    vue: {
      template: {
        transformAssetUrls: false,
      },
    },
  },

  app: {
    head: {
      title: 'MentorSpace | Nurturing Growth Across Kenya',
      htmlAttrs: { lang: 'en', class: 'light' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'MentorSpace empowers youth, widows, and underserved communities across Kenya through mentorship, skills development, climate action, and sustainable livelihoods.',
        },
        // Open Graph / social sharing defaults
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'MentorSpace' },
        { property: 'og:title', content: 'MentorSpace | Nurturing Growth Across Kenya' },
        {
          property: 'og:description',
          content:
            'Empowering youth, widows, and underserved communities across Kenya through mentorship, skills development, and climate action.',
        },
        { property: 'og:image', content: '/mentorspace-logo.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MentorSpace | Nurturing Growth Across Kenya' },
        {
          name: 'twitter:description',
          content:
            'Empowering youth, widows, and underserved communities across Kenya through mentorship, skills development, and climate action.',
        },
        { name: 'twitter:image', content: '/mentorspace-logo.svg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&family=Inter:wght@500;600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
        },
         {
          rel: "icon",
          href: "/logo-nobg.png",
        },
      ],
    },
  },
})
