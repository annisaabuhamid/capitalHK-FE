"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useHomeTopBannerQuery } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import styles from "./HomeBanner.module.css"

type Props = {}

function HomeBanner({}: Props) {
  // hide if not on home page
  const pathname = usePathname()
  const hidden = pathname !== "/"

  const { homeBannerRef } = useGlobalContext()

  // get HomeTopBanner data
  const homeTopBanner = useHomeTopBannerQuery()
  const bannerImage = homeTopBanner?.data?.homePage?.data?.attributes?.HomeTopBanner?.image?.data?.attributes?.url ?? ""
  const alternativeText = homeTopBanner?.data?.homePage?.data?.attributes?.HomeTopBanner?.alternativeText ?? ""
  const url = homeTopBanner?.data?.homePage?.data?.attributes?.HomeTopBanner?.url ?? "/"
  const target = homeTopBanner?.data?.homePage?.data?.attributes?.HomeTopBanner?.target ?? "self"

  const mobileImage = homeTopBanner.data?.homePage?.data?.attributes?.HomeTopBanner?.mobileImage?.data?.attributes?.url

  if (bannerImage === "" || hidden) return null

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024

  return (
    <>
      <div className={styles.bgWrap} ref={homeBannerRef}>
        <Link href={url ?? "/"} target={`_${target}`}>
          <Image
            src={isMobile ? mobileImage || bannerImage : bannerImage}
            priority
            quality={IMAGE_QUALITY}
            fill
            sizes="100vw"
            className="object-cover"
            alt={alternativeText}
          />
        </Link>
      </div>
    </>
  )
}

export default HomeBanner
