"use client"
import { debounce } from "lodash"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { useWindowSize } from "react-use"
import { MenusMenuItemsQuery } from "@/common/lib/graphql/generated/graphql"
import { ArrowDownIcon } from "@/components/common/atom/navigation/ArrowIcon"

type MenusMenuItemEntityResponseCollection = MenusMenuItemsQuery["menusMenuItems"]
export type MenusMenuItemEntity = NonNullable<MenusMenuItemEntityResponseCollection>["data"][number]
interface WindowSize {
  width: number | undefined
}

export const NavbarItemWithDropdown = ({ menuItems }: { menuItems: MenusMenuItemEntity[] }) => {
  const [dropdownMenuItems, setDropdownMenuItems] = useState<MenusMenuItemEntity[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  // const { width } = useWindowSize()
  // const menuItemLabelLengthObject = useMemo(() => {
  //   const menuItemLabelLengthObject = menuItems.reduce(
  //     (acc, item, currentIndex) => {
  //       const key = currentIndex
  //       const labelLength = item.attributes?.title.length ?? 0
  //       acc[key] = labelLength
  //       return acc
  //     },
  //     {} as Record<number, number>
  //   )
  //   return menuItemLabelLengthObject
  // }, [menuItems])

  const [windowSize] = useState<WindowSize>({
    width: undefined,
  })

  useEffect(() => {
    const updateDropdownItems = () => {
      if (!containerRef.current) return
      if (windowSize.width === window.innerWidth) return
      const children = Array.from(containerRef.current?.children) as HTMLDivElement[]
      let newDropdownItems: MenusMenuItemEntity[] = []

      children.forEach((child, index) => {
        if (child.offsetTop > 0) {
          const newChild = menuItems[index]
          if (newChild) newDropdownItems.push(newChild)
        }
      })

      setDropdownMenuItems(newDropdownItems)
    }

    const debouncedUpdateDropdownItems = debounce(updateDropdownItems, 1000)

    updateDropdownItems()
    window.addEventListener("resize", debouncedUpdateDropdownItems)

    return () => {
      window.removeEventListener("resize", debouncedUpdateDropdownItems)
      debouncedUpdateDropdownItems.cancel()
    }
  }, [menuItems, windowSize.width])

  // const horizontalCount = useMemo(() => {}, [width])

  // const horizontalMenuItems = useMemo(() => {
  //   return menuItems.slice(0, horizontalCount)
  // }, [menuItems, horizontalCount])
  // const dropdownMenuItems = useMemo(() => {
  //   return menuItems.slice(horizontalCount)
  // }, [menuItems, horizontalCount])

  return (
    <div className="flex-grow flex">
      <div className="lg:pl-12 lg:min-h-0">
        <div ref={containerRef} className="navbar-item-list">
          {menuItems.map((item) => (
            <NavItem key={item.id} item={item.attributes} />
          ))}
        </div>
      </div>
      {dropdownMenuItems.length > 0 && (
        <div className="relative group flex-shrink-0 mr-3 lg:ml-6 flex items-center h-[58px]">
          <div className="nav-item">
            <button className="flex items-center gap-1">
              更多
              <ArrowDownIcon />
            </button>
          </div>
          <div className={`hidden group-hover:flex dropdown-items`}>
            {dropdownMenuItems.map((item) => (
              <div key={item.id} className="overflow-hidden">
                <NavItem key={item.id} item={item.attributes} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
type MenuItem = MenusMenuItemEntity["attributes"]
export const NavItem = ({ item }: { item: MenuItem }) => {
  let isParent = item?.parent?.data == null

  if (!item) return null

  const href = item.url ?? ""
  const label = item.title
  return (
    isParent && (
      <div className="nav-link-wrapper">
        <Link href={href} className="">
          <div className="nav-item relative">
            <div>{label}</div>
          </div>
        </Link>
      </div>
    )
  )
}
