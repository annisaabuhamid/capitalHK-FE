import { getClient } from "@/common/lib/apollo/apollo-client"
import {
    EditorListingDocument,
    EditorListingQuery,
  
} from "@/common/lib/graphql/generated/graphql"

export const getAllEditorListing = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<EditorListingQuery>({
    query: EditorListingDocument,
  })
  const EditorListing = data.editorListing

  return EditorListing
}
