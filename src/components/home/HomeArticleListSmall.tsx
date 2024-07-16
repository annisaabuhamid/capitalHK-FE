import React from "react"
import { Article } from "@/common/types"
import ArticleItemSmallResponsive from "@/components/article/common/organisms/ArticleItemSmallResponsive"

type Props = {
  items: Article[]
  type?: string | null
  showBlogger?: boolean | null
}

function HomeArticleListSmall({ items, type, showBlogger = false }: Props) {
  return (
    <div className="gap-6 flex flex-col text-secondary-800">
      {items.map((item) => {
        return (
          <ArticleItemSmallResponsive
            key={item.articleId}
            articleId={item.articleId}
            editor={item.editor}
            date={item.date}
            slug={item.slug}
            tag={item.tag}
            categoryLabel={item.categoryLabel}
            description={item.description}
            imageUrl={item.imageUrl}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
            imageAlt={item.imageAlt}
            imageFormats={item.imageFormats}
            title={item.title}
            editorSelect={item.editorSelect}
            categories={item.categories}
            articleImageClassName={type == "small-image" ? `article-image-home-small` : `article-image-home`}
            showBlogger={showBlogger}
          />
        )
      })}
    </div>
  )
}

export default HomeArticleListSmall
