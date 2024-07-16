"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { GraphQLError } from "graphql"
import { Loader2 } from "lucide-react"
import { useReCaptcha } from "next-recaptcha-v3"
import { useState } from "react"

import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"
import { registerHandler } from "@/common/lib/auth/authHandlers"
import {
  Enum_Userspermissionsuser_Areacode,
  Enum_Userspermissionsuser_Salutation,
  useRegisterMutation,
} from "@/common/lib/graphql/generated/graphql"
import PasswordInput from "@/components/auth/PasswordInput"
import Agreement from "@/components/auth/register/Agreement"
import ConfirmPasswordInput from "@/components/auth/register/ConfirmPasswordInput"
import EmailInput from "@/components/auth/register/EmailInput"
import InterestedAreaCheckbox from "@/components/auth/register/InterestedAreaCheckbox"
import RegisterPasswordInput from "@/components/auth/register/RegisterPasswordInput"
import UsernameInput from "@/components/auth/register/UsernameInput"
import Button from "@/components/common/molecule/button/Button"
import { Tab } from "@/components/tab/SlidingTab"
import { DialogFooter } from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { accountFormSchema } from "./my-account/accountFormSchema"
import CountryCodeSelect from "./register/CountryCodeSelect"
import DOBMSelect from "./register/DOBMSelect"
import DOBYSelect from "./register/DOBYSelect"
import PhoneNumberInput from "./register/PhoneNumberInput"
import SalutationSelect from "./register/SalutationSelect"

