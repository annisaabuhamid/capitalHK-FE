import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  ArticleBasicFragment,
  BossDiaryDocument,
  BossDiaryQuery,
  CategoryFragmentFragment,
} from "@/common/lib/graphql/generated/graphql"
import { HomeBossDiaryCardData } from "@/common/types/homeTypes"
import { url } from "inspector"

export type HomeCategoryFeature = {
  id: string
  pinArticle: ArticleBasicFragment | null | undefined
  category: CategoryFragmentFragment | null | undefined
}
export const getHomeBossDiary = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<BossDiaryQuery>({ query: BossDiaryDocument })
  const rawBossDiary = data?.bossDiary?.data
  const rawDiaryArticles = data.articles?.data
  const article = rawDiaryArticles?.[0]

  const bossDiaryData: HomeBossDiaryCardData = {
    author: rawBossDiary?.attributes?.name ?? "",
    authorDescription: rawBossDiary?.attributes?.description ?? "",
    image: rawBossDiary?.attributes?.portrait?.data?.attributes?.url ?? "",
    title: article?.attributes?.title ?? "",
    date: article?.attributes?.publishedDate,
    articleSlug: article?.attributes?.slug ?? "",
    categories: article?.attributes?.categories
  }

  return bossDiaryData
}

export const getHomeBossDiaryUrl = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<BossDiaryQuery>({ query: BossDiaryDocument })

  return data.bossDiary?.data?.attributes?.url || ""
}
