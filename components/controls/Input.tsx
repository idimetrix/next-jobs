import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react"
import { cn } from "../../utils"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, Props>(function Input({ style, className, ...rest }: Props, ref) {
  return (
    <input
      ref={ref}
      style={{ "--tw-ring-color": "var(--color-nila-blue)", ...style }}
      className={cn(
        "bg-ruined-smores placeholder:text-midnight-magic border-midnight-magic hover:border-nila-blue focus:border-nila-blue rounded-lg border px-5 py-3.5 transition-all duration-300 file:transition-all file:duration-300",
        className
      )}
      {...rest}
    />
  )
})
