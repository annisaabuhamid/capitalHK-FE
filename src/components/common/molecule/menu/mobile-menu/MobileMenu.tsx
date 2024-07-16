"use client"

import { useApolloClient } from "@apollo/client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { GlobalDocument } from "@/common/lib/graphql/generated/graphql"
import MobileMenuButton from "@/components/common/molecule/menu/mobile-menu/MobileMenuButton"
import MobileMenuDialog from "@/components/common/molecule/menu/mobile-menu/MobileMenuDialog"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {}

function MobileMenu({}: Props) {
  const client = useApolloClient()
  // const [isOpen, setIsOpen] = useState(false)

  const { mobileMenuIsOpen: isOpen = false, setMobileMenuIsOpen: setmobileMegaMenuOpen } = useGlobalContext()

  const toggleIsOpen = (newValue?: boolean) => {
    setTimeout(() => (document.body.style.pointerEvents = ""), 500) // https://github.com/shadcn-ui/ui/issues/468

    setmobileMegaMenuOpen((prev) => {
      if (typeof newValue === "boolean") return newValue
      return !prev
    })
  }

  const pathname = usePathname()
  // check if pathname changes
  // if it does, close the menu
  useEffect(() => {
    toggleIsOpen(false)
  }, [pathname])

  useEffect(() => {
    client.query({ query: GlobalDocument })
  }, [])

  return (
    <>
      <MobileMenuButton isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <MobileMenuDialog isOpen={isOpen} />
    </>
  )
}

export default MobileMenu
