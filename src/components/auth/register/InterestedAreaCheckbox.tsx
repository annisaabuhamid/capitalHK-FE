import { UseFormReturn } from "react-hook-form"
import { RegisterFormValues } from "@/components/auth/RegisterForm"
import { useInterestedAreaQuery } from "@/common/lib/graphql/generated/graphql"
import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ChangeEvent, FormEventHandler } from "react"

type Props = {
  form: UseFormReturn<RegisterFormValues>
}

function InterestedAreaCheckbox({ form }: Props) {
  const { data, loading, error } = useInterestedAreaQuery()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>

  const interestedAreas = data?.interestedAreas?.data || []

  return (
    <div className="mb-4">
      <FormField
        control={form.control}
        name="interested_areas"
        render={({ field }) => {
          return (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="!font-bold h5">感興趣類別 (可選多於一項)</FormLabel>
                <FormDescription></FormDescription>
              </div>
              {interestedAreas.map((item) => {
                return (
                  <FormItem key={item.id} className="flex flex-row items-start mb-3 cursor-pointer">
                    <FormControl>
                      <Checkbox
                        {...field}
                        className="bg-secondary-150 border-none rounded data-[state=checked]:bg-white data-[state=checked]:container-checkmark"
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value) => value !== item.id))
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal pl-2">{item.attributes?.Title}</FormLabel>
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

export default InterestedAreaCheckbox
