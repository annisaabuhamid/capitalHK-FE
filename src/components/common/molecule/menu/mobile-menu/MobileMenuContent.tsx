import Link from "next/link"
import { useGlobalQuery } from "@/common/lib/graphql/generated/graphql"
import MobileMenuCategoryList from "@/components/common/molecule/menu/mobile-menu/MobileMenuCategoryList"
import AuthButtons from "@/components/navbar/AuthButtons"
import Logo from "@/components/navbar/Logo"
import Search from "@/components/navbar/Search"

function MobileMenuContent() {
  const { data } = useGlobalQuery()

  const tag = data?.global?.data?.attributes?.Tags?.tags

  return (
    <div className="bg-white py-3 px-5 w-full h-full">
      <div className="w-full flex items-center">
        <Link href={`/`} className="flex-shrink-0">
          <Logo className="h-8 w-auto" />
        </Link>

        <div className="flex ml-auto items-center justify-end gap-4 text-sm flex-shrink-0 pl-3">
          <AuthButtons isMegaMenu={"true"} />
        </div>
      </div>

      {tag && <Search tags={tag} isSidebar={true} />}

      <MobileMenuCategoryList />
      <div id="spacer" className="h-[50px]" />
    </div>
  )
}

export default MobileMenuContent
