"use client"

import { FC, HTMLAttributes } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Headline: FC<Props> = ({ className, title, children, ...rest }: Props) => {
    return (
        <div className={cn("flex w-full flex-col gap-1.5", className)} {...rest}>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="text-sm opacity-80">
                {children}
            </div>
        </div>
    )
}
