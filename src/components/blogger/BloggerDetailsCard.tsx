import Link from "next/link"
import EditorBookmarkButtonWrapper from "@/components/common/molecule/button/editor/EditorBookmarkButtonWrapper"
import ReadMoreButton from "@/components/common/molecule/button/ReadMoreButton"
import ImageContainer from "@/components/image/ImageContainer"

type Props = {
  image?: string
  name?: string
  description?: string
  id?: string
}

function BloggerDetailsCard({ image, name, description, id }: Props) {
  const readMoreHref = `/blogger`

  return (
    <div className="blogger-details-card">
      <div className="blogger-details">
        <ImageContainer className="blogger-image" src={image} alt="blogger avatar" fetchPriority="high" />
        <div>
          <div className="inline-flex gap-4">
            <div className="h3 !font-medium blogger-name">{name}</div>
            <EditorBookmarkButtonWrapper editorId={id} />
            {/* <div className="w-[65px] h-[30px] px-2 py-1 rounded justify-end items-center gap-1 inline-flex border">
              <div className="w-4 h-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12.6673 8.66536H8.66732V12.6654H7.33398V8.66536H3.33398V7.33203H7.33398V3.33203H8.66732V7.33203H12.6673V8.66536Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="text-center whitespace-nowrap text-black text-sm font-normal font-noto leading-snug tracking-wide">
                追蹤
              </div>
            </div> */}
          </div>
          <p className="blogger-description py-3 leading-6">{description}</p>
          <div className="md:hidden">
            <Link href={readMoreHref}>
              <ReadMoreButton>
                <span className="h5 !font-medium">更多博客</span>
              </ReadMoreButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="read-more hidden md:block">
        <Link href={readMoreHref}>
          <ReadMoreButton>
            <span className="h5 !font-medium">更多博客</span>
          </ReadMoreButton>
        </Link>
      </div>
    </div>
  )
}

export default BloggerDetailsCard
