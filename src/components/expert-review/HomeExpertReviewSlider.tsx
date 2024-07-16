"use client"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
// Import Swiper React components
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { HomeExpertReviewArticle } from "@/common/types/homeTypes"
import Divider from "@/components/common/atom/Divider"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import { renderRootPath } from "@/utils"
import { RightArrowButton } from "../common/molecule/navigation/ArrowButton"
import { LeftArrowButton } from "../common/molecule/navigation/ArrowButton"

type Props = {
  articles: HomeExpertReviewArticle[]
  url: string
}

function HomeExpertReviewSlider({ articles, url }: Props) {
  const router = usePathname()
  const dynamicRouter = useParams()
  // let { isMobile, isDesktop } = useWindowSize()
  return (
    <>
      <Link href={url} className="pb-[16px]">
        <ReadMoreButton>
          <span className="h2">名家觀點</span>
        </ReadMoreButton>
      </Link>

      <div className="mt-4 relative">
        <Swiper
          slidesPerView={"auto"}
          // slidesPerView={1.5}
          spaceBetween={12}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className=""
          //   loopAdditionalSlides={3}
          //   watchSlidesProgress={true}
          navigation={{
            nextEl: ".swiper-expert-button-next",
            prevEl: ".swiper-expert-button-prev",
          }}
        >
          {articles.map((slide, i) => {
            const categories = slide?.categories
            const catSlug = renderRootPath(router, dynamicRouter, categories)
            const finalHref = `${catSlug}/${slide?.articleSlug}`
            return (
              <SwiperSlide className="max-w-[296px]" key={i}>
                <Link href={finalHref} className="flex-grow h-full">
                  <div className="rounded w-[296px] h-[236px] bg-secondary-100 relative p-[24px] flex justify-between gap-3 flex-col hover:bg-secondary-150 transition-all duration-300">
                    <span className="h4 hover:underline line-clamp-3 font-normal">{slide.title}</span>
                    <div className="h-[90px]">
                      {/* top */}
                      <div className="flex gap-4 h-[78px]">
                        {/* left */}
                        <img src={slide.image} alt="article author" className="object-cover h-16 w-16 rounded-full" />
                        {/* right */}
                        <div className="flex-grow">
                          <div className="h5 font-bold">{slide.author}</div>
                          <div className="h6 text-secondary-500 line-clamp-3">{slide.authorDescription}</div>
                        </div>
                      </div>
                      {/* btm */}
                      <Divider className="divide-[#A6A6A6] divide-y my-3 w-full" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="hidden absolute mr-3 top-1/2 right-0 -translate-y-1/2 swiper-expert-button-next text-white bg-secondary-700 opacity-40 hover:opacity-100 hover:bg-zinc-900 h-10 w-10 z-10 items-center justify-center rounded cursor-pointer transition-all duration-500 md:flex">
          <RightArrowButton />
        </div>
        <div className="hidden absolute ml-3 top-1/2 left-0 -translate-y-1/2 swiper-expert-button-prev text-white bg-secondary-700 opacity-40 hover:opacity-100 hover:bg-zinc-900 h-10 w-10 z-10 items-center justify-center rounded cursor-pointer transition-all duration-500 md:flex">
          <LeftArrowButton />
        </div>
      </div>
    </>
  )
}

export default HomeExpertReviewSlider
