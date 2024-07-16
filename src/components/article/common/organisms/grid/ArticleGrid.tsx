import React, { Fragment } from "react"
import { Article } from "@/common/types"
import HorizontalAdsWrapper from "@/components/advertisement/wrappers/HorizontalAdsWrapper"
import ArticleItemMediumResponsive from "@/components/article/common/organisms/ArticleItemMediumResponsive"
import ArticleItemSmall from "@/components/article/common/organisms/ArticleItemSmall"
import ArticleItemSmallResponsive from "@/components/article/common/organisms/ArticleItemSmallResponsive"
import { cn } from "@/components/ui/utils"
import styles from "./ArticleGrid.module.css"

type Props = {
  articles: Article[]
  adsConfig?: {
    adsInterval?: number
  }
  type?: string
  adsId?: string
}

function ArticleGrid({ articles, adsConfig, type, adsId }: Props) {
  // const gridClassName = cn(type === "bookmark-myaccount" ? styles["article-grid-bookmark"] : styles["article-grid"]);
  return (
    <div className={cn(type === "bookmark-myaccount" ? styles["article-grid-bookmark"] : styles["article-grid"])}>
      {articles.map((article, index) => {
        const adsIsVisible = adsConfig?.adsInterval ? (index + 1) % adsConfig.adsInterval === 0 : false
        return (
          <Fragment key={article.articleId}>
            <ArticleItemMediumResponsive
              {...article}
              titleVariant="h3"
              articleItemVariant={`${type === "bookmark-myaccount" ? "vertical-bookmark" : "vertical"}`}
              articleImageClassName={`${
                type === "bookmark-myaccount"
                  ? "h-full md:h-[300px] lg:h-[400px] xl:max-h-[231px]"
                  : type === "specialTopics"
                    ? "h-full"
                    : "h-[278px]"
              }`}
              hideCategory={true}
            />
            {adsIsVisible && adsId ? (
              <div className="px-4 lg:col-span-3 my-[30px]">
                <HorizontalAdsWrapper adsID={adsId} />
              </div>
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ArticleGrid
