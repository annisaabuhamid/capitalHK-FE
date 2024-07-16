import { getClient } from "@/common/lib/apollo/apollo-client"
import { HomeFeaturedEditorPickDocument, HomeFeaturedEditorPickQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export const getHomeFeaturedEditorPicks = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeFeaturedEditorPickQuery>({
    query: HomeFeaturedEditorPickDocument,
  })
  const fragmentData = data.homePage?.data?.attributes?.featuredSection.editor_picks?.data ?? []

  const transformedData = transformArticleListShape(fragmentData)
  return transformedData
}
export type FeaturedEditorPicksData = ReturnType<typeof getHomeFeaturedEditorPicks> extends Promise<infer U> ? U : never
