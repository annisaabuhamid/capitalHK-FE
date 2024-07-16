"use client"

import { ApolloLink, HttpLink } from "@apollo/client"
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"
import { errorLink } from "@/common/lib/apollo/errorLink"
import { httpLinkOptions } from "@/common/lib/apollo/httpLinkOptions"
import { inMemoryCacheConfig } from "@/common/lib/apollo/inMemoryCache"
import { strapiApiKey } from "@/common/utils/data/constants"
import { isSSR } from "@/common/utils/isSSR"

function makeClient() {
  const httpLink = new HttpLink(httpLinkOptions)

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(inMemoryCacheConfig),
    link: isSSR
      ? ApolloLink.from([
          errorLink,
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : ApolloLink.from([errorLink, httpLink]),
    connectToDevTools: true,
    headers: {
      Authorization: `Bearer ${strapiApiKey}`,
    },
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
