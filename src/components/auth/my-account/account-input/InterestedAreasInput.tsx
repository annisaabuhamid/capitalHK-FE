"use client"

import { UseFormReturn } from "react-hook-form"
import { useInterestedAreaQuery } from "@/common/lib/graphql/generated/graphql"
import { AccountFormValues } from "@/components/auth/my-account/accountFormSchema"
import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

type Props = {
  form: UseFormReturn<AccountFormValues>
  disabled?: boolean
}

function InterestedAreasInput({ form, disabled }: Props) {
  const { data } = useInterestedAreaQuery()

  const interestedAreas = data?.interestedAreas?.data || []

  return (
    <div>
      <FormField
        control={form.control}
        name="interested_areas"
        disabled={disabled}
        render={({ field }) => {
          return (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-sm leading-[22px] font-medium md:font-bold text-[#343434]">我感興趣的題目</FormLabel>
                <FormDescription></FormDescription>
              </div>
              {interestedAreas.map((item) => {
                const itemId = item.id ?? ""
                const itemLabel = item.attributes?.Title ?? ""
                const checked = field.value?.includes(itemId)
                if (!itemId) return null
                return (
                  <FormItem key={itemId} className="flex flex-row items-center mb-3 cursor-pointer">
                    <FormControl>
                      <Checkbox
                        {...field}
                        className={`bg-secondary-150 border-none rounded disabled:bg-[#bbb] disabled:opacity-100 ${
                          checked ? "data-[state=checked]:bg-white data-[state=checked]:container-checkmark" : ""
                        }`}
                        checked={checked}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, itemId])
                            : field.onChange(field.value?.filter((value) => value !== itemId))
                        }}
                        disabled={disabled}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-[14px] leading-[22px] text-[#343434] pl-2">{itemLabel}</FormLabel>
                  </FormItem>
                )
              })}
              <FormMessage className="text-xs font-normal text-primary-800 pt-1" />
            </FormItem>
          )
        }}
      />
    </div>
  )
}

export default InterestedAreasInput
