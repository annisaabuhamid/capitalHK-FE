import Link from "next/link"
import { getCsrfTokenSC } from "@/common/lib/auth/getCsrfTokenSC"
import { menuItemsVariables } from "@/common/utils/data/constants"
import { getGlobal, GlobalData } from "@/common/utils/data/global/getGlobal"
import { getMenuItems } from "@/common/utils/data/global/getMenuItems"
import AuthButtons from "@/components/navbar/AuthButtons"
import Logo from "@/components/navbar/Logo"
import NavbarWrapper from "@/components/navbar/NavbarWrapper"
import SocialMediaButtons from "@/components/social-media/SocialMediaButtons"
import MegamenuButton from "./MegamenuButton"
import { NavbarItemWithDropdown } from "./NavItem"
import Newsletter from "./Newsletter"
import Search from "./Search"

async function Navbar() {
  const [csrfToken, menuItems] = await Promise.all([
    getCsrfTokenSC(),
    getMenuItems({
      variables: menuItemsVariables,
    }),
  ])

  let global: GlobalData | undefined
  try {
    global = await getGlobal()
  } catch (error) {
    console.error(error)
  }

  const globalData = global?.attributes

  const tags = globalData?.Tags?.tags ?? null
  return (
    <NavbarWrapper>
      {/* menu icon */}
      <MegamenuButton />

      {/* logo */}
      <Link
        href={`/`}
        className="flex-shrink-0 w-[100px] min-w-[100px] max-w-[100px] overflow-hidden"
        aria-label="Capital Hong Kong Website"
      >
        <Logo className="w-[80px] h-auto max-h-62 lg:ml-5 lg:my-2" />
      </Link>
      {/* menu items */}
      <NavbarItemWithDropdown menuItems={menuItems} />

      {/* right items */}
      <div className="flex ml-auto items-center justify-end gap-0 lg:gap-3 text-sm  flex-shrink-0 pl-3">
        <Search tags={tags} />
        <SocialMediaButtons hideLinkedIn={true} hideMail={true} hideInstagram={true} isHeader={true} />
        <Newsletter />
        <AuthButtons isMegaMenu={"false"} csrfToken={csrfToken} />
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
