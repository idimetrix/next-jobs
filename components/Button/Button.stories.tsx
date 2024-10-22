import type { Meta, StoryObj } from "@storybook/react"
import { BUTTON_VARIANTS } from "../../enums"
import { Button } from "."

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    variant: "primary",
    children: "Button",
  },
  argTypes: {
    variant: {
      options: Object.values(BUTTON_VARIANTS),
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export default meta
