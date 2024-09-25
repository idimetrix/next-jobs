import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react"
import { Input } from "./Input"
import { cn } from "../../utils"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const File = forwardRef<HTMLInputElement, Props>(function File({ style, className, ...rest }: Props, ref) {
  return (
    <Input
      ref={ref}
      style={{ "--tw-ring-color": "var(--color-nila-blue)", ...style }}
      className={cn(
        "file:hover:bg-nila-blue h-[54px] cursor-pointer pb-0 pl-0 pt-0 file:mr-3.5 file:cursor-pointer file:border-0 file:bg-white file:px-5 file:py-3.5 file:text-black file:hover:text-white",
        className
      )}
      type="file"
      {...rest}
    />
  )
})
