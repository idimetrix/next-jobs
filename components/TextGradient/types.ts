import { ComponentPropsWithRef } from "react"
import { Directions } from "./gradient"

export type GradientTypes = "linear" | "radial"
export type Linear = [Directions, string]
export type Radial = string[]
export type FallbackColor = string

export type LinearGradientProps = ComponentPropsWithRef<"span"> & {
  fallbackColor?: FallbackColor
  gradient: Linear
}

export type RadialGradientProps = ComponentPropsWithRef<"span"> & {
  fallbackColor?: FallbackColor
  gradient: Radial
}
