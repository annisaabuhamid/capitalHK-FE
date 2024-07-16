import Link from "next/link"
import {
  getHomeTopicSection,
  getHomeTopicSectionName,
  getHomeTopicSectionUrl,
} from "@/common/utils/data/home/getHomeTopicSection"
import HomeTopicSlide from "./HomeTopicSlide"

type Props = {}

async function HomeTopicSection({}: Props) {
  const topicSectionData = await getHomeTopicSection()
  const url = (await getHomeTopicSectionUrl()) || ""
  const name = (await getHomeTopicSectionName()) || "專題"

  return (
    <div className="home-topic-wrapper my-12">
      <div className="home-container py-6 lg:py-9 text-white">
        {/* title */}
        <div className="text-xl lg:text-2xl leading-[30px] lg:leading-[26px] font-semibold text-center mb-4 lg:mb-6">
          {name}
        </div>
        {/* slides */}
        <HomeTopicSlide topicSectionData={topicSectionData} />
        {/* read more */}

        <div className="text-center h-10">
          <Link
            href={url}
            className="inline-block mx-auto py-[7px] px-6 text-center border-b-3 border-b-white border-opacity-0 lg:duration-500 lg:hover:py-1 lg:hover:border-opacity-100"
          >
            <span className="h5 leading-none group-hover:-translate-x-1">閱覽更多</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeTopicSection
