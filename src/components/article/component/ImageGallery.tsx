"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useRef, useState } from "react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ComponentArticleImageGallery } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import { cn } from "@/components/ui/utils"
import "swiper/css"
import "swiper/css/navigation"

type Props = {
  data: ComponentArticleImageGallery
}

const ImageGallery = ({ data }: Props) => {
  const swiperRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  let Images = data.ImageGallery

  const handleSlideChange = (swiper: { realIndex: React.SetStateAction<number> }) => {
    setCurrentSlide(swiper.realIndex)
  }

  return (
    <div className="pb-3 mt-9">
      <div className="hidden md:block">
        <Swiper
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          modules={[Navigation]}
          className={"image-gallery-carousel"}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          speed={500}
          centeredSlides={true}
        >
          {currentSlide === 0 ? (
            <div className={"swiper-button image-swiper-button-next flex  items-center border rounded-sm mr-[24px] "}>
              <div
                className={
                  " w-[108px] h-[62px] px-3 pt-4 pb-3 bg-white rounded flex-col justify-start items-end gap-1 inline-flex"
                }
              >
                <div className={"justify-end items-center gap-1 inline-flex"}>
                  <div className={"justify-end items-center gap-1 flex"}>
                    <div className={"flex-col justify-start items-end gap-1 inline-flex"}>
                      <div className="justify-start items-center gap-1 inline-flex">
                        <div
                          className={cn(
                            "text-xs font-bold leading-none text-secondary-700",
                            currentSlide === 0 ? "" : "hidden"
                          )}
                        >
                          閱覽圖片
                        </div>
                      </div>
                      <div
                        className={cn(
                          currentSlide === 0 ? "text-[10px] font-normal  leading-[14px] text-secondary-800" : "hidden"
                        )}
                      >
                        {Images?.length}張圖片
                      </div>
                    </div>
                  </div>
                  <div className={"w-8 h-8 relative"}>
                    <div className={"w-4 h-4 -left-[20px] -top-[14px] absolute"}>
                      {currentSlide === 0 ? (
                        <svg width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_dd_3882_5007)">
                            <circle cx="34" cy="30.3301" r="16" fill="#2D2D2D" />
                          </g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.8555 24.9968H31.5221V27.6635H28.8555V24.9968ZM28.8555 28.9968H31.5221V31.6635H28.8555V28.9968ZM31.5221 32.9968H28.8555V35.6635H31.5221V32.9968ZM32.8555 24.9968H35.5221V27.6635H32.8555V24.9968ZM35.5221 28.9968H32.8555V31.6635H35.5221V28.9968ZM32.8555 32.9968H35.5221V35.6635H32.8555V32.9968ZM39.5221 24.9968H36.8555V27.6635H39.5221V24.9968ZM36.8555 28.9968H39.5221V31.6635H36.8555V28.9968ZM39.5221 32.9968H36.8555V35.6635H39.5221V32.9968Z"
                            fill="white"
                          />
                          <defs>
                            <filter
                              id="filter0_dd_3882_5007"
                              x="0"
                              y="0.330078"
                              width="68"
                              height="68"
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
                              <feMorphology
                                radius="8"
                                operator="dilate"
                                in="SourceAlpha"
                                result="effect1_dropShadow_3882_5007"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.270833 0 0 0 0 0.0880208 0 0 0 0 0.0880208 0 0 0 0.04 0"
                              />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3882_5007" />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feMorphology
                                radius="2"
                                operator="dilate"
                                in="SourceAlpha"
                                result="effect2_dropShadow_3882_5007"
                              />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.108333 0 0 0 0 0.0121875 0 0 0 0 0.0121875 0 0 0 0.07 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_3882_5007"
                                result="effect2_dropShadow_3882_5007"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_3882_5007"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      ) : (
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="10"
                            viewBox="0 0 13 10"
                            fill="none"
                          >
                            <path
                              d="M0.277343 5C0.277343 4.93021 0.304827 4.86327 0.353749 4.81392C0.40267 4.76457 0.469023 4.73685 0.538208 4.73685L11.3863 4.73685L7.13614 0.449475C7.08719 0.400097 7.05969 0.333127 7.05969 0.263296C7.05969 0.193466 7.08719 0.126495 7.13614 0.0771175C7.18509 0.02774 7.25148 -4.39375e-07 7.3207 -4.33323e-07C7.38993 -4.27272e-07 7.45632 0.0277401 7.50526 0.0771175L12.2008 4.81382C12.2251 4.83826 12.2443 4.86728 12.2575 4.89923C12.2706 4.93117 12.2773 4.96542 12.2773 5C12.2773 5.03458 12.2706 5.06883 12.2575 5.10077C12.2443 5.13272 12.2251 5.16174 12.2008 5.18618L7.50526 9.92288C7.48103 9.94733 7.45225 9.96673 7.42059 9.97996C7.38892 9.99319 7.35498 10 7.3207 10C7.28643 10 7.25248 9.99319 7.22082 9.97996C7.18915 9.96673 7.16038 9.94733 7.13614 9.92288C7.1119 9.89843 7.09268 9.86941 7.07956 9.83746C7.06644 9.80552 7.05969 9.77128 7.05969 9.7367C7.05969 9.70213 7.06644 9.66789 7.07956 9.63594C7.09268 9.604 7.1119 9.57497 7.13614 9.55052L11.3863 5.26315L0.538208 5.26315C0.469023 5.26315 0.40267 5.23542 0.353749 5.18607C0.304827 5.13672 0.277343 5.06979 0.277343 5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={
                "swiper-button image-swiper-button-next flex h-[80px] items-center px-6 py-2 opacity-70 bg-secondary-900 next "
              }
            >
              <div className={"flex h-[80px] items-center opacity-70 bg-secondary-900 next "}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                  <path
                    d="M0.277343 5C0.277343 4.93021 0.304827 4.86327 0.353749 4.81392C0.40267 4.76457 0.469023 4.73685 0.538208 4.73685L11.3863 4.73685L7.13614 0.449475C7.08719 0.400097 7.05969 0.333127 7.05969 0.263296C7.05969 0.193466 7.08719 0.126495 7.13614 0.0771175C7.18509 0.02774 7.25148 -4.39375e-07 7.3207 -4.33323e-07C7.38993 -4.27272e-07 7.45632 0.0277401 7.50526 0.0771175L12.2008 4.81382C12.2251 4.83826 12.2443 4.86728 12.2575 4.89923C12.2706 4.93117 12.2773 4.96542 12.2773 5C12.2773 5.03458 12.2706 5.06883 12.2575 5.10077C12.2443 5.13272 12.2251 5.16174 12.2008 5.18618L7.50526 9.92288C7.48103 9.94733 7.45225 9.96673 7.42059 9.97996C7.38892 9.99319 7.35498 10 7.3207 10C7.28643 10 7.25248 9.99319 7.22082 9.97996C7.18915 9.96673 7.16038 9.94733 7.13614 9.92288C7.1119 9.89843 7.09268 9.86941 7.07956 9.83746C7.06644 9.80552 7.05969 9.77128 7.05969 9.7367C7.05969 9.70213 7.06644 9.66789 7.07956 9.63594C7.09268 9.604 7.1119 9.57497 7.13614 9.55052L11.3863 5.26315L0.538208 5.26315C0.469023 5.26315 0.40267 5.23542 0.353749 5.18607C0.304827 5.13672 0.277343 5.06979 0.277343 5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          )}

          <div
            className={cn(
              "swiper-button image-swiper-button-prev ",
              currentSlide === 0 ? "!hidden" : "flex h-[80px] items-center px-6 py-2 opacity-70"
            )}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path
                  d="M12.2773 5C12.2773 5.06979 12.2499 5.13673 12.2009 5.18608C12.152 5.23543 12.0857 5.26315 12.0165 5.26315H1.1684L5.41855 9.55052C5.4675 9.5999 5.495 9.66687 5.495 9.7367C5.495 9.80653 5.4675 9.8735 5.41855 9.92288C5.3696 9.97226 5.30321 10 5.23399 10C5.16476 10 5.09837 9.97226 5.04942 9.92288L0.353852 5.18618C0.329598 5.16174 0.310357 5.13272 0.297229 5.10077C0.284101 5.06883 0.277344 5.03458 0.277344 5C0.277344 4.96542 0.284101 4.93117 0.297229 4.89923C0.310357 4.86728 0.329598 4.83826 0.353852 4.81382L5.04942 0.0771176C5.07366 0.0526683 5.10243 0.033274 5.1341 0.0200421C5.16577 0.00681024 5.19971 0 5.23399 0C5.26826 0 5.3022 0.00681024 5.33387 0.0200421C5.36554 0.033274 5.39431 0.0526683 5.41855 0.0771176C5.44279 0.101567 5.46201 0.130593 5.47513 0.162537C5.48825 0.194482 5.495 0.22872 5.495 0.263296C5.495 0.297873 5.48825 0.332111 5.47513 0.364056C5.46201 0.396 5.44279 0.425026 5.41855 0.449475L1.1684 4.73685H12.0165C12.0857 4.73685 12.152 4.76457 12.2009 4.81392C12.2499 4.86328 12.2773 4.93021 12.2773 5Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="swiper-wrapper">
            {Images?.map((image, index) => (
              <SwiperSlide key={index}>
                {image?.url !== null ? (
                  <div className="mx-auto">
                    <Link href={image?.url ?? ""}>
                      <Image
                        src={image?.image?.data?.attributes?.url ?? ""}
                        width={image?.image?.data?.attributes?.width ?? undefined}
                        height={image?.image?.data?.attributes?.height ?? undefined}
                        alt={image?.image?.data?.attributes?.alternativeText || "alt not available"}
                        quality={IMAGE_QUALITY}
                        className="h-full w-full"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="mx-auto">
                    <Image
                      src={image?.image?.data?.attributes?.url ?? ""}
                      width={image?.image?.data?.attributes?.width ?? undefined}
                      height={image?.image?.data?.attributes?.height ?? undefined}
                      alt={image?.image?.data?.attributes?.alternativeText || "alt not available"}
                      quality={IMAGE_QUALITY}
                      className="h-full w-full"
                    />
                  </div>
                )}
                <div
                  className={cn(
                    currentSlide !== 0
                      ? "w-16 h-10 p-3 bg-white flex-col justify-start items-start gap-3 inline-flex absolute bottom-[68px] -left-0"
                      : "hidden"
                  )}
                >
                  <div className="w-10 h-4 justify-start items-center gap-1 inline-flex">
                    <div className="w-4 h-4 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.13379 2.66675H5.80046V5.33341H3.13379V2.66675ZM3.13379 6.66675H5.80046V9.33341H3.13379V6.66675ZM5.80046 10.6667H3.13379V13.3334H5.80046V10.6667ZM7.13379 2.66675H9.80046V5.33341H7.13379V2.66675ZM9.80046 6.66675H7.13379V9.33341H9.80046V6.66675ZM7.13379 10.6667H9.80046V13.3334H7.13379V10.6667ZM13.8005 2.66675H11.1338V5.33341H13.8005V2.66675ZM11.1338 6.66675H13.8005V9.33341H11.1338V6.66675ZM13.8005 10.6667H11.1338V13.3334H13.8005V10.6667Z"
                          fill="#1A1818"
                        />
                      </svg>
                    </div>
                    <div className="text-stone-900 text-[10px] font-normal font-noto leading-[14px]">
                      {index >= 1 && Images && Images.length !== undefined && `${index}/${Images.length - 1}`}
                    </div>
                  </div>
                </div>

                <div className="h-full pt-[12px] text-xl  text-[#343434] font-normal">{image?.title}</div>
                <div className="text-base pt-[8px] text-[#343434] font-normal ">{image?.description}</div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/** Mobile view */}

      {Images?.map((image, key) => (
        <div key={key} className=" md:hidden">
          <div
            className={cn(
              key === 0 ? " text-base font-normal md:hidden" : "pt-[36px] pb-[12px]  text-base font-normal md:hidden"
            )}
          >
            {key >= 1 && Images && Images.length !== undefined && `${key}/${Images.length - 1}`}
          </div>
          {image?.url !== null ? (
            <Link href={`${image?.url}`} target="_blank">
              <div className="block w-full">
                <Image
                  src={image?.image?.data?.attributes?.url ?? ""}
                  width={image?.image?.data?.attributes?.width ?? undefined}
                  height={image?.image?.data?.attributes?.height ?? undefined}
                  alt={image?.image?.data?.attributes?.alternativeText || "alt not available"}
                  className=""
                />
              </div>
            </Link>
          ) : (
            <div className="block w-full">
              <Image
                src={image?.image?.data?.attributes?.url ?? ""}
                width={image?.image?.data?.attributes?.width ?? undefined}
                height={image?.image?.data?.attributes?.height ?? undefined}
                alt={image?.image?.data?.attributes?.alternativeText || "alt not available"}
                className=""
              />
            </div>
          )}
          <div className="">
            <div className="pt-[12px] text-xl  text-[#343434] font-medium md:hidden">{image?.title}</div>
            <div className="text-base pt-[8px] text-[#343434] md:hidden">{image?.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ImageGallery
