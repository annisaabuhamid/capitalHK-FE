import { Suspense } from "react"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import VerticalAds from "@/components/advertisement/atoms/VerticalAds"
import SubCategoryList from "@/components/article/widgets/SubCategoryList"
import CategoryHeader from "@/components/category/CategoryHeader"
import CategoryPageHeaderLoading from "@/components/category/CategoryPageHeaderLoading"
import Container from "@/components/common/atom/container/Container"
import CategoryAdsSide from "./CategorySideAds"

type Props = Omit<CategoryPageProps, "articles"> & {
  parentCategory?: CategoryPageProps["category"]
  parentSubCategoryItems?: CategoryPageProps["subCategoriesItems"]
}

function SpecialTopicCategoryLayout({ subCategoriesItems, category }: Props) {
  return (
    <div className="">
      <Container>
        <Suspense fallback={<CategoryPageHeaderLoading />}>
          <CategoryHeader category={category} />
        </Suspense>
        <div className="flex gap-[49.5px] relative mb-[115px] pt-5 lg:pt-2.5">
          {/* sub category list */}
          <div className="flex-grow">
            <SubCategoryList subCategoriesItems={subCategoriesItems} />
          </div>

          <div className="hidden lg:flex sticky top-[60px] h-full flex-col items-center justify-start">
            <div className="mb-[16px]">
              <CategoryAdsSide categoryId={category?.id || ""} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SpecialTopicCategoryLayout
