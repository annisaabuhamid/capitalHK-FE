import { signIn, signOut } from "next-auth/react"
import toast from "react-hot-toast"
import {
  Enum_Userspermissionsuser_Areacode,
  Enum_Userspermissionsuser_Salutation,
  InputMaybe,
  useRegisterMutation,
} from "@/common/lib/graphql/generated/graphql"
// https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/
// https://codevoweb.com/nextjs-use-custom-login-and-signup-pages-for-nextauth-js/
// https://github.com/nextauthjs/next-auth/issues/8086
export const loginHandler = async ({
  identifier,
  password,
  csrfToken,
  recaptchaToken,
}: {
  identifier: string
  password: string
  csrfToken?: string
  recaptchaToken: string
}) => {
  try {
    const res = await signIn("credentials", {
      identifier,
      password,
      recaptchaToken,
      csrfToken,
      redirect: false,
    })
    return res
    // if (!res?.error && res?.ok) {
    //   return true
    // } else {
    //   return false
    // }
  } catch (error) {
    return false
  }
}

export const logoutHandler = async () => {
  try {
    await signOut({ redirect: false })
    toast.success("登出成功")
    return true
  } catch (error) {
    toast.success("登出失敗")
    return false
  }
}

export const registerHandler = async ({
  salutation,
  username,
  email,
  areaCode,
  phoneNumber,
  DOBM,
  DOBY,
  password,
  csrfToken,
  interested_areas,
  agreement,
  recaptchaToken,
  registerMutation,
}: {
  salutation: InputMaybe<Enum_Userspermissionsuser_Salutation>
  username: string
  email: string
  areaCode: InputMaybe<Enum_Userspermissionsuser_Areacode>
  phoneNumber: string
  DOBM: InputMaybe<number>
  DOBY: InputMaybe<number>
  password: string
  csrfToken?: string
  interested_areas?: string[]
  agreement:boolean
  recaptchaToken: string
  registerMutation: ReturnType<typeof useRegisterMutation>[0]
}) => {
  const { data, errors } = await registerMutation({
    variables: {
      input: {
        salutation,
        email,
        password,
        username,
        areaCode,
        phoneNumber,
        DOBM,
        DOBY,
        interested_areas,
        agreement,
        recaptchaToken,
      },
    },
  })
  if (data?.register.user.id) {
    return true
    // const res = await signIn("credentials", {
    //   identifier: email,
    //   password,
    //   csrfToken,
    //   redirect: false,
    // })
    // if (!res?.error && res?.ok) {
    //   return true
    // } else {
    //   return false
    // }
  } else if (errors && errors.length > 0) {
    throw new Error(errors[0].message)
  } else return false
}
