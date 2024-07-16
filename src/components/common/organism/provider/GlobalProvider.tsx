"use client"

// import dynamic from "next/dynamic"
import { createContext, ReactNode, useContext, useMemo, useRef } from "react"
import { ToastBar, Toaster } from "react-hot-toast"
import { useGlobalQuery } from "@/common/lib/graphql/generated/graphql"
import useAuthStatusWatcher from "@/components/auth/useAuthStatusWatcher"
import { useBookmarkItems } from "@/components/bookmark/hook/useBookmarkItems"
import { ErrorIcon, SuccessIcon } from "@/components/common/atom/toast/ToastIcon"
import MobileMenu from "@/components/common/molecule/menu/mobile-menu/MobileMenu"
import ScrollToTop from "@/components/common/molecule/scroll-to-top/ScrollToTop"
import { useApolloDev } from "@/components/common/organism/provider/hook/useApolloDev"
import { useUIState } from "@/components/common/organism/provider/hook/useUIState"
import LenisProvider from "@/components/common/organism/provider/LenisProvider"
import HomeBanner from "@/components/home/HomeBanner"
// const SmoothScrollProvider = dynamic(() => import(`@/components/common/organism/provider/SmoothScrollProvider`), {
//   ssr: false, // This will disable server-side rendering (SSR)
// })
// interface GlobalContextState {
//   globalData?: GlobalData

//   scrollDirection: "up" | "down"

//   bookmarkItems: BookmarkItemsType
//   bookmarkItemsLoading: boolean
//   refetchBookmarks: RefetchFunction<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>

//   menuButtonRef: RefObject<HTMLButtonElement> | null
//   // ui state
//   megaMenuIsOpen: boolean
//   setMegaMenuIsOpen: Dispatch<SetStateAction<boolean>>
//   loginDialogIsOpen: boolean
//   setLoginDialogIsOpen: Dispatch<SetStateAction<boolean>>
// }

const useGlobalContextProviderValue = () => {
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const homeBannerRef = useRef<HTMLDivElement>(null)
  const { data } = useGlobalQuery({ ssr: false })
  const globalData = data?.global?.data

  useAuthStatusWatcher()
  useApolloDev()
  const uiHookValues = useUIState()
  const bookmarkHookValues = useBookmarkItems()

  return useMemo(
    () => ({
      menuButtonRef,
      homeBannerRef,
      globalData,
      ...uiHookValues,
      ...bookmarkHookValues,
    }),
    [globalData, uiHookValues, bookmarkHookValues]
  )
}

type GlobalContextType = ReturnType<typeof useGlobalContextProviderValue>

const initialState = {} as GlobalContextType

export const GlobalContext = createContext<GlobalContextType>(initialState)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const value = useGlobalContextProviderValue()

  return (
    <GlobalContext.Provider value={value}>
      <HomeBanner />
      {/* <SmoothScrollProvider /> */}
      <LenisProvider>{children}</LenisProvider>

      <MobileMenu />
      <ScrollToTop />

      <Toaster
        toastOptions={{
          success: {
            icon: <SuccessIcon />,

            style: {
              color: "#0B8D00",
              borderRadius: "0",
            },
          },
          error: {
            icon: <ErrorIcon />,
            style: {
              color: "#DA0202",
              borderRadius: "0",
            },
          },
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              boxShadow: "0px 2px 4px 2px rgba(28, 3, 3, 0.07), 0px 4px 10px 8px rgba(69, 22,22, 0.04)",
              padding: "2px 4px",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          ></ToastBar>
        )}
      </Toaster>

      {/* <AppProgressBar
        height="4px"
        color="#E30909"
        options={{ showSpinner: false, speed: 1000, trickleSpeed: 500, easing: "ease", trickle: true }}
        shallowRouting
      /> */}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider")
  }
  return context
}
