"use client"

import Dialog, { DialogProps } from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import { X } from "lucide-react"
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode, useCallback } from "react"
import { cn } from "@/components/ui/utils"

type Props = {
  isOpen: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  dialogTitle?: ReactNode
  panelClassName?: string
  dialogClassName?: string
  fullScreen?: boolean
  TransitionComponent?: typeof SlideRightTransition
  allowOverflow?: boolean
  dialogProps?: Partial<DialogProps>
}

function NewDialog({
  dialogTitle,
  isOpen,
  onOpenChange,
  children,
  panelClassName,
  dialogClassName = "",
  fullScreen = false,
  TransitionComponent,
  allowOverflow = false,
  dialogProps,
}: Props) {
  const onClose = useCallback(() => {
    onOpenChange?.(false)
  }, [onOpenChange])

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullScreen={fullScreen}
      TransitionComponent={TransitionComponent}
      className={dialogClassName}
      PaperProps={allowOverflow ? { className: "overflow-y-visible" } : undefined}
      {...dialogProps}
    >
      <div className={panelClassName}>
        {dialogTitle}
        {children}
      </div>
    </Dialog>
  )
}

export default NewDialog

export const BackdropBasic = () => {
  return <div className="fixed inset-0 bg-white/70 backdrop-blur-sm" aria-hidden="true" />
}

export const SlideRightTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />
})

export const SlideUpTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const NewDialogClose = ({
  className,
  ...props
}: Partial<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>) => {
  return (
    <button
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  )
}
