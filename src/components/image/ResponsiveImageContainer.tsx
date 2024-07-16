import Image from "next/image"
import { ResponsiveImageContainerProps } from "@/common/types"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"

type Props = ResponsiveImageContainerProps

function ResponsiveImageContainer(props: Props) {
  const { className = "w-full h-full", height, width, ...imageProps } = props

  return (
    <div className={`image-container overflow-hidden ${className}`}>
      <Image
        src={imageProps.imgUrl || ""}
        alt={imageProps.altText || "alt not available"}
        height={height}
        width={width}
        quality={IMAGE_QUALITY}
        fetchPriority={imageProps.fetchPriority}
        className={
          "image-element h-full mx-auto lg:duration-500 lg:transform lg:hover:scale-110 lg:transition-transform"
        }
      />
    </div>
  )
}

export default ResponsiveImageContainer
