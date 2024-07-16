import { getClient } from "@/common/lib/apollo/apollo-client"

import { CategoriesDocument, CategoriesQuery } from "@/common/lib/graphql/generated/graphql"

export const getCategoriesBasic = async () => {
  const client = getClient()
  const { data, error, errors } = await client.query<CategoriesQuery>({
    query: CategoriesDocument,
    variables: {
      pagination: { limit: -1 },
    },
  })

  const catData = data.categories?.data ?? []
  return catData
}
