import { format } from "date-fns"
import { OptionalString } from "@/common/types"

export const formatDate = (date?: OptionalString, dateFormat: OptionalString = "yyyy.MM.dd") => {
  // date-fns format: yyyy-mm-dd
  // 2021-01-01
  if (!date || dateFormat === null) {
    return ""
  }
  return format(new Date(date), dateFormat)
}
