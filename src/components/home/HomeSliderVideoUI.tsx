"use client"
import { useState } from "react"
import { OptionalString } from "@/common/types"
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"
import HomeSliderEmbedVideo from "./HomeSliderEmbedVideo"
import HomeSliderUploadVideo from "./HomeSliderUploadVideo"

type Props = { videoUrl?: OptionalString; isVideoMP4?: boolean; isVideoURL?: boolean; videoMP4?: OptionalString }

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function HomeSliderVideoUI({ videoUrl, isVideoMP4, isVideoURL, videoMP4 }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
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

      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {isVideoURL && (
          <DialogContent className="max-h-[50%] max-w-[90%] lg:max-h-[576px] lg:max-w-[1024px] aspect-ratio-video w-full h-full p-0">
            {isVideoURL && <HomeSliderEmbedVideo url={videoUrl} />}
            <DialogClose
              className="rounded-full bg-black right-[-20px]
         top-[-20px] p-[9px] absolute opacity-100 text-white"
            />
          </DialogContent>
        )}

        {isVideoMP4 && (
          <DialogContent className="max-h-[50%] max-w-full md:max-h-[576px] md:max-w-[1024px] aspect-ratio-video w-full h-full p-0">
            <HomeSliderUploadVideo href={videoMP4} />
            <DialogClose
              className="rounded-full bg-black right-[-20px]
         top-[-20px] p-[9px] absolute opacity-100 text-white"
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

export default HomeSliderVideoUI
