import { HTMLAttributes } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Copyright = ({ className, children, ...rest }: Props) => {
  return (
    <div className={cn("", className)} {...rest}>
      {children || <>© 2024 Galxe Foundation. All rights reserved.</>}
    </div>
  )
}
