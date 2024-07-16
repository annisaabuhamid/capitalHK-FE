import React from "react"
import { ArticlePropsOptional } from "@/common/types"
import ImageContainer from "@/components/image/ImageContainer"

type Props = ArticlePropsOptional

function ArticleImage({ imageUrl, articleImageProps, articleImageClassName }: Props) {
  return <ImageContainer src={imageUrl ?? ""} {...articleImageProps} className={articleImageClassName} alt="article" />
}

export default ArticleImage
