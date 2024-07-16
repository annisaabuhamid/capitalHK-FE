import { useEffect, useState } from "react"

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

interface UseWindowSizeResult {
  windowSize: WindowSize
  isMobile: boolean
  isTablet: boolean
  isTabletDesktop: boolean
  isDesktop: boolean
}

const useWindowSize = (): UseWindowSizeResult => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (windowSize.width === window.innerWidth) return
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [windowSize.width]) // Empty array ensures that effect is only run on mount

  return {
    windowSize,
    isMobile: typeof windowSize.width === "number" && windowSize.width < 768,
    isTablet: typeof windowSize.width === "number" && windowSize.width >= 640 && windowSize.width < 1024,
    isTabletDesktop: typeof windowSize.width === "number" && windowSize.width >= 768,
    isDesktop: typeof windowSize.width === "number" && windowSize.width > 1023,
  }
}

export default useWindowSize
