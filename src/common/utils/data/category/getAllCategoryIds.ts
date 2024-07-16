import { getClient } from "@/common/lib/apollo/apollo-client"
import { AllCategoryIdsDocument, AllCategoryIdsQuery } from "@/common/lib/graphql/generated/graphql"

export const getAllCategoryIds = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<AllCategoryIdsQuery>({
    // variables: { pagination: { limit: -1 }, sort: "name:asc" },
    query: AllCategoryIdsDocument,
  })
  const categoryIds = data.categories?.data
  return categoryIds
}
