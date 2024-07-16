import { defaultMetadata } from "@/common/config/defaultMetadata"
import EditPasswordPage from "@/components/auth/edit-password/EditPasswordPage"

//= Common Components
export const metadata = {
  ...defaultMetadata,
  // icons: defaultMetadataIcons,
}
export default async function Page() {
  return (
    <div className="max-w-[1200px] mx-auto px-0">
      <EditPasswordPage />
    </div>
  )
}
