"use client"

import Script from "next/script"
import { GA_MEASUREMENT_ID } from "@/common/utils/data/constants"

const GoogleAnalytics = () => {
  if (!GA_MEASUREMENT_ID) return null
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="ga-init" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
