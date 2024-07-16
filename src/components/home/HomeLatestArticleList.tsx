import { getHomeLatestArticles } from "@/common/utils/data/home/getHomeLatestArticles"
import HomeArticleListSmall from "@/components/home/HomeArticleListSmall"

type Props = {}

async function HomeLatestArticleList({}: Props) {
  const items = await getHomeLatestArticles()
  return (
    <div>
      <div className="h4 mb-6 text-primary font-semibold">最新文章</div>
      <HomeArticleListSmall items={items} showBlogger={true} />
    </div>
  )
}

export default HomeLatestArticleList
