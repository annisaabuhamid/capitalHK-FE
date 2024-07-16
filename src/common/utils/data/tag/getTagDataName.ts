import { getClient } from "@/common/lib/apollo/apollo-client"
import { TagsDocument, TagsQuery } from "@/common/lib/graphql/generated/graphql"

export const getTagDataName = async (slug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<TagsQuery>({
    variables: { 
      filters: { slug: { eq: slug } },
      pagination: { limit: -1 }, },
    
    query: TagsDocument,
  })
  const tagName = data.tags?.data[0]?.attributes?.name || ""

  return tagName
}

export const getTagArticleNumber = async (slug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<TagsQuery>({
    variables: { 
      filters: { slug: { eq: slug } },
      pagination: { limit: -1 }, },
    
    query: TagsDocument,
  })
  const tagNumber = data.tags?.meta.pagination.total

  return tagNumber
}