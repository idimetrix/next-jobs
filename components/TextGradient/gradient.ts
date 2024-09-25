import { GradientTypes, Linear, Radial } from "./types"

export const directions = [
  "to left",
  "to top left",
  "to bottom left",
  "to right",
  "to top right",
  "to bottom right",
  "to top",
  "to bottom",
] as const

export type Directions = (typeof directions)[number]

export const defaultStyles = {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  WebkitBoxDecorationBreak: "clone",
} as const
const genDefaultStyle = (fallbackColor?: string) =>
  fallbackColor ? { ...defaultStyles, backgroundColor: fallbackColor } : defaultStyles

export const toRadialStyle = (gradient: Radial, fallbackColor?: string) => {
  if (!Array.isArray(gradient))
    throw new Error(`Expected gradient to be of type (gradient={[<color values>]), got '${gradient}'`)
  return {
    ...genDefaultStyle(fallbackColor),
    backgroundImage: `radial-gradient(${gradient})` as const,
  }
}

export const toLinearStyle = (gradient: Linear, fallbackColor?: string) => {
  const [dir, colors] = gradient
  const direction = directions.includes(dir) ? dir : null

  if (!direction)
    throw new Error(`Expected gradient to be of type (gradient={["<direction>", [<color values>]]), got '${gradient}'`)
  return {
    ...genDefaultStyle(fallbackColor),
    backgroundImage: `linear-gradient(${direction}, ${colors})` as const,
  }
}

export const toGradientStyle = (gradient: Linear | Radial, gradientType: GradientTypes, fallbackColor?: string) => {
  if (gradientType === "radial") return toRadialStyle(gradient as Radial, fallbackColor)
  if (gradientType === "linear") return toLinearStyle(gradient as Linear, fallbackColor)
}
