import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { httpLinkOptions } from "@/common/lib/apollo/httpLinkOptions"
import { inMemoryCacheConfig } from "@/common/lib/apollo/inMemoryCache"
import { graphqlApiUrl, strapiApiKey } from "@/common/utils/data/constants"
import { fetchWithCache } from "@/common/utils/data/fetchData"

export const getMiddlewareClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(inMemoryCacheConfig),
    uri: graphqlApiUrl,
    link: new HttpLink({ ...httpLinkOptions, fetch: fetchWithCache }),
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  })
  return client
}
