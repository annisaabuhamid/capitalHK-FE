import { Article } from "@/common/types"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"
// DEPRECATED
export const BloggerArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    // <div className="article-spotlight-list grid lg:grid-cols-12 gap-12 flex-grow">
    //   <div className="article-spotlight-list-btm lg:col-span-12 ">
    <ArticleList
      articles={articles}
      articleItemVariant={"categoryHorizontal"}
      adsConfig={{ adsInterval: 5 }}
      type={"blogArticle"}
    />
    //  </div>
    // </div>
  )
}
