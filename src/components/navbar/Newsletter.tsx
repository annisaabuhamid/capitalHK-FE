// components/Newslettter/Newsletter.tsx
"use client"

import React, { useState } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
// import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import NewsletterPopup from "@/components/Newslettter/NewsletterPopup"
// import { EmailIconSmall } from "@/components/social-media/icon/emailIconSmall"
import useWindowSize from "@/utils/useWindowSize"
// import Button from "../common/molecule/button/Button"

// components/Newslettter/Newsletter.tsx
// ... (import statements)

const Newsletter: React.FC = () => {
  const { status } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  let { isMobile, isDesktop, isTablet } = useWindowSize()
  // if (status === "authenticated") return null
  // const { setNewsletternDialogIsOpen } = useGlobalContext()
  const onOpenChange = () => {
    setIsOpen(!isOpen)
    // document.body.style.overflow = isOpen ? "initial" : "hidden"
  }

  return (
    <>
      <div>
        {status === "authenticated" && isDesktop ? (
          <div className="" onClick={onOpenChange}>
            <NewsletterPopup onOpenChange={onOpenChange} type={"navbar"} />
          </div>
        ) : status === "authenticated" && (isMobile || isTablet) ? (
          <div className="ml-[22px] lg:ml-3 h-[40px]" onClick={onOpenChange}>
            <NewsletterPopup onOpenChange={onOpenChange} type={""} />
          </div>
        ) : (
          <div className="ml-[22px] lg:ml-3 h-[40px]" onClick={onOpenChange}>
            {/* <Button>訂閱電子報</Button> */}
            <NewsletterPopup onOpenChange={onOpenChange} type={""} />
          </div>
        )}
      </div>
    </>
  )
}

export default Newsletter
