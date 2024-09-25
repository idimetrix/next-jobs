import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { ALIGN_OPTIONS } from "@radix-ui/react-popper"
import { ReactNode, useId } from "react"
import { cn } from "../utils"

type Props = DropdownMenuPrimitive.DropdownMenuProps & {
  trigger: ReactNode
  triggerPrimitive?: DropdownMenuPrimitive.DropdownMenuTriggerProps
  align?: (typeof ALIGN_OPTIONS)[number]
  offset?: number
  content?: DropdownMenuPrimitive.DropdownMenuContentProps
}

export const Dropdown = ({
  trigger,
  triggerPrimitive,
  align = "start",
  offset = 15,
  content,
  children,
  ...rest
}: Props) => {
  const id = useId()

  return (
    <DropdownMenuPrimitive.Root {...rest}>
      <DropdownMenuPrimitive.Trigger asChild {...triggerPrimitive}>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={offset}
          {...content}
          className={cn("z-50 rounded-md bg-white", content?.className)}
        >
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
