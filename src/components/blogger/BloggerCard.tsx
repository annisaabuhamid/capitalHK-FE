import Link from "next/link"
import { SingleEditor } from "@/common/types/bloggerTypes"
import EditorBookmarkButtonWrapper from "@/components/common/molecule/button/editor/EditorBookmarkButtonWrapper"
import ImageContainer from "@/components/image/ImageContainer"
import styles from "./BloggerCard.module.css"

type Props = {
  blogger: SingleEditor
}

function BloggerCard({ blogger }: Props) {
  return (
    <div className={"bg-[#F8F8F8] p-6 xl:max-w-[347px]"}>
      <Link href={`/blogger/${blogger.id ?? ""}`}>
        <div className="flex  flex-1 items-start flex-row ">
          <ImageContainer src={blogger.avatarUrl} alt={blogger.name} className={styles["blogger-card-image"]} />
          <div className="grid gap-2 ml-6 item-center xl:max-w-[191px]">
            <div className="flex flex-row item-center">
              <div className={`h5 pt-1 mr-3 text-start ${styles["blogger-name"]}`}>{blogger.name}</div>
              <EditorBookmarkButtonWrapper editorId={blogger.id} />
            </div>
            <div className="text-[#747474] h5">{blogger.biography}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BloggerCard
