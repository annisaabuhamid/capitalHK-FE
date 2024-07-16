import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { MenusMenuItemsQueryVariables, useMenusMenuItemsQuery } from "@/common/lib/graphql/generated/graphql"
import { MenusMenuItemEntity } from "@/components/navbar/NavItem"
import { MobileMenuSubCategoryListItem } from "./MobileMenuSubCategoryListItem"

export const getMobileMenuSubCategoryListVariables = (parentId: string): MenusMenuItemsQueryVariables => {
  return {
    sort: ["order"],
    pagination: { limit: -1 },
    filters: { root_menu: { slug: { eq: "top-nav" } }, parent: { id: { eq: parentId } } },
  }
}

export const MobileMenuSubCategoryList = ({ item }: { item: MenusMenuItemEntity }) => {
  const subCategoryParentId = item.id ?? ""
  const { data } = useMenusMenuItemsQuery({
    variables: getMobileMenuSubCategoryListVariables(subCategoryParentId),
    skip: !subCategoryParentId,
  })
  const subCategoriesItems = data?.menusMenuItems?.data

  return (
    <>
      <AnimatePresence initial={false}>
        {/* {loading ? (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1 },
              collapsed: { opacity: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-center min-h-[100px]"
          >
            <Image src={`/svg/3-dots-bounce.svg`} alt="spinner" width={28} height={28} className="object-contain" />
          </motion.div>
        ) : null} */}

        {subCategoriesItems?.length ? (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1 },
              collapsed: { opacity: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="pl-[18px] grid divide-y "
          >
            {subCategoriesItems?.map((subCategoryItem) => {
              return <MobileMenuSubCategoryListItem key={subCategoryItem.id} item={subCategoryItem} />
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
