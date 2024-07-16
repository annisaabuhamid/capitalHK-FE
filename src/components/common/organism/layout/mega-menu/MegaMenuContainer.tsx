"use client"

import { AnimatePresence, motion } from "framer-motion"
import { isNil } from "lodash"
import { debounce } from "lodash"
import Image from "next/image"
import Link from "next/link"
import { ReactNode, useEffect, useMemo, useState } from "react"
import {
  MenusMenuItemsDocument,
  MenusMenuItemsQuery,
  useGlobalQuery,
  useMenusMenuItemsQuery,
} from "@/common/lib/graphql/generated/graphql"
import { menuItemsVariables } from "@/common/utils/data/constants"
import MegaMenuRightArrowIcon from "@/components/common/atom/mega-menu/MegaMenuRightArrowIcon"
import { useMegaMenuContext } from "@/components/common/organism/layout/mega-menu/MegaMenuContext"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import { MenusMenuItemEntity } from "@/components/navbar/NavItem"
import NewsletterPopup from "@/components/Newslettter/NewsletterPopup"
import { Skeleton } from "@/components/ui/skeleton"

type MegaMenuProps = {
  socialMedia?: ReactNode
}
interface WindowSize {
  width: number | undefined
}

function MegaMenuContainer({ socialMedia }: MegaMenuProps) {
  const { menuButtonRef, setMegaMenuIsOpen, megaMenuIsOpen, setNewsletternDialogIsOpen } = useGlobalContext()
  const [leftEmptySpace, setLeftEmptySpace] = useState(100)
  const { scrollHeight } = useMegaMenuContext()
  const [isOpen, setIsOpen] = useState(false)
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
  })
  const navbarHeight = 58
  const containerOffsetHeight = (scrollHeight < 0 ? -scrollHeight : 0) + navbarHeight
  const onOpenChange = () => {
    setIsOpen(!isOpen)
    setMegaMenuIsOpen(false)
    setNewsletternDialogIsOpen(true)
    // document.body.style.overflow = !isOpen ? "initial" : "hidden"
  }
  useEffect(() => {
    const getMenuButtonRelativePosition = () => {
      if (!menuButtonRef?.current)
        return {
          newLeftOffset: 0,
          // newTopOffset: 0,
        }
      const buttonRect = menuButtonRef.current.getBoundingClientRect()
      const newLeftOffset = buttonRect.left
      return { newLeftOffset }
    }

    const calculateOffsets = () => {
      if (windowSize.width !== window.innerWidth) {
        const { newLeftOffset } = getMenuButtonRelativePosition()
        setLeftEmptySpace(newLeftOffset)
      }
    }

    const debouncedCalculateOffsets = debounce(calculateOffsets, 800)

    const timeoutId = setTimeout(() => {
      calculateOffsets()
    }, 500)

    window.addEventListener("resize", debouncedCalculateOffsets)
    return () => {
      window.removeEventListener("resize", debouncedCalculateOffsets)
      debouncedCalculateOffsets.cancel()
      clearTimeout(timeoutId)
    }
  }, [menuButtonRef, megaMenuIsOpen, windowSize.width])

  const handleMouseLeave = () => {
    if (!isOpen) {
      setMegaMenuIsOpen(false)
    }
  }
  const handleMouseEnter = () => {
    setMegaMenuIsOpen(true)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {megaMenuIsOpen ? (
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.08)",
            }}
            className="bg-white absolute h-full top-0 left-0 z-[48]"
            // motion props
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.2,
            }}
          >
            <NavbarSpacer />
            <ScrollSpacer />

            {/* <div className="overflow-auto h-[calc(100vh-58px)]"> */}
            <div
              className="flex max-w-full justify-start overflow-auto hide-scrollbar"
              style={{
                maxHeight: `calc(100vh - ${containerOffsetHeight}px)`,
              }}
            >
              <div
                id="left-empty-space"
                style={{
                  width: `${leftEmptySpace}px`,
                }}
              />
              <div className="pr-[16.5px] py-[15px]">
                <MegaMenuContent />
                {socialMedia}
                {/* <MegamenuFooter /> */}
                <MegamenuFooter onOpenChange={onOpenChange} />
              </div>
              {/* </div> */}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

const ScrollSpacer = () => {
  const { scrollHeightPositive } = useMegaMenuContext()
  return (
    <motion.div
      id="scroll-spacer"
      initial={false}
      animate={{
        height: scrollHeightPositive,
      }}
      style={{ height: `${scrollHeightPositive}px` }}
    />
  )
}

export default MegaMenuContainer

