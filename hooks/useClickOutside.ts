import { MutableRefObject, useEffect } from "react"

export function useClickOutside(
  elementReference: MutableRefObject<HTMLElement | null>,
  callback: (event: MouseEvent) => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (elementReference?.current && !elementReference.current.contains(event.target as Node | null)) {
        callback(event)
      }
    }

    document.addEventListener("click", handleClickOutside, true)

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [elementReference, callback])
}
