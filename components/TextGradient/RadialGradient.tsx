import { toGradientStyle } from "./gradient"
import { RadialGradientProps } from "./types"

export const RadialGradient = ({ children, style, gradient, fallbackColor, ...rest }: RadialGradientProps) => {
  return (
    <span
      {...rest}
      style={{
        ...toGradientStyle(gradient, "radial", fallbackColor),
        ...style,
      }}
    >
      {children}
    </span>
  )
}
