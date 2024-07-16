import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server"
import { Enum_Route_Type } from "@/common/lib/graphql/generated/graphql"
import { websitePassword, websiteUsername } from "@/common/utils/data/constants"
import { getRouteMiddleware } from "@/common/utils/data/global/getRouteMiddleware"

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|svg|_vercel).*)",
  ],
}

const withAuth: MiddlewareFactory = (next) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    if (!websiteUsername || !websitePassword) {
      // if no username or password is set, allow all requests
      return next(req, _next)
    }
    const basicAuth = req.headers.get("authorization")
    if (basicAuth) {
      // if username and password is set, check if the request has the correct credentials
      const authValue = basicAuth.split(" ")[1]
      const [user, pwd] = atob(authValue).split(":")
      if (user === websiteUsername && pwd === websitePassword) {
        return next(req, _next)
      }
    }

    // if no credentials are set or the request has the wrong credentials, rewrite the request to the auth endpoint which return UNAUTHORIZED
    const url = req.nextUrl
    url.pathname = "/api/unauthorized"
    return NextResponse.rewrite(url)
  }
}

// slug 1: /category/sub-category/article-slug
// slug 2: /category/sub-category
// slug 3: /category
// slug 4: /category/article-slug
// slug 5: /article-slug

const getSlugRewrite = async (pathname: string) => {
  console.time(`getRouteMiddleware ${pathname}`)
  const allRoutes = await getRouteMiddleware({
    filters: { requestPath: { eq: pathname } },
    pagination: { limit: 1 },
  })
  console.timeEnd(`getRouteMiddleware ${pathname}`)

  if (!allRoutes) {
    return
  }
  const rewritableRoute = allRoutes.find((route) => {
    const requestPath = route.attributes?.requestPath
    const isMatch = pathname === requestPath
    return isMatch
  })
  if (!rewritableRoute) return

  const routeType = rewritableRoute.attributes?.type
  const routeValue = rewritableRoute.attributes?.value
  
  switch (routeType) {
    case Enum_Route_Type.Article: {
      const newRoute = `/article/${routeValue}`
      return newRoute
    }
    case Enum_Route_Type.Category: {
      const newRoute = `/cat/${routeValue}`
      return newRoute
    }
    default:
      return
  }
}

const getRewriteConfig = async (req: NextRequest) => {
  const url = req.nextUrl
  const pathname = decodeURI(url.pathname)
  if (pathname === "/") return false
  if (pathname.includes("/svg/3-dots-bounce.svg") || pathname.includes("favicon.ico")) return false
  // compare with mapping
  // if match, return the mapped url

  const slugRewrite = await getSlugRewrite(pathname)
  if (slugRewrite) {
    url.pathname = slugRewrite
    return url
  }

  return false
}

const withRewrite: MiddlewareFactory = (next) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    const rewriteConfig = await getRewriteConfig(req)
    if (rewriteConfig) {
      return NextResponse.rewrite(rewriteConfig)
    }
    return next(req, _next)
  }
}

const middlewares: MiddlewareFactory[] = [withAuth, withRewrite]

function stackMiddlewares(functions: MiddlewareFactory[] = [], index = 0): NextMiddleware {
  const current = functions[index]
  if (current) {
    const next = stackMiddlewares(functions, index + 1)
    return current(next)
  }
  return () => NextResponse.next()
}

export default stackMiddlewares(middlewares)
