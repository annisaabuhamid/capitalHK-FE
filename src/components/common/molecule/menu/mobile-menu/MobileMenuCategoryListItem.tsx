import { useApolloClient } from "@apollo/client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { MenusMenuItemsDocument, MenusMenuItemsQuery } from "@/common/lib/graphql/generated/graphql"
import CollapseIcon from "@/components/common/atom/navigation/CollapseIcon"
import ExpandIcon from "@/components/common/atom/navigation/ExpandIcon"
import { MenusMenuItemEntity } from "@/components/navbar/NavItem"
import { getMobileMenuSubCategoryListVariables, MobileMenuSubCategoryList } from "./MobileMenuSubCategoryList"

export const MobileMenuCategoryListItem = ({ item }: { item: MenusMenuItemEntity }) => {
  const { attributes } = item
  const { title, url } = attributes || {}
  const subCategoryParentId = item.id ?? ""

  const [isExpanded, setIsExpanded] = useState(false)
  const toggleIsExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  const [subCategoriesItems, setSubCategoriesItems] = useState<MenusMenuItemEntity[]>([])

  const categorySlug = url ?? ""

  const client = useApolloClient()

  const handlePrefetch = useCallback(async () => {
    if (!subCategoryParentId) return
    const result = await client.query<MenusMenuItemsQuery>({
      query: MenusMenuItemsDocument,
      variables: getMobileMenuSubCategoryListVariables(subCategoryParentId),
    })
    const newSubCatItems = result.data?.menusMenuItems?.data ?? []
    setSubCategoriesItems(newSubCatItems)
  }, [subCategoryParentId, client])

  useEffect(() => {
    handlePrefetch()
  }, [handlePrefetch])

  const canExpand = subCategoriesItems.length > 0

  return (
    <>
      <div className="py-[12px] pr-[12px] flex justify-between gap-[8px]">
        <Link href={categorySlug} className="flex-grow">
          <div className={`h4 font-bold ${canExpand && "border-r border-[#ECECEC]"}`}>{title}</div>
        </Link>
        <button
          hidden={!canExpand}
          // onMouseOver={handlePrefetch}
          // onTouchStart={handlePrefetch}
          onClick={toggleIsExpanded}
          className="h-6 w-6"
        >
          {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <MobileMenuSubCategoryList item={item} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
