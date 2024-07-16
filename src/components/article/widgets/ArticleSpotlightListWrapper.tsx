import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import ArticleSpotlightList from "@/components/article/widgets/ArticleSpotlightList"

type Props = {
  categoryId: string
}

async function ArticleSpotlightListWrapper({ categoryId }: Props) {
  const articles = await getArticlesByCategory(undefined, {
    pagination: { page: 1, pageSize: ARTICLE_PER_PAGE },
    filters: { categories: { id: { eq: categoryId } } },
    sort: "publishedDate:desc",
  })

  return <ArticleSpotlightList articles={articles} articleItemVariant="vertical" categoryId={categoryId} />
}

export default ArticleSpotlightListWrapper
