import * as z from "zod"
import {
  Enum_Userspermissionsuser_Areacode,
  Enum_Userspermissionsuser_Salutation,
} from "@/common/lib/graphql/generated/graphql"

const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const usernameRegex = new RegExp(/^[a-zA-Z0-9 ]{3,}$/);
const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*#?&]).{8,}$/);
const phoneRegex = new RegExp(/^\d{4} ?\d{4}$/);
export const accountFormSchema = z.object({
  username: z.string()
  .refine((value) => value.trim() !== '', { message: '用戶名稱是必填項' })
  .refine((value) => value.length >= 3, { message: '輸入最少3位字元' }) // Minimum length requirement
  .refine((value) => usernameRegex.test(value), { message: '請輸入有效的用戶名稱' }), // Regex validation
  email: z.string()
  .min(1, { message: "請輸入電郵地址" }) // Validation for required
  .regex(emailRegex, { message: "電郵地址格式不正確" }), // Validation for regex expression
  salutation: z.nativeEnum(Enum_Userspermissionsuser_Salutation),
  areaCode: z.nativeEnum(Enum_Userspermissionsuser_Areacode),
  phoneNumber: z.string()
  .min(1, { message: "此欄必須填寫" })
    .regex(phoneRegex, { message: "電話號碼不正確" }),
  interested_areas: z.array(z.string()),
})
export type AccountFormValues = z.infer<typeof accountFormSchema>

export const accountFormDefaultValues: AccountFormValues = {
  username: "",
  email: "",
  areaCode: Enum_Userspermissionsuser_Areacode.HongKong_852,
  phoneNumber: "",
  salutation: Enum_Userspermissionsuser_Salutation.Mr,
  interested_areas: [],
}
