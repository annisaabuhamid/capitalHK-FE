"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Maybe, TagRelationResponseCollection } from "@/common/lib/graphql/generated/graphql"

type Props = { tags: Maybe<TagRelationResponseCollection>; isSidebar?: boolean }

function Search({ tags, isSidebar = false }: Props) {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  let tagsData = tags?.data
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if the search overlay should be shown on page reload
    const shouldShowOverlay = sessionStorage.getItem("showSearchOverlay")
    if (shouldShowOverlay === "true") {
      setShowSearchOverlay(true)
      document.body.style.overflow = "hidden"
    }
  }, [])

  const openSearch = () => {
    setShowSearchOverlay(true)
    if (overlayRef.current) {
      overlayRef.current.style.left = "0"
      overlayRef.current.style.height = "100%"
      overlayRef.current.style.width = "100%"
    }
    document.body.style.overflow = "hidden"
  }

  const closeSearch = () => {
    setShowSearchOverlay(false)
    if (overlayRef.current) {
      overlayRef.current.style.left = "-100%"
    }
    document.body.style.overflow = "initial"
  }

  const handleSearch = (event: any) => {
    setSearchQuery(event?.target?.value)
  }

  const clearInput = () => {
    setSearchQuery("")
  }

  const handleSubmit = (event: { key?: string; preventDefault?: any }) => {
    event.preventDefault()
    router.push(`/search-result?keyword=${searchQuery}`)
    closeSearch()
  }

  const handleSearchKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSubmit(event)
    }
  }

  if (!isSidebar) {
    return (
      <>
        <div className="search-icon cursor-pointer hover:text-primary-900 rounded-full" onClick={openSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          ref={overlayRef}
          className={`fixed top-0 z-30 overflow-x-hidden bg-white transform duration-500 ${
            showSearchOverlay ? "w-full h-full left-0" : "w-0 h-full left-[-350%]"
          }`}
        >
          <div
            className="absolute w-4 h-4 right-4 top-4 lg:right-14 lg:top-[45px] text-center hover:cursor-pointer z-10"
            onClick={closeSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6967 1.76621C15.7928 1.67026 15.869 1.55632 15.921 1.4309C15.9731 1.30548 15.9999 1.17104 16 1.03526C16.0001 0.899474 15.9734 0.765002 15.9215 0.639521C15.8697 0.514039 15.7936 0.400006 15.6976 0.303933C15.6017 0.207859 15.4877 0.131626 15.3623 0.0795864C15.2369 0.0275465 15.1024 0.000719014 14.9667 0.000635556C14.8309 0.000552099 14.6964 0.0272143 14.5709 0.0791C14.4455 0.130986 14.3314 0.207078 14.2354 0.303034L7.99987 6.53862L1.76618 0.303034C1.57216 0.109004 1.309 -2.04443e-09 1.03461 0C0.760212 2.04443e-09 0.497055 0.109004 0.303029 0.303034C0.109003 0.497063 2.0444e-09 0.760224 0 1.03462C-2.0444e-09 1.30902 0.109003 1.57218 0.303029 1.76621L6.53851 8L0.303029 14.2338C0.206957 14.3299 0.130748 14.4439 0.0787546 14.5694C0.0267607 14.695 0 14.8295 0 14.9654C0 15.1012 0.0267607 15.2358 0.0787546 15.3613C0.130748 15.4868 0.206957 15.6009 0.303029 15.697C0.497055 15.891 0.760212 16 1.03461 16C1.17047 16 1.30501 15.9732 1.43053 15.9212C1.55606 15.8692 1.67011 15.793 1.76618 15.697L7.99987 9.46138L14.2354 15.697C14.4294 15.8908 14.6924 15.9995 14.9667 15.9994C15.2409 15.9992 15.5038 15.8901 15.6976 15.6961C15.8914 15.502 16.0002 15.239 16 14.9647C15.9998 14.6905 15.8907 14.4276 15.6967 14.2338L9.46122 8L15.6967 1.76621Z"
                fill="#1E1E1E"
              />
            </svg>
          </div>
          <div className="relative w-[100%] sm:max-w-[100%] mt-[20%] md:mt-[10%] flex flex-col justify-center items-center">
            <div className="h1 text-primary-900 mb-12">搜尋</div>
            <div className="max-w-[728px] self-center mx-auto">
              <form onSubmit={handleSubmit} className="w-full mx-auto lg:w-[728px]">
                <div className="relative items-center w-full max-w-[90%] mx-auto md:max-w-[728px] text-black">
                  {!searchQuery && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                          d="M23.15 24.8L17.55 19.2C17.05 19.6 16.475 19.9167 15.825 20.15C15.175 20.3833 14.4833 20.5 13.75 20.5C11.9333 20.5 10.396 19.871 9.138 18.613C7.87933 17.3543 7.25 15.8167 7.25 14C7.25 12.1833 7.87933 10.6457 9.138 9.387C10.396 8.129 11.9333 7.5 13.75 7.5C15.5667 7.5 17.1043 8.129 18.363 9.387C19.621 10.6457 20.25 12.1833 20.25 14C20.25 14.7333 20.1333 15.425 19.9 16.075C19.6667 16.725 19.35 17.3 18.95 17.8L24.575 23.425C24.7583 23.6083 24.85 23.8333 24.85 24.1C24.85 24.3667 24.75 24.6 24.55 24.8C24.3667 24.9833 24.1333 25.075 23.85 25.075C23.5667 25.075 23.3333 24.9833 23.15 24.8ZM13.75 18.5C15 18.5 16.0627 18.0627 16.938 17.188C17.8127 16.3127 18.25 15.25 18.25 14C18.25 12.75 17.8127 11.6873 16.938 10.812C16.0627 9.93733 15 9.5 13.75 9.5C12.5 9.5 11.4373 9.93733 10.562 10.812C9.68733 11.6873 9.25 12.75 9.25 14C9.25 15.25 9.68733 16.3127 10.562 17.188C11.4373 18.0627 12.5 18.5 13.75 18.5Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  )}
                  <input
                    type="text"
                    name="name"
                    value={searchQuery}
                    autoComplete="off"
                    onChange={handleSearch}
                    onKeyDown={handleSearchKeyPress}
                    placeholder="請輸入關鍵字"
                    className="w-full border-b-[1px] rounded-none border-black bg-transparent pb-2 leading-[27px] text-secondary-400 text-center text-[17px] placeholder-tertiary-600 outline-none"
                  ></input>
                  {searchQuery && (
                    <span
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={clearInput}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.6967 1.76621C15.7928 1.67026 15.869 1.55632 15.921 1.4309C15.9731 1.30548 15.9999 1.17104 16 1.03526C16.0001 0.899474 15.9734 0.765002 15.9215 0.639521C15.8697 0.514039 15.7936 0.400006 15.6976 0.303933C15.6017 0.207859 15.4877 0.131626 15.3623 0.0795864C15.2369 0.0275465 15.1024 0.000719014 14.9667 0.000635556C14.8309 0.000552099 14.6964 0.0272143 14.5709 0.0791C14.4455 0.130986 14.3314 0.207078 14.2354 0.303034L7.99987 6.53862L1.76618 0.303034C1.57216 0.109004 1.309 -2.04443e-09 1.03461 0C0.760212 2.04443e-09 0.497055 0.109004 0.303029 0.303034C0.109003 0.497063 2.0444e-09 0.760224 0 1.03462C-2.0444e-09 1.30902 0.109003 1.57218 0.303029 1.76621L6.53851 8L0.303029 14.2338C0.206957 14.3299 0.130748 14.4439 0.0787546 14.5694C0.0267607 14.695 0 14.8295 0 14.9654C0 15.1012 0.0267607 15.2358 0.0787546 15.3613C0.130748 15.4868 0.206957 15.6009 0.303029 15.697C0.497055 15.891 0.760212 16 1.03461 16C1.17047 16 1.30501 15.9732 1.43053 15.9212C1.55606 15.8692 1.67011 15.793 1.76618 15.697L7.99987 9.46138L14.2354 15.697C14.4294 15.8908 14.6924 15.9995 14.9667 15.9994C15.2409 15.9992 15.5038 15.8901 15.6976 15.6961C15.8914 15.502 16.0002 15.239 16 14.9647C15.9998 14.6905 15.8907 14.4276 15.6967 14.2338L9.46122 8L15.6967 1.76621Z"
                          fill="#1E1E1E"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </form>

              <div className="text-center pt-8 flex gap-2 flex-wrap justify-center max-w-[90%] mx-auto">
                {tagsData &&
                  tagsData.map((tag, index) => (
                    <Link
                      href={`/tag/${tag.attributes?.slug || undefined}`}
                      key={index}
                      className="border-[#C6C1C1] border py-1 px-4 rounded"
                      onClick={closeSearch}
                    >
                      <span className="text-[#343434]" aria-label="Close">
                        {tag.attributes?.name}{" "}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="max-w-full self-center pt-5">
        <form onSubmit={handleSubmit}>
          <div className="relative items-center w-full max-w-full mx-auto bg-secondary-100 ">
            {!searchQuery && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
            <input
              type="text"
              name="name"
              value={searchQuery}
              autoComplete="off"
              onChange={handleSearch}
              placeholder="搜尋..."
              className="w-full leading-[27px] text-[#757575] bg-secondary-100 text-left text-lg placeholder-tertiary-600 outline-none py-[10px] px-4"
            ></input>
            {searchQuery && (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={clearInput}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.6967 1.76621C15.7928 1.67026 15.869 1.55632 15.921 1.4309C15.9731 1.30548 15.9999 1.17104 16 1.03526C16.0001 0.899474 15.9734 0.765002 15.9215 0.639521C15.8697 0.514039 15.7936 0.400006 15.6976 0.303933C15.6017 0.207859 15.4877 0.131626 15.3623 0.0795864C15.2369 0.0275465 15.1024 0.000719014 14.9667 0.000635556C14.8309 0.000552099 14.6964 0.0272143 14.5709 0.0791C14.4455 0.130986 14.3314 0.207078 14.2354 0.303034L7.99987 6.53862L1.76618 0.303034C1.57216 0.109004 1.309 -2.04443e-09 1.03461 0C0.760212 2.04443e-09 0.497055 0.109004 0.303029 0.303034C0.109003 0.497063 2.0444e-09 0.760224 0 1.03462C-2.0444e-09 1.30902 0.109003 1.57218 0.303029 1.76621L6.53851 8L0.303029 14.2338C0.206957 14.3299 0.130748 14.4439 0.0787546 14.5694C0.0267607 14.695 0 14.8295 0 14.9654C0 15.1012 0.0267607 15.2358 0.0787546 15.3613C0.130748 15.4868 0.206957 15.6009 0.303029 15.697C0.497055 15.891 0.760212 16 1.03461 16C1.17047 16 1.30501 15.9732 1.43053 15.9212C1.55606 15.8692 1.67011 15.793 1.76618 15.697L7.99987 9.46138L14.2354 15.697C14.4294 15.8908 14.6924 15.9995 14.9667 15.9994C15.2409 15.9992 15.5038 15.8901 15.6976 15.6961C15.8914 15.502 16.0002 15.239 16 14.9647C15.9998 14.6905 15.8907 14.4276 15.6967 14.2338L9.46122 8L15.6967 1.76621Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </span>
            )}
          </div>
        </form>
        <div className="text-center pt-3 flex gap-2 flex-wrap justify-start">
          {tagsData &&
            tagsData.map((tag, index) => (
              <Link
                href={`/tag/${tag.attributes?.slug || undefined}`}
                key={index}
                className="border-[#C6C1C1] border py-1 px-3 rounded"
                onClick={closeSearch}
              >
                <span className="text-[#343434] text-xs leading-[18px] flex" aria-label="Close">
                  {tag.attributes?.name}{" "}
                </span>
              </Link>
            ))}
        </div>
      </div>
    )
  }
}

export default Search
