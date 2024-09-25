import { useEffect, useState } from "react"

/**
 * Check if the user has interacted with the current page.
 *
 * The user interaction is identified by any mouse move (or touch, for mobile devices).
 *
 * @returns A boolean indicating whether the user has interacted with the page (`true`) or not (`false`).
 */
export function useInteraction() {
  const [interaction, setInteraction] = useState(false)

  useEffect(() => {
    const handleMove = () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)

      setInteraction(true)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchmove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
    }
  }, [])

  return interaction
}
