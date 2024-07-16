//= Scripts
import { headers } from "next/headers"
import { Enum_Category_Layout } from "@/common/lib/graphql/generated/graphql"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import { getAllSubCategories } from "@/common/utils/data/category/getAllSubCategories"
import { getCategoryById, getCategorySeo } from "@/common/utils/data/category/getCategoryById"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { transformEditorShape } from "@/common/utils/data/editors/transformEditorShape"
import BloggersCategoryLayout from "@/components/blogger/BloggersCategoryLayout"
import CategoryPage from "@/components/category/CategoryPage"
import SpecialTopicCategoryLayout from "@/components/category/SpecialTopicCategoryLayout"
import SpecialTopicPageLayout from "@/components/category/SpecialTopicPageLayout"

export async function generateMetadata({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params
  const mainCategory = await getCategorySeo(categoryId)
  const seo = mainCategory?.attributes?.seo
  const headersList = headers()
  const fullUrl = headersList.get("referer") || ""

  return {
    title: seo?.metaTitle || `Capital 資本平臺`,
    description: seo?.metaDescription || `深入閱讀政經生活文化`,
    keywords: seo?.keywords || [`Capital`],
    robots: seo?.metaRobots || `index`,
    viewport: seo?.metaViewport,
    openGraph: {
      url: fullUrl,
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: [
        {
          url: seo?.metaImage?.data?.attributes?.url,
          width: seo?.metaImage?.data?.attributes?.width,
          height: seo?.metaImage?.data?.attributes?.height,
          alt: seo?.metaImage?.data?.attributes?.alternativeText,
        },
      ],
    },
  }
}

export const revalidate = 60 * 60 * 0 // 24 hours
export const dynamicParams = true
export default async function Page({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params
  console.time("getCategoryById")
  const category = await getCategoryById(categoryId)
  console.timeEnd("getCategoryById")
  const categoryLayoutType = category?.attributes?.layout ?? Enum_Category_Layout.FirstLevel

  if (categoryLayoutType === Enum_Category_Layout.Blogger) {
    const allEditorsData = category?.attributes?.bloggerList?.data.slice(0, 6) || []

    const allEditors = transformEditorShape(allEditorsData)
    const categorySlug = category?.attributes?.slug ?? ""

    return (
      <BloggersCategoryLayout categorySlug={categorySlug} category={category ?? undefined} allBloggers={allEditors} />
    )
  }

  if (categoryLayoutType === Enum_Category_Layout.FirstLevel) {
    const categorySlug = category?.attributes?.slug ?? ""

    return <CategoryPage categorySlug={categorySlug} category={category ?? undefined} categoryId={categoryId} />
  } else if (categoryLayoutType === Enum_Category_Layout.SecondLevel) {
    const categorySlug = category?.attributes?.slug ?? ""
    const subCategoriesItems = (await getAllSubCategories(categorySlug)) || []

    const parentCategory = await getCategoryById(category?.attributes?.parentCategory?.data?.id ?? "")
    const parentSubCategoryItems = (await getAllSubCategories(parentCategory?.attributes?.slug ?? "")) || []
    return (
      <SpecialTopicCategoryLayout
        categorySlug={categorySlug}
        category={category ?? undefined}
        subCategoriesItems={subCategoriesItems}
        parentSubCategoryItems={parentSubCategoryItems}
        parentCategory={parentCategory ?? undefined}
      />
    )
  } else if (categoryLayoutType === Enum_Category_Layout.ThirdLevel) {
    const categorySlug = category?.attributes?.slug ?? ""
    const articles = await getArticlesByCategory(categorySlug, {
      pagination: { page: 1, pageSize: ARTICLE_PER_PAGE + 1 },
      filters: { categories: { id: { eq: categoryId } } },
      sort: "publishedDate:desc",
    })

    const parentCategory = await getCategoryById(category?.attributes?.parentCategory?.data?.id ?? "")
    const parentSubCategoryItems = (await getAllSubCategories(parentCategory?.attributes?.slug ?? "")) || []
    const grandParentCategory = await getCategoryById(parentCategory?.attributes?.parentCategory?.data?.id ?? "")
    return (
      <SpecialTopicPageLayout
        categorySlug={categorySlug}
        category={category ?? undefined}
        parentSubCategoryItems={parentSubCategoryItems}
        parentCategory={parentCategory ?? undefined}
        articles={articles}
        grandParentCategory={grandParentCategory ?? undefined}
      />
    )
  }
}
