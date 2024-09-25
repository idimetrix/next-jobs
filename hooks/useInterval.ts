import { useCallback, useEffect, useMemo, useRef } from "react"

export function useInterval(callback: () => void, delay: number) {
  const callbackReference = useRef(callback)
  const timeoutReference = useRef()

  useEffect((): void => {
    callbackReference.current = callback
  }, [callback])

  const set = useCallback((): void => {
    timeoutReference.current = setInterval(() => callbackReference.current(), delay) as any
  }, [delay])

  const clear = useCallback((): void => {
    if (timeoutReference.current) {
      clearInterval(timeoutReference.current)
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
