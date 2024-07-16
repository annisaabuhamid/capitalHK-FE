import Image from "next/image"
import React from "react"
import { ArticleBasicFragment } from "@/common/lib/graphql/generated/graphql"

type Props = { editor: NonNullable<ArticleBasicFragment["attributes"]>["editor"] }

function ArticleEditorBlogger({ editor }: Props) {
  let editorName = editor?.data?.attributes?.name
  let editorAvatarUrl =
    editor?.data?.attributes?.avatar.data?.attributes?.formats?.xsmall?.url ??
    editor?.data?.attributes?.avatar.data?.attributes?.url
  let editorAvatarWidth =
    editor?.data?.attributes?.avatar.data?.attributes?.formats?.xsmall?.width ??
    editor?.data?.attributes?.avatar.data?.attributes?.width
  let editorAvatarHeight =
    editor?.data?.attributes?.avatar.data?.attributes?.formats?.xsmall?.height ??
    editor?.data?.attributes?.avatar.data?.attributes?.height
  let editorAvatarAlt = editor?.data?.attributes?.avatar.data?.attributes?.alternativeText

  let editorIsBlogger = editor?.data?.attributes?.isBlogger

  if (!editorIsBlogger) {
    return false
  }

  return (
    <div className="vertical-blogger hidden lg:flex items-center justify-start gap-2 mt-3">
      <Image
        className="h-[28px] w-[28px] rounded-full object-cover"
        src={editorAvatarUrl!}
        width={editorAvatarWidth!}
        height={editorAvatarHeight!}
        alt={editorAvatarAlt || "alt not available"}
      />
      <div className="h6">{editorName}</div>
    </div>
  )
}

export default ArticleEditorBlogger
