"use client"
import React from "react"
import { OptionalString } from "@/common/types"

type Props = { href: OptionalString }

function HomeSliderUploadVideo({ href }: Props) {
  let videohref = href as string
  return (
    <div className="fixed w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform focus-visible:border-transparent focus-visible:outline-none">
      <video muted autoPlay loop controls className="static max-h-full w-full bg-black">
        <source src={videohref} type="video/mp4" />
      </video>
    </div>
  )
}

export default HomeSliderUploadVideo
