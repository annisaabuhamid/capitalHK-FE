module.exports = {
  client: {
    service: {
      name: "graphql-service-from-schema",
      url: "https://prd-backend.capital-hk.com/graphql",
    },
    includes: ["./src/common/lib/graphql/**/*.graphql"], // array of glob patterns
  },
}
