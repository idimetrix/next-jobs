import { HTMLAttributes } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  nonce?: string
  loaded?: boolean
}

export function Preloader({ nonce, loaded, className, ...rest }: Props) {
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
          border-color: #3656ff;
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
