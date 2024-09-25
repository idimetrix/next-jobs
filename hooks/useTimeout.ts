import { useCallback, useEffect, useMemo, useRef } from "react"

export function useTimeout(callback: () => void, delay: number) {
  const callbackReference = useRef(callback)
  const timeoutReference = useRef()

  useEffect((): void => {
    callbackReference.current = callback
  }, [callback])

  const set = useCallback((): void => {
    timeoutReference.current = setTimeout(() => callbackReference.current(), delay) as any
  }, [delay])

  const clear = useCallback((): void => {
    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current)
    }
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback((): void => {
    clear()
    set()
  }, [clear, set])

  return useMemo(() => ({ reset, clear }), [reset, clear])
}
