import NextAuth from "next-auth"
import { StrapiUser } from "@/common/types"

declare module "next-auth" {
  interface User {
    strapiJwt?: string | null /** The user's jwt from strapi. */
    strapiUser: StrapiUser
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    strapiJwt?: string | null
    strapiUser?: StrapiUser
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    strapiJwt?: string | null
    strapiUser?: StrapiUser
  }
}
