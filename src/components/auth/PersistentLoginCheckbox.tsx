"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function PersistentLoginCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="persistLogin" className="bg-secondary-150 border-none rounded data-[state=checked]:bg-white data-[state=checked]:container-checkmark"/>
      <label
        htmlFor="persistLogin"
        className="text-[#343434] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 h5"
      >
        保持登入
      </label>
    </div>
  )
}
