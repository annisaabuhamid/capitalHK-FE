import Image from "next/image"
import React from "react"
import { ArticlePropsOptional } from "@/common/types"
import ArticleCardTitle from "@/components/article/common/atom/ArticleCardTitle"
import EditorBookmarkButtonWrapper from "@/components/common/molecule/button/editor/EditorBookmarkButtonWrapper"

type Props = ArticlePropsOptional & {}

function ArticlePageCardContent({
  title,
  description,
  titleVariant,
  editor,
  layout,
  mastheadImage,
  mastheadImageWidth,
  mastheadImageHeight,
  mastheadImageAlt,
}: Props) {
  let editorIsBlogger = editor?.data?.attributes?.isBlogger
  let editorName = editor?.data?.attributes?.name
  let editorAvatarUrl = editor?.data?.attributes?.avatar.data?.attributes?.url
  let editorAvatarWidth = editor?.data?.attributes?.avatar.data?.attributes?.width
  let editorAvatarHeight = editor?.data?.attributes?.avatar.data?.attributes?.height
  let editorAvatarAlt = editor?.data?.attributes?.avatar.data?.attributes?.alternativeText
  const editorId = editor?.data?.id ?? ""
  return (
    <div>
      <div className="font-bold text-xl">
        <ArticleCardTitle title={title} titleVariant={titleVariant} className="line-clamp-2" />
      </div>

      {editorIsBlogger && (
        <div className="flex items-center justify-start gap-4 mt-[17px] mb-6">
          <Image
            className="h-[28px] w-[28px] rounded-full object-cover"
            src={editorAvatarUrl || ""}
            width={editorAvatarWidth || "36"}
            height={editorAvatarHeight || "36"}
            alt={editorAvatarAlt || "alt not available"}
          />
          <div className="h6 flex gap-[16px]">
            <div className="flex justify-center items-center">{editorName}</div>
            <EditorBookmarkButtonWrapper editorId={editorId} />

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

      <div className="article-description text-justify mt-[8px] line-clamp-3 mb-[24px]">{description}</div>
      {layout == "Generic" && (
        <div>
          <Image
            className=""
            src={mastheadImage || ""}
            width={mastheadImageWidth ?? undefined}
            height={mastheadImageHeight ?? undefined}
            alt={mastheadImageAlt || "alt not available"}
          />
        </div>
      )}
    </div>
  )
}

export default ArticlePageCardContent
