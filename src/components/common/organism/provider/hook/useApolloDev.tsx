import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"

export const useApolloDev = () => {
  if (process.env.NODE_ENV === "development") {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }
}