const NavbarSpacer = () => {
  return <div id="navbar-spacer" className="h-[58px]" />
}
const MegaMenuContent = () => {
  const { data, client, loading } = useMenusMenuItemsQuery({
    variables: menuItemsVariables,
  })

  const menuItems: MenusMenuItemEntity[] = useMemo(() => {
    return data?.menusMenuItems?.data ?? []
  }, [data])
  const [activeItemId, setActiveItemId] = useState<string | undefined | null>()
  const [subMenuItemsByParentId, setSubMenuItemsByParentId] = useState<Record<string, MenusMenuItemEntity[]>>({})
  // const toggleActiveItem = (itemId?: string | null) => {
  //   setActiveItemId((prev) => {
  //     if (prev === itemId) return undefined
  //     return itemId
  //   })
  // }

  useEffect(() => {
    const prefetchSubMenuItems = async () => {
      const subMenuItemsPromises = menuItems?.map((menuItem) => {
        const itemId = menuItem.id
        return client?.query<MenusMenuItemsQuery>({
          query: MenusMenuItemsDocument,
          variables: {
            ...menuItemsVariables,
            filters: {
              root_menu: { slug: { eq: "top-nav" } },
              parent: {
                id: { eq: itemId },
              },
            },
          },
        })
      })
      const results = await Promise.all(subMenuItemsPromises)
      const newSubMenuItemsByParentId = results.reduce(
        (acc, result, index) => {
          const subMenuItems = result?.data?.menusMenuItems?.data ?? []
          const itemId = menuItems[index].id
          if (isNil(itemId)) return acc
          return {
            ...acc,
            [itemId]: subMenuItems,
          }
        },
        {} as Record<string, MenusMenuItemEntity[]>
      )
      setSubMenuItemsByParentId(newSubMenuItemsByParentId)
    }
    prefetchSubMenuItems() // prefetch all sub menu items
  }, [client, menuItems])

  return (
    <div className="mb-9" onMouseLeave={() => setActiveItemId(undefined)}>
      {loading ? (
        <div className="min-h-[123px] mt-[21px] space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : null}
      {menuItems?.map((menuItem) => {
        const itemId = menuItem.id
        const href = menuItem.attributes?.url ?? "/"
        const hasChildren = itemId ? subMenuItemsByParentId[itemId]?.length > 0 : false
        return (
          <div key={itemId} className="group">
            <button
              onMouseEnter={() => setActiveItemId(itemId)}
              className="py-2 px-3 flex w-full justify-between items-center gap-2 group-hover:bg-primary"
            >
              <Link href={href}>
                <div
                  className={`h4 text-left group-hover:text-white ${hasChildren ? "w-[162px] " : "flex-grow w-full"}`}
                >
                  {menuItem.attributes?.title}
                </div>
              </Link>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setActiveItemId(itemId)
                }}
                className="w-4 h-4"
                hidden={!hasChildren}
              >
                <MegaMenuRightArrowIcon />
              </div>
            </button>
            {hasChildren && <MegaMenuSubContent itemId={itemId} activeItemId={activeItemId} />}
          </div>
        )
      })}
    </div>
  )
}

