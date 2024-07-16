import Link from "next/link"
import { useReCaptcha } from "next-recaptcha-v3"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { strapiUrl } from "@/common/utils/data/constants"

import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useWindowSize from "@/utils/useWindowSize"

interface NewsletterFormProps {
  onOpenChange: () => void // Define the prop type
}

interface FormData {
  email: string
  recaptchaToken: string
  // interested_areas: number[];
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onOpenChange }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm<FormData>()
  const { executeRecaptcha } = useReCaptcha()
  const [isShow, setIsShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const {
    newsletterDialogIsOpen: isOpen,
    setNewsletternDialogIsOpen: setIsOpen,
    setMobileMenuIsOpen: setMobileMegaMenuIsOpen,
    setMegaMenuIsOpen,
    setNewsletternDialogIsOpen,
  } = useGlobalContext()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    data.recaptchaToken = await executeRecaptcha("subscribeNewsletter")
    try {
      const response = await fetch(`${strapiUrl}/api/newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      })

      if (response.ok) {
        console.log("success")
        //   onOpenChange(false);
        setIsShow(true)
        setSuccess(true)
        setMessage("訂閱成功")
      } else {
        const errorData = await response.json() // Assuming the error response is in JSON format
        console.error("Failed to subscribe:", (errorData as { error?: { message?: string } })?.error?.message)
        let message = (errorData as { error?: { message?: string } })?.error?.message
        if (message?.includes("subscribed")) {
          message = "此電郵已經訂閱電子報"
        }
        setError("email", { type: "custom", message: message })
      }
    } catch (error) {
      console.error("Error subscribing:", error)
    }
  }
  let { isMobile, isDesktop } = useWindowSize()
  const handleButtonClick = () => {
    setNewsletternDialogIsOpen(false)
    onOpenChange()
    if (isDesktop) {
      setMobileMegaMenuIsOpen(false)
    }
    if (isMobile) {
      setMobileMegaMenuIsOpen(true)
    }
  }
  return (
    <>
      {isShow == false ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="space-y-0 text-[14px] leading-[22px] font-bold font-noto mt-6 text-black">
              填寫電郵訂閱CAPITAL！你將定期收到我們的電子通訊，讓你緊貼我們的最新動向。
            </div>
            <div className="flex flex-col pt-6 pb-4">
              <Input
                {...register("email", { required: "請輸入電郵地址" })}
                type="email"
                placeholder="電郵地址"
                className="w-full border border-secondary-300 text-[14px] leading-[22px] tracking-[0.5px] rounded-sm bg-transparent p-[12px] font-noto placeholder-[#8B8B8B] outline-none"
              />
              {errors?.email ? <span className="text-xs text-primary-900 pt-1">{errors?.email?.message}</span> : null}
            </div>
            <Button type="submit" className="w-full rounded">
              訂閱電子報
            </Button>
          </div>
          <div className="flex flex-col w-full justify-center items-center pt-3">
            <div>
              <span className="text-black text-[10px] font-normal font-noto leading-[14px]">
                註冊CAPITAL電郵訂閱，包含獨家推廣，最新商品信息，最新活動以及其他資訊。詳情參見我們的
              </span>
              <Link href={"/page/terms-disclaimer"}>
                <span className="text-black text-[10px] font-normal font-noto underline leading-[14px]">私隱政策</span>
              </Link>
              <span className="text-black text-[10px] font-normal font-noto leading-[14px]">。</span>
            </div>
          </div>
        </form>
      ) : (
        <div className="pt-6 pb-3">
          <div className="font-semibold text-[24px] leading-[32px] text-center">成功訂閱</div>
          <div className="py-6 text-center">
            <span className="text-center text-[17px] leading-[27px]">
              感謝你訂閱我們的電子郵件，你將會定期得到CAPITAL 活動信息。
            </span>
          </div>
          <button
            className="w-[287px] mt-[4px] h-10 px-6 py-[7px] bg-primary-900 rounded justify-center items-start gap-3 inline-flex"
            //   onClick={() => onOpenChange(!isOpen)}
            onClick={handleButtonClick}
          >
            <div className="justify-center items-center gap-1 flex">
              <div className="text-justify text-white text-sm font-bold font-noto leading-relaxed">明白了</div>
            </div>
          </button>
        </div>
      )}
    </>
  )
}

export default NewsletterForm
function setMobileMegaMenuIsOpen(arg0: boolean) {
  throw new Error("Function not implemented.")
}
