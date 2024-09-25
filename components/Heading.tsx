import { ElementType, HTMLAttributes } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = ({ level, className, children, ...rest }: Props) => {
  const Tag = `h${level}` as ElementType

  return (
    <Tag className={cn("", className)} {...rest}>
      {children}
    </Tag>
  )
}
