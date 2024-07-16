"use client"

import { useLazyQuery } from "@apollo/client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArticleListSimpleDocument } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"

type Props = {
  articleIds: string[]
  // articles: Article[]
}

let page = 2

function ArticleSearchInfiniteScroll({ articleIds }: Props) {
  const { ref, inView } = useInView()
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [articleList, setArticleList] = useState<Article[]>([])
  const [articleListSimpleQuery] = useLazyQuery(ArticleListSimpleDocument, { ssr: false })
  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      setIsLoading(true)
      const fetchNewArticles = async () => {
        const articleIdsToFetch = articleIds.slice((page - 1) * ARTICLE_PER_PAGE, page * ARTICLE_PER_PAGE)
        console.log(`articleIdsToFetch: ${articleIdsToFetch}`)
        if (articleIdsToFetch.length === 0) {
          return []
        }
        const result = await articleListSimpleQuery({
          variables: {
            filters: { id: { in: articleIdsToFetch } },
            pagination: { pageSize: ARTICLE_PER_PAGE, page: 1 },
            sort: ["publishedDate:desc", "publishedAt:desc"],
          },
        })
        const rawArticleList = result.data?.articles?.data ?? []
        const newArticles = transformArticleListShape(rawArticleList)
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
          })
          page++
        }
        setIsLoading(false)
      })
    }
  }, [inView, articleList, articleListSimpleQuery, articleIds, hasMore, isLoading])

  const isShowingSpinner = hasMore && inView && isLoading
  return (
    <>
      <div className="article-spotlight-list grid lg:grid-cols-12 pb-3 gap-[48px] flex-grow">
        <div className="article-spotlight-list-btm lg:col-span-12 ">
          <ArticleList
            articles={articleList}
            articleItemVariant={"categoryHorizontal"}
            adsConfig={{ adsInterval: 5 }}
            type={"blogArticle"}
            showBlogger={true}
          />
          <div className="h-[306px] ">{/* <HorizontalAdsWrapper /> */}</div>
        </div>
      </div>
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

export default ArticleSearchInfiniteScroll
