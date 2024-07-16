import { UseFormReturn } from "react-hook-form"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}

function UsernameInput({ form }: Props) {
  const hasError = !!form.formState.errors.username;
  return (
    <div className="relative my-6">
    <label className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">會員名稱</label>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
           <FormControl>
            <Input placeholder=" " id="floating_filled-3 username" className={`textfield ${hasError ? 'error' : ''} textfield-container placeholder:-translate-y-6 peer`} {...field} />
          </FormControl>
          <label htmlFor="floating_filled-3 username" className={` ${hasError ? 'textfield-label-error peer-focus:text-[#e30909]' : 'textfield-label peer-focus:text-[#1A1818]'} peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`} >
            請輸入會員名稱
          </label>
          <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
        </FormItem>
      )}
    />
    </div>
  )
}

export default UsernameInput
