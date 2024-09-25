import { Metadata } from "next"
import {Headline} from "../../../elements/Headline";

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
  return <section className="">
    <Headline title="Buttons">
      Use button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
    </Headline>
  </section>
}
