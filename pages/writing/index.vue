<script setup>
import { useAsyncData, queryContent } from '#imports';
import { usePageSeo } from '~/composables/usePageSeo';

usePageSeo({
  title: 'Writing | Connor Ladly-Fredeen',
  description: 'Notes and posts by Connor Ladly-Fredeen.',
});

// List published posts (drops drafts), newest first.
const { data: posts } = await useAsyncData('writing-index', () =>
  queryContent('writing')
    .where({ draft: { $ne: true } })
    .only(['title', 'summary', 'date', '_path'])
    .sort({ date: -1 })
    .find()
);

function fmtDate(d) {
  if (!d) return '';
  return String(d).slice(0, 10).replaceAll('-', '·');
}
</script>

<template>
  <main class="home">
    <div class="col">
      <header class="head">
        <p class="label">Writing</p>
        <h1 class="title">Notes</h1>
        <div class="rule" />
      </header>

      <p v-if="!posts || !posts.length" class="empty">Nothing published yet.</p>

      <div v-else class="list">
        <article v-for="post in posts" :key="post._path" class="entry">
          <p class="entry__date">{{ fmtDate(post.date) }}</p>
          <h2 class="entry__title">
            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          </h2>
          <p v-if="post.summary" class="entry__ex">{{ post.summary }}</p>
        </article>
      </div>

      <footer class="foot">
        <NuxtLink to="/" class="back">← home</NuxtLink>
      </footer>
    </div>
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
  max-width: 62ch;
  margin: 0 auto;
  padding: clamp(56px, 12vh, 128px) clamp(20px, 6vw, 40px) 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  margin: 0;
  font-weight: 300;
  font-size: clamp(1.9rem, 1.3rem + 2vw, 2.4rem);
  letter-spacing: -0.02em;
}
.label {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.rule {
  height: 1px;
  background: var(--accent);
  margin-top: 8px;
}
.empty {
  margin: 0;
  color: var(--muted);
}
.list {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.entry {
  display: grid;
  grid-template-columns: 11ch 1fr;
  gap: 4px 20px;
  align-items: baseline;
}
.entry__date {
  grid-row: span 2;
  margin: 0;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  padding-top: 3px;
}
.entry__title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
}
.entry__title a {
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}
.entry__title a:hover,
.entry__title a:focus-visible {
  color: var(--accent-strong);
  border-color: var(--accent);
}
.entry__ex {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}
.foot {
  margin-top: 8px;
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
@media (max-width: 560px) {
  .entry {
    grid-template-columns: 1fr;
  }
  .entry__date {
    grid-row: auto;
  }
}
</style>
