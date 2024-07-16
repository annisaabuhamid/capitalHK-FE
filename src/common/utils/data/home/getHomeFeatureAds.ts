import { getClient } from "@/common/lib/apollo/apollo-client"
import { HomeFeatureAdsDocument, HomeFeatureAdsQuery, HomeFeaturedEditorPickDocument, HomeFeaturedEditorPickQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleShape } from "@/common/utils/transformArticleShape"

export const getHomeFeatureAds = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeFeatureAdsQuery>({
    query: HomeFeatureAdsDocument,
  })
  const ad_banner_side_id = data.homePage?.data?.attributes?.featuredSection.ad_banner_side?.data?.id
  return ad_banner_side_id
}
export type FeatureAds = ReturnType<typeof getHomeFeatureAds> extends Promise<infer U> ? U : ""
