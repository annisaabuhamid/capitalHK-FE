import { UseFormReturn } from "react-hook-form"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { useInterestedAreaQuery } from "@/common/lib/graphql/generated/graphql"
import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ChangeEvent, FormEventHandler } from "react"
import Link from "next/link"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}

function Agreement({ form }: Props) {
  //   const { data, loading, error } = useInterestedAreaQuery()

  //   if (loading) return <div>Loading...</div>
  //   if (error) return <div>Error fetching data</div>

  return (
    <div className="border-t-[1px] border-[#bbb]">
      <FormField
        control={form.control}
        name="agreement"
        render={({ field }) => {
          return (
            <FormItem>
              <div className="pt-4">
                {/* <FormLabel className="!font-bold h5">感興趣類別 (可選多於一項)</FormLabel> */}
                <FormDescription></FormDescription>
              </div>
              <FormItem className="flex flex-row items-start mb-2 cursor-pointer">
                <FormControl>
                  <Checkbox
                    {...field}
                    className="bg-secondary-150 border-none rounded data-[state=checked]:bg-white data-[state=checked]:container-checkmark"
                    value={field.value ? "true" : undefined} // Convert boolean to string or undefined
                    checked={field.value} // Controlled by form state
                    // Updated onCheckedChange event handler with unknown type
                    onCheckedChange={(event) => {
                      const checked =
                        typeof event === "boolean"
                          ? event
                          : (event as unknown as React.ChangeEvent<HTMLInputElement>).target.checked
                      field.onChange(checked)
                    }}

                    // onCheckedChange={(event) => {
                    //   const isChecked = typeof event === "boolean" ? event : event.target.checked
                    //   field.onChange(isChecked)
                    // }}
                  />
                </FormControl>
                <FormLabel className="font-normal pl-2 text-sm text-[#343434]">
                  本人已閱讀並理解本
                  <Link href={"/page/terms-disclaimer"} className="underline underline-offset-4" target="_blank">
                    隱私權聲明的所有條款和條件
                  </Link>
                  ，並同意根據本隱私條例中有關儲存及收集的個人資料條款。
                </FormLabel>
              </FormItem>

              <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
            </FormItem>
          )
        }}
      />
    </div>
  )
}

export default Agreement
