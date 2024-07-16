"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { useArticleListSimpleQuery } from "@/common/lib/graphql/generated/graphql"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"
import { SearchArticleList } from "@/components/search/SearchArticleList"
import { getStrapiURL } from "@/utils"
import ArticleSearchInfiniteScroll from "./ArticleSearchInfiniteScroll"
import VerticalAds from "../advertisement/atoms/VerticalAds"
import Container from "../common/atom/container/Container"
// SearchArticleList

type Props = {}

async function fetchData(keyword: string) {
  return await fetch(getStrapiURL(`/api/search`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ keyword: keyword, from: 0, size: 10000 }),
  })
    .then(async (response) => {
      return await response.json()
    })
    .catch((err) => {
      console.log(err.message)
      return null
    })
}

function SearchResult({}: Props) {
  const [articleIds, setArticleIds] = useState<string[]>([])
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)

  const searchKeyword = searchParams.get("keyword") || ""

  useEffect(() => {
    if (searchKeyword) {
      setLoading(true)
      fetchData(searchKeyword).then((results: any) => {
        const newIds: string[] = results.data.map((i: { id: string }) => i.id)
        setArticleIds(newIds)
        setLoading(false)
      })
    }
  }, [searchKeyword])

  const totalLength = articleIds.length
  const firstBatchArticleIds = articleIds.slice(0, ARTICLE_PER_PAGE)

  const { data } = useArticleListSimpleQuery({
    variables: {
      filters: { id: { in: firstBatchArticleIds } },
      pagination: { pageSize: ARTICLE_PER_PAGE, page: 1 },
      sort: ["publishedDate:desc", "publishedAt:desc"],
    },
  })

  const initialarticles = useMemo(() => {
    const rawArticleList = data?.articles?.data || []
    return transformArticleListShape(rawArticleList)
  }, [data])

  if (loading) {
    return (
      <Container>
        <div className="mt-6 mb-10">Loading ... </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="mt-6 mb-10">
        <div className="flex gap-[49.5px] relative mb-[115px]">
          <div className="flex-1">
            <div className="text-left uppercase text-primary-900 h1">{searchKeyword}</div>
            <p className="pt-3 pb-4 lg:pb-8  text-left text-base font-normal ">
              關於{searchKeyword}搜尋結果顯示{articleIds.length}篇相關的文章。
            </p>
            {articleIds.length > 0 && (
              <div className="article-spotlight-list">
                <div className="article-spotlight-list-btm">
                  <SearchArticleList articles={initialarticles} />
                  <ArticleSearchInfiniteScroll articleIds={articleIds} />
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

export default SearchResult
