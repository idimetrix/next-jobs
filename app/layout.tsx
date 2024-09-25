import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { ThemeProvider } from "../providers/theme"
import { cn } from "../utils"
import "styles/styles.css"
import {HAS_CALL2ACTION, HAS_CURSOR, HAS_PRELOADER, HAS_TOTOP} from "../constants";
import {Cursor} from "../components/Cursor";
import {ToTop} from "../components/ToTop";
import {Call2Action} from "../components/Call2Action";
import { ClerkProvider } from '@clerk/nextjs'
import {Preloader} from "../components/Preloader";
// import {usePathname} from "next/navigation";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  // const pathname = usePathname()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "group/page relative min-h-screen", "flex w-full flex-col")}>
        {HAS_PRELOADER && <Preloader />}

        <ClerkProvider
          // afterSignInUrl={pathname}
          // signInForceRedirectUrl={pathname}
          // signInFallbackRedirectUrl={pathname}
          // afterSignUpUrl={pathname}
          // signUpForceRedirectUrl={pathname}
          // signUpFallbackRedirectUrl={pathname}
          // redirectUrl={pathname}
          // afterSignOutUrl={pathname}
          appearance={{
            elements: {
              headerTitle: "text-2xl",
              headerSubtitle: "text-xl",
              formFieldLabel: "text-base",
              formFieldAction: "text-base",
              footerActionText: "text-base",
              footerActionLink: "text-base",
              formButtonPrimary: "bg-blue1",
            },
          }}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {HAS_CURSOR && <Cursor />}

            {HAS_TOTOP && <ToTop />}

            {HAS_CALL2ACTION && <Call2Action />}

            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
