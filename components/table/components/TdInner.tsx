import { FC, HTMLAttributes, TdHTMLAttributes } from "react"
import { cn } from "../../../utils"

interface Props extends Omit<TdHTMLAttributes<HTMLTableDataCellElement>, "data"> {
  data: {
    headers: Record<string, string>
    pivot?: HTMLAttributes<HTMLDivElement>
  }
  column?: string
}

export const TdInner: FC<Props> = ({ data, column, className, children, colSpan, ...rest }) => {
  if (colSpan) {
    return (
      <td data-testid="td" colSpan={colSpan} className={cn("", className)} {...rest}>
        {children}
      </td>
    )
  }

  return (
    <td data-testid="td" className={cn("pivoted", className)} {...rest}>
      <div data-testid="td-before" {...data.pivot} className={cn("tdBefore hidden", data.pivot?.className)}>
        {typeof column !== "undefined" && data.headers[column]}
      </div>
      {children ?? <div>&nbsp;</div>}
    </td>
  )
}
