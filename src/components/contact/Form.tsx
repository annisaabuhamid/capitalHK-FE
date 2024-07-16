"use client"
import { useReCaptcha } from "next-recaptcha-v3"
import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface FormData {
  email: string
  name: string
  message: string
  recaptchaToken: string
}

const Form: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const { executeRecaptcha } = useReCaptcha()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const email = data.email
    const name = data.name
    const message = data.message
    const recaptchaToken = await executeRecaptcha("contactus")
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    const url = `${strapiUrl}/api/contact-us`

    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          message,
          recaptchaToken,
        }),
      })

      const response = (await result.json()) as { message?: string }

      if (response.message) {
        setSuccessMessage("謝謝你的意見，我們將會盡快回覆。")
      } else {
        setSuccessMessage("")
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error)
    }
  }
  return (
    <form className="flex flex-1 flex-col pt-8 lg:pl-8 lg:pt-0" onSubmit={handleSubmit(onSubmit)}>
      <div className="h3 text-center text-xl lg:text-left">一般查詢</div>
      <label className="pt-8 text-base font-semibold lg:pt-8" htmlFor="email">
        電郵地址
      </label>
      <input
        className={`block w-full  border p-2.5 mt-2 px-4 py-[10px] text-base `}
        type="text"
        placeholder="請輸入電郵地址"
        {...register("email", {
          required: true,
          pattern: new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        })}
      ></input>
      {errors?.email?.type == "pattern" ? <span className="text-xs text-primary-900">電郵地址格式不正確</span> : null}
      {errors?.email?.type == "required" && <span className="text-xs text-primary-900">電郵地址是必填欄位</span>}
      <label className="pt-6 text-base font-semibold" htmlFor="name">
        姓名
      </label>
      <input
        className={`block w-full  border p-2.5 mt-2 px-4 py-[10px] text-base 
        `}
        type="text"
        placeholder="請輸入姓名"
        {...register("name", {
          required: true,
        })}
        id="name"
      />
      {errors?.name?.type == "required" && <span className="text-xs text-primary-900">请输入你的名字</span>}
      <label className="pt-6 text-base font-semibold " htmlFor="message">
        你的訊息
      </label>
      <textarea
        placeholder="請輸入你的訊息"
        id="message"
        {...register("message", {
          required: true,
        })}
        className={`mt-2 h-60 border   px-4 py-[10px] text-base`}
      />

      {errors?.message?.type == "required" && <span className="text-xs text-primary-900">此欄必須填寫</span>}
      <span>{successMessage}</span>
      <button type="submit" aria-label="Submit" className="mt-8  bg-black px-5 py-2 text-white">
        送出
      </button>
    </form>
  )
}

export default Form
