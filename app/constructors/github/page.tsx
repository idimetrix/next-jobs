import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Metadata } from "next"
import { Banner } from "../../../banners/Banner"
import {ArrowRightTop, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Logotype} from "../../../components/icons"
import Bg1 from "../../../public/backgrounds/bg1.jpeg"
import Bg2 from "../../../public/backgrounds/bg2.jpeg"
import Bg3 from "../../../public/backgrounds/bg3.jpeg"
import Bg4 from "../../../public/backgrounds/bg4.jpeg"
import Bg5 from "../../../public/backgrounds/bg5.jpeg"

const socials: Record<string, IconProp> = {
  'Linked In': faLinkedin,
  'Twitter': faTwitterSquare,
  'Github': faGithubSquare,
}

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
    <section className="flex min-h-screen w-full justify-center bg-white py-6">
      <div
          className="flex min-h-screen w-full flex-col gap-3 max-w-[896px] flex-col rounded-md border border-[#d1d9e0] bg-white p-6 text-black">
        <Banner className="h-[274px] w-full rounded-2xl text-white" image={Bg1}>
          <div className="absolute inset-x-6 top-6 flex items-center justify-between">
            <Logotype className="text-4xl font-medium"/>

            <button className="rounded-md border-2 border-white px-3 py-0.5 text-sm font-medium uppercase">
              Get My Free Technical Consultation
            </button>
          </div>

          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-6 text-4xl font-bold uppercase">
                Dmitry Selikhov
                <ArrowRightTop className="text-3xl text-[#7D38F0]"/>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              {Object.entries(socials).map(([key, icon]) => (
                  <FontAwesomeIcon key={key} icon={icon} className="size-8"/>
              ))}
            </div>
          </div>
        </Banner>

        <div className="flex gap-3 w-full">
          <Banner className="w-1/3 aspect-square rounded-2xl text-white" image={Bg3}>
            <div className="absolute flex-col gap-3 p-12 inset-0 flex items-center justify-center">
              <div>
                <Icon1 className="size-20"/>
              </div>
              <div className="text-2xl font-bold">Proactivity</div>
              <div className="text-sm font-medium">
                We take the initiative and anticipate challenges before they arise.
              </div>


            </div>
          </Banner>

          <Banner className="w-1/3 aspect-square rounded-2xl text-white"
                  gradient={'linear-gradient(50.43deg, #130B3A 0%, #853CFF 100%)'}>
            <div className="absolute flex-col gap-3 p-12 inset-0 flex items-center justify-center">
              <div>
                <Icon2 className="size-20"/>
              </div>
              <div className="text-2xl font-bold">A Strong Team</div>
              <div className="text-sm font-medium">
                Our team is united by shared goals and dedication to excellence.
              </div>


            </div>
          </Banner>

          <Banner className="w-1/3 aspect-square rounded-2xl text-white" image={Bg4}>
            <div className="absolute flex-col gap-3 p-12 inset-0 flex items-center justify-center">
              <div>
                <Icon3 className="size-20"/>
              </div>
              <div className="text-2xl font-bold">Efficiency
                </div>
              <div className="text-sm font-medium">
                We strive for speed and precision in all our processes.
              </div>
            </div>
          </Banner>
        </div>

        <div className="flex gap-3 w-full">

          <Banner className="w-1/3 aspect-square rounded-2xl text-white"
                  gradient={'linear-gradient(50.43deg, #130B3A 0%, #853CFF 100%)'}>
            <div className="absolute flex-col gap-3 p-12 inset-0 flex items-center justify-center">
              <div>
                <Icon4 className="size-20"/>
              </div>
              <div className="text-2xl font-bold">Discipline
               </div>
              <div className="text-sm font-medium">
                We maintain a consistent and organized approach to every project.
              </div>


            </div>
          </Banner>
          <Banner className="w-1/3 aspect-square rounded-2xl text-white" image={Bg5}>
            <div className="absolute flex-col gap-3 p-12 inset-0 flex items-center justify-center">
              <div>
                <Icon5 className="size-20"/>
              </div>
              <div className="text-2xl font-bold">Belief in Success
                </div>
              <div className="text-sm font-medium">
                We are confident in achieving great results for both our clients and ourselves.
              </div>


            </div>
          </Banner>

          <Banner className="w-1/3 aspect-square rounded-2xl text-white"
                  gradient={'linear-gradient(50.43deg, #130B3A 0%, #853CFF 100%)'}>
            <div className="absolute flex-col gap-3 p-12 inset-0 flex items-center justify-center">
              <div>
                <Icon6 className="size-20"/>
              </div>
              <div className="text-2xl font-bold">Desire for Improvement
               </div>
              <div className="text-sm font-medium">
                We are always looking for ways to enhance our skills and the solutions we provide.
              </div>


            </div>
          </Banner>
        </div>
      </div>
    </section>
  )
}
