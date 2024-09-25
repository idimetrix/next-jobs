import { IframeHTMLAttributes, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "../utils"

interface Props extends IframeHTMLAttributes<HTMLIFrameElement> {
  border?: number
}

export const Frame = ({ border = 0, className, title, children, ...rest }: Props) => {
  const [ref, setRef] = useState<HTMLIFrameElement | null>(null)
  const [height, setHeight] = useState(0)

  const mountNode: HTMLBodyElement | undefined = ref?.contentWindow?.document?.body as HTMLBodyElement | undefined

  useEffect(() => {
    const interval = setInterval(() => {
      if (mountNode) {
        setHeight(mountNode.scrollHeight + border)
      }
    }, 1000 / 5)

    return () => {
      clearInterval(interval)
    }
  }, [mountNode, border])

  return (
    <iframe
      title={title}
      className={cn("m-0 w-full overflow-auto border-0 p-0", className)}
      {...rest}
      width="100%"
      height={`${height}px`}
      scrolling="no"
      frameBorder="0"
      ref={setRef}
    >
      {children && mountNode && createPortal(children as any, mountNode)}
    </iframe>
  )
}
