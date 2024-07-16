"use client"

import parse from "html-react-parser"
import React, { useEffect, useState } from "react"
import { ArticlePropsOptional } from "@/common/types"
import { RenderingPageSkeleton } from "@/components/common/molecule/loading/RenderingPageSkeleton"
import styles from "./ArticleRichTextContent.module.css"

type Props = ArticlePropsOptional & {}

function ArticleRichTextContent({ content }: Props) {
  const [richTextHtml, setRichTextHtml] = useState<string | JSX.Element | JSX.Element[]>("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    if (content) {
      const parsedContent = parse(content)
      setRichTextHtml(parsedContent)
    }
    setLoading(false)
  }, [content])

  return (
    <div className={styles["article-rich-text-content"]}>
      {loading && (
        <div>
          <RenderingPageSkeleton />
        </div>
      )}
      <div>{richTextHtml}</div>
    </div>
  )
}

export default ArticleRichTextContent
