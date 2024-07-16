import React from "react"
import { getHomeCategoryFeature } from "@/common/utils/data/home/getHomeCategoryFeature"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"
import HorizontalAdsWrapper from "@/components/advertisement/wrappers/HorizontalAdsWrapper"
import HomeHotArticleSpotlightList from "@/components/home/HomeHotArticleSpotlightList"

type Props = {}

async function HomeCategoryFeatureSections({}: Props) {
  const homeCategoryFeatures = await getHomeCategoryFeature()
  // console.log("homeCategoryFeatures ===", homeCategoryFeatures)
  return (
    <>
      {homeCategoryFeatures.map((homeCategoryFeature, index) => {
        // const hasNextSection = index < homeCategoryFeatures.length - 1
        const spotLightArticle = homeCategoryFeature.pinArticle
        const categorySlug = homeCategoryFeature.category?.attributes?.slug
        if (!spotLightArticle || !categorySlug) return null
        const [pinArticle] = transformArticleListShape([spotLightArticle])
        const adsId = homeCategoryFeature.ads?.id

        return (
          <div className="home-container" key={homeCategoryFeature.id}>
            <HomeHotArticleSpotlightList
              title={homeCategoryFeature.category?.attributes?.name}
              spotLightArticle={pinArticle}
              categorySlug={categorySlug}
            />
            {
              // hasNextSection &&
              adsId && <HorizontalAdsWrapper adsID={adsId} />
            }
          </div>
        )
      })}
    </>
  )
}

export default HomeCategoryFeatureSections
