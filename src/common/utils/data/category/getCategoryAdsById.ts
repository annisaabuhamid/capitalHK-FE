import { getClient } from "@/common/lib/apollo/apollo-client"
import { CategoryAdsDocument, CategoryAdsQuery } from "@/common/lib/graphql/generated/graphql"

export const getCategoryAdsById = async (id: string) => {
    const client = getClient()
  
    const { data, error, errors } = await client.query<CategoryAdsQuery>({
      variables: { id },
      query: CategoryAdsDocument,
    })
    const categoryAds = data.category?.data
  
    return categoryAds
  }