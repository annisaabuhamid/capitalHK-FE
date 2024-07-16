import { UseFormReturn } from "react-hook-form"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Enum_Userspermissionsuser_Areacode } from "@/common/lib/graphql/generated/graphql"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}

function CountryCodeSelect({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="areaCode"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="min-w-[98px] dropdown select-code">
                <SelectValue placeholder="請選擇" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem className={"px-3 py-1"} value={Enum_Userspermissionsuser_Areacode.HongKong_852}>(+852)</SelectItem>
              <SelectItem className={"px-3 py-1"} value={Enum_Userspermissionsuser_Areacode.Macao_853}>(+853)</SelectItem>
              <SelectItem className={"px-3 py-1"} value={Enum_Userspermissionsuser_Areacode.China_86}>(+86)</SelectItem>
              <SelectItem className={"px-3 py-1"} value={Enum_Userspermissionsuser_Areacode.Singapore_65}>(+65)</SelectItem>
              <SelectItem className={"px-3 py-1"} value={Enum_Userspermissionsuser_Areacode.Taiwan_886}>(+886)</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}

export default CountryCodeSelect
