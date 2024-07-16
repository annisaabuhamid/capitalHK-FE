"use client"

import { LazyQueryExecFunction, OperationVariables, QueryResult, useLazyQuery } from "@apollo/client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArticleListSimpleDocument } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { transformArticleShape } from "@/common/utils/transformArticleShape"
import ArticleGrid from "@/components/article/common/organisms/grid/ArticleGrid"

type Props = {
  categoryId?: string
  adsId?: string
}

let page = 2

type GenericFetchFunction<TData, TVariables extends OperationVariables> = (
  query: LazyQueryExecFunction<TData, TVariables>
) => QueryResult<TData, TVariables>

function ArticleGridInfiniteScroll({ categoryId, adsId }: Props) {
  //   get categorySlug from url pathname
  // const pathname = usePathname()
  // const categorySlug = pathname.split("/").pop() ?? ""

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
            filters: { categories: { id: { eq: categoryId } } },
            pagination: { page: page, pageSize: ARTICLE_PER_PAGE },
            sort: "publishedDate:desc",
          },
        })
        const rawArticleList = result.data?.articles?.data ?? []
        const newArticles = transformArticleShape(rawArticleList)
        return newArticles
      }
      fetchNewArticles().then((newArticles) => {
        if (!newArticles.length) {
          console.log(`Total articles: ${articleList.length + ARTICLE_PER_PAGE}`)
          setHasMore(false)
        } else {
          setArticleList((prevData) => {
            const newList = [...prevData, ...newArticles]
            return newList
            // const newListWithoutDuplicate = uniqBy(newList, "articleId")
            // return newListWithoutDuplicate
          })
          page++
        }
        setIsLoading(false)
      })
    }
  }, [inView, articleList, articleListSimpleQuery, categoryId, hasMore, isLoading])

  const isShowingSpinner = hasMore && inView && isLoading
  return (
    <>
      <ArticleGrid articles={articleList} adsConfig={{ adsInterval: 6 }} adsId={adsId} />
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

export default ArticleGridInfiniteScroll
