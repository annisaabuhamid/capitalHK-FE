"use client"

import { useState } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ShowPassword from "@/components/auth/register/icon/ShowPassword"
import HidePassword from "@/components/auth/register/icon/HidePassword"

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>
  name: Path<T>
  label?: string
  disabled?: boolean
  placeholder?: string
}

function RegisterPasswordInput<T extends FieldValues>({
  form,
  name,
  label = "設定密碼",
  disabled,
  placeholder = "請輸入設定密碼",
}: Props<T>) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const hasError = !!form.formState.errors.password;
  return (
    <div className="relative mb-6">
     <label className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">密碼</label>
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <>
        <FormItem>
          <FormControl>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              id="floating_filled-2"
              className={`textfield ${hasError ? 'error-password' : ''} textfield-container placeholder:-translate-y-6 peer`}
              {...field}
            />
          </FormControl>
          <FormLabel
            htmlFor="floating_filled-2"
            className={`${hasError ? 'textfield-label-error peer-focus:text-[#e30909]' : 'textfield-label peer-focus:text-[#1A1818]'}  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            {placeholder}
          </FormLabel>

          <div
              // onClick={(e) => e.stopPropagation()}
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-4 bottom-3 flex items-center cursor-pointer px-1 py-2"
            >
              {/* {showPassword ? (
                <ShowPassword   />
              ) : (
                <HidePassword />
              )} */}
            </div>
          
        </FormItem>
        <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
        </>
      )}
    />
    </div>
  )
}

export default RegisterPasswordInput
