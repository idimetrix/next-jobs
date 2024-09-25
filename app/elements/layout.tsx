import { ReactNode } from "react"
import { ElementsFooter } from "../../components/headers/ElementsFooter"
import { ElementsHeader } from "../../components/headers/ElementsHeader"
import { Navigations } from "../../elements/Navigations"

export default function ElementsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <ElementsHeader />

      <div className="container py-9">
        <div className="flex w-full gap-6">
          <Navigations className="max-w-xs" />
          {children}
        </div>
      </div>

      <ElementsFooter className="hidden" />
    </div>
  )
}
