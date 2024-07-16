import { getClient } from "@/common/lib/apollo/apollo-client"
import { AdsDocument, AdsQuery } from "@/common/lib/graphql/generated/graphql"

export const getAdsById = async (id: string) => {
  const client = getClient()

  const { data, error, errors } = await client.query<AdsQuery>({
    query: AdsDocument,
    variables: {
      filters: { id: { eq: id } },
      pagination: { limit: 1 },
    },
  })
  const adsData = data
  return adsData
}
