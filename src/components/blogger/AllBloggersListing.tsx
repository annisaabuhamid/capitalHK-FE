"use client"
import Link from "next/link"
import { useEditorListingQuery } from "@/common/lib/graphql/generated/graphql"
import AllBloggersHeader from "@/components/blogger/AllBloggersHeader"
import Container from "@/components/common/atom/container/Container"
import EditorBookmarkButtonWrapper from "@/components/common/molecule/button/editor/EditorBookmarkButtonWrapper"
import ImageContainer from "@/components/image/ImageContainer"
import styles from "./BloggerCard.module.css"

function AllBloggersListing() {
  const { data } = useEditorListingQuery() // why don't pass data from server component?
  const editors = data?.editorListing?.data?.attributes?.editors?.data

  return (
    <Container>
      <AllBloggersHeader label={"博客"} />
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-x-[15px] gap-y-6 md:gap-x-[48px] md:gap-y-[36px]">
        {editors?.map((editor) => (
          <div className={styles["blogger-card"]} key={editor.id}>
            <Link href={`/blogger/${editor.id ?? ""}`}>
              <div className="flex flex-col items-center lg:items-start lg:flex-row gap-3 md:gap-6 md:p-6">
                <ImageContainer
                  src={
                    editor.attributes?.avatar.data?.attributes?.formats?.small?.url ??
                    editor.attributes?.avatar.data?.attributes?.url
                  }
                  alt={editor.attributes?.avatar.data?.attributes?.alternativeText || "alt not available"}
                  className={styles["blogger-card-image"]}
                />

                <div className="grid gap-4 md:gap-2 item-center ">
                  <div className="flex flex-col lg:flex-row items-center gap-3">
                    <div className={`h5 flex justify-center items-center ${styles["blogger-name"]}`}>
                      {editor.attributes?.name}
                    </div>
                    <EditorBookmarkButtonWrapper editorId={editor.id} />

                    {/* <div className="w-16 h-[30px] px-2 py-1 rounded border border-gray-200 self-center lg:self-auto justify-end items-center gap-1 inline-flex">
                      <div className="w-4 h-4 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path
                            d="M12.9168 8.66536H8.91683V12.6654H7.5835V8.66536H3.5835V7.33203H7.5835V3.33203H8.91683V7.33203H12.9168V8.66536Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="text-center text-stone-900 text-sm font-normal font-noto leading-snug flex-none ">
                        追蹤
                      </div>
                    </div> */}
                  </div>
                  <div className="text-[#747474] text-center lg:text-justify h5">{editor.attributes?.biography}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default AllBloggersListing
