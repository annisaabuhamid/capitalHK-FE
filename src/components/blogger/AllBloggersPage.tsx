import { AllBloggersPageProps } from "@/common/types/bloggerTypes"
import AllBloggersHeader from "@/components/blogger/AllBloggersHeader"
import BloggersGrid from "@/components/blogger/BloggersGrid"
import Container from "@/components/common/atom/container/Container"

type Props = AllBloggersPageProps

function AllBloggersPage({ allBloggers }: Props) {
  return (
    <div className="">
      <Container>
        <AllBloggersHeader label={"博客"} />

        <BloggersGrid allBloggers={allBloggers} />

        {/* <div className="flex gap-[49.5px] relative mb-[115px]">
          <div className="list"></div>

          <div className="hidden lg:flex sticky top-[60px] h-[906px] flex-col items-center justify-start">
            <div className="mb-[16px]">
              <VerticalAds />
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  )
}

export default AllBloggersPage
