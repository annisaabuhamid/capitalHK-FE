import { ArticleListFragment } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"

export const transformArticleListShape = (articles: readonly ArticleListFragment[]): Article[] => {
  const newArticles: Article[] = articles.map((article) => {
    const attributes = article.attributes
    const { publishedDate, title, editor, keyVisualHorizontal, categories, seo, editorSelect } = attributes || {}
    const categoryLabel = categories?.data.find((cat) => !!cat.attributes?.name)?.attributes?.name
    return {
      articleId: article.id,
      imageUrl: keyVisualHorizontal?.data?.attributes?.url,
      imageWidth: keyVisualHorizontal?.data?.attributes?.width,
      imageHeight: keyVisualHorizontal?.data?.attributes?.height,
      imageAlt: keyVisualHorizontal?.data?.attributes?.alternativeText,
      imageFormats: keyVisualHorizontal?.data?.attributes?.formats,
      date: publishedDate?.toString(),
      title: title,
      description: seo?.metaDescription,
      slug: article.attributes?.slug,
      categoryLabel,
      editorSelect,
      editor,
      categories,
    }
  })

  return newArticles
}
