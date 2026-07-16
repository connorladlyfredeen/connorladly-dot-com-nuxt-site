<script setup>
import { useHead } from '#imports';
import { usePageSeo } from '~/composables/usePageSeo';

usePageSeo({
  title:
    'Connor Ladly-Fredeen | Startup Leader, Triathlete & Retired Ballet Dancer',
  description:
    'Personal website of Connor Ladly-Fredeen — director of engineering, triathlete, and retired ballet dancer. Background, projects, and how to get in touch.',
});

// Entity / site structured data — helps search engines understand who this site
// is about. Uses the same social profiles linked on the contact page.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            name: 'Connor Ladly-Fredeen',
            url: 'https://www.connorladly.com',
            jobTitle: 'Director of Engineering',
            sameAs: [
              'https://www.linkedin.com/in/connorladlyfredeen',
              'https://www.instagram.com/connorlads',
              'https://bsky.app/profile/connorladly.bsky.social',
              'https://www.strava.com/athletes/64861889',
            ],
          },
          {
            '@type': 'WebSite',
            name: 'Connor Ladly-Fredeen',
            url: 'https://www.connorladly.com',
          },
        ],
      }),
    },
  ],
});
</script>

<template>
  <div class="text-center py-20">
    <h1 class="text-4xl font-bold">
      Welcome to Connor Ladly-Fredeen's Website
    </h1>
    <p class="text-lg mt-4">
      Startup Leader | Triathlete | Retired Ballet Dancer
    </p>
    <nav class="mt-8">
      <NuxtLink to="/about" class="text-blue-500 hover:underline"
        >About</NuxtLink
      >
      <span class="mx-2">|</span>
      <NuxtLink to="/projects" class="text-blue-500 hover:underline"
        >Projects</NuxtLink
      >
      <span class="mx-2">|</span>
      <NuxtLink to="/contact" class="text-blue-500 hover:underline"
        >Contact</NuxtLink
      >
      <span class="mx-2">|</span>
      <NuxtLink
        to="https://www.connorladly.com/lane-duck"
        class="text-blue-500 hover:underline"
        >Lane Duck 🦆</NuxtLink
      >
    </nav>
  </div>
</template>
