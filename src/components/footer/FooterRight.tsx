import Image from "next/image"
import Link from "next/link"
import { getGlobal, GlobalData } from "@/common/utils/data/global/getGlobal"
// import ArticleImage from "@/components/article/common/atom/ArticleImage"
import style from "./styles.module.css"

type Props = {}

async function FooterRight({}: Props) {
  let global: GlobalData | undefined
  try {
    global = await getGlobal()
  } catch (error) {
    console.error(error)
  }

  const globalFooter = global?.attributes

  const globalMagazineCoverUrl = globalFooter?.Magazine?.magazineCover.data?.attributes?.url ?? ""
  const globalMagazineCoverWidth = globalFooter?.Magazine?.magazineCover.data?.attributes?.width ?? undefined
  const globalMagazineCoverHeight = globalFooter?.Magazine?.magazineCover.data?.attributes?.height ?? undefined
  const globalMagazineCoverAlt =
    globalFooter?.Magazine?.magazineCover.data?.attributes?.alternativeText || "alt not available"

  const globalMagazineUrl = globalFooter?.Magazine?.url ?? ""
  const globalMagazineTitle = globalFooter?.Magazine?.title
  const globalMagazineCTA = globalFooter?.Magazine?.ctaLabel

  return (
    <div className={style["footer-right-container"]}>
      <div className="flex grid-cols-2 justify-center items-center gap-6 pt-[7px]">
        <Link href={globalMagazineUrl}>
          <Image
            src={globalMagazineCoverUrl}
            width={globalMagazineCoverWidth}
            height={globalMagazineCoverHeight}
            alt={globalMagazineCoverAlt}
            className="max-w-[152px] max-h-[198px]"
          />
        </Link>
        <div className="text-xs">
          <div className="h4 lg:whitespace-nowrap mb-2">{globalMagazineTitle}</div>
          <Link
            href={globalMagazineUrl}
            className="h5 !font-bold text-primary hover:underline hover:underline-offset-4 cursor-pointer decoration"
          >
            {`+ ${globalMagazineCTA}`}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterRight
