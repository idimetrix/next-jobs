import { HTMLAttributes, ReactNode, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  suspend?: ReactNode
}

export const Intersection = ({ suspend, className, children, ...rest }: Props) => {
  const [loaded, setLoaded] = useState(false)

  const { ref, inView, entry } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!loaded && inView) setLoaded(true)
  }, [loaded, inView])

  return (
    <div ref={ref} className={cn("min-h-[1px]", className)} {...rest}>
      {loaded ? children : suspend}
    </div>
  )
}
