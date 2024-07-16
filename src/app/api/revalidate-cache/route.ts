import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest } from "next/server"

// http://localhost:3000/api/revalidate-cache?path=%2F%27
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path")
  const tag = request.nextUrl.searchParams.get("tag")
  const all = request.nextUrl.searchParams.get("all")
  if (path) {
    revalidatePath(path)
    await fetch(`${request.nextUrl.origin}${path}`)
    return Response.json({ revalidated: true, time: new Date().toISOString() })
  } else if (all === "") {
    revalidatePath("/", "layout")
    // current url
    await fetch(`${request.nextUrl.origin}/`)
    return Response.json({ revalidated: true, time: new Date().toISOString() })
  } else if (tag === "") {
    revalidateTag("default")
    return Response.json({ revalidated: true, time: new Date().toISOString() })
  }
  return Response.json({
    revalidated: false,
    time: new Date().toISOString(),
    message: "Missing path to revalidate",
  })
}
