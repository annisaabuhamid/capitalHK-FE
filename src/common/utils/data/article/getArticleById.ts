import { getClient } from "@/common/lib/apollo/apollo-client"
import { ArticleListSimpleQuery, ArticleListWithContentDocument, ArticleSeoDocument, ArticleSeoQuery } from "@/common/lib/graphql/generated/graphql"
import { ArticleBasicFragmentWithContent } from "@/common/types"
import { transformArticleShape } from "@/common/utils/transformArticleShape"

export const getArticleById = async (articleId: string) => {
  let article = null
  if (!articleId) return article

  const client = getClient()
  const { data, error, errors } = await client.query<ArticleListSimpleQuery>({
    query: ArticleListWithContentDocument,
    variables: {
      filters: { id: { eq: articleId } },
      pagination: { limit: 1 },
    },
  })
  const rawArticleList = (data.articles?.data ?? []) as ArticleBasicFragmentWithContent[]
  const articles = transformArticleShape(rawArticleList)

  article = articles[0] ?? null

  return article
}

export const getArticleSeo = async (articleId: string) => {
  let article = null
  if (!articleId) return article

  const client = getClient()
  const { data, error, errors } = await client.query<ArticleSeoQuery>({
    query: ArticleSeoDocument,
    variables: {
      filters: { id: { eq: articleId } },
      pagination: { limit: 1 },
    },
  })
  const rawArticleList = (data.articles?.data ?? []) as ArticleBasicFragmentWithContent[]
  const articles = transformArticleShape(rawArticleList)

  article = articles[0] ?? null

  return article
}

export const getArticleByIds = async (articleIds: Array<string>) => {
  let article = null
  if (!articleIds) return article

  const client = getClient()
  const { data, error, errors } = await client.query({
    query: ArticleListWithContentDocument,
    variables: {
      filters: { id: { in: articleIds } },
      pagination: { limit: 1 },
    },
  })
  const rawArticleList = (data.articles?.data ?? []) as ArticleBasicFragmentWithContent[]
  const articles = transformArticleShape(rawArticleList)

  article = articles[0] ?? null

  return article
}
