<script setup>
import { usePageSeo } from '~/composables/usePageSeo';

usePageSeo({
  title: 'Reading | Connor Ladly-Fredeen',
  description: 'Books Connor Ladly-Fredeen is reading and has read.',
});

// Edit this list to update the booklist. `note` is optional.
const nowReading = [{ title: '[ Title ]', author: '[ Author ]', year: '2026' }];

const read = [
  {
    title: '[ Title ]',
    author: '[ Author ]',
    year: '2026',
    note: '[ optional: a one-line take, in your words ]',
  },
  { title: '[ Title ]', author: '[ Author ]', year: '2025' },
  { title: '[ Title ]', author: '[ Author ]', year: '2025' },
];
</script>

<template>
  <main class="home">
    <div class="col">
      <header class="head">
        <p class="label">Reading</p>
        <h1 class="title">Booklist</h1>
        <div class="rule" />
      </header>

      <section v-if="nowReading.length" class="group">
        <p class="label">Now reading</p>
        <ul class="books">
          <li v-for="(b, i) in nowReading" :key="`now-${i}`" class="book">
            <span class="book__title">{{ b.title }}</span>
            <span class="book__year">{{ b.year }}</span>
            <span class="book__author">{{ b.author }}</span>
            <span v-if="b.note" class="book__note">{{ b.note }}</span>
          </li>
        </ul>
      </section>

      <section class="group">
        <p class="label">Read</p>
        <ul class="books">
          <li v-for="(b, i) in read" :key="`read-${i}`" class="book">
            <span class="book__title">{{ b.title }}</span>
            <span class="book__year">{{ b.year }}</span>
            <span class="book__author">{{ b.author }}</span>
            <span v-if="b.note" class="book__note">{{ b.note }}</span>
          </li>
        </ul>
      </section>

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
.group {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.books {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.book {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2px 16px;
  align-items: baseline;
  padding: 12px 0;
  border-top: 1px solid var(--rule);
}
.book:first-child {
  border-top: none;
}
.book__title {
  font-weight: 500;
}
.book__author {
  color: var(--muted);
}
.book__year {
  grid-row: span 2;
  align-self: center;
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}
.book__note {
  grid-column: 1 / -1;
  color: var(--muted);
  font-size: 0.92rem;
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
  .book {
    grid-template-columns: 1fr;
  }
  .book__year {
    grid-row: auto;
  }
}
</style>
