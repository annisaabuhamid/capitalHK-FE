import React from "react"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import { getCategoryAdsById } from "@/common/utils/data/category/getCategoryAdsById"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"
import ArticleListInfiniteScroll from "@/components/article/common/organisms/list/ArticleListInfiniteScroll"

type Props = {
  categoryId: string
}

async function BloggersCategoryLayoutArticleListWrapper({ categoryId }: Props) {
  const articles = await getArticlesByCategory(undefined, {
    pagination: { page: 1, pageSize: ARTICLE_PER_PAGE },
    filters: { categories: { id: { eq: categoryId } } },
    sort: "publishedDate:desc",
  })

  const categoryAds = await getCategoryAdsById(categoryId!)
  const categoryAdsId = categoryAds?.attributes?.ad_banner_in_between?.data?.id || ""

  return (
    <div className="article-spotlight-list">
      <div className="article-spotlight-list-btm">
        <ArticleList
          articles={articles}
          articleItemVariant={"categoryHorizontal"}
          adsConfig={{ adsInterval: 5 }}
          type={"blogArticle"}
          adsId={categoryAdsId}
          showBlogger={true}
        />
        <ArticleListInfiniteScroll categoryId={categoryId} adsId={categoryAdsId} />
      </div>
    </div>
  )
}

export default BloggersCategoryLayoutArticleListWrapper
