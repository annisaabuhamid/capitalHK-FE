"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { ComponentArticlePictureWithTag } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import useWindowSize from "@/utils/useWindowSize"

interface Marker {
  id: number | undefined
  positionX: string | undefined
  positionY: string | undefined
  popoverPosition: string | undefined
  product: {
    data: {
      attributes: {
        brand: string
        name: string
        description: string
        retailPriceHKD: number
        specialPriceHKD: number
        url: string
        image: {
          data: {
            attributes: {
              url: string
              width: number
              height: number
              alternativeText: string
            }
          }
        }
      }
    }
  }
}
type Props = {
  data: ComponentArticlePictureWithTag
}

const ShoppableContent = ({ data }: Props) => {
  let imageURL = data.Image?.data?.attributes?.url ?? ""
  let imageWidth = data.Image?.data?.attributes?.width ?? undefined
  let imageHeight = data.Image?.data?.attributes?.height ?? undefined
  let imageAltText = data.Image?.data?.attributes?.alternativeText || "alt not available"
  let tags = data.tags ?? undefined
  let { isMobile } = useWindowSize()
  const [isClicked, setIsClicked] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const [markers, setMarkers] = useState<Marker[]>([])
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null)

  useEffect(() => {
    const calculateMarkerPositions = () => {
      if (!tags) {
        return
      }

      const markersWithPositions: Marker[] = (data?.tags || [])
        .map((tag, index) => {
          const positionX = tag?.PositionX ?? undefined
          const positionY = tag?.PositionY ?? undefined
          const tagID = tag?.id ?? undefined
          if (positionX === undefined || positionY === undefined) {
            return null // Skip this marker if PositionX or PositionY is undefined
          }
          const currentRef = ref?.current

          if (!currentRef) {
            return null // Skip this marker if ref.current is null or undefined
          }
          const popoverX =
            ref.current?.offsetWidth - (positionX / 100) * ref.current.offsetWidth < 350
              ? "translateX(calc(-100% + 38px))"
              : ""
          const popoverY =
            ref.current.offsetHeight - (positionY / 100) * ref.current.offsetHeight < 140
              ? "translateY(calc(-100% + 28px))"
              : ""
          const popoverPosition = [popoverX, popoverY].filter(Boolean).join(" ")

          const positionXPercent =
            ref.current.offsetWidth - (positionX / 100) * ref.current.offsetWidth < 58
              ? "calc(100% - 88px)"
              : `${positionX}%`
          const positionYPercent =
            ref.current.offsetHeight - (positionY / 100) * ref.current.offsetHeight < 58
              ? "calc(100% - 88px)"
              : `${positionY}%`

          return {
            id: tagID,
            positionX: positionXPercent,
            positionY: positionYPercent,
            popoverPosition: popoverPosition,
            product: tag?.product,
          }
        })
        .filter(Boolean) as Marker[]

      setMarkers(markersWithPositions)
    }

    calculateMarkerPositions()

    window.addEventListener("resize", calculateMarkerPositions)
    return () => window.removeEventListener("resize", calculateMarkerPositions)
  }, [tags, imageHeight, imageWidth])

  const [clickedMarkers, setClickedMarkers] = useState<number | null>(null)
  const handleMarkerClick = (event: React.MouseEvent, marker: Marker, markerIndex: number) => {
    event.preventDefault()
    setIsClicked(true)
    setClickedMarkers(markerIndex)
    setSelectedMarker(marker)
  }

  const closePopup = (event: React.MouseEvent) => {
    event.preventDefault()
    setIsClicked(false)
    setClickedMarkers(null)
    setSelectedMarker(null)
  }

  return (
    <div className="relative max-w-full overflow-hidden mt-9">
      <div ref={ref} className="relative">
        {data && (
          <div className="w-full object-contain">
            <Image
              src={imageURL}
              width={imageWidth}
              height={imageHeight}
              alt={imageAltText}
              quality={IMAGE_QUALITY}
              className="w-full object-contain"
            />
          </div>
        )}
        {markers.map((marker, index) => (
          <div key={index}>
            <div
              className={`marker absolute cursor-pointer transition-opacity duration-500 transform ${index} ${
                isClicked && clickedMarkers === index ? "ease-in opacity-0" : "ease-out opacity-100 "
              }`}
              id={`test-${index}`}
              style={{
                left: `${marker.positionX}`,
                top: `${marker.positionY}`,
              }}
              onClick={(event) => handleMarkerClick(event, marker, index)}
            >
              <div className=" justify-start items-center inline-flex">
                <div className="w-11 h-8 p-1 bg-gray-200 bg-opacity-50 rounded-[58px] justify-start items-center inline-flex">
                  <div className="bg-white rounded-xl shadow flex-col justify-start items-start inline-flex">
                    <div className="p-1 justify-start items-center inline-flex">
                      <div className="justify-start items-center gap-1 flex">
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-4 h-4 relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M2.66699 14.6605V3.99382H5.33366C5.33366 3.26048 5.59477 2.6327 6.11699 2.11048C6.63921 1.58826 7.26699 1.32715 8.00033 1.32715C8.73366 1.32715 9.36144 1.58826 9.88366 2.11048C10.4059 2.6327 10.667 3.26048 10.667 3.99382H13.3337V14.6605H2.66699ZM8.00033 2.66048C7.63366 2.66048 7.31966 2.79115 7.05833 3.05248C6.79699 3.31381 6.66655 3.62759 6.66699 3.99382H9.33366C9.33366 3.62715 9.20299 3.31315 8.94166 3.05182C8.68033 2.79048 8.36655 2.66004 8.00033 2.66048ZM5.33366 7.32715H6.66699V5.32715H5.33366V7.32715ZM9.33366 7.32715H10.667V5.32715H9.33366V7.32715Z"
                                fill="#2D2D2D"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="w-2 h-2 relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <g clipPath="url(#clip0_3747_1678)">
                              <path
                                d="M2.38379 7.02715C2.30046 6.94381 2.25879 6.84515 2.25879 6.73115C2.25879 6.61715 2.30046 6.51859 2.38379 6.43548L4.82546 3.99381L2.37546 1.54382C2.29768 1.46604 2.25879 1.36882 2.25879 1.25215C2.25879 1.13548 2.30046 1.03548 2.38379 0.952148C2.46712 0.868815 2.56579 0.827148 2.67979 0.827148C2.79379 0.827148 2.89234 0.868815 2.97546 0.952148L5.77546 3.76048C5.80879 3.79381 5.83246 3.82993 5.84646 3.86881C5.86046 3.9077 5.86734 3.94937 5.86712 3.99381C5.86712 4.03826 5.86012 4.07993 5.84612 4.11881C5.83212 4.1577 5.80857 4.19381 5.77546 4.22715L2.96712 7.03548C2.88934 7.11326 2.79346 7.15215 2.67946 7.15215C2.56546 7.15215 2.4669 7.11048 2.38379 7.02715Z"
                                fill="#848484"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3747_1678">
                                <rect width="8" height="8" fill="white" transform="translate(0 -0.00634766)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`popup absolute z-20 bg-secondary-0  rounded  cursor-pointer
             transition-opacity duration-1000 ease-out  ${
               isClicked && clickedMarkers === index ? "ease-out opacity-100 max-w-[180px] p-3" : " opacity-0 ease-in"
             }`}
              style={{
                left: isMobile ? "50%" : `${marker?.positionX}`,
                top: isMobile ? "50%" : `${marker?.positionY}`,
                transform: `${isMobile ? "translate(-50%, -50%)" : selectedMarker?.popoverPosition}`,
              }}
              //  onClick={(event) => (isClicked && clickedMarkers===index && closePopup(event) )}
              onClick={(event) =>
                isClicked && clickedMarkers === index ? closePopup(event) : handleMarkerClick(event, marker, index)
              }
              id={`test-${index}`}
            >
              {selectedMarker && (
                <>
                  <div className="absolute rounded-full bg-zinc-800 shadow w-4 h-4 text-white -right-2 -top-2 z-20">
                    <button onClick={(event) => closePopup(event)} aria-label="Close">
                      <div className="absolute top-1 right-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M6.33366 2.13675L5.86366 1.66675L4.00033 3.53008L2.13699 1.66675L1.66699 2.13675L3.53033 4.00008L1.66699 5.86341L2.13699 6.33342L4.00033 4.47008L5.86366 6.33342L6.33366 5.86341L4.47033 4.00008L6.33366 2.13675Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-col self-center">
                      <p className="text-secondary-600 text-xs font-medium md:font-normal uppercase leading-4 ">
                        {selectedMarker?.product?.data?.attributes?.brand}
                      </p>
                      <p className="font-medium md:font-bold text-sm tracking-tighter font-noto text-secondary-900 pb-[6px] line-clamp-2 leading-[22px] ">
                        {selectedMarker?.product?.data?.attributes?.name}
                      </p>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <div className="text-sm font-normal text-secondary-900">
                            HKD$
                            {selectedMarker.product.data.attributes.retailPriceHKD
                              .toFixed(2)
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </div>
                          <div className="flex justify-center items-center pl-1">
                            <Link href={selectedMarker.product.data.attributes.url ?? ""}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M3.5752 10.55C3.4502 10.425 3.3877 10.277 3.3877 10.106C3.3877 9.935 3.4502 9.78717 3.5752 9.6625L7.2377 6L3.5627 2.325C3.44603 2.20833 3.3877 2.0625 3.3877 1.8875C3.3877 1.7125 3.4502 1.5625 3.5752 1.4375C3.7002 1.3125 3.8482 1.25 4.0192 1.25C4.1902 1.25 4.33803 1.3125 4.4627 1.4375L8.6627 5.65C8.7127 5.7 8.7482 5.75417 8.7692 5.8125C8.7902 5.87083 8.80053 5.93333 8.8002 6C8.8002 6.06667 8.7897 6.12917 8.7687 6.1875C8.7477 6.24583 8.71236 6.3 8.6627 6.35L4.4502 10.5625C4.33353 10.6792 4.1897 10.7375 4.0187 10.7375C3.8477 10.7375 3.69986 10.675 3.5752 10.55Z"
                                  fill="#DA0202"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div
                          className={`${
                            selectedMarker.product.data.attributes.specialPriceHKD != null
                              ? "text-secondary-400 text-[10px] line-through"
                              : "text-sm font-normal text-secondary-900"
                          }`}
                        >
                          HKD$
                          {selectedMarker.product.data.attributes.specialPriceHKD
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ShoppableContent
