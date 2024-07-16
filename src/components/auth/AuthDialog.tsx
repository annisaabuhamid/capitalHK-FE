"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { ButtonColor } from "@/common/types"
import { LoginTabs } from "@/components/auth/LoginTabs"
import Button from "@/components/common/molecule/button/Button"
import NewDialog, {
  BackdropBasic,
  NewDialogClose,
  SlideUpTransition,
} from "@/components/common/molecule/dialog/NewDialog"
import { useGlobalContext } from "@/components/common/organism/provider/GlobalProvider"

type Props = {
  csrfToken?: string
}

export function AuthDialog({ csrfToken }: Props) {
  const { loginDialogIsOpen: isLoginOpen, setLoginDialogIsOpen: setLoginIsOpen } = useGlobalContext()

  const router = useRouter()
  const onOpenChange = useCallback(
    (open: boolean) => {
      setLoginIsOpen(open)
    },
    [setLoginIsOpen]
  )

  const onSuccess = useCallback(() => {
    onOpenChange(false)
    router.push("/my-account")
  }, [onOpenChange, router])

  return (
    <>
      <Button
        color={ButtonColor.SECONDARY}
        onClick={() => {
          onOpenChange(true)
        }}
      >
        <span className="md:hidden pr-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M22.5664 3.77344H17.2039C16.0531 3.77344 14.9281 4.10391 13.9602 4.72734L12.8164 5.46094L11.6727 4.72734C10.7057 4.10403 9.5794 3.77282 8.42891 3.77344H3.06641C2.65156 3.77344 2.31641 4.10859 2.31641 4.52344V17.8359C2.31641 18.2508 2.65156 18.5859 3.06641 18.5859H8.42891C9.57969 18.5859 10.7047 18.9164 11.6727 19.5398L12.7133 20.2102C12.7438 20.2289 12.7789 20.2406 12.8141 20.2406C12.8492 20.2406 12.8844 20.2313 12.9148 20.2102L13.9555 19.5398C14.9258 18.9164 16.0531 18.5859 17.2039 18.5859H22.5664C22.9813 18.5859 23.3164 18.2508 23.3164 17.8359V4.52344C23.3164 4.10859 22.9813 3.77344 22.5664 3.77344ZM8.42891 16.8984H4.00391V5.46094H8.42891C9.25859 5.46094 10.0648 5.69766 10.7609 6.14531L11.9047 6.87891L12.0664 6.98438V17.8125C10.9508 17.2125 9.70391 16.8984 8.42891 16.8984ZM21.6289 16.8984H17.2039C15.9289 16.8984 14.682 17.2125 13.5664 17.8125V6.98438L13.7281 6.87891L14.8719 6.14531C15.568 5.69766 16.3742 5.46094 17.2039 5.46094H21.6289V16.8984ZM10.1187 8.46094H5.76406C5.67266 8.46094 5.59766 8.54063 5.59766 8.63672V9.69141C5.59766 9.7875 5.67266 9.86719 5.76406 9.86719H10.1164C10.2078 9.86719 10.2828 9.7875 10.2828 9.69141V8.63672C10.2852 8.54063 10.2102 8.46094 10.1187 8.46094ZM15.3477 8.63672V9.69141C15.3477 9.7875 15.4227 9.86719 15.5141 9.86719H19.8664C19.9578 9.86719 20.0328 9.7875 20.0328 9.69141V8.63672C20.0328 8.54063 19.9578 8.46094 19.8664 8.46094H15.5141C15.4227 8.46094 15.3477 8.54063 15.3477 8.63672ZM10.1187 11.7422H5.76406C5.67266 11.7422 5.59766 11.8219 5.59766 11.918V12.9727C5.59766 13.0688 5.67266 13.1484 5.76406 13.1484H10.1164C10.2078 13.1484 10.2828 13.0688 10.2828 12.9727V11.918C10.2852 11.8219 10.2102 11.7422 10.1187 11.7422ZM19.8688 11.7422H15.5141C15.4227 11.7422 15.3477 11.8219 15.3477 11.918V12.9727C15.3477 13.0688 15.4227 13.1484 15.5141 13.1484H19.8664C19.9578 13.1484 20.0328 13.0688 20.0328 12.9727V11.918C20.0352 11.8219 19.9602 11.7422 19.8688 11.7422Z"
              fill="white"
            />
          </svg>
        </span>
        登入
      </Button>

      <NewDialog
        onOpenChange={onOpenChange}
        isOpen={isLoginOpen}
        dialogTitle={<div className="h2 text-center hide-inline pb-6">CAPITAL 會員</div>}
        panelClassName="relative bg-white p-6 border bg-background p-6 shadow-lg duration-200 rounded-lg max-w-[335px] md:max-w-[425px] max-h-screen"
        dialogClassName="overflow-visible !z-[50] m-0 p-0"
        TransitionComponent={SlideUpTransition}
        allowOverflow
      >
        <NewDialogClose
          onClick={() => {
            onOpenChange(false)
          }}
          className="rounded-full bg-black right-[-12px] top-[-20px] p-[9px] absolute opacity-100 text-white z-[60]"
        />

        <LoginTabs csrfToken={csrfToken} onSuccess={onSuccess} />
      </NewDialog>
    </>
  )
}
