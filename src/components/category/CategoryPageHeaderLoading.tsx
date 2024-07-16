import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

function CategoryPageHeaderLoading({}: Props) {
  return (
    <div className="min-h-[123px] mt-[21px] space-y-2">
      <Skeleton className="h-10 w-[250px] " />
      <Skeleton className="h-1 w-full " />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

export default CategoryPageHeaderLoading
