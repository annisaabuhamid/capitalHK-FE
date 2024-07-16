"use client"

import Image from "next/image"
import { ComponentArticleQuestionAnswer2Columns } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import { cn } from "@/components/ui/utils"

type Props = {
  data: ComponentArticleQuestionAnswer2Columns
}

const BiQuestionAnswer = ({ data }: Props) => {
  let imageURL = data.image?.data?.attributes?.url ?? ""
  let imageAlt = data.image?.data?.attributes?.alternativeText || "alt not available"
  let imageWidth = data.image?.data?.attributes?.width ?? undefined
  let imageHeight = data.image?.data?.attributes?.height ?? undefined
  if (!data.QuestionAnswers) {
    return null
  }
  return (
    <div className="flex flex-col-reverse mt-9 lg:flex-row lg:flex-nowrap w-full">
      <div
        className={cn(
          "mx-auto w-full max-w-[400px] pb-5 lg:mx-0  lg:pb-0",
          data.showAtRightColumn === true ? "lg:order-1 lg:mr-0" : ""
        )}
      >
        <Image
          className="w-full"
          src={imageURL}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          quality={IMAGE_QUALITY}
        />
        <div className={"pt-[8px] text-xs font-normal text-secondary-400 text-left max-w-[400px] break-words"}>
          {data?.imageCaption}
        </div>
      </div>

      <div
        className={cn(
          "md:w-max-[402px]  w-full lg:min-w-[48.3173%]",
          data.showAtRightColumn === true ? "lg:pr-6" : "lg:pl-6"
        )}
      >
        {data.QuestionAnswers.map((datas, index) => (
          <div key={index}>
            <div className="flex w-full pl-3">
              <div className="text-secondary-800 text-sm font-normal font-quicksand leading-[30px] w-5 h-8">Q</div>
              <div className="w-11/12 break-words pl-6 text-[17px]   font-medium ">{datas?.Question}</div>
            </div>
            <div className="flex w-full pb-6 md:pb-9 pt-3 pl-3">
              <div className="text-secondary-800 text-sm font-normal font-quicksand leading-[30px] w-5 h-8">A</div>

              <div className="w-11/12 break-words pl-6 text-[17px]   font-normal ">{datas?.Answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BiQuestionAnswer
