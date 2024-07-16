import { getHomeFeaturedEditorPicks } from "@/common/utils/data/home/getHomeFeaturedEditorPicks"
import HomeArticleListSmall from "@/components/home/HomeArticleListSmall"

type Props = {}

async function HomeEditorPickArticles({}: Props) {
  const items = await getHomeFeaturedEditorPicks()
  return <HomeArticleListSmall items={items.slice(0, 4)} showBlogger={true} />
}

export default HomeEditorPickArticles
