import { MenusMenuItemsQueryVariables } from "@/common/lib/graphql/generated/graphql"

const websiteUsername = process.env.WEBSITE_USERNAME
const websitePassword = process.env.WEBSITE_PASSWORD

const strapiApiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
const graphqlApiUrl = `${strapiUrl}/graphql`

// Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// dialog state
const LOGIN_DIALOG_SEARCH_PARAM = "login-dialog"

// article per page
const ARTICLE_PER_PAGE = 6
const ARTICLE_CONTENT_PER_PAGE = 10

// mega menu

const menuItemsVariables: MenusMenuItemsQueryVariables = {
  sort: ["order"],
  pagination: { limit: -1 },
  filters: {
    root_menu: { slug: { eq: "top-nav" } },
    parent: {
      id: { eq: null },
    },
  },
}

const IMAGE_QUALITY = 80

export {
  //
  websiteUsername,
  websitePassword,
  //
  graphqlApiUrl,
  strapiApiKey,
  strapiUrl,
  LOGIN_DIALOG_SEARCH_PARAM,
  ARTICLE_PER_PAGE,
  ARTICLE_CONTENT_PER_PAGE,
  GA_MEASUREMENT_ID,
  //
  menuItemsVariables,
  //
  IMAGE_QUALITY,
}
