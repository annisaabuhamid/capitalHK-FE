import React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/common/atom/navigation/ArrowIcon"

type Props = {}

function RightArrowButton({}: Props) {
  return (
    <div className="navigation-button cursor-pointer">
      <ArrowRightIcon />
    </div>
  )
}

function LeftArrowButton({}: Props) {
  return (
    <div className="navigation-button cursor-pointer">
      <ArrowLeftIcon />
    </div>
  )
}

export { LeftArrowButton, RightArrowButton }
