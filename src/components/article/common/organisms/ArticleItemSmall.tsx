import clsx from "clsx"
import { ArticlePropsOptional } from "@/common/types"
import ArticleCardTitle from "@/components/article/common/atom/ArticleCardTitle"
import ArticleItemToolbar from "@/components/article/common/molecule/ArticleItemToolbar"
import EditorSelectBadge from "@/components/article/common/molecule/EditorSelectBadge"
import ArticleItemLinkWrapper from "@/components/article/common/organisms/ArticleItemLinkWrapper"
import ImageContainer from "@/components/image/ImageContainer"
import ArticleEditorBlogger from "./ArticleEditorBlogger"

type Props = ArticlePropsOptional & {}

function ArticleItemSmall({
  title,
  tag,
  date,
  articleId,
  editor,
  imageUrl,
  articleImageClassName,
  articleItemVariant = "horizontal",
  articleImageProps,
  titleVariant,
  slug,
  categories,
  categoryLabel,
  editorSelect,
  index,
  showBlogger = false,
}: Props) {
  return (
    <ArticleItemLinkWrapper className="article-item-small" slug={slug ?? ""} categories={categories}>
      <div
        className={clsx({
          "gap-5 flex items-start w-full": articleItemVariant === "horizontal",
          "gap-2 flex flex-col w-full h-full justify-between": articleItemVariant === "vertical",
          "gap-2 flex flex-col justify-start w-full h-full max-w-screen sm:max-w-none":
            articleItemVariant === "vertical-bookmark",
          "gap-5 flex items-start w-full ": articleItemVariant === "horizontal-bookmark",
          "gap-5 flex items-start w-full lg:border-b py-3 justify-between lg:py-6":
            articleItemVariant === "categoryHorizontal" && index !== 0,
          "gap-5 flex items-start w-full lg:outline-1 lg:outline  py-3 lg:outline-[#E5E5E5] lg:py-6":
            articleItemVariant === "categoryHorizontal" && index === 0,
          // "gap-5 flex items-start w-full pt-6 lg:py-4 ":
          // articleItemVariant === "vertical-bookmark",
          "gap-5 flex items-start w-full lg:border-b pt-4 lg:py-4 justify-between":
            articleItemVariant === "horizontal-bookmark",
        })}
      >
        {/* left */}
        <div className={`relative image-container md:aspect-[3/2]`}>
          {/* <div className={`relative image-container ${articleItemVariant === "vertical-bookmark" ? ("md:aspect-[3/2]"):("md:aspect-[3/2]")} `}> */}
          {/* {index} */}
          <ImageContainer
            src={imageUrl ?? ""}
            alt="article small"
            {...articleImageProps}
            className={articleImageClassName}
          />
          {/* EditorSelect Badge */}
          <EditorSelectBadge editorSelect={editorSelect} />
        </div>
        {/* <div style={{ aspectRatio: "4/3" }} className="w-5/12 bg-gray-500"></div> */}
        {/* right */}
        <div
          className={`${articleItemVariant === "categoryHorizontal" ? "lg:pt-3" : ""} ${
            articleItemVariant === "vertical" ? "" : "flex-grow"
          } `}
        >
          <ArticleItemToolbar
            tag={tag}
            categoryLabel={categoryLabel}
            date={date}
            articleId={articleId}
            className={`text-2xs`}
          />

          <ArticleCardTitle
            titleVariant={titleVariant}
            title={title}
            className={`  ${
              articleItemVariant === "vertical-bookmark" ? "!text-[17px] font-medium !leading-[27px]" : ""
            } line-clamp-2 lg:h-[60px]`}
          />
          {showBlogger && editor?.data?.attributes?.isBlogger && <ArticleEditorBlogger editor={editor} />}
        </div>
      </div>
    </ArticleItemLinkWrapper>
  )
}

export default ArticleItemSmall
