"use client"
import React from "react"
import { logoutHandler } from "@/common/lib/auth/authHandlers"
import { ButtonColor } from "@/common/types"
import Button from "@/components/common/molecule/button/Button"

type Props = {}

function LogoutButton({}: Props) {
  return (
    <div>
      <Button className="text-center" onClick={logoutHandler} color={ButtonColor.SECONDARY}>
        登出
      </Button>
    </div>
  )
}

export default LogoutButton
