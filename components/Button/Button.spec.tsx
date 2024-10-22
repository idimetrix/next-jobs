import { render, screen } from "@testing-library/react"
import type { FC } from "react"
import type { ButtonProps } from "./Button"
import { Button } from "./Button"

describe("Components / Button", () => {
  describe("A11y", () => {
    it('should have `role="link"`', () => {
      render(<TestButton />)

      expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it('should have `role="button"`', () => {
      render(<TestButton href="#" />)

      expect(screen.getByRole("link")).toBeInTheDocument()
    })
  })
})

const TestButton: FC<ButtonProps> = (props: ButtonProps) => {
  return <Button {...props}>Button</Button>
}
