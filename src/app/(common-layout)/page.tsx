//= Common Components
import { headers } from "next/headers"
import { getHomeSeo } from "@/common/utils/data/home/getHomePage"
import Home from "@/components/home/Home"

export async function generateMetadata() {
  const homePageData = await getHomeSeo()

  const seo = homePageData?.attributes?.seo
  const headersList = headers()
  const fullUrl = headersList.get("referer") || ""

  return {
    title: seo?.metaTitle || `Capital 資本平臺`,
    description: seo?.metaDescription || `深入閱讀政經生活文化`,
    keywords: seo?.keywords || [`Capital`],
    robots: seo?.metaRobots || `index`,
    viewport: seo?.metaViewport,
    openGraph: {
      url: fullUrl,
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: [
        {
          url: seo?.metaImage?.data?.attributes?.url,
          width: seo?.metaImage?.data?.attributes?.width,
          height: seo?.metaImage?.data?.attributes?.height,
          alt: seo?.metaImage?.data?.attributes?.alternativeText,
        },
      ],
    },
  }
}

export default function Page() {
  return <Home />
}
