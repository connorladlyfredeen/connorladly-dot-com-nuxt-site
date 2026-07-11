<script setup>
import { usePageSeo } from '~/composables/usePageSeo';

usePageSeo({
  title:
    'Connor Ladly-Fredeen | Startup Leader, Triathlete & Retired Ballet Dancer',
  description:
    'Personal website of Connor Ladly-Fredeen — director of engineering, triathlete, and retired ballet dancer. Background, projects, and how to get in touch.',
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
