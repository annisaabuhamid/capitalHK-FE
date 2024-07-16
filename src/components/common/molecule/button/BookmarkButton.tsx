import React, { useState } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { ArticleBookmarkButtonIconType, BookmarkButtonVariant } from "@/common/types"
import { BookmarkAddedIcon } from "../../atom/button/BookmarkAddedIcon"
import { BookmarkAddIcon } from "../../atom/button/BookmarkAddIcon"

type Props = {
  variant?: BookmarkButtonVariant
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  isLoading?: boolean
  iconType?: ArticleBookmarkButtonIconType
}

function BookmarkButton({
  variant = BookmarkButtonVariant.ADD,
  buttonProps,
  isLoading,
  iconType = ArticleBookmarkButtonIconType.GENERIC,
}: Props) {
  if (iconType === ArticleBookmarkButtonIconType.LARGE) {
    return (
      <button type="button" {...buttonProps} className="group" data-prevent-nprogress={true}>
        <div className="w-10 h-10 rounded-full text-primary-900 bg-gray-200 p-2 hover:bg-primary-900 transition duration-300 cursor-pointer hover:text-white">
          <div className="w-6 h-6 flex justify-center items-center hover:text-inherit">
            {!isLoading && (
              <>
                {variant === BookmarkButtonVariant.ADD && <BookmarkAddIcon iconType={iconType} />}
                {variant === BookmarkButtonVariant.ADDED && <BookmarkAddedIcon iconType={iconType} />}
              </>
            )}
            {(variant === BookmarkButtonVariant.LOADING || isLoading) && <LoadingIcon iconType={iconType} />}
          </div>
        </div>
      </button>
    )
  }
  if (iconType === ArticleBookmarkButtonIconType.MOBILE) {
    return (
      <button
        type="button"
        {...buttonProps}
        className="group inline-flex justify-center items-center "
        data-prevent-nprogress={true}
      >
        <div className="w-10 h-10  text-primary-900 p-2 transition duration-300 cursor-pointer ">
          <div className="w-6 h-6 flex justify-center items-center hover:text-inherit">
            {!isLoading && (
              <>
                {variant === BookmarkButtonVariant.ADD && <BookmarkAddIcon iconType={iconType} />}
                {variant === BookmarkButtonVariant.ADDED && <BookmarkAddedIcon iconType={iconType} />}
              </>
            )}
            {(variant === BookmarkButtonVariant.LOADING || isLoading) && <LoadingIcon iconType={iconType} />}
          </div>
        </div>
        <span className="pl-4">Bookmark</span>
      </button>
    )
  }

  return (
    <div className="group relative">
      <button
        type="button"
        // {...buttonProps}
        className="group-active:scale-90 group-hover:scale-125 bookmark-button"
        aria-label="Bookmark an item"
      >
        <div className={`${isLoading ? "group-hover:hidden" : ""}`}>
          {variant === BookmarkButtonVariant.ADD && <BookmarkAddIcon iconType={iconType} />}
          {variant === BookmarkButtonVariant.ADDED && <BookmarkAddedIcon iconType={iconType} />}
          {variant === BookmarkButtonVariant.LOADING && <LoadingIcon iconType={iconType} />}
        </div>
        {isLoading && <LoadingIcon iconType={iconType} />}
      </button>
      <span
        {...buttonProps}
        data-prevent-nprogress={true}
        className="w-6 h-6 absolute top-0 right-0 cursor-pointer"
        style={{ fontSize: 0 }}
      >
        Bookmark
      </span>
    </div>
  )
}

export default BookmarkButton

const LoadingIcon = ({ iconType }: { iconType: ArticleBookmarkButtonIconType }) => {
  if (iconType === ArticleBookmarkButtonIconType.LARGE) {
    return <AiOutlineLoading className="animate-spin w-[24px] h-[25px] text-primary group-hover:text-white" />
  }
  return <AiOutlineLoading className="animate-spin w-[17px] h-[17px] text-primary group-hover:block hidden" />
}
