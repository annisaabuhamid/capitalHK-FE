"use client"

import { startCase } from "lodash"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { MenusMenuItemEntity } from "@/components/navbar/NavItem"
import styles from "./styles.module.css"

type Props = {
  subCategoryItem: MenusMenuItemEntity
}

function CategoryHeaderItem({ subCategoryItem }: Props) {
  const pathname = usePathname()

  const subCategoryLabel = startCase(subCategoryItem?.attributes?.title || "")
  const currentSubCategorySlug = subCategoryItem?.attributes?.url || ""
  const isActive = currentSubCategorySlug === pathname
  // const href = `/${parentCatSlug || categorySlug}/${currentSubCategorySlug}`.replace(/\s+/g, "")
  const href = `${currentSubCategorySlug}`.replace(/\s+/g, "")

  return (
    <div className={styles["sub-categories-item"]}>
      <Link href={href}>
        <div className={`${isActive ? "!text-primary" : "text-secondary-300"}`}>{subCategoryLabel}</div>
      </Link>
    </div>
  )
}

export default CategoryHeaderItem
