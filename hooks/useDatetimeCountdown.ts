import { useCallback, useEffect, useState } from "react"
import { useIsMounted } from "./useIsMounted"

type UseCountdown = {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}

export const useDatetimeCountdown = (endDate: Date): UseCountdown => {
  const isMounted = useIsMounted()

  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(endDate) - +new Date()

    if (isMounted && difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      return {
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      }
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }, [isMounted, endDate])

  const [timeLeft, setTimeLeft] = useState<UseCountdown>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft, endDate])

  return timeLeft
}
