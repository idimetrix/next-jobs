import * as PopoverPrimitive from "@radix-ui/react-popover"
import { ALIGN_OPTIONS, SIDE_OPTIONS } from "@radix-ui/react-popper"
import { ReactNode } from "react"

type Props = PopoverPrimitive.PopoverProps & {
  offset?: number
  trigger: ReactNode
  triggerPrimitive?: PopoverPrimitive.PopoverTriggerProps
  align?: (typeof ALIGN_OPTIONS)[number]
  side?: (typeof SIDE_OPTIONS)[number]
}

export const Popover = ({
  offset = 15,
  trigger,
  triggerPrimitive,
  align = "start",
  side,
  children,
  ...rest
}: Props) => {
  return (
    <PopoverPrimitive.Root {...rest}>
      <PopoverPrimitive.Trigger asChild {...triggerPrimitive}>
        {trigger}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content align={align} side={side} sideOffset={offset} className="z-50 rounded-md bg-white">
          {/*<PopoverPrimitive.Arrow className="fill-current text-white" />*/}
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
