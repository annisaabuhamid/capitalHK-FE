import { Article } from "@/common/types"
import ArticleItemToolbar from "@/components/article/common/molecule/ArticleItemToolbar"
import DummyImage from "@/components/bookmark/list/item/DummyImage"

type Props = {
  item: Article
}

function ArticleBookmarkItem({ item }: Props) {
  return (
    <div>
      <DummyImage />

      <ArticleItemToolbar articleId={item.articleId} date={item.date} categoryLabel={item.categoryLabel} />
      <div className="h4 font-medium ">{item.title}</div>
    </div>
  )
}

export default ArticleBookmarkItem
