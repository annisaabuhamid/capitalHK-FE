"use client"
import { useLazyQuery } from "@apollo/client"
import { debounce, uniqBy } from "lodash"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArticleListWithContentDocument, useRoutesQuery } from "@/common/lib/graphql/generated/graphql"
import { Article, ArticleBasicFragmentWithContent, OptionalString } from "@/common/types"
import { ARTICLE_CONTENT_PER_PAGE } from "@/common/utils/data/constants"
import { transformArticleShape } from "@/common/utils/transformArticleShape"
import ArticleMain from "@/components/article/common/organisms/article-content/ArticleMain"
import { usePathname } from "next/navigation"
import ArticlesInfiniteScrollTriggerWrapper from "@/components/article/common/organisms/article-content/ArticlesInfiniteScrollTriggerWrapper"

type Props = { article: Article; articleIdsToExclude: string[]; socialMediaInfinite?: React.ReactElement }

function ArticlesWithContentInfiniteScroll({ article, articleIdsToExclude }: Props) {
  const [articleListWithContentQuery] = useLazyQuery(ArticleListWithContentDocument)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()
  const router = usePathname()
  const lastIndex = router.lastIndexOf("/")
  const secondLastIndex = router.lastIndexOf("/", lastIndex - 1)
  const extractedText = router.substring(secondLastIndex + 1, lastIndex)
  const [loadedArticles, setLoadedArticles] = useState<Article[]>([])

  const fetchArticles = useCallback(
    async ({ articleIdsToExclude, page }: { articleIdsToExclude: string[]; page: number }) => {
      const limit = ARTICLE_CONTENT_PER_PAGE
      const start = (page - 1) * ARTICLE_CONTENT_PER_PAGE
      const { data } = await articleListWithContentQuery({
        variables: {
          filters: {
            id: { notIn: articleIdsToExclude },
            categories: { slug: { eq: extractedText } },
          },
          pagination: { limit, start },
          //   pagination: { page, pageSize: ARTICLE_CONTENT_PER_PAGE },
          sort: "publishedDate:desc",
        },
      })
      const rawArticleList = (data?.articles?.data ?? []) as ArticleBasicFragmentWithContent[]
      const articles = transformArticleShape(rawArticleList)
      return articles
    },
    [articleListWithContentQuery]
  )

  const loadMoreArticles = useCallback(
    async (page: number, articleIdsToExclude: string[]) => {
      setIsLoading(true)
      setPage((prev) => prev + 1)
      const newArticles = await fetchArticles({ page, articleIdsToExclude })
      // Merge new tickets with all previously loaded

      if (!newArticles.length) {
        setHasMore(false)
      } else {
        setLoadedArticles((prev) => {
          // return [...prev, ...newArticles]
          return uniqBy([...prev, ...newArticles], "articleId") // make sure no duplicate
        })

        setIsLoading(false)
        window.dispatchEvent(new CustomEvent("scroll"))
      }
    },
    [fetchArticles]
  )
  const debounceLoadMoreArticles = useCallback(debounce(loadMoreArticles, 500), [loadMoreArticles])

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      debounceLoadMoreArticles(page, articleIdsToExclude)
    }
  }, [inView, hasMore, isLoading, page, debounceLoadMoreArticles, articleIdsToExclude])

  const isShowingSpinner = hasMore && inView && isLoading
  return (
    <>
      <div className="flex-col gap-[36px]">
        {loadedArticles.map((article) => {
          return (
            <div key={article.articleId} className="relative">
              <ArticleMain titleVariant={"h1"} articleItemVariant={`vertical`} article={article} />
            </div>
          )
        })}
      </div>
      <section className="flex justify-center items-center w-full">
        <div ref={ref} className="h-20">
          {isShowingSpinner && (
            <Image src={`/svg/3-dots-bounce.svg`} alt="spinner" width={56} height={56} className="object-contain" />
          )}
        </div>
      </section>
    </>
  )
}

export default ArticlesWithContentInfiniteScroll
