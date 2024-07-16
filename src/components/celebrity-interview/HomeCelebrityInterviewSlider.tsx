"use client"

// Import Swiper styles
import "swiper/css"

// import required modules
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { HomeInterviewArticle } from "@/common/types/homeTypes"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import { renderRootPath } from "@/utils"

// Import Swiper React components

type Props = {
  homeInterviewArticles: HomeInterviewArticle[]
}

function HomeCelebrityInterviewSlider({ homeInterviewArticles }: Props) {
  // const numberOfSlides = slides.length

  const router = usePathname()
  const dynamicRouter = useParams()

  return (
    <div className="w-full my-6 home-celebrity-interview-slider select-none">
      <Swiper
        // slidesPerView={7.4}
        // spaceBetween={24}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        className=""
        // initialSlide={Math.floor(homeInterviewArticles.length / 2)}
        navigation={true}
        modules={[Autoplay]}
        // className=""
        watchSlidesProgress={true}
        loop={true}
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={24}
        autoplay={true}
      >
        {homeInterviewArticles.map((slide, i) => {
          const categories = slide.categories
          const catSlug = renderRootPath(router, dynamicRouter, categories)
          const finalHref = `${catSlug}/${slide.articleSlug}`
          return (
            <SwiperSlide key={i}>
              <div className="w-[240px] h-[324px] relative before:absolute before:z-10 before:h-full before:w-full before:bg-gradient-carousel bg-black/30">
                {slide.potrait && (
                  <Image
                    src={slide.potrait}
                    alt={slide.portraitAlt}
                    width={slide.portraitWidth}
                    height={slide.portraitHeight}
                    quality={IMAGE_QUALITY}
                    className="object-cover h-full w-full"
                  />
                )}
                <div className="absolute bottom-0 left-0 m-6 z-20">
                  <div className="h4 text-gold-ECCB7D font-semibold">{slide.name}</div>
                  <div className="h6 text-gold-ECCB7D h-[37px]">{slide.intervieweeTitle}</div>
                  <Link href={finalHref} className="h-[44px]">
                    <div className="h5 text-white font-bold line-clamp-2">{slide.title}</div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeCelebrityInterviewSlider
