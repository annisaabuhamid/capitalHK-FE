import { Article } from "@/common/types"
import { getCategoryAdsById } from "@/common/utils/data/category/getCategoryAdsById"
import ArticleGrid from "@/components/article/common/organisms/grid/ArticleGrid"
import ArticleGridInfiniteScroll from "@/components/article/common/organisms/grid/ArticleGridInfiniteScroll"
import SpecialTopicMainArticle from "@/components/article/common/organisms/SpecialTopicMainArticle"

type Props = { articles?: Article[]; categoryId?: string }

async function SpecialTopicPageArticleGrid({ articles, categoryId }: Props) {
  const mainArticle = articles?.shift()
  const categoryAds = await getCategoryAdsById(categoryId!)
  const categoryAdsId = categoryAds?.attributes?.ad_banner_in_between?.data?.id || ""

  return (
    <div>
      <div className="my-[24px] lg:ml-5">
        {mainArticle ? (
          <SpecialTopicMainArticle
            titleVariant={"h1"}
            articleId={mainArticle.articleId}
            date={mainArticle.date}
            description={mainArticle.description}
            articleItemVariant={`vertical`}
            imageUrl={mainArticle.imageUrl}
            imageWidth={mainArticle.imageWidth}
            imageHeight={mainArticle.imageHeight}
            imageAlt={mainArticle.imageAlt}
            imageFormats={mainArticle.imageFormats}
            categoryLabel={mainArticle.categoryLabel}
            title={mainArticle.title}
            slug={mainArticle.slug}
            categories={mainArticle.categories}
            articleImageClassName="max-h-[431px] max-w-[647px]"
          />
        ) : null}
      </div>
      <div className="my-[48px]">
        <ArticleGrid
          articles={articles ?? []}
          adsConfig={{ adsInterval: 6 }}
          type={"specialTopics"}
          adsId={categoryAdsId}
        />
        <ArticleGridInfiniteScroll categoryId={categoryId} adsId={categoryAdsId} />
      </div>
    </div>
  )
}

export default SpecialTopicPageArticleGrid
