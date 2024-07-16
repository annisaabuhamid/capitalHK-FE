import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  AdBannerEntity,
  ArticleBasicFragment,
  CategoryFragmentFragment,
  HomeCategoryFeatureDocument,
  HomeCategoryFeatureQuery,
} from "@/common/lib/graphql/generated/graphql"

export type HomeCategoryFeature = {
  id: string
  pinArticle: ArticleBasicFragment | null | undefined
  category: CategoryFragmentFragment | null | undefined
  ads: AdBannerEntity | null | undefined
}
export const getHomeCategoryFeature = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeCategoryFeatureQuery>({ query: HomeCategoryFeatureDocument })
  const rawData = data.homePage?.data?.attributes?.CategoryFeature ?? []
  const typedData: HomeCategoryFeature[] = []
  rawData.forEach((dynamicZoneData) => {
    if (dynamicZoneData?.__typename === "ComponentHomeCategoryFeature") {
      const homeCategoryFeatureData = dynamicZoneData

      const id = homeCategoryFeatureData?.id
      const pinArticle = homeCategoryFeatureData?.pinArticle?.data
      const category = homeCategoryFeatureData?.category?.data
      const ads = homeCategoryFeatureData?.ad_banner_in_between?.data
      const typedItem = {
        id,
        pinArticle,
        category,
        ads,
      }
      typedData.push(typedItem)
    }
  })
  return typedData
}
