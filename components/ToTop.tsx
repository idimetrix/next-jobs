"use client";

import { faTriangle } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HTMLAttributes, useCallback, useEffect, useRef } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  offset?: number
  behavior?: ScrollBehavior
  innerColor?: string
  outerColor?: string
}

export function ToTop({
  offset = 50,
  behavior = "smooth",
  innerColor = "#4680ff",
  outerColor = "#fff",
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const path = useRef<SVGPathElement | null>(null)

  const handleClick = useCallback(() => {
    window.document.scrollingElement?.scrollTo({
      top: 0,
      left: 0,
      behavior,
    })
  }, [behavior])

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !path.current) return

      const progress = window.scrollY / (window.document.body.scrollHeight - window.innerHeight)

      path.current.style.strokeDashoffset = `${307.919 * Math.abs(1 - progress)}`

      if (window.scrollY > offset) {
        ref.current.classList.add("active")
      } else {
        ref.current.classList.remove("active")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [offset])

  return (
    <button
      aria-label="To Top"
      ref={ref}
      style={{
        "--toTopInnerColor": innerColor,
        "--toTopOuterColor": outerColor,
      }}
      className={cn("to-top z-30", "", className)}
      onClick={handleClick}
      {...rest}
    >
      <svg width="100%" className="circle" height="100%" viewBox="-1 -1 102 102">
        <path ref={path} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="fill-blue1 absolute flex size-full items-center justify-center">
        <FontAwesomeIcon icon={faTriangle} className="size-4" />
      </div>
    </button>
  )
}
