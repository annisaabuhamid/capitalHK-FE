"use client"

import { debounce } from "lodash"
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

const useMegaMenuProviderValue = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [homeBannerHeight, setHomeBannerHeight] = useState(0)
  const debounceSetScrollHeight = useCallback(debounce(setScrollHeight, 100), [])
  const { homeBannerRef } = useGlobalContext()
  useEffect(() => {
    const calculateScrollFromTop = () => {
      const currentScrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      const homeBanner = homeBannerRef.current
      const homeBannerHeight = homeBanner?.getBoundingClientRect().height ?? 0
      setHomeBannerHeight(homeBannerHeight)
      return currentScrollPosition - homeBannerHeight
    }
    const setNewScrollHeight = () => {
      const scrollHeight = calculateScrollFromTop()
      debounceSetScrollHeight(scrollHeight)
    }
    setNewScrollHeight()
    window.addEventListener("scroll", setNewScrollHeight)
    return () => {
      window.removeEventListener("scroll", setNewScrollHeight)
    }
  }, [homeBannerRef, debounceSetScrollHeight])

  const scrollHeightPositive = Math.max(0, scrollHeight)

  return { scrollHeight, homeBannerHeight, scrollHeightPositive }
}

type MegaMenuContextType = ReturnType<typeof useMegaMenuProviderValue>

const initialState = {} as MegaMenuContextType

export const MegaMenuContext = createContext<MegaMenuContextType>(initialState)

export const MegaMenuProvider = ({ children }: { children: ReactNode }) => {
  const value = useMegaMenuProviderValue()

  return <MegaMenuContext.Provider value={value}>{children}</MegaMenuContext.Provider>
}

export const useMegaMenuContext = () => {
  const context = useContext(MegaMenuContext)
  if (context === undefined) {
    throw new Error("useMegaMenuContext must be used within a MegaMenuProvider")
  }
  return context
}
