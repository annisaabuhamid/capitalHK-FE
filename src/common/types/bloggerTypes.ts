import { Article } from "@/common/types"
import { Category } from "@/common/types/categoryTypes"
import { transformEditorShape } from "@/common/utils/data/editors/transformEditorShape"

export type SingleEditor = ReturnType<typeof transformEditorShape>[number]

export type BloggerPageProps = {
  bloggerArticles: Article[]
  blogger: SingleEditor
  numberOfArticles: number
}

export type BloggersCategoryLayoutProps = {
  allBloggers: SingleEditor[]
  category?: Category
  categorySlug: string
}

export type AllBloggersPageProps = {
  allBloggers: SingleEditor[]
}

export type BloggerAvatarListProps = {
  allBloggers: SingleEditor[]
}
