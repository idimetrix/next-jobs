import { Transition } from "@headlessui/react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Jost } from "next/font/google"
import { Fragment, HTMLAttributes, memo, type ReactNode, useCallback } from "react"
import { cn } from "../../utils"

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
})

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    Omit<DialogPrimitive.DialogContentProps, "title"> {
  title?: ReactNode
  titleClassName?: string
  classNameClose?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  hideCloseButton?: boolean
}

export const Dialog = memo(function Dialog({
  title,
  titleClassName,
  classNameClose,
  open,
  onOpenChange,
  modal = true,
  hideCloseButton,
  children,
  className,
  ...rest
}: Props) {
  const avoidDefaultDomBehavior = useCallback(
    (event: Event) => {
      if (modal) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    [modal]
  )

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange} modal={modal}>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={open}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="pointer-events-none fixed inset-0 z-40 bg-[rgba(5,16,54,.4)]"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              onPointerDownOutside={avoidDefaultDomBehavior}
              onInteractOutside={avoidDefaultDomBehavior}
              forceMount
              className={cn(
                "border-resplendent-growth fixed left-[50%] top-[50%] z-50 flex max-h-full w-full flex-col overflow-y-auto overflow-x-hidden rounded-[2px] border-[3px] bg-black -translate-x-[50%] -translate-y-[50%]",
                jost.className,
                className
              )}
              {...rest}
            >
              {!!title && (
                <DialogPrimitive.DialogTitle
                  className={cn(
                    "font-ocrx text-lightish-green bg-resplendent-growth relative ml-[-3px] mr-[-3px] mt-[-3px] flex h-[46px] min-h-[46px] items-center rounded-[2px] px-[2px] py-[3px] text-2xl",
                    titleClassName
                  )}
                >
                  <div
                    style={{
                      boxShadow: `1.84px 1.84px 1.84px 0px rgba(0, 0, 0, 0.91) inset, -1.84px -0.92px 3.69px 0px rgba(215, 215, 215, 0.18) inset`,
                    }}
                    className={cn("bg-chestnut-green flex h-full w-full items-center rounded-[2px] px-4")}
                  >
                    {title}
                  </div>
                </DialogPrimitive.DialogTitle>
              )}
              {!hideCloseButton && (
                <DialogPrimitive.Close
                  style={{
                    boxShadow: `1.84px 1.84px 1.84px 0px #000000E8 inset`,
                  }}
                  className={cn(
                    "font-ocrx disabled:bg-nori-green hover:bg-mermaid-tail disabled:text-jungle-jam bg-bialowieza-forest text-lightish-green absolute right-[4px] top-[4px] inline-flex h-[32px] min-h-[32px] w-[30px] min-w-[30px] items-center justify-center overflow-hidden rounded-[2px] text-3xl transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100",
                    classNameClose
                  )}
                >
                  X
                </DialogPrimitive.Close>
              )}
              <div className="h-full overflow-y-auto overflow-x-hidden">{children}</div>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
})
