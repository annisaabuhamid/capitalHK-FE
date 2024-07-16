// components/Newsletter/NewsletterPopup.tsx

import React from "react"
import NewDialog, { NewDialogClose, SlideUpTransition } from "@/components/common/molecule/dialog/NewDialog"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import NewsletterForm from "@/components/Newslettter/NewsletterForm"
import { EmailIconSmall } from "@/components/social-media/icon/emailIconSmall"

// import { Button } from "@/components/ui/button"
// import useWindowSize from "@/utils/useWindowSize"
import Button from "../common/molecule/button/Button"

type NewsletterPopupProps = {
  // isOpen: boolean
  onOpenChange: (newState: boolean) => void
  type: string
}

interface DataItem {
  id: number
  attributes: {
    Title: string
    id: number
  }
}

interface ApiResponse {
  data: DataItem[]
}

// interface FormData {
//   email: string
//   recaptchaToken: string
//   // interested_areas: number[];
// }

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onOpenChange, type }) => {
  const {
    newsletterDialogIsOpen: isOpen,
    setNewsletternDialogIsOpen: setIsOpen,
    setMobileMenuIsOpen: setMobileMegaMenuIsOpen,
  } = useGlobalContext()
  const setCloseNewsletter = () => {
    setIsOpen(false)
    document.body.style.overflow = isOpen ? "initial" : "hidden"
  }

  const handleOpenChange = () => {
    // console.log('testOpen')
    // if (isDesktop){
    //   setMobileMegaMenuIsOpen(true)
    // }
    // setMobileMegaMenuIsOpen(false)
    // setMobileMegaMenuIsOpen(isOpen)
    setIsOpen(!isOpen)
    onOpenChange(!isOpen)
  }

  return (
    <>
      {type === "mobile-megamenu" ? (
        <p onClick={handleOpenChange} className="h5 cursor-pointer !font-bold !px-0">
          訂閱電子報
        </p>
      ) : type === "article" ? (
        <Button onClick={handleOpenChange} className="h5 cta newsletter !bg-primary-1000">
          訂閱電子報
        </Button>
      ) : type === "navbar" ? (
        <div
          onClick={handleOpenChange}
          className="rounded-full social-media-icon bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white"
        >
          <div className="w-4 h-4 hover:text-inherit">
            <EmailIconSmall />
          </div>
        </div>
      ) : (
        <Button onClick={handleOpenChange}>訂閱電子報</Button>
      )}

      <NewDialog
        dialogClassName="overflow-visible !z-[50] m-0 p-0"
        TransitionComponent={SlideUpTransition}
        allowOverflow
        dialogTitle={
          <div className="h2 rounded-t-lg bg-cover bg-primary-900 -mx-6 -mt-6 w-[333px] text-white h-[120px] text-center flex items-center justify-center">
            訂閱我們
          </div>
        }
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        panelClassName="max-w-[335px] p-6 gap-0 rounded-xl border-black border bg-white relative"
        dialogProps={{ PaperProps: { sx: { borderRadius: "0.75rem" }, className: "overflow-y-visible" } }}
      >
        <NewDialogClose
          onClick={() => {
            setIsOpen(false)
          }}
          className="rounded-full bg-black right-[-12px] top-[-20px] p-[9px] absolute opacity-100 text-white z-[60]"
        />

        <div className="space-y-6"></div>
        <NewsletterForm onOpenChange={handleOpenChange} />
      </NewDialog>
    </>
  )
}

export default NewsletterPopup
