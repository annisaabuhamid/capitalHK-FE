import type { CodegenConfig } from "@graphql-codegen/cli"
import { loadEnvConfig } from "@next/env"

// @ts-ignore
loadEnvConfig(process.cwd())

// pull to refresh
// https://nerdy.dev/pull-to-refresh-prototype-with-scroll-snap-and-scroll-driven-animation

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
const graphqlApiUrl = `${strapiUrl}/graphql`

const config: CodegenConfig = {
  overwrite: true,
  schema: graphqlApiUrl,
  documents: "src/common/lib/graphql/**/*.graphql",
  generates: {
    // "src/common/lib/graphql/generated/": {
    //   preset: "client",
    //   presetConfig: {
    //     fragmentMasking: { unmaskFunctionName: "getFragmentData" },
    //     gqlTagName: "gql",
    //   },
    // },
    "src/common/lib/graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        reactApolloVersion: 3,
      },
    },

    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
  ignoreNoDocuments: true,
}

export default config
