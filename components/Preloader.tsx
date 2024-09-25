"use client"

import { HTMLAttributes, useEffect, useState } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  nonce?: string
}

export function Preloader({ nonce, className, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false)

  // const router = useRouter();
  //
  // useEffect(() => {
  //   let timer: ReturnType<typeof setTimeout>
  //
  //   const handleRouteStart = (url: string, options: any) => {
  //     console.log('!!!!!!!!! handleRouteStart', options)
  //
  //     if (!options.shallow) {
  //       clearTimeout(timer)
  //       setLoaded(false)
  //     }
  //   }
  //
  //   const handleRouteDone = (url: string, options: any) => {
  //     console.log('!!!!!!!!! handleRouteDone', options)
  //
  //     clearTimeout(timer)
  //     timer = setTimeout(() => {
  //       setLoaded(true)
  //     }, 200)
  //   }
  //
  //   const handleRouteError = (error: any, url: string, options: any) => {
  //     console.log('!!!!!!!!! handleRouteError', error, options)
  //
  //     clearTimeout(timer)
  //     timer = setTimeout(() => {
  //       setLoaded(true)
  //     }, 200)
  //   }
  //
  //   const popstateHandler = async () => {
  //     // console.log("!!!!!!!!! popstateHandler");
  //     //
  //     // clearTimeout(timer);
  //     // setLoaded(false);
  //   }
  //
  //   router.events.on('routeChangeStart', handleRouteStart)
  //   router.events.on('routeChangeComplete', handleRouteDone)
  //   router.events.on('routeChangeError', handleRouteError)
  //   window.addEventListener('popstate', popstateHandler)
  //
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteStart)
  //     router.events.off('routeChangeComplete', handleRouteDone)
  //     router.events.off('routeChangeError', handleRouteError)
  //     window.removeEventListener('popstate', popstateHandler)
  //
  //     clearTimeout(timer)
  //   }
  // }, [router.events])
  //
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoaded(true)
  //   }, 100)
  //
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center bg-black transition duration-100",
        loaded && "pointer-events-none opacity-0",
        className
      )}
      {...rest}
    >
      <style nonce={nonce} jsx>{`
        .loader {
          width: 48px;
          height: 48px;
          display: inline-block;
          position: relative;
        }
        .loader::after,
        .loader::before {
          content: "";
          width: 48px;
          height: 48px;
          border: 4px solid #ffffff;
          position: absolute;
          left: 0;
          top: 0;
          box-sizing: border-box;
          animation: rotation 2s ease-in-out infinite;
        }
        .loader::after {
          border-color: #4680ff;
          animation-delay: 1s;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      {/*<div className="glow" />*/}
      {!loaded && <div className="loader" />}
    </div>
  )
}
