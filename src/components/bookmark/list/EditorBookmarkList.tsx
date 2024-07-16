"use client"

import { SingleEditor } from "@/common/types/bloggerTypes"
import BloggersGrid from "@/components/blogger/BloggersGrid"
import BookmarkSuggestedArticleList from "@/components/bookmark/list/BookmarkSuggestedArticleList"
import EmptyBookmarkListPlaceholder from "@/components/bookmark/list/EmptyBookmarkListPlaceholder"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {}

function EditorBookmarkList({}: Props) {
  const { bookmarkItems, bookmarkItemsLoading } = useGlobalContext()
  const bookmarkEditors = bookmarkItems.bookmarkEditors.slice(0).reverse()
  const allBloggers = bookmarkEditors.map((editor) => {
    const newBlogger: SingleEditor = {
      avatarUrl: editor.avatarUrl,
      id: editor.id,
      biography: editor.biography,
      name: editor.name,
      slug: editor.slug,
      title: editor.title,
    }

    return newBlogger
  })

  return (
    <div>
      <BloggersGrid allBloggers={allBloggers} />

      {allBloggers.length === 0 && (
        <>
          <EmptyBookmarkListPlaceholder />
          <BookmarkSuggestedArticleList />
        </>
      )}
    </div>
  )
}

export default EditorBookmarkList
