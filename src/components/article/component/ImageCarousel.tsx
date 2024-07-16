"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { ComponentArticleImageCarousel, ComponentArticleProductReview } from "@/common/lib/graphql/generated/graphql"
import Link from "next/link"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"

type Props = {
  product?: ComponentArticleProductReview
  data?: ComponentArticleImageCarousel
}

const ImageCarousel = ({ data, product }: Props) => {
  const pagination = { clickable: true }
  let Images

  if (product !== undefined) {
    Images = product?.ImageCarousel || []
  } else {
    Images = data?.ImageCarousel || []
  }
  return (
    <div className={"mt-[36px]"}>
      <Swiper
        centeredSlides={true}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
        className="article-carousel"
        slides-per-view="auto"
        speed={500}
        loop={true}
        navigation={{
          nextEl: ".article-swiper-button-next",
          prevEl: ".article-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <div className="swiper-wrapper">
          {Images.map((datas, index) => (
            <SwiperSlide key={index}>
              {datas?.url !== null ? (
                <Link href={`${datas?.url}`} target="_blank">
                  <div className="mx-auto">
                    <Image
                      src={datas?.image?.data?.attributes?.url ?? ""}
                      width={datas?.image?.data?.attributes?.width ?? undefined}
                      height={datas?.image?.data?.attributes?.height ?? undefined}
                      alt={datas?.image?.data?.attributes?.alternativeText || "alt not available"}
                      quality={IMAGE_QUALITY}
                      className=" max-h-[220px] md:max-h-[480px] w-full object-contain mx-auto"
                    />
                  </div>
                </Link>
              ) : (
                <div className="mx-auto">
                  <Image
                    src={datas?.image?.data?.attributes?.url ?? ""}
                    width={datas?.image?.data?.attributes?.width ?? undefined}
                    height={datas?.image?.data?.attributes?.height ?? undefined}
                    alt={datas?.image?.data?.attributes?.alternativeText || "alt not available"}
                    quality={IMAGE_QUALITY}
                    className="max-h-[220px] md:max-h-[480px] w-full object-contain mx-auto"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </div>
        <div
          className={
            "swiper-button article-swiper-button-prev flex w-[28px] h-[42px] md:w-[48px] md:h-[72px]  justify-center items-center md:px-[17.5px] md:py-2 opacity-70"
          }
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
        <div
          className={
            "swiper-button article-swiper-button-next flex w-[28px] h-[42px] md:w-[48px] md:h-[72px] justify-center md:px-[17.5px] md:py-2  items-center opacity-70 "
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
            <path
              d="M0.277343 5C0.277343 4.93021 0.304827 4.86327 0.353749 4.81392C0.40267 4.76457 0.469023 4.73685 0.538208 4.73685L11.3863 4.73685L7.13614 0.449475C7.08719 0.400097 7.05969 0.333127 7.05969 0.263296C7.05969 0.193466 7.08719 0.126495 7.13614 0.0771175C7.18509 0.02774 7.25148 -4.39375e-07 7.3207 -4.33323e-07C7.38993 -4.27272e-07 7.45632 0.0277401 7.50526 0.0771175L12.2008 4.81382C12.2251 4.83826 12.2443 4.86728 12.2575 4.89923C12.2706 4.93117 12.2773 4.96542 12.2773 5C12.2773 5.03458 12.2706 5.06883 12.2575 5.10077C12.2443 5.13272 12.2251 5.16174 12.2008 5.18618L7.50526 9.92288C7.48103 9.94733 7.45225 9.96673 7.42059 9.97996C7.38892 9.99319 7.35498 10 7.3207 10C7.28643 10 7.25248 9.99319 7.22082 9.97996C7.18915 9.96673 7.16038 9.94733 7.13614 9.92288C7.1119 9.89843 7.09268 9.86941 7.07956 9.83746C7.06644 9.80552 7.05969 9.77128 7.05969 9.7367C7.05969 9.70213 7.06644 9.66789 7.07956 9.63594C7.09268 9.604 7.1119 9.57497 7.13614 9.55052L11.3863 5.26315L0.538208 5.26315C0.469023 5.26315 0.40267 5.23542 0.353749 5.18607C0.304827 5.13672 0.277343 5.06979 0.277343 5Z"
              fill="white"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  )
}
export default ImageCarousel
