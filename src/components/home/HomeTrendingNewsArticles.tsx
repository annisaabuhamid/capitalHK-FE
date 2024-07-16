import { getHomeFeaturedTrendingNews } from "@/common/utils/data/home/getHomeFeaturedTrendingNews"
import HomeArticleListSmall from "@/components/home/HomeArticleListSmall"

type Props = {}

async function HomeTrendingNewsArticles({}: Props) {
  const items = await getHomeFeaturedTrendingNews()
  return <HomeArticleListSmall items={items.slice(0, 4)} showBlogger={true} />
}

export default HomeTrendingNewsArticles
