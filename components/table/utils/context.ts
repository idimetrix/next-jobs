import { createContext, HTMLAttributes } from "react"

const { Provider, Consumer } = createContext<{
  headers: Record<string, string>
  pivot?: HTMLAttributes<HTMLDivElement>
}>({
  headers: {},
  pivot: undefined,
})

export { Consumer, Provider }
