import { Metadata } from "next"
import { Card } from "../../../components/Card"
import { Headline } from "../../../elements/Headline"

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
      <Headline title="Breadcrumbs">
        Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
      </Headline>

      <Card>Breadcrumbs</Card>
    </section>
  )
}
