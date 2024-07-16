import HomeAdsSide from "@/components/advertisement/molecules/HomeAdsSide"
import ArticleTabs from "@/components/article/widgets/ArticleTabs"
import HomeEditorPickArticles from "@/components/home/HomeEditorPickArticles"
import HomeLatestArticleList from "@/components/home/HomeLatestArticleList"
import HomeTrendingNewsArticles from "@/components/home/HomeTrendingNewsArticles"

// const leftArticleTabs = [{ id: "1", name: "最新文章", content: <HomeLatestArticleList /> }]

const rightArticleTabs = [
  { id: "1", name: "編輯精選", content: <HomeEditorPickArticles /> },
  { id: "2", name: "人氣新聞", content: <HomeTrendingNewsArticles /> },
]

async function HomeFirstArticleSection() {
  // max-w-8xl
  return (
    <div className="home-container flex flex-col xl:flex-row gap-9">
      <div className="flex-grow grid lg:grid-cols-2 gap-[50px]">
        {/* left */}
        <HomeLatestArticleList />

        {/* center */}
        <ArticleTabs tabs={rightArticleTabs} />
      </div>

      {/* right */}
      <HomeAdsSide />
    </div>
  )
}

export default HomeFirstArticleSection
