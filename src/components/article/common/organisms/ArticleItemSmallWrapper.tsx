"use client"

import { ArticlePropsOptional } from "@/common/types"
import { getDummyImageUrl } from "@/common/utils/getDummyImageUrl"
import ArticleItemSmall from "@/components/article/common/organisms/ArticleItemSmall"

type Props = {}

function ArticleItemSmallWrapper({}: Props) {
  const article: ArticlePropsOptional = {
    tag: `可持续发展`,
    date: `2021-08-01`,
    title: `HKDA 推动港设计业结合科技传承与创新冀 邀设计师赴内地交流`,
    imageUrl: getDummyImageUrl({ size: [400, 200] }),
    articleId: "1",
  }
  return (
    <div>
      <ArticleItemSmall
        tag={article.tag}
        title={article.title}
        date={article.date}
        imageUrl={article.imageUrl}
        articleId={article.articleId}
        categories={article.categories}
        articleImageClassName="article-image-home"
      />
    </div>
  )
}

export default ArticleItemSmallWrapper
