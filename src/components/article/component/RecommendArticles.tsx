"use client"

import Image from "next/image"
import {
  CategoryRecommendArticlesArgs,
  useArticleListSimpleQuery,
  useCategoriesQuery,
} from "@/common/lib/graphql/generated/graphql"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import ArticleDate from "@/components/article/common/atom/ArticleDate"
import { ArticlePropsOptional } from "@/common/types"
import { getArticlesByCategory } from "@/common/utils/data/article/getArticlesByCategory"
import Link from "next/link"

type Props = ArticlePropsOptional & {
  className?: string
  name?: string
}
interface StringFilterInput {
  contains: string
}

const RecommendArticles = ({ categoryLabel }: Props) => {
  const { data } = useCategoriesQuery({
    variables: {
      filters: { name: { eq: categoryLabel } },
      pagination: { limit: 2 },
    },
  })
  let articles = data?.categories?.data[0].attributes?.recommendArticles?.data
  if (!articles || articles.length === 0) {
    return null
  }
  return (
    <div className="flex lg:ml-[10.5%]">
      <div className="invisible lg:w-[92px]">
      </div>
      <div className=" w-full max-w-full pt-4 lg:mx-0 lg:max-w-[593px] xl:max-w-[728px] flex-1">
        <div className="mt-9">
          <p className="text-[#E02C2C] pb-4 text-[17px] font-semibold">為您推薦</p>
          <div className="flex-wrap gap-6 grid sm:grid-cols-2 mb-6">
            {articles?.slice(0, 2).map((article, index) => (
              <div className="" key={index}>
                <div>
                  <Link href={article.attributes?.slug ?? ""}>
                    <Image
                      className="aspect-[3/2]"
                      src={article.attributes?.keyVisualHorizontal?.data?.attributes?.url ?? ""}
                      width={article.attributes?.keyVisualHorizontal?.data?.attributes?.width ?? undefined}
                      height={article.attributes?.keyVisualHorizontal?.data?.attributes?.height ?? undefined}
                      alt={
                        article.attributes?.keyVisualHorizontal?.data?.attributes?.alternativeText ||
                        "alt not available"
                      }
                    />
                  </Link>
                </div>
                <div className="flex text-[#343434] w-full items-center font-bold py-[6px]">
                  <div className="pr-1">商事動態</div>
                  <span className="pr-1">|</span>
                  <div className="flex">
                    <span className="flex justify-center items-center">
                      <ArticleDate date={article.attributes?.publishedAt} />
                    </span>
                  </div>
                  <div className="ml-auto flex justify-end items-center">
                    <ArticleBookmarkButton articleId={article.id} />
                  </div>
                </div>
                <Link href={article.attributes?.slug ?? ""}>
                  <div className="font-medium text-[20px] line-clamp-2">{article.attributes?.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="justify-self-end pt-8 invisible flex-0">
        <div className="w-0 lg:w-[312px]"></div>
      </div>
    </div>
  )
}

export default RecommendArticles
