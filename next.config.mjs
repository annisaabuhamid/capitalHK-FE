import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const customConfig = {
  reactStrictMode: true,
  experimental: { webpackBuildWorker: true },
  output: "standalone",
  transpilePackages: ["crypto-js"],

  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
      { source: "/aastocks/:path*", destination: `${process.env.NEXT_PUBLIC_STOCK_QUOTE_URL}/datafeed/:path*` },
      // { source: "/aastocks/:path*", destination: `http://services1-uat.aastocks.com//datafeed/:path*` },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "**.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "cp-dev-cdn.cleargo.sg",
      },
      {
        protocol: "https",
        hostname: "**.cp-dev-cdn.cleargo.sg",
      },
      {
        protocol: "https",
        hostname: "prd-cdn.capital-hk.com",
      },
      {
        protocol: "https",
        hostname: "**.prd-cdn.capital-hk.com",
      },
    ],
  },
}

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], customConfig)

export default config
