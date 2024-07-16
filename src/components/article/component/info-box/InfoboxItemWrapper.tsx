import React, { ReactNode } from "react"

type Props = { children: ReactNode }

function InfoboxItemWrapper({ children }: Props) {
  return <div className="p-6 bg-secondary-100">{children}</div>
}

export default InfoboxItemWrapper
