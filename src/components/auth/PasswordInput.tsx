"use client"

import { useId, useState } from "react"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
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
  type?: string
}

function PasswordInput<T extends FieldValues>({
  form,
  name,
  label = "設定密碼",
  disabled,
  placeholder = "密碼",
  type = "",
}: Props<T>) {
  const [showPassword, setShowPassword] = useState(false)
  const id = useId()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const hasError = !!form.formState.errors.password

  const getAutocompleteValue = () => {
    if (name === "currentPassword") return "current-password"
    if (name === "password") return "new-password"
    if (name === "confirmPassword") return "new-password"
    return "off"
  }

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <>
          {type === "update" ? (
            <>
              <FormItem>
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    id={id}
                    autoComplete={getAutocompleteValue()}
                    className={`textfield ${
                      hasError ? "error-password peer-focus:text-[#e30909]" : ""
                    } textfield-container-update-password`}
                    {...field}
                  />
                </FormControl>

                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-4 bottom-3 flex items-center cursor-pointer px-1 py-2"
                >
                  {showPassword ? <ShowPassword /> : <HidePassword />}
                </div>
              </FormItem>
              <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
            </>
          ) : (
            <>
              <FormItem>
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder=" "
                    id={id} 
                    autoComplete={getAutocompleteValue()}
                    className={`textfield ${
                      hasError ? "error-password" : ""
                    } textfield-container placeholder:-translate-y-6 peer`}
                    {...field}
                  />
                </FormControl>
                <FormLabel
                  htmlFor={id}
                  className={`${
                    hasError
                      ? "textfield-label-error peer-focus:text-[#e30909]"
                      : " textfield-label peer-focus:text-[#1A1818]"
                  } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
                >
                  {placeholder}
                </FormLabel>

                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-4 bottom-3 flex items-center cursor-pointer px-1 py-2"
                >
                  {showPassword ? <ShowPassword /> : <HidePassword />}
                </div>
              </FormItem>
              <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
            </>
          )}
        </>
      )}
    />
  )
}

export default PasswordInput
