"use client"

import { useRoutesQuery } from "@/common/lib/graphql/generated/graphql"

type Props = {}

function TestingComponent({}: Props) {
  const { data } = useRoutesQuery({
    variables: {
      filters: { requestPath: { eq: "/" } },
      pagination: { limit: 1 },
    },
    skip: true,
  })

  return null
}

export default TestingComponent
