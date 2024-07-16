import React from "react"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import SpecialTopicPageLayoutHeader from "@/components/article/common/molecule/SpecialTopicPageLayoutHeader"
import SpecialTopicPageArticleGrid from "@/components/article/common/organisms/SpecialTopicPageArticleGrid"
import Container from "@/components/common/atom/container/Container"
import styles from "./SpecialTopicPage.module.css"

type Props = Omit<CategoryPageProps, "subCategoriesItems" | "subCategorySlug"> & {
  parentCategory?: CategoryPageProps["category"]
  parentSubCategoryItems?: CategoryPageProps["subCategoriesItems"]
  grandParentCategory?: CategoryPageProps["category"]
}

function SpecialTopicPageLayout({ parentCategory, category, grandParentCategory, articles }: Props) {
  return (
    <div className={styles["special-topic-page"]}>
      <Container>
        <SpecialTopicPageLayoutHeader
          parentCategory={parentCategory}
          category={category}
          grandParentCategory={grandParentCategory}
        />
        <SpecialTopicPageArticleGrid articles={articles} categoryId={category?.id ?? undefined} />
      </Container>
    </div>
  )
}

export default SpecialTopicPageLayout
