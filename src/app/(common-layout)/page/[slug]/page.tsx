import Markdown from "markdown-to-jsx"
import React from "react"
import { getPagesData, getPageSeo } from "@/common/utils/data/page/getPagesData"
import PageComponent from "@/components/article/common/molecule/PageComponent"

import Container from "@/components/common/atom/container/Container"
import { defaultMetadata } from "@/common/config/defaultMetadata"
import { headers } from "next/headers"

// type Props = {
//   blocks?: PageBlocksDynamicZone[] | null
// }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)
  const mainCategory = await getPageSeo(decodedSlug)
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
  const page = await getPagesData(slug)
  let blocks = page?.attributes?.blocks || []
  let mastheadTitle = page?.attributes?.mastheadTitle
  let mastheadBannerURL = page?.attributes?.mastheadBanner?.data?.attributes?.url ?? ""
  // let mastheadBannerHeight = page?.attributes?.mastheadBanner?.data?.attributes?.height ?? undefined
  // let mastheadBannerWidth = page?.attributes?.mastheadBanner?.data?.attributes?.width ?? undefined
  // let mastheadBannerAlt = page?.attributes?.mastheadBanner?.data?.attributes?.alternativeText || "alt not available"
  let content = page?.attributes?.content

  return (
    <Container>
      <div
        className="mx-auto mt-6 flex  w-full max-w-[980px] items-center justify-center "
        style={{
          backgroundImage: `url(${mastheadBannerURL})`,
        }}
      >
        <h2 className="h2 mx-6 text-center uppercase text-[32px] md:text-[42px]  text-secomdary-800">
          {mastheadTitle}
        </h2>
      </div>

      <div className="mx-auto w-full px-5 pb-20 pt-12 lg:px-0 xl:max-w-[1012px]">
        {content && (
          <div className="prose max-w-none prose-h1:lg:text-3xl">
            <Markdown options={{ wrapper: React.Fragment, forceBlock: true }}>{content}</Markdown>
          </div>
        )}
        {blocks && <PageComponent blocks={blocks} />}
      </div>
    </Container>
  )
}
