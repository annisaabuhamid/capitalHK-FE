"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function CommonLayoutContent({ children }: Props) {
  return (
    <div className="common-layout-content">
      <ProgressBar
        height="0px"
        color="#E30909"
        options={{ showSpinner: true, speed: 500, trickleSpeed: 500, easing: "ease", trickle: true }}
      />
      {children}
    </div>
  )
}

export default CommonLayoutContent
