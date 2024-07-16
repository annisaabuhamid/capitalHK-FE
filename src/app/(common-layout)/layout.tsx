import { ReactNode } from "react"
import CommonLayout from "@/components/common/organism/layout/CommonLayout"

export default async function CommonLayoutWrapper({ children }: { children: ReactNode }) {
  return <CommonLayout>{children}</CommonLayout>
}
