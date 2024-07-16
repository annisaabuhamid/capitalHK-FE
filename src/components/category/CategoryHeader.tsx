import { startCase } from "lodash"
import Link from "next/link"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import { getMenuItems } from "@/common/utils/data/global/getMenuItems"
import CategoryHeaderItem from "@/components/category/CategoryHeaderItem"
import Divider from "@/components/common/atom/Divider"
import { cn } from "@/components/ui/utils"
import styles from "./styles.module.css"

type Props = Partial<CategoryPageProps> & {}

async function CategoryHeader({ category }: Props) {
  // const categoryId = category?.id ?? ""
  const categorySlug = category?.attributes?.slug ?? ""
  const categoryName = category?.attributes?.name ?? ""

  const parentCatId = category?.attributes?.parentCategory?.data?.id ?? ""
  const parentCatSlug = category?.attributes?.parentCategory?.data?.attributes?.slug ?? ""
  const parentCatName = category?.attributes?.parentCategory?.data?.attributes?.name ?? ""
  const categoryLabel = startCase(parentCatName || categoryName)

  // const subCategoryQueryId = parentCatId || categoryId
  // const subCategoriesItems = await getAllSubCategories(undefined, {
  //   filters: { parentCategory: { id: { eq: subCategoryQueryId } } },
  //   pagination: { start: 0, limit: 6 },
  // })
  const subCategoryQueryName = parentCatName || categoryName
  const subCategoriesItems = await getMenuItems({
    variables: {
      sort: ["order"],
      pagination: { limit: -1 },
      filters: { root_menu: { slug: { eq: "top-nav" } }, parent: { title: { eq: subCategoryQueryName } } },
    },
  })
  return (
    <div>
      {/* header bar */}
      <div className="lg:my-[21px] my-4">
        <div className={cn(styles["category-header-title"], "h2")}>{categoryLabel}</div>
        <Divider className="divide-y-[2px] divide-primary" />
      </div>
      {/* sub categories */}
      <div className={`${styles["sub-categories-wrapper"]} scrollbar-hide`}>
        <div className={styles["sub-categories"]}>
          <div className={styles["sub-categories-item"]}>
            <Link href={`/${parentCatSlug || categorySlug}`}>
              <div className={`${parentCatId ? "text-secondary-300" : "!text-primary"}`}>全部</div>
            </Link>
          </div>
          {subCategoriesItems?.map((subCategoryItem) => {
            return <CategoryHeaderItem key={subCategoryItem.id} subCategoryItem={subCategoryItem} />
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
