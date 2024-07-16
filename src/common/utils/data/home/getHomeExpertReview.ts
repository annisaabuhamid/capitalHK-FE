import { getClient } from "@/common/lib/apollo/apollo-client"
import { ArticleListItemDocument, ArticleListItemQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export const getHomeExperReviews = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<ArticleListItemQuery>({
    query: ArticleListItemDocument,
    variables: {
      filters: { editor: { isBlogger: { eq: true } } },
      sort: "publishedDate:desc",
      pagination: { limit: 20 },
    },
  })
  const fragmentData = data.articles?.data
  const transformedData = transformArticleListShape(fragmentData ?? [])
  return transformedData
}
export type getHomeExperReviewsData = ReturnType<typeof getHomeExperReviews> extends Promise<infer U> ? U : never
