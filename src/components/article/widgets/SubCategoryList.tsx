import React from "react"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import SubCategoryListItem from "@/components/article/common/molecule/SubCategoryListItem"
import styles from "./SubCategoryList.module.css"
type Props = {
  subCategoriesItems: CategoryPageProps["subCategoriesItems"]
}

function SubCategoryList({ subCategoriesItems }: Props) {
  if (!subCategoriesItems) return null
  return (
    <div className={styles["sub-category-list"]}>
      {subCategoriesItems.map((subCategoryItem) => {
        return <SubCategoryListItem key={subCategoryItem.id} subCategoryItem={subCategoryItem} />
      })}
    </div>
  )
}

export default SubCategoryList
