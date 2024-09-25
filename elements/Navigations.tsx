"use client"

import { FC, HTMLAttributes } from "react"
import { cn } from "../utils"
import { Card } from "../components/Card"
import { ELEMENTS } from "../constants"
import {Anchor} from "../components/Anchor";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Navigations: FC<Props> = ({ className, ...rest }: Props) => {
  return (
    <Card header="123" className={cn("", className)} {...rest}>
      {ELEMENTS.flatMap((elements) =>
        Object.entries(elements).map(([group, links]) => (
          <ul key={group} className="relative flex flex-col w-full gap-0.5">
            <li className="sticky top-0 -mx-3 px-6 py-3 font-semibold">{group}</li>

            {Object.entries(links).map(([name, href]) => (
              <li key={name} className="-mx-3">
                <Anchor href={href} active="text-primary-500 bg-primary-500/10 hover:text-primary-500 hover:bg-primary-500/10" className="px-6 py-3 text-sm flex w-full hover:bg-secondary-500/10 rounded-md">{name}</Anchor>
              </li>
            ))}
          </ul>
        ))
      )}
    </Card>
  )
}
