import { Suspense } from "react"
import { BloggersCategoryLayoutProps } from "@/common/types/bloggerTypes"
import VerticalAds from "@/components/advertisement/atoms/VerticalAds"
import ArticleSpotlightListWrapperLoading from "@/components/article/widgets/ArticleSpotlightListWrapperLoading"
import AllBloggersHeader from "@/components/blogger/AllBloggersHeader"
import BloggerAvatarList from "@/components/blogger/BloggerAvatarList"
import BloggersCategoryLayoutArticleListWrapper from "@/components/blogger/BloggersCategoryLayoutArticleListWrapper"
import Container from "@/components/common/atom/container/Container"
import EditorPicksUnderAds from "../article/common/organisms/EditorPicksUnderAds"
import CategoryAdsSide from "../category/CategorySideAds"

type Props = BloggersCategoryLayoutProps

function BloggersCategoryLayout({ allBloggers, category }: Props) {
  
  return (
    <div className="">
      <Container>
        <AllBloggersHeader label={category?.attributes?.name ?? "名家觀點"} />

        <div className="flex w-full relative max-[1346px] mb-[115px]">
          <div>
            {allBloggers.length > 0 && <BloggerAvatarList allBloggers={allBloggers} />}

            {/* article list */}
            <Suspense fallback={<ArticleSpotlightListWrapperLoading />}>
              <BloggersCategoryLayoutArticleListWrapper categoryId={category?.id || ""} />
            </Suspense>
          </div>

          <div className="hidden lg:flex sticky top-[60px] h-full flex-col items-center justify-start ml-auto">
            <div className="mb-[16px]">
              <CategoryAdsSide categoryId={category?.id || ""} />
            </div>
            <Suspense fallback={<div />}>
              <EditorPicksUnderAds category={category} />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BloggersCategoryLayout
