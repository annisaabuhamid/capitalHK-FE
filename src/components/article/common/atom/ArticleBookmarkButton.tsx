"use client"
import { useApolloClient } from "@apollo/client"
import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
import { ArticleBookmarkButtonIconType, ArticlePropsOptional, BookmarkButtonVariant } from "@/common/types"
import { bookmarkMouseHandler } from "@/components/article/common/atom/bookmarkMouseHandler"
import BookmarkButton from "@/components/common/molecule/button/BookmarkButton"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = ArticlePropsOptional & {
  iconType?: ArticleBookmarkButtonIconType
}

function ArticleBookmarkButton({ articleId, iconType }: Props) {
  const { status, token, userId } = useAuth()

  const bookmarkRequireLogin = !token || status !== "authenticated"

  const [isAdded, setIsAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setLoginDialogIsOpen, bookmarkItems, refetchBookmarks, updateBookmarkQuery } = useGlobalContext()
  const client = useApolloClient()

  const getIsAddedDefaultValue = useCallback(() => {
    const existingBookmarks: Record<string, boolean> = bookmarkItems.bookmarkArticleIds
    const isAddedDefaultValue = (articleId ? existingBookmarks[articleId] : false) ?? false
    setIsAdded(isAddedDefaultValue)
  }, [bookmarkItems, articleId])

  useEffect(() => {
    if (status === "authenticated") {
      getIsAddedDefaultValue()
    }
  }, [status, getIsAddedDefaultValue])

  if (!articleId) return null

  const onClick = bookmarkMouseHandler({
    bookmarkId: articleId,
    bookmarkRequireLogin,
    isAdded,
    isLoading,
    setIsAdded,
    setIsLoading,
    setLoginDialogIsOpen,
    token,
    client,
    userId,
    refetch: refetchBookmarks,
    updateBookmarkQuery,
  })

  const variant = isAdded ? BookmarkButtonVariant.ADDED : BookmarkButtonVariant.ADD

  return (
    <BookmarkButton
      variant={variant}
      isLoading={isLoading}
      buttonProps={{
        onClick,
      }}
      iconType={iconType}
    />
  )
}

export default ArticleBookmarkButton
