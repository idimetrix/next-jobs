import Link from "next/link"
import { ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "../utils"

const alert = tv({
  base: "border-opacity-20 px-5 py-3 border bg-opacity-20 rounded-lg",
  variants: {
    variant: {
      primary: "text-primary-800 bg-primary-500 border-primary-500",
      secondary: "text-secondary-800 dark:text-secondary-200 bg-secondary-500 border-secondary-500",
      success: "text-success-800 bg-success-500 border-success-500 bg-opacity-10 border-opacity-10",
      danger: "text-danger-800 bg-danger-500 border-danger-500",
      warning: "text-warning-800 bg-warning-500 border-warning-500",
      info: "text-info-800 bg-info-500 border-info-500",
      dark: "text-dark-800 dark:text-dark-200 bg-dark-500 border-dark-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

export interface AlertVariants extends VariantProps<typeof alert> {}

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
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      href={href}
      target={target}
      className={cn("relative", alert({ variant }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      disabled={disabled}
      className={cn("relative", alert({ variant }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </button>
  )
})
