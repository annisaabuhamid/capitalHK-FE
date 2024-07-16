import React from "react"

type Props = {
  isEditing: boolean
}

function MyAccountFormHeader({ isEditing }: Props) {
  return (
    <div>
      {isEditing ? (
        <div className="mb-6">
          <div className="h1 font-bold">修改資料</div>
        </div>
      ) : (
        <div className="flex-grow grid mb-6 gap-6">
          <div className="h1 font-bold">我的帳戶</div>
          <div className="grid gap-3">
            <div className="h2 font-bold">我的資料</div>
            <div className="w-full border-b border-black"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyAccountFormHeader
