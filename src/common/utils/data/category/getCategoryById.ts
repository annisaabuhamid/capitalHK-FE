import { getClient } from "@/common/lib/apollo/apollo-client"
import { CategoryDocument, CategoryPinArticleDocument, CategoryPinArticleQuery, CategoryQuery, CategorySeoDocument, CategorySeoQuery } from "@/common/lib/graphql/generated/graphql"

export const getCategoryById = async (id: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<CategoryQuery>({
    variables: { id },
    query: CategoryDocument,
  })
  const category = data.category?.data

  return category
}

export const getCategorySeo = async (id: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<CategorySeoQuery>({
    variables: { id },
    query: CategorySeoDocument,
  })
  const category = data.category?.data

  return category
}

export const getCategoryPinArticleById = async (id: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<CategoryPinArticleQuery>({
    variables: { id },
    query: CategoryPinArticleDocument,
  })
  const pinArticle = data.category?.data?.attributes?.pinArticle

  return pinArticle
}


