import { useState } from "react"
import { useLockBodyScroll } from "react-use"

type Props = {}

export const useUIState = (props?: Props) => {
  const [megaMenuIsOpen, setMegaMenuIsOpen] = useState(false)
  const [loginDialogIsOpen, setLoginDialogIsOpen] = useState(false)
  const [newsletterDialogIsOpen, setNewsletternDialogIsOpen] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  useLockBodyScroll(megaMenuIsOpen)
  return {
    megaMenuIsOpen,
    setMegaMenuIsOpen,
    loginDialogIsOpen,
    setLoginDialogIsOpen,
    newsletterDialogIsOpen,
    setNewsletternDialogIsOpen,
    mobileMenuIsOpen,
    setMobileMenuIsOpen,
  }
}
