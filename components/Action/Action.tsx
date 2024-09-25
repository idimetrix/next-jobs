import Link from "next/link"
import { ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes } from "react"
import { cn } from "../../utils"

export interface ActionProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  hover?: boolean
  href?: string
  target?: HTMLAttributeAnchorTarget
  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
}

export const Action = forwardRef<HTMLAnchorElement | HTMLButtonElement, ActionProps>(function Alert(
  { hover, href, target, disabled, type, className, children, ...rest }: ActionProps,
  ref
) {
  return href ? (
    <Link
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      href={href}
      target={target}
      className={cn("relative", disabled && "cursor-not-allowed", className)}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      disabled={disabled}
      className={cn("relative", disabled && "cursor-not-allowed", className)}
      {...rest}
    >
      {children}
    </button>
  )
})
