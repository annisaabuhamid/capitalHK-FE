"use client"
import Image from "next/image"
import Link, { LinkProps } from "next/link"

// Import Swiper React components
import { useParams, usePathname } from "next/navigation"
import { useState } from "react"
import LinesEllipsis from "react-lines-ellipsis"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ArticleBasicFragment } from "@/common/lib/graphql/generated/graphql"
import { OptionalString } from "@/common/types"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"

// import required modules
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import { HomePageData } from "@/common/utils/data/home/getHomePage"
import { LeftArrowButton, RightArrowButton } from "@/components/common/molecule/navigation/ArrowButton"
import { renderRootPath } from "@/utils"
import HomeSliderVideoUI from "./HomeSliderVideoUI"
import { cn } from "../ui/utils"

type Props = {
  homePageData: HomePageData
}

type Slide = {
  isArticle?: boolean
  isVideoURL?: boolean
  isVideoMP4?: boolean
  isImage?: boolean
  categories?: NonNullable<ArticleBasicFragment["attributes"]>["categories"] | null
  image: OptionalString
  imageWidth?: number
  imageHeight?: number
  alternativeText?: OptionalString
  title: string
  description?: OptionalString
  href: LinkProps["href"]
  video?: OptionalString
  url?: OptionalString
  name?: OptionalString
}

type RawData = NonNullable<NonNullable<HomePageData>["attributes"]>["Carousel"][number]

const transformSlideData = (rawSlide: RawData): Slide | undefined => {
  if (rawSlide?.__typename === "ComponentHomeBannerArticle") {
    const articleSlide = rawSlide
    const slug = articleSlide?.article?.data?.attributes?.slug
    return {
      isArticle: true,
      image:
        articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.formats?.medium?.url ??
        articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.url,
      imageWidth:
        articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.formats?.medium?.width ??
        articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.width,
      imageHeight:
        articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.formats?.medium?.height ??
        articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.height,
      alternativeText: articleSlide?.article?.data?.attributes?.keyVisualHorizontal.data?.attributes?.alternativeText,
      title: articleSlide?.article?.data?.attributes?.title || "",
      name: articleSlide?.article?.data?.attributes?.categories?.data[0].attributes?.name,
      categories: articleSlide.article?.data?.attributes?.categories,
      href: slug || "",
    }
  } else if (rawSlide?.__typename === "ComponentHomeBannerImage") {
    const imageSlide = rawSlide
    const url = imageSlide?.url
    return {
      isImage: true,
      image: imageSlide.image?.data?.attributes?.formats?.medium?.url ?? imageSlide?.image?.data?.attributes?.url,
      imageWidth:
        imageSlide.image?.data?.attributes?.formats?.medium?.width ?? imageSlide?.image?.data?.attributes?.width,
      imageHeight:
        imageSlide.image?.data?.attributes?.formats?.medium?.height ?? imageSlide?.image?.data?.attributes?.height,
      alternativeText: imageSlide?.image?.data?.attributes?.alternativeText,
      title: imageSlide?.ImageText,
      href: url ?? ``,
    }
  } else if (rawSlide?.__typename === "ComponentHomeBannerVideoUrl") {
    const videoUrlSlide = rawSlide
    return {
      href: "",
      isVideoURL: true,
      url: videoUrlSlide.url || "",
      title: videoUrlSlide.videoURLText || "",
      image: videoUrlSlide.media?.data?.attributes?.formats?.medium?.url ?? videoUrlSlide.media?.data?.attributes?.url,
      imageWidth:
        videoUrlSlide.media?.data?.attributes?.formats?.medium?.width ?? videoUrlSlide?.media?.data?.attributes?.width,
      imageHeight:
        videoUrlSlide.media?.data?.attributes?.formats?.medium?.height ??
        videoUrlSlide?.media?.data?.attributes?.height,
      alternativeText: videoUrlSlide?.media?.data?.attributes?.alternativeText,
    }
  } else if (rawSlide?.__typename === "ComponentHomeBannerVideoMp4") {
    const videoMp4Slide = rawSlide
    return {
      isVideoMP4: true,
      href: "",
      title: videoMp4Slide.videoText || "",
      image: videoMp4Slide.media?.data?.attributes?.formats?.medium?.url ?? videoMp4Slide.media?.data?.attributes?.url,
      imageWidth:
        videoMp4Slide.media?.data?.attributes?.formats?.medium?.width ?? videoMp4Slide?.media?.data?.attributes?.width,
      imageHeight:
        videoMp4Slide.media?.data?.attributes?.formats?.medium?.height ??
        videoMp4Slide?.media?.data?.attributes?.height,
      alternativeText: videoMp4Slide?.media?.data?.attributes?.alternativeText,
      video: videoMp4Slide.video?.data?.attributes?.url || null,
    }
  }
}

