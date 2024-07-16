import React from "react"
import { FeatureAds, getHomeFeatureAds } from "@/common/utils/data/home/getHomeFeatureAds"
import VerticalAdsWrapper from "@/components/advertisement/wrappers/VerticalAdsWrapper"

async function HomeAdsSide() {
  let homeAds: FeatureAds | undefined

  try {
    homeAds = await getHomeFeatureAds()
  } catch (error) {
    console.error(error)
  }

  return <div className="my-12 lg:my-[26px]">{homeAds && <VerticalAdsWrapper adsID={homeAds} />}</div>
}

export default HomeAdsSide
