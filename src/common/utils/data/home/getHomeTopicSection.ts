import { getClient } from "@/common/lib/apollo/apollo-client"
import { HomeTopicSectionDocument, HomeTopicSectionQuery } from "@/common/lib/graphql/generated/graphql"

export const getHomeTopicSection = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeTopicSectionQuery>({ query: HomeTopicSectionDocument })
  const unionData = data.homePage?.data?.attributes?.Topic?.categories?.data ?? []
  return unionData
}

export type HomeTopicSectionData = ReturnType<typeof getHomeTopicSection> extends Promise<infer U> ? U : never

export const getHomeTopicSectionUrl = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeTopicSectionQuery>({ query: HomeTopicSectionDocument })
  const url = data.homePage?.data?.attributes?.Topic?.url
  return url
}

export const getHomeTopicSectionName = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeTopicSectionQuery>({ query: HomeTopicSectionDocument })
  const url = data.homePage?.data?.attributes?.Topic?.name
  return url
}