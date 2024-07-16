import { Article } from "@/common/types"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"
// DEPRECATED
export const SearchArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <ArticleList
      articles={articles}
      articleItemVariant={"categoryHorizontal"}
      adsConfig={{ adsInterval: 5 }}
      type={"blogArticle"}
      showBlogger={true}
    />
  )
}
