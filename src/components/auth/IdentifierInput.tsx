import React from "react"
import { UseFormReturn } from "react-hook-form"
import { LoginFormValues } from "@/components/auth/LoginForm"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
  form: UseFormReturn<LoginFormValues>
}

function IdentifierInput({ form }: Props) {
  const hasError = !!form.formState.errors.identifier;
  return (
    <>
    <div className="relative pb-4">
      <FormField
        control={form.control}
        name="identifier"
        render={({ field }) => (
          <>
          <FormItem>
           
            <FormControl>
              <Input
                placeholder=" "
                id="floating_filled-1"
                className={`textfield ${hasError ? 'error' : ''} textfield-container placeholder:-translate-y-6 peer`}
                {...field}
              />
            </FormControl>
            <FormLabel
              htmlFor="floating_filled-1"
              className={`${hasError ? 'textfield-label-error peer-focus:text-[#e30909]' : 'textfield-label peer-focus:text-[#1A1818]'}  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-[.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
            >
              電郵地址
            </FormLabel>
          </FormItem>
          <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
          </>
        )}
      />
    
    </div>
    
    </>
  )
}

export default IdentifierInput
