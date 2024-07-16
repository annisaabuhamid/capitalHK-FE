/* eslint-disable array-callback-return */
"use client"

import { ArticleBlocksDynamicZone } from "@/common/lib/graphql/generated/graphql"
import ArticleImage from "@/components/article/component/ArticleImage"
import ArticleVideo from "@/components/article/component/ArticleVideo"
import BiQuestionAnswer from "@/components/article/component/BiQuestionAnswer"
import EmbeddedInstagram from "@/components/article/component/EmbeddedInstagram"
import Faq from "@/components/article/component/faq"
import ImageCarousel from "@/components/article/component/ImageCarousel"
import ImageGallery from "@/components/article/component/ImageGallery"
import ArticleInfoBoxWrapper from "@/components/article/component/info-box/ArticleInfoBoxWrapper"
import ListicleTitle from "@/components/article/component/ListicleTitle"
import PrizeList from "@/components/article/component/PrizeList"
import ProductList from "@/components/article/component/ProductList"
import ProductRate from "@/components/article/component/ProductRate"
import ProductReview from "@/components/article/component/ProductReview"
import Rate from "@/components/article/component/Rate"
import RecommendArticles from "@/components/article/component/RecommendArticles"
import RichText from "@/components/article/component/RichText"
import ShoppableContent from "@/components/article/component/ShoppableContent"
import TipsBox from "@/components/article/component/TipsBox"
import VideoLink from "@/components/article/component/VideoLink"
import QuestionAnswer from "../../component/QuestionAnswer"

type Props = { blocks: ArticleBlocksDynamicZone[] | undefined }

function ArticleComponent({ blocks }: Props) {
  if (!blocks) {
    return null
  }

  return (
    <div>
      {blocks.map((block, i) => {
        if (block.__typename === "Error") return null

        if (block.__typename) {
          return <ArticleBlock key={i} block={block} />
        } else {
          return <ArticleBlockPreview key={i} block={block} />
        }
      })}
    </div>
  )
}

export default ArticleComponent

const ArticleBlock = ({ block }: { block: ArticleBlocksDynamicZone }) => {
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
    case "ComponentArticleProductRate":
      return <ProductRate data={block} />
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
  }
}

const ArticleBlockPreview = ({ block }: { block: any }) => {
  switch (block.__component) {
    case "article.embed-video":
      return <VideoLink data={block} isArticlePreview={true} />
    case "article.embed-instagram":
      return <EmbeddedInstagram data={block} />
    case "article.image":
      return <ArticleImage data={block} />
    case "article.image-carousel":
      return <ImageCarousel data={block} />
    case "article.image-gallery":
      return <ImageGallery data={block} />
    case "article.info-box":
      return <ArticleInfoBoxWrapper data={block} />
    case "article.listicle-title":
      return <ListicleTitle data={block} />
    case "article.picture-with-tag":
      return <ShoppableContent data={block} />
    case "article.prize-list":
      return <PrizeList data={block} />
    case "article.product-list":
      return <ProductList data={block} />
    case "article.product-rate":
      return <ProductRate data={block} />
    case "article.product-review":
      return <ProductReview data={block} />
    case "article.question-answer":
      return <QuestionAnswer data={block} />
    case "article.question-answer2-columns":
      return <BiQuestionAnswer data={block} />
    case "article.rich-text":
      return <RichText data={block} />
    case "article.tips-box":
      return <TipsBox data={block} />
    case "article.video":
      return <ArticleVideo data={block} />
    case "article.faq":
      return <Faq data={block} />
  }
}
