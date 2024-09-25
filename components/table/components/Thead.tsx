import { cloneElement, FC, HTMLAttributes, ReactElement } from "react"

interface Props extends HTMLAttributes<HTMLTableSectionElement> {}

export const Thead: FC<Props> = ({ children, ...rest }) => {
  return (
    <thead data-testid="thead" {...rest}>
      {cloneElement(children as ReactElement, { inside: true })}
    </thead>
  )
}
