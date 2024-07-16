"use client"
import { UseFormReturn } from "react-hook-form"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import InputMask from "react-input-mask"
import { useEffect, useRef } from "react"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}


function PhoneNumberInput({ form }: Props) {
  const hasError = !!form.formState.errors.phoneNumber;
  // Use the correct types for the ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    form.register("phoneNumber");
  }, [form]);

  return (
    <FormField
      control={form.control}
      name="phoneNumber"
      render={({ field }) => (
        <FormItem className="">
          <FormControl>
            <InputMask
              mask="9999 9999"
              maskChar=""
              maskPlaceholder="00000000"
              type="text"
              alwaysShowMask={false}
              className={`textfield ${hasError ? 'error' : ''} phone placeholder-[#8B8B8B]`}
              placeholder="0000 0000"
              value={field.value}
              onChange={field.onChange}
              // {...field}
              // Assign the ref to the input element
              // Assign the ref to the input element
              // inputRef={(ref) => {
              //   if (ref) {
              //     inputRef.current = ref;
              //   }
              // }}
              /* <Input placeholder="" id="floating_filled-5 phoneNumber" className="textfield textfield-container placeholder:-translate-y-6 peer" {...field} /> */
            />
          </FormControl>
          <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
        </FormItem>
      )}
    />
  );
}

export default PhoneNumberInput;


