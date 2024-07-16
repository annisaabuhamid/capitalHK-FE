import { ArticlePropsOptional } from "@/common/types"
import ArticleCardContent from "@/components/article/common/molecule/ArticleCardContent"
import ArticleItemToolbar from "@/components/article/common/molecule/ArticleItemToolbar"
import EditorSelectBadge from "@/components/article/common/molecule/EditorSelectBadge"
import ArticleItemLinkWrapper from "@/components/article/common/organisms/ArticleItemLinkWrapper"
import ImageContainer from "@/components/image/ImageContainer"

type Props = ArticlePropsOptional & {}

function ArticleItemMedium({
  imageUrl,
  date,
  tag,
  articleId,
  description,
  title,
  titleVariant,
  articleImageClassName,
  articleImageProps,
  slug,
  categoryLabel,
  categories,
  editorSelect,
  type,
}: Props) {
  return (
    <ArticleItemLinkWrapper
      className="article-item-medium text-secondary-800 h-full block"
      slug={slug ?? ""}
      categories={categories}
    >
      <div className="flex flex-col h-full">
        <div className="aspect-[3/2] lg:max-w-[696px] lg:max-h-[392px]">
          <ImageContainer
            src={imageUrl ?? ""}
            alt="article medium image"
            {...articleImageProps}
            className={articleImageClassName}
          />
          <EditorSelectBadge editorSelect={editorSelect} />
        </div>
        <ArticleItemToolbar
          date={date}
          tag={tag}
          categoryLabel={categoryLabel}
          articleId={articleId}
          type={"smallArticle"}
        />
        <ArticleCardContent description={description} title={title} titleVariant={titleVariant} />
      </div>
    </ArticleItemLinkWrapper>
  )
}

export default ArticleItemMedium
