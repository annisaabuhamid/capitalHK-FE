import { isNil } from "lodash"
import { useMemo } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
import { UsersPermissionsUserQuery, useUsersPermissionsUserQuery } from "@/common/lib/graphql/generated/graphql"
import { Article, Infobox } from "@/common/types"
import { SingleEditor } from "@/common/types/bloggerTypes"
import { transformInfoboxShape } from "@/common/utils/data/bookmark/transformInfoboxShape"
import { transformEditorShape } from "@/common/utils/data/editors/transformEditorShape"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export type BookmarkItemsType = {
  bookmarkArticles: Article[]
  bookmarkEditors: SingleEditor[]
  bookmarkInformationBoxes: Infobox[]
  bookmarkArticleIds: Record<string, boolean>
  bookmarkEditorIds: Record<string, boolean>
  bookmarkInformationBoxIds: Record<string, boolean>
}

export const BookmarkItemsDefaultValue: BookmarkItemsType = {
  bookmarkArticles: [],
  bookmarkEditors: [],
  bookmarkInformationBoxes: [],
  bookmarkArticleIds: {},
  bookmarkEditorIds: {},
  bookmarkInformationBoxIds: {},
}

const transformBookmarkFromUser = (data?: UsersPermissionsUserQuery) => {
  if (!data) {
    return BookmarkItemsDefaultValue
  }
  const usersPermissionsUser = data.usersPermissionsUser?.data?.attributes
  const bookmarkArticles = transformArticleListShape(usersPermissionsUser?.articles?.data ?? [])
  const bookmarkEditors = transformEditorShape(usersPermissionsUser?.editors?.data ?? [])
  const bookmarkInformationBoxes = transformInfoboxShape(usersPermissionsUser?.information_boxes?.data ?? [])

  const bookmarkArticleIds = bookmarkArticles?.reduce(
    (acc, article) => {
      const articleId = article.articleId
      if (!isNil(articleId)) {
        acc[articleId] = true
      }
      return acc
    },
    {} as Record<string, boolean>
  )
  const bookmarkEditorIds = bookmarkEditors?.reduce(
    (acc, editor) => {
      const editorId = editor.id
      if (!isNil(editorId)) {
        acc[editorId] = true
      }
      return acc
    },
    {} as Record<string, boolean>
  )

  const bookmarkInformationBoxIds = bookmarkInformationBoxes?.reduce(
    (acc, informationBox) => {
      const informationBoxId = informationBox.id
      if (!isNil(informationBoxId)) {
        acc[informationBoxId] = true
      }
      return acc
    },
    {} as Record<string, boolean>
  )

  return {
    bookmarkArticles,
    bookmarkEditors,
    bookmarkInformationBoxes,
    bookmarkArticleIds,
    bookmarkEditorIds,
    bookmarkInformationBoxIds,
  }
}

export const useBookmarkItems = () => {
  const { userId, status } = useAuth()
  const skipQuery = !userId || status !== "authenticated"
  const { data, loading, refetch, updateQuery } = useUsersPermissionsUserQuery({
    variables: { id: userId, pagination: { limit: -1 } },
    skip: skipQuery,
    pollInterval: 60000,
    ssr: false,
  })

  const bookmarkItems = useMemo(() => {
    const newData = transformBookmarkFromUser(data)
    return newData
  }, [data])
  return { bookmarkItems, bookmarkItemsLoading: loading, refetchBookmarks: refetch, updateBookmarkQuery: updateQuery }
}

export type UpdateBookmarkQueryFn = ReturnType<typeof useUsersPermissionsUserQuery>["updateQuery"]
