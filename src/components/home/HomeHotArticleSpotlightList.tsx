import Link from "next/link"
import { Article } from "@/common/types"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import ArticleItemMediumResponsive from "@/components/article/common/organisms/ArticleItemMediumResponsive"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import HomeArticleListSmall from "@/components/home/HomeArticleListSmall"

type Props = {
  title?: string
  categorySlug: string
  spotLightArticle: Article
}

async function HomeHotArticleSpotlightList({ title = "", spotLightArticle, categorySlug }: Props) {
  const transformedArticles = await getArticlesByCategory(categorySlug, {
    pagination: { limit: 4 },
    sort: "publishedDate:desc",
  })

  const readMoreLink = categorySlug ? `/${categorySlug}` : ""
  return (
    <div className="border-t-2 border-primary pt-[17px] mb-12 ">
      {/* toolbar */}
      <div className="flex items-center justify-between text-primary font-bold">
        <div className="h2">{title}</div>
        <Link href={readMoreLink}>
          <ReadMoreButton>
            <span className="h5 !font-bold transition-all duration-300 group-hover:-translate-x-1">閱覽更多</span>
          </ReadMoreButton>
        </Link>
      </div>

      <div className="grid lg:grid-cols-12 pt-[24px] gap-8 lg:gap-[75px]">
        {/* left spotlight */}
        <div className="lg:col-span-6">
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
            categoryLabel={spotLightArticle.categoryLabel}
            categories={spotLightArticle.categories}
            slug={spotLightArticle.slug}
            // articleImageProps={{ height: "430px" }}
          />
        </div>
        {/* right list */}
        <div className="lg:col-span-6">
          <HomeArticleListSmall items={transformedArticles} showBlogger={true} />
        </div>
      </div>
    </div>
  )
}

export default HomeHotArticleSpotlightList
