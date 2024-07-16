"use client"

import { useArticleListSimpleQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleListShape } from "@/common/utils/transformArticleListShape"
import ArticleList from "@/components/article/common/organisms/list/ArticleList"

type Props = {}

function BookmarkSuggestedArticleList({}: Props) {
  const { data } = useArticleListSimpleQuery({
    variables: {
      pagination: { page: 1, pageSize: 10 },
      sort: "publishedDate:desc",
    },
  })

  const rawArticleList = data?.articles?.data ?? []
  const articleList = transformArticleListShape(rawArticleList)
  return (
    <div className="max-w-[765px] mx-auto mt-9">
      <div className="h2 xl:mb-6 font-bold text-center">你可能有興趣</div>
      <div className="article-spotlight-list">
        <div className="article-spotlight-list-btm">
          <ArticleList
            articles={articleList}
            articleItemVariant={"horizontal-bookmark"}
            adsConfig={{ adsInterval: 5 }}
            type={"bookmark-article"}
          />
        </div>
      </div>
    </div>
  )
}

export default BookmarkSuggestedArticleList
