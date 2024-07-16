import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  ArticleListWithContentDocument,
  ArticleListWithContentQueryVariables,
} from "@/common/lib/graphql/generated/graphql"
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

type Props = {
  variables: ArticleListWithContentQueryVariables
}

export const getArticlesWithContent = async (params?: Props) => {
  const client = getClient()
  const { data, error, errors } = await client.query({
    query: ArticleListWithContentDocument,
    variables: {
      ...params?.variables,
    },
  })
  const rawArticleList = (data.articles?.data ?? []) as ArticleBasicFragmentWithContent[]
  const articles = transformArticleShape(rawArticleList)

  return articles
}
