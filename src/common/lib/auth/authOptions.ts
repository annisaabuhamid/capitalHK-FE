import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { doLogin } from "@/common/utils/data/mutations/doLogin"

export interface User {
  jwt: string
}
// https://github.com/nextauthjs/next-auth/discussions/2762
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt(params) {
      const { account, token, user } = params
      if (account?.type === "credentials") {
        token.strapiJwt = user.strapiJwt
        token.strapiUser = user.strapiUser
      }
      return token
    },
    async session({ session, token }) {
      session.strapiJwt = token.strapiJwt
      session.strapiUser = token.strapiUser
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          type: "text",
        },
        password: { type: "password" },
        recaptchaToken: { type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials.password) {
          return null
        }
        const data = await doLogin(credentials.identifier, credentials.password, credentials.recaptchaToken)
        if (!data) return null
        return {
          id: data.user.id ?? "",
          strapiJwt: data.jwt,
          strapiUser: data.user,
        }
      },
    }),
  ],
}
