import { map } from "lodash"
import { UseFormReturn } from "react-hook-form"
import InputMask from "react-input-mask"
import { Enum_Userspermissionsuser_Areacode } from "@/common/lib/graphql/generated/graphql"
import { AccountFormValues } from "@/components/auth/my-account/accountFormSchema"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const areaCodeItems = map(Enum_Userspermissionsuser_Areacode, (value, key) => {
  // split and take last element
  const label = `+${key.split("_").pop() || ""}`
  return (
    <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} key={key} value={value}>
      {label}
    </SelectItem>
  )
})

type Props = {
  form: UseFormReturn<AccountFormValues>
  disabled?: boolean
}

function PhoneInput({ form, disabled }: Props) {
  const hasError = !!form.formState.errors.phoneNumber
  return (
    <div className="relative mb-6">
      <Label className="mb-2 flex text-sm leading-[22px] font-medium md:font-bold text-[#343434]">{`聯絡電話`}</Label>
      <div className="flex space-x-4 flex-grow">
        <FormField
          control={form.control}
          name="areaCode"
          disabled={disabled}
          render={({ field }) => (
            <FormItem className="min-w-[115px]">
              <FormControl>
                <Select
                  disabled={field.disabled}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="dropdown account leading-tight disabled:opacity-100">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="min-w-[115px] rounded-none px-0 py-0">{areaCodeItems}</SelectContent>
                </Select>
              </FormControl>

              <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          disabled={disabled}
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <InputMask
                  mask="9999 9999"
                  maskChar=""
                  id="floating_filled-5"
                  // maskplaceholder="0000 0000"
                  placeholder="0000 0000"
                  className={`textfield ${hasError ? "error" : ""} phone-register placeholder-[#8B8B8B] w-full`}
                  type="text"
                  // name="phoneNumber"
                  {...field}

                  // id="phoneNumber"
                />
                {/* <Input placeholder="" id="floating_filled-5 phoneNumber" className="textfield textfield-container placeholder:-translate-y-6 peer" {...field} /> */}
              </FormControl>
              <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}

export default PhoneInput
