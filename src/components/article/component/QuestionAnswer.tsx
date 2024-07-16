"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { ComponentArticleQuestionAnswer } from "@/common/lib/graphql/generated/graphql"

type Props = {
  data: ComponentArticleQuestionAnswer
}

const QuestionAnswer = ({ data }: Props) => {
  return (
    <div className="mt-9">
      <div className="flex md: pb-[8px] pl-[12px]">
        <div className="text-secondary-800 text-sm font-normal font-quicksand w-leading-[30px] w-5 h-8 ">Q</div>
        <div className="w-11/12 break-words pl-[24px] text-[17px] font-medium ">{data.Question}</div>
      </div>
      <div className="flex pl-[12px] ">
        <div className="text-secondary-800 text-sm font-normal font-quicksand leading-[30px] w-5 h-8">A</div>
        <div className="w-11/12 break-words pl-[24px] text-[17px] text-base  font-normal ">{data.Answer}</div>
      </div>
    </div>
  )
}
export default QuestionAnswer
