import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  ArticleListSimpleDocument,
  ArticleListSimpleQuery,
  ArticleListSimpleQueryVariables,
} from "@/common/lib/graphql/generated/graphql"
import { transformArticleShape } from "@/common/utils/transformArticleShape"

type Props = {
  variables: ArticleListSimpleQueryVariables
}
export const getAllArticles = async (props: Props | undefined) => {
  const client = getClient()
  const { data, error, errors } = await client.query<ArticleListSimpleQuery>({
    query: ArticleListSimpleDocument,
    variables: {
      pagination: { limit: -1 },
      ...props?.variables,
    },
  })

  const rawArticleList = data.articles?.data ?? []

  const articles = transformArticleShape(rawArticleList)
  return articles
}
