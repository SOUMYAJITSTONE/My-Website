// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
Sentry.feedbackIntegration({
  // Additional SDK configuration goes in here, for example:
  colorScheme: "system",
}),

Sentry.init({
  dsn: "https://60b20473fefccce931868b38434bda34@o4509153138638848.ingest.de.sentry.io/4509153143488592",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;