<script setup>
import { useRoute, useAsyncData, createError, queryContent } from '#imports';
import { usePageSeo } from '~/composables/usePageSeo';

const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryContent(route.path).findOne()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' });
}

usePageSeo({
  title: `${post.value.title} | Connor Ladly-Fredeen`,
  description: post.value.summary || 'A post by Connor Ladly-Fredeen.',
});

function fmtDate(d) {
  if (!d) return '';
  return String(d).slice(0, 10).replaceAll('-', '·');
}
</script>

<template>
  <main class="home">
    <article class="col">
      <NuxtLink to="/writing" class="back">← writing</NuxtLink>
      <header class="head">
        <h1 class="title">{{ post.title }}</h1>
        <p class="meta">
          {{ fmtDate(post.date) }}
          <template v-if="post.readingTime"> · {{ post.readingTime }}</template>
        </p>
        <div class="rule" />
      </header>
      <div class="prose">
        <ContentRenderer :value="post" />
      </div>
      <footer class="foot">
        <NuxtLink to="/writing" class="back">← writing</NuxtLink>
      </footer>
    </article>
  </main>
</template>

<style scoped>
.home {
  --surface: #fafcfc;
  --ink: #1c2b2a;
  --muted: #6b8080;
  --rule: #d8e4e4;
  --accent: #0e7a74;
  --accent-strong: #0a5b56;
  --mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace;
  min-height: 100dvh;
  background: var(--surface);
  color: var(--ink);
  font-family:
    'Inter',
    'Helvetica Neue',
    -apple-system,
    system-ui,
    sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.col {
  max-width: 65ch;
  margin: 0 auto;
  padding: clamp(56px, 12vh, 128px) clamp(20px, 6vw, 40px) 96px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.back {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  text-decoration: none;
}
.back:hover,
.back:focus-visible {
  color: var(--accent-strong);
}
.head {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: clamp(1.7rem, 1.2rem + 1.6vw, 2.2rem);
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-wrap: balance;
}
.meta {
  margin: 0;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
}
.rule {
  height: 1px;
  background: var(--accent);
}
.prose {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.02rem;
}
.prose :deep(p) {
  margin: 0;
  line-height: 1.75;
}
.prose :deep(h2) {
  margin: 12px 0 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.prose :deep(h3) {
  margin: 8px 0 0;
  font-size: 1.05rem;
  font-weight: 600;
}
.prose :deep(a) {
  color: var(--accent-strong);
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}
.prose :deep(a:hover) {
  border-color: var(--accent);
}
.prose :deep(ul),
.prose :deep(ol) {
  margin: 0;
  padding-left: 1.4em;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.prose :deep(code) {
  font-family: var(--mono);
  font-size: 0.88em;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  padding: 1px 5px;
  border-radius: 3px;
}
.prose :deep(pre) {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  background: color-mix(in srgb, var(--ink) 6%, transparent);
  border-radius: 6px;
}
.prose :deep(pre code) {
  background: none;
  padding: 0;
}
.prose :deep(blockquote) {
  margin: 0;
  padding-left: 16px;
  border-left: 2px solid var(--accent);
  color: var(--muted);
}
.foot {
  margin-top: 8px;
}
</style>
