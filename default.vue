<!-- layouts/default.vue -->
<template>
  <div>
    <SiteHeader />
    <nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header.vue';
import SiteFooter from '~/components/Footer.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style>
/* Add your styles here */
</style>
