import { ApolloClient } from "@apollo/client"
import { RefetchFunction } from "@apollo/client/react/hooks/useSuspenseQuery"
import { cloneDeep } from "lodash"
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import toast from "react-hot-toast"
import { UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables } from "@/common/lib/graphql/generated/graphql"
import { BookmarkType } from "@/common/types/bookmarkTypes"
import { createBookmark } from "@/common/utils/data/bookmark/createBookmark"
import { deleteBookmark } from "@/common/utils/data/bookmark/deleteBookmark"
import { UpdateBookmarkQueryFn } from "@/components/bookmark/hook/useBookmarkItems"

type BooleanDispatcher = Dispatch<SetStateAction<boolean>>

type BookmarkHandlerProps = {
  bookmarkId: string
  isAdded: boolean
  setIsAdded: BooleanDispatcher
  isLoading: boolean
  setIsLoading: BooleanDispatcher
  bookmarkRequireLogin: boolean
  setLoginDialogIsOpen: BooleanDispatcher
  token: string | null | undefined
  bookmarkType?: BookmarkType
  client: ApolloClient<object>
  userId?: string
  refetch: RefetchFunction<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>
  updateBookmarkQuery: UpdateBookmarkQueryFn
}

export const bookmarkMouseHandler =
  ({
    bookmarkId,
    isAdded,
    setIsAdded,
    isLoading,
    setIsLoading,
    bookmarkRequireLogin,
    setLoginDialogIsOpen,
    token,
    bookmarkType = BookmarkType.Article,
    client,
    userId,
    refetch,
    updateBookmarkQuery,
  }: BookmarkHandlerProps): MouseEventHandler<HTMLButtonElement> =>
  async (e) => {
    e.preventDefault()

    if (isLoading) {
      return
    }

    if (bookmarkRequireLogin) {
      setLoginDialogIsOpen(true)
      return
    }

    if (!token) {
      return
    }

    setIsLoading(true)
    let result = false
    if (isAdded) {
      // update apollo cache immediately
      if (!userId) {
        return
      }
      if (bookmarkType === BookmarkType.Article) {
        updateBookmarkQuery((existingData) => {
          return updateMapFn({ accessor: "articles", existingData, bookmarkId })
        })
      } else if (bookmarkType === BookmarkType.Editor) {
        updateBookmarkQuery((existingData) => {
          return updateMapFn({ accessor: "editors", existingData, bookmarkId })
        })
      } else if (bookmarkType === BookmarkType.Infobox) {
        updateBookmarkQuery((existingData) => {
          return updateMapFn({ accessor: "information_boxes", existingData, bookmarkId })
        })
      }
      // show delete effect immediately
      result = await deleteBookmarkHandler({
        bookmarkId,
        token,
        bookmarkType,
      })
    } else {
      // update apollo cache immediately
      result = await createBookmarkHandler({
        bookmarkId,
        token,
        bookmarkType,
      })
      await refetch()
    }
    if (result === true) {
      setIsAdded(!isAdded) // only if api call is success
    }
    setIsLoading(false)
  }

const updateMapFn = ({
  accessor,
  existingData,
  bookmarkId,
}: {
  existingData: UsersPermissionsUserQuery
  accessor: "articles" | "editors" | "information_boxes"
  bookmarkId: string
}) => {
  const newData = cloneDeep(existingData)

  const targetedData = newData?.usersPermissionsUser?.data?.attributes?.[accessor]?.data
  if (targetedData) {
    const newItemList: typeof targetedData =
      (targetedData as any[]).filter((item) => {
        return item.id !== bookmarkId
      }) ?? []

    if (newData.usersPermissionsUser?.data?.attributes) {
      newData.usersPermissionsUser.data.attributes = {
        ...newData.usersPermissionsUser.data.attributes,
        [accessor]: {
          data: newItemList,
        },
      }
    }
  }
  return newData
}
const deleteBookmarkHandler = async ({
  bookmarkId,
  token,
  bookmarkType,
}: {
  bookmarkId: string
  token: string
  bookmarkType: BookmarkType
}) => {
  const result = await deleteBookmark({
    bookmarkId,
    token,
    bookmarkType,
  })
  if (result) {
    toast.success("刪除成功")
    return true
  } else {
    toast.error("刪除失敗")
  }
  return false
}

const createBookmarkHandler = async ({
  bookmarkId,
  token,
  bookmarkType,
}: {
  bookmarkId: string
  token: string
  bookmarkType: BookmarkType
}) => {
  const result = await createBookmark({
    bookmarkId,
    token,
    bookmarkType,
  })
  if (result) {
    toast.success("新增成功")
    return true
  } else {
    toast.error("新增失敗")
  }
  return false
}
