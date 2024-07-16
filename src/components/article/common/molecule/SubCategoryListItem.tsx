"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import SubCategoryItemReadMoreButton from "@/components/article/common/molecule/SubCategoryItemReadMoreButton"
import ResponsiveImageContainer from "@/components/image/ResponsiveImageContainer"
import styles from "./SubCategoryListItem.module.css"

type Props = {
  subCategoryItem: NonNullable<CategoryPageProps["subCategoriesItems"]>[number]
}

function SubCategoryListItem({ subCategoryItem }: Props) {
  const attributes = subCategoryItem.attributes
  const imageUrl = attributes?.Topic?.keyVisualHorizontal.data?.attributes?.url
  const imageWidth = attributes?.Topic?.keyVisualHorizontal.data?.attributes?.width
  const imageHeight = attributes?.Topic?.keyVisualHorizontal.data?.attributes?.height
  const imageAlt = attributes?.Topic?.keyVisualHorizontal.data?.attributes?.alternativeText ?? "sub category item"
  const imageFormats = attributes?.Topic?.keyVisualHorizontal.data?.attributes?.formats

  const title = attributes?.name
  const description = attributes?.seo?.metaDescription
  const categorySlug = subCategoryItem.attributes?.slug ?? ""
  const pathname = usePathname()

  const newSlug = categorySlug.startsWith("/") ? categorySlug.slice(1) : categorySlug
  const newHref = `${pathname}/${newSlug}`.replace(/\s+/g, "")
  return (
    <div className={styles["sub-category-list-item"]}>
      <div className={styles["item-image"]}>
        <Link href={newHref}>
          <ResponsiveImageContainer
            imgUrl={!!imageFormats?.large?.url ? imageFormats?.large?.url : imageUrl}
            width={!!imageFormats?.large?.url ? imageFormats?.large?.width : imageWidth}
            height={!!imageFormats?.large?.url ? imageFormats?.large?.height : imageHeight}
            altText={imageAlt ?? "article medium"}
          />
        </Link>
      </div>
      <div className={styles["item-content"]}>
        <div className="h3 !font-normal">{title}</div>
        <div className="h4 !font-normal">{description}</div>

        <SubCategoryItemReadMoreButton slug={categorySlug} />
      </div>
    </div>
  )
}

export default SubCategoryListItem
