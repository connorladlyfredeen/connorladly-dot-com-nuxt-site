import * as Sentry from '@sentry/nuxt';

const config = useRuntimeConfig();

Sentry.init({
  dsn: config.public.sentry.dsn,
  environment: import.meta.dev ? 'development' : 'production',
  // Keep tracing light and skip session replay to stay within the free tier.
  tracesSampleRate: 0.1,
  // Don't send events from local dev.
  enabled: !import.meta.dev,
});
