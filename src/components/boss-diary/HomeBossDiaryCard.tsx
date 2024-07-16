"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { HomeBossDiaryCardData } from "@/common/types/homeTypes"
import Divider from "@/components/common/atom/Divider"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import ImageContainer from "@/components/image/ImageContainer"
import { renderRootPath } from "@/utils"

type Props = {
  data: HomeBossDiaryCardData
  url: string
}
function HomeBossDiaryCard({ data, url }: Props) {
  return (
    <>
      <Link href={url}>
        <ReadMoreButton>
          <span className="h2">吳老闆週記</span>
        </ReadMoreButton>
      </Link>
      <Link href={url} passHref>
        <div className="mt-4 bg-secondary-800 hover:bg-secondary-700 text-white py-[23px] px-[14px] flex gap-4 md:gap-5 rounded h-[236px] max-w-[390px] ">
          {/* <div className=""> */}
          {/* portrait size */}
          <ImageContainer
            src={data.image}
            alt="boss author"
            className=" w-[116px] h-[151px] md:w-[148px] md:h-[193px]"
          />
          {/* </div> */}
          <CardContent data={data} />
        </div>
      </Link>
    </>
  )
}

export default HomeBossDiaryCard

const CardContent = ({ data }: { data: HomeBossDiaryCardData }) => {
  const { author, authorDescription, date, title, articleSlug, categories } = data
  // format date to xx月xx日
  const formattedDate = !date
    ? null
    : new Date(date).toLocaleDateString("zh-TW", {
        month: "long",
        day: "numeric",
      })

  const router = usePathname()
  const dynamicRouter = useParams()

  const catSlug = renderRootPath(router, dynamicRouter, categories)
  const finalHref = `${catSlug}/${articleSlug}`

  return (
    <div className="mb-1">
      {/* <Link href={finalHref} className="mb-1"> */}
      <div>
        <div className="h6 mb-[2.5px]">{formattedDate}</div>
        <div className="h4 font-bold line-clamp-3">{title}</div>
      </div>
      {/* </Link> */}
      <Divider />
      <div className="h5 text-gold-100 mb-1 font-bold">{author}</div>
      <div className="h6">{authorDescription}</div>
    </div>
  )
}
