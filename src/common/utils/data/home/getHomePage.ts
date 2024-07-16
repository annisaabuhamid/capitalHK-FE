import { getClient } from "@/common/lib/apollo/apollo-client"
import { HomePageDocument, HomePageQuery, HomeSeoDocument, HomeSeoQuery } from "@/common/lib/graphql/generated/graphql"

export const getHomePage = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomePageQuery>({ query: HomePageDocument })
  return data.homePage?.data
}
export type HomePageData = ReturnType<typeof getHomePage> extends Promise<infer U> ? U : never

export const getHomeSeo = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeSeoQuery>({ query: HomeSeoDocument })
  return data.homePage?.data
}

export const getHomePageUrl = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomePageQuery>({ query: HomePageDocument })
  return data.homePage?.data?.attributes?.ExpertReviewUrl
}