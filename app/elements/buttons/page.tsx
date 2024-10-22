import { Metadata } from "next"
import { Button } from "../../../components/Button"
import { Card } from "../../../components/Card"
import { Headline } from "../../../elements/Headline"
import { BUTTON_VARIANTS } from "../../../enums"

export const metadata: Metadata = {
  title: "",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "",
    images: [
      {
        width: 1200,
        height: 630,
        url: "",
      },
    ],
  },
}

export default function Page() {
  return (
    <section className="flex w-full flex-col gap-6">
      <Headline title="Buttons">
        Use button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
      </Headline>

      <div className="flex gap-6">
        <Card header="Default">
          <div className="flex flex-wrap gap-3">
            {Object.entries(BUTTON_VARIANTS).map(([key, value]) => (
              <Button className="text-sm capitalize" key={key} variant={value}>
                {value}
              </Button>
            ))}

            <Button className="w-full text-sm" variant="primary">
              Block Level Button
            </Button>
          </div>
        </Card>
        <Card header="Light">
          <div className="flex flex-wrap gap-3">
            {Object.entries(BUTTON_VARIANTS).map(([key, value]) => (
              <Button dark={false} className="text-sm capitalize" key={key} variant={value}>
                {value}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      <Card header="Outline">
        <div className="flex flex-wrap gap-3">
          {Object.entries(BUTTON_VARIANTS).map(([key, value]) => (
            <Button className="text-sm capitalize" key={key} variant={value} outline>
              {value}
            </Button>
          ))}
        </div>
      </Card>
    </section>
  )
}
