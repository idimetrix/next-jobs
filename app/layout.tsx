import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { ThemeProvider } from "../providers/theme"
import { cn } from "../utils"
import "styles/styles.css"

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
