import React from "react"
import { cn } from "@/components/ui/utils"
import useWindowSize from "@/utils/useWindowSize"

type Props = {
  index?: any
  label?: string
  icon?: {
    url?: string
    attributes?: {
      width?: number | undefined
      height?: number
      alternativeText?: string
      url?: string
    }
  }
  iconFilled?: {
    data?: {
      attributes?: {
        width?: number
        height?: number
        alternativeText?: string
        url?: string
      }
    }
  }
  score?: number | undefined
  length?: number | undefined
}
function Rate({ index, label, icon, iconFilled, score, length }: Props) {
  const maxScore = 5
  let { isMobile } = useWindowSize()

  const className = "w-max-[24px] block"
  if (score === undefined) {
    // Handle the case where score is undefined
    return null // or return some default UI
  }
  if (length === undefined) {
    // Handle the case where length is undefined
    return null // or return some default UI
  }
  let rateImg: JSX.Element[] = []
  if (icon) {
    for (let i = 1; i <= maxScore; i++) {
      if (i <= score) {
        rateImg.push(
          <span key={i} className="flex  pr-[4px] items-center justify-center">
            <div className={className}>
              <img
                src={iconFilled?.data?.attributes?.url || ""}
                alt={iconFilled?.data?.attributes?.alternativeText || "Filled Icon"}
                width={iconFilled?.data?.attributes?.width}
                height={iconFilled?.data?.attributes?.height}
              />
            </div>
          </span>
        )
      } else {
        rateImg.push(
          <span key={i} className=" flex  pr-[4px] items-center justify-center ">
            <div className={className}>
              <img
                src={icon?.attributes?.url || ""}
                alt={icon.attributes?.alternativeText || "Icon"}
                width={icon.attributes?.width}
                height={icon.attributes?.height}
              />
            </div>
          </span>
        )
      }
    }
  }

  if (!icon) {
    return null
  }

  return (
    <div className="inline-flex flex-nowrap items-center pt-[8px] pb-[12px] ">
      {isMobile ? (
        <div
          className={cn(
            "mx-auto w-full flex flex-col",
            length === 0 || index === undefined || index === length - 1 || index % 2 || index === length
              ? ""
              : "border-r-2 border-secondary-200"
          )}
        >
          <div className="text-base text-center font-medium pb-1">{label}</div>
          <div className="flex flex-row  justify-center items-center">{rateImg}</div>
        </div>
      ) : (
        <div
          className={cn(
            " px-auto w-full flex flex-col",
            length === 0 || index === undefined || index === length - 1 || index === length
              ? ""
              : "border-r-[1px] border-secondary-200"
          )}
        >
          <div className="text-base text-center font-bold pb-1">{label}</div>
          <div className="flex flex-row  justify-center items-center">{rateImg}</div>
        </div>
      )}
    </div>
  )
}

export default Rate
