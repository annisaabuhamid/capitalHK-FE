import { useMenusMenuItemsQuery } from "@/common/lib/graphql/generated/graphql"
import ArticleNewsletterSocialMediaButtons from "@/components/article/common/molecule/ArticleNewsletterSocialMedia"
import { MegamenuFooter } from "@/components/common/organism/layout/mega-menu/MegaMenuContainer"
import { MobileMenuCategoryListItem } from "./MobileMenuCategoryListItem"
import NewsletterPopup from "@/components/Newslettter/NewsletterPopup"
import { useState } from "react"

type Props = {}

function MobileMenuCategoryList({}: Props) {
  const { data, loading } = useMenusMenuItemsQuery({
    variables: {
      sort: ["order"],
      pagination: { limit: -1 },
      filters: { root_menu: { slug: { eq: "top-nav" } }, parent: { id: { eq: null } } },
    },
  })
  const menuItems = data?.menusMenuItems?.data
  const [isOpen, setIsOpen] = useState(false)
  const onOpenChange = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "initial" : "hidden";
  }
  return (
    <> 
      <div className="grid divide-y divide-[#ECECEC] p-3">
        {menuItems?.map((item) => {
          return <MobileMenuCategoryListItem key={item.id} item={item} />
        })}
      </div>
      <div className="flex mx-3 gap-3">
        <ArticleNewsletterSocialMediaButtons />
      </div>
      <MegamenuFooter  onOpenChange={onOpenChange}/>
    </>
  )
}

export default MobileMenuCategoryList
