import Image from "next/image"
import { getGlobal, GlobalData } from "@/common/utils/data/global/getGlobal"
import FooterRight from "@/components/footer/FooterRight"
import FooterLeft from "./FooterLeft"
import FooterNav from "./FooterNav"
import styles from "./styles.module.css"

async function Footer() {
  let global: GlobalData | undefined
  try {
    global = await getGlobal()
  } catch (error) {
    console.error(error)
  }

  const globalFooter = global?.attributes

  let globalFooterShortIntroduction = globalFooter?.shortIntroduction ?? ""
  let SCGroupLogoUrl = globalFooter?.companyLogo.data?.attributes?.url ?? ""
  let SCGroupLogoWidth = globalFooter?.companyLogo.data?.attributes?.width ?? undefined
  let SCGroupLogoHeight = globalFooter?.companyLogo.data?.attributes?.height ?? undefined
  let SCGroupLogoAlt = globalFooter?.companyLogo.data?.attributes?.alternativeText || "alt not available"

  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-inner-container"]}>
        <div className={styles["footer-main-section"]}>
          <FooterLeft shortIntroduction={globalFooterShortIntroduction} />
          <FooterRight />
        </div>
        <div className={styles["footer-scm-logo-container"]}>
          <Image
            src={SCGroupLogoUrl}
            width={SCGroupLogoWidth}
            height={SCGroupLogoHeight}
            alt={SCGroupLogoAlt}
            className="max-w-[100px] max-h-[26px]"
          />
        </div>
      </div>
      <FooterNav />
    </div>
  )
}

export default Footer
