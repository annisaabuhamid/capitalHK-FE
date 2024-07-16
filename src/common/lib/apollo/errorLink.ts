import { onError } from "@apollo/client/link/error"
import { startCase } from "lodash"
import toast from "react-hot-toast"

// https://github.com/apollographql/apollo-link/issues/1022
export const errorLink = onError((errorResponse) => {
  const { graphQLErrors, networkError } = errorResponse
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)

      const detailedErrors = (extensions.error as any)?.details?.errors
      const errorMessages = detailedErrors
        ? detailedErrors.map((error: { message: string }) => {
            return error.message
          })
        : []
      if (errorMessages.length > 0) {
        const message = errorMessages.join("\n")
        toast.error(startCase(message))
      }
    })
  } else if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})
