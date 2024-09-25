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
      <Headline title="Badges">Documentation and examples for badges, our small count and labeling component.</Headline>

      <Card>Badges</Card>
    </section>
  )
}
