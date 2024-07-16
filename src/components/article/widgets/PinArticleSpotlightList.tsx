import { Article, ArticlePropsOptional } from "@/common/types"
import { getCategoryAdsById } from "@/common/utils/data/category/getCategoryAdsById"
import ArticleItemMedium from "@/components/article/common/organisms/ArticleItemMedium"
import ArticleItemMediumResponsive from "@/components/article/common/organisms/ArticleItemMediumResponsive"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"
import ArticleListInfiniteScroll from "@/components/article/common/organisms/list/ArticleListInfiniteScroll"
import PinArticle from "@/components/article/common/organisms/PinArticle"

type Props = {
  articles: Article[]
  articleItemVariant?: ArticlePropsOptional["articleItemVariant"]
  categoryId?: string
  pinArticle: any
  category?: any
  pinArticleData?: Article | undefined
}

async function PinArticleSpotlightList({
  articles,
  articleItemVariant,
  categoryId,
  pinArticle,
  category,
  pinArticleData,
}: Props) {
  let pinArticles = pinArticle
  let pinArticleId = pinArticle?.data?.id
  // Filter out the pinArticle from the articles array
  // const pinArticleData = articles.filter((article) => article.articleId === pinArticleId)
  const filteredArticles = articles.filter((article) => article.articleId !== pinArticleId)
  const [mainArticle, ...otherArticles] = filteredArticles
  const rightArticles = otherArticles.slice(0, 2)
  const bottomArticles = otherArticles.slice(2)

  const categoryAds = await getCategoryAdsById(categoryId!)
  const categoryAdsId = categoryAds?.attributes?.ad_banner_in_between?.data?.id || ""

  return (
    <div className="article-spotlight-list">
      {/* left spotlight */}
      <div className="article-spotlight-list-wrapper">
        <div className="article-spotlight-list-left">
          {pinArticle?.data !== null && <PinArticle pinArticle={pinArticleData} category={category} />}
          {mainArticle && pinArticle?.data === null && (
            <ArticleItemMediumResponsive
              titleVariant={"h1"}
              categories={mainArticle.categories}
              articleId={mainArticle.articleId}
              date={mainArticle.date}
              description={mainArticle.description}
              articleItemVariant={"vertical"}
              articleImageProps={{ fetchPriority: "high", loading: "eager" }}
              imageUrl={mainArticle.imageUrl}
              imageWidth={mainArticle.imageWidth}
              imageHeight={mainArticle.imageHeight}
              imageAlt={mainArticle.imageAlt}
              imageFormats={mainArticle.imageFormats}
              categoryLabel={mainArticle.categoryLabel}
              title={mainArticle.title}
              slug={mainArticle.slug}
            />
          )}
        </div>

        {/* right list */}
        <div className="article-spotlight-list-right">
          <ArticleList
            articles={rightArticles}
            articleItemVariant={articleItemVariant}
            type={"rightVerticalArticle"}
            adsId={categoryAdsId}
          />
        </div>
      </div>
      <div className="article-spotlight-list-btm">
        <ArticleList
          articles={bottomArticles}
          articleItemVariant={"categoryHorizontal"}
          adsConfig={{ adsInterval: 5 }}
          type={"blogArticle"}
          adsId={categoryAdsId}
        />
        <ArticleListInfiniteScroll categoryId={categoryId} pinArticleId={pinArticleId} adsId={categoryAdsId} />
      </div>
    </div>
  )
}

export default PinArticleSpotlightList
