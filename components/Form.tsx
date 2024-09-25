import { HTMLAttributes } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLFormElement> {}

export const Form = ({ className, children, ...rest }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <form ref={ref} className={cn("", className)} {...rest}>
      {children}
    </form>
  )
}
