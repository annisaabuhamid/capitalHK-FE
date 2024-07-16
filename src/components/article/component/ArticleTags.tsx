"use client"

import Image from "next/image"
import Link from "next/link"
import { Maybe, TagRelationResponseCollection } from "@/common/lib/graphql/generated/graphql"

type Props = { Tags: Maybe<TagRelationResponseCollection> | undefined }

const ArticleTags = ({ Tags }: Props) => {
  let tagsData = Tags?.data
  return (
    <div className="inline-flex flex-wrap gap-2 mt-9">
      {tagsData &&
        tagsData.map((tag, index) => (
          <Link href={`/tag/${tag.attributes?.slug || undefined}`} key={index}>
            <span className={"h6 border-[#C6C1C1] border-[1px] py-1 px-3 rounded"} aria-label="Close">
              {tag.attributes?.name}
            </span>
          </Link>
        ))}
    </div>
  )
}
export default ArticleTags
