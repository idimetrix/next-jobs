import { HTMLAttributeAnchorTarget, ReactNode } from "react"

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export type Linker = {
  name: string
  content?: ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
  inactive?: boolean
  links?: Linker[]
}
