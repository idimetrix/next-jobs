import { forwardRef, TextareaHTMLAttributes } from "react"
import { cn } from "../../utils"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { style, className, children, readOnly, ...rest }: Props,
  ref
) {
  return (
    <textarea
      ref={ref}
      style={{ "--tw-ring-color": "var(--color-nila-blue)", ...style }}
      className={cn(
        "bg-ruined-smores placeholder:text-midnight-magic border-midnight-magic hover:border-nila-blue focus:border-nila-blue rounded-lg px-5 py-3.5 transition-all duration-300",
        readOnly && "appearance-none border-transparent bg-none",
        className
      )}
      readOnly={readOnly}
      {...rest}
    >
      {children}
    </textarea>
  )
})
