import { Suspense } from "react"
import { RenderingPageSkeleton } from "@/components/common/molecule/loading/RenderingPageSkeleton"
import SearchResult from "@/components/search/SearchResult"

export default function Page() {
  return (
    <Suspense fallback={<RenderingPageSkeleton />}>
      <SearchResult />
    </Suspense>
  )
}
