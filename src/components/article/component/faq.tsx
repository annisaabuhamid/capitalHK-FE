"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { ComponentArticleFaq } from "@/common/lib/graphql/generated/graphql"

type Props = {
  data: ComponentArticleFaq
}

const Faq = ({ data }: Props) => {
  return (
    <div className="mt-9">
      {data.faq?.map((datas, index) => (
        <div className="my-9" key={index}>
          <div className="flex  pb-[8px] pl-[12px]">
            <div className="text-primary-800 text-base font-normal font-quicksand leading-[30px]">Q</div>
            <div className="w-11/12 break-words pl-[12px] text-[17px]  font-medium ">{datas?.Question}</div>
          </div>
          <div className="flex  ml-[24px]  bg-secondary-100">
            <div className="text-primary-800 text-base font-normal pl-[12px] py-[8px] font-quicksand leading-[30px]">A</div>
            <div className="w-11/12 break-words bg-secondary-100 ml-[12px] py-[8px] text-[17px] text-base flex items-center  font-normal ">
              {datas?.Answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Faq
