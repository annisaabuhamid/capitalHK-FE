"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  useFindNewsletterSubscriptionQuery,
  useSubscribeNewsMutation,
  useUnsubscribeNewsMutation,
} from "@/common/lib/graphql/generated/graphql"
import { useAuth } from "@/common/lib/auth/useAuth"
import toast from "react-hot-toast"
import Link from "next/link"

export default function MyAccountNewsletter() {
  const router = useRouter()
  const { userId, user } = useAuth()
  const [initialNewsletterSubscribed, setInitialNewsletterSubscribed] = useState(false)
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)
  const { data, refetch } = useFindNewsletterSubscriptionQuery({
    variables: { id: userId },
  })
  const [subscribeNewsMutation] = useSubscribeNewsMutation()
  const [unsubscribeNewsMutation] = useUnsubscribeNewsMutation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (data) {
      setNewsletterSubscribed(true)
      setInitialNewsletterSubscribed(true)
    } else {
      setNewsletterSubscribed(false)
      setInitialNewsletterSubscribed(false)
    }
  }, [data])

  const handleSubscribe = async () => {
    try {
      if (userId) {
        setLoading(true)
        if (newsletterSubscribed !== initialNewsletterSubscribed) {
          if (newsletterSubscribed) {
            await subscribeNewsMutation({
              variables: {
                id: userId,
              },
            })
            toast.success("訂閱成功")
          } else {
            await unsubscribeNewsMutation({
              variables: {
                id: userId,
              },
            })
            toast.success("退訂成功")
          }
          setLoading(false)
          refetch()
          setInitialNewsletterSubscribed(newsletterSubscribed) // Update initial state
        } else {
          console.log("Checkbox value not changed.")
        }
      }
    } catch (error) {
      console.error("Error toggling subscription:", error)
      setLoading(false)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleSubscribe()
  }

  if (!userId) return null

  return (
    <div>
      <h1 className="mb-8">電子報訂閱</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row mb-12">
          <div className="flex flex-row items-center">
            <div className="flex justify-between items-center mr-10">
              <div className="inline-flex items-start">
                <div className="flex self-center">
                  <label className="container-checkmark">
                    <input
                      type="checkbox"
                      id="newsletterCheckbox"
                      checked={newsletterSubscribed}
                      name="newsletterSubscribe"
                      onClick={() => setNewsletterSubscribed(!newsletterSubscribed)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label
                    className="label-text text-sm ml-2 flex justify-center items-center"
                    htmlFor="newsletterCheckbox"
                  >
                    Capital 電郵訂閱，包含獨家推廣，最新商品信息，最新活動以及其他資訊
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            type="submit"
            className="bg-[#2D2D2D] hover:bg-[#1A1818] text-white px-6"
            disabled={loading || newsletterSubscribed === initialNewsletterSubscribed}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            儲存更改
          </Button>
          <Link href="/my-account">
            <Button
              onClick={(e) => {
                e.stopPropagation()
              }}
              type="button"
              variant="outline"
              className="px-6"
            >
              取消
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
