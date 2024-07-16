import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  hidden?: boolean
}

function ArticleTag({ children, hidden, className = "article-tag h6" }: Props) {
  return (
    <span hidden={hidden} className={`${className}`}>
      {children}
    </span>
  )
}

export default ArticleTag
