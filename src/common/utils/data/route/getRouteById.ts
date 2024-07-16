import { getClient } from "@/common/lib/apollo/apollo-client"
import { RoutesDocument, RoutesQuery } from "@/common/lib/graphql/generated/graphql"
import { ArticleBasicFragmentWithContent } from "@/common/types"

export const getRouteById = async (categoryID: string) => {
  let route = null
  if (!categoryID) return route

  const client = getClient()
  const { data, error, errors } = await client.query<RoutesQuery>({
    query: RoutesDocument,
    variables: {
      filters: { id: { eq: categoryID } },
      pagination: { limit: 1 },
    },
  })
  const rawRoute = data.routes?.data

  return rawRoute
}