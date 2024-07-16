import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

function ArticleSpotlightListWrapperLoading({}: Props) {
  return (
    <div className="min-h-[694px] mt-[12px] gap-14 grid grid-cols-6 grid-row-6">
      <div className="col-span-4 row-span-6 space-y-4">
        <Skeleton className="h-[500px] w-full" />
        <Skeleton className="h-4 w-[200px] " />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
      <div className="col-span-2 row-span-3 space-y-2">
        <Skeleton className="h-[60%] w-full" />
        <Skeleton className="h-[5%] w-[40%] " />
        <Skeleton className="h-[15%] w-full" />
        <Skeleton className="h-[10%] w-[30%] " />
      </div>
      <div className="col-span-2 row-span-3 space-y-2">
        <Skeleton className="h-[60%] w-full" />
        <Skeleton className="h-[5%] w-[40%] " />
        <Skeleton className="h-[15%] w-full" />
        <Skeleton className="h-[10%] w-[30%] " />
      </div>
    </div>
  )
}

export default ArticleSpotlightListWrapperLoading
