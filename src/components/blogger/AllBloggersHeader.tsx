import React from "react"
import Divider from "@/components/common/atom/Divider"
import { cn } from "@/components/ui/utils"
import styles from "./styles.module.css"

type Props = {
  label: React.ReactNode
}

function AllBloggersHeader({ label }: Props) {
  return (
    <div>
      {/* header bar */}
      <div className="my-[21px]">
        <div className={cn(styles["blogger-header-title"], "h2")}>{label}</div>
        <Divider className="divide-y-[2px] divide-primary" />
      </div>
    </div>
  )
}

export default AllBloggersHeader
