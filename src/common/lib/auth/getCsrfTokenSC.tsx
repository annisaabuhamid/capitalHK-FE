import { cookies } from "next/headers"
// * getCsrfTokenSC
// * get csrf token from server component
export const getCsrfTokenSC = async () => {
  const csrf = cookies().get("next-auth.csrf-token")?.value.split("|")[0]
  return csrf
}
