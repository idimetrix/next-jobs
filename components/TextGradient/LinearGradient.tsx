import { toGradientStyle } from "./gradient"
import { LinearGradientProps } from "./types"

export const LinearGradient = ({ children, style, gradient, fallbackColor, ...rest }: LinearGradientProps) => {
  return (
    <span
      {...rest}
      style={{
        ...toGradientStyle(gradient, "linear", fallbackColor),
        ...style,
      }}
    >
      {children}
    </span>
  )
}
