//= Scripts
import { defaultMetadata } from "@/common/config/defaultMetadata"
import AllBookmarks from "@/components/bookmark/AllBookmarks"

//= Common Components
export const metadata = {
  ...defaultMetadata,
  // icons: defaultMetadataIcons,
}

export default async function Page() {
  return <AllBookmarks />
}
