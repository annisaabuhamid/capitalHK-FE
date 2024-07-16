import Markdown from "markdown-to-jsx"
import React from "react"
import style from "./styles.module.css"
import Logo from "../navbar/Logo"
import SocialMediaButtons from "../social-media/SocialMediaButtons"

type props = { shortIntroduction: string }

function FooterLeft({ shortIntroduction }: props) {
  return (
    <div className={style["footer-left-container"]}>
      <Logo className={style["footer-logo"]} />
      <Markdown options={{ wrapper: React.Fragment, forceBlock: true }} className="mb-8 h4 lg:whitespace-break-spaces">
        {shortIntroduction}
      </Markdown>
      <div className="flex flex-wrap gap-4">
        <SocialMediaButtons />
      </div>
    </div>
  )
}

export default FooterLeft
