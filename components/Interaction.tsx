import { HTMLAttributes, ReactNode, useEffect, useState } from "react"
import { useInteraction } from "../hooks/useInteraction"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  suspend?: ReactNode
}

export const Intersection = ({ suspend, className, children, ...rest }: Props) => {
  const [loaded, setLoaded] = useState(false)

  const interaction = useInteraction()

  useEffect(() => {
    if (!loaded && interaction) setLoaded(true)
  }, [loaded, interaction])

  return (
    <div className={cn("min-h-[1px]", className)} {...rest}>
      {loaded ? children : suspend}
    </div>
  )
}
