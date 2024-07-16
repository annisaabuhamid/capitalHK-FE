import React from "react"
import { ArticlePropsOptional } from "@/common/types"

type Props = ArticlePropsOptional & {}

function EditorSelectBadge({ editorSelect }: Props) {
  if (!editorSelect) return null
  return (
    <div className="editor-select-badge">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
        <g clipPath="url(#clip0_3271_14552)">
          <path
            d="M7.69971 7C6.36471 7 3.69971 7.665 3.69971 9V10H11.6997V9C11.6997 7.665 9.03471 7 7.69971 7ZM7.69971 6C8.23014 6 8.73885 5.78929 9.11392 5.41421C9.48899 5.03914 9.69971 4.53043 9.69971 4C9.69971 3.46957 9.48899 2.96086 9.11392 2.58579C8.73885 2.21071 8.23014 2 7.69971 2C7.16927 2 6.66057 2.21071 6.28549 2.58579C5.91042 2.96086 5.69971 3.46957 5.69971 4C5.69971 4.53043 5.91042 5.03914 6.28549 5.41421C6.66057 5.78929 7.16927 6 7.69971 6ZM2.69971 6.64L3.92471 7.385L3.59971 5.98L4.69971 5.04L3.25471 4.915L2.69971 3.595L2.13471 4.915L0.699707 5.04L1.78971 5.98L1.44971 7.385L2.69971 6.64Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3271_14552">
            <rect width="12" height="12" fill="white" transform="translate(0.199707)" />
          </clipPath>
        </defs>
      </svg>
      <span className="leading-[14px]">編輯精選</span>
    </div>
  )
}

export default EditorSelectBadge
