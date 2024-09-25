import { useMediaQuery } from "react-responsive"
import config from "../tailwind.config"

const breakpoints = config.theme!.screens as unknown as Record<string, number>

export const useBreakPoint = (breakpoint: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl") =>
  useMediaQuery({ minWidth: breakpoints[breakpoint] })
