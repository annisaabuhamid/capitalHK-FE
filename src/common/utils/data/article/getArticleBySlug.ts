import { getClient } from "@/common/lib/apollo/apollo-client"
import { ArticleListWithContentDocument } from "@/common/lib/graphql/generated/graphql"
import { ArticleBasicFragmentWithContent, OptionalString } from "@/common/types"
import { transformArticleShape } from "@/common/utils/transformArticleShape"

export type ArticleByCategory = {
  imageUrl?: OptionalString
  date?: OptionalString
  tag?: OptionalString
  articleId?: OptionalString
  title?: OptionalString
  description?: OptionalString
}

export const getArticleBySlug = async (slug: string) => {
  let article = null
  if (!slug) return article
  const client = getClient()
  const { data, error, errors } = await client.query({
    query: ArticleListWithContentDocument,
    variables: {
      filters: { slug: { eq: slug } },
      pagination: { limit: 1 },
    },
  })
  const rawArticleList = (data.articles?.data ?? []) as ArticleBasicFragmentWithContent[]
  const articles = transformArticleShape(rawArticleList)

  article = articles[0] ?? null

  return article
}
