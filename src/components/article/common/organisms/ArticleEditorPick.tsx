import { usePathname } from "next/navigation"
import { useCategoryEditorPickQuery } from "@/common/lib/graphql/generated/graphql"
import { transformArticleShape } from "@/common/utils/transformArticleShape"
import EditorPicksArticle from "./EditorPicksArticle"

type Props = {}

function ArticleEditorPick({}: Props) {
  const router = usePathname()
  const lastIndex = router.lastIndexOf("/")
  const secondLastIndex = router.lastIndexOf("/", lastIndex - 1)
  const extractedText = router.substring(secondLastIndex + 1, lastIndex)

  const { data } = useCategoryEditorPickQuery({
    variables: {
      filters: {
        slug: { eq: extractedText },
      },
    },
  })

  const rawArticleList = data?.categories?.data[0]?.attributes?.editorPicks?.data || []
  const articles = transformArticleShape(rawArticleList)

  // console.log(articles)

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

export default ArticleEditorPick
