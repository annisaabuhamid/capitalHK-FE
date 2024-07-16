"use client"

import Image from "next/image"
import "swiper/css"
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useInterviewListQuery } from "@/common/lib/graphql/generated/graphql"
import { useParams, usePathname } from "next/navigation"
import { renderRootPath } from "@/utils"

const ArticleCelebritySlider = () => {
  const data = useInterviewListQuery()

  const router = usePathname()
  const dynamicRouter = useParams()

  let articles = data.data?.interview?.data?.attributes?.articles?.data
  return (
    <div className="mt-9">
      <div className="w-full my-6 home-celebrity-interview-slider select-none">
        <Swiper
          centeredSlides={true}
          centeredSlidesBounds={true}
          className=""
          // navigation={true}
          navigation={{
            nextEl: ".celebrity-swiper-button-next",
            prevEl: ".celebrity-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Autoplay]}
          watchSlidesProgress={true}
          slidesPerView={3}
          speed={500}
          loop={true}
          spaceBetween={24}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            360: {
              slidesPerView:"auto",
            },
            640: {
              slidesPerView:"auto",
            },
            768: {
              slidesPerView:3,
            },
            1024: {
              slidesPerView:3,
              centeredSlides:true,
              centeredSlidesBounds:true
            },
          }}
        >
          {articles?.slice(0, 4).map((slide, i) => {
            const categories = slide.attributes?.categories
            const catSlug = renderRootPath(router, dynamicRouter, categories)
            const finalHref = `${catSlug}/${slide.attributes?.slug}`
            return (
              <SwiperSlide key={i}>
                <div className="min-w-[200px] max-w-[240px] h-[323.25px] relative before:absolute before:z-10 before:h-full before:w-full before:bg-gradient-carousel bg-black/30">
                  {slide.attributes?.Interviewee?.portrait && (
                    <Image
                      className="object-cover h-full w-full"
                      src={slide.attributes?.Interviewee?.portrait.data?.attributes?.url ?? ""}
                      width={slide.attributes?.Interviewee?.portrait.data?.attributes?.width ?? undefined}
                      height={slide.attributes?.Interviewee?.portrait.data?.attributes?.height ?? undefined}
                      alt={
                        slide.attributes?.Interviewee?.portrait.data?.attributes?.alternativeText || "alt not available"
                      }
                    />
                  )}
                  <div className="absolute bottom-0 left-0 m-6 z-20">
                    <div className="h4 text-gold-ECCB7D font-semibold">{slide.attributes?.Interviewee?.name}</div>
                    <div className="h6 text-gold-ECCB7D h-[37px]">{slide.attributes?.Interviewee?.title}</div>
                    <Link href={finalHref} className="h-[44px]">
                      <div className="h5 text-white font-bold line-clamp-2">{slide.attributes?.title}</div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default ArticleCelebritySlider
