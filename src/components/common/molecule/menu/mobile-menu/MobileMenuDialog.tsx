import NewDialog, { SlideRightTransition } from "@/components/common/molecule/dialog/NewDialog"
import MobileMenuContent from "@/components/common/molecule/menu/mobile-menu/MobileMenuContent"

type Props = { isOpen: boolean }

function MobileMenuDialog({ isOpen }: Props) {
  return (
    <NewDialog
      isOpen={isOpen}
      fullScreen
      TransitionComponent={SlideRightTransition}
      panelClassName="w-screen h-screen lg:hidden"
      dialogClassName="!z-[49]"
    >
      <MobileMenuContent />
    </NewDialog>
  )
}

export default MobileMenuDialog
