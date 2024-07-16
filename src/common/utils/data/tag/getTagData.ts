import { getClient } from "@/common/lib/apollo/apollo-client"
import { TagsDocument, TagSeoDocument, TagSeoQuery, TagsQuery  } from "@/common/lib/graphql/generated/graphql"

export const getTagData = async (slug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<TagsQuery>({
    variables: { 
      filters: { slug: { eq: slug } }, 
      pagination: { limit: -1 },
    },
    
    query: TagsDocument,
  })
  const tag = data.tags?.data[0]?.attributes?.articles?.data || []
  const tagID = tag?.map((tag) => (
    tag.id || ""
  ))

  return tagID
}

export const getTagSeo = async (slug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<TagSeoQuery>({
    variables: { 
      filters: { slug: { eq: slug } }, 
    },
    query: TagSeoDocument,
  })

  const seo = data.tags?.data[0]

  return seo
}