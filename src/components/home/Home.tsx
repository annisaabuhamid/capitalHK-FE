import { Suspense } from "react"
import HomeArticleColumns from "@/components/article/widgets/HomeArticleColumns"
import HomeCelebrityInterviewSection from "@/components/celebrity-interview/HomeCelebrityInterviewSection"
import { RenderingPageSkeleton } from "@/components/common/molecule/loading/RenderingPageSkeleton"
import HomeCategoryFeatureSections from "@/components/home/HomeCategoryFeatureSections"
import HomeDiarySection from "@/components/home/HomeDiarySection"
import HomeFirstArticleSection from "@/components/home/HomeFirstArticleSection"
import HomeSliderWrapper from "@/components/home/HomeSliderWrapper"
import HomeTopicSection from "@/components/home/HomeTopicSection"

async function Home() {
  return (
    <div>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeSliderWrapper />
      </Suspense>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeFirstArticleSection />
      </Suspense>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeTopicSection />
      </Suspense>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeCategoryFeatureSections />
      </Suspense>

      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeDiarySection />
      </Suspense>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeCelebrityInterviewSection />
      </Suspense>
      <Suspense fallback={<RenderingPageSkeleton />}>
        <HomeArticleColumns />
      </Suspense>
    </div>
  )
}

export default Home
