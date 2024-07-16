"use client"

import Image from "next/image"
import { ComponentArticlePrizeList } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"

type Props = {
  data: ComponentArticlePrizeList
}

const PrizeList = ({ data }: Props) => {
  let companies = data.prizeList

  return (
    <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-6 ">
      {companies?.map((prize, index) => (
        <div className="flex flex-col max-w-[164px]" key={index}>
          <div>
            <Image
              src={prize?.companyLogo.data?.attributes?.url ?? ""}
              width={prize?.companyLogo.data?.attributes?.width ?? undefined}
              height={prize?.companyLogo.data?.attributes?.height ?? undefined}
              alt={prize?.companyLogo.data?.attributes?.alternativeText || "alt not available"}
              quality={IMAGE_QUALITY}
              className="max-w-[156px] md:max-w-[164px]"
            />
          </div>
          <div className="w-[150px]">
            <div className="text-[17px] font-medium w-[150px]">{prize?.name}</div>
            <div className="text-[17px] h-[55px] line-clamp-2 font-normal">{prize?.companyName}</div>
            <div className="text-sm font-bold pb-4">{prize?.content1}</div>
            <div className="text-sm font-normal">{prize?.content2}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PrizeList
