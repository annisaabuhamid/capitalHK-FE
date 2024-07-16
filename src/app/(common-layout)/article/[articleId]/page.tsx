//= Scripts
import { draftMode, headers } from "next/headers"
import { getArticleById, getArticleSeo } from "@/common/utils/data/article/getArticleById"
import { getGlobal } from "@/common/utils/data/global/getGlobal"
import ArticleMain from "@/components/article/common/organisms/article-content/ArticleMain"
import ArticlesWithContentInfiniteScroll from "@/components/article/common/organisms/article-content/ArticlesWithContentInfiniteScroll"
import Container from "@/components/common/atom/container/Container"
import DraftLoginPage from "@/components/draft/login"
import { getFirstCategory } from "@/utils"

//= Common Components
// export const metadata = {
//   ...defaultMetadata,
// }

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { articleId: string } }) {
  const { articleId } = params
  const mainArticle = await getArticleSeo(articleId)
  const seo = mainArticle?.seo
  const categories = mainArticle?.categories

  const Category = getFirstCategory(categories)

  const headersList = headers()
  const domain = headersList.get("x-forwarded-host") || ""

  const fullUrl = `https://${domain}${Category}/${mainArticle?.slug}`

  return {
    title: seo?.metaTitle || mainArticle?.title || `Capital 資本平臺`,
    description: seo?.metaDescription || `深入閱讀政經生活文化`,
    keywords: seo?.keywords || [`Capital`],
    robots: seo?.metaRobots || `index`,
    viewport: seo?.metaViewport,
    openGraph: {
      url: fullUrl,
      title: seo?.metaTitle || mainArticle?.title,
      description: seo?.metaDescription,
      type: "article",
      images: [
        {
          url:
            seo?.metaImage?.data?.attributes?.formats?.large?.url ||
            seo?.metaImage?.data?.attributes?.url ||
            mainArticle?.imageFormats?.large?.url ||
            mainArticle?.mastheadImage,
          width:
            seo?.metaImage?.data?.attributes?.formats?.large?.width ||
            seo?.metaImage?.data?.attributes?.width ||
            mainArticle?.imageFormats?.large?.width ||
            mainArticle?.mastheadImageWidth,
          height:
            seo?.metaImage?.data?.attributes?.formats?.large?.height ||
            seo?.metaImage?.data?.attributes?.height ||
            mainArticle?.imageFormats?.large?.height ||
            mainArticle?.mastheadImageHeight,
          alt: seo?.metaImage?.data?.attributes?.alternativeText,
        },
      ],
    },
  }
}

export default async function Page({ params, searchParams }: { params: { articleId: string }; searchParams: any }) {
  const { articleId } = params
  const { isEnabled } = draftMode()

  let mainArticle: any
  if (isEnabled) {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET
    const previewQuery = `publicationState=preview&secret=${secret}`
    let fetchUrl = `${strapiUrl}/api/articles?filters[id][$eq]=${articleId}&${previewQuery}`

    try {
      const response: any = await fetch(fetchUrl, { cache: "no-cache" })
      const json = await response.json()

      if (response.status == 200) {
        if (!json.data) {
          throw new Error("null data")
        }
        mainArticle = await getArticleById(articleId)
      } else {
        if (!json.error) {
          throw new Error("null error")
        }
        const message: string = (json.error?.message).toLowerCase()
        if (message.includes("password is required")) {
          return <DraftLoginPage articleId={articleId}></DraftLoginPage>
        } else {
          throw new Error(message)
        }
      }
    } catch (e: any) {
      const error: Error = e
      console.log(error.message)
    }
  } else {
    mainArticle = await getArticleById(articleId)
  }
  const global = await getGlobal()

  return (
    <Container>
      {mainArticle ? <ArticleMain titleVariant={"h1"} articleItemVariant={`vertical`} article={mainArticle} /> : null}

      <ArticlesWithContentInfiniteScroll
        article={mainArticle}
        articleIdsToExclude={mainArticle?.articleId ? [mainArticle.articleId] : []}
      />

      {/* <RecommendArticles categoryLabel={mainArticle?.categoryLabel} /> */}
      {/* <ArticleProgressBar /> */}
    </Container>
  )
}
