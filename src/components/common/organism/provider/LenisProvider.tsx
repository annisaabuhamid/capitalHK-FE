import React from "react"
import { ReactLenis, useLenis } from "@/common/lib/lenis"

type Props = {
  children: React.ReactNode
}

const lenisOptions: React.ComponentProps<typeof ReactLenis>["options"] = {
  smoothWheel: true,
  virtualScroll: (e) => {
    return !!(e.deltaY /= 2)
  },
}

function LenisProvider({ children }: Props) {
  //   const lenis = useLenis(({ scroll }) => {
  //     console.log("scroll", scroll)
  //   })

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
