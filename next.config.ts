import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//  typescript:{
//   ignoreBuildErrors:true,
//  }
};

export default withSentryConfig(nextConfig, {


// org: "na-yh2",
// project: "javascript-nextjs",

silent: !process.env.CI,


widenClientFileUpload: true,

tunnelRoute: "/monitoring",

disableLogger: true,
automaticVercelMonitors: true,
});