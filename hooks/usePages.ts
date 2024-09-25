import { useRouter } from "next/router"
import { useMemo } from "react"

export const usePages = () => {
  const router = useRouter()

  return useMemo(() => {
    const pathname = router.pathname

    return {
      APPLY: !!pathname.match(/\/apply/),
      HIRE: !!pathname.match(/\/hire/),
    }
  }, [router.pathname])
}
