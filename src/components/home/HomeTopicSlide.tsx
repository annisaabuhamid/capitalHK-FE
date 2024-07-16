"use client"

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRoutesQuery } from "@/common/lib/graphql/generated/graphql"
import { HomeTopicSectionData } from "@/common/utils/data/home/getHomeTopicSection"
import { LeftArrowButton, RightArrowButton } from "../common/molecule/navigation/ArrowButton"
import ResponsiveImageContainer from "../image/ResponsiveImageContainer"

type Props = { topicSectionData: HomeTopicSectionData }

const HomeTopicSlide = ({ topicSectionData }: Props) => {
  return (
    <div className="relative mb-6 topic-swiper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        className="max-w-[1344px]"
        slidesPerView="auto"
        speed={500}
        spaceBetween={12}
        // centeredSlides={true}
        navigation={{
          nextEl: ".topic-swiper-button-next",
          prevEl: ".topic-swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4.1,
          },
          1024: {
            slidesPerView: 3.1,
          },
          768: {
            slidesPerView: 2.1,
          },
          500: {
            slidesPerView: "auto",
          },
          100: {
            slidesPerView: 1.1,
          },
        }}
      >
        {topicSectionData.map((topic, i) => {
          return (
            <SwiperSlide key={i}>
              <HomeTopicSlideLoop key={topic.id} topic={topic} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="flex gap-3">
        <div className="topic-swiper-button-prev">
          <LeftArrowButton />
        </div>
        <div className="topic-swiper-button-next">
          <RightArrowButton />
        </div>
      </div>
    </div>
  )
}

export default HomeTopicSlide

const HomeTopicSlideLoop = ({ topic }: { topic: HomeTopicSectionData[number] }) => {
  const { attributes } = topic
  const { name, slug } = attributes ?? {}
  const imageUrl = topic.attributes?.Topic?.keyVisualHorizontal.data?.attributes?.url
  const imageWidth = topic.attributes?.Topic?.keyVisualHorizontal.data?.attributes?.width
  const imageHeight = topic.attributes?.Topic?.keyVisualHorizontal.data?.attributes?.height
  const imageAlt = topic.attributes?.Topic?.keyVisualHorizontal.data?.attributes?.alternativeText || "alt not available"
  const imageFormats = topic.attributes?.Topic?.keyVisualHorizontal.data?.attributes?.formats

  const { data } = useRoutesQuery({
    variables: {
      filters: {
        value: { eq: topic.id },
        type: { eq: "Category" },
      },
      pagination: { limit: 1 },
    },
  })
  const href = data?.routes?.data[0].attributes?.requestPath || ""

  return (
    <Link href={href}>
      {/* <ImageContainer src={imageUrl ?? ""} alt={`${imageAlt}`} className={`home-topic-slide mb-3`} /> */}
      <ResponsiveImageContainer
        imgUrl={imageFormats?.small?.url || imageUrl || ""}
        width={imageFormats?.small?.width || imageWidth}
        height={imageFormats?.small?.height || imageHeight}
        altText={imageAlt || "article small"}
        className={`home-topic-slide mb-3`}
      />
      <div className="w-full flex justify-center">
        <span className="text-white text-center h3">{name}</span>
      </div>
    </Link>
  )
}
