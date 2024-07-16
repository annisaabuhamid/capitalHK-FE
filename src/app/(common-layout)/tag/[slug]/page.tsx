import NotFound from "@/app/not-found"
import { defaultMetadata } from "@/common/config/defaultMetadata"
import { getTagData, getTagSeo } from "@/common/utils/data/tag/getTagData"
import { getTagArticleNumber, getTagDataName } from "@/common/utils/data/tag/getTagDataName"
import TagResult from "@/components/tag/TagResult"
import { headers } from "next/headers"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)
  const mainCategory = await getTagSeo(decodedSlug)
  const seo = mainCategory?.attributes?.seo
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

export const dynamicParams = true
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)

  const tagID = await getTagData(decodedSlug)
  const tagName = await getTagDataName(decodedSlug)

  if (!tagID || (tagID.length === 0 && !tagName)) {
    return <NotFound />
  }

  return <TagResult tagID={tagID} tagName={tagName} tagSlug={decodedSlug} />
}
