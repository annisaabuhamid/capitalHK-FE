"use client"

import { ComponentArticleInfoBox } from "@/common/lib/graphql/generated/graphql"
import { transformInfoboxShape } from "@/common/utils/data/bookmark/transformInfoboxShape"
import InfoboxItem from "@/components/article/component/info-box/InfoboxItem"
import InfoboxBookmarkButton from "@/components/common/molecule/button/info-box/InfoboxBookmarkButton"

type Props = {
  data: ComponentArticleInfoBox
}

const ArticleInfoBoxWrapper = ({ data }: Props) => {
  const rawInfoboxList = data.information_box?.data
  const infoboxList = transformInfoboxShape(rawInfoboxList ? [rawInfoboxList] : [])

  return (
    <div className={"mt-9 "}>
      <fieldset className="border-t-2 border-primary-900 text-primary-900 p-6 ">
        <legend className="w-[44.5px] flex justify-center font-bold text-[17px]">資訊</legend>
        <InfoboxItem infoboxItem={infoboxList[0]} />
      </fieldset>
    </div>
  )
}

export default ArticleInfoBoxWrapper