const MegaMenuSubContent = ({ itemId, activeItemId }: { itemId?: string | null; activeItemId?: string | null }) => {
  const { data, loading } = useMenusMenuItemsQuery({
    variables: {
      ...menuItemsVariables,
      filters: {
        root_menu: { slug: { eq: "top-nav" } },
        parent: {
          id: { eq: itemId },
        },
      },
    },
    skip: !itemId,
  })
  const menuItems: MenusMenuItemEntity[] = data?.menusMenuItems?.data ?? []
  const isActive = activeItemId === itemId
  if (!isActive || (!loading && !menuItems.length)) return null

  return (
    <div
      className={`bg-white
        absolute h-full top-0 -right-[185px] z-[48] 
        py-[15px]
        `}
      style={{
        boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.08)",
      }}
    >
      <NavbarSpacer />
      <ScrollSpacer />
      {menuItems?.map((menuItem) => {
        const itemId = menuItem.id
        const href = menuItem.attributes?.url ?? "/"
        return (
          <div key={itemId} className="group/item">
            <button className="py-2 px-5 flex justify-between items-center gap-2 group-hover/item:bg-primary">
              <Link href={href}>
                <div className="h4 w-[162px] text-left group-hover/item:text-white">{menuItem.attributes?.title}</div>
              </Link>
            </button>
          </div>
        )
      })}
    </div>
  )
}
// export function MegamenuFooter() {
export function MegamenuFooter({ onOpenChange }: { onOpenChange: () => void }) {
  const { data } = useGlobalQuery()
  let magazineImageUrl = data?.global?.data?.attributes?.Magazine?.magazineCover.data?.attributes?.url || ""
  let magazineImageWidth = data?.global?.data?.attributes?.Magazine?.magazineCover.data?.attributes?.width ?? undefined
  let magazineImageHeight =
    data?.global?.data?.attributes?.Magazine?.magazineCover.data?.attributes?.height ?? undefined
  let magazineImageAlt =
    data?.global?.data?.attributes?.Magazine?.magazineCover.data?.attributes?.alternativeText || "alt not available"
  let url = data?.global?.data?.attributes?.Magazine?.url ?? ""
  let title = data?.global?.data?.attributes?.Magazine?.title
  let cta = data?.global?.data?.attributes?.Magazine?.ctaLabel

  let PageLink = data?.global?.data?.attributes?.CustomPages?.PageLink

  const { setMegaMenuIsOpen } = useGlobalContext()

  const [isOpen, setIsOpen] = useState(false)

  // const onOpenChange = () => {
  //   setIsOpen(!isOpen)
  //   document.body.style.overflow = isOpen ? "initial" : "hidden";
  // }

  const closeMegaMenu = () => {
    setMegaMenuIsOpen(false)
  }

  return (
    <div className="ml-3">
      <div className="flex gap-4 flex-col mt-5">
        {/* <div onClick={onOpenChange} className="h5 cursor-pointer !font-bold">
          訂閱電子報
        </div> */}
        <NewsletterPopup onOpenChange={onOpenChange} type={"mobile-megamenu"} />
        {PageLink &&
          PageLink.map((page, i) => {
            if (page?.label === "廣告查詢" || page?.label === "聯繫我們")
              return (
                <Link
                  onClick={closeMegaMenu}
                  href={page?.url || ""}
                  target={`_${page?.target}`}
                  key={i}
                  className="h5 cursor-pointer !font-bold"
                >
                  {page?.label}
                </Link>
              )
          })}
      </div>

      <div className="block mt-9">
        <div className="max-w-[190px] ">
          <div className="max-w-[190px] w-full md:justify-center flex flex-col gap-[6px]">
            <div className="flex-col text-left">
              <Image
                className="max-w-[144px] max-h-[187px] "
                src={magazineImageUrl}
                width={magazineImageWidth}
                height={magazineImageHeight}
                alt={magazineImageAlt}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="pb-4 text-sm leading-[22px] font-bold">{title}</div>
              <Link href={url} target="_blank">
                <div className="hidden  h-10 px-6 py-[7px] bg-zinc-800 rounded justify-center items-center gap-1 md:inline-flex">
                  <div className="w-6 h-6 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M22.2422 4.42456H16.8797C15.7289 4.42456 14.6039 4.75503 13.6359 5.37847L12.4922 6.11206L11.3484 5.37847C10.3814 4.75515 9.25518 4.42395 8.10469 4.42456H2.74219C2.32734 4.42456 1.99219 4.75972 1.99219 5.17456V18.4871C1.99219 18.9019 2.32734 19.2371 2.74219 19.2371H8.10469C9.25547 19.2371 10.3805 19.5675 11.3484 20.191L12.3891 20.8613C12.4195 20.88 12.4547 20.8917 12.4898 20.8917C12.525 20.8917 12.5602 20.8824 12.5906 20.8613L13.6312 20.191C14.6016 19.5675 15.7289 19.2371 16.8797 19.2371H22.2422C22.657 19.2371 22.9922 18.9019 22.9922 18.4871V5.17456C22.9922 4.75972 22.657 4.42456 22.2422 4.42456ZM8.10469 17.5496H3.67969V6.11206H8.10469C8.93437 6.11206 9.74062 6.34878 10.4367 6.79644L11.5805 7.53003L11.7422 7.6355V18.4636C10.6266 17.8636 9.37969 17.5496 8.10469 17.5496ZM21.3047 17.5496H16.8797C15.6047 17.5496 14.3578 17.8636 13.2422 18.4636V7.6355L13.4039 7.53003L14.5477 6.79644C15.2438 6.34878 16.05 6.11206 16.8797 6.11206H21.3047V17.5496ZM9.79453 9.11206H5.43984C5.34844 9.11206 5.27344 9.19175 5.27344 9.28784V10.3425C5.27344 10.4386 5.34844 10.5183 5.43984 10.5183H9.79219C9.88359 10.5183 9.95859 10.4386 9.95859 10.3425V9.28784C9.96094 9.19175 9.88594 9.11206 9.79453 9.11206ZM15.0234 9.28784V10.3425C15.0234 10.4386 15.0984 10.5183 15.1898 10.5183H19.5422C19.6336 10.5183 19.7086 10.4386 19.7086 10.3425V9.28784C19.7086 9.19175 19.6336 9.11206 19.5422 9.11206H15.1898C15.0984 9.11206 15.0234 9.19175 15.0234 9.28784ZM9.79453 12.3933H5.43984C5.34844 12.3933 5.27344 12.473 5.27344 12.5691V13.6238C5.27344 13.7199 5.34844 13.7996 5.43984 13.7996H9.79219C9.88359 13.7996 9.95859 13.7199 9.95859 13.6238V12.5691C9.96094 12.473 9.88594 12.3933 9.79453 12.3933ZM19.5445 12.3933H15.1898C15.0984 12.3933 15.0234 12.473 15.0234 12.5691V13.6238C15.0234 13.7199 15.0984 13.7996 15.1898 13.7996H19.5422C19.6336 13.7996 19.7086 13.7199 19.7086 13.6238V12.5691C19.7109 12.473 19.6359 12.3933 19.5445 12.3933Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div className="text-justify text-white text-sm font-bold font-noto leading-relaxed">{cta}</div>
                </div>
              </Link>
            </div>
          </div>
          <Link href={url} target="_blank">
            <div className="h-10 px-6 py-[7px] bg-zinc-800 rounded w-full text-center justify-center items-center gap-1 inline-flex mt-9 md:hidden">
              <div className="w-6 h-6 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path
                    d="M22.2422 4.42456H16.8797C15.7289 4.42456 14.6039 4.75503 13.6359 5.37847L12.4922 6.11206L11.3484 5.37847C10.3814 4.75515 9.25518 4.42395 8.10469 4.42456H2.74219C2.32734 4.42456 1.99219 4.75972 1.99219 5.17456V18.4871C1.99219 18.9019 2.32734 19.2371 2.74219 19.2371H8.10469C9.25547 19.2371 10.3805 19.5675 11.3484 20.191L12.3891 20.8613C12.4195 20.88 12.4547 20.8917 12.4898 20.8917C12.525 20.8917 12.5602 20.8824 12.5906 20.8613L13.6312 20.191C14.6016 19.5675 15.7289 19.2371 16.8797 19.2371H22.2422C22.657 19.2371 22.9922 18.9019 22.9922 18.4871V5.17456C22.9922 4.75972 22.657 4.42456 22.2422 4.42456ZM8.10469 17.5496H3.67969V6.11206H8.10469C8.93437 6.11206 9.74062 6.34878 10.4367 6.79644L11.5805 7.53003L11.7422 7.6355V18.4636C10.6266 17.8636 9.37969 17.5496 8.10469 17.5496ZM21.3047 17.5496H16.8797C15.6047 17.5496 14.3578 17.8636 13.2422 18.4636V7.6355L13.4039 7.53003L14.5477 6.79644C15.2438 6.34878 16.05 6.11206 16.8797 6.11206H21.3047V17.5496ZM9.79453 9.11206H5.43984C5.34844 9.11206 5.27344 9.19175 5.27344 9.28784V10.3425C5.27344 10.4386 5.34844 10.5183 5.43984 10.5183H9.79219C9.88359 10.5183 9.95859 10.4386 9.95859 10.3425V9.28784C9.96094 9.19175 9.88594 9.11206 9.79453 9.11206ZM15.0234 9.28784V10.3425C15.0234 10.4386 15.0984 10.5183 15.1898 10.5183H19.5422C19.6336 10.5183 19.7086 10.4386 19.7086 10.3425V9.28784C19.7086 9.19175 19.6336 9.11206 19.5422 9.11206H15.1898C15.0984 9.11206 15.0234 9.19175 15.0234 9.28784ZM9.79453 12.3933H5.43984C5.34844 12.3933 5.27344 12.473 5.27344 12.5691V13.6238C5.27344 13.7199 5.34844 13.7996 5.43984 13.7996H9.79219C9.88359 13.7996 9.95859 13.7199 9.95859 13.6238V12.5691C9.96094 12.473 9.88594 12.3933 9.79453 12.3933ZM19.5445 12.3933H15.1898C15.0984 12.3933 15.0234 12.473 15.0234 12.5691V13.6238C15.0234 13.7199 15.0984 13.7996 15.1898 13.7996H19.5422C19.6336 13.7996 19.7086 13.7199 19.7086 13.6238V12.5691C19.7109 12.473 19.6359 12.3933 19.5445 12.3933Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="text-justify text-white text-sm font-bold font-noto leading-relaxed whitespace-nowrap">
                {cta}
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* spacer */}
      <div className="h-9" />
    </div>
  )
}
