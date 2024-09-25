import { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode
  footer?: ReactNode
}

export const Card: FC<Props> = ({ header, footer, className, children, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-xl border border-secondary-700/10 bg-white dark:border-secondary-700 dark:bg-shark-500",
        className
      )}
      {...rest}
    >
      {header && (
        <div className={cn("border-b border-secondary-700/10 p-6 font-semibold dark:border-secondary-700")}>
          {header}
        </div>
      )}
      <div className="p-6"> {children}</div>
      {footer && (
        <div className={cn("border-t border-secondary-700/10 p-6 font-semibold dark:border-secondary-700")}>
          {footer}
        </div>
      )}
    </div>
  )
}
