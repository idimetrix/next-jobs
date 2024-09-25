import { useEffect, useState } from "react"

export const useResize = () => {
  const [size, setSize] = useState<[number, number]>([0, 0])

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}
