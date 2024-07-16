"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"
import { useAuth } from "@/common/lib/auth/useAuth"
import { useUpdateUsersPermissionsUserMutation } from "@/common/lib/graphql/generated/graphql"
import PasswordInput from "@/components/auth/PasswordInput"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

export const editPasswordFormSchema = z
  .object({
    password: z.string().min(8, "密碼長度至少8個字元"),
    confirmPassword: z.string().min(8, "密碼長度至少8個字元"),
    currentPassword: z.string().min(8, "密碼長度至少8個字元"),
  })
  .superRefine(
    ({ confirmPassword, password }, ctx) => {
      console.log(confirmPassword, password, "hi")
      if (confirmPassword !== password) {
        ctx.addIssue({
          path: ["confirmPassword"],
          code: "custom",
          message: "密碼不一致",
        })
      }
    }

    // data.password === data.confirmPassword
    // {
    //   message: "密碼不一致",
    //   path: ["confirmPassword"],
    // }
  )
export type EditPasswordFormValues = z.infer<typeof editPasswordFormSchema>

export const editPasswordFormDefaultValues: EditPasswordFormValues = {
  password: "",
  confirmPassword: "",
  currentPassword: "",
}

type Props = { onSuccess?: () => void; onFail?: () => void }

function EditPasswordForm({ onFail, onSuccess }: Props) {
  const { userId } = useAuth()
  const router = useRouter()
  const [updateUsersPermissionsUserMutation, { loading: apiIsLoading }] = useUpdateUsersPermissionsUserMutation()

  const [isLoading, setIsLoading] = useState(false)
  const defaultValues = editPasswordFormDefaultValues
  // 1. Define form.
  const form = useForm<EditPasswordFormValues>({
    resolver: zodResolver(editPasswordFormSchema),
    defaultValues,
  })

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<EditPasswordFormValues> = async (formValues, e) => {
    e?.preventDefault()
    if (!userId) return
    setIsLoading(true)
    // ✅ This will be type-safe and validated.
    try {
      const result = await updateUsersPermissionsUserMutation({
        variables: {
          id: userId,
          data: {
            password: formValues.password,
          },
        },
      })
      if (result?.data?.updateUsersPermissionsUser.data?.id) {
        const successMessage = `密码修改成功`
        toast.success(successMessage)
        onSuccess?.()

        router.push("/my-account")
      } else {
        onFail?.()
      }
    } catch (error) {
      console.log(error, "error")
      toast.error(`密码修改失敗`)
    }

    setIsLoading(false)
  }

  const loading = form.formState.isSubmitting || isLoading || apiIsLoading
  const disableSubmit = loading

  return (
    <div className="max-w-[335px] lg:max-w-[390px]">
      <div className="h1 font-bold mb-6">密碼管理</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full max-h-full mb-24 md:mb-0 overflow-auto md:max-h-[500px]"
        >
          <div className="grid">
            <div className="mb-6">
              <label className="text-sm font-medium md:font-bold leading-[22px] text-[#343434]">現有密碼</label>
              <div className="mt-2">
                <PasswordInput<EditPasswordFormValues>
                  form={form}
                  name="currentPassword"
                  label="現有密碼"
                  placeholder="請輸入現有密碼"
                  disabled={disableSubmit}
                  type={"update"}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium md:font-bold leading-[22px] text-[#343434]">新密碼</label>
              <div className="mt-2">
                <PasswordInput<EditPasswordFormValues>
                  form={form}
                  name="password"
                  label="新密碼"
                  placeholder="請輸入新密碼"
                  disabled={disableSubmit}
                  type={"update"}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium md:font-bold leading-[22px] text-[#343434]">確認新密碼</label>
              <div className="mt-2">
                <PasswordInput<EditPasswordFormValues>
                  form={form}
                  name="confirmPassword"
                  label="確認新密碼"
                  placeholder="請再次輸入新密碼"
                  disabled={disableSubmit}
                  type={"update"}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="bg-black hover:bg-black/75 text-white px-6" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                儲存更改
              </Button>

              <Button
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/my-account")
                }}
                type="button"
                variant="outline"
                className="px-6 border-[#BBB] font-bold"
                disabled={loading}
              >
                取消
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default EditPasswordForm
