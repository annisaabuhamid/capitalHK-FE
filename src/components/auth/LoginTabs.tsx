"use client"

import { useCallback, useMemo, useState } from "react"
import { LoginForm } from "@/components/auth/LoginForm"
import { RegisterForm } from "@/components/auth/RegisterForm"
import SlidingTab, { Tab } from "@/components/tab/SlidingTab"

type Props = {
  csrfToken?: string
  onSuccess?: () => void
}
export const LoginTabs = ({ csrfToken, onSuccess }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState<string | null>("1")

  const tabs: Tab[] = useMemo(() => {
    return [
      {
        id: "1",
        name: "登入",
        content: <LoginForm csrfToken={csrfToken} onSuccess={onSuccess} />,
      },
      {
        id: "2",
        name: "註冊",
        content: <RegisterForm setSelectedTabId={setSelectedTabId} />,
      },
    ]
  }, [csrfToken, onSuccess])

  const selectedTab = useMemo(() => {
    return tabs.find((tab) => tab.id === selectedTabId) || null
  }, [tabs, selectedTabId])

  const setSelectedTab = useCallback((tab: null | Tab) => {
    if (tab?.id) setSelectedTabId(tab.id)
  }, [])

  return (
    <div className="">
      <div className="max-w-[335px] md:max-w-[424px] border-b -ml-6 -mr-6 hide-inline">
        <div className="w-[140px] mx-auto -mb-[15px]">
          <SlidingTab tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} type={"LOGIN"} />
        </div>
      </div>
      {/* content */}
      <div className="mx-auto">{selectedTab ? selectedTab.content : "😋"}</div>
    </div>
  )
}
