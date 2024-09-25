import { HTMLAttributes } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Spacer = ({ className, ...rest }: Props) => {
  return <div className={cn("w-full", className)} {...rest} />
}
