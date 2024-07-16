import { getServerSession } from "next-auth"
import { authOptions } from "@/common/lib/auth/authOptions"

export const getAuth = async () => {
  const session = await getServerSession(authOptions)
  return session
}
