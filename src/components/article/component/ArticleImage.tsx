"use client"

import Image from "next/image"
import { ComponentArticleImage } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"

type Props = {
  data: ComponentArticleImage
}

const ArticleImage = ({ data }: Props) => {
  let ImageURL = data.image?.data?.attributes?.formats?.large?.url || data.image?.data?.attributes?.url || ""
  let ImageAlt = data.image?.data?.attributes?.alternativeText || "alt not available"
  let ImageHeight =
    (data.image?.data?.attributes?.formats?.large?.height || data.image?.data?.attributes?.height) ?? undefined
  let ImageWidth =
    (data.image?.data?.attributes?.formats?.large?.width || data.image?.data?.attributes?.width) ?? undefined
  let caption = data.caption ?? undefined

  return (
    <div className="mt-9 lg:max-w-[728px]">
      <Image
        priority
        src={ImageURL}
        width={ImageWidth}
        height={ImageHeight}
        alt={ImageAlt}
        quality={IMAGE_QUALITY}
        className="w-full"
      />
      <p className="pt-[6px] text-xs font-normal text-secondary-400 lg:max-w-[728px] break-words">{caption}</p>
    </div>
  )
}
export default ArticleImage
