import { Children, cloneElement, FC, HTMLAttributes, ReactElement } from "react"

interface Props extends HTMLAttributes<HTMLTableRowElement> {
  data: {
    headers: Record<string, string>
    pivot?: HTMLAttributes<HTMLDivElement>
  }
  inside?: boolean
}

export const TrInner: FC<Props> = ({ children, data, inside, ...rest }) => {
  if (data.headers && inside) {
    Children.forEach(children, (child, i) => {
      if (child) {
        data.headers[i] = (child as ReactElement).props.children
      }
    })
  }

  return (
    <tr data-testid="tr" {...rest}>
      {children &&
        Children.map(children, (child, i) =>
          child
            ? cloneElement(child as ReactElement, {
                key: i,
                column: i,
              })
            : null
        )}
    </tr>
  )
}
