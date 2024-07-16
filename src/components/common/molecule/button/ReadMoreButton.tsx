import React from "react"
// import { BsArrowRight } from "react-icons/bs"
import { FaArrowRight } from "react-icons/fa"
import { IconBaseProps, IconType } from "react-icons/lib"
import ReadMoreArrow from "@/components/common/molecule/button/ReadMoreArrow"

type Props = {
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  Icon?: IconType
  children?: React.ReactNode
  iconProps?: IconBaseProps
  color?: "primary" | "secondary" | "tertiary"
}

function ReadMoreButton({ color = "primary", buttonProps, children, Icon = FaArrowRight, iconProps }: Props) {
  const buttonChildren = children ?? "閱覽更多"
  return (
    <div className="read-more">
      <button color={color} className="read-more-button group flex gap-2 items-center text-primary" {...buttonProps}>
        {buttonChildren}
        <ReadMoreArrow Icon={Icon} iconProps={iconProps} />
      </button>
    </div>
  )
}

export default ReadMoreButton
