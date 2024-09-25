import { RefObject, useEffect, useRef, useState } from "react"

interface Size {
  width: number
  height: number
}

export const useResizeObserver = <T extends HTMLElement>(): [RefObject<T>, Size] => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 })

  const observerRef = useRef<ResizeObserver | null>(null)
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setSize({ width, height })
      }
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return [elementRef, size]
}
