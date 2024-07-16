"use client"

import { useSession } from "next-auth/react"

export const useAuth = () => {
  const { data: session, status, update } = useSession()
  const token = session?.strapiJwt
  const user = session?.strapiUser
  const userId = session?.strapiUser?.id
  return { status, update, token, user, userId }
}
