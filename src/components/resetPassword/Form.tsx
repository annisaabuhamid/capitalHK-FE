"use client"
import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useReCaptcha } from "next-recaptcha-v3"
import { useEffect, useState } from "react"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { getStrapiURL } from "@/utils"

interface ResetPasswordProps {
  global: any // Replace 'any' with the actual type of your global data
  pageData: any // Replace 'any' with the actual type of your page data
  preview: boolean
}

interface FormData {
  password: string
  passwordConfirmation: string
  code: string
}

const Form: React.FC = () => {
  // const router = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    formState: { isValid, errors },
  } = useForm<FormData>()

  const [code, setCode] = useState<string>("")
  const [submiterrors, setSubmitErrors] = useState<string | null>(null)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(true)
  const [message, setMessage] = useState<string>("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const codeFromURL = urlSearchParams.get("code")

    if (codeFromURL) {
      setCode(codeFromURL as string)
      validateCodeFromURL(codeFromURL as string)
    } else {
      console.error("Code parameter not found in the URL")
    }
  }, [])

  const toggleShowPassword = () => setShowPassword((prev) => !prev)
  const toggleConfirmShowPassword = () => setShowConfirmPassword((prev) => !prev)

  const validateCodeFromURL = async (code: string) => {
    try {
      const requestData = {
        code: code,
        password: "null",
        passwordConfirmation: "null",
      }

      const response = await fetch(getStrapiURL(`/api/auth/reset-password`), {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const errorData = (await response.json()) as { data?: null; error?: { message?: string } }
      console.log("response", errorData.error?.message)
      if (!response.ok) {
        // const errorData = await response.json();
        if (
          errorData.error?.message === "The reset password code has already been used." ||
          errorData.error?.message === "Incorrect code provided"
        ) {
          setShowForm(false)
          setMessage("重置密碼代碼已被使用。")
        } else {
          console.error("Code validation failed. Status:", response.status, "Error:", errorData)
        }
      } else {
        setShowForm(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmitAction: SubmitHandler<FormData> = async (formData) => {
    formData.code = code
    try {
      const response = await fetch(getStrapiURL(`/api/auth/reset-password`), {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        // setSubmitErrors(response.error?.message);
        console.error("Password reset request failed.")
      } else {
        setShowForm(false)
        setMessage(`密碼已成功更改`)
      }
      setSubmitStatus("success")
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-6 mb-20 px-5 md:px-0">
      {showForm && (
        <div>
          <div>
            <h1 className="font-bold text-center">忘記密碼</h1>
            <p className="text-base text-center py-12">我們將向您發送一封電子郵件以重設您的密碼。</p>
          </div>
          <div className={`max-w-[432px] mx-auto `}>
            <form className="myaccount-wrapper h-[400px] overflow-auto" onSubmit={handleSubmit(handleSubmitAction)}>
              <div className="account-info pb-6">
                <label htmlFor="password" className="mb-2 block font-semibold">
                  新密碼
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="請輸入設定密碼"
                    {...register("password", {
                      required: true,
                      pattern: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).{8,}$/),
                    })}
                    className={`block w-full border email-reset-pasword px-[12px] py-[10px] ${
                      errors.password && "error"
                    }`}
                  ></input>
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    aria-label="Show or hide password"
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M23.0136 11.7722C22.9817 11.6991 22.2017 9.96938 20.4599 8.2275C18.8436 6.61313 16.0667 4.6875 11.9999 4.6875C7.93299 4.6875 5.15611 6.61313 3.53986 8.2275C1.79799 9.96938 1.01799 11.6963 0.986113 11.7722C0.954062 11.8442 0.9375 11.9221 0.9375 12.0009C0.9375 12.0798 0.954062 12.1577 0.986113 12.2297C1.01799 12.3019 1.79799 14.0316 3.53986 15.7734C5.15611 17.3878 7.93299 19.3125 11.9999 19.3125C16.0667 19.3125 18.8436 17.3878 20.4599 15.7734C22.2017 14.0316 22.9817 12.3047 23.0136 12.2297C23.0457 12.1577 23.0622 12.0798 23.0622 12.0009C23.0622 11.9221 23.0457 11.8442 23.0136 11.7722ZM11.9999 18.1875C9.05799 18.1875 6.48924 17.1169 4.36393 15.0066C3.473 14.1211 2.71908 13.1078 2.12705 12C2.71891 10.8924 3.47285 9.87932 4.36393 8.99438C6.48924 6.88313 9.05799 5.8125 11.9999 5.8125C14.9417 5.8125 17.5105 6.88313 19.6358 8.99438C20.5269 9.87932 21.2808 10.8924 21.8727 12C21.2755 13.1447 18.2811 18.1875 11.9999 18.1875ZM11.9999 7.6875C11.1469 7.6875 10.3132 7.94042 9.60397 8.41429C8.89478 8.88815 8.34204 9.56167 8.01563 10.3497C7.68923 11.1377 7.60383 12.0048 7.77023 12.8413C7.93663 13.6779 8.34735 14.4463 8.95047 15.0494C9.55358 15.6525 10.322 16.0632 11.1585 16.2296C11.9951 16.396 12.8622 16.3106 13.6502 15.9842C14.4382 15.6578 15.1117 15.1051 15.5856 14.3959C16.0594 13.6867 16.3124 12.8529 16.3124 12C16.3109 10.8567 15.856 9.76067 15.0476 8.95225C14.2392 8.14382 13.1432 7.68899 11.9999 7.6875ZM11.9999 15.1875C11.3694 15.1875 10.7532 15.0006 10.229 14.6503C9.7048 14.3001 9.29625 13.8022 9.055 13.2198C8.81374 12.6374 8.75062 11.9965 8.87361 11.3781C8.9966 10.7598 9.30018 10.1919 9.74596 9.7461C10.1917 9.30032 10.7597 8.99674 11.378 8.87375C11.9963 8.75076 12.6372 8.81388 13.2197 9.05513C13.8021 9.29639 14.2999 9.70494 14.6502 10.2291C15.0004 10.7533 15.1874 11.3696 15.1874 12C15.1874 12.8454 14.8515 13.6561 14.2538 14.2539C13.656 14.8517 12.8452 15.1875 11.9999 15.1875Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4.91611 3.37483C4.81314 3.27925 4.67812 3.22567 4.53762 3.22462C4.39713 3.22358 4.26133 3.27515 4.15694 3.36919C4.05256 3.46323 3.98715 3.59294 3.97357 3.73278C3.96 3.87262 3.99926 4.01248 4.08361 4.12483L6.04111 6.28108C2.54611 8.33421 1.0508 11.6248 0.986113 11.772C0.954062 11.844 0.9375 11.922 0.9375 12.0008C0.9375 12.0796 0.954062 12.1575 0.986113 12.2295C1.01799 12.3017 1.79799 14.0314 3.53986 15.7733C5.15611 17.3876 7.93299 19.3123 11.9999 19.3123C13.6998 19.3227 15.3815 18.9628 16.9283 18.2576L19.0846 20.6286C19.185 20.739 19.3252 20.805 19.4743 20.812C19.6234 20.819 19.7692 20.7665 19.8796 20.6661C19.9899 20.5656 20.0559 20.4254 20.063 20.2764C20.07 20.1273 20.0175 19.9815 19.917 19.8711L4.91611 3.37483ZM9.47424 10.0611L13.693 14.7036C13.0596 15.0994 12.3073 15.2602 11.5675 15.1579C10.8276 15.0556 10.1472 14.6968 9.6449 14.1441C9.14261 13.5913 8.85036 12.8798 8.81917 12.1335C8.78798 11.3873 9.01982 10.6538 9.47424 10.0611ZM11.9999 18.1873C9.05799 18.1873 6.48924 17.1167 4.36393 15.0064C3.47278 14.1212 2.71884 13.1078 2.12705 11.9998C2.52924 11.2311 4.01143 8.70171 6.81455 7.13327L8.7083 9.21546C8.03406 10.0144 7.67301 11.0311 7.6923 12.0763C7.71159 13.1216 8.10992 14.1242 8.81318 14.8978C9.51644 15.6713 10.4767 16.163 11.5154 16.2815C12.5541 16.3999 13.6005 16.137 14.4599 15.5417L16.1296 17.3792C14.8205 17.9209 13.4165 18.1956 11.9999 18.1873ZM12.5999 8.86858C12.4533 8.84061 12.3238 8.75556 12.24 8.63214C12.1561 8.50871 12.1247 8.35703 12.1527 8.21046C12.1806 8.06389 12.2657 7.93443 12.3891 7.85056C12.5125 7.7667 12.6642 7.7353 12.8108 7.76327C13.7268 7.94121 14.5607 8.41038 15.1883 9.10084C15.8159 9.79131 16.2036 10.6661 16.2936 11.5948C16.3005 11.6684 16.2927 11.7426 16.2709 11.8132C16.2491 11.8837 16.2135 11.9493 16.1664 12.0062C16.1192 12.063 16.0613 12.11 15.9959 12.1445C15.9306 12.1789 15.8591 12.2002 15.7855 12.207H15.733C15.5923 12.2076 15.4565 12.1555 15.3524 12.0609C15.2483 11.9663 15.1834 11.8362 15.1705 11.6961C15.1036 11.0108 14.8173 10.3654 14.3541 9.85597C13.891 9.34651 13.2757 9.00021 12.5999 8.86858ZM23.0136 12.2295C22.9752 12.3158 22.0414 14.3858 19.933 16.272C19.8783 16.3233 19.8139 16.3631 19.7436 16.3891C19.6733 16.4151 19.5985 16.4268 19.5236 16.4236C19.4488 16.4203 19.3753 16.402 19.3075 16.37C19.2398 16.3379 19.1791 16.2926 19.1292 16.2367C19.0792 16.1808 19.0409 16.1156 19.0165 16.0447C18.9921 15.9738 18.9821 15.8988 18.9871 15.824C18.9921 15.7492 19.012 15.6761 19.0457 15.6092C19.0793 15.5422 19.126 15.4826 19.183 15.4339C20.2728 14.4547 21.1831 13.2925 21.8727 11.9998C21.2808 10.892 20.5268 9.87861 19.6358 8.99327C17.5105 6.88296 14.9417 5.81233 11.9999 5.81233C11.3815 5.8116 10.7641 5.86177 10.1539 5.96233C10.0805 5.97618 10.005 5.97525 9.93187 5.95958C9.85877 5.94392 9.78952 5.91384 9.72818 5.8711C9.66684 5.82837 9.61463 5.77383 9.57461 5.71069C9.53459 5.64754 9.50756 5.57705 9.4951 5.50334C9.48264 5.42962 9.48499 5.35416 9.50203 5.28137C9.51907 5.20858 9.55045 5.13991 9.59433 5.07939C9.63822 5.01886 9.69372 4.96769 9.75761 4.92887C9.8215 4.89004 9.89249 4.86434 9.96643 4.85327C10.6385 4.74171 11.3186 4.68621 11.9999 4.68733C16.0667 4.68733 18.8436 6.61296 20.4599 8.22733C22.2017 9.96921 22.9817 11.6961 23.0136 11.772C23.0457 11.844 23.0622 11.922 23.0622 12.0008C23.0622 12.0796 23.0457 12.1575 23.0136 12.2295Z"
                          fill="black"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors?.password?.type === "pattern" ? (
                  <span className="text-xs text-secondary-400">
                    新密碼輸入最少8位字元，且需包含1個數字、英文字母大寫及一個符號
                  </span>
                ) : null}
                {errors?.password?.type === "required" && (
                  <span className="text-xs text-primary-900">此欄必須填寫</span>
                )}
              </div>
              <div className="account-info pb-6">
                <label htmlFor="passwordConfirmation" className="mb-2 block font-semibold">
                  再次輸入新密碼
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="請輸入確認密碼"
                    {...register("passwordConfirmation", {
                      required: true,
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "Passwords do not match"
                        }
                      },
                    })}
                    className={`block w-full border email-reset-pasword px-[12px] py-[10px] ${
                      errors.passwordConfirmation && "error"
                    }`}
                  ></input>
                  <button
                    type="button"
                    onClick={toggleConfirmShowPassword}
                    aria-label="Show or hide password"
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent"
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M23.0136 11.7722C22.9817 11.6991 22.2017 9.96938 20.4599 8.2275C18.8436 6.61313 16.0667 4.6875 11.9999 4.6875C7.93299 4.6875 5.15611 6.61313 3.53986 8.2275C1.79799 9.96938 1.01799 11.6963 0.986113 11.7722C0.954062 11.8442 0.9375 11.9221 0.9375 12.0009C0.9375 12.0798 0.954062 12.1577 0.986113 12.2297C1.01799 12.3019 1.79799 14.0316 3.53986 15.7734C5.15611 17.3878 7.93299 19.3125 11.9999 19.3125C16.0667 19.3125 18.8436 17.3878 20.4599 15.7734C22.2017 14.0316 22.9817 12.3047 23.0136 12.2297C23.0457 12.1577 23.0622 12.0798 23.0622 12.0009C23.0622 11.9221 23.0457 11.8442 23.0136 11.7722ZM11.9999 18.1875C9.05799 18.1875 6.48924 17.1169 4.36393 15.0066C3.473 14.1211 2.71908 13.1078 2.12705 12C2.71891 10.8924 3.47285 9.87932 4.36393 8.99438C6.48924 6.88313 9.05799 5.8125 11.9999 5.8125C14.9417 5.8125 17.5105 6.88313 19.6358 8.99438C20.5269 9.87932 21.2808 10.8924 21.8727 12C21.2755 13.1447 18.2811 18.1875 11.9999 18.1875ZM11.9999 7.6875C11.1469 7.6875 10.3132 7.94042 9.60397 8.41429C8.89478 8.88815 8.34204 9.56167 8.01563 10.3497C7.68923 11.1377 7.60383 12.0048 7.77023 12.8413C7.93663 13.6779 8.34735 14.4463 8.95047 15.0494C9.55358 15.6525 10.322 16.0632 11.1585 16.2296C11.9951 16.396 12.8622 16.3106 13.6502 15.9842C14.4382 15.6578 15.1117 15.1051 15.5856 14.3959C16.0594 13.6867 16.3124 12.8529 16.3124 12C16.3109 10.8567 15.856 9.76067 15.0476 8.95225C14.2392 8.14382 13.1432 7.68899 11.9999 7.6875ZM11.9999 15.1875C11.3694 15.1875 10.7532 15.0006 10.229 14.6503C9.7048 14.3001 9.29625 13.8022 9.055 13.2198C8.81374 12.6374 8.75062 11.9965 8.87361 11.3781C8.9966 10.7598 9.30018 10.1919 9.74596 9.7461C10.1917 9.30032 10.7597 8.99674 11.378 8.87375C11.9963 8.75076 12.6372 8.81388 13.2197 9.05513C13.8021 9.29639 14.2999 9.70494 14.6502 10.2291C15.0004 10.7533 15.1874 11.3696 15.1874 12C15.1874 12.8454 14.8515 13.6561 14.2538 14.2539C13.656 14.8517 12.8452 15.1875 11.9999 15.1875Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4.91611 3.37483C4.81314 3.27925 4.67812 3.22567 4.53762 3.22462C4.39713 3.22358 4.26133 3.27515 4.15694 3.36919C4.05256 3.46323 3.98715 3.59294 3.97357 3.73278C3.96 3.87262 3.99926 4.01248 4.08361 4.12483L6.04111 6.28108C2.54611 8.33421 1.0508 11.6248 0.986113 11.772C0.954062 11.844 0.9375 11.922 0.9375 12.0008C0.9375 12.0796 0.954062 12.1575 0.986113 12.2295C1.01799 12.3017 1.79799 14.0314 3.53986 15.7733C5.15611 17.3876 7.93299 19.3123 11.9999 19.3123C13.6998 19.3227 15.3815 18.9628 16.9283 18.2576L19.0846 20.6286C19.185 20.739 19.3252 20.805 19.4743 20.812C19.6234 20.819 19.7692 20.7665 19.8796 20.6661C19.9899 20.5656 20.0559 20.4254 20.063 20.2764C20.07 20.1273 20.0175 19.9815 19.917 19.8711L4.91611 3.37483ZM9.47424 10.0611L13.693 14.7036C13.0596 15.0994 12.3073 15.2602 11.5675 15.1579C10.8276 15.0556 10.1472 14.6968 9.6449 14.1441C9.14261 13.5913 8.85036 12.8798 8.81917 12.1335C8.78798 11.3873 9.01982 10.6538 9.47424 10.0611ZM11.9999 18.1873C9.05799 18.1873 6.48924 17.1167 4.36393 15.0064C3.47278 14.1212 2.71884 13.1078 2.12705 11.9998C2.52924 11.2311 4.01143 8.70171 6.81455 7.13327L8.7083 9.21546C8.03406 10.0144 7.67301 11.0311 7.6923 12.0763C7.71159 13.1216 8.10992 14.1242 8.81318 14.8978C9.51644 15.6713 10.4767 16.163 11.5154 16.2815C12.5541 16.3999 13.6005 16.137 14.4599 15.5417L16.1296 17.3792C14.8205 17.9209 13.4165 18.1956 11.9999 18.1873ZM12.5999 8.86858C12.4533 8.84061 12.3238 8.75556 12.24 8.63214C12.1561 8.50871 12.1247 8.35703 12.1527 8.21046C12.1806 8.06389 12.2657 7.93443 12.3891 7.85056C12.5125 7.7667 12.6642 7.7353 12.8108 7.76327C13.7268 7.94121 14.5607 8.41038 15.1883 9.10084C15.8159 9.79131 16.2036 10.6661 16.2936 11.5948C16.3005 11.6684 16.2927 11.7426 16.2709 11.8132C16.2491 11.8837 16.2135 11.9493 16.1664 12.0062C16.1192 12.063 16.0613 12.11 15.9959 12.1445C15.9306 12.1789 15.8591 12.2002 15.7855 12.207H15.733C15.5923 12.2076 15.4565 12.1555 15.3524 12.0609C15.2483 11.9663 15.1834 11.8362 15.1705 11.6961C15.1036 11.0108 14.8173 10.3654 14.3541 9.85597C13.891 9.34651 13.2757 9.00021 12.5999 8.86858ZM23.0136 12.2295C22.9752 12.3158 22.0414 14.3858 19.933 16.272C19.8783 16.3233 19.8139 16.3631 19.7436 16.3891C19.6733 16.4151 19.5985 16.4268 19.5236 16.4236C19.4488 16.4203 19.3753 16.402 19.3075 16.37C19.2398 16.3379 19.1791 16.2926 19.1292 16.2367C19.0792 16.1808 19.0409 16.1156 19.0165 16.0447C18.9921 15.9738 18.9821 15.8988 18.9871 15.824C18.9921 15.7492 19.012 15.6761 19.0457 15.6092C19.0793 15.5422 19.126 15.4826 19.183 15.4339C20.2728 14.4547 21.1831 13.2925 21.8727 11.9998C21.2808 10.892 20.5268 9.87861 19.6358 8.99327C17.5105 6.88296 14.9417 5.81233 11.9999 5.81233C11.3815 5.8116 10.7641 5.86177 10.1539 5.96233C10.0805 5.97618 10.005 5.97525 9.93187 5.95958C9.85877 5.94392 9.78952 5.91384 9.72818 5.8711C9.66684 5.82837 9.61463 5.77383 9.57461 5.71069C9.53459 5.64754 9.50756 5.57705 9.4951 5.50334C9.48264 5.42962 9.48499 5.35416 9.50203 5.28137C9.51907 5.20858 9.55045 5.13991 9.59433 5.07939C9.63822 5.01886 9.69372 4.96769 9.75761 4.92887C9.8215 4.89004 9.89249 4.86434 9.96643 4.85327C10.6385 4.74171 11.3186 4.68621 11.9999 4.68733C16.0667 4.68733 18.8436 6.61296 20.4599 8.22733C22.2017 9.96921 22.9817 11.6961 23.0136 11.772C23.0457 11.844 23.0622 11.922 23.0622 12.0008C23.0622 12.0796 23.0457 12.1575 23.0136 12.2295Z"
                          fill="black"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors?.passwordConfirmation?.type === "validate" ? (
                  <span className="text-xs text-secondary-400">新密碼及確認新密碼不一致</span>
                ) : null}
                {errors?.passwordConfirmation?.type === "required" && (
                  <span className="text-xs text-primary-900">此欄必須填寫</span>
                )}
              </div>
              {submiterrors != null ? <div className="text-xs text-secondary-400 pb-3">{submiterrors}</div> : null}
              <div>
                <button
                  type="submit"
                  aria-label="Submit"
                  className="w-full bg-primary-900 px-5 py-2 text-center font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-500 disabled:opacity-50"
                >
                  送出
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {message && (
        <div className=" max-w-[1200px] mx-auto mt-6 mb-20">
          <div className="max-w-[432px] mx-auto ">
            <p className="text-center pb-12 pt-9 text-base font-normal">{message}</p>
            <Link href={"/"}>
              <button className="bg-primary-900 w-full text-white  py-2 px-5" type="submit" aria-label="Submit">
                回主頁
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form
