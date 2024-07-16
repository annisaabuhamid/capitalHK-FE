import React from "react"

type Props = {
  className?: string
}

function Divider({ className = "divide-white divide-y my-3" }: Props) {
  return (
    <div className={`w-full  ${className}`}>
      <div className="w-full"></div>
      <div className="w-full"></div>
    </div>
  )
}

export default Divider
