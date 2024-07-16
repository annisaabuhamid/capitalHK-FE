"use client"

import Markdown from "markdown-to-jsx"
import React from "react"
import { ComponentArticleListicleTitle } from "@/common/lib/graphql/generated/graphql"
import { cn } from "@/components/ui/utils"

type Props = {
  data: ComponentArticleListicleTitle | any
}


const ListicleTitle = ({ data }: Props) => {
  let number = data?.Number
  let title = data?.Title
  let description = data?.description

  return (
    <>
      <div className="flex items-start mt-9">
        <div className="bg-primary-900 text-center h-7 w-full max-w-[28px] text-white font-quicksand font-medium text-xl rounded-sm mt-1 overflow-hidden">
          {number}
        </div>
        <div className="pl-3 font-semibold text-[24px] leading-8">{title}</div>
      </div>
      <div className="text-base pt-2">{description}</div>
    </>
  )
}
export default ListicleTitle
