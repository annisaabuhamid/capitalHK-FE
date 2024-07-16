import { Article, ArticlePropsOptional } from "@/common/types"
import { getCategoryAdsById } from "@/common/utils/data/category/getCategoryAdsById"
import ArticleItemMedium from "@/components/article/common/organisms/ArticleItemMedium"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"
import ArticleListInfiniteScroll from "@/components/article/common/organisms/list/ArticleListInfiniteScroll"

type Props = {
  articles: Article[]
  articleItemVariant?: ArticlePropsOptional["articleItemVariant"]
  categoryId?: string
}

async function ArticleSpotlightList({ articles, articleItemVariant, categoryId }: Props) {
  const [mainArticle, ...otherArticles] = articles
  const rightArticles = otherArticles.slice(0, 2)
  const bottomArticles = otherArticles.slice(2)

  const categoryAds = await getCategoryAdsById(categoryId!)
  const categoryAdsId = categoryAds?.attributes?.ad_banner_in_between?.data?.id || ""

  console.log(categoryAds)

  return (
    <div className="article-spotlight-list">
      {/* left spotlight */}
      <div className="article-spotlight-list-wrapper">
        <div className="article-spotlight-list-left">
          {mainArticle ? (
            <ArticleItemMedium
              titleVariant={"h1"}
              categories={mainArticle.categories}
              articleId={mainArticle.articleId}
              date={mainArticle.date}
              description={mainArticle.description}
              articleItemVariant={`vertical`}
              imageUrl={mainArticle.imageUrl}
              articleImageProps={{ fetchPriority: "high", loading: "eager" }}
              categoryLabel={mainArticle.categoryLabel}
              title={mainArticle.title}
              slug={mainArticle.slug}
            />
          ) : null}
        </div>
        {/* right list */}
        <div className="article-spotlight-list-right">
          <ArticleList articles={rightArticles} articleItemVariant={articleItemVariant} adsId={categoryAdsId} />
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
        <ArticleListInfiniteScroll categoryId={categoryId} adsId={categoryAdsId} />
      </div>
    </div>
  )
}

export default ArticleSpotlightList
