"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ComponentArticleEmbedVideo } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import HomeSliderEmbedVideo from "@/components/home/HomeSliderEmbedVideo"
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"

type CustomComponentArticleEmbedVideo = Partial<ComponentArticleEmbedVideo> & {
  videoName?: string
  video?: {
    data: {
      attributes: {
        url?: string
        width?: number
        height?: number
        alternativeText?: string
      }
    }
  }
}

type Props = {
  data: CustomComponentArticleEmbedVideo
  isArticlePreview?: boolean
}

const VideoLink = ({ data, isArticlePreview = false }: Props) => {
  let imageURL = ""
  let imageAlt = "alt not available"
  let imageWidth = undefined
  let imageHeight = undefined

  let videoURL = data.URL
  if (isArticlePreview) {
    imageURL = data.image?.data?.attributes?.url ?? ""
    imageAlt = data.image?.data?.attributes?.alternativeText || "alt not available"
    imageWidth = data.image?.data?.attributes?.width ?? undefined
    imageHeight = data.image?.data?.attributes?.height ?? undefined
  } else {
    imageURL = data.video?.data?.attributes?.url ?? ""
    imageAlt = data.video?.data?.attributes?.alternativeText || "alt not available"
    imageWidth = data.video?.data?.attributes?.width ?? undefined
    imageHeight = data.video?.data?.attributes?.height ?? undefined
  }
  let title = data.videoName

  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mt-9">
      <div className="relative w-full bg-black rounded-lg p-3">
        <Image
          src={imageURL}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          quality={IMAGE_QUALITY}
          className="mx-auto"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" onClick={onOpenChange}>
          <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
              <path
                d="M68.0664 36.8414C68.0683 37.6054 67.8724 38.3568 67.4978 39.0226C67.1233 39.6885 66.5828 40.246 65.9289 40.6411L25.4064 65.4305C24.7232 65.8488 23.9407 66.0772 23.1398 66.0921C22.3388 66.1069 21.5484 65.9076 20.8502 65.5149C20.1586 65.1282 19.5825 64.5643 19.1811 63.8812C18.7797 63.198 18.5676 62.4203 18.5664 61.628V12.0549C18.5676 11.2625 18.7797 10.4848 19.1811 9.80169C19.5825 9.11856 20.1586 8.55466 20.8502 8.16799C21.5484 7.77522 22.3388 7.57597 23.1398 7.5908C23.9407 7.60563 24.7232 7.83402 25.4064 8.25237L65.9289 33.0417C66.5828 33.4368 67.1233 33.9944 67.4978 34.6602C67.8724 35.326 68.0683 36.0775 68.0664 36.8414Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center items-center mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M4.56641 20.5082C4.01641 20.5082 3.54574 20.3125 3.15441 19.9212C2.76241 19.5292 2.56641 19.0582 2.56641 18.5082V6.50818C2.56641 5.95818 2.76241 5.48751 3.15441 5.09618C3.54574 4.70418 4.01641 4.50818 4.56641 4.50818H16.5664C17.1164 4.50818 17.5874 4.70418 17.9794 5.09618C18.3707 5.48751 18.5664 5.95818 18.5664 6.50818V11.0082L21.7164 7.85818C21.8664 7.70818 22.0457 7.67051 22.2544 7.74518C22.4624 7.82051 22.5664 7.97485 22.5664 8.20818V16.8082C22.5664 17.0415 22.4624 17.1955 22.2544 17.2702C22.0457 17.3455 21.8664 17.3082 21.7164 17.1582L18.5664 14.0082V18.5082C18.5664 19.0582 18.3707 19.5292 17.9794 19.9212C17.5874 20.3125 17.1164 20.5082 16.5664 20.5082H4.56641ZM6.59141 16.5082H14.5414C14.7581 16.5082 14.9124 16.4165 15.0044 16.2332C15.0957 16.0498 15.0747 15.8748 14.9414 15.7082L12.5164 12.5332C12.4164 12.3998 12.2831 12.3332 12.1164 12.3332C11.9497 12.3332 11.8164 12.3998 11.7164 12.5332L9.81641 15.0082L8.66641 13.5082C8.56641 13.3748 8.43307 13.3082 8.26641 13.3082C8.09974 13.3082 7.96641 13.3748 7.86641 13.5082L6.19141 15.7082C6.05807 15.8748 6.03707 16.0498 6.12841 16.2332C6.22041 16.4165 6.37474 16.5082 6.59141 16.5082Z"
              fill="#EC6666"
            />
          </svg>
          <span className="h5 text-white ml-2 !font-bold">{title}</span>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[50%] max-w-full md:max-h-[576px] md:max-w-[1024px] aspect-ratio-video w-full h-full p-0">
          {<HomeSliderEmbedVideo url={videoURL} />}
          <DialogClose />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default VideoLink
