export default defineNuxtConfig({
  app: {
    head: {
      title: 'Connor Ladly-Fredeen | Personal Website',
      meta: [
        {
          name: 'description',
          content:
            'Personal website of Connor Ladly-Fredeen: Engineer, runner, and ballet enthusiast.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/styles/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-01-16',
});
