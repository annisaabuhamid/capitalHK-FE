"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useReCaptcha } from "next-recaptcha-v3"
import { memo, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"
import { loginHandler } from "@/common/lib/auth/authHandlers"
import IdentifierInput from "@/components/auth/IdentifierInput"
import PasswordInput from "@/components/auth/PasswordInput"
import { PersistentLoginCheckbox } from "@/components/auth/PersistentLoginCheckbox"
import Button from "@/components/common/molecule/button/Button"
import { Form, FormMessage } from "@/components/ui/form"

const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).{8,}$/)
const loginFormSchema = z.object({
  identifier: z
    .string()
    .min(1, { message: "請輸入電郵地址" }) // Validation for required
    .regex(emailRegex, { message: "電郵地址格式不正確" }), // Validation for regex expression
  password: z
    .string()
    .min(1, { message: "請輸入密碼" })
    .regex(passwordRegex, { message: "請符合要求的格式，輸入最少8位字元，且需包含1個數字、英文字母大寫及一個符號" }),
  recaptchaToken: z.string(),
})

export type LoginFormValues = z.infer<typeof loginFormSchema>

const defaultValues: LoginFormValues = {
  identifier: "",
  password: "",
  recaptchaToken: "",
}

type LoginFormProps = {
  csrfToken?: string
  onSuccess?: () => void
  onFail?: () => void
}

export const LoginForm = ({ csrfToken, onSuccess, onFail }: LoginFormProps) => {
  const { executeRecaptcha } = useReCaptcha()
  const [isLoading, setIsLoading] = useState(false)
  // 1. Define form.
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  })
  const [errorHidden, seterrorHidden] = useState<string | null>(null)
  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<LoginFormValues> = async (formValues, e) => {
    const recaptchaToken = await executeRecaptcha("login")
    e?.preventDefault()
    setIsLoading(true)
    // ✅ This will be type-safe and validated.
    const { identifier, password } = formValues

    const response = await loginHandler({
      identifier,
      password,
      recaptchaToken,
      csrfToken,
    })
    // if (response) {
    //   onSuccess?.()
    // } else {
    //   onFail?.()
    // }

    if (response && response?.ok === false) {
      seterrorHidden(response.error) // Provide a default value of ''
      // onFail?.() // Optionally call onFail if needed
    } else {
      onSuccess?.()
    }
    setIsLoading(false)
  }
  const loading = form.formState.isLoading || isLoading

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid pt-6 pb-3">
          <div className="grid items-center gap-4">
            <IdentifierInput form={form} />
          </div>
          <div className="grid items-center space-y-0">
            <PasswordInput<LoginFormValues> form={form} name="password" />
          </div>
          <div className="flex justify-between items-center pt-3 pb-6">
            <PersistentLoginCheckbox />
            <ForgotPasswordButton />
          </div>

          {errorHidden && (
            <FormMessage className="text-xs font-normal text-primary-800 py-1">{errorHidden}</FormMessage>
          )}
          <Button type="submit" className="w-full cta" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            登入
          </Button>
        </div>
        <>
          <div className="text-[10px] leading-[14px] font-normal text-black space-y-2">
            <div>
              一經登記或登入, 即表示閣下已詳細閱讀並且同意CAPITAL
              <Link href="/page/terms-disclaimer" target="_blank" className="underline underline-offset-2">
                網站私隱政策與使用條款
              </Link>
              。
            </div>
            <div className="whitespace-nowrap">
              本網站受 reCAPTCHA 保護，適用 Google
              <Link href="/page/terms-disclaimer" target="_blank" className="underline underline-offset-2">
                隱私政策
              </Link>
              和
              <Link href="/page/terms-disclaimer" target="_blank" className="underline underline-offset-2">
                服務條款
              </Link>
              。
            </div>
          </div>
        </>
      </form>
    </Form>
  )
}

export const LoginFormMemo = memo(LoginForm)

const ForgotPasswordButton = () => {
  return (
    <div>
      <Link className="flex items-center justify-center" target="_blank" href="/forgot-password">
        <span className="forgot-password-button" style={{ textDecorationSkipInk: "none" }}>
          忘記密碼？
        </span>
      </Link>
    </div>
  )
}
