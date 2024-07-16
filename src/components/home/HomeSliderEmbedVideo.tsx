"use client"
import { useEffect, useMemo, useState } from "react"
import { OptionalString } from "@/common/types"
import { videoUrlParser } from "@/common/utils/videoUrlParser"

type VimeoApiResponse = {
  width: string
  height: string
}
type Props = { url: OptionalString }

function HomeSliderEmbedVideo({ url }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const video = useMemo(() => videoUrlParser(url), [url])

  const [vimeoWidth, setVideoWidth] = useState("")
  const [vimeoHeight, setVideoHeight] = useState("")
  const [isLandscape, setIsLandscape] = useState(true)

  useEffect(() => {
    async function fetchVimeoUrl() {
      if (!video?.id) {
        return
      }
      const response = await fetch(`https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${video.id}`)
      const data = (await response.json()) as VimeoApiResponse
      setVideoWidth(data.width)
      setVideoHeight(data.height)

      if (data.width > data.height) {
        setIsLandscape(true)
      } else {
        setIsLandscape(false)
      }
    }
    fetchVimeoUrl()
  }, [video?.id])

  const onOpenChange = () => {
    setIsOpen(!isOpen)
  }

  if (!video) {
    return null
  }

  return (
    <>
      {video.type === "youtube" && (
        <div
          className={
            "fixed w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform focus-visible:border-transparent focus-visible:outline-none bg-black"
          }
        >
          <iframe
            src={`${video.src}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="youtube-video"
            className="aspect-ratio-video h-full w-full border-0 p-0"
          />
        </div>
      )}
      {video.type === "vimeo" && (
        <div
          className={
            "fixed w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform focus-visible:border-transparent focus-visible:outline-none bg-black"
          }
        >
          <iframe
            title="vimeo-player"
            src={`${video.src}?autoplay=1&loop=1&autopause=0`}
            allowFullScreen
            allow="autoplay; fullscreen"
            className="static h-full w-full"
          ></iframe>
        </div>
      )}
    </>
  )
}

export default HomeSliderEmbedVideo
