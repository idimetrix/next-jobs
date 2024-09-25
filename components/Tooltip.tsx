import { ALIGN_OPTIONS, SIDE_OPTIONS } from "@radix-ui/react-popper"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "../utils"

type Props = TooltipPrimitive.TooltipProps & {
  trigger: ReactNode
  triggerPrimitive?: TooltipPrimitive.TooltipTriggerProps
  align?: (typeof ALIGN_OPTIONS)[number]
  side?: (typeof SIDE_OPTIONS)[number]
  // delayDuration?: number;
} & HTMLAttributes<HTMLElement>

export const Tooltip = ({ trigger, triggerPrimitive, className, align = "center", side, children, ...rest }: Props) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...rest}>
        <TooltipPrimitive.Trigger asChild {...triggerPrimitive}>
          {trigger}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            align={align}
            side={side}
            sideOffset={5}
            className={cn(
              "radix-side-top:animate-slide-down-fade",
              "radix-side-right:animate-slide-left-fade",
              "radix-side-bottom:animate-slide-up-fade",
              "radix-side-left:animate-slide-right-fade",
              "inline-flex items-center rounded-md",
              "shadow-dropdown z-50 bg-white px-2",
              className
            )}
          >
            <TooltipPrimitive.Arrow className="fill-current text-white" />
            {children}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
