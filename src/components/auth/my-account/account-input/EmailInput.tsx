import { UseFormReturn } from "react-hook-form"
import { AccountFormValues } from "@/components/auth/my-account/accountFormSchema"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
  form: UseFormReturn<AccountFormValues>
  disabled?: boolean
  value ?: string
}

export default function EmailInput({ form, disabled, value }: Props) {
  const label = "電郵地址"
  const hasError = !!form.formState.errors.email
  const inputValue = form.watch("email")
  console.log(disabled)
  return (
    <div className="relative mb-6">
      <label className="mb-2 block text-sm leading-[22px] font-normal md:font-bold text-[#343434]">註冊電郵地址</label>
      <FormField
        control={form.control}
        name="email"
        disabled={disabled}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder=" "
                id="floating_filled-email"
                className={`textfield ${hasError ? "error" : ""} textfield-container disabled:opacity-100 placeholder:-translate-y-6 peer`}
                // {...field}
                onChange={(e) => form.setValue("email", e.target.value)} // Update the form value manually
                disabled={true}
              />
            </FormControl>
            <label
              htmlFor="floating_filled-email"
              className={`${disabled ? "textfield-label-disabled" : "textfield-label-account"} peer-focus:text-[#1A1818] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
            >
              {value ? value :"請輸入會員名稱"}
             {/* {inputValue ? inputValue : "請輸入電郵地址"} */}
             {/* {inputValue ? inputValue : inputValue} */}
            </label>
            <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
          </FormItem>
        )}
      />
    </div>
  )
}
