import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  MenusMenuItemsDocument,
  MenusMenuItemsQuery,
  MenusMenuItemsQueryVariables,
} from "@/common/lib/graphql/generated/graphql"

export const getMenuItems = async ({ variables }: { variables: MenusMenuItemsQueryVariables }) => {
  const client = getClient()

  const { data, error, errors } = await client.query<MenusMenuItemsQuery>({ variables, query: MenusMenuItemsDocument })
  return data.menusMenuItems?.data ?? []
}
