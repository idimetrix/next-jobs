import { FC, HTMLAttributes } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string
  top?: string
}

export const AnimatedText: FC<Props> = ({
  color = "#fff",
  top = "24px",
  children,
  className,
  style = {},
  ...rest
}: Props) => (
  <span
    className={cn("", className)}
    style={{
      backgroundImage: `linear-gradient(transparent ${top},${color} 0)`,
      backgroundSize: "0",
      backgroundRepeat: "no-repeat",
      transition: "background-size .3s cubic-bezier(.785,.135,.15,.86) 0s",
      ...style,
    }}
    {...rest}
  >
    {children}
  </span>
)
