"use client"

import Link from "next/link"
import { FC, HTMLAttributes } from "react"
import { cn } from "../../utils"
import { SwitcherTheme } from "../switchers/SwitcherTheme"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ElementsHeader: FC<Props> = ({ className, ...rest }: Props) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex h-20 w-full flex-col items-center justify-center gap-9 bg-white bg-opacity-75 shadow-[0_0_24px_rgba(27,46,94,.05)] backdrop-blur dark:bg-shark-500 dark:bg-opacity-75 dark:shadow-[0_0_24px_rgba(27,46,94,.05)]",
        className
      )}
      {...rest}
    >
      <div className="container flex items-center justify-between gap-6">
        <Link href="/elements" className="text-3xl font-bold">
          Elements
        </Link>

        <div className="flex items-center gap-3">
          <SwitcherTheme />
        </div>
      </div>
    </header>
  )
}
