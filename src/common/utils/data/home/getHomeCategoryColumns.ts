import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  ArticleListFragment,
  CategoryFragmentFragment,
  HomeCategoryColumnDocument,
  HomeCategoryColumnQuery,
} from "@/common/lib/graphql/generated/graphql"

export type HomeCategoryFeature = {
  id: string
  pinArticle: ArticleListFragment | null | undefined
  category: CategoryFragmentFragment | null | undefined
}
export const getHomeCategoryColumns = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeCategoryColumnQuery>({ query: HomeCategoryColumnDocument })
  const rawData = data.homePage?.data?.attributes?.CategoryColumn?.categories?.data ?? []
  const typedData = rawData

  return typedData
}
