"use client"

import React from "react"
import { useAdsQuery } from "@/common/lib/graphql/generated/graphql"
import Ads from "../atoms/Ads"

type Props = { adsID?: string }

function HorizontalAdsWrapper({ adsID }: Props) {
  const { data } = useAdsQuery({ variables: { id: adsID! } })

  const adName = data?.adBanner?.data?.attributes?.name || ""
  const adUnit = data?.adBanner?.data?.attributes?.ad_unit_path || ""
  const sizeMapping = data?.adBanner?.data?.attributes?.size_mapping || ""

  // console.log("ADS Name", adName)
  // console.log("ADS Unit", adUnit)
  // console.log("ADS size mapping", sizeMapping)

  return (
    <div className="horizontal-ads-wrapper">
      {data && (
        <>
          {/* <div className="h6">Advertisement</div> */}
          <div className="mx-auto">
            <Ads adUnit={adUnit} sizeMapping={sizeMapping} slotDiv={adName} />
          </div>
          {/* <div className="h6">Continue Reading Below</div> */}
        </>
      )}
    </div>
  )
}

export default HorizontalAdsWrapper
