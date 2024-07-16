import React from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { BookmarkButtonVariant } from "@/common/types"

type Props = {
  variant?: BookmarkButtonVariant
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  isLoading?: boolean
  type?: string
}

function EditorBookmarkButton({ variant = BookmarkButtonVariant.ADD, buttonProps, isLoading, type }: Props) {
  return (
    <div className="group relative">
      <span>
        <div className={`${isLoading ? "hidden" : ""}`}>
          {variant === BookmarkButtonVariant.ADD && <EditorBookmarkAdd type={type} />}
          {variant === BookmarkButtonVariant.ADDED && <EditorBookmarkAdded type={type} />}
          {variant === BookmarkButtonVariant.LOADING && <LoadingIcon type={type} />}
        </div>
        {isLoading && <LoadingIcon type={type} />}
      </span>
      <span
        {...buttonProps}
        data-prevent-nprogress={true}
        className="w-full h-full absolute top-0 right-0 cursor-pointer"
        style={{ fontSize: 0 }}
      >
        Bookmark
      </span>
    </div>
  )
}

export default EditorBookmarkButton

const LoadingIcon = ({ type }: { type?: string }) => {
  return (
    <div
      className={`w-[65px] h-[30px] px-2 py-1 rounded justify-center items-center gap-1 inline-flex ${
        type === "article" ? "" : "border"
      } `}
    >
      <AiOutlineLoading className="animate-spin w-[17px] h-[17px] text-primary " />
    </div>
  )
}

const EditorBookmarkAdd = ({ type }: { type?: string }) => {
  return (
    <div
      className={`group w-[65px] h-[30px] px-2 py-1 rounded ${
        type === "article" ? "" : "border"
      } justify-end items-center gap-1 inline-flex hover:bg-[#ECECEC] transition-all duration-300`}
    >
      <div className="w-4 h-4 relative lg:transform lg:transition-transform group-hover:rotate-90">
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
    </div>
  )
}

const EditorBookmarkAdded = ({ type }: { type?: string }) => {
  return (
    <div
      className={`w-65 h-30 px-2 py-1 rounded justify-end items-center gap-1 inline-flex ${
        type === "article" ? "" : "border"
      } bg-secondary-200`}
    >
      <div className="text-center whitespace-nowrap text-black text-sm font-normal font-noto leading-snug tracking-wide">
        已追蹤
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          className="ml-1 inline-flex align-middle"
        >
          <path
            d="M1.78789 3.4751C1.91289 3.3501 2.06089 3.2876 2.23189 3.2876C2.40289 3.2876 2.55072 3.3501 2.67539 3.4751L6.33789 7.1376L10.0129 3.4626C10.1296 3.34593 10.2754 3.2876 10.4504 3.2876C10.6254 3.2876 10.7754 3.3501 10.9004 3.4751C11.0254 3.6001 11.0879 3.7481 11.0879 3.9191C11.0879 4.0901 11.0254 4.23793 10.9004 4.3626L6.68789 8.5626C6.63789 8.6126 6.58372 8.6481 6.52539 8.6691C6.46706 8.6901 6.40456 8.70043 6.33789 8.7001C6.27122 8.7001 6.20872 8.6896 6.15039 8.6686C6.09206 8.6476 6.03789 8.61226 5.98789 8.5626L1.77539 4.3501C1.65872 4.23343 1.60039 4.0896 1.60039 3.9186C1.60039 3.7476 1.66289 3.59976 1.78789 3.4751Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}
