import { Montserrat } from "next/font/google"
import { cn } from "../utils"
import "styles/tailwind.css"

const font = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(font.className, "")}>{children}</body>
    </html>
  )
}
