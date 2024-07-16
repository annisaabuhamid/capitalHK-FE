import { ArticlePropsOptional } from "@/common/types"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import ArticleTag from "@/components/article/common/atom/ArticleTag"

type Props = ArticlePropsOptional & {
  className?: string
}

function ArticleItemToolbar({ categoryLabel, date, articleId, className = "text-xs", type, hideCategory }: Props) {
  return (
    <div
      className={`flex item-center justify-between text-secondary-800 ${
        type === "smallArticle" ? "mt-4 lg:mt-6 mb-1  " : ""
      }${className}`}
    >
      <div className="flex gap-1 items-center font-bold">
        {!hideCategory && (
          <>
            <ArticleTag hidden={!categoryLabel}>{categoryLabel}</ArticleTag>
            <span hidden={!date || !categoryLabel}>|</span>
          </>
        )}
        <ArticleDate date={date} />
      </div>

      <div className="">
        <ArticleBookmarkButton articleId={articleId} />
      </div>
    </div>
  )
}

export default ArticleItemToolbar
