import { useState, useEffect, useCallback, useMemo } from "react"
import { usePathname } from "next/navigation"

export const useHash = (): [string, (newHash?: string) => void] => {
  const pathname = usePathname()

  const [hash, setHash] = useState(() => pathname.split("#")[1] || "")

  useEffect(() => {
    const handler = () => {
      const newHash = window.location.hash.substr(1)

      if (newHash !== hash) setHash(newHash)
    }

    const interval = setInterval(handler, 250)

    window.addEventListener("hashchange", handler)

    return () => {
      clearInterval(interval)

      window.removeEventListener("hashchange", handler)
    }
  }, [hash])

  useEffect(() => {
    setHash(pathname.split("#")[1] || "")
  }, [pathname])

  const setNewHash = useCallback(
    (newHash: string = "") => {
      if (newHash !== hash) window.location.hash = newHash
    },
    [hash]
  )

  return useMemo(() => [hash, setNewHash], [hash, setNewHash])
}
