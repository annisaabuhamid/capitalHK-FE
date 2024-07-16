"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import ArticleTag from "@/components/article/common/atom/ArticleTag"
import EditorSelectBadge from "@/components/article/common/molecule/EditorSelectBadge"
import { renderRootPath } from "@/utils"
import useWindowSize from "@/utils/useWindowSize"

const RelatedArticlesItem = (article: any) => {
  const slug = article.article.attributes.slug
  const categories = article.article.attributes.categories

  const router = usePathname()
  const dynamicRouter = useParams()
  const categoryLabel = categories?.data.find((cat: { attributes: { name: any } }) => !!cat.attributes?.name)
    ?.attributes?.name
  const catSlug = renderRootPath(router, dynamicRouter, categories)
  const finalHref = `${catSlug}/${slug}`
  // console.log("editor", article.article.attributes.editorSelect)
  const { isMobile, isTabletDesktop } = useWindowSize()
  return (
    <div className="w-full pb-6 md:py-4 md:border-b md:border-[#E8E8E8] flex items-start">
      <div className={`relative image-container md:aspect-[3/2]`}>
        <Link href={finalHref} target="_blank">
          <Image
            className="hidden md:flex max-w-[140px] max-h-[94px] h-full w-full aspect-[3/2] object-cover"
            src={article.article.attributes?.keyVisualHorizontal?.data?.attributes?.url ?? ""}
            width={article.article.attributes?.keyVisualHorizontal?.data?.attributes?.width ?? undefined}
            height={article.article.attributes?.keyVisualHorizontal?.data?.attributes?.height ?? undefined}
            alt={
              article.article.attributes?.keyVisualHorizontal?.data?.attributes?.alternativeText || "alt not available"
            }
          />
        </Link>
        {/* EditorSelect Badge */}
        {isTabletDesktop && <EditorSelectBadge editorSelect={article.article.attributes.editorSelect} />}
      </div>

      <div className="md:ml-[20px] flex-grow md:py-1 flex-col justify-center items-start gap-1 inline-flex">
        {/* <div className="h-[53px] flex-col justify-start items-start flex"> */}
        {/* <div className="self-stretch flex gap-1 h-[26px]">
            <span className="text-stone-900 text-xs font-bold font-noto leading-relaxed">
            <ArticleTag hidden={!categoryLabel}>{categoryLabel}</ArticleTag>
              |
            </span>
            <span className="text-stone-900 text-xs font-noto leading-relaxed">
              <ArticleDate date={article.article.attributes?.publishedDate} />
            </span>
          </div> */}
        <div className="flex gap-1 items-center ">
          <ArticleTag hidden={!categoryLabel}>{categoryLabel}</ArticleTag>
          <span className="text-[10px]" hidden={!article.article.attributes?.publishedDate || !categoryLabel}>
            |
          </span>
          <ArticleDate date={article.article.attributes?.publishedDate} />

          {article.article.attributes.editorSelect && isMobile && (
            <div className="flex items-center justify-center gap-1 bg-[#AD914C] px-1 py-[1px] ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M6.24935 5.83341C5.13685 5.83341 2.91602 6.38758 2.91602 7.50008V8.33341H9.58268V7.50008C9.58268 6.38758 7.36185 5.83341 6.24935 5.83341ZM6.24935 5.00008C6.69138 5.00008 7.1153 4.82449 7.42786 4.51193C7.74042 4.19937 7.91601 3.77544 7.91601 3.33341C7.91601 2.89139 7.74042 2.46746 7.42786 2.1549C7.1153 1.84234 6.69138 1.66675 6.24935 1.66675C5.80732 1.66675 5.3834 1.84234 5.07084 2.1549C4.75828 2.46746 4.58268 2.89139 4.58268 3.33341C4.58268 3.77544 4.75828 4.19937 5.07084 4.51193C5.3834 4.82449 5.80732 5.00008 6.24935 5.00008ZM2.08268 5.53341L3.10352 6.15425L2.83268 4.98341L3.74935 4.20008L2.54518 4.09591L2.08268 2.99591L1.61185 4.09591L0.416016 4.20008L1.32435 4.98341L1.04102 6.15425L2.08268 5.53341Z"
                  fill="white"
                />
              </svg>
              <span className="leading-[14px] text-[8px] font-normal text-white">編輯精選</span>
            </div>
          )}
        </div>

        <div className="flex-col justify-start items-start gap-3 flex">
          <Link href={finalHref} target="_blank">
            <div className="w-full font-normal md:font-medium text-base md:text-[17px] text-secondary-800 line-clamp-2">
              {article.article.attributes?.title}
            </div>
          </Link>
        </div>
      </div>
      {/* </div> */}
      <ArticleBookmarkButton articleId={article.article.id} />
    </div>
  )
}

export default RelatedArticlesItem
