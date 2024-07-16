import { UseFormReturn } from "react-hook-form"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
  form: UseFormReturn<RegisterFormValues>
  errorMessage ?: string | null
}

function EmailInput({ form, errorMessage }: Props) {
  const hasError = !!form.formState.errors.email;
  return (
    <div className="relative mb-6">
    <label className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">註冊電郵地址</label>
    <FormField
      control={form.control}
      name="email"
      
      render={({ field }) => (
        <FormItem>
           <FormControl>
            <Input placeholder=" " id="floating_filled-4 email" className={`textfield ${hasError || errorMessage ? 'error' : ''} textfield-container placeholder:-translate-y-6 peer`} {...field} />
          </FormControl>
          <label htmlFor="floating_filled-4 email" className={`${hasError || errorMessage ? 'textfield-label-error peer-focus:text-[#e30909]' : 'textfield-label peer-focus:text-[#1A1818]'} peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`} >
          請輸入電郵地址
          </label>
          {errorMessage !== null ? ( 
          <FormMessage className="text-xs font-normal text-primary-800 pt-1">{errorMessage}</FormMessage>
          )
          :(
             <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
          )}
         
        </FormItem>
      )}
    />
    </div>
  )
}

export default EmailInput
