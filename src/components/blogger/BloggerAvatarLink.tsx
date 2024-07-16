import Link from "next/link"
import React from "react"
import { SingleEditor } from "@/common/types/bloggerTypes"
import ImageContainer from "@/components/image/ImageContainer"

type Props = {
  blogger: SingleEditor
}

function BloggerAvatarLink({ blogger }: Props) {
  return (
    <Link
      href={{
        pathname: `/blogger/${blogger.id}`,
      }}
      className="cursor-pointer group blogger-avatar-link  self-start xl:max-w-[100px] lg:mr-9 flex flex-col justify-center xl:items-center"
    >
      <ImageContainer
        src={blogger.avatarUrl}
        className="blogger-avatar-image"
        alt={blogger.name || "alt not available"}
        fetchPriority="high"
      />
      <div className="h5 blogger text-secondary-700 text-center pt-3 xl:pt-4">{blogger.name}</div>
    </Link>
  )
}

export default BloggerAvatarLink
