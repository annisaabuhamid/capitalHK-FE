import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/components/ui/utils"

export type Tab = {
  name: string
  id: string
  content?: ReactNode
  disable?: boolean
}

type Props = {
  tabs: Tab[]
  selectedTab: null | Tab
  setSelectedTab: (tab: null | Tab) => void
  type?: string
}

function SlidingTab({ tabs, selectedTab, setSelectedTab, type }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tabId = e.currentTarget.id
    const tab = tabs.find((tab) => tab.id === tabId)
    if (tab?.content) {
      setSelectedTab(tab)
    }
  }

  return (
    <div
      className={`tab-wrapper ${
        type === "LOGIN"
          ? "mb-4"
          : type === "homepage-article"
            ? "space-x-16 lg:space-x-[160px] border-b mb-4"
            : "space-x-16 border-b mb-6 lg:mb-9"
      } font-semibold `}
    >
      {tabs.map((tab) => {
        const selected = selectedTab?.id === tab.id

        return (
          <div key={tab.id} id={tab.id} onClick={handleClick} className={`tab-item ${selected ? "selected" : ""}`}>
            <div
              className={cn(
                `text-center`,
                type === "LOGIN"
                  ? `px-3 py-2 text-xl font-normal whitespace-nowrap leading-[30px] ${
                      selected ? "text-primary" : "text-[#BBB]"
                    }`
                  : type === "homepage-article"
                    ? `whitespace-nowrap pb-2 font-semibold text-[17px] ${selected ? "text-primary" : "text-[#BBB]"}`
                    : `whitespace-nowrap  pb-4 font-semibold text-2xl ${selected ? "text-primary" : "text-[#343434]"}`
              )}
            >
              {tab.name}
            </div>
            {selected ? (
              <motion.div
                className={`${type === "homepage-article" ? "tab-item-underline-homepage" : "tab-item-underline"}`}
              />
            ) : (
              <div className="tab-item-default-underline" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default SlidingTab
