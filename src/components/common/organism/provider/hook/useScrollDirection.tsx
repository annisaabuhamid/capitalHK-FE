"use client"
import { debounce } from "lodash"
import { useEffect, useRef, useState } from "react"

export const useScrollDirection = () => {
  const lastScrollTop = useRef(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")

  const scrollHandler = debounce(() => {
    const st = window.scrollY || document.documentElement.scrollTop
    if (st > lastScrollTop.current) {
      // downscroll code
      setScrollDirection("down")
    } else if (st < lastScrollTop.current) {
      // upscroll code
      setScrollDirection("up")
    } // else horizontal scroll
    lastScrollTop.current = st <= 0 ? 0 : st // For Mobile or negative scrolling
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
      scrollHandler.cancel() // cancel any pending debounced calls on cleanup
    }
  }, [])

  return { scrollDirection }
}
