import { getClient } from "@/common/lib/apollo/apollo-client"
import { HomeInterviewDocument, HomeInterviewQuery } from "@/common/lib/graphql/generated/graphql"
import { HomeInterviewArticle } from "@/common/types/homeTypes"

export const getHomeInterviewArticles = async (categorySlug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeInterviewQuery>({
    query: HomeInterviewDocument,
    variables: {
      filters: { categories: { slug: { eq: categorySlug } } },
    },
  })
  const rawInterviewData = data?.interview?.data
  const rawArticleData = data.articles?.data

  const interviewArticlesData = rawInterviewData?.attributes?.articles?.data ?? []
  const articlesData = rawArticleData ?? []

  const uniqueArticleIds = new Set<string>()

  const combinedInterviewArticles = interviewArticlesData
    .concat(articlesData)
    .filter((article) => {
      const articleId = article?.id ?? ""
      if (uniqueArticleIds.has(articleId)) {
        return false
      } else {
        uniqueArticleIds.add(articleId)
        return true
      }
    })
    .slice(0, 20)
    .map((article) => {
      const transformedArticle: HomeInterviewArticle = {
        author: article?.attributes?.editor?.data?.attributes?.name ?? "",
        authorDescription: article?.attributes?.editor?.data?.attributes?.biography ?? "",
        image: article?.attributes?.editor?.data?.attributes?.avatar.data?.attributes?.url ?? "",
        title: article?.attributes?.title ?? "",
        articleSlug: article?.attributes?.slug ?? "",
        potrait:
          (article?.attributes?.Interviewee?.portrait?.data?.attributes?.formats?.small?.url ||
            article?.attributes?.Interviewee?.portrait?.data?.attributes?.url) ??
          "",
        portraitWidth:
          (article?.attributes?.Interviewee?.portrait?.data?.attributes?.formats?.small?.width ||
            article?.attributes?.Interviewee?.portrait?.data?.attributes?.width) ??
          "",
        portraitHeight:
          (article?.attributes?.Interviewee?.portrait?.data?.attributes?.formats?.small?.height ||
            article?.attributes?.Interviewee?.portrait?.data?.attributes?.height) ??
          "",
        portraitAlt:
          article?.attributes?.Interviewee?.portrait?.data?.attributes?.alternativeText ?? "alt not available",
        name: article?.attributes?.Interviewee?.name ?? "",
        description: article?.attributes?.seo?.metaDescription ?? "",
        intervieweeTitle: article?.attributes?.Interviewee?.title ?? "",
        categories: article.attributes?.categories,
      }

      return transformedArticle
    })
  return combinedInterviewArticles
}

export const getHomeInterviewUrl = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<HomeInterviewQuery>({ query: HomeInterviewDocument })

  return data.interview?.data?.attributes?.url || ""
}
