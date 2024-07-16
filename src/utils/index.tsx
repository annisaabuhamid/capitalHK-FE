// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import qs from "qs"
import { ArticleBasicFragment } from "@/common/lib/graphql/generated/graphql"

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${path}`
}

export const getFirstCategory = (categories: NonNullable<ArticleBasicFragment["attributes"]>["categories"]) => {
  if (categories && categories?.data.length > 0) {
    const cat = categories?.data[0]
    if (cat.attributes?.parentCategory?.data !== null) {
      return `/${cat.attributes?.parentCategory?.data?.attributes?.slug}/${cat.attributes?.slug}`
    } else {
      return `/${cat.attributes.slug}`
    }
  } else {
    return ""
  }
}

export const getParentCategory = (categories: NonNullable<ArticleBasicFragment["attributes"]>["categories"]) => {
  if (categories && categories?.data.length > 0) {
    const cat = categories?.data[0]
    if (cat.attributes?.parentCategory?.data !== null) {
      return (
        <div className="flex items-center">
          {cat.attributes?.parentCategory?.data?.attributes?.name}
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
            <path
              d="M4.3252 10.55C4.2002 10.425 4.1377 10.277 4.1377 10.106C4.1377 9.935 4.2002 9.78717 4.3252 9.6625L7.9877 6L4.3127 2.325C4.19603 2.20833 4.1377 2.0625 4.1377 1.8875C4.1377 1.7125 4.2002 1.5625 4.3252 1.4375C4.4502 1.3125 4.5982 1.25 4.7692 1.25C4.9402 1.25 5.08803 1.3125 5.2127 1.4375L9.4127 5.65C9.4627 5.7 9.4982 5.75417 9.5192 5.8125C9.5402 5.87083 9.55053 5.93333 9.5502 6C9.5502 6.06667 9.5397 6.12917 9.5187 6.1875C9.4977 6.24583 9.46236 6.3 9.4127 6.35L5.2002 10.5625C5.08353 10.6792 4.9397 10.7375 4.7687 10.7375C4.5977 10.7375 4.44986 10.675 4.3252 10.55Z"
              fill="#848484"
            />
          </svg>
          {cat.attributes?.name}
        </div>
      )
    } else {
      return `${cat.attributes.name}`
    }
  } else {
    return ""
  }
}

export async function fetchAPI(path: any, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }

    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error(`Please check if your server is running and you set all the required tokens.`)
  }
}
export function renderRootPath(
  router: string,
  dynamicRouter: Params,
  categories: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
) {
  if (categories === null) {
    return ""
  } else {
    if (router === "/") {
      return getFirstCategory(categories)
    } else if (router !== "" && dynamicRouter.categoryId) {
      return router
    } else if (router !== "" && dynamicRouter.articleId) {
      return getFirstCategory(categories)
    } else if (router !== "" && dynamicRouter.slug) {
      return getFirstCategory(categories)
    } else if (router !== "" && dynamicRouter.bloggerId) {
      return getFirstCategory(categories)
    } else if (router === "/search-result") {
      return getFirstCategory(categories)
    } else if (router === "/bookmark") {
      return getFirstCategory(categories)
    } else {
      return ""
    }
  }
}
