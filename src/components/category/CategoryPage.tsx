import { Suspense } from "react"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import { getCategoryPinArticleById } from "@/common/utils/data/category/getCategoryById"
import EditorPicksUnderAds from "@/components/article/common/organisms/EditorPicksUnderAds"
import ArticleSpotlightListWrapper from "@/components/article/widgets/ArticleSpotlightListWrapper"
import ArticleSpotlightListWrapperLoading from "@/components/article/widgets/ArticleSpotlightListWrapperLoading"
import PinArticleSpotlightListWrapper from "@/components/article/widgets/PinArticleSpotlightListWrapper"
import CategoryHeader from "@/components/category/CategoryHeader"
import CategoryPageHeaderLoading from "@/components/category/CategoryPageHeaderLoading"
import CategoryAdsSide from "@/components/category/CategorySideAds"
import Container from "@/components/common/atom/container/Container"

type Props = CategoryPageProps

async function CategoryPage({ category, categoryId }: Props) {
  const pinArticle = await getCategoryPinArticleById(categoryId || "")
  const pinArticleId = pinArticle?.data?.id || ""

  return (
    <Container>
      <Suspense fallback={<CategoryPageHeaderLoading />}>
        <CategoryHeader category={category} />
      </Suspense>
      <div className="flex gap-[49.5px] relative mb-[115px]">
        {/* article list */}
        <div className="flex-grow">
          {pinArticle == null ? (
            <Suspense fallback={<ArticleSpotlightListWrapperLoading />}>
              <ArticleSpotlightListWrapper categoryId={category?.id || ""} />
            </Suspense>
          ) : (
            <Suspense fallback={<ArticleSpotlightListWrapperLoading />}>
              <PinArticleSpotlightListWrapper
                categoryId={category?.id || ""}
                pinArticle={pinArticle}
                pinArticleId={pinArticleId}
              />
              {/* <ArticleSpotlightListWrapper categoryId={category?.id || ""} /> */}
            </Suspense>
          )}
          {/* <ArticleSpotlightList articles={articles ?? []} articleItemVariant="vertical" /> */}
        </div>

        <div className="hidden lg:flex sticky top-[60px] h-full flex-col items-center justify-start">
          <div className="mb-[16px]">
            <CategoryAdsSide categoryId={category?.id || ""} />
          </div>
          <Suspense fallback={<div />}>
            <EditorPicksUnderAds category={category} />
          </Suspense>
        </div>
      </div>
    </Container>
  )
}

export default CategoryPage
