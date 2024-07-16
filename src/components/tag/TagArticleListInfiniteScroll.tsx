"use client"

import { LazyQueryExecFunction, OperationVariables, QueryResult, useLazyQuery } from "@apollo/client"
import { uniqBy } from "lodash"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArticleListSimpleDocument } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"

type Props = {
  tagSlug?: string
}

let page = 2

type GenericFetchFunction<TData, TVariables extends OperationVariables> = (
  query: LazyQueryExecFunction<TData, TVariables>
) => QueryResult<TData, TVariables>

function TagArticleListInfiniteScroll({ tagSlug }: Props) {
  const { ref, inView } = useInView()
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [articleList, setArticleList] = useState<Article[]>([])

  const [articleListSimpleQuery] = useLazyQuery(ArticleListSimpleDocument, { ssr: false })

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      setIsLoading(true)
      const fetchNewArticles = async () => {
        const result = await articleListSimpleQuery({
          variables: {
            filters: { tags: { slug: { containsi: tagSlug } } },
            pagination: { page: page, pageSize: ARTICLE_PER_PAGE },
            sort: "publishedDate:desc",
          },
        })
        const rawArticleList = result.data?.articles?.data ?? []
        const newArticles = transformArticleListShape(rawArticleList)
        // Exclude the pinned article from the new articles
        return newArticles
      }
      fetchNewArticles().then((newArticles) => {
        if (!newArticles.length) {
          setHasMore(false)
        } else {
          setArticleList((prevData) => {
            const newList = [...prevData, ...newArticles]
            return newList
          })
          page++
        }
        setIsLoading(false)
      })
    }
  }, [inView, articleList, articleListSimpleQuery, tagSlug, hasMore, isLoading])

  const isShowingSpinner = hasMore && inView && isLoading
  return (
    <>
      <ArticleList
        articles={articleList || []}
        articleItemVariant={"categoryHorizontal"}
        adsConfig={{ adsInterval: 5 }}
        type={"blogArticle"}
        showBlogger={true}
      />
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {isShowingSpinner && (
            <Image src="/svg/3-dots-bounce.svg" alt="spinner" width={56} height={56} className="object-contain" />
          )}
        </div>
      </section>
    </>
  )
}

export default TagArticleListInfiniteScroll
