"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useScrollPercentage } from "react-scroll-percentage"
import { Article, ArticlePropsOptional, OptionalString } from "@/common/types"
import ArticleLayout from "@/components/article/common/organisms/article-layout/ArticleLayout"
import ArticleLayoutCelebrity from "@/components/article/layout/ArticleLayoutCelebrity"
import ArticleLayoutEvent from "@/components/article/layout/ArticleLayoutEvent"
import ArticleLayoutGeneric from "@/components/article/layout/ArticleLayoutGeneric"
import { useScrollDirection } from "@/components/common/organism/provider/hook/useScrollDirection"
type Props = ArticlePropsOptional & { article: Article } & { isArticlePreview?: boolean }

// http://localhost:3000/article/esg-sba2023-01

function ArticleMain({ article, titleVariant, isArticlePreview = false }: Props) {
  const { otherEventArticles, relatedArticles } = article
  const { ref: inViewRef, inView } = useInView()
  const { scrollDirection } = useScrollDirection()
  const [scrollPercentRef, percentage] = useScrollPercentage()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const wrapperIsAtViewportTop = (wrapperRef.current?.getBoundingClientRect().top ?? 0) < 100
  const showHeader = scrollDirection === "down" && inView && wrapperIsAtViewportTop
  const reverseDirection = scrollDirection === "up" && inView && wrapperIsAtViewportTop
  const percentages = percentage * 100
  // const articleSection = document.getElementById(`article-${article.articleId}`);
  const articleSectionRef = useRef<HTMLDivElement>(null)

  const [articleSection, setArticleSection] = useState(0)
  const [magazineSection, setMagazineSection] = useState(0)

  // useEffect(() => {
  //   const section = document.getElementById(`article-${article.articleId}`) as HTMLDivElement | null;
  //   if (section) {
  //     const sectionHeight = section
  //         ? section.clientHeight
  //         : 0
  //     setArticleSection(section.clientHeight);
  //   }
  // const magazineSection = document.getElementById(`magazine-${article.articleId}`) as HTMLDivElement | null;
  // // setMagazineSection(magazineSection.clientHeight)
  // }, [article.articleId]);

  if (article.layout === "Event") {
    return (
      <ArticleLayout article={article} isArticlePreview={isArticlePreview}>
        <ArticleLayoutEvent
          article={article}
          titleVariant={titleVariant}
          otherEventArticles={otherEventArticles}
          percentage={percentages}
        />
      </ArticleLayout>
    )
  } else if (article.layout === "Celebrity") {
    return (
      <ArticleLayout article={article} isArticlePreview={isArticlePreview}>
        <ArticleLayoutCelebrity article={article} titleVariant={titleVariant} percentage={percentages} />
      </ArticleLayout>
    )
  } else if (article.layout === "Generic" || article.layout == null)
    return (
      <ArticleLayout article={article} isArticlePreview={isArticlePreview}>
        <div ref={wrapperRef}>
          <div ref={inViewRef}>
            <div ref={scrollPercentRef}>
              <ArticleLayoutGeneric
                article={article}
                titleVariant={titleVariant}
                percentage={percentages}
                articleSection={articleSection}
                // shortIntro={shortIntro}
                // socialMedia={socialMedia}
                relatedArticles={relatedArticles}
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    )
}

export default ArticleMain
