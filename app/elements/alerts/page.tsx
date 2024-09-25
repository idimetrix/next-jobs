import { Metadata } from "next"
import {Alert} from "../../../components/Alert";
import {Card} from "../../../components/Card";
import {Headline} from "../../../elements/Headline";
import {VARIANTS} from "../../../enums";
import Link from "next/link";

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
  return <section className="flex w-full gap-6 flex-col">
    <Headline title="Alerts">
      Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
    </Headline>

    <Card header="Basic Alerts">
      <div className="flex flex-col gap-3">
        {Object.entries(VARIANTS).map(([key, value]) => <Alert className="text-sm text-left" key={key} variant={value}>A simple {value} alert — check it out!</Alert>)}
      </div>
    </Card>

    <div className="flex gap-6">
      <Card header="Link Alerts">
        <div className="flex flex-col gap-3">
          {Object.entries(VARIANTS).map(([key, value]) => <Alert className="text-sm text-left" key={key} variant={value}>
            A simple primary alert with <Link className="font-bold hover:underline" href="#">an example link</Link>. Give it a click if you like.
          </Alert>)}
        </div>
      </Card>

      <Card header="Dismissing">
        <div className="flex flex-col gap-3">
          {Object.entries(VARIANTS).map(([key, value]) => <Alert className="text-sm text-left" key={key} variant={value}>You should check in on some of those fields below.</Alert>)}
        </div>
      </Card>
    </div>
  </section>
}
