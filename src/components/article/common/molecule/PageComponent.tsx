/* eslint-disable array-callback-return */
"use client"

import { Key } from "react"
import { PageBlocksDynamicZone } from "@/common/lib/graphql/generated/graphql"
import ArticleImage from "@/components/article/component/ArticleImage"
import ArticleVideo from "@/components/article/component/ArticleVideo"
import BiQuestionAnswer from "@/components/article/component/BiQuestionAnswer"
import EmbeddedInstagram from "@/components/article/component/EmbeddedInstagram"
import Faq from "@/components/article/component/faq"
import ImageCarousel from "@/components/article/component/ImageCarousel"
import ImageGallery from "@/components/article/component/ImageGallery"
import ImageWithContent from "@/components/article/component/ImageWithContent"
import ArticleInfoBoxWrapper from "@/components/article/component/info-box/ArticleInfoBoxWrapper"
import ListicleTitle from "@/components/article/component/ListicleTitle"
import PrizeList from "@/components/article/component/PrizeList"
import ProductList from "@/components/article/component/ProductList"
import ProductRate from "@/components/article/component/ProductRate"
import ProductReview from "@/components/article/component/ProductReview"
import Rate from "@/components/article/component/Rate"
import RichText from "@/components/article/component/RichText"
import ShoppableContent from "@/components/article/component/ShoppableContent"
import TipsBox from "@/components/article/component/TipsBox"
import VideoLink from "@/components/article/component/VideoLink"
import QuestionAnswer from "../../component/QuestionAnswer"

type Props = { blocks: any }

function PageComponent({ blocks }: Props) {
  if (!blocks) {
    return null
  }

  return (
    <div>
      {blocks.map((block: PageBlocksDynamicZone, i: Key | null | undefined) => {
        if (!block) return null // Check for null or undefined blocks
        if (block.__typename === "Error") return null
        return <PageBlock key={i} block={block} />
      })}
    </div>
  )
}

export default PageComponent

const PageBlock = ({ block }: { block: PageBlocksDynamicZone }) => {
  switch (block.__typename) {
    case "ComponentArticleEmbedVideo":
      return <VideoLink data={block} />
    case "ComponentArticleEmbedInstagram":
      return <EmbeddedInstagram data={block} />
    case "ComponentArticleImage":
      return <ArticleImage data={block} />
    case "ComponentArticleImageCarousel":
      return <ImageCarousel data={block} />
    case "ComponentArticleImageGallery":
      return <ImageGallery data={block} />
    case "ComponentArticleInfoBox":
      return <ArticleInfoBoxWrapper data={block} />
    case "ComponentArticleListicleTitle":
      return <ListicleTitle data={block} />
    case "ComponentArticlePictureWithTag":
      return <ShoppableContent data={block} />
    case "ComponentArticlePrizeList":
      return <PrizeList data={block} />
    case "ComponentArticleProductList":
      return <ProductList data={block} />
    case "ComponentArticleProductReview":
      return <ProductReview data={block} />
    case "ComponentArticleQuestionAnswer":
      return <QuestionAnswer data={block} />
    case "ComponentArticleQuestionAnswer2Columns":
      return <BiQuestionAnswer data={block} />
    case "ComponentArticleRichText":
      return <RichText data={block} />
    case "ComponentArticleTipsBox":
      return <TipsBox data={block} />
    case "ComponentArticleVideo":
      return <ArticleVideo data={block} />
    case "ComponentArticleFaq":
      return <Faq data={block} />
    case "ComponentArticleImageWithContent":
      return <ImageWithContent data={block} />
  }
}
