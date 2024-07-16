"use client"

import Image from "next/image"
import React from "react"
import LinesEllipsis from "react-lines-ellipsis"
import { ArticleBasicFragment } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import ArticleTag from "@/components/article/common/atom/ArticleTag"
import ArticleItemLinkWrapper from "@/components/article/common/organisms/ArticleItemLinkWrapper"

type Props = {
  pinArticle?: Article
  category?: any
  categories?: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
}

function PinArticle({ pinArticle, category, categories }: Props) {
  return (
    <ArticleItemLinkWrapper
      className="article-item-medium text-secondary-800"
      slug={pinArticle?.slug ?? ""}
      categories={pinArticle?.categories}
    >
      <div className="flex flex-col h-full">
        <div className="aspect-[3/2] w-full h-full max-w-full max-h-full lg:max-w-[646px] lg:max-h-[430px]">
          <Image
            className="aspect-[3/2] w-full h-full object-cover xl:h-[430px]"
            src={pinArticle?.mastheadImage ?? ""}
            width={pinArticle?.mastheadImageWidth ?? undefined}
            height={pinArticle?.mastheadImageHeight ?? undefined}
            alt={pinArticle?.mastheadImageAlt || "alt not available"}
            priority={true}
          />
        </div>
        <div className="pt-4 md:pt-[24px] flex-col flex h-full">
          <div className="flex gap-1 items-center font-bold">
            <ArticleTag hidden={!category.attributes.name}>{category.attributes.name}</ArticleTag>
            <span hidden={!pinArticle?.date || !category.attributes.name}>|</span>
            <ArticleDate date={pinArticle?.date} />
            <div className="ml-auto">
              <ArticleBookmarkButton articleId={pinArticle?.articleId} />
            </div>
          </div>
          <div className="pt-3 h1 font-bold line-clamp-1">{pinArticle?.title}</div>

          {pinArticle?.description && (
            <div className="flex mt-auto">
              <LinesEllipsis
                text={pinArticle?.description || ""}
                className="article-description text-justify pt-4"
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </div>
          )}
        </div>
      </div>
    </ArticleItemLinkWrapper>
  )
}

export default PinArticle
