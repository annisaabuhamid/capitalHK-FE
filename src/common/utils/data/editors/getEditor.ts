import { getClient } from "@/common/lib/apollo/apollo-client"
import { EditorsDocument, EditorsQuery, EditorsQueryVariables } from "@/common/lib/graphql/generated/graphql"

type Props = {
  variables?: EditorsQueryVariables
  editorId?: string
}

export const getEditor = async ({ variables, editorId }: Props = {}) => {
  const client = getClient()

  const { data, error, errors } = await client.query<EditorsQuery>({
    query: EditorsDocument,
    variables: { pagination: { limit: 1 }, sort: "name:asc", filters: { id: { eq: editorId } }, ...variables },
  })
  const bloggers = data.editors?.data ?? []

  return bloggers[0]
}
