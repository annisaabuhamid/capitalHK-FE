"use client"

import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"
import { BookmarkIcon, ChevronDown, LogOut, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { logoutHandler } from "@/common/lib/auth/authHandlers"
import { useAuth } from "@/common/lib/auth/useAuth"
import MyAccountIcon from "@/components/common/atom/account/MyAccountIcon"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {}

function MyAccountDropdown({}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()
  const username = user?.username

  const messageForLoginUser = `你好，${username}`
  const onOpenChange: DropdownMenuProps["onOpenChange"] = (newIsOpen) => {
    setIsOpen(newIsOpen)
  }
  return (
    <div>
      <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger asChild>
          <button type="button" className="flex items-center gap-1">
            <MyAccountIcon />
            <div className="h5 text-[#343434]">我的帳戶</div>
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-[102px] w-full rounded-none p-0">
          {/* <DropdownMenuLabel> */}
            {/* put username */}
            {/* <div className="h5 text-[#343434] font-bold">{messageForLoginUser}</div> */}
          {/* </DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={`/my-account`} className="flex items-center w-full cursor-pointer px-5 py-2 justify-center">
                {/* <User className="mr-2 h-4 w-4" /> */}
                <span className="font-medium text-sm text-secondary-800 leading-[27px]">我的帳戶</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href={`/bookmark`} className="flex items-center w-full cursor-pointer px-5 py-2 justify-center">
                {/* <BookmarkIcon className="mr-2 h-4 w-4" /> */}
                <span className="font-medium text-sm text-secondary-800 leading-[27px]">我的收藏</span>
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`/bookmark`}
                  className="flex items-center w-full cursor-pointer"
                >
                  <BookmarkIcon className="mr-2 h-4 w-4" />
                  <span>我的收藏</span>
                </Link>
              </DropdownMenuSubTrigger>

              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/bookmark?tab=文章`} className="flex items-center w-full cursor-pointer">
                      <Newspaper className="mr-2 h-4 w-4" />
                      <span>文章</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/bookmark?tab=食買玩資訊`} className="flex items-center w-full cursor-pointer">
                      <Info className="mr-2 h-4 w-4" />
                      <span>食買玩資訊</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/bookmark?tab=編輯`} className="flex items-center w-full cursor-pointer">
                      <PersonStanding className="mr-2 h-4 w-4" />
                      <span>編輯</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub> */}
          </DropdownMenuGroup>

          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem asChild>
            <div  onClick={logoutHandler} className="px-5 py-2 justify-center">
              {/* <LogOut className="mr-2 h-4 w-4" /> */}
              <span className="font-medium text-sm text-secondary-800 leading-[27px]">登出</span>
            </div>
            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MyAccountDropdown
