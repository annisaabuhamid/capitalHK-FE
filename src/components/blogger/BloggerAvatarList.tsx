import Link from "next/link"
import React from "react"
import { BloggerAvatarListProps } from "@/common/types/bloggerTypes"
import BloggerAvatarLink from "@/components/blogger/BloggerAvatarLink"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import styles from "./styles.module.css"

type Props = BloggerAvatarListProps

function BloggerAvatarList({ allBloggers }: Props) {
  const readMoreHref = `/blogger`
  return (
    <div className="flex-grow lg:mb-[37.37px]">
      <div className="flex flex-col xl:flex-row">
        <div className={'grid grid-cols-3 gap-[inherit] gap-x-[12.39%] gap-y-6 justify-between items-center xl:gap-x-0 xl:flex  mb-6 xl:mb-0'}>
          {allBloggers.slice(0, 6).map((blogger) => {
            return <BloggerAvatarLink key={blogger.id} blogger={blogger} />
          })}
        </div>
        <div className="flex items-center justify-center whitespace-nowrap xl:mb-10"> {/* Center the content */}
          <Link href={readMoreHref}>
            <ReadMoreButton>
              <span className="h5 blogger">更多博客</span>
            </ReadMoreButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BloggerAvatarList
