import Image from "next/image"
import Link from "next/link"
import { getGlobal, GlobalData } from "@/common/utils/data/global/getGlobal"
import style from "./styles.module.css"

type Props = {}

async function FooterNav({}: Props) {
  let global: GlobalData | undefined
  try {
    global = await getGlobal()
  } catch (error) {
    console.error(error)
  }

  const globalFooter = global?.attributes

  let SCGroupLogoUrl = globalFooter?.companyLogo.data?.attributes?.url ?? ""
  let SCGroupLogoWidth = globalFooter?.companyLogo.data?.attributes?.width ?? undefined
  let SCGroupLogoHeight = globalFooter?.companyLogo.data?.attributes?.height ?? undefined
  let SCGroupLogoAlt = globalFooter?.companyLogo.data?.attributes?.alternativeText || "alt not available"

  let Copyright = globalFooter?.copyright

  let PageLink = globalFooter?.CustomPages?.PageLink

  return (
    <div className={style["footer-nav"]}>
      <div className="xl:max-w-[1344px] xl:mx-auto">
        <div className={style["footer-nav-container"]}>
          <div className="flex items-center lg:items-start justify-start gap-[11px] lg:gap-0">
            <Image
              src={SCGroupLogoUrl}
              width={SCGroupLogoWidth}
              height={SCGroupLogoHeight}
              alt={SCGroupLogoAlt}
              className="max-w-[80px] max-h-[26px] block lg:hidden"
            />
            <div className="text-xs leading-4 font-medium md:font-normal text-secondary-400">{Copyright}</div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 lg:gap-12 mx-auto max-w-[193px] sm:max-w-none lg:mx-0">
            {PageLink &&
              PageLink.map((page, i) => {
                return (
                  <Link
                    href={page?.url || ""}
                    target={`_${page?.target}`}
                    key={i}
                    className="text-xs leading-4 font-medium md:font-normal text-secondary-400"
                  >
                    {page?.label}
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
