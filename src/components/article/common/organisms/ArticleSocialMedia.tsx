"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArticleBookmarkButtonIconType, OptionalString } from "@/common/types"
import ArticleBookmarkButton from "@/components/article/common/atom/ArticleBookmarkButton"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = { finalHref: string; articleId: OptionalString }

function ArticleSocialMedia({ finalHref, articleId }: Props) {
  const [websiteURL, setWebsiteURL] = useState("")
  const [copySuccess, setCopySuccess] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.origin
      setWebsiteURL(`${host}${finalHref}`)
    }
  }, [finalHref])

  async function copyToClip() {
    const asPath = window.location.pathname
    const host = window.location.host
    const baseUrl = `https://${host}`

    await navigator.clipboard.writeText(`${baseUrl}/${asPath}`)
    setCopySuccess(false)

    setTimeout(() => {
      setCopySuccess(true)
    }, 1000)
  }
  const [scrollPosition, setScrollPosition] = useState(0)
  const [show, setShow] = useState(false)
  // let prevScrollPos = 0;
  const wrapperRef = useRef<HTMLDivElement>(null)

  const wrapperIsAtViewportTop = wrapperRef.current?.getBoundingClientRect().top ?? 0
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.origin
      setWebsiteURL(`${host}${finalHref}`)

      const handleScroll = () => {
        const currentPosition = window.scrollY
        if (currentPosition > prevScrollPos) {
          setScrollDirection("down")
        } else {
          setScrollDirection("up")
        }

        // if (scrollDirection === "down" && currentPosition > wrapperIsAtViewportTop + 100) {
        //   setShow(true)
        // } else {
        //   setShow(false)
        // }

        setPrevScrollPos(currentPosition)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [finalHref, scrollPosition, prevScrollPos])

  return (
    <div ref={wrapperRef} className={`sticky flex flex-col gap-2 mr-8 p-[10px] top-16`}>
      <Link target="_blank" href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(websiteURL)}`}>
        <div className="w-10 h-10 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
          <div className="w-6 h-6 flex justify-center items-center hover:text-inherit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              className="w-full h-full"
            >
              <path
                d="M19.1673 18.1585H22.5007L23.834 12.8252H19.1673V10.1585C19.1673 8.7852 19.1673 7.49186 21.834 7.49186H23.834V3.01186C23.3993 2.95453 21.758 2.8252 20.0247 2.8252C16.4047 2.8252 13.834 5.03453 13.834 9.09186V12.8252H9.83398V18.1585H13.834V29.4919H19.1673V18.1585Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </Link>
      <Link
        target="_blank"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteURL)}`}
        // onClick={() => updateRouter()}
      >
        <div className="w-10 h-10 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
          <div className="w-6 h-6 flex justify-center items-center hover:text-inherit">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
              <path
                d="M9.75326 6.82523C9.7529 7.53247 9.47161 8.21061 8.97126 8.71045C8.47092 9.2103 7.7925 9.49091 7.08526 9.49056C6.37801 9.49021 5.69987 9.20892 5.20003 8.70857C4.70018 8.20822 4.41957 7.5298 4.41992 6.82256C4.42028 6.11532 4.70157 5.43718 5.20191 4.93733C5.70226 4.43749 6.38068 4.15687 7.08792 4.15723C7.79517 4.15758 8.4733 4.43887 8.97315 4.93922C9.473 5.43957 9.75361 6.11798 9.75326 6.82523ZM9.83326 11.4652H4.49992V28.1586H9.83326V11.4652ZM18.2599 11.4652H12.9533V28.1586H18.2066V19.3986C18.2066 14.5186 24.5666 14.0652 24.5666 19.3986V28.1586H29.8333V17.5852C29.8333 9.35856 20.4199 9.66523 18.2066 13.7052L18.2599 11.4652Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </Link>
      <button onClick={copyToClip} aria-label="Copy link">
        <div className="w-10 h-10 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer text-black hover:text-white">
          <div className="w-6 h-6 flex justify-center items-center hover:text-inherit">
            <span className={`${copySuccess ? "" : "hidden"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  d="M11.09 13.41C11.5 13.8 11.5 14.44 11.09 14.83C10.7 15.22 10.06 15.22 9.67002 14.83C8.73339 13.892 8.20732 12.6206 8.20732 11.295C8.20732 9.96944 8.73339 8.69804 9.67002 7.76002L13.21 4.22002C14.148 3.28339 15.4194 2.75732 16.745 2.75732C18.0706 2.75732 19.342 3.28339 20.28 4.22002C21.2166 5.15804 21.7427 6.42944 21.7427 7.75502C21.7427 9.08059 21.2166 10.352 20.28 11.29L18.79 12.78C18.8 11.96 18.67 11.14 18.39 10.36L18.86 9.88002C19.1404 9.6027 19.3629 9.27254 19.5148 8.90865C19.6667 8.54475 19.7449 8.15434 19.7449 7.76002C19.7449 7.36569 19.6667 6.97528 19.5148 6.61139C19.3629 6.24749 19.1404 5.91733 18.86 5.64002C18.5827 5.35968 18.2525 5.13712 17.8886 4.98524C17.5247 4.83335 17.1343 4.75514 16.74 4.75514C16.3457 4.75514 15.9553 4.83335 15.5914 4.98524C15.2275 5.13712 14.8973 5.35968 14.62 5.64002L11.09 9.17002C10.8097 9.44733 10.5871 9.77749 10.4352 10.1414C10.2833 10.5053 10.2051 10.8957 10.2051 11.29C10.2051 11.6843 10.2833 12.0747 10.4352 12.4386C10.5871 12.8025 10.8097 13.1327 11.09 13.41ZM13.91 9.17002C14.3 8.78002 14.94 8.78002 15.33 9.17002C16.2666 10.108 16.7927 11.3794 16.7927 12.705C16.7927 14.0306 16.2666 15.302 15.33 16.24L11.79 19.78C10.852 20.7166 9.58059 21.2427 8.25502 21.2427C6.92944 21.2427 5.65804 20.7166 4.72002 19.78C3.78339 18.842 3.25732 17.5706 3.25732 16.245C3.25732 14.9194 3.78339 13.648 4.72002 12.71L6.21002 11.22C6.20002 12.04 6.33002 12.86 6.61002 13.65L6.14002 14.12C5.85968 14.3973 5.63712 14.7275 5.48524 15.0914C5.33335 15.4553 5.25514 15.8457 5.25514 16.24C5.25514 16.6343 5.33335 17.0247 5.48524 17.3886C5.63712 17.7525 5.85968 18.0827 6.14002 18.36C6.41733 18.6404 6.74749 18.8629 7.11139 19.0148C7.47528 19.1667 7.86569 19.2449 8.26002 19.2449C8.65434 19.2449 9.04475 19.1667 9.40865 19.0148C9.77254 18.8629 10.1027 18.6404 10.38 18.36L13.91 14.83C14.1904 14.5527 14.4129 14.2225 14.5648 13.8586C14.7167 13.4947 14.7949 13.1043 14.7949 12.71C14.7949 12.3157 14.7167 11.9253 14.5648 11.5614C14.4129 11.1975 14.1904 10.8673 13.91 10.59C13.8129 10.499 13.7355 10.389 13.6826 10.2669C13.6296 10.1448 13.6023 10.0131 13.6023 9.88002C13.6023 9.74692 13.6296 9.61523 13.6826 9.49311C13.7355 9.37099 13.8129 9.26102 13.91 9.17002Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className={`${copySuccess ? "hidden" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </span>
          </div>
        </div>
      </button>
      {/* bookmark */}

      <ArticleBookmarkButton articleId={articleId} iconType={ArticleBookmarkButtonIconType.LARGE} />
    </div>
  )
}

export default ArticleSocialMedia
