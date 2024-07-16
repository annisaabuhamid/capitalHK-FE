"use client"

import NProgress from "nprogress"
import "nprogress/nprogress.css"

import { useEffect } from "react"

type Props = {}
//   minimum: 0.3,
//   easing: "ease",
//   speed: 500,
//   trickle: false,
//   showSpinner: false,

function ArticleProgressBar({}: Props) {
  const delay = 500
  useEffect(() => {
    NProgress.configure({
      minimum: 0,
      trickle: false,
      showSpinner: false,
      trickleSpeed: 0,
      easing: "ease",
      speed: 0,
    })

    let timer: NodeJS.Timeout

    const startProgress = () => {
      timer = setTimeout(NProgress.start, delay)
    }

    const stopProgress = () => {
      clearTimeout(timer)
      NProgress.done()
    }

    startProgress()
    return stopProgress
  }, [])

  useEffect(() => {
    const getScrollPercent = () => {
      const h = document.documentElement
      const b = document.body
      return (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight)
    }
    const handleScroll = () => {
      const scrollPercent = getScrollPercent()
      NProgress.set(Math.min(scrollPercent, 0.9999))
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

export default ArticleProgressBar
