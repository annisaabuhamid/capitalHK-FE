import { from, HttpLink } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { NextSSRApolloClient, NextSSRInMemoryCache } from "@apollo/experimental-nextjs-app-support/ssr"
import { errorLink } from "@/common/lib/apollo/errorLink"
import { httpLinkOptions } from "@/common/lib/apollo/httpLinkOptions"
import { inMemoryCacheConfig } from "@/common/lib/apollo/inMemoryCache"
import { strapiApiKey } from "@/common/utils/data/constants"

const httpLink = new HttpLink(httpLinkOptions)

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(inMemoryCacheConfig),
    link: from([errorLink, httpLink]),
    connectToDevTools: true,
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  })
})
