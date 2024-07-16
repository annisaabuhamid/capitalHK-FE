"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ComponentArticleVideo } from "@/common/lib/graphql/generated/graphql"

type Props = {
  data: ComponentArticleVideo
}

const ArticleVideo = ({ data }: Props) => {
  let title = data.name ?? ""
  let image = data?.image?.data?.attributes?.url ?? ""
  let videoURL = data.video.data?.attributes?.url ?? undefined

  return (
    <div className="mt-9 ">
      <video controls muted title={title}>
        <source src={videoURL} type="video/mp4" />
      </video>
    </div>
  )
}
export default ArticleVideo
