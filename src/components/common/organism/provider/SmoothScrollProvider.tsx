// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useLayoutEffect } from "react"
import { Gsap, ScrollSmoother, ScrollTrigger } from "@/components/common/organism/provider/plugin"
import { smoothScroll } from "@/utils/smoothScroll"
Gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function SmoothScrollProvider() {
  useLayoutEffect(() => {
    const ctx = Gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    smoothScroll()
  }, [])

  return null
}

export default SmoothScrollProvider
