import React from "react"
import { ArticlePropsOptional } from "@/common/types"

type Props = ArticlePropsOptional & {
  className?: string
}

function ArticleCardTitle({ title, className = "", titleVariant = "h4" }: Props) {
  // conditional render h4 or h1
  // const CustomHeadingTag: keyof JSX.IntrinsicElements = `${titleVariant}`

  return (
    // <CustomHeadingTag className={`article-title ${className} ${titleVariant === "h4" && "font-medium"}`}>
    //   {title}
    // </CustomHeadingTag>

    <div className={`article-title ${className} ${titleVariant} ${titleVariant === "h4" && "font-medium"}`}>
      {title}
    </div>
  )
}

export default ArticleCardTitle
