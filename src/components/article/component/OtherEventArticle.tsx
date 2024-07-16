"use client"

import Image from "next/image"
import { ArticlePropsOptional } from "@/common/types"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import Link from "next/link"

type Props = ArticlePropsOptional & {}

const OtherEventArticle = ({ otherEventArticles }: Props) => {
  let articles = otherEventArticles?.data
  if (!articles || articles.length === 0) {
    return null;
  }
  return (
    <div className="mt-9">
      <p className="text-[#E02C2C] pb-4 text-[17px] font-semibold">其他典禮</p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:max-w-[728px]"> */}
      {articles?.map((article) => (
        <div key={article.id} className="w-full  py-4 border-t border-b border-gray-200 flex items-start">
          <div>
          <Link href={article.attributes?.slug ??""}>
          <Image
            className="max-w-[140px] h-[93.33px] "
            src={article.attributes?.keyVisualHorizontal?.data?.attributes?.url ?? ""}
            width={article.attributes?.keyVisualHorizontal?.data?.attributes?.width ?? undefined}
            height={article.attributes?.keyVisualHorizontal?.data?.attributes?.height ?? undefined}
            alt={article.attributes?.keyVisualHorizontal?.data?.attributes?.alternativeText || "alt not available"}
          />
          </Link>
          </div>
          <div className="ml-5 flex-grow py-1 flex-col justify-center items-start gap-1 inline-flex">
            <div className="h-[53px] flex-col justify-start items-start flex">
              <div className="self-stretch flex gap-1 h-[26px]">
                <span className="text-stone-900 text-xs font-bold font-noto leading-relaxed">
                  本港時事 |
                </span>
                <span className="text-stone-900 text-xs font-noto leading-relaxed">
                  <ArticleDate date={article.attributes?.publishedAt} />
                </span>
              </div>
              <Link href={article.attributes?.slug ??""}>
              <div className=" flex-col justify-start items-start gap-3 flex">
                <div className="w-full font-medium text-[20px] line-clamp-2">{article.attributes?.title}</div>
              </div>
              </Link>
            </div>
          </div>
          <ArticleBookmarkButton articleId={article.id} />
        </div>
      ))}
    </div>
  )
}

export default OtherEventArticle
