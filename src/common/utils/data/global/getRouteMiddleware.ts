import { getMiddlewareClient } from "@/common/lib/apollo/middleware-client"
import { RoutesDocument, RoutesQuery, RoutesQueryVariables } from "@/common/lib/graphql/generated/graphql"

export const getRouteMiddleware = async (variables: RoutesQueryVariables) => {
  const client = getMiddlewareClient()
  try {
    const { data, error, errors } = await client.query<RoutesQuery>({
      query: RoutesDocument,
      variables,
    })
    return data.routes?.data
  } catch (error) {
    console.error("getRouteMiddleware ERROR", error)
  }
}
