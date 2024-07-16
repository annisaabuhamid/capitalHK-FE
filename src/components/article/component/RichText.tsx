"use client"

import Markdown from "markdown-to-jsx"
import React from "react"
import { ComponentArticleRichText } from "@/common/lib/graphql/generated/graphql"
import { cn } from "@/components/ui/utils"

type Props = {
  data: ComponentArticleRichText
}

const RichText = ({ data }: Props) => {
  let text = data.richText

  return (
    <div className={cn("prose max-w-none prose-h1:lg:text-3xl mt-9 text-[#343434]")}>
      {text && <Markdown options={{ wrapper: React.Fragment, forceBlock: true }}>{text}</Markdown>}
    </div>
  )
}
export default RichText
