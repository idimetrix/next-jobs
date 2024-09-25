import { useBreakPoint } from "./useBreakPoint"

type Type = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export const useBreakPoints = () => {
  const bps: Record<Type | string, boolean> = {}

  bps["2xs"] = useBreakPoint("2xs")
  bps["xs"] = useBreakPoint("xs")
  bps["sm"] = useBreakPoint("sm")
  bps["md"] = useBreakPoint("md")
  bps["lg"] = useBreakPoint("lg")
  bps["xl"] = useBreakPoint("xl")
  bps["2xl"] = useBreakPoint("2xl")

  const pair = Object.entries(bps)
    .reverse()
    .find(([_, value]) => value)

  return { bps, bp: pair ? (pair[0] as Type) : undefined }
}
