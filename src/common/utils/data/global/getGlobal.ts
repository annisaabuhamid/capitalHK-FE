import { getClient } from "@/common/lib/apollo/apollo-client"
import { GlobalDocument, GlobalQuery } from "@/common/lib/graphql/generated/graphql"

export const getGlobal = async () => {
  const client = getClient()

  const { data, error, errors } = await client.query<GlobalQuery>({ query: GlobalDocument })
  return data.global?.data
}

export type GlobalData = ReturnType<typeof getGlobal> extends Promise<infer U> ? U : never
