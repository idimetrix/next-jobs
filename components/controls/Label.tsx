import { forwardRef, LabelHTMLAttributes } from "react"
import { cn } from "../../utils"

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, Props>(function Label({ className, children, ...rest }: Props, ref) {
  return (
    <label ref={ref} className={cn("", className)} {...rest}>
      {children}
    </label>
  )
})
