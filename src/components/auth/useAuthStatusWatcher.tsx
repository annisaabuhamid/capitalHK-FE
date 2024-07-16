"use client"

import { useEffect } from "react"
import toast from "react-hot-toast"
import { useSessionStorage } from "react-use"
import { useAuth } from "@/common/lib/auth/useAuth"

function useAuthStatusWatcher() {
  const { user, status, token } = useAuth()
  const username = user?.username
  const isUserLoggedIn = !!token && status === "authenticated"

  const [sessionStatus, setSessionStatus] = useSessionStorage<typeof status>("authStatus", "unauthenticated")

  const isSessionStatusAuthenticated = sessionStatus === "authenticated"

  useEffect(() => {
    if (status !== "loading") {
      if (isUserLoggedIn && !isSessionStatusAuthenticated) {
        toast.success(`歡迎回來, ${username || ""}!`)
      }

      if (isUserLoggedIn) {
        setSessionStatus("authenticated")
      } else {
        setSessionStatus("unauthenticated")
      }
    }
  }, [username, isUserLoggedIn, isSessionStatusAuthenticated, setSessionStatus, status])
}

export default useAuthStatusWatcher