const phoneRegex = new RegExp(/^\d{4} ?\d{4}$/)
const usernameRegex = new RegExp(/^[a-zA-Z0-9 ]{3,}$/)
const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).{8,}$/)
const registerFormSchema = z
  .object({
    salutation: z.nativeEnum(Enum_Userspermissionsuser_Salutation),
    agreement: z.boolean().refine((value) => value === true, { message: "請同意條款和條件" }),
    username: z
      .string()
      .refine((value) => value.trim() !== "", { message: "用戶名稱是必填項" })
      .refine((value) => value.length >= 3, { message: "輸入最少3位字元" }) // Minimum length requirement
      .refine((value) => usernameRegex.test(value), { message: "請輸入有效的用戶名稱" }), // Regex validation
    email: z
      .string()
      .min(1, { message: "請輸入電郵地址" }) // Validation for required
      .regex(emailRegex, { message: "電郵地址格式不正確" }), // Validation for regex expression
    areaCode: z.nativeEnum(Enum_Userspermissionsuser_Areacode),
    phoneNumber: z.string().min(1, { message: "此欄必須填寫" }).regex(phoneRegex, { message: "電話號碼不正確" }),
    DOBM: z.string().min(1, { message: "請輸入DOBM" }),
    DOBY: z.string().min(1, { message: "請輸入DOBM" }),
    password: z
      .string()
      .min(1, { message: "請輸入密碼" })
      .regex(passwordRegex, { message: "請符合要求的格式，輸入最少8位字元，且需包含1個數字、英文字母大寫及一個符號" }),

    confirmPassword: z
      .string()
      .min(1, { message: "此欄必須填寫" })
      .regex(passwordRegex, { message: "請符合要求的格式，輸入最少8位字元，且需包含1個數字、英文字母大寫及一個符號" }),
    interested_areas: z.array(z.string()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "密碼不一致",
    path: ["confirmPassword"],
  })

export type RegisterFormValues = z.infer<typeof registerFormSchema>

const defaultValues: RegisterFormValues = {
  salutation: Enum_Userspermissionsuser_Salutation.Mr,
  username: "",
  email: "",
  areaCode: Enum_Userspermissionsuser_Areacode.China_86,
  phoneNumber: "",
  DOBM: "",
  DOBY: "",
  password: "",
  confirmPassword: "",
  interested_areas: [],
  agreement: false,
}

type RegisterFormProps = {
  csrfToken?: string
  onSuccess?: () => void
  onFail?: () => void
  setSelectedTabId: (tabId: string) => void
}

export const RegisterForm = ({ csrfToken, onSuccess, onFail, setSelectedTabId }: RegisterFormProps) => {
  const [registerMutation, { loading }] = useRegisterMutation()
  const [isLoading, setIsLoading] = useState(false)
  const { executeRecaptcha } = useReCaptcha()
  const [isSubmitted, setIsSubmitted] = useState(false) // Track submission status
  const [submittedUsername, setSubmittedUsername] = useState("") // Use state hook
  const [errorHidden, seterrorHidden] = useState<string | null>(null)
  // let submittedUsername: string = "";

  // 1. Define form.
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  })

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<RegisterFormValues> = async (formValues, e) => {
    const recaptchaToken = await executeRecaptcha("registration")
    e?.preventDefault()
    setIsLoading(true)
    const { salutation, username, email, areaCode, phoneNumber, password, interested_areas, agreement } = formValues
    const DOBM = parseInt(formValues.DOBM)
    const DOBY = parseInt(formValues.DOBY)
    try {
      const ok = await registerHandler({
        salutation,
        username,
        email,
        areaCode,
        phoneNumber,
        DOBM,
        DOBY,
        password,
        csrfToken,
        interested_areas,
        recaptchaToken,
        registerMutation,
        agreement,
      })
      if (ok) {
        setSubmittedUsername(formValues.username) // Update state instead of assignment
        console.log("Submitted Username:", submittedUsername)
        const successMessage = `註冊成功, 請登入`
        toast.success(successMessage)
        onSuccess?.()
        setIsSubmitted(true)
      } else {
        onFail?.()
      }
    } catch (error) {
      const graphqlError = error as GraphQLError
      const errorMessage = graphqlError.message
      toast.error(errorMessage)
      if (errorMessage === "此電郵已被註冊") {
        seterrorHidden(errorMessage || "")
      }
    }
    setIsLoading(false)
  }

  const disableSubmit = form.formState.isSubmitting || isLoading || loading
  if (isSubmitted) {
    return (
      <div className="">
        <div className="flex flex-col text-center ">
          <p className="mb-6 text-center text-2xl font-bold ">會員註冊成功</p>

          <p className="m-auto max-w-[389px] text-center text-[17px] leading-7 font-normal">
            {submittedUsername} 您好，感謝登記成CAPITAL會員。
          </p>
          <div className="register flex justify-center pt-6">
            <button
              className="button-primary w-full bg-[#DA0202] text-white rounded px-6 py-[7px]"
              onClick={() => setSelectedTabId("1")}
              aria-label="Show Login form"
            >
              明白了
            </button>
          </div>
          <style>{`
    .hide-inline{
      display:none;
    }
    `}</style>
        </div>
      </div>
    )
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-0 overflow-auto max-h-[450px] md:max-h-[500px] scrollbar-hide"
      >
        <div className="grid gap-6 py-6 ">
          <div className="items-center  md:max-w-none">
            <SalutationSelect form={form} />
            <UsernameInput form={form} />
            <EmailInput form={form} errorMessage={errorHidden} />
            <div className="flex-col relative">
              <label htmlFor="phone" className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">
                聯絡電話
              </label>
              <div className="flex space-x-4 mb-6">
                <CountryCodeSelect form={form} />
                <PhoneNumberInput form={form} />
              </div>
            </div>
            <div className="flex-col mb-6">
              <label htmlFor="dob" className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">
                出生日期
              </label>
              <div className="flex space-x-4">
                <DOBMSelect form={form} />
                <DOBYSelect form={form} />
              </div>
            </div>

            <RegisterPasswordInput form={form} name="password" />
            <ConfirmPasswordInput form={form} />
            <InterestedAreaCheckbox form={form} />
            <Agreement form={form} />
          </div>
        </div>
        <>
          <Button type="submit" className="w-full cta" disabled={disableSubmit}>
            {disableSubmit && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            註冊
          </Button>
        </>
      </form>
    </Form>
  )
}
