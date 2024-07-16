"use client"

import { useAuth } from "@/common/lib/auth/useAuth"
import { AuthDialog } from "@/components/auth/AuthDialog"
import MyAccountDropdown from "@/components/auth/my-account/MyAccountDropdown"

type Props = { csrfToken?: string; isMegaMenu: string }

function AuthButtons({ csrfToken, isMegaMenu }: Props) {
  const { token, status } = useAuth()

  const isUserLoggedIn = !!token && status === "authenticated"

  return (
    <>
      {isUserLoggedIn ? (
        <div className={isMegaMenu === "true" ? "block" : "hidden lg:block"}>
          <MyAccountDropdown />
        </div>
      ) : (
        <div className="login-button mr-[2px]">
          <AuthDialog csrfToken={csrfToken} />
        </div>
      )}
    </>
  )
}

export default AuthButtons
