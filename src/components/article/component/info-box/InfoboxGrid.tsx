import React from "react"
import { Infobox } from "@/common/types"
import InfoboxItem from "@/components/article/component/info-box/InfoboxItem"
import InfoboxItemWrapper from "@/components/article/component/info-box/InfoboxItemWrapper"

type Props = {
  infoboxList: Infobox[]
}

function InfoboxGrid({ infoboxList }: Props) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-9">
      {infoboxList.map((infoboxItem) => {
        return (
          <InfoboxItemWrapper key={infoboxItem.id}>
            <InfoboxItem infoboxItem={infoboxItem} />
          </InfoboxItemWrapper>
        )
      })}
    </div>
  )
}

export default InfoboxGrid
