import { ArticleBasicFragment, ArticleBlocksDynamicZone } from "@/common/lib/graphql/generated/graphql"
import { Article, ArticleBasicFragmentWithContent } from "@/common/types"

export const transformArticleShape = (
  articles: readonly ArticleBasicFragment[] | ArticleBasicFragmentWithContent[]
): Article[] => {
  const newArticles: Article[] = articles.map((article) => {
    const attributes = article.attributes
    const {
      ad_banner_side,
      publishedDate,
      title,
      tags,
      editor,
      keyVisualHorizontal,
      categories,
      seo,
      editorSelect,
      layout,
      hideKeyVisual,
      otherEventArticles,
      stockQuote,
      relatedArticles,
      sidenote,
    } = attributes || {}
    const categoryLabel = categories?.data.find((cat) => !!cat.attributes?.name)?.attributes?.name
    const content = (article as ArticleBasicFragmentWithContent)?.attributes?.content
    const blocks = (article as ArticleBasicFragmentWithContent)?.attributes?.blocks
    return {
      ad_banner_side,
      articleId: article.id,
      imageUrl: keyVisualHorizontal?.data?.attributes?.url,
      imageFormats: keyVisualHorizontal?.data?.attributes?.formats,
      date: publishedDate?.toString(),
      tag: tags?.data[0]?.attributes?.name,
      title: title,
      description: seo?.metaDescription,
      slug: article.attributes?.slug,
      categoryLabel,
      editorSelect,
      editor,
      content,
      blocks,
      seo,
      stockQuote,
      hideKeyVisual,
      mastheadImage: keyVisualHorizontal?.data?.attributes?.url,
      mastheadImageWidth: keyVisualHorizontal?.data?.attributes?.width,
      mastheadImageHeight: keyVisualHorizontal?.data?.attributes?.height,
      mastheadImageAlt: keyVisualHorizontal?.data?.attributes?.alternativeText,
      layout,
      tags,
      categories,
      otherEventArticles,
      relatedArticles,
      sidenote,
    }
  })

  return newArticles
}
