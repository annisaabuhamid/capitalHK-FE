import { Suspense } from "react"
import { CategoryPageProps } from "@/common/types/categoryTypes"
import { getCategoryAdsById } from "@/common/utils/data/category/getCategoryAdsById"
import VerticalAdsWrapper from "@/components/advertisement/wrappers/VerticalAdsWrapper"
import CategoryPageHeaderLoading from "@/components/category/CategoryPageHeaderLoading"

type Props = Partial<CategoryPageProps> & {}

async function CategoryAdsSide({ categoryId }: Props) {
  const categoryAds = await getCategoryAdsById(categoryId || "")
  const categoryAdsId = categoryAds?.attributes?.ad_banner_side?.data?.id

  if (!categoryAdsId) return <div className="vertical-ads-wrapper">&nbsp;</div>
  return (
    <Suspense fallback={<CategoryPageHeaderLoading />}>
      <VerticalAdsWrapper adsID={categoryAdsId} />
    </Suspense>
  )
}

export default CategoryAdsSide
