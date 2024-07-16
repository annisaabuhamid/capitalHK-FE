"use client"

import Image from "next/image"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {
  className: string
}

function Logo({ className }: Props) {
  const { globalData } = useGlobalContext()

  if (!globalData) return null
  const globalFooter = globalData?.attributes
  let globalFooterLogoAlt = globalFooter?.logo.data?.attributes?.alternativeText ?? ""
  let globalFooterHeight = globalFooter?.logo.data?.attributes?.height
  let globalFooterWidth = globalFooter?.logo.data?.attributes?.width
  let globalFooterUrl = globalFooter?.logo.data?.attributes?.url

  return (
    <>
      <Image
        src={globalFooterUrl!}
        height={globalFooterHeight!}
        width={globalFooterWidth!}
        alt={globalFooterLogoAlt}
        className={className}
        fetchPriority="high"
        loading="eager"
      />
    </>
  )
}

export default Logo
