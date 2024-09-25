import { FC, HTMLAttributes } from "react"
import { cn } from "../../../utils"

interface Props extends HTMLAttributes<HTMLTableHeaderCellElement> {}

export const Th: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <th data-testid="th" className={cn("border-border border px-2", className)} {...rest}>
      {children}
    </th>
  )
}
