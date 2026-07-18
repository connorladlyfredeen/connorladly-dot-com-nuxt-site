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
// is about. Uses the same social profiles linked below.
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
  <main class="home">
    <div class="col">
      <header class="head">
        <h1 class="name">Connor Ladly-Fredeen</h1>
        <p class="tag">Startup Leader · Triathlete · Retired Ballet Dancer</p>
        <div class="rule" />
      </header>

      <p class="lede">
        I'm Connor Ladly-Fredeen, a director of engineering with a passion for
        scaling high-throughput systems, building happy and performant teams,
        and developing awesome products.
      </p>

      <section class="block">
        <p class="label">Working on</p>
        <ul class="list">
          <li>
            <span class="k">Adeptmind</span>
            <span class="v"
              >High-throughput data systems; 10x-ed the engineering team.</span
            >
          </li>
          <li>
            <span class="k">Castor</span>
            <span class="v">Building the delivery engineering org.</span>
          </li>
          <li>
            <span class="k">Running</span>
            <span class="v"
              >Boston Marathon 2025, done. Up next: Tremblant IronMan
              70.3.</span
            >
          </li>
        </ul>
      </section>

      <section class="block">
        <p class="label">Elsewhere</p>
        <ul class="links">
          <li><a href="mailto:connorladlyfredeen@gmail.com">Email</a></li>
          <li>
            <a href="https://www.linkedin.com/in/connorladlyfredeen"
              >LinkedIn</a
            >
          </li>
          <li><a href="https://www.instagram.com/connorlads">Instagram</a></li>
          <li>
            <a href="https://bsky.app/profile/connorladly.bsky.social"
              >Bluesky</a
            >
          </li>
          <li><a href="https://www.strava.com/athletes/64861889">Strava</a></li>
        </ul>
      </section>

      <footer class="foot">
        <a href="https://www.connorladly.com/lane-duck" class="duck"
          >LaneDuck&nbsp;🦆</a
        >
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
  gap: 44px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.name {
  font-weight: 300;
  font-size: clamp(2rem, 1.3rem + 2.6vw, 2.7rem);
  letter-spacing: -0.02em;
  margin: 0;
}
.tag {
  margin: 0;
  color: var(--muted);
}
.rule {
  height: 1px;
  background: var(--accent);
  margin-top: 8px;
}
.lede {
  margin: 0;
  font-size: 1.08rem;
  max-width: 58ch;
}
.block {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list li {
  display: flex;
  gap: 14px;
}
.list .k {
  color: var(--accent-strong);
  font-weight: 500;
  min-width: 11ch;
  flex-shrink: 0;
}
.list .v {
  color: var(--ink);
}
.links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}
.links a {
  text-decoration: none;
  color: var(--ink);
  border-bottom: 1px solid var(--rule);
  padding-bottom: 2px;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}
.links a:hover,
.links a:focus-visible {
  color: var(--accent-strong);
  border-color: var(--accent);
}
.links a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 1px;
}
.foot {
  margin-top: 8px;
}
.duck {
  font-size: 0.85rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.15s ease;
}
.duck:hover,
.duck:focus-visible {
  color: var(--accent-strong);
}
.duck:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 1px;
}
@media (max-width: 560px) {
  .list li {
    flex-direction: column;
    gap: 2px;
  }
  .list .k {
    min-width: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>
