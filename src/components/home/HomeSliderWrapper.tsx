import React from "react"
import { getHomePage, HomePageData } from "@/common/utils/data/home/getHomePage"
import HomeSlider from "@/components/home/HomeSlider"

type Props = {}

async function HomeSliderWrapper({}: Props) {
  let homePageData: HomePageData | undefined

  try {
    homePageData = await getHomePage()
  } catch (error) {
    console.error(error)
  }
  return (
    <>
      <HomeSlider homePageData={homePageData} />
    </>
  )
}

export default HomeSliderWrapper
