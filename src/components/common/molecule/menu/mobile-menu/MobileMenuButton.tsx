"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CloseIcon } from "@/components/common/atom/navigation/CloseIcon"
import { NavMenuIcon } from "@/components/common/atom/navigation/NavMenuIcon"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import { cn } from "@/components/ui/utils"

type Props = {
  isOpen: boolean
  toggleIsOpen: (isOpen?: boolean) => void
}

function MobileMenuButton({ isOpen, toggleIsOpen }: Props) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    // <div
    //   className={`lg:hidden group fixed bottom-0 left-0 m-5 ${
    //     loginDialogIsOpen === true || newsletterDialogIsOpen === true ? "z-[45]" : "z-[100]"
    //   } `}
    // >
    <div className={`lg:hidden group fixed bottom-0 left-0 m-5 z-[50]`}>
      <div className="flex items-end justify-end w-12 h-12 rounded-full">
        <AnimatePresence initial={false}>
          <motion.button
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 2 },
              collapsed: { opacity: 0 },
            }}
            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
            // button props
            onClick={() => toggleIsOpen()}
            style={{
              filter: "drop-shadow(0px 4px 10px rgba(69, 22, 22, 0.04)) drop-shadow(0px 2px 4px rgba(28, 3, 3, 0.07))",
            }}
            className={cn(
              "flex items-center justify-center p-3 rounded-full",
              isOpen ? "bg-secondary-700 text-white" : "bg-white text-black"
            )}
          >
            {isOpen ? <CloseIcon /> : <NavMenuIcon />}
          </motion.button>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MobileMenuButton
