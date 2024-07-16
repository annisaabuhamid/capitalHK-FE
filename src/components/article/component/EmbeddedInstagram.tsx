"use client"

import { useEffect, useState } from "react"
import { InstagramEmbed } from "react-social-media-embed"
import { ComponentArticleEmbedInstagram } from "@/common/lib/graphql/generated/graphql"

type Props = {
  data: ComponentArticleEmbedInstagram
}

const EmbeddedInstagram = ({ data }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="mt-9">
      <div className="w-full max-w-[540px]">
        <InstagramEmbed url={data.URL} width="100%" />
      </div>
    </div>
  )
}
export default EmbeddedInstagram
