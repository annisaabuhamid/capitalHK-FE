import React from "react"

type Props = {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <div className="home-container">{children}</div>
}

export default Container
