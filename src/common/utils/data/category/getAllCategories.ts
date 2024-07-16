import { getClient } from "@/common/lib/apollo/apollo-client"
import { CategoriesDocument, CategoriesQuery } from "@/common/lib/graphql/generated/graphql"

export const getAllCategories = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<CategoriesQuery>({
    variables: { pagination: { limit: -1 }, sort: "name:asc" },
    query: CategoriesDocument,
  })
  const categories = data.categories?.data ?? []
  return categories
}
