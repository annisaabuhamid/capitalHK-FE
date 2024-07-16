"use client"

import ArticleGrid from "@/components/article/common/organisms/grid/ArticleGrid"
import BookmarkSuggestedArticleList from "@/components/bookmark/list/BookmarkSuggestedArticleList"
import EmptyBookmarkListPlaceholder from "@/components/bookmark/list/EmptyBookmarkListPlaceholder"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {}

function ArticleBookmarkList({}: Props) {
  const { bookmarkItems, bookmarkItemsLoading } = useGlobalContext()
  const bookmarkArticles = bookmarkItems.bookmarkArticles.slice(0).reverse()

  const showSuggestedArticles = bookmarkArticles.length === 0 && !bookmarkItemsLoading
  return (
    <div>
      <ArticleGrid articles={bookmarkArticles} type={"bookmark-myaccount"} />
      {/* <div className="grid grid-cols-3 gap-9">
        {bookmarkArticles.map((item) => {
          return <ArticleBookmarkItem key={item.articleId} item={item} />
        })}
      </div> */}
      {bookmarkArticles.length === 0 && (
        <>
          <EmptyBookmarkListPlaceholder />
          <BookmarkSuggestedArticleList />
        </>
      )}
      {showSuggestedArticles ? <BookmarkSuggestedArticleList /> : null}
    </div>
  )
}

export default ArticleBookmarkList
