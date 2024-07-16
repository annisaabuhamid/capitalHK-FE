"use client"

import React, { useState } from "react"
import Button from "@/components/common/molecule/button/Button"
import NewsletterPopup from "@/components/Newslettter/NewsletterPopup"
import ArticleNewsletterSocialMediaButtons from "./ArticleNewsletterSocialMedia"
import { useGlobalQuery } from "@/common/lib/graphql/generated/graphql"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {}

function ArticleNewsletter({}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = () => {
    // setIsOpen(!isOpen)
    // document.body.style.overflow = isOpen ? "initial" : "hidden"
    setNewsletternDialogIsOpen(true)
  }
  const { setNewsletternDialogIsOpen } = useGlobalContext()
  const { data } = useGlobalQuery()

  const shortIntro = data?.global?.data?.attributes?.shortIntroduction

  return (
    <div className="mt-9 flex flex-col bg-secondary-100 justify-center py-6 px-5 md:px-[53px] align-middle md:mx-0 border-secondary-200 border md:border-none">
      <span className="text-sm leading-[22px] font-medium md:font-bold text-center mb-3">{shortIntro}</span>
      <div className="flex justify-center gap-3">
        <ArticleNewsletterSocialMediaButtons />
      </div>
      <div>
        <div className="h-[35px] flex justify-center mt-6" onClick={onOpenChange} >
          <Button className="h5 cta newsletter !bg-primary-1000">訂閱電子報</Button>
          {/* <NewsletterPopup onOpenChange={onOpenChange} type={"article"} /> */}
        </div>
      </div>
    </div>
  )
}

export default ArticleNewsletter
