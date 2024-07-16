import Link from "next/link"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import ArticleItemMediumResponsive from "@/components/article/common/organisms/ArticleItemMediumResponsive"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import HomeArticleListSmall from "@/components/home/HomeArticleListSmall"

type Props = {
  title?: string
  categorySlug: string
}

async function HomeHotArticleSpotlightListVertical({ title = "", categorySlug }: Props) {
  const articlesByCategory = await getArticlesByCategory(categorySlug, {
    pagination: { limit: 4 },
    sort: "publishedDate:desc",
  })

  if (!articlesByCategory || articlesByCategory.length === 0) {
    return null
  }

  const spotLightArticle = articlesByCategory[0]
  const otherArticles = articlesByCategory.slice(1)
  const readMoreLink = categorySlug ? `/${categorySlug}` : ""
  return (
    <>
      <div className="border-t-2 border-primary py-4 mb-10">
        {/* toolbar */}
        <div className="flex items-center justify-between text-primary font-bold mb-6">
          <div className="h2">{title}</div>
          <Link href={readMoreLink}>
            <ReadMoreButton>
              <span className="h5 !font-bold transition-all duration-300 group-hover:-translate-x-1">閱覽更多</span>
            </ReadMoreButton>
          </Link>
        </div>

        <div className="grid gap-8 home-article-spotlight-list-vertical">
          {/* left spotlight */}
          <div className="lg:col-span-6 pin-article">
            <ArticleItemMediumResponsive
              titleVariant={"h1"}
              articleId={spotLightArticle.articleId}
              date={spotLightArticle.date}
              description={spotLightArticle.description}
              articleItemVariant={`vertical`}
              imageUrl={spotLightArticle.imageUrl}
              imageWidth={spotLightArticle.imageWidth}
              imageHeight={spotLightArticle.imageHeight}
              imageAlt={spotLightArticle.imageAlt}
              imageFormats={spotLightArticle.imageFormats}
              tag={spotLightArticle.tag}
              title={spotLightArticle.title}
              slug={spotLightArticle.slug}
              categoryLabel={spotLightArticle.categoryLabel}
              categories={spotLightArticle.categories}
              // articleImageProps={{ height: "430px" }}
            />
          </div>
          {/* right list */}
          <div className="lg:col-span-6">
            <HomeArticleListSmall items={otherArticles} type={"small-image"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHotArticleSpotlightListVertical
