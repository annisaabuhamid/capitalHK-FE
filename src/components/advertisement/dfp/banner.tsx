import React, { useEffect, useState } from "react"

interface BannerDiv {
  adUnitPath: string
  sizeMapping: number[]
  divId: string
}

/**
 * Remove duplicated available ad sizes array
 * @param originalArray number[][]
 * @returns number[][]
 */
const removeDuplicates = function (originalArray: googletag.MultiSize): googletag.MultiSize {
  const uniqueArray: googletag.MultiSize = []

  originalArray.forEach((arr) => {
    const exists = uniqueArray.some((existingArr) => JSON.stringify(existingArr) === JSON.stringify(arr))
    if (!exists) {
      uniqueArray.push(arr)
    }
  })

  return uniqueArray
}

const Banner: React.FC<BannerDiv> = ({ adUnitPath, sizeMapping, divId }) => {
  const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   if (window) {
  //     /** Able to do popup if it's mobile */
  //     // setIsMobile(window.innerWidth <= 767.98)
  //     const { googletag } = window
  //     let availableSizes: number[][] = []
  //     /** Build size mapping */
  //     const mapping = googletag.sizeMapping()
  //     sizeMapping.forEach((value: any) => {
  //       const as = value.as
  //       const ss = value.ss
  //       availableSizes = availableSizes.concat(as)
  //       mapping.addSize(ss, as)
  //     })
  //     mapping.addSize([0, 0], [])
  //     // TODO: has issue
  //     // const finalMapping = mapping.build()

  //     // const uniqueAvailableSizes: number[][] = removeDuplicates(availableSizes)
  //     // const responsiveAdSlot = googletag
  //     //   .defineSlot(adUnitPath, uniqueAvailableSizes, divId)
  //     //   .addService(googletag.pubads())
  //     // responsiveAdSlot?.defineSizeMapping(finalMapping)
  //     googletag.cmd.push(function () {
  //       googletag.pubads().enableSingleRequest()
  //       googletag.enableServices()
  //     })
  //     googletag.cmd.push(function () {
  //       googletag.display(divId)
  //     })
  //   }
  // }, [divId])

  if (divId) {
    return (
      <div id="banner">
        <div id={divId} />
      </div>
    )
  } else {
    return null
  }
}

export default Banner
