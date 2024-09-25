import Link from "next/link"
import { ForwardedRef, forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "../utils"

const button = tv({
  base: "group select-none transition-all duration-300 relative flex items-center justify-center text-center h-[44px] rounded-[8px] px-6 py-[11px]",
  variants: {
    color: {
      primary: "",
      secondary: "border border-charade hover:border-lanse-blue hover:text-lanse-blue",
      tertiary: "",
    },
  },
  defaultVariants: {
    color: "primary",
  },
})

interface ButtonVariants extends VariantProps<typeof button> {
  hover?: boolean
  href?: string
  target?: HTMLAttributeAnchorTarget
}

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, "size" | "color">,
    ButtonVariants {
  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
}

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(
  { hover, href, target, color = "primary", className, children, disabled, type, ...rest }: ButtonProps,
  ref
) {
  return href ? (
    <Link
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      href={href}
      target={target}
      className={cn("", button({ color }), className)}
      {...rest}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      disabled={disabled}
      className={cn("", button({ color }), className)}
      {...rest}
    >
      {children}
    </button>
  )
})
