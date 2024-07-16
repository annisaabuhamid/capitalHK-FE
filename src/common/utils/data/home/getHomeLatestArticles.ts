import { getClient } from "@/common/lib/apollo/apollo-client"
import { ArticleListItemDocument, ArticleListItemQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export const getHomeLatestArticles = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<ArticleListItemQuery>({
    query: ArticleListItemDocument,
    variables: { sort: "publishedDate:desc", pagination: { limit: 4 } },
  })
  const fragmentData = data.articles?.data

  const transformedData = transformArticleListShape(fragmentData ?? [])
  return transformedData
}
export type HomeLatestArticlesData = ReturnType<typeof getHomeLatestArticles> extends Promise<infer U> ? U : never
