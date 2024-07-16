import Link from "next/link"
import ChevRight from "@/components/common/atom/navigation/ChevRight"
import { MenusMenuItemEntity } from "@/components/navbar/NavItem"

export const MobileMenuSubCategoryListItem = ({ item }: { item: MenusMenuItemEntity }) => {
  const { attributes } = item
  const name = attributes?.title

  const subCategorySlug = attributes?.url ?? ""
  const href = subCategorySlug
  return (
    <Link href={href}>
      <div className="flex justify-between py-3 pr-3 gap-3">
        <div className="h5">{name}</div>
        <ChevRight />
      </div>
    </Link>
  )
}
