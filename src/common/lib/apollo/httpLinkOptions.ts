import { HttpOptions } from "@apollo/client"
import { graphqlApiUrl, strapiApiKey } from "@/common/utils/data/constants"
import fetchData from "@/common/utils/data/fetchData"

export const httpLinkOptions: HttpOptions = {
  uri: graphqlApiUrl,
  fetch: fetchData,
  headers: {
    Authorization: `Bearer ${strapiApiKey}`,
  },
}
