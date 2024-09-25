import { useEffect, useRef, useState } from "react"

interface UseTimer {
  readonly time: number
  readonly start: (reset: boolean) => void
  readonly stop: (reset: boolean) => void
  readonly reset: () => void
}

export function useTimer(autostart = true): UseTimer {
  const last = useRef<number>(0)
  const frame = useRef<number>(0)
  const [time, setTime] = useState(0)

  const animate = () => {
    frame.current = requestAnimationFrame(animate)

    const now = Date.now()

    setTime(now - last.current)
  }

  useEffect(() => {
    if (autostart) {
      frame.current = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(frame.current)
    }

    return () => cancelAnimationFrame(frame.current)
  }, [autostart])

  const start = (reset = false) => {
    if (reset) {
      setTime(0)
      last.current = Date.now()
    }
    frame.current = requestAnimationFrame(animate)
  }

  const stop = (reset = false) => {
    cancelAnimationFrame(frame.current)

    if (reset) {
      setTime(0)
    }
  }

  const reset = () => {
    setTime(0)
    last.current = Date.now()
  }

  return { time, start, stop, reset }
}
