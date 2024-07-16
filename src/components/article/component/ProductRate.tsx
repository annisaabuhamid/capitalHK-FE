import React from "react"
import { ComponentArticleProductRate, ComponentArticleProductReview } from "@/common/lib/graphql/generated/graphql"
import Rate from "@/components/article/component/Rate"

type Props = {
  product?: ComponentArticleProductReview
  data?: ComponentArticleProductRate
}
function ProductRate({ data, product }: Props) {
  let ProductRates
  if (product !== undefined) {
    ProductRates = product?.ProductRate
  } else {
    ProductRates = data?.ProductRate
  }

  return (
    <div className="bg-secondary-100 grid grid-cols-2  rounded-lg  my-3 w-full md:grid-cols-4">
      {ProductRates?.map((rate, index) => (
        <Rate
          key={index}
          label={rate?.Label ?? ""}
          icon={{
            attributes: {
              width: rate?.Icon?.data?.attributes?.icon?.data?.attributes?.width ?? undefined,
              height: rate?.Icon?.data?.attributes?.icon?.data?.attributes?.height ?? undefined,
              alternativeText:
                rate?.Icon?.data?.attributes?.icon?.data?.attributes?.alternativeText || "alt not available",
              url: rate?.Icon?.data?.attributes?.icon?.data?.attributes?.url ?? "",
            },
          }}
          iconFilled={{
            data: {
              attributes: {
                width: rate?.Icon?.data?.attributes?.iconFilled?.data?.attributes?.width ?? undefined,
                height: rate?.Icon?.data?.attributes?.iconFilled?.data?.attributes?.height ?? undefined,
                alternativeText:
                  rate?.Icon?.data?.attributes?.iconFilled?.data?.attributes?.alternativeText || "alt not available",
                url: rate?.Icon?.data?.attributes?.iconFilled?.data?.attributes?.url ?? "",
              },
            },
          }}
          score={rate?.score ?? undefined}
          length={ProductRates?.length ?? undefined}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProductRate
