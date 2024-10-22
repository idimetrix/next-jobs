import Link from "next/link"
import { ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes } from "react"
import { VariantProps } from "tailwind-variants"
import { ButtonTheme } from "./theme"
import { cn } from "../../utils"

export interface ButtonVariants extends VariantProps<typeof ButtonTheme> {}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, ButtonVariants {
  hover?: boolean
  href?: string
  target?: HTMLAttributeAnchorTarget
  rounded?: boolean
  outline?: boolean
  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
}

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(
  {
    hover,
    href,
    target,
    rounded,
    outline,
    variant = "primary",
    dark = true,
    className,
    children,
    disabled,
    type,
    ...rest
  }: ButtonProps,
  ref
) {
  return href ? (
    <Link
      role="alert"
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      href={href}
      target={target}
      className={cn("relative", ButtonTheme({ variant, dark, outline }), rounded && "rounded-full", className)}
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
      className={cn("relative", ButtonTheme({ variant, dark, outline }), rounded && "rounded-full", className)}
      {...rest}
    >
      {children}
    </button>
  )
})
