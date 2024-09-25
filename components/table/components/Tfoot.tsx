import { cloneElement, FC, HTMLAttributes, ReactElement } from "react"

interface Props extends HTMLAttributes<HTMLTableSectionElement> {}

export const Tfoot: FC<Props> = ({ children, ...rest }) => {
  return (
    <tfoot data-testid="tfoot" {...rest}>
      {cloneElement(children as ReactElement, { inside: true })}
    </tfoot>
  )
}