function HomeSlider({ homePageData }: Props) {
  const [swiperLoaded, setSwiperLoaded] = useState(false)

  const router = usePathname()
  const dynamicRouter = useParams()

  const rawData = homePageData?.attributes?.Carousel ?? []

  if (rawData.length === 0) return null

  return (
    <div
      className={`bg-white relative mb-9 home-slider ${
        swiperLoaded ? "opacity-100 visible transition-opacity duration-500" : "opacity-0 invisible"
      }`}
    >
      {rawData.length > 0 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          centeredSlides={true}
          slidesPerGroup={1}
          initialSlide={0}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          loop={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          onSwiper={(swiper) => {
            setSwiperLoaded(true)
          }}
          breakpoints={{
            1340: {
              slidesPerView: 1.03,
            },
            1380: {
              slidesPerView: 1.04,
            },
            1400: {
              slidesPerView: 1.05,
            },
            1420: {
              slidesPerView: 1.06,
            },
            1430: {
              slidesPerView: 1.07,
            },
            1440: {
              slidesPerView: 1.08,
            },
            1470: {
              slidesPerView: 1.091,
            },
            1480: {
              slidesPerView: 1.1,
            },
            1520: {
              slidesPerView: 1.13,
            },
            1560: {
              slidesPerView: 1.16,
            },
            1600: {
              slidesPerView: 1.19,
            },
            1640: {
              slidesPerView: 1.22,
            },
            1680: {
              slidesPerView: 1.26,
            },
            1720: {
              slidesPerView: 1.3,
            },
            1760: {
              slidesPerView: 1.32,
            },
            1780: {
              slidesPerView: 1.35,
            },
            1820: {
              slidesPerView: 1.38,
            },
            1860: {
              slidesPerView: 1.4,
            },
            1900: {
              slidesPerView: 1.43,
            },
            1940: {
              slidesPerView: 1.45,
            },
            1980: {
              slidesPerView: 1.48,
            },
            2020: {
              slidesPerView: 1.5,
            },
            2060: {
              slidesPerView: 1.53,
            },
            2100: {
              slidesPerView: 1.55,
            },
            2140: {
              slidesPerView: 1.59,
            },
            2180: {
              slidesPerView: 1.62,
            },
            2220: {
              slidesPerView: 1.65,
            },
            2260: {
              slidesPerView: 1.68,
            },
            2300: {
              slidesPerView: 1.7,
            },
            2340: {
              slidesPerView: 1.73,
            },
            2380: {
              slidesPerView: 1.76,
            },
            2420: {
              slidesPerView: 1.79,
            },
            2460: {
              slidesPerView: 1.82,
            },
            2500: {
              slidesPerView: 1.85,
            },
            2520: {
              slidesPerView: 1.87,
            },
            2540: {
              slidesPerView: 1.89,
            },
            2560: {
              slidesPerView: 1.9,
            },
            2580: {
              slidesPerView: 1.91,
            },
            2590: {
              slidesPerView: 1.93,
            },
            2600: {
              slidesPerView: 1.94,
            },
            2620: {
              slidesPerView: 1.95,
            },
            2640: {
              slidesPerView: 1.96,
            },
            2660: {
              slidesPerView: 1.98,
            },
          }}
          watchSlidesProgress={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {rawData.map((element, i) => {
            const slideData = transformSlideData(element)
            const categories = slideData?.categories
            const catSlug = renderRootPath(router, dynamicRouter, categories)
            const finalHref = `${catSlug}/${slideData?.href}`

            if (!slideData) return null

            return (
              <SwiperSlide className={cn("max-w-8xl", i)} key={i}>
                <div className="h-full bg-white relative w-full flex-col-reverse lg:flex-row flex">
                  <div className="bg-secondary-800 flex-1 lg:max-w-[533px] pt-6 pb-10 px-5 py-[24px] lg:pl-[50px] xl:pl-[50px] xl:p-[36px] flex-col flex items-start justify-center">
                    <div className="relative flex flex-col flex-1 justify-center items-start">
                      <div className="text-[#E02C2C] h5 font-bold mb-4 h-[22px]">
                        {slideData.isArticle && slideData.name}
                      </div>
                      <LinesEllipsis
                        text={slideData.title}
                        className="text-white text-2xl text-left h1 h-[80px]"
                        maxLine="2"
                        ellipsis="..."
                        trimRight
                        basedOn="letters"
                      />
                      {/* <div className="text-white text-2xl text-left h1 line-clamp-2 h-[85px]">{slideData.title}</div> */}
                    </div>
                    <div
                      className={cn(
                        "flex flex-0 items-center max-h-[40px] justify-self-start self-end w-full mt-[36px] lg:mt-0 h-[38px]",
                        slideData.isArticle || slideData.isImage ? "justify-between" : "justify-end"
                      )}
                    >
                      {slideData.isArticle || slideData.isImage ? (
                        <Link
                          href={finalHref}
                          className="h5 text-white flex justify-center items-center gap-1 home-carousel-cta"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 23"
                            fill="none"
                          >
                            <path
                              d="M22.5664 3.77344H17.2039C16.0531 3.77344 14.9281 4.10391 13.9602 4.72734L12.8164 5.46094L11.6727 4.72734C10.7057 4.10403 9.5794 3.77282 8.42891 3.77344H3.06641C2.65156 3.77344 2.31641 4.10859 2.31641 4.52344V17.8359C2.31641 18.2508 2.65156 18.5859 3.06641 18.5859H8.42891C9.57969 18.5859 10.7047 18.9164 11.6727 19.5398L12.7133 20.2102C12.7438 20.2289 12.7789 20.2406 12.8141 20.2406C12.8492 20.2406 12.8844 20.2313 12.9148 20.2102L13.9555 19.5398C14.9258 18.9164 16.0531 18.5859 17.2039 18.5859H22.5664C22.9813 18.5859 23.3164 18.2508 23.3164 17.8359V4.52344C23.3164 4.10859 22.9813 3.77344 22.5664 3.77344ZM8.42891 16.8984H4.00391V5.46094H8.42891C9.25859 5.46094 10.0648 5.69766 10.7609 6.14531L11.9047 6.87891L12.0664 6.98438V17.8125C10.9508 17.2125 9.70391 16.8984 8.42891 16.8984ZM21.6289 16.8984H17.2039C15.9289 16.8984 14.682 17.2125 13.5664 17.8125V6.98438L13.7281 6.87891L14.8719 6.14531C15.568 5.69766 16.3742 5.46094 17.2039 5.46094H21.6289V16.8984ZM10.1187 8.46094H5.76406C5.67266 8.46094 5.59766 8.54063 5.59766 8.63672V9.69141C5.59766 9.7875 5.67266 9.86719 5.76406 9.86719H10.1164C10.2078 9.86719 10.2828 9.7875 10.2828 9.69141V8.63672C10.2852 8.54063 10.2102 8.46094 10.1187 8.46094ZM15.3477 8.63672V9.69141C15.3477 9.7875 15.4227 9.86719 15.5141 9.86719H19.8664C19.9578 9.86719 20.0328 9.7875 20.0328 9.69141V8.63672C20.0328 8.54063 19.9578 8.46094 19.8664 8.46094H15.5141C15.4227 8.46094 15.3477 8.54063 15.3477 8.63672ZM10.1187 11.7422H5.76406C5.67266 11.7422 5.59766 11.8219 5.59766 11.918V12.9727C5.59766 13.0688 5.67266 13.1484 5.76406 13.1484H10.1164C10.2078 13.1484 10.2828 13.0688 10.2828 12.9727V11.918C10.2852 11.8219 10.2102 11.7422 10.1187 11.7422ZM19.8688 11.7422H15.5141C15.4227 11.7422 15.3477 11.8219 15.3477 11.918V12.9727C15.3477 13.0688 15.4227 13.1484 15.5141 13.1484H19.8664C19.9578 13.1484 20.0328 13.0688 20.0328 12.9727V11.918C20.0352 11.8219 19.9602 11.7422 19.8688 11.7422Z"
                              fill="white"
                            />
                          </svg>
                          <div className="h5">閱覽</div>
                        </Link>
                      ) : null}

                      <div className="flex gap-3">
                        <div className="mobile swiper-button-prev block lg:hidden">
                          <LeftArrowButton />
                        </div>
                        <div className="mobile swiper-button-next block lg:hidden">
                          <RightArrowButton />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative flex aspect-[16/9]">
                    <Image
                      src={slideData.image || ""}
                      width={slideData.imageWidth}
                      height={slideData.imageHeight}
                      alt={slideData.alternativeText ?? "alt not available"}
                      quality={IMAGE_QUALITY}
                      className="aspect-[16/9] object-cover object-center h-full w-full"
                      fetchPriority={i === 0 ? "high" : "auto"}
                    />
                    {slideData.isVideoURL && <HomeSliderVideoUI videoUrl={slideData.url} isVideoURL={true} />}
                    {slideData.isVideoMP4 && <HomeSliderVideoUI videoMP4={slideData.video} isVideoMP4={true} />}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}

      <div className="desktop swiper-button-next hidden lg:block">
        <RightArrowButton />
      </div>
      <div className="desktop swiper-button-prev hidden lg:block">
        <LeftArrowButton />
      </div>
    </div>
  )
}

export default HomeSlider
