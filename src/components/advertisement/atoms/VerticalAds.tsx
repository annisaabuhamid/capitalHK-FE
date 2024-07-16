"use client"

import React, { useEffect, useState } from "react"
import { getDummyImageUrl } from "@/common/utils/getDummyImageUrl"
import Banner from "@/components/advertisement/dfp/banner"
import { AdsQuery } from "@/common/lib/graphql/generated/graphql"

type Props = { adsData?: AdsQuery }

function VerticalAds({ adsData }: Props) {
  const imageUrl = getDummyImageUrl({ size: [600, 600] })
  const [adUnitPath, setAdUnitPath] = useState("")
  const [sizeMapping, setSizeMapping] = useState(null)
  const [divId, setDivId] = useState("")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
  //     const url = `${strapiUrl}/api/ad-banners?filters[position][$eq]=side`

  //     try {
  //       const response = await fetch(url)
  //       const result: any = await response.json()
  //       return result
  //     } catch (error) {
  //       console.error("Error fetching data:", error)
  //     }
  //   }
  //   fetchData().then((data) => {
  //     const ad = data?.data[0]?.attributes
  //     setAdUnitPath(ad.ad_unit_path)
  //     let size_mapping: any = JSON.parse(ad.size_mapping)
  //     setSizeMapping(size_mapping)
  //     setDivId("gpt-vertical-" + Math.floor(Math.random() * 10000).toString())
  //   })
  // }, [])

  return (
    <div className="vertical-ads">
      {/* <img src={imageUrl ?? ""} alt="vertical ads" className="w-full h-full object-cover" /> */}
      {adUnitPath && sizeMapping ? <Banner adUnitPath={adUnitPath} sizeMapping={sizeMapping} divId={divId} /> : null}
    </div>
  )
}

export default VerticalAds
