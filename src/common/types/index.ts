import { ReactNode } from "react"
import {
  ArticleBasicFragment,
  ArticleBlocksDynamicZone,
  Enum_Article_Layout,
  LoginMutation,
  Maybe,
  TagRelationResponseCollection,
} from "@/common/lib/graphql/generated/graphql"
import { transformInfoboxShape } from "@/common/utils/data/bookmark/transformInfoboxShape"

export type Nulllable<T> = T | null

export type OptionalString = Nulllable<string> | undefined

export type ArticlePropsOptional = {
  imageUrl?: OptionalString
  imageWidth?: number | null | undefined
  imageHeight?: number | null | undefined
  imageAlt?: OptionalString
  imageFormats?: any
  date?: OptionalString
  tag?: OptionalString
  articleId?: OptionalString
  title?: OptionalString
  description?: OptionalString
  titleVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  articleItemVariant?: "horizontal" | "vertical" | "categoryHorizontal" | "vertical-bookmark" | "horizontal-bookmark"
  // image
  articleImageClassName?: string
  articleImageProps?: ImageContainerProps
  slug?: string
  categoryLabel?: string
  editorSelect?: boolean | null
  index?: number | null
  type?: "blogArticle" | "smallArticle" | "rightVerticalArticle" | "bookmark-article" | null
  editor?: NonNullable<ArticleBasicFragment["attributes"]>["editor"]
  content?: OptionalString
  blocks?: ArticleBlocksDynamicZone[] | undefined | null
  mastheadImage?: OptionalString
  mastheadImageWidth?: number | null
  mastheadImageHeight?: number | null
  mastheadImageAlt?: OptionalString
  layout?: Enum_Article_Layout | null
  tags?: Maybe<TagRelationResponseCollection>
  categories?: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
  otherEventArticles?: NonNullable<ArticleBasicFragment["attributes"]>["otherEventArticles"]
  sidenote?: OptionalString
  relatedArticles?: NonNullable<ArticleBasicFragment["attributes"]>["relatedArticles"]
  showBlogger?: boolean | null
  hideCategory?: boolean | null
}

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  children?: ReactNode
}
export enum BookmarkButtonVariant {
  ADD = "+",
  ADDED = "✓",
  LOADING = "loading",
}

export type Article = {
  ad_banner_side?: NonNullable<ArticleBasicFragment["attributes"]>["ad_banner_side"]
  imageUrl?: OptionalString
  imageWidth?: number | null | undefined
  imageHeight?: number | null | undefined
  imageAlt?: OptionalString
  imageFormats?: any
  date?: OptionalString
  tag?: OptionalString
  articleId?: OptionalString
  title?: OptionalString
  description?: OptionalString
  slug?: string
  categoryLabel?: string
  editorSelect?: boolean | null
  editor?: NonNullable<ArticleBasicFragment["attributes"]>["editor"]
  content?: OptionalString
  blocks?: ArticleBlocksDynamicZone[]
  hideKeyVisual?: boolean | null
  mastheadImage?: OptionalString
  mastheadImageWidth?: number | null
  mastheadImageHeight?: number | null
  mastheadImageAlt?: OptionalString
  stockQuote?: OptionalString
  layout?: Enum_Article_Layout | null
  tags?: Maybe<TagRelationResponseCollection>
  categories?: NonNullable<ArticleBasicFragment["attributes"]>["categories"]
  otherEventArticles?: NonNullable<ArticleBasicFragment["attributes"]>["otherEventArticles"]
  sidenote?: OptionalString
  relatedArticles?: NonNullable<ArticleBasicFragment["attributes"]>["relatedArticles"]
  seo?: NonNullable<ArticleBasicFragment["attributes"]>["seo"]
}

export type ArticleBasicFragmentWithContent = ArticleBasicFragment & { attributes: { content?: OptionalString } } & {
  attributes: { blocks?: ArticleBlocksDynamicZone[] }
}

export type ImageContainerProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  parentProps?: React.HTMLAttributes<HTMLDivElement>
  height?: number | undefined
  width?: number | undefined
  className?: string
}

export type ResponsiveImageContainerProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  parentProps?: React.HTMLAttributes<HTMLDivElement>
  imgUrl?: string
  height?: number | undefined
  width?: number | undefined
  altText?: string
  className?: string
}

export type StrapiUser = LoginMutation["login"]["user"]

export type Infobox = ReturnType<typeof transformInfoboxShape>[number]

export enum ArticleBookmarkButtonIconType {
  GENERIC = "generic",
  LARGE = "large",
  MOBILE = "Mobile",
}
