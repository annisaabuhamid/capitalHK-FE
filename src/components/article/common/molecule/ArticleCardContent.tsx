"use client"

import React from "react"
import LinesEllipsis from "react-lines-ellipsis"
import { ArticlePropsOptional } from "@/common/types"
import ArticleCardTitle from "@/components/article/common/atom/ArticleCardTitle"

type Props = ArticlePropsOptional & {}

function ArticleCardContent({ title, description, titleVariant }: Props) {
  return (
    <div>
      <div className="font-bold text-xl">
        <ArticleCardTitle title={title} titleVariant={titleVariant} className="line-clamp-1" />
      </div>
      <LinesEllipsis
        text={description || ""}
        className="article-description text-justify pt-4 text-4 mt-auto leading-[27px]"
        maxLine="3"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </div>
  )
}

export default ArticleCardContent
