import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  ArticleListItemDocument,
  ArticleListItemQuery,
  ArticleListItemQueryVariables,
} from "@/common/lib/graphql/generated/graphql"
import { OptionalString } from "@/common/types"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export type ArticleByCategory = {
  imageUrl?: OptionalString
  date?: OptionalString
  tag?: OptionalString
  articleId?: OptionalString
  title?: OptionalString
  description?: OptionalString
}
export const getArticlesByCategory = async (categorySlug?: string, variables?: ArticleListItemQueryVariables) => {
  const client = getClient()
  const { data, error, errors } = await client.query<ArticleListItemQuery>({
    query: ArticleListItemDocument,
    variables: {
      filters: { categories: { slug: { eq: categorySlug } } },
      ...variables,
    },
  })

  const rawArticleList = data.articles?.data ?? []

  const articles = transformArticleListShape(rawArticleList)
  return articles
}
