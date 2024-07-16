"use client"

import {
  useAdsQuery,
  useCategoryAdsBySlugQuery,
  useCategoryEditorPickQuery,
} from "@/common/lib/graphql/generated/graphql"
import { OptionalString } from "@/common/types"
import Ads from "../atoms/Ads"
import { usePathname } from "next/navigation"

type Props = { adsID: OptionalString; isArticle?: boolean }

function VerticalAdsWrapper({ adsID, isArticle = false }: Props) {
  const { data } = useAdsQuery({ variables: { id: adsID! } })

  const adName = data?.adBanner?.data?.attributes?.name || ""
  const adUnit = data?.adBanner?.data?.attributes?.ad_unit_path || ""
  const sizeMapping = data?.adBanner?.data?.attributes?.size_mapping || ""

  return (
    <div className="vertical-ads-wrapper">
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

export default VerticalAdsWrapper
