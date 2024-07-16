"use client"

import Image from "next/image"
import Link from "next/link"
import { ComponentArticleProductList } from "@/common/lib/graphql/generated/graphql"
import { IMAGE_QUALITY } from "@/common/utils/data/constants"
import useWindowSize from "@/utils/useWindowSize"

type Props = {
  data: ComponentArticleProductList
}

const ProductList = ({ data }: Props) => {
  let products = data.Products || []
  let { isMobile } = useWindowSize()

  return (
    <div className="mt-9">
      {isMobile
        ? products.map((product) => (
            <div className="w-full mb-6" key={product?.id}>
              <div className="flex ">
                <div>
                  <Image
                    className="aspect-[1] max-h-[100px] h-full  max-w-[100px] md:max-h-[250px] md:max-w-[250px] drop-shadow-md object-cover object-center"
                    src={product?.product?.data?.attributes?.image?.data?.attributes?.url ?? ""}
                    width={product?.product?.data?.attributes?.image?.data?.attributes?.width!}
                    height={product?.product?.data?.attributes?.image?.data?.attributes?.height!}
                    alt={
                      product?.product?.data?.attributes?.image?.data?.attributes?.alternativeText ||
                      "alt not available"
                    }
                    quality={IMAGE_QUALITY}
                  />
                </div>
                <div className="pl-[16px]">
                  <div className="text-justify text-secondary-600 text-xs font-normal font-noto leading-none">
                    {product?.product?.data?.attributes?.brand}
                  </div>
                  <div className="self-stretch text-secondary-900 text-base font-medium font-noto leading-[27px] pb-[12px] line-clamp-2">
                    {product?.product?.data?.attributes?.name}
                  </div>
                  <div className="w-40 text-justify text-secondary-900 text-sm font-medium font-noto leading-snug">
                    HKD$
                    {product?.product?.data?.attributes?.retailPriceHKD
                      ?.toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div
                    className={`${
                      product?.product?.data?.attributes?.specialPriceHKD != null
                        ? "text-secondary-400 text-[12px] line-through"
                        : "text-sm font-normal text-secondary-900"
                    }`}
                  >
                    HKD$
                    {product?.product?.data?.attributes?.specialPriceHKD
                      ?.toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="max-w-[62px] h-[38px] px-[24px] py-[7px] bg-secondary-900 rounded justify-center items-center gap-1 flex">
                    <div className="w-6 h-6 relative flex items-center">
                      <Link href={product?.product?.data?.attributes?.url ?? ""} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <path
                            d="M4.75 22.5176V6.51758H8.75C8.75 5.41758 9.14167 4.47591 9.925 3.69258C10.7083 2.90924 11.65 2.51758 12.75 2.51758C13.85 2.51758 14.7917 2.90924 15.575 3.69258C16.3583 4.47591 16.75 5.41758 16.75 6.51758H20.75V22.5176H4.75ZM12.75 4.51758C12.2 4.51758 11.729 4.71358 11.337 5.10558C10.945 5.49758 10.7493 5.96824 10.75 6.51758H14.75C14.75 5.96758 14.554 5.49658 14.162 5.10458C13.77 4.71258 13.2993 4.51691 12.75 4.51758ZM8.75 11.5176H10.75V8.51758H8.75V11.5176ZM14.75 11.5176H16.75V8.51758H14.75V11.5176Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" justify-start items-center pt-6 inline-flex">
                <div className=" text-neutral-700 text-sm font-normal text-justify font-noto leading-snug line-clamp-3 ">
                  {product?.product?.data?.attributes?.description}
                </div>
              </div>
            </div>
          ))
        : products.map((product, index) => (
            <div className="flex flex-row gap-x-6 mb-6 " key={index}>
              <div className="">
                <Image
                  className="aspect-[1] max-h-[100px] max-w-[100px] md:max-h-[250px] md:max-w-[250px] drop-shadow-md object-cover object-center"
                  src={product?.product?.data?.attributes?.image?.data?.attributes?.url ?? ""}
                  width={product?.product?.data?.attributes?.image?.data?.attributes?.width!}
                  height={product?.product?.data?.attributes?.image?.data?.attributes?.height!}
                  alt={
                    product?.product?.data?.attributes?.image?.data?.attributes?.alternativeText || "alt not available"
                  }
                  quality={IMAGE_QUALITY}
                />
              </div>
              <div className="flex  w-full ">
                <div className="mr-[58px]">
                  <div className="text-[12px] text-secondary-600 pt-[8px] line-clamp-2">
                    {product?.product?.data?.attributes?.brand}
                  </div>
                  <div className="text-[17px] font-medium text-secondary-900 pb-[8px]">
                    {product?.product?.data?.attributes?.name}
                  </div>
                  <div className="text-[14px] font-bold text-secondary-900">
                    HKD$
                    {product?.product?.data?.attributes?.retailPriceHKD
                      ?.toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>

                  <div
                    className={`${
                      product?.product?.data?.attributes?.specialPriceHKD != null
                        ? "text-secondary-400 text-[12px] line-through"
                        : "text-sm font-normal text-secondary-900"
                    }`}
                  >
                    HKD$
                    {product?.product?.data?.attributes?.specialPriceHKD
                      ?.toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className="text-[14px] text-[#343434] text-justify leading-[22px] line-clamp-5  pt-[16px]">
                    {product?.product?.data?.attributes?.description}
                  </div>
                </div>
                <Link className={"flex"} href={product?.product?.data?.attributes?.url ?? ""} target="_blank">
                  <div className="my-auto flex self-center bg-secondary-700 rounded-sm py-[7px] px-6 text-[14px] font-bold text-white whitespace-nowrap leading-[26px]">
                    立即購買
                  </div>
                </Link>
              </div>
            </div>
          ))}
    </div>
  )
}
export default ProductList
