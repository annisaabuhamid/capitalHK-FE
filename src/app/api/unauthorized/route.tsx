import { NextRequest, NextResponse } from "next/server"

export async function GET(_: NextRequest, res: NextResponse) {
  // res.setHeader("WWW-authenticate", 'Basic realm="Secure Area"')
  // res.statusCode = 401
  // res.end(`Auth Required.`)
  return new Response(`UNAUTHORIZED`, { status: 401, headers: { "WWW-authenticate": 'Basic realm="Secure Area"' } })
}
