export default defineNuxtConfig({
  app: {
    head: {
      title: 'Connor Ladly-Fredeen | Personal Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Personal website of Connor Ladly-Fredeen: Engineer, runner, and ballet enthusiast.',
        },
        { name: 'author', content: 'Connor Ladly-Fredeen' },
        {
          name: 'keywords',
          content:
            'Connor Ladly-Fredeen, engineer, triathlete, runner, ballet, personal website',
        },
        // Open Graph tags
        {
          property: 'og:title',
          content: 'Connor Ladly-Fredeen | Personal Website',
        },
        {
          property: 'og:description',
          content:
            'Personal website of Connor Ladly-Fredeen: Engineer, runner, and ballet enthusiast.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://connorladly.com' },
        {
          property: 'og:image',
          content: 'https://connorladly.com/og-image.jpg',
        },
        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Connor Ladly-Fredeen | Personal Website',
        },
        {
          name: 'twitter:description',
          content:
            'Personal website of Connor Ladly-Fredeen: Engineer, runner, and ballet enthusiast.',
        },
        {
          name: 'twitter:image',
          content: 'https://connorladly.com/og-image.jpg',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtm.js?id=GTM-NLRQ9QM`,
          async: true,
        },
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NLRQ9QM');`,
        },
      ],
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLRQ9QM"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          body: true,
        },
      ],
    },
  },

  css: ['~/assets/styles/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  sitemap: {
    // Automatically include all pages
    enabled: true,
    hostname: 'https://connorladly.com',
    // Allow custom routes to be added via additionalPaths
    urls: [],
    // You can add custom routes by modifying this array:
    // urls: [
    //   '/custom-route-1',
    //   '/custom-route-2',
    // ]
  },

  compatibilityDate: '2025-01-16',
});
