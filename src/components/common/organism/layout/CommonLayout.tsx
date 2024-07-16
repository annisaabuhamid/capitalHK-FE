import { draftMode } from "next/headers"
import React, { Suspense } from "react"
import PreviewBanner from "@/components/article/common/atom/PreviewBanner"
import CommonLayoutContent from "@/components/common/organism/layout/CommonLayoutContent"
import MegaMenuContainer from "@/components/common/organism/layout/mega-menu/MegaMenuContainer"
import { MegaMenuProvider } from "@/components/common/organism/layout/mega-menu/MegaMenuContext"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import SocialMediaButtons from "@/components/social-media/SocialMediaButtons"

type Props = {
  children: React.ReactNode
}

function CommonLayout({ children }: Props) {
  const { isEnabled } = draftMode()

  return (
    <div className="bg-white w-full relative">
      {isEnabled && <PreviewBanner />}
      <Suspense>
        <Navbar />
      </Suspense>

      <MegaMenuProvider>
        <MegaMenuContainer
          socialMedia={
            <div className="flex items-center justify-between gap-0 lg:gap-4 text-xs w-[180px] mx-3">
              <SocialMediaButtons hideMail isMegaMenu />
            </div>
          }
        />
      </MegaMenuProvider>

      <CommonLayoutContent>{children}</CommonLayoutContent>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}

export default CommonLayout
