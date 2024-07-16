import { ReactNode } from "react"

type Props = {
  children?: ReactNode
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function ReadMoreFullWidthButton({ children = "閱讀文章", ...buttonProps }: Props) {
  return (
    <button
      type="button"
      className={`text-white bg-primary-1000 
      w-full text-center py-[7px] px-[24px] rounded-[4px]
      `}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default ReadMoreFullWidthButton
