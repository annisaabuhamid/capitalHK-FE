"use client"


import { ComponentArticleImageWithContent } from "@/common/lib/graphql/generated/graphql"
import Image from "next/image"
import Link from "next/link"
import Markdown from "markdown-to-jsx";
import React from "react";

type Props = {
  data: ComponentArticleImageWithContent
}

const ImageWithContent = ({ data }: Props) => {
    let ImageURL = data.image?.data?.attributes?.url ?? ""
    let ImageAlt = data.image?.data?.attributes?.alternativeText || "alt not available"
    let ImageHeight = data.image?.data?.attributes?.height ?? undefined
    let ImageWidth = data.image?.data?.attributes?.width ?? undefined
    let content = data.content; 
    let position = data.showAtRightColumn;
    return (
        <div className="flex flex-col max-w-[980px] justify-center items-start gap-12 md:flex-row mx-auto">
        <div className="max-w-[490px]  self-center md:self-stretch pt-0 md:pt-8  justify-start items-start gap-2 flex">
          {content && (
            <div className="prose max-w-[490px] text-secondary-900 text-base font-normal break-words pb-10 prose-h1:lg:text-3xl ">
              <Markdown options={{ wrapper: React.Fragment, forceBlock: true }}>
                {content}
              </Markdown>
            </div>
          )}
        </div>
        <div className="max-w-[335px] max-h-[502px] lg:max-w-[400px] lg:max-h-[600px] self-center md:self-start">
          <div className="max-w-[335px] max-h-[502px] lg:max-w-[400px] lg:max-h-[600px]">
          <Image priority src={ImageURL} width={ImageHeight} height={ImageHeight} alt={ImageAlt} className=" " />
          </div>
        </div>
      </div>
  )
}
export default ImageWithContent
