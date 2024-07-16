import { InformationBoxesBasicFragment } from "@/common/lib/graphql/generated/graphql"

export const transformInfoboxShape = (
  infoboxList: InformationBoxesBasicFragment[] | readonly InformationBoxesBasicFragment[]
) => {
  const transformedInfobox = infoboxList.map((infobox) => {
    const id = infobox.id
    const attrs = infobox.attributes
    const { title, location, hours, phone, remark } = attrs || {}
    return {
      title,
      location,
      hours,
      phone,
      remark,
      id,
    }
  })

  return transformedInfobox
}
