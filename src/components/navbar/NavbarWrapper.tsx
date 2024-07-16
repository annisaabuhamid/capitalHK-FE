"use client"
import { ReactNode, useEffect, useRef, useState } from "react"
// import { useInView } from "react-intersection-observer"
import { useScrollPercentage } from "react-scroll-percentage"
import { useScrollDirection } from "@/components/common/organism/provider/hook/useScrollDirection"
import useWindowSize from "@/utils/useWindowSize"

type Props = { children: ReactNode }

function NavbarWrapper({ children }: Props) {
  // const { ref: inViewRef, inView, entry } = useInView()
  const { scrollDirection } = useScrollDirection()
  const [scrollPercentRef, percentage] = useScrollPercentage()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isHomepage = typeof window !== "undefined" && window.location.pathname === "/"
  const HomepageScrollThreshold = 330
  const ArticleScrollThreshold = 100
  const MobileScrollThreshold = 700
  let { isMobile, isTablet, isDesktop } = useWindowSize()
  const [hideHeader, setHideHeader] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      // const threshold = isHomepage ? HomepageScrollThreshold : (isTablet ? MobileScrollThreshold : ArticleScrollThreshold);
      let threshold
      if (isHomepage && (isMobile || isTablet)) {
        threshold = MobileScrollThreshold
      } else if (isHomepage && isDesktop) {
        threshold = HomepageScrollThreshold
      } else {
        threshold = ArticleScrollThreshold
      }

      if (scrollDirection === "down" && currentScrollPosition >= threshold) {
        // Hide the navbar
        setHideHeader(false)
      } else {
        // Show the navbar
        setHideHeader(true)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [scrollDirection, ArticleScrollThreshold])

  return (
    <div
      className={`navbar ${
        hideHeader
          ? "transition-all opacity-100 duration-300 ease-in-out"
          : "duration-300 transition ease-in-out -translate-y-full"
      }`}
    >
      <div className="navbar-container" ref={wrapperRef}>
        <div className="navbar-inner-container" ref={scrollPercentRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default NavbarWrapper
