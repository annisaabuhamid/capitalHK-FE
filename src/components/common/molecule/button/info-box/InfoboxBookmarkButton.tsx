"use client"
import { useApolloClient } from "@apollo/client"
import { useEffect, useState } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
import { BookmarkButtonVariant } from "@/common/types"
import { BookmarkType } from "@/common/types/bookmarkTypes"
import { bookmarkMouseHandler } from "@/components/article/common/atom/bookmarkMouseHandler"
import BookmarkButton from "@/components/common/molecule/button/BookmarkButton"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = { infoBoxId: string }

function InfoboxBookmarkButton({ infoBoxId }: Props) {
  const { status, token, userId } = useAuth()

  const bookmarkRequireLogin = !token || status !== "authenticated"

  const [isAdded, setIsAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setLoginDialogIsOpen, bookmarkItems, refetchBookmarks, updateBookmarkQuery } = useGlobalContext()
  const client = useApolloClient()

  useEffect(() => {
    if (status === "authenticated") {
      const getIsAddedDefaultValue = () => {
        const existingBookmarks: Record<string, boolean> = bookmarkItems.bookmarkInformationBoxIds
        const isAddedDefaultValue = (infoBoxId ? existingBookmarks[infoBoxId] : false) ?? false
        setIsAdded(isAddedDefaultValue)
      }
      getIsAddedDefaultValue()
    }
  }, [status, bookmarkItems, infoBoxId])

  if (!infoBoxId) return null

  const onClick = bookmarkMouseHandler({
    bookmarkId: infoBoxId,
    bookmarkRequireLogin,
    isAdded,
    isLoading,
    setIsAdded,
    setIsLoading,
    setLoginDialogIsOpen,
    token,
    client,
    userId,
    bookmarkType: BookmarkType.Infobox,
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
    />
  )
}

export default InfoboxBookmarkButton
