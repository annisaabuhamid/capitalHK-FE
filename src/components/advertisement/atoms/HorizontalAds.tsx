"use client"

import React, { useEffect, useState } from "react"
import { getDummyImageUrl } from "@/common/utils/getDummyImageUrl"
import Banner from "@/components/advertisement/dfp/banner"

type Props = {}

function HorizontalAds({}: Props) {
  const imageUrl = getDummyImageUrl({ size: [1920, 1980] })
  const [adUnitPath, setAdUnitPath] = useState("");
  const [sizeMapping, setSizeMapping] = useState(null);
  const [divId, setDivId] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
  //     const url = `${strapiUrl}/api/ad-banners?filters[position][$eq]=in%20between`

  //     try {
  //       const response = await fetch(url);
  //       const result: any = await response.json();
  //       return result;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData().then(data => {
  //     const ad = data?.data[0]?.attributes;
  //     setAdUnitPath(ad.ad_unit_path);
  //     let size_mapping: any = JSON.parse(ad.size_mapping);
  //     setSizeMapping(size_mapping);
  //     setDivId("gpt-horizontal-" + (Math.floor(Math.random() * 10000)).toString())
  //   });
  // }, []);

  return (
    <div className="horizontal-ads">
      {/* <img src={imageUrl ?? ""} alt="horizontal ads" className="w-full h-full object-cover" /> */}
      { (adUnitPath && sizeMapping) ? (
        <Banner adUnitPath={adUnitPath} sizeMapping={sizeMapping} divId={divId} />
      ) : null
      }
    </div>
  )
}

export default HorizontalAds
