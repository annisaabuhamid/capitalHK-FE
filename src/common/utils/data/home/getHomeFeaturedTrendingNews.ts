import { getClient } from "@/common/lib/apollo/apollo-client"
import { HomeFeatureTrendingNewsDocument, HomeFeatureTrendingNewsQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export const getHomeFeaturedTrendingNews = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeFeatureTrendingNewsQuery>({
    query: HomeFeatureTrendingNewsDocument,
  })
  const fragmentData = data.homePage?.data?.attributes?.featuredSection.popular_news?.data

  const transformedData = transformArticleListShape(fragmentData ?? [])
  return transformedData
}
export type FeaturedTrendingNewsData = ReturnType<typeof getHomeFeaturedTrendingNews> extends Promise<infer U>
  ? U
  : never
