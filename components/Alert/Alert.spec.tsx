import { render, screen } from "@testing-library/react"
import type { FC } from "react"
import type { AlertProps } from "./Alert"
import { Alert } from "./Alert"

describe("Components / Alert", () => {
  describe("A11y", () => {
    it('should have `role="alert"`', () => {
      render(<TestAlert />)

      expect(screen.getByRole("alert")).toBeInTheDocument()
    })
  })
})

const TestAlert: FC<AlertProps> = (props: AlertProps) => {
  return <Alert {...props}>Alert</Alert>
}
