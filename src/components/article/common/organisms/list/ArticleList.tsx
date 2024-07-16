import clsx from "clsx"
import { Fragment } from "react"
import { Article, ArticlePropsOptional, ImageContainerProps } from "@/common/types"
import HorizontalAdsWrapper from "@/components/advertisement/wrappers/HorizontalAdsWrapper"
import ArticleItemSmallResponsive from "@/components/article/common/organisms/ArticleItemSmallResponsive"

type Props = {
  articles: Article[]
  articleItemVariant?: ArticlePropsOptional["articleItemVariant"]
  articleImageClassName?: string
  type?: ArticlePropsOptional["type"]
  articleImageProps?: ImageContainerProps
  adsConfig?: {
    adsInterval?: number
  }
  adsId?: string
  showBlogger?: boolean | null
}

function ArticleList({
  articles,
  articleItemVariant,
  articleImageClassName,
  articleImageProps,
  adsConfig,
  type,
  adsId,
  showBlogger = false,
}: Props) {
  // const [categoryAds, setCategoryAds] = useState(null)

  // // Fetch category ads when categoryId changes
  // const { data } = useCategoryAdsQuery({ variables: { id: categoryId } })

  // // Store categoryAds in state
  // useEffect(() => {
  //   if (data) {
  //     setCategoryAds(data)
  //   }
  // }, [data])

  return (
    <div
      className={clsx({
        "w-full grid": type,
        "lg:mt-0 lg:gap-0 border-t-[#E5E5E5] lg:first:border-t": type === "blogArticle",
        "lg:gap-0": type === "smallArticle",
        "justify-between gap-9 h-full": type === "rightVerticalArticle",
        "mt-6 lg:mt-0 lg:gap-0": type === "bookmark-article",
      })}
    >
      {articles.map((article, index) => {
        const adsIsVisible = adsConfig?.adsInterval ? (index + 1) % adsConfig.adsInterval === 0 : false
        return (
          <Fragment key={article.articleId}>
            <ArticleItemSmallResponsive
              {...article}
              articleItemVariant={articleItemVariant}
              articleImageClassName={articleImageClassName}
              articleImageProps={index < 4 ? { fetchPriority: "high" } : articleImageProps}
              index={index}
              showBlogger={showBlogger}
            />
            {adsIsVisible && adsId ? (
              <div
                className="lg:border-b py-12"
                // key={`ads-under-${article.articleId}`}
              >
                <HorizontalAdsWrapper adsID={adsId} />
              </div>
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ArticleList
