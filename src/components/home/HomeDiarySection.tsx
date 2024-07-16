import { getHomeBossDiary, getHomeBossDiaryUrl } from "@/common/utils/data/home/getHomeBossDiary"
import HomeBossDiaryCard from "@/components/boss-diary/HomeBossDiaryCard"
import HomeExpertReviewSliderWrapper from "@/components/expert-review/HomeExpertReviewSliderWrapper"

type Props = {}

async function HomeDiarySection({}: Props) {
  const bossDiaryData = await getHomeBossDiary()
  const bossDiaryDataUrl = await getHomeBossDiaryUrl()
  return (
    <div className="home-container my-12 grid grid-cols-3 gap-[36px] md:gap-3">
      <div className="col-span-3 lg:col-span-1">
        <HomeBossDiaryCard data={bossDiaryData} url={bossDiaryDataUrl} />
      </div>
      <div className="col-span-3 lg:col-span-2">
        <HomeExpertReviewSliderWrapper />
      </div>
    </div>
  )
}

export default HomeDiarySection
