import { CSSProperties, HTMLAttributes, memo, useEffect, useId, useRef } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  direction: "left" | "right" | "top" | "bottom"
  lockBackgroundScroll?: boolean
  enableOverlay?: boolean
  size?: number | string
  customIdSuffix?: string
  classNameOverlay?: string
  classNameContainer?: string
}

const getDirectionStyle = (dir: string, size?: number | string): CSSProperties => {
  switch (dir) {
    case "left":
      return {
        top: 0,
        left: 0,
        transform: "translate3d(-100%, 0, 0)",
        width: size,
        height: "100vh",
      }
    case "right":
      return {
        top: 0,
        right: 0,
        transform: "translate3d(100%, 0, 0)",
        width: size,
        height: "100vh",
      }
    case "bottom":
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translate3d(0, 100%, 0)",
        width: "100%",
        height: size,
      }
    case "top":
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: "translate3d(0, -100%, 0)",
        width: "100%",
        height: size,
      }

    default:
      return {}
  }
}

export const Drawer = memo<Props>(function Drawer({
  open,
  onClose = () => {},
  children,
  enableOverlay = true,
  direction,
  size = 250,
  className,
  style,
  customIdSuffix,
  lockBackgroundScroll = false,
  classNameOverlay = "",
  ...rest
}) {
  const id = useId().replace(/:/g, "")

  const bodyRef = useRef<HTMLBodyElement | null>(null)

  useEffect(() => {
    bodyRef.current = window.document.querySelector("body")

    if (bodyRef.current && lockBackgroundScroll) {
      bodyRef.current.style.overflow = open ? "hidden" : "auto"
    }
  }, [open, lockBackgroundScroll])

  return (
    <>
      <input
        aria-hidden={true}
        type="checkbox"
        id={id}
        className={cn("hidden")}
        onChange={onClose}
        checked={open}
        aria-label={open ? "Close drawer" : "Open drawer"}
      />
      <div
        role="navigation"
        style={{
          ...getDirectionStyle(direction, size),
          ...(open ? { transform: "translate3d(0, 0, 0)" } : {}),
          ...style,
        }}
        className={cn(
          "shadow-drawer invisible fixed z-50 bg-white transition-all duration-300",
          open && "visible",
          className
        )}
        {...rest}
      >
        {children}
      </div>
      {enableOverlay && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
          htmlFor={id}
          className={cn(
            "fixed left-0 top-0 z-40 hidden h-screen w-full bg-[rgba(5,16,54,.4)] opacity-0 transition-all duration-300",
            open && "block opacity-100",
            classNameOverlay
          )}
        />
      )}
    </>
  )
})
