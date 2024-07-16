"use client"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/components/ui/utils"

const CustomSheet = SheetPrimitive.Root

const CustomSheetTrigger = SheetPrimitive.Trigger

const CustomSheetClose = SheetPrimitive.Close

const CustomSheetPortal = SheetPrimitive.Portal

const CustomSheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "absolute inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
CustomSheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "absolute z-50 gap-4 bg-background py-[15px] px-[16.5px] shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        outerRight: "z-49 inset-y-0 h-full w-full border-l data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface CustomSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
      container?: React.RefObject<HTMLElement>
      hideOverlay?: boolean
    }

const CustomSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  CustomSheetContentProps
>(({ side = "right", hideOverlay, className, children, container,...props }, ref) => (
  <CustomSheetPortal container={container?.current}>
    {hideOverlay ? null : <CustomSheetOverlay className="custom-sheet-overlay" />}
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </CustomSheetPortal>
))
CustomSheetContent.displayName = SheetPrimitive.Content.displayName

const CustomSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
CustomSheetHeader.displayName = "CustomSheetHeader"

const CustomSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
CustomSheetFooter.displayName = "CustomSheetFooter"

const CustomSheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
CustomSheetTitle.displayName = SheetPrimitive.Title.displayName

const CustomSheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CustomSheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  CustomSheet,
  CustomSheetPortal,
  CustomSheetOverlay,
  CustomSheetTrigger,
  CustomSheetClose,
  CustomSheetContent,
  CustomSheetHeader,
  CustomSheetFooter,
  CustomSheetTitle,
  CustomSheetDescription,
}
