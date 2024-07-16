import { ArticleEntityResponse, CategoriesQuery, Enum_Category_Layout } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"

export type SubCategory = NonNullable<CategoriesQuery["categories"]>["data"][number]

export type Category = SubCategory

export type CategoryPageProps = {
  subCategoriesItems?: SubCategory[]
  articles?: Article[]
  subCategorySlug?: string
  category?: Category
  categorySlug: string
  categoryId?: string
}
