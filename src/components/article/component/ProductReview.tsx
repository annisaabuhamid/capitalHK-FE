"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { ComponentArticleProductReview } from "@/common/lib/graphql/generated/graphql"
import { HomeInterviewArticle } from "@/common/types/homeTypes"
import React, { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import ProductRate from "@/components/article/component/ProductRate"
import { cn } from "@/components/ui/utils"
import ListicleTitle from "@/components/article/component/ListicleTitle"
import ImageCarousel from "@/components/article/component/ImageCarousel"

type Props = {
  data: ComponentArticleProductReview
}

const ProductReview = ({ data }: Props) => {
  const pagination = { clickable: true }
  let Images = data.ImageCarousel
  let listNumber = data.ListicleTitle?.Number
  let listName = data.ListicleTitle?.Title
  let description = data.ListicleTitle?.Title
  let ProductRates = data.ProductRate
  let desc = data.ListicleTitle?.description
  // console.log('data',data.ListicleTitle)

  return (
    <div className={"mt-9"}>
      {data && <ListicleTitle data={data?.ListicleTitle} />}
      {data && <ProductRate product={data} />}
      {data && <ImageCarousel product={data} />}
    </div>
  )
}
export default ProductReview
