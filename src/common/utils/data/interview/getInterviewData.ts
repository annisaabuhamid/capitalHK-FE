import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  InterviewListDocument,
  InterviewListQuery,
  PagesListDocument,
  PagesListQuery,
} from "@/common/lib/graphql/generated/graphql"

export const getInterviewData = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<InterviewListQuery>({
    query: InterviewListDocument,
  })
  const interview = data.interview

  return interview
}
