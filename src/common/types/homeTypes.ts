import { OptionalString } from "@/common/types"
import { ArticleBasicFragment } from "../lib/graphql/generated/graphql"

export type HomeBossDiaryCardData = {
  image: string
  author: string
  authorDescription: string
  //   article
  date: Date
  title: string
  articleSlug: string
  categories: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
}

export type HomeExpertReviewArticle = {
  title: string
  image: string
  author: string
  authorDescription: string
  articleSlug: string
  categories: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
  editor: NonNullable<ArticleBasicFragment["attributes"]>["editor"]
}

export type HomeInterviewArticle = {
  image: string
  title: OptionalString
  authorDescription: OptionalString
  author: OptionalString
  articleSlug: string
  name: string
  potrait: string
  portraitWidth: number
  portraitHeight: number
  portraitAlt: string
  description: string
  intervieweeTitle: string
  categories: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
}
