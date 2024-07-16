import React, { Suspense } from "react"
import AllBookmarkTabs from "@/components/bookmark/AllBookmarkTabs"
import ArticleBookmarkList from "@/components/bookmark/list/ArticleBookmarkList"
import EditorBookmarkList from "@/components/bookmark/list/EditorBookmarkList"
import InfoboxBookmarkList from "@/components/bookmark/list/InfoboxBookmarkList"
import { RenderingPageSkeleton } from "@/components/common/molecule/loading/RenderingPageSkeleton"
import { Tab } from "@/components/tab/SlidingTab"

const bookmarkTabs: Tab[] = [
  { id: "1", name: "文章", content: <ArticleBookmarkList /> },
  { id: "2", name: "食買玩資訊", content: <InfoboxBookmarkList /> },
  {
    id: "3",
    name: "編輯",
    content: <EditorBookmarkList />,
  },
]

function AllBookmarks() {
  return (
    <div>
      <div className="text-4xl font-bold leading-[44px] text-center mb-9 text-[#1A1818]">我的收藏</div>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <AllBookmarkTabs tabs={bookmarkTabs} />
      </Suspense>
    </div>
  )
}

export default AllBookmarks
