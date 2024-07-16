import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  ArticleListSimpleDocument,
  ArticleListSimpleQuery,
  ArticleListSimpleQueryVariables,
} from "@/common/lib/graphql/generated/graphql"
import { OptionalString } from "@/common/types"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"

export type ArticleByEditorID = {
  imageUrl?: OptionalString
  date?: OptionalString
  tag?: OptionalString
  articleId?: OptionalString
  title?: OptionalString
  description?: OptionalString
}
export const getArticlesByEditorID = async (editorId?: number, variables?: ArticleListSimpleQueryVariables) => {
  const client = getClient()
  const { data, error, errors } = await client.query<ArticleListSimpleQuery>({
    query: ArticleListSimpleDocument,
    variables: {
      filters: { editor: { id: { eq: editorId } } },
      pagination: { limit: -1 },
      ...variables,
    },
  })

  const rawArticleList = data.articles?.data ?? []
  const articles = transformArticleListShape(rawArticleList)
  return articles
}

export const getArticlesByEditorIDMetaPagination = async (
  editorId?: number,
  variables?: ArticleListSimpleQueryVariables
) => {
  const client = getClient()
  const { data, error, errors } = await client.query<ArticleListSimpleQuery>({
    query: ArticleListSimpleDocument,
    variables: {
      filters: { editor: { id: { eq: editorId } } },
      pagination: { limit: -1 },
      ...variables,
    },
  })

  return data.articles?.meta.pagination.total
}
