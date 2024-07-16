import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  CategoriesDocument,
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoryFragmentFragment,
} from "@/common/lib/graphql/generated/graphql"

export const getAllSubCategories = async (parentSlug?: string, variables?: CategoriesQueryVariables) => {
  const client = getClient()

  const { data, error, errors } = await client.query<CategoriesQuery>({
    variables: {
      filters: { parentCategory: { slug: { eq: parentSlug } } },
      sort: "ListingOrder:asc,updatedAt:desc",
      ...variables,
    },
    query: CategoriesDocument,
  })
  const subCategories = data.categories?.data ?? []

  return subCategories as CategoryFragmentFragment[]
}
