"use client"

import React from "react"
import { ArticlePropsOptional } from "@/common/types"
import { getDummyImageUrl } from "@/common/utils/getDummyImageUrl"
import ArticleItemMedium from "@/components/article/common/organisms/ArticleItemMedium"

type Props = {
  titleVariant?: ArticlePropsOptional["titleVariant"]
}

function ArticleItemMediumWrapper({ titleVariant }: Props) {
  const imageUrl = getDummyImageUrl({ size: [720, 480] })
  const date = "2021-01-01"
  const tag = "可持续发展"
  const articleId = "1"
  const description = `土耳其早前發生大地震，當地人民受災，生靈塗炭。有見及此，香港北角扶輪社籌集
  HK$31,200,連同中華基督教會桂華山中學扶輪少年服務團的非華語學生及華語學生,在校內發起募捐行動,全校師生及工友共籌得HK$10,500,善款合共約四萬港元。`

  const title = "少數族裔學生 發起校內募捐行動"

  return (
    <ArticleItemMedium
      imageUrl={imageUrl}
      date={date}
      tag={tag}
      articleId={articleId}
      description={description}
      title={title}
      titleVariant={titleVariant}
    />
  )
}

export default ArticleItemMediumWrapper
