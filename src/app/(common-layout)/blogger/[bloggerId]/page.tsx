//= Scripts
import { defaultMetadata } from "@/common/config/defaultMetadata"
import {
  getArticlesByEditorID,
  getArticlesByEditorIDMetaPagination,
} from "@/common/utils/data/article/getArticlesByEditorID"
import { ARTICLE_PER_PAGE } from "@/common/utils/data/constants"
import { getEditor } from "@/common/utils/data/editors/getEditor"
import { transformEditorShape } from "@/common/utils/data/editors/transformEditorShape"
import BloggerPage from "@/components/blogger/BloggerPage"

//= Common Components
export const metadata = {
  ...defaultMetadata,
}

export const dynamicParams = true
export default async function Page({ params }: { params: { bloggerId: string } }) {
  const { bloggerId } = params
  const bloggerDetails = await getEditor({ editorId: bloggerId })
  const transformedBloggerDetails = transformEditorShape([bloggerDetails])[0]
  const bloggerArticles = await getArticlesByEditorID(undefined, {
    filters: { editor: { id: { eq: bloggerId } } },
    pagination: { pageSize: ARTICLE_PER_PAGE, page: 1 },
    sort: "publishedDate:desc",
  })

  const numberOfArticles = await getArticlesByEditorIDMetaPagination(undefined, {
    filters: { editor: { id: { eq: bloggerId } } },
    pagination: { pageSize: ARTICLE_PER_PAGE, page: 1 },
    sort: "publishedDate:desc",
  })

  return (
    <BloggerPage
      blogger={transformedBloggerDetails}
      bloggerArticles={bloggerArticles}
      numberOfArticles={numberOfArticles ?? 0}
    />
  )
}
