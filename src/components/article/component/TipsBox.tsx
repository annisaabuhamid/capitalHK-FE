"use client"

import { ComponentArticleTipsBox } from "@/common/lib/graphql/generated/graphql"

type Props = {
  data: ComponentArticleTipsBox
}

const TipsBox = ({ data }: Props) => {
  let desciription = data.description

  return (
    <div className={"mt-9 "}>
      <fieldset className="border-t-2 border-primary-900 text-primary-900 p-6">
        <legend className="w-[60px] flex justify-center font-bold text-[17px]">小貼士</legend>
        <div className="flex flex-column text-secondary-800 gap-3 pb-4">
          <p className="">{desciription}</p>
        </div>
      </fieldset>
    </div>
  )
}

export default TipsBox
