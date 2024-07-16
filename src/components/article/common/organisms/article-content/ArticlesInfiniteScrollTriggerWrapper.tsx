import { ReactNode, useState } from "react"
import ReadMoreFullWidthButton from "@/components/common/molecule/button/ReadMoreFullWidthButton"
import styles from "./ArticlesInfiniteScrollTriggerWrapper.module.css"
type Props = {
  children: ReactNode
}

function ArticlesInfiniteScrollTriggerWrapper({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="my-9">
      <div className={isExpanded ? "" : styles["articles-infinite-scroll-trigger-wrapper"]}>{children}</div>
      <div className="flex lg:ml-[10.5%]">
        <div className="invisible">
          <div className="w-0 lg:w-[92px]"></div>
        </div>
        <div className="w-full max-w-full pt-4 lg:mx-0 lg:max-w-[593px] xl:max-w-[728px] flex-1">
          <ReadMoreFullWidthButton onClick={toggleIsExpanded}>
            {isExpanded ? "收合" : "閱讀文章"}
          </ReadMoreFullWidthButton>
        </div>
        <div className="justify-self-end pt-8 invisible flex-0">
          <div className="lg:w-[312px]"></div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesInfiniteScrollTriggerWrapper
