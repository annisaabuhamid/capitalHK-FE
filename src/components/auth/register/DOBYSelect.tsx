import { UseFormReturn } from "react-hook-form"
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
      name="DOBY"
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange}>
          <FormControl>
              <SelectTrigger className="dropdown select-code">
                <SelectValue placeholder="YYYY" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Array.from({ length: 103 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                <SelectItem className={"px-3 py-1"} key={year} value={`${year}`}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}

export default SalutationSelect
