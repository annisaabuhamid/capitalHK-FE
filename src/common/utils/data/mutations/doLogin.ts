import { getClient } from "@/common/lib/apollo/apollo-client"
import { LoginDocument, LoginMutation } from "@/common/lib/graphql/generated/graphql"

export const doLogin = async (username: string, password: string, recaptchaToken: string) => {
  const client = getClient()
  const { data, errors } = await client.mutate<LoginMutation>({
    mutation: LoginDocument,
    variables: { input: { identifier: username, password, recaptchaToken } },
  })

  return data?.login
}
