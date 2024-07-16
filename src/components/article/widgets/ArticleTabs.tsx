"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import SlidingTab, { Tab } from "@/components/tab/SlidingTab"

type Props = {
  tabs: Tab[]
}
const ArticleTabs = ({ tabs }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(tabs[0])

  return (
    <div>
      <SlidingTab tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} type={"homepage-article"} />

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
export default ArticleTabs
