import { ArticlePropsOptional } from "@/common/types"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import ArticleTag from "@/components/article/common/atom/ArticleTag"

type Props = ArticlePropsOptional & {
  className?: string
}

function ArticlePageItemToolbar({ categoryLabel, date, articleId, editor, editorSelect, className = "text-xs" }: Props) {
  return (
    <div className={`flex flex-col item-center justify-between lg:my-2 ${className}`}>
      <ArticleTag className="h5 pb-2 mb-6 border-b-secondary-200 border-b font-normal" hidden={!categoryLabel}>
        {categoryLabel}
      </ArticleTag>

      <div className="flex gap-3 items-center font-bold relative">
        {/* <ArticleTag>{tag}</ArticleTag> */}

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

      {/* <div className="">
        <ArticleBookmarkButton articleId={articleId} />
      </div> */}
    </div>
  )
}

export default ArticlePageItemToolbar
