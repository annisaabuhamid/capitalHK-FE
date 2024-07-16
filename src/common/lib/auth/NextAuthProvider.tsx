"use client"

import { SessionProvider } from "next-auth/react"
import { ReCaptchaProvider } from "next-recaptcha-v3"

type Props = {
  children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ReCaptchaProvider>{children}</ReCaptchaProvider>
    </SessionProvider>
  )
}
