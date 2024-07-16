import React from "react"
import { getHomeCategoryColumns } from "@/common/utils/data/home/getHomeCategoryColumns"
import HomeHotArticleSpotlightListVertical from "@/components/home/HomeHotArticleSpotlightListVertical"

type Props = {}

async function HomeArticleColumns({ }: Props) {
  const homeCategoryColumns = await getHomeCategoryColumns()
  return (
    <div className="home-container grid lg:grid-cols-2 xl:grid-cols-3 gap-[49px]">
      {homeCategoryColumns.map((homeCategoryColumn, index) => {
        const key = homeCategoryColumn.id
        const title = homeCategoryColumn.attributes?.name
        const categorySlug = homeCategoryColumn.attributes?.slug
        if (!title || !categorySlug) return null
        return <HomeHotArticleSpotlightListVertical key={key} title={title} categorySlug={categorySlug} />
      })}
      {/* <HomeHotArticleSpotlightListVertical title={`投资理财`} />
      <HomeHotArticleSpotlightListVertical title={`资本精选`} />
      <HomeHotArticleSpotlightListVertical title={`资本盛世`} /> */}
    </div>
  )
}

export default HomeArticleColumns
