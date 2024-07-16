import Link from "next/link"
import { IconType } from "react-icons/lib"
import { getGlobal, GlobalData } from "@/common/utils/data/global/getGlobal"
import { EmailIcon } from "@/components/social-media/icon/emailIcon"
import { FacebookIcon } from "@/components/social-media/icon/fbIcon"
import { InstagramIcon } from "@/components/social-media/icon/instagramIcon"
import { LinkedinIcon } from "@/components/social-media/icon/linkedinIcon"
import { YoutubeIcon } from "@/components/social-media/icon/youtubeIcon"
import { useGlobalQuery } from "@/common/lib/graphql/generated/graphql"

type Props = {}

type SocialMediaButtonProps = {
  icon: IconType
  url: string
}
const ArticleSocialMediaButton = ({ icon: IconComponent, url }: SocialMediaButtonProps) => {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 p-2 hover:bg-black transition duration-300 cursor-pointer hover:text-white">
      <div className="w-4 h-4 flex justify-center items-center hover:text-inherit">
        <IconComponent size={16} />
      </div>
    </div>
  )
}

function ArticleNewsletterSocialMediaButtons({}: Props) {
  const { data } = useGlobalQuery()

  const globalSocialMedia = data?.global?.data?.attributes?.socialNetworks?.link

  return (
    <>
      {globalSocialMedia?.map((socialMedia, i) => {
        // Check if the URL includes "facebook"
        if (socialMedia?.url && socialMedia.url.includes("facebook")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500">
              <ArticleSocialMediaButton icon={FacebookIcon} url={socialMedia.url} />
            </Link>
          )
        }
        if (!socialMedia?.url && socialMedia?.url.includes("instagram")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500">
              <ArticleSocialMediaButton icon={InstagramIcon} url={socialMedia.url} />
            </Link>
          )
        }
        if (socialMedia?.url && socialMedia.url.includes("youtube")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500">
              <ArticleSocialMediaButton icon={YoutubeIcon} url={socialMedia.url} />
            </Link>
          )
        }
        if (socialMedia?.url && socialMedia.url.includes("linkedin")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500">
              <ArticleSocialMediaButton icon={LinkedinIcon} url={socialMedia.url} />
            </Link>
          )
        }
        if (socialMedia?.url && socialMedia.url.includes("mail")) {
          return (
            <Link href={socialMedia.url} key={i} className="hover:text-tertiary-500">
              <ArticleSocialMediaButton icon={EmailIcon} url={socialMedia.url} />
            </Link>
          )
        }
        return null
      })}
    </>
  )
}

export default ArticleNewsletterSocialMediaButtons
