import { HomeExpertReviewArticle } from "@/common/types/homeTypes"
import { getHomeExperReviews } from "@/common/utils/data/home/getHomeExpertReview"
import { getHomePageUrl } from "@/common/utils/data/home/getHomePage"
import HomeExpertReviewSlider from "@/components/expert-review/HomeExpertReviewSlider"

type Props = {}

async function HomeExpertReviewSliderWrapper({}: Props) {
  const expertReviewArticles = await getHomeExperReviews()
  const exportReviewUrl = (await getHomePageUrl()) || ""

  const transformedArticles = expertReviewArticles.map((article) => {
    const editor = article.editor?.data?.attributes
    const newArticle: HomeExpertReviewArticle = {
      author: editor?.name ?? "",
      authorDescription: editor?.biography ?? "",
      image: (editor?.avatar.data?.attributes?.formats?.xsmall.url || editor?.avatar.data?.attributes?.url) ?? "",
      title: article.title ?? "",
      articleSlug: article.slug ?? "",
      categories: article.categories,
      editor: article.editor,
    }
    return newArticle
  })

  return <HomeExpertReviewSlider articles={transformedArticles} url={exportReviewUrl} />
}

export default HomeExpertReviewSliderWrapper
