import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  InterviewListDocument,
  InterviewListQuery,
  PagesListDocument,
  PagesListQuery,
  RelatedArticleListDocument,
  RelatedArticleListQuery,
} from "@/common/lib/graphql/generated/graphql"

export const getAllRelatedArticles = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<RelatedArticleListQuery>({
    query: RelatedArticleListDocument,
  })
  const relatedArticle = data.relatedArticle

  return relatedArticle
}
