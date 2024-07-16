"use client"
import { useApolloClient } from "@apollo/client"
import { useEffect, useState } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
import { BookmarkButtonVariant } from "@/common/types"
import { BookmarkType } from "@/common/types/bookmarkTypes"
import { bookmarkMouseHandler } from "@/components/article/common/atom/bookmarkMouseHandler"
import EditorBookmarkButton from "@/components/common/molecule/button/editor/EditorBookmarkButton"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

type Props = { editorId?: string | null, type?:string }

function EditorBookmarkButtonWrapper({ editorId, type }: Props) {
  const { status, token, userId } = useAuth()
  const bookmarkRequireLogin = !token || status !== "authenticated"
  const [isAdded, setIsAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setLoginDialogIsOpen, bookmarkItems, refetchBookmarks, updateBookmarkQuery } = useGlobalContext()
  const client = useApolloClient()

  useEffect(() => {
    if (status === "authenticated") {
      const getIsAddedDefaultValue = () => {
        const existingBookmarks: Record<string, boolean> = bookmarkItems.bookmarkEditorIds
        const isAddedDefaultValue = (editorId ? existingBookmarks[editorId] : false) ?? false
        setIsAdded(isAddedDefaultValue)
      }
      getIsAddedDefaultValue()
    }
  }, [status, bookmarkItems, editorId])

  if (!editorId) return null

  const onClick = bookmarkMouseHandler({
    bookmarkId: editorId,
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
    bookmarkType: BookmarkType.Editor,
    updateBookmarkQuery,
  })

  const variant = isAdded ? BookmarkButtonVariant.ADDED : BookmarkButtonVariant.ADD

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      {!isAdded && (
        <EditorBookmarkButton
          variant={variant}
          isLoading={isLoading}
          buttonProps={{
            onClick,
          }}
          type={type}
        />
      )}
      {isAdded && (
        <Menubar className="rounded-none border-none bg-inherit !p-0 !m-0 h-full justify-center">
          <MenubarMenu>
            <MenubarTrigger className="p-0 m-0 border-none">
              <EditorBookmarkButton
                variant={variant}
                isLoading={isLoading}
                buttonProps={{
                  onClick: undefined,
                }}
                type={"type"}
              />
            </MenubarTrigger>
            <MenubarContent className="max-w-[90px] min-w-[90px] p-0 m-0">
              <MenubarItem className="hover:!bg-primary hover:!text-white cursor-pointer" asChild>
                <button onClick={onClick} className="w-full flex justify-center">
                  取消追蹤
                </button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
    </div>
  )
}

export default EditorBookmarkButtonWrapper
