"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { ArticlePropsOptional } from "@/common/types"
import ArticleCardTitle from "@/components/article/common/atom/ArticleCardTitle"
import ArticleItemToolbar from "@/components/article/common/molecule/ArticleItemToolbar"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import ResponsiveImageContainer from "@/components/image/ResponsiveImageContainer"
import { renderRootPath } from "@/utils"

type Props = ArticlePropsOptional & {}

function SpecialTopicMainArticle({
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
  categories,
  categoryLabel,
  editorSelect,
}: Props) {
  return (
    <div className="text-secondary-800">
      <div className="flex items-center flex-col lg:flex-row">
        <div className="-mx-5">
          <ResponsiveImageContainer
            imgUrl={!!imageFormats?.large?.url ? imageFormats?.large?.url : imageUrl}
            width={!!imageFormats?.large?.url ? imageFormats?.large?.width : imageWidth}
            height={!!imageFormats?.large?.url ? imageFormats?.large?.height : imageHeight}
            altText={imageAlt ?? "Special Topic Main Article"}
          />
        </div>
        <div className="-mt-8 lg:-mt-0 lg:-ml-9 z-10 bg-neutral-100 p-6 lg:p-9 lg:max-w-[612px]">
          <ArticleCardContent
            description={description}
            title={title}
            titleVariant={titleVariant}
            date={date}
            articleId={articleId}
            slug={slug}
            categories={categories}
          />
        </div>
      </div>
    </div>
  )
}

export default SpecialTopicMainArticle

const ArticleCardContent = ({
  description,
  title,
  titleVariant,
  date,
  slug,
  articleId,
  categories,
}: ArticlePropsOptional) => {
  const router = usePathname()
  const dynamicRouter = useParams()

  const catSlug = renderRootPath(router, dynamicRouter, categories)

  const finalHref = `${catSlug}/${slug}`

  // const href = slug ? `/article/${slug}` : ""
  return (
    <div>
      <ArticleItemToolbar date={date} articleId={articleId} />
      <div className="font-bold text-xl line-clamp-2 md:line-clamp-none">
        <ArticleCardTitle title={title} titleVariant={titleVariant} />
      </div>
      <div className="article-description hidden md:flex text-base text-justify mt-4 mb-6 line-clamp-3">
        {description}
      </div>

      <Link href={finalHref} className="hidden md:flex">
        <ReadMoreButton>
          <span className="h5 !font-bold transition-all duration-300 group-hover:-translate-x-1">閱覽更多</span>
        </ReadMoreButton>
      </Link>
    </div>
  )
}
