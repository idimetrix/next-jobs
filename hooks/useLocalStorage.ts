import { useEffect, useMemo, useState } from "react"
import { decodeJSON } from "../utils"

export const useLocalStorage = (key: string, defaultValue?: any): [any, (valueOrFn: any) => void] => {
  const [value, setValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)

      if (value) {
        return JSON.parse(value)
      } else {
        if (typeof defaultValue !== "undefined") {
          localStorage.setItem(key, JSON.stringify(defaultValue))
        }

        return defaultValue
      }
    } catch (error) {
      if (typeof defaultValue !== "undefined") {
        localStorage.setItem(key, JSON.stringify(defaultValue))
      }

      return defaultValue
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const item = localStorage.getItem(key)

      if (item !== null && item !== JSON.stringify(value)) {
        setValue(decodeJSON(item))
      }
    }, 1000 / 5)

    const item = localStorage.getItem(key)

    if (item !== null && item !== JSON.stringify(value)) {
      setValue(decodeJSON(item))
    }

    return () => {
      clearInterval(interval)
    }
  }, [key, value])

  return useMemo(() => {
    const setStateValue = (valueOrFn: any) => {
      const newValue = typeof valueOrFn === "function" ? valueOrFn(value) : valueOrFn

      localStorage.setItem(key, JSON.stringify(newValue))

      setValue(newValue)
    }

    return [value, setStateValue]
  }, [key, value])
}
