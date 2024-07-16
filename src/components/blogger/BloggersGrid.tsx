import React from "react"
import { AllBloggersPageProps } from "@/common/types/bloggerTypes"
import BloggerCard from "@/components/blogger/BloggerCard"

type Props = AllBloggersPageProps & {}

function BloggersGrid({ allBloggers }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 sm:gap-9 mx-auto">
      {allBloggers.map((blogger) => {
        return <BloggerCard key={blogger.id} blogger={blogger} />
      })}
    </div>
  )
}

export default BloggersGrid
