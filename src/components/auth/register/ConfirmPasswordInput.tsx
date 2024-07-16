import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ShowPassword from "@/components/auth/register/icon/ShowPassword"
import HidePassword from "@/components/auth/register/icon/HidePassword"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}

function ConfirmPasswordInput({ form }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  const hasError = !!form.formState.errors.confirmPassword;
  return (
    <div className="relative mb-6">
      <label className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">確認密碼</label>
      <FormField
        control={form.control}
        name={"confirmPassword"}
        render={({ field }) => (
          <FormItem>
            <FormControl>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              id="floating_filled-6 confirm-password"
              className={`textfield ${hasError ? 'error-password' : ''} textfield-container placeholder:-translate-y-6 peer`}
              {...field}
            />
          </FormControl>
          <FormLabel
            htmlFor="floating_filled-6 confirm-password"
            className={`${hasError ? 'textfield-label-error peer-focus:text-[#e30909]' : 'textfield-label peer-focus:text-[#1A1818]'}  font-normal tracking-[0.5px] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
           請輸入確認密碼
          </FormLabel>
            <div
              // onClick={(e) => e.stopPropagation()}
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-4 bottom-3 flex items-center text-gray-400 cursor-pointer h-min"
            >
               {/* {showPassword ? (
                <ShowPassword   />
              ) : (
                <HidePassword />
              )} */}
            </div>
            <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
          </FormItem>
        )}
      />
    </div>
  )
}

export default ConfirmPasswordInput
