import { map } from "lodash"
import { UseFormReturn } from "react-hook-form"
import { Enum_Userspermissionsuser_Salutation } from "@/common/lib/graphql/generated/graphql"
import { AccountFormValues } from "@/components/auth/my-account/accountFormSchema"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
type Props = {
  form: UseFormReturn<AccountFormValues>
  disabled?: boolean
}

const salutationItems = map(Enum_Userspermissionsuser_Salutation, (value, key) => {
  return (
    <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} key={key} value={value}>
      {value}
    </SelectItem>
  )
})

export default function SalutationInput({ form, disabled }: Props) {
  return (
    <FormField
      control={form.control}
      name="salutation"
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="mb-2 block text-sm leading-[22px] font-medium md:font-bold text-[#343434]">稱謂</FormLabel>

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
              <SelectContent className="min-w-[115px] rounded-none px-0 py-0">
              <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} value={Enum_Userspermissionsuser_Salutation.Mr}>
                先生
              </SelectItem>
              <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} value={Enum_Userspermissionsuser_Salutation.Miss}>
                小姐
              </SelectItem>
              <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} value={Enum_Userspermissionsuser_Salutation.Ms}>
                女士
              </SelectItem>
              <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} value={Enum_Userspermissionsuser_Salutation.Mrs}>
                太太
              </SelectItem>
              <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} value={Enum_Userspermissionsuser_Salutation.Dr}>
                博士
              </SelectItem>
              <SelectItem className={"px-3 py-1 text-sm text-[#343434]"} value={Enum_Userspermissionsuser_Salutation.Prof}>
                教授
              </SelectItem>
              </SelectContent>
            </Select>
          </FormControl>

          <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
        </FormItem>
      )}
    />
  )
}
