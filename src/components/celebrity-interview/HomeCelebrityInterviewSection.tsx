import Link from "next/link"
import React from "react"
import { getHomeInterviewArticles, getHomeInterviewUrl } from "@/common/utils/data/home/getHomeInterviewArticles"
import HomeCelebrityInterviewSlider from "@/components/celebrity-interview/HomeCelebrityInterviewSlider"

type Props = {}

async function HomeCelebrityInterviewSection({}: Props) {
  const categorySlug = "interview"
  const homeInterviewArticles = await getHomeInterviewArticles(categorySlug)
  const homeInterviewUrl = await getHomeInterviewUrl()

  return (
    <div className="home-celebrity-interview-wrapper my-12">
      <div className="py-9 text-white">
        {/* title */}
        <div className="h2 leading-[26px] font-semibold text-center">人物專訪</div>
        {/* slides */}
        <HomeCelebrityInterviewSlider homeInterviewArticles={homeInterviewArticles} />
        {/* read more */}
        <div className="text-center h-10">
          <Link
            href={homeInterviewUrl}
            className="inline-block mx-auto py-[7px] px-6 text-center border-b-3 border-b-white border-opacity-0 lg:transform lg:duration-500 lg:hover:py-1 lg:hover:border-opacity-100"
          >
            <div className="h5 leading-none group-hover:-translate-x-1">閱覽更多</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeCelebrityInterviewSection
