import { UseFormReturn } from "react-hook-form"
import { Enum_Userspermissionsuser_Salutation } from "@/common/lib/graphql/generated/graphql"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}

function SalutationSelect({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="salutation"
      render={({ field }) => (
        <FormItem>
          <label htmlFor="salutation" className="mb-2 block text-sm leading-[22px] font-bold text-[#343434]">
            稱謂
          </label>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="dropdown leading-tight">
                <SelectValue placeholder="請選擇" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className=" min-w-[115px] rounded-none px-0 py-0  ">
              <SelectItem
                className={"px-3 py-1 text-sm text-[#343434]"}
                value={Enum_Userspermissionsuser_Salutation.Mr}
              >
                先生
              </SelectItem>
              <SelectItem
                className={"px-3 py-1 text-sm text-[#343434]"}
                value={Enum_Userspermissionsuser_Salutation.Miss}
              >
                小姐
              </SelectItem>
              <SelectItem
                className={"px-3 py-1 text-sm text-[#343434]"}
                value={Enum_Userspermissionsuser_Salutation.Ms}
              >
                女士
              </SelectItem>
              <SelectItem
                className={"px-3 py-1 text-sm text-[#343434]"}
                value={Enum_Userspermissionsuser_Salutation.Mrs}
              >
                太太
              </SelectItem>
              <SelectItem
                className={"px-3 py-1 text-sm text-[#343434]"}
                value={Enum_Userspermissionsuser_Salutation.Dr}
              >
                博士
              </SelectItem>
              <SelectItem
                className={"px-3 py-1 text-sm text-[#343434]"}
                value={Enum_Userspermissionsuser_Salutation.Prof}
              >
                教授
              </SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}

export default SalutationSelect
