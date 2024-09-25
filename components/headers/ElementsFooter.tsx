"use client"

import { FC, HTMLAttributes } from "react"
import { cn } from "../../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ElementsFooter: FC<Props> = ({ className, ...rest }: Props) => {
  return (
    <div className={cn("flex w-full flex-col gap-9", className)} {...rest}>
      123
    </div>
  )
}
