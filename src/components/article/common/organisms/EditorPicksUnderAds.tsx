import { CategoryFragmentFragment } from "@/common/lib/graphql/generated/graphql"
import { getArticleById, getArticleByIds } from "@/common/utils/data/article/getArticleById"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import ArticleCardTitle from "@/components/article/common/atom/ArticleCardTitle"
import ArticleItemToolbar from "@/components/article/common/molecule/ArticleItemToolbar"
import EditorPickArticle from "./EditorPicksArticle"
import EditorPicksArticle from "./EditorPicksArticle"

async function EditorPicksUnderAds({ category }: { category?: CategoryFragmentFragment }) {
  const categorySlug = category?.attributes?.slug ?? ""
  const categoryId = category?.id ?? ""
  const editorPickArticleId = category?.attributes?.editorPicks?.data
  const editorPickIds = editorPickArticleId?.map((article) => article.id) || []

  const articles = await Promise.all(
    editorPickIds.map(async (articleId) => {
      if (articleId) {
        const articleData = await getArticleById(articleId)
        return articleData
      }
    })
  )

  if (articles.length === 0) {
    return false
  }

  return (
    <div className="editor-picks-under-ads">
      <div className="header h4">編輯精選</div>
      <div className="content">
        {articles.slice(0, 2).map((article) => (
          <div key={article?.articleId} className="flex-grow lg:pt-3">
            <EditorPicksArticle
              tag={article?.tag}
              categoryLabel={article?.categoryLabel}
              articleId={article?.articleId}
              categories={article?.categories}
              slug={article?.slug}
              title={article?.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditorPicksUnderAds
