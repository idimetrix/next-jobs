import Link from "next/link"
import { ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes } from "react"
import { VariantProps } from "tailwind-variants"
import { AlertTheme } from "./theme"
import { cn } from "../../utils"

export interface AlertVariants extends VariantProps<typeof AlertTheme> {}

export interface AlertProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, AlertVariants {
  hover?: boolean
  href?: string
  target?: HTMLAttributeAnchorTarget
  rounded?: boolean
  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
}

export const Alert = forwardRef<HTMLAnchorElement | HTMLButtonElement, AlertProps>(function Alert(
  { hover, href, target, rounded, variant = "primary", className, children, disabled, type, ...rest }: AlertProps,
  ref
) {
  return href ? (
    <Link
      role="alert"
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      href={href}
      target={target}
      className={cn("relative", AlertTheme({ variant }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      role="alert"
      type={type}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      disabled={disabled}
      className={cn("relative", AlertTheme({ variant }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </button>
  )
})
