import {getClient} from "@/common/lib/apollo/apollo-client"
import {HomeTopBannerDocument, HomeTopBannerQuery} from "@/common/lib/graphql/generated/graphql"

export const getHomeTopBanner = async () => {
    const client = getClient()

    const { data, error, errors } = await client.query<HomeTopBannerQuery>({
        query: HomeTopBannerDocument,
    })
    return data?.homePage?.data?.attributes?.HomeTopBanner ?? []
}
