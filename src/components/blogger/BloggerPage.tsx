import { BloggerPageProps } from "@/common/types/bloggerTypes"
import VerticalAds from "@/components/advertisement/atoms/VerticalAds"
import ArticleBlogInfiniteScroll from "@/components/article/common/organisms/list/ArticleBlogInfiniteScroll"
import { BloggerArticleList } from "@/components/blogger/BloggerArticleList"
import BloggerDetailsCard from "@/components/blogger/BloggerDetailsCard"
import Container from "@/components/common/atom/container/Container"

function BloggerPage({ blogger, bloggerArticles, numberOfArticles }: BloggerPageProps) {
  const { avatarUrl, biography, id, name, slug, title } = blogger
  const initialBloggerArticle = bloggerArticles

  // const numberOfArticles = initialBloggerArticle.length

  return (
    <div className="">
      <Container>
        {/* <AllBloggersHeader label="名家" /> */}

        <div className="flex relative mb-[115px] pt-6 lg:pt-[49px]">
          <div className="flex-grow">
            <BloggerDetailsCard description={biography ?? ""} id={id?.toString()} image={avatarUrl} name={name} />
            <div className="h5 font-normal pb-3 border-b border-secondary-200 lg:border-none lg:pb-4">
              關於{name}顯示{numberOfArticles}篇相關的文章。
            </div>
            {/* article list */}
            <div className="article-spotlight-list grid lg:grid-cols-12 gap-12 flex-grow">
              <div className="article-spotlight-list-btm lg:col-span-12 ">
                <BloggerArticleList articles={initialBloggerArticle} />
                <ArticleBlogInfiniteScroll editorId={id} articles={initialBloggerArticle} />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex sticky top-[60px] h-full flex-col items-center justify-start">
            <div className="mb-4">
              <VerticalAds />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BloggerPage
