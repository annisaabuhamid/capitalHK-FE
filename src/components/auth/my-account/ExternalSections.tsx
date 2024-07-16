"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
import { useFindNewsletterSubscriptionQuery } from "@/common/lib/graphql/generated/graphql"
import { Button } from "@/components/ui/button"

type Props = {}

function ExternalSections({}: Props) {
  const { userId } = useAuth()
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)
  const { data } = useFindNewsletterSubscriptionQuery({ variables: { id: userId } })

  useEffect(() => {
    if (data) {
      setNewsletterSubscribed(true)
    } else {
      setNewsletterSubscribed(false)
    }
  }, [data])

  if (!userId) return null

  return (
    <div>
      <div className="h2 font-bold mb-3">密碼管理</div>
      <div className="w-full border-b border-black mb-6"></div>
      <Link href="/my-account/edit-password">
        <Button
          onClick={(e) => {
            e.stopPropagation()
          }}
          type="button"
          className="bg-[#2D2D2D] hover:bg-[#1A1818] text-white px-6"
        >
          更改密碼
        </Button>
      </Link>

      <div className="h2 font-bold mb-3 mt-12">電郵訂閱</div>
      <div className="w-full border-b border-black mb-6"></div>

      {newsletterSubscribed ? (
        <div className="mb-3 text-sm text-[#1E1E1E]">你已經訂閱CAPITAL電郵。</div>
      ) : (
        <div className="mb-3 text-sm text-[#1E1E1E]">你尚未訂閱CAPITAL電郵。</div>
      )}

      <Link href="/my-account/newsletter">
        <Button
          onClick={(e) => {
            e.stopPropagation()
          }}
          type="button"
          className="bg-[#2D2D2D] hover:bg-[#1A1818] text-white px-6"
        >
          修改
        </Button>
      </Link>
    </div>
  )
}

export default ExternalSections
