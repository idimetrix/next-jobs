import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faBell,
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faTriangleExclamation,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Metadata } from "next"
import Link from "next/link"
import { Alert } from "../../../components/Alert"
import { Card } from "../../../components/Card"
import { Headline } from "../../../elements/Headline"
import { VARIANTS } from "../../../enums"

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

const Icons: Record<VARIANTS, IconProp> = {
  [VARIANTS.PRIMARY]: faCheck,
  [VARIANTS.SECONDARY]: faCheck,
  [VARIANTS.SUCCESS]: faCircleCheck,
  [VARIANTS.DANGER]: faCircleExclamation,
  [VARIANTS.WARNING]: faTriangleExclamation,
  [VARIANTS.INFO]: faCircleInfo,
  [VARIANTS.DARK]: faBell,
}

export default function Page() {
  return (
    <section className="flex w-full flex-col gap-6">
      <Headline title="Alerts">
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert
        messages.
      </Headline>

      <Card header="Basic Alerts">
        <div className="flex flex-col gap-3">
          {Object.entries(VARIANTS).map(([key, value]) => (
            <Alert className="text-left text-sm" key={key} variant={value}>
              A simple {value} alert — check it out!
            </Alert>
          ))}
        </div>
      </Card>

      <div className="flex gap-6">
        <Card header="Link Alerts">
          <div className="flex flex-col gap-3">
            {Object.entries(VARIANTS).map(([key, value]) => (
              <Alert className="text-left text-sm" key={key} variant={value}>
                A simple primary alert with{" "}
                <Link className="font-bold hover:underline" href="#">
                  an example link
                </Link>
                . Give it a click if you like.
              </Alert>
            ))}
          </div>
        </Card>

        <Card header="Dismissing">
          <div className="flex flex-col gap-3">
            {Object.entries(VARIANTS).map(([key, value]) => (
              <Alert className="text-left text-sm" key={key} variant={value}>
                You should check in on some of those fields below.
              </Alert>
            ))}
          </div>
        </Card>
      </div>

      <div className="flex gap-6">
        <Card header="Acon Alerts">
          <div className="flex flex-col gap-3">
            {Object.entries(VARIANTS).map(([key, value]) => (
              <Alert className="flex items-center gap-1.5 text-left text-sm" key={key} variant={value}>
                <FontAwesomeIcon icon={Icons[value]} className="size-6" /> An example {value} with an icon
              </Alert>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
