"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { ArticlePropsOptional } from "@/common/types"
import { getFirstCategory } from "@/utils"
import ArticleCardTitle from "../atom/ArticleCardTitle"
import ArticleItemToolbar from "../molecule/ArticleItemToolbar"

type Props = ArticlePropsOptional & {
  className?: string
}

function EditorPickArticle({ tag, categoryLabel, articleId, categories, slug, title }: Props) {
  const router = usePathname()
  const dynamicRouter = useParams()

  const catSlug = getFirstCategory(categories)
  const finalHref = `${catSlug}/${slug}`

  return (
    <Link href={finalHref}>
      <ArticleItemToolbar
        className={`text-2xs`}
        tag={tag}
        categoryLabel={categoryLabel}
        articleId={articleId}
      ></ArticleItemToolbar>
      <ArticleCardTitle title={title} className={``} />
    </Link>
  )
}

export default EditorPickArticle
