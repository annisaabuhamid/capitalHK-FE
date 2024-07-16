import { HTMLAttributes } from "react"
import { ImageContainerProps } from "@/common/types"

type Props = ImageContainerProps

function ImageContainer(props: Props) {
  const { className = "w-full h-full", height, width, ...imageProps } = props

  const style: HTMLAttributes<HTMLDivElement>["style"] = {
    height: height,
    width: width,
  }
  return (
    <div style={style} className={`image-container overflow-hidden ${className}`}>
      <img
        className={
          "image-element h-full mx-auto lg:duration-500 lg:transform lg:transition-transform lg:hover:scale-110"
        }
        {...imageProps}
        alt={imageProps.alt || "alt not available"}
      />
    </div>
  )
}

export default ImageContainer
