import { getClient } from "@/common/lib/apollo/apollo-client"
import { EditorsDocument, EditorsQuery, EditorsQueryVariables } from "@/common/lib/graphql/generated/graphql"

type Props = {
  variables?: EditorsQueryVariables
}
export const getAllEditors = async (params?: Props) => {
  const client = getClient()

  const { data, error, errors } = await client.query<EditorsQuery>({
    variables: { pagination: { limit: -1 }, sort: "name:asc", ...params?.variables },
    query: EditorsDocument,
  })
  const bloggers = data.editors?.data ?? []

  return bloggers
}
