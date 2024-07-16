import { getClient } from "@/common/lib/apollo/apollo-client"
import {
  UpdateUsersPermissionsUserDocument,
  UpdateUsersPermissionsUserMutation,
  UpdateUsersPermissionsUserMutationVariables,
} from "@/common/lib/graphql/generated/graphql"

export const editAccountHandler = async ({ variables }: { variables: UpdateUsersPermissionsUserMutationVariables }) => {
  const client = getClient()
  const { data, errors } = await client.mutate<
    UpdateUsersPermissionsUserMutation,
    UpdateUsersPermissionsUserMutationVariables
  >({
    mutation: UpdateUsersPermissionsUserDocument,
    variables,
  })

  return data?.updateUsersPermissionsUser
}
