//= Scripts
import { defaultMetadata } from "@/common/config/defaultMetadata"
import AllBloggersListing from "@/components/blogger/AllBloggersListing"

//= Common Components
export const metadata = {
  ...defaultMetadata,
  // icons: defaultMetadataIcons,
}

export const dynamicParams = true
export default async function Page() {
  return <AllBloggersListing />
}
