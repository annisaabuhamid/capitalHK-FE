"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useCallback, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { useScrollPercentage } from "react-scroll-percentage"
import { Article } from "@/common/types"
import ArticleTag from "@/components/article/common/atom/ArticleTag"
import { useScrollDirection } from "@/components/common/organism/provider/hook/useScrollDirection"
import { cn } from "@/components/ui/utils"
import { getParentCategory } from "@/utils"

type Props = {
  children: React.ReactNode
  article: Article
  isArticlePreview?: boolean
}

function ArticleLayout({ children, article, isArticlePreview = false }: Props) {
  const { ref: inViewRef, inView } = useInView()
  const { scrollDirection } = useScrollDirection()
  const [scrollPercentRef, percentage] = useScrollPercentage()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const wrapperIsAtViewportTop = (wrapperRef.current?.getBoundingClientRect().top ?? 0) < 100
  const showHeader = scrollDirection === "down" && inView && wrapperIsAtViewportTop
  const reverseDirection = scrollDirection === "up" && inView && wrapperIsAtViewportTop

  return (
    <div ref={wrapperRef}>
      <div ref={inViewRef}>
        <div ref={scrollPercentRef}>
          <MemoizedArticleHeader
            showHeader={showHeader}
            article={article}
            percentage={percentage}
            reverseDirection={reverseDirection}
            isArticlePreview={isArticlePreview}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default ArticleLayout

const ArticleHeader = ({
  showHeader,
  article,
  percentage,
  reverseDirection,
  isArticlePreview,
}: {
  showHeader: boolean
  article: Article
  percentage: number
  reverseDirection: boolean
  isArticlePreview: boolean
}) => {
  const router = usePathname()

  const wrapperRef = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInView()

  const lastIndex = router.lastIndexOf("/")
  const baseUrl = router.substring(0, lastIndex)
  const finalUrl = `${baseUrl}/${article.slug}`

  const observerCallback = useCallback(
    (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && entry.target === wrapperRef.current) {
          // Only update the URL if it has actually changed
          if (window.location.pathname !== finalUrl) {
            window.history.replaceState({ ...window.history.state, as: finalUrl, url: finalUrl }, "", finalUrl)
          }
        }
        if (reverseDirection && entry.intersectionRatio === 0 && entry.boundingClientRect.top < 0) {
          const previousArticleUrl = `${baseUrl}/${article.slug}`
          if (window.location.pathname !== previousArticleUrl) {
            window.history.replaceState(
              { ...window.history.state, as: previousArticleUrl, url: previousArticleUrl },
              "",
              previousArticleUrl
            )
          }
        }
      })
    },
    [finalUrl, reverseDirection, article.slug, baseUrl]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 })

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [observerCallback])

  const articleTitle = article.title ?? ""
  const categoryLabel = article.categoryLabel
  const categories = article.categories

  let layedCategory = getParentCategory(categories)

  return (
    <div
      className={cn(
        `fixed top-0 left-0 z-50 w-full bg-white shadow-md block h-[40px] 
        transition-all duration-500 ease-in-out transform`,
        showHeader ? "opacity-100" : "opacity-0 -translate-y-full"
      )}
      ref={wrapperRef}
    >
      <div className="flex md:flex-row h-[40px]">
        <div className="md:w-full xl:max-w-[1384px] xl:mx-auto lg:px-5" ref={inViewRef}>
          <div className="flex">
            <div className="lg:w-[10.5%]"></div>
            <div className="lg:w-[92px]"></div>
            <div className="flex gap-3">
              <Image
                className="w-auto h-[40px]"
                src={article.mastheadImage ?? ""}
                width={article?.mastheadImageWidth ?? undefined}
                height={article?.mastheadImageHeight ?? undefined}
                alt={article?.mastheadImageAlt || "alt not available"}
              />
              <div className="pt-1">
                <div>
                  {layedCategory != null && (
                    <ArticleTag className="text-[10px] leading-3 font-normal block" hidden={!categoryLabel}>
                      {layedCategory}
                    </ArticleTag>
                  )}
                </div>

                <div className="line-clamp-1 md:line-clamp-2 text-sm font-medium leading-[22px] md:text-base">
                  {articleTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn("h-1.5 bg-primary ", showHeader ? "opacity-100" : "opacity-0")}
        style={{
          width: `${percentage * 100}%`,
        }}
      />
    </div>
  )
}

const MemoizedArticleHeader = React.memo(ArticleHeader)
MemoizedArticleHeader.displayName = "MemoizedArticleHeader"
