"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAuth } from "@/common/lib/auth/useAuth"
import AccountBookmarkIcon from "@/components/common/atom/account/AccountBookmarkIcon"
import MyAccountIcon from "@/components/common/atom/account/MyAccountIcon"
import { cn } from "@/components/ui/utils"

type Props = {
  active: string
}

const leftPanelItems = [
  {
    id: "1",
    name: "我的帳戶",
    icon: <MyAccountIcon />,
    href: "/my-account",
  },
  {
    id: 2,
    name: "我的收藏",
    icon: <AccountBookmarkIcon />,
    href: "/bookmark",
  },
]

function AccountBookmarkLeftPanel({active}: Props) {
  const { status } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/")
    }
  }, [status, router])
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  };
  const currentUrl = pathname.replace(/^\/+/, '');
  
  return (
    <div>
      <div className="relative lg:hidden">
        <div
          onClick={() => toggleDropdown(true)}
          className="flex w-full flex-row items-center gap-3 border border-[#BBB] rounded px-3 py-2"
        >
          <span className="text-sm font-normal tracking-[0.5px] text-[#1A1818] ">
            {currentUrl === "my-account" ? "我的帳戶" : "我的收藏"}
          </span>
          <span className="flex flex-1 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.6655 13.3416C22.5903 13.5868 22.4198 13.76 22.2475 13.9358C20.3591 15.862 18.4719 17.7895 16.5871 19.7193C16.3557 19.9563 16.0929 20.0671 15.7764 19.9588C15.6582 19.9183 15.5419 19.8384 15.4527 19.7476C13.4921 17.751 11.5346 15.7512 9.57885 13.7496C9.25023 13.4133 9.25154 12.9782 9.57342 12.6388C9.72427 12.4798 9.87464 12.3185 10.0394 12.1754C10.3175 11.934 10.7025 11.9459 10.9801 12.1897C11.0228 12.2272 11.0628 12.2681 11.1027 12.3088C12.6951 13.9355 14.2875 15.5623 15.8793 17.1897C15.9159 17.2272 15.9459 17.2713 16.0372 17.3423C16.0622 17.2955 16.078 17.2394 16.1134 17.2032C17.7196 15.5592 19.3274 13.9168 20.9356 12.2748C21.2355 11.9686 21.6492 11.9073 21.93 12.1594C22.2161 12.4164 22.5304 12.658 22.6655 13.0489V13.3416Z"
                fill="black"
              />
            </svg>
          </span>
        </div>

        {isOpen && (
          <ul className="absolute z-10 w-full  rounded bg-white py-2 shadow-lg">
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100"
             onClick={() => toggleDropdown(false)}>
              <Link href={"/my-account"} className="flex gap-3 text-center">
                 我的帳戶
              </Link>
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" 
             onClick={() => toggleDropdown(false)}>
              <Link href={"/bookmark"} className="flex gap-3">
               我的收藏
              </Link>
            </li>
          </ul>
        )}
      </div>
    <div className="hidden lg:block">
      <div className="w-[166px] grid gap-3">
        {leftPanelItems.map((item) => {
          const active = pathname.includes(item.href)
          return (
            <Link key={item.id} href={item.href}>
              <div
                className={cn(
                  `flex items-center justify-center gap-2 cursor-pointer py-2 px-3`,
                  active ? "bg-primary" : ""
                )}
              >
                <div className={cn("w-6 h-6", active ? "[&_path]:fill-white" : "[&_path]:fill-black")}>{item.icon}</div>
                <div className={cn("h4 ml-2 font-bold leading-5", active ? "text-white" : " text-black")}>
                  {item.name}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default AccountBookmarkLeftPanel
