import { debounce } from "lodash"
import React, { useCallback, useEffect, useId, useMemo, useState } from "react"

type SizeMappingItem = {
  ss: [number, number]
  as: [number, number][]
}

type SizeMappingArray = SizeMappingItem[]

type Props = {
  adUnit: string
  sizeMapping: string // This is expected to be a JSON string
  slotDiv: string
}
interface WindowSize {
  width: number | undefined
  height: number | undefined
}

let dfp: {
  ads_slots: { [key: string]: any }
  mapping: { [key: string]: any }
  ads_unit: string[]
} = {
  ads_slots: {},
  mapping: {},
  ads_unit: [],
}

const Ads = ({ adUnit, sizeMapping, slotDiv }: Props) => {
  const slotID = useId() + slotDiv

  // Use type assertion here to let TypeScript know the structure of your parsed JSON
  const mapping_array: SizeMappingArray = useMemo(() => JSON.parse(sizeMapping) as SizeMappingArray, [sizeMapping])

  // let isDisplay = !dfp["ads_unit"].includes(adUnit)
  // if (isDisplay) {
  const isDisplay = useMemo(() => {
    return !dfp["ads_unit"].includes(adUnit)
  }, [adUnit])
  if (!dfp["ads_unit"].includes(adUnit)) {
    dfp["ads_unit"].push(adUnit)
  }

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  const handleResize = useCallback(() => {
    if (windowSize.width !== window.innerWidth) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [windowSize.width])

  const debouncedHandleResize = debounce(handleResize, 2000)

  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
      debouncedHandleResize.cancel()
    }
  }, [debouncedHandleResize])

  useEffect(() => {
    const loadAd = () => {
      if (window.googletag && googletag.apiReady) {
        googletag.cmd.push(() => {
          let size_array: any[] = mapping_array.flatMap((item) => item.as)
          // After building size_array with all sizes
          let uniqueSizes = Array.from(new Set(size_array.map((item) => JSON.stringify(item)))).map((item) =>
            JSON.parse(item)
          )

          dfp["mapping"][slotID] = googletag.sizeMapping()
          mapping_array.forEach((mapping) => {
            dfp["mapping"][slotID].addSize(mapping.ss, mapping.as)
          })
          dfp["mapping"][slotID] = dfp["mapping"][slotID].build()

          googletag.cmd.push(() => {
            dfp["ads_slots"][slotID] = googletag
              .defineSlot(adUnit, uniqueSizes as [number, number][], slotID)
              ?.defineSizeMapping(dfp["mapping"][slotID])
              .addService(googletag.pubads())

            if (dfp["ads_slots"][slotID]) {
              googletag.pubads().enableSingleRequest()
              googletag.enableServices()
            }
          })

          googletag.cmd.push(() => {
            // console.log(slotID, 'dfp["ads_unit"]', dfp["ads_unit"], 'dfp["ads_slots"]', dfp["ads_slots"])
            if (isDisplay) {
              // console.warn("Display Ads --", slotID)
              googletag.display(slotID)
            } else {
              // console.warn("Refresh Ads ---", slotID)
              googletag.pubads().refresh([dfp["ads_slots"][slotID]])
            }
          })
        })
      }
    }

    loadAd()

    return () => {
      googletag.cmd.push(() => {
        googletag.destroySlots([dfp["ads_slots"][slotID]])
        delete dfp["ads_slots"][slotID]
      })
    }
  }, [adUnit, isDisplay, mapping_array, slotID, windowSize])

  return <div id={slotID}></div>
}

export default Ads
