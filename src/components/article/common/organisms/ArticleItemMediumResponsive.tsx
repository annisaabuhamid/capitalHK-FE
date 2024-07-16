import Image from "next/image"
import { ArticlePropsOptional } from "@/common/types"
import ArticleCardContent from "@/components/article/common/molecule/ArticleCardContent"
import ArticleItemToolbar from "@/components/article/common/molecule/ArticleItemToolbar"
import EditorSelectBadge from "@/components/article/common/molecule/EditorSelectBadge"
import ArticleItemLinkWrapper from "@/components/article/common/organisms/ArticleItemLinkWrapper"
// import ImageContainer from "@/components/image/ImageContainer"
// import ResponsiveImageContainer from "@/components/image/ResponsiveImageContainer"

type Props = ArticlePropsOptional & {}

function ArticleItemMediumResponsive({
  imageUrl,
  imageWidth,
  imageHeight,
  imageAlt,
  imageFormats,
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
  showBlogger = false,
  hideCategory = false,
}: Props) {
  return (
    <ArticleItemLinkWrapper
      className="article-item-medium text-secondary-800 h-full block"
      slug={slug ?? ""}
      categories={categories}
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-[3/2] lg:max-w-[696px] lg:max-h-[392px] overflow-hidden">
          <picture className="image-container overflow-hidden w-full h-full">
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={!!imageFormats?.medium?.url ? imageFormats?.medium?.url : imageUrl}
            />
            <Image
              src={!!imageFormats?.small?.url ? imageFormats?.small?.url : imageUrl}
              width={!!imageFormats?.small?.url ? imageFormats?.small?.width : imageWidth}
              height={!!imageFormats?.small?.url ? imageFormats?.small?.height : imageHeight}
              alt={imageAlt ?? "article medium"}
              className={
                "image-element h-full mx-auto lg:duration-500 lg:transform lg:hover:scale-110 lg:transition-transform"
              }
            />
          </picture>
          {/* <ResponsiveImageContainer
            imgUrl={!!imageFormats?.medium?.url ? imageFormats?.medium?.url : imageUrl}
            width={!!imageFormats?.medium?.url ? imageFormats?.medium?.width : imageWidth}
            height={!!imageFormats?.medium?.url ? imageFormats?.medium?.height : imageHeight}
            altText={imageAlt ?? "article medium"}
            {...articleImageProps}
            className={articleImageClassName}
          /> */}
          <EditorSelectBadge editorSelect={editorSelect} />
        </div>
        <ArticleItemToolbar
          date={date}
          tag={tag}
          categoryLabel={categoryLabel}
          articleId={articleId}
          type={"smallArticle"}
          hideCategory={hideCategory}
        />
        <ArticleCardContent description={description} title={title} titleVariant={titleVariant} />
      </div>
    </ArticleItemLinkWrapper>
  )
}

export default ArticleItemMediumResponsive
