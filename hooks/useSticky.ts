import debounce from "lodash/debounce"
import { useEffect, useMemo, useState } from "react"

export const useSticky = ({ offset = 0 }: { offset?: number } = {}) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleStickyNavbar = () => {
      if (!sticky) {
        setSticky(window.scrollY > offset)
      } else if (window.scrollY === 0) {
        setSticky(false)
      }
    }

    const handler = debounce(handleStickyNavbar, 0)

    handler()

    window.addEventListener("scroll", handler)

    return () => window.removeEventListener("scroll", handler)
  }, [sticky, offset])

  return useMemo(() => ({ sticky, setSticky }), [sticky])
}
