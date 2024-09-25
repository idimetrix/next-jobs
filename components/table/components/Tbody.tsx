import { FC, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLTableSectionElement> {}

export const Tbody: FC<Props> = ({ children, ...rest }) => {
  return (
    <tbody data-testid="tbody" {...rest}>
      {children}
    </tbody>
  )
}
