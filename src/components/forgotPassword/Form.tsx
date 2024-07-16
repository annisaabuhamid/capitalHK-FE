"use client"
import Link from "next/link"
import React, { ChangeEvent, FormEvent, useState } from "react"
import Container from "@/components/common/atom/container/Container"
import { getStrapiURL } from "@/utils"

interface ForgotPasswordProps {}

const Form: React.FC<ForgotPasswordProps> = () => {
  const [showForm, setShowForm] = useState<boolean>(true)
  const [message, setMessage] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")

  const handleSubmitAction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const emailPattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if (!email) {
      setEmailError("電郵地址是必填欄位")
    } else if (!emailPattern.test(email)) {
      setEmailError("請輸入有效的電郵地址")
    } else {
      setEmailError("")
    }

    try {
      const response = await fetch(getStrapiURL(`/api/auth/forgot-password`), {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setShowForm(false)
        setMessage(` ${email}`)
      } else {
        console.error("Password Reset request failed.")
      }
    } catch (error) {
      console.error("Network error:", error)
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setEmailError("")
  }

  return (
    <Container>
      <div className="max-w-[1200px] mx-auto mt-6 mb-20 px-5 md:px-0">
        {showForm && (
          <div>
            <div>
              <h1 className="font-semibold text-center text-black">忘記密碼</h1>
              <p className="text-base text-center py-12">我們將向您發送一封電子郵件以重設您的密碼。</p>
            </div>
            <div className={`max-w-[432px] mx-auto `}>
              <form onSubmit={handleSubmitAction}>
                <label className="text-base font-semibold">電郵地址</label>
                <input
                  placeholder="請輸入電郵地址"
                  value={email}
                  onChange={handleEmailChange}
                  id="email"
                  className={`block w-full border email-forgot-password  px-3 py-[10px] mt-2 placeholder-tertiary-600 text-base ${
                    emailError ? "border-red-600" : "border-tertiary-600"
                  }`}
                />
                {emailError && <span className="text-red-500 text-sm mt-1">{emailError}</span>}
                <button
                  className="bg-primary-900 font-medium w-full text-white  py-2 px-5 mt-6"
                  type="submit"
                  aria-label="Submit"
                >
                  送出
                </button>
              </form>
            </div>
          </div>
        )}
        {message && (
          <div className="max-w-[1200px] mx-auto mt-6 mb-20">
            <div className="max-w-[432px] mx-auto ">
              <p className="text-center pb-12 pt-9 text-base ">
                重設密碼郵件已發送至
                <span className="text-base">{message}</span>
              </p>
              <Link href={"/"}>
                <button
                  className="bg-primary-900 w-full text-white text-base font-medium  py-2 px-5"
                  aria-label="Back to Home"
                >
                  回主頁
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Form
