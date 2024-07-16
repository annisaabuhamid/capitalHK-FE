"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useCategoryAdsBySlugQuery } from "@/common/lib/graphql/generated/graphql"
import { Article, ArticlePropsOptional } from "@/common/types"
import VerticalAds from "@/components/advertisement/atoms/VerticalAds"
import VerticalAdsWrapper from "@/components/advertisement/wrappers/VerticalAdsWrapper"
import ArticleCardTitle from "@/components/article/common/atom/ArticleCardTitle"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import ArticleTag from "@/components/article/common/atom/ArticleTag"
import ArticleComponent from "@/components/article/common/molecule/ArticleComponent"
import ArticleNewsletter from "@/components/article/common/molecule/ArticleNewsletter"
import ArticleRichTextContent from "@/components/article/common/molecule/ArticleRichTextContent"
import ArticleCelebritySlider from "@/components/article/component/ArticleCelebritySlider"
import ArticleTags from "@/components/article/component/ArticleTags"
import RecommendArticles from "@/components/article/component/RecommendArticles"
import EditorBookmarkButtonWrapper from "@/components/common/molecule/button/editor/EditorBookmarkButtonWrapper"
import { getFirstCategory, getParentCategory, renderRootPath } from "@/utils"
import ArticleEditorPick from "../common/organisms/ArticleEditorPick"
import ArticleSocialMedia from "../common/organisms/ArticleSocialMedia"
import ArticleSocialMediaMobile from "../common/organisms/ArticleSocialMediaMobile"
import EditorPicksUnderAds from "../common/organisms/EditorPicksUnderAds"

type Props = ArticlePropsOptional & { article: Article; percentage: number }

