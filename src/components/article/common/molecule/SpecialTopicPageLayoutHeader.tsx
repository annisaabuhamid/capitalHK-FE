import Link from "next/link"
import React from "react"
import { Category } from "@/common/types/categoryTypes"
import BackIcon from "@/components/social-media/icon/BackIcon"

type Props = { parentCategory?: Category; category?: Category; grandParentCategory?: Category }

function SpecialTopicPageLayoutHeader({ parentCategory, category, grandParentCategory }: Props) {
  const parentCategoryTitle = parentCategory?.attributes?.name
  const parentCatSlug = parentCategory?.attributes?.slug

  const grandParentCatSLug = grandParentCategory?.attributes?.slug
  const href = `/${grandParentCatSLug}/${parentCatSlug}`.replace(/\s+/g, "")
  const categoryTitle = category?.attributes?.name
  return (
    <div className="flex items-center ">
      <Link href={href} className="h-full border border-primary flex justify-center p-2 mr-4 rounded">
        <BackIcon />
      </Link>
      <div className="flex-col gap-[16px] items-center">
        <div>{parentCategoryTitle}</div>
        <div className="h2 text-primary">{categoryTitle}</div>
      </div>
    </div>
  )
}

export default SpecialTopicPageLayoutHeader
