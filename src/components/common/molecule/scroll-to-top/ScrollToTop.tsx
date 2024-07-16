import { debounce, throttle } from "lodash"
import React, { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { IconBaseProps, IconType } from "react-icons/lib"
import { cn } from "@/components/ui/utils"

type Props = {
  Icon?: IconType
  iconProps?: IconBaseProps
  iconButtonProps?: React.HTMLAttributes<HTMLDivElement>
}

function ScrollToTop({ Icon = FaArrowRight, iconProps, iconButtonProps }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const debouncedToggleVisibility = throttle(toggleVisibility, 500)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", debouncedToggleVisibility)

    return () => {
      window.removeEventListener("scroll", debouncedToggleVisibility)
      debouncedToggleVisibility.cancel()
    }
  }, [debouncedToggleVisibility])

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 z-[50] transition-opacity duration-300 ease-linear",
        isVisible ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="inline-flex items-center text-white drop-shadow-md"
      >
        <div className="relative">
          {/* <div className="w-12 h-12 left-0 top-[0.44px] absolute bg-white rounded-full shadow" /> */}
          <div className="group fixed bottom-0 right-0 z-[100] flex items-end  mt-5 mr-5 justify-end rounded-full">
            <svg width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_1200_28507)">
                <circle cx="42" cy="38.875" r="24" fill="white" />
              </g>
              <path
                d="M51.2992 43.8999C51.0492 44.1499 50.7532 44.2749 50.4112 44.2749C50.0692 44.2749 49.7736 44.1499 49.5242 43.8999L42.1992 36.5749L34.8492 43.9249C34.6159 44.1582 34.3242 44.2749 33.9742 44.2749C33.6242 44.2749 33.3242 44.1499 33.0742 43.8999C32.8242 43.6499 32.6992 43.3539 32.6992 43.0119C32.6992 42.6699 32.8242 42.3742 33.0742 42.1249L41.4992 33.7249C41.5992 33.6249 41.7076 33.5539 41.8242 33.5119C41.9409 33.4699 42.0659 33.4492 42.1992 33.4499C42.3326 33.4499 42.4576 33.4709 42.5742 33.5129C42.6909 33.5549 42.7992 33.6256 42.8992 33.7249L51.3242 42.1499C51.5576 42.3832 51.6742 42.6709 51.6742 43.0129C51.6742 43.3549 51.5492 43.6506 51.2992 43.8999Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_dd_1200_28507"
                  x="0"
                  y="0.875"
                  width="84"
                  height="84"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1200_28507" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.270833 0 0 0 0 0.0880208 0 0 0 0 0.0880208 0 0 0 0.04 0"
                  />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1200_28507" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_1200_28507" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.108333 0 0 0 0 0.0121875 0 0 0 0 0.0121875 0 0 0 0.07 0"
                  />
                  <feBlend mode="normal" in2="effect1_dropShadow_1200_28507" result="effect2_dropShadow_1200_28507" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1200_28507" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </button>
    </div>
  )
}

export default ScrollToTop
