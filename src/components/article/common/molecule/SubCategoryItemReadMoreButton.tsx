"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"

type Props = {
  slug: string
}

function SubCategoryItemReadMoreButton({ slug }: Props) {
  const pathname = usePathname()

  const newSlug = slug.startsWith("/") ? slug.slice(1) : slug
  const newHref = `${pathname}/${newSlug}`.replace(/\s+/g, "")
  return (
    <Link href={newHref}>
      <ReadMoreButton>
        <span className="text-primary h5 transition-all duration-300 !font-bold group-hover:-translate-x-1">閱覽更多</span>
      </ReadMoreButton>
    </Link>
  )
}

export default SubCategoryItemReadMoreButton
