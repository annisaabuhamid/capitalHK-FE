"use client"

import { ReactElement, useEffect, useState } from "react"
import { useArticleListSimpleQuery } from "@/common/lib/graphql/generated/graphql"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"
import TagArticleListInfiniteScroll from "./TagArticleListInfiniteScroll"
import VerticalAds from "../advertisement/atoms/VerticalAds"
import ArticleList from "../article/common/organisms/list/ArticleList"
import Container from "../common/atom/container/Container"

type Props = {
  tagID: string[]
  tagName: string
  tagSlug: string
}

function TagResult({ tagID, tagName, tagSlug }: Props) {
  const { data } = useArticleListSimpleQuery({
    variables: {
      filters: { tags: { slug: { eq: tagSlug } } },
      pagination: { pageSize: ARTICLE_PER_PAGE, page: 1 },
      sort: ["publishedDate:desc"],
    },
  })
  const rawArticleList = data?.articles?.data || []
  const initialarticles = transformArticleListShape(rawArticleList)

  return (
    <Container>
      <div className="mt-6 mb-10">
        <div className="flex gap-[49.5px] relative mb-[115px]">
          <div className="flex-1">
            <div className="text-left uppercase text-primary-900 h1">{tagName}</div>
            <p className="pt-3 pb-9 lg:pb-8  text-left text-base font-normal">
              關於{tagName}搜尋結果顯示{data?.articles?.meta.pagination.total}篇相關的文章。
            </p>
            {tagID.length > 0 && (
              <div className="article-spotlight-list">
                <div className="article-spotlight-list-btm">
                  <ArticleList
                    articles={initialarticles}
                    articleItemVariant={"categoryHorizontal"}
                    adsConfig={{ adsInterval: 5 }}
                    showBlogger={true}
                  />
                  <TagArticleListInfiniteScroll tagSlug={tagSlug} />
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:flex sticky top-[60px] h-full flex-col items-center justify-start">
            <div className="mb-4">
              <VerticalAds />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
// }

export default TagResult
