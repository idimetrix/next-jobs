import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { HTMLAttributeAnchorTarget, HTMLAttributes, useEffect, useState } from "react"
import { useHash } from "../hooks/useHash"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLAnchorElement>, LinkProps {
  href: string
  active?: string | undefined
  target?: HTMLAttributeAnchorTarget
}

export const Anchor = ({ active, className, href, children, ...rest }: Props) => {
  const [value, setValue] = useState(false)

  const pathname = usePathname()

  const [hash] = useHash()

  useEffect(() => {
    setValue(href.startsWith("#") ? href === `#${hash}` : pathname === href || pathname === `/${href}`)
  }, [href, hash, pathname])

  return (
    <Link href={href} className={cn("transition-all duration-300", className, value && active)} {...rest}>
      {children}
    </Link>
  )
}
