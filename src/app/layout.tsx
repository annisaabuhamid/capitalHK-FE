//= Global Styles These styles apply to every route in the application
import "@/styles/tailwind.css"
import "@/styles/globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Viewport } from "next"
import Script from "next/script"
import { ReactNode } from "react"

import { defaultMetadata } from "@/common/config/defaultMetadata"
import { ApolloWrapper } from "@/common/lib/apollo/apollo-provider"
import { NextAuthProvider } from "@/common/lib/auth/NextAuthProvider"
import { GlobalProvider } from "@/components/common/organism/provider/GlobalProvider"
import GoogleAnalytics from "@/utils/GoogleAnalytics"
//= Scripts
export const metadata = {
  ...defaultMetadata,
  // icons: defaultMetadataIcons,
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /> */}
        <GoogleAnalytics />

        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            var scriptList = document.querySelectorAll('[id^="gtag-init"]');
            if (scriptList.length > 1) {
              var script = scriptList[0];
              script.parentNode.removeChild(script);
            }

            var dfp = dfp || {};
            dfp["ads_slots"] = {};
            dfp['mapping'] = {};

            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function () {
              googletag.destroySlots();
            });
            `}
        </Script>
        <Script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" strategy="beforeInteractive" />
        {/* <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/dfp.js" strategy="beforeInteractive" /> */}
      </head>

      <body>
        {/* <LoadingSpinner /> */}
        <ApolloWrapper>
          <NextAuthProvider>
            <GlobalProvider>{children}</GlobalProvider>
          </NextAuthProvider>
        </ApolloWrapper>
        <SpeedInsights />
      </body>
    </html>
  )
}
