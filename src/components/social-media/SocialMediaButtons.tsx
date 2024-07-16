import Link from "next/link"
import { IconType } from "react-icons/lib"
import { getGlobal, GlobalData } from "@/common/utils/data/global/getGlobal"
import { EmailIcon } from "@/components/social-media/icon/emailIcon"
import { FacebookIcon } from "@/components/social-media/icon/fbIcon"
import { InstagramIcon } from "@/components/social-media/icon/instagramIcon"
import { LinkedinIcon } from "@/components/social-media/icon/linkedinIcon"
import { YoutubeIcon } from "@/components/social-media/icon/youtubeIcon"

type Props = {
  hideYoutube?: boolean
  hideFacebook?: boolean
  hideInstagram?: boolean
  hideLinkedIn?: boolean
  hideMail?: boolean
  isHeader?: boolean
  isArticle?: boolean
  isArticleNewsletter?: boolean
  isMegaMenu?: boolean
}

type SocialMediaButtonProps = {
  icon: IconType
  url: string
  isHeader: boolean
  isArticle: boolean
  isArticleNewsletter: boolean
  isMegaMenu: boolean
}
const SocialMediaButton = ({
  icon: IconComponent,
  url,
  isHeader,
  isArticle,
  isArticleNewsletter,
  isMegaMenu,
}: SocialMediaButtonProps) => {
  if (isHeader) {
    return (
      <div className="rounded-full social-media-icon bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
        <div className="w-4 h-4 hover:text-inherit">
          <IconComponent size={16} />
        </div>
      </div>
    )
  } else if (isArticle) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
        <div className="w-6 h-6 flex justify-center items-center hover:text-inherit">
          <IconComponent size={24} />
        </div>
      </div>
    )
  } else if (isArticleNewsletter) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
        <div className="w-4 h-4 flex justify-center items-center hover:text-inherit">
          <IconComponent size={16} />
        </div>
      </div>
    )
  } else if (isMegaMenu) {
    return (
      <div className="w-9 h-9 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
        <div className="w-5 h-5 flex justify-center items-center hover:text-inherit">
          <IconComponent size={20} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
        <div className="w-8 h-8 flex justify-center items-center hover:text-inherit">
          <IconComponent size={32} />
        </div>
      </div>
    )
  }
}

async function SocialMediaButtons({
  hideFacebook = false,
  hideInstagram = false,
  hideLinkedIn = false,
  hideMail = false,
  hideYoutube = false,
  isHeader = false,
  isArticle = false,
  isArticleNewsletter = false,
  isMegaMenu = false,
}: Props) {
  let global: GlobalData | undefined
  try {
    global = await getGlobal()
  } catch (error) {
    console.error(error)
  }

  const globalSocial = global?.attributes

  let globalSocialMedia = globalSocial?.socialNetworks?.link

  return (
    <>
      {globalSocialMedia?.map((socialMedia, i) => {
        // Check if the URL includes "facebook"
        if (!hideFacebook && socialMedia?.url && socialMedia.url.includes("facebook")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500" aria-label="Link to Facebook">
              <SocialMediaButton
                icon={FacebookIcon}
                url={socialMedia.url}
                isHeader={isHeader}
                isArticle={isArticle}
                isArticleNewsletter={isArticleNewsletter}
                isMegaMenu={isMegaMenu}
              />
            </Link>
          )
        }
        if (!hideInstagram && socialMedia?.url && socialMedia.url.includes("instagram")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500" aria-label="Link to Instagram">
              <SocialMediaButton
                icon={InstagramIcon}
                url={socialMedia.url}
                isHeader={isHeader}
                isArticle={isArticle}
                isArticleNewsletter={isArticleNewsletter}
                isMegaMenu={isMegaMenu}
              />
            </Link>
          )
        }
        if (!hideYoutube && socialMedia?.url && socialMedia.url.includes("youtube")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500" aria-label="Link to Youtube">
              <SocialMediaButton
                icon={YoutubeIcon}
                url={socialMedia.url}
                isHeader={isHeader}
                isArticle={isArticle}
                isArticleNewsletter={isArticleNewsletter}
                isMegaMenu={isMegaMenu}
              />
            </Link>
          )
        }
        if (!hideLinkedIn && socialMedia?.url && socialMedia.url.includes("linkedin")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500" aria-label="Link to Linkedin">
              <SocialMediaButton
                icon={LinkedinIcon}
                url={socialMedia.url}
                isHeader={isHeader}
                isArticle={isArticle}
                isArticleNewsletter={isArticleNewsletter}
                isMegaMenu={isMegaMenu}
              />
            </Link>
          )
        }
        if (!hideMail && socialMedia?.url && socialMedia.url.includes("mail")) {
          return (
            <Link
              href={socialMedia.url}
              key={i}
              className="hover:text-tertiary-500"
              aria-label="Send an email for inquiry"
            >
              <SocialMediaButton
                icon={EmailIcon}
                url={socialMedia.url}
                isHeader={isHeader}
                isArticle={isArticle}
                isArticleNewsletter={isArticleNewsletter}
                isMegaMenu={isMegaMenu}
              />
            </Link>
          )
        }
        return null
      })}
    </>
  )
}

export default SocialMediaButtons
