import { withoutTrailingSlash } from 'ufo';

const SITE_URL = 'https://www.connorladly.com';

/**
 * Sets a unique title + description for a page and emits an absolute canonical
 * URL on the real domain. The absolute canonical is important because the site
 * is also reachable at the Netlify deploy URL — pointing canonical at the
 * primary domain prevents that copy being indexed as duplicate content.
 */
export function usePageSeo(meta: { title: string; description: string }) {
  const route = useRoute();
  const canonical =
    route.path === '/'
      ? `${SITE_URL}/`
      : `${SITE_URL}${withoutTrailingSlash(route.path)}`;

  useSeoMeta({
    title: meta.title,
    description: meta.description,
    ogTitle: meta.title,
    ogDescription: meta.description,
    ogUrl: canonical,
  });

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  });
}
