import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { ReactNode } from "react"

type Props = HoverCardPrimitive.HoverCardProps & {
  trigger: ReactNode
  triggerPrimitive?: HoverCardPrimitive.HoverCardTriggerProps
}

export const Hoverdown = ({ trigger, triggerPrimitive, openDelay = 0, closeDelay = 0, children, ...rest }: Props) => {
  return (
    <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={closeDelay} {...rest}>
      <HoverCardPrimitive.Trigger asChild {...triggerPrimitive}>
        {trigger}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content align="start" sideOffset={15} className="shadow-dropdown z-50 rounded-md bg-white">
          {children}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  )
}
