import { faCaretLeft } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { HTMLAttributes, useCallback } from "react"
import { cn } from "../utils"

type Props = HTMLAttributes<HTMLButtonElement>

export function GoBack({ children, className, ...rest }: Props) {
  const router = useRouter()

  const handleClick = useCallback(async () => {
    if (typeof window === "undefined") {
      router.back()
    } else {
      const referrer = window.document.referrer

      if (referrer && referrer.includes(window.location.host)) {
        await router.push(referrer)
      }
    }
  }, [router])

  return (
    <button
      aria-label="Go Back"
      onClick={handleClick}
      className={cn("group flex items-center gap-1 text-sm uppercase", className)}
      {...rest}
    >
      <FontAwesomeIcon icon={faCaretLeft} className="size-4 transition-all duration-300 group-hover:-translate-x-1" />
      {children || "Go Back"}
    </button>
  )
}
