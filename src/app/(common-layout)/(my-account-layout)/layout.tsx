//= Global Styles These styles apply to every route in the application

import { ReactNode } from "react"
import { defaultMetadata } from "@/common/config/defaultMetadata"
import AccountBookmarkLeftPanel from "@/components/bookmark/AccountBookmarkLeftPanel"
import Container from "@/components/common/atom/container/Container"

//= Scripts
export const metadata = {
  ...defaultMetadata,
  // icons: defaultMetadataIcons,
}

export default async function MyAccountLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-[66px] mt-6">
        <AccountBookmarkLeftPanel active={'myaccount'} />
        <div className="flex-grow mb-12">{children}</div>
      </div>
    </Container>
  )
}
