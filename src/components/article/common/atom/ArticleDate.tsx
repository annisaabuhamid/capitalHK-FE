import React from "react"
import { Nulllable } from "@/common/types"
import { formatDate } from "@/common/utils/formatDate"

type Props = {
  date?: Nulllable<string>
  children?: React.ReactNode
}

function ArticleDate({ children, date }: Props) {
  // date-fns format: yyyy-mm-dd
  // 2021-01-01
  const dateFormatted = formatDate(date)
  return (
    <span className="font-light h6">
      {dateFormatted}
      {children}
    </span>
  )
}

export default ArticleDate
