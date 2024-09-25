import { forwardRef, HTMLAttributes, useState } from "react"
import { cn } from "../../../utils"
import { Provider } from "../utils"

interface Props extends HTMLAttributes<HTMLTableElement> {
  pivot?: HTMLAttributes<HTMLDivElement>
}

export const Table = forwardRef<HTMLTableElement, Props>(function Table({ pivot, children, className, ...rest }, ref) {
  const [headers, setHeaders] = useState<Record<string, string>>({})

  return (
    <Provider
      value={{
        headers,
        pivot,
      }}
    >
      <table
        data-testid="table"
        className={cn("responsive-table", "border-border w-full border-collapse border", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </table>
    </Provider>
  )
})
