import {
  ArticleEntity,
  ArticleEntityResponse,
  CategoryPinArticleQuery,
  Maybe,
} from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"
import { getArticleById } from "@/common/utils/data/article/getArticleById"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import { getCategoryById } from "@/common/utils/data/category/getCategoryById"

import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import ArticleSpotlightList from "@/components/article/widgets/ArticleSpotlightList"
import PinArticleSpotlightList from "@/components/article/widgets/PinArticleSpotlightList"

type Props = {
  categoryId: string
  pinArticle: any
  pinArticleId: string
}

async function PinArticleSpotlightListWrapper({ categoryId, pinArticle, pinArticleId }: Props) {
  const articles = await getArticlesByCategory(undefined, {
    pagination: { page: 1, pageSize: ARTICLE_PER_PAGE },
    filters: { categories: { id: { eq: categoryId } } },
    sort: "publishedDate:desc",
  })

  let pinArticleData = await getArticleById(pinArticleId) || undefined
  let category = await getCategoryById(categoryId ?? "")

  return (
    <PinArticleSpotlightList
      articleItemVariant="vertical"
      categoryId={categoryId}
      pinArticle={pinArticle}
      articles={articles}
      category={category}
      pinArticleData={pinArticleData}
    />
  )
}

export default PinArticleSpotlightListWrapper
