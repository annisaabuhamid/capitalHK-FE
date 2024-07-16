import React from "react"
import { ButtonColor, ButtonProps } from "@/common/types"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = ButtonColor.PRIMARY, children, ...otherProps }, ref) => {
    return (
      <button type="button" className="cta font-bold leading-[26px]" color={color} {...otherProps} ref={ref}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export default Button
