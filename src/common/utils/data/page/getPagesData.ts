import { getClient } from "@/common/lib/apollo/apollo-client"
import { PageSeoDocument, PageSeoQuery, PagesListDocument, PagesListQuery } from "@/common/lib/graphql/generated/graphql"

export const getPagesData = async (slug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<PagesListQuery>({
    variables: { filters: { slug: { eq: slug } } },
    query: PagesListDocument,
  })
  const pages = data.pages?.data[0]

  return pages
}

export const getPageSeo = async (slug: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<PageSeoQuery>({
    variables: { filters: { slug: { eq: slug } } },
    query: PageSeoDocument,
  })
  const pages = data.pages?.data[0]

  return pages
}

