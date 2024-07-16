"use client"

import React from "react"
import InfoboxGrid from "@/components/article/component/info-box/InfoboxGrid"
import BookmarkSuggestedArticleList from "@/components/bookmark/list/BookmarkSuggestedArticleList"
import EmptyBookmarkListPlaceholder from "@/components/bookmark/list/EmptyBookmarkListPlaceholder"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {}

function InfoboxBookmarkList({}: Props) {
  const { bookmarkItems, bookmarkItemsLoading } = useGlobalContext()
  const bookmarkInfoboxList = bookmarkItems.bookmarkInformationBoxes.slice(0).reverse()

  return (
    <div>
      <InfoboxGrid infoboxList={bookmarkInfoboxList} />
      {bookmarkInfoboxList.length === 0 && (
        <>
          <EmptyBookmarkListPlaceholder />
          <BookmarkSuggestedArticleList />
        </>
      )}
    </div>
  )
}

export default InfoboxBookmarkList
