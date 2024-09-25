import { useEffect, useMemo, useState } from "react"
import { decodeJSON } from "../utils"

export const useSessionStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    try {
      const value = sessionStorage.getItem(key)

      if (value) {
        return JSON.parse(value)
      } else {
        if (typeof defaultValue !== "undefined") {
          sessionStorage.setItem(key, JSON.stringify(defaultValue))
        }

        return defaultValue
      }
    } catch (error) {
      if (typeof defaultValue !== "undefined") {
        sessionStorage.setItem(key, JSON.stringify(defaultValue))
      }

      return defaultValue
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {}, 1000 / 5)

    const item = sessionStorage.getItem(key)

    if (JSON.stringify(value) !== item) {
      setValue(item !== null ? decodeJSON(item) : item)
    }

    return () => {
      clearInterval(interval)
    }
  }, [key, value])

  return useMemo(() => {
    const setStateValue = (valueOrFn: any) => {
      const newValue = typeof valueOrFn === "function" ? valueOrFn(value) : valueOrFn

      sessionStorage.setItem(key, JSON.stringify(newValue))

      setValue(newValue)
    }

    return [value, setStateValue]
  }, [key, value])
}
