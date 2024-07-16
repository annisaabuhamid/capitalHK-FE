import { EditorEntity } from "@/common/lib/graphql/generated/graphql"
import { Article } from "@/common/types"

export type BookmarkItem = {
  id: string
  articleItem?: Partial<Article>
  infoboxItem?: Partial<Article>
  editorItem?: Partial<EditorEntity>
}

export enum BookmarkType {
  Article = "articles",
  Infobox = "information_boxes",
  Editor = "editors",
}
