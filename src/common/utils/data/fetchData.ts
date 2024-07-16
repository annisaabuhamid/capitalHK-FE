// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'
// export const maxDuration = 5

function fetchData(url: RequestInfo | URL, init?: RequestInit | undefined) {
  const defaultInit: RequestInit = {
    // cache: "force-cache",
    next: {
      //   revalidate: 3600, // revalidate at most every hour
      revalidate: 30, // revalidate at most every 10 seconds
      tags: ["default"],
    },
    ...init,
  }
  return fetch(url, defaultInit)
}

export default fetchData

export const fetchWithCache = async (url: RequestInfo | URL, init?: RequestInit | undefined) => {
  const defaultInit: RequestInit = {
    cache: "force-cache",
    next: {
      revalidate: 86400, // revalidate at most every 24 hours
      tags: ["default"],
    },
    ...init,
  }
  const response = await fetch(url, defaultInit)
  return response
}
