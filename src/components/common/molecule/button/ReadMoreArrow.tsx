import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { IconBaseProps, IconType } from "react-icons/lib"

type Props = {
  Icon?: IconType
  iconProps?: IconBaseProps
  iconButtonProps?: React.HTMLAttributes<HTMLDivElement>
}

function ReadMoreArrow({ Icon = FaArrowRight, iconProps, iconButtonProps }: Props) {
  return (
    <div className="w-6 h-6 flex justify-center items-center transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-primary-900 group-hover:rounded group-hover:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="currentColor"
        className="hover:text-white"
      >
        <path d="M-0.000392914 4.99996C-0.000392914 4.93366 0.0259466 4.87007 0.0728321 4.82318C0.119717 4.7763 0.183307 4.74996 0.249612 4.74996L10.646 4.74996L6.57284 0.676766C6.52593 0.629855 6.49958 0.566231 6.49958 0.499888C6.49958 0.433546 6.52593 0.369922 6.57284 0.32301C6.61976 0.276099 6.68338 0.249745 6.74972 0.249745C6.81606 0.249745 6.87969 0.276099 6.9266 0.32301L11.4267 4.82309C11.4499 4.8463 11.4684 4.87388 11.4809 4.90423C11.4935 4.93458 11.5 4.96711 11.5 4.99996C11.5 5.03282 11.4935 5.06535 11.4809 5.0957C11.4684 5.12605 11.4499 5.15362 11.4267 5.17684L6.9266 9.67692C6.90337 9.70015 6.8758 9.71857 6.84545 9.73114C6.8151 9.74371 6.78257 9.75018 6.74972 9.75018C6.71687 9.75018 6.68435 9.74371 6.654 9.73114C6.62365 9.71857 6.59607 9.70015 6.57284 9.67692C6.54962 9.65369 6.53119 9.62611 6.51862 9.59577C6.50605 9.56542 6.49958 9.53289 6.49958 9.50004C6.49958 9.46719 6.50605 9.43466 6.51862 9.40431C6.53119 9.37397 6.54962 9.34639 6.57284 9.32316L10.646 5.24997L0.249612 5.24997C0.183307 5.24997 0.119717 5.22363 0.0728321 5.17674C0.0259466 5.12986 -0.000392914 5.06627 -0.000392914 4.99996Z" />
      </svg>
    </div>
  )
}

export default ReadMoreArrow
