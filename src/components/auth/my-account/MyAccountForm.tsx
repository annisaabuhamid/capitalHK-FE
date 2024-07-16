"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useAuth } from "@/common/lib/auth/useAuth"
import { useAccountDetailsQuery, useUpdateUsersPermissionsUserMutation } from "@/common/lib/graphql/generated/graphql"
import EmailInput from "@/components/auth/my-account/account-input/EmailInput"
import InterestedAreasInput from "@/components/auth/my-account/account-input/InterestedAreasInput"
import PhoneInput from "@/components/auth/my-account/account-input/PhoneInput"
import SalutationInput from "@/components/auth/my-account/account-input/SalutationInput"
import UsernameInput from "@/components/auth/my-account/account-input/UsernameInput"
import {
  accountFormDefaultValues,
  accountFormSchema,
  AccountFormValues,
} from "@/components/auth/my-account/accountFormSchema"
import ExternalSections from "@/components/auth/my-account/ExternalSections"
import MyAccountFormHeader from "@/components/auth/my-account/MyAccountFormHeader"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

type MyAccountFormProps = {
  onSuccess?: () => void
  onFail?: () => void
}

function MyAccountForm({ onSuccess, onFail }: MyAccountFormProps) {
  const { userId, user } = useAuth()
  const { data, refetch } = useAccountDetailsQuery({
    variables: { id: userId },
    skip: !userId,
  })

  const [updateUsersPermissionsUserMutation, { loading: apiIsLoading }] = useUpdateUsersPermissionsUserMutation()

  const [isLoading, setIsLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const defaultValues = useMemo(() => {
    const newValues: AccountFormValues = {
      areaCode: data?.usersPermissionsUser?.data?.attributes?.areaCode ?? accountFormDefaultValues.areaCode,
      email: data?.usersPermissionsUser?.data?.attributes?.email ?? accountFormDefaultValues.email,
      interested_areas:
        data?.usersPermissionsUser?.data?.attributes?.interested_areas?.data.map((item) => item.id ?? "") ?? [],
      phoneNumber: data?.usersPermissionsUser?.data?.attributes?.phoneNumber ?? accountFormDefaultValues.phoneNumber,
      salutation: data?.usersPermissionsUser?.data?.attributes?.salutation ?? accountFormDefaultValues.salutation,
      username: data?.usersPermissionsUser?.data?.attributes?.username ?? accountFormDefaultValues.username,
    }
    return newValues
  }, [data, user])

  // 1. Define form.
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<AccountFormValues> = async (formValues, e) => {
    e?.preventDefault()
    if (!userId) return

    setIsLoading(true)
    // ✅ This will be type-safe and validated.
    const result = await updateUsersPermissionsUserMutation({
      variables: {
        id: userId,
        data: {
          username: formValues.username,
          email: formValues.email,
          salutation: formValues.salutation,
          areaCode: formValues.areaCode,
          phoneNumber: formValues.phoneNumber,
          interested_areas: formValues.interested_areas,
        },
      },
    })
    if (result?.data?.updateUsersPermissionsUser.data?.id) {
      // Trigger page refresh after a successful update
      window.location.reload();
      onSuccess?.()
      toast.success("更新成功")
      setIsEditing(false)
      refetch()
      
    } else {
      onFail?.()
      toast.error("更新失敗")
    }
    setIsLoading(false)
  }
  const loading = form.formState.isLoading || isLoading || apiIsLoading
  const disabled = !isEditing || loading

  useEffect(() => {
    if (defaultValues && data) {
      form.reset(defaultValues)
    }
  }, [defaultValues, data])



  return (
    <div className="max-w-[390px]">
      <MyAccountFormHeader isEditing={isEditing} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="pb-12">
            <div className="max-w-[390px] items-center">
              <SalutationInput form={form} disabled={disabled} />
              {/* <UsernameInput form={form} disabled={disabled} /> */}
              <UsernameInput form={form} disabled={disabled} value={defaultValues.username} />
              <EmailInput form={form} disabled={disabled} value={defaultValues.email} />
              <PhoneInput form={form} disabled={disabled} />
              <InterestedAreasInput form={form} disabled={disabled} />
              <div className="flex gap-3 mt-3">
                {isEditing ? (
                  <>
                    <Button type="submit" className="bg-[#2D2D2D] hover:bg-[#1A1818] text-white px-6" disabled={loading}>
                      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      儲存更改
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        form.reset(defaultValues)
                        setIsEditing(false)
                      }}
                      type="button"
                      variant="outline"
                      className="px-6 border-[#BBB] font-bold"
                      disabled={loading}
                    >
                      取消
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        setIsEditing(true)
                      }}
                      type="button"
                      variant="outline"
                      className="bg-[#2D2D2D] hover:bg-[#1A1818] hover:text-white text-white px-6"
                      disabled={loading}
                    >
                      修改
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </Form>

      {isEditing ? null : <ExternalSections />}
    </div>
  )
}

export default MyAccountForm