function ArticleLayoutCelebrity({ article, titleVariant, percentage }: Props) {
  const {
    ad_banner_side,
    imageUrl,
    date,
    articleId,
    blocks,
    categoryLabel,
    categories,
    content,
    description,
    editor,
    editorSelect,
    slug,
    tag,
    title,
    layout,
    hideKeyVisual,
    mastheadImage,
    mastheadImageWidth,
    mastheadImageHeight,
    mastheadImageAlt,
    tags,
    sidenote,
  } = article

  let editorIsBlogger = editor?.data?.attributes?.isBlogger
  let editorName = editor?.data?.attributes?.name
  let editorAvatarUrl = editor?.data?.attributes?.avatar.data?.attributes?.url
  let editorAvatarWidth = editor?.data?.attributes?.avatar.data?.attributes?.width
  let editorAvatarHeight = editor?.data?.attributes?.avatar.data?.attributes?.height
  let editorAvatarAlt = editor?.data?.attributes?.avatar.data?.attributes?.alternativeText
  const editorId = editor?.data?.id ?? ""
  let layedCategory = getParentCategory(categories)
  const router = usePathname()
  const dynamicRouter = useParams()
  const catSlug = renderRootPath(router, dynamicRouter, categories)
  const finalHref = `${catSlug}/${slug}`

  let articleAdsId = null

  const lastIndex = router.lastIndexOf("/")
  const secondLastIndex = router.lastIndexOf("/", lastIndex - 1)
  const extractedText = router.substring(secondLastIndex + 1, lastIndex)
  const categoryData = useCategoryAdsBySlugQuery({
    variables: {
      filters: {
        slug: { eq: extractedText },
      },
    },
  })

  if (ad_banner_side?.data != null) {
    articleAdsId = ad_banner_side.data.id
  } else {
    articleAdsId = categoryData.data?.categories?.data[0].attributes?.ad_banner_side?.data?.id
  }

  //scrolling social Share
  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false)

  const container = useRef<HTMLDivElement>(null)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const articleTop =
    typeof window !== "undefined" ? window.scrollY + (container?.current?.getBoundingClientRect()?.top ?? 0) : 0

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
  useEffect(() => {
    const height = container?.current?.offsetHeight ?? 0
    const sectionHeight = container?.current?.clientHeight ?? 0
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const articleProgress = (currentScroll / sectionHeight) * 100

      if (currentScroll > prevScrollPos) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      if (scrollDirection === "down" && currentScroll > articleTop + 100) {
        setShowSocialMediaIcons(true)
      } else {
        setShowSocialMediaIcons(false)
      }

      if (scrollDirection === "up" && currentScroll > articleTop + 150) {
        setShowSocialMediaIcons(true)
      }

      // console.log("current", currentScroll)
      setPrevScrollPos(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollDirection, percentage, prevScrollPos])
  return (
    <div className="flex lg:ml-[10.5%] mb-9" ref={container}>
      <div
        className={`hidden lg:block transition-opacity 
        ${showSocialMediaIcons ? "opacity-100 duration-300 ease-in-out" : "opacity-0"}`}
      >
        <ArticleSocialMedia finalHref={finalHref} articleId={articleId} />
      </div>
      <div className="w-full max-w-full pt-4 lg:mx-0 lg:max-w-[593px] xl:max-w-[728px] flex-1">
        {categoryLabel != null && (
          <ArticleTag
            className="h5 pb-2 mb-6 border-b-secondary-300 border-b font-normal block"
            hidden={!layedCategory}
          >
            {layedCategory}
          </ArticleTag>
        )}

        <div className="font-bold text-xl">
          <ArticleCardTitle title={title} titleVariant={titleVariant} />
        </div>

        {(hideKeyVisual === false || hideKeyVisual === null) && (
          <Image
            className="mt-6 mb-9"
            src={mastheadImage || ""}
            width={mastheadImageWidth ?? undefined}
            height={mastheadImageHeight ?? undefined}
            alt={mastheadImageAlt || "alt not available"}
            fetchPriority="high"
          />
        )}

        <div className="pb-9">
          <div className="flex gap-3 items-center font-bold relative">
            {editorSelect && (
              <div className="article-page-editor-select-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M6.24935 5.83317C5.13685 5.83317 2.91602 6.38734 2.91602 7.49984V8.33317H9.58268V7.49984C9.58268 6.38734 7.36185 5.83317 6.24935 5.83317ZM6.24935 4.99984C6.69138 4.99984 7.1153 4.82424 7.42786 4.51168C7.74042 4.19912 7.91601 3.7752 7.91601 3.33317C7.91601 2.89114 7.74042 2.46722 7.42786 2.15466C7.1153 1.8421 6.69138 1.6665 6.24935 1.6665C5.80732 1.6665 5.3834 1.8421 5.07084 2.15466C4.75828 2.46722 4.58268 2.89114 4.58268 3.33317C4.58268 3.7752 4.75828 4.19912 5.07084 4.51168C5.3834 4.82424 5.80732 4.99984 6.24935 4.99984ZM2.08268 5.53317L3.10352 6.154L2.83268 4.98317L3.74935 4.19984L2.54518 4.09567L2.08268 2.99567L1.61185 4.09567L0.416016 4.19984L1.32435 4.98317L1.04102 6.154L2.08268 5.53317Z"
                    fill="white"
                  />
                </svg>
                <span className="h6 leading-[16px]">編輯精選</span>
              </div>
            )}
            <ArticleDate date={date} />
          </div>

          {editorIsBlogger && (
            <div className="flex items-center justify-start gap-4 mt-[17px]">
              <Link href={`/blogger/${editorId}`}>
                <div className="flex flex-row gap-2">
                  <div>
                    <Image
                      className="h-[28px] w-[28px] rounded-full object-cover"
                      src={editorAvatarUrl || ""}
                      width={editorAvatarWidth || "36"}
                      height={editorAvatarHeight || "36"}
                      alt={editorAvatarAlt || "alt not available"}
                    />
                  </div>
                  <div className="flex justify-center text-xs items-center">{editorName}</div>
                </div>
              </Link>
              <div className="h6 flex gap-[16px]">
                {/* <div className="flex justify-center items-center">{editorName}</div> */}
                <EditorBookmarkButtonWrapper editorId={editorId} type={"article"} />

                {/* <div className="w-[65px] h-[30px] px-2 py-1 rounded justify-end items-center gap-1 inline-flex">
                <div className="w-4 h-4 relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M12.6673 8.66536H8.66732V12.6654H7.33398V8.66536H3.33398V7.33203H7.33398V3.33203H8.66732V7.33203H12.6673V8.66536Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-center text-black text-sm font-normal font-noto leading-snug tracking-wide">
                  追蹤
                </div>
              </div> */}
              </div>
            </div>
          )}

          {sidenote && <div className="mt-4 h6">{sidenote}</div>}
        </div>

        <ArticleRichTextContent content={content} />
        <ArticleComponent blocks={blocks} />
        <ArticleNewsletter />
        <ArticleTags Tags={tags} />
        <ArticleCelebritySlider />
        <ArticleSocialMediaMobile articleId={articleId} finalHref={""} />
        {/* <RecommendArticles categoryLabel={categoryLabel} /> */}
      </div>

      <div className="ml-auto justify-self-end pt-8 mr-3 hidden lg:flex flex-0 flex-col">
        <VerticalAdsWrapper adsID={articleAdsId} />
        <ArticleEditorPick />
      </div>
    </div>
  )
}

export default ArticleLayoutCelebrity
