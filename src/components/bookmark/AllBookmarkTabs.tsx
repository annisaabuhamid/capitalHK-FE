"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import SlidingTab, { Tab } from "@/components/tab/SlidingTab"

type Props = { tabs: Tab[] }

function AllBookmarkTabs({ tabs }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultTabName = searchParams.get("tab")

  const [selectedTab, setSelectedTab] = useState<Tab | null>(() => {
    const selectedTab = tabs.find((tab) => tab.name === defaultTabName)
    return selectedTab ?? tabs[0]
  })

  useEffect(() => {
    if (defaultTabName) {
      const selectedTab = tabs.find((tab) => tab.name === defaultTabName)
      setSelectedTab(selectedTab ?? tabs[0])
    }
  }, [defaultTabName, tabs])

  useEffect(() => {
    const currentSelectedTabName = selectedTab?.name
    if (currentSelectedTabName && currentSelectedTabName !== defaultTabName) {
      // remove search params from url
      const currentUrl = new URL(window.location.href)
      router.push(currentUrl.pathname)
    }
  }, [selectedTab, defaultTabName, router])

  return (
    <div>
      <SlidingTab tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ? selectedTab.id : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedTab ? selectedTab.content : "😋"}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AllBookmarkTabs
