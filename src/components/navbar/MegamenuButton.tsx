"use client"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"
import { NavMenuIcon } from "../common/atom/navigation/NavMenuIcon"
import { NavMenuIconClose } from "../common/atom/navigation/NavMenuIconClose"

function MegamenuButton() {
  // State to track whether the Sheet is open or closed

  const { megaMenuIsOpen, setMegaMenuIsOpen, menuButtonRef } = useGlobalContext()

  const toggleMegaMenu = () => {
    setMegaMenuIsOpen(!megaMenuIsOpen)
  }

  return (
    <div className="mega-menu">
      <button ref={menuButtonRef} onClick={toggleMegaMenu} className="menu-button" aria-label="Open Menu">
        {megaMenuIsOpen ? <NavMenuIconClose /> : <NavMenuIcon />}
      </button>
    </div>
  )
}

export default MegamenuButton
