import { useEffect } from "react"

export function useUnload(message: string): void {
  useEffect(() => {
    const listener = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = message
      return message
    }

    window.addEventListener("beforeunload", listener)

    return () => {
      window.removeEventListener("beforeunload", listener)
    }
  }, [message])
}
