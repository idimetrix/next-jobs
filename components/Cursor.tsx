import { useEffect, useRef } from "react"

export function Cursor() {
  const cursorOuter = useRef<HTMLDivElement | null>(null)
  const cursorInner = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cursorOuter.current || !cursorInner.current) return
      cursorOuter.current.style.transform = "translate(" + event.clientX + "px, " + event.clientY + "px)"
      cursorInner.current.style.transform = "translate(" + event.clientX + "px, " + event.clientY + "px)"

      const [element]: HTMLElement[] = document
        .elementsFromPoint(event.clientX, event.clientY)
        .filter((element) => element.classList.contains("pointer")) as HTMLElement[]

      if (element) {
        cursorOuter.current.classList.add("cursor-laser")
        cursorInner.current.classList.add("cursor-laser")
      } else {
        cursorOuter.current.classList.remove("cursor-laser")
        cursorInner.current.classList.remove("cursor-laser")
      }
    }
    const handleMouseEnter = (event: MouseEvent) => {
      if (!cursorOuter.current || !cursorInner.current) return

      const element = event.target as HTMLElement

      if (
        (["A", "BUTTON"].includes(element.tagName) || element.classList.contains("cursor-pointer")) &&
        !(element as HTMLButtonElement).disabled
      ) {
        cursorOuter.current.classList.add("cursor-hover")
        cursorInner.current.classList.add("cursor-hover")
      }
    }
    const handleMouseLeave = (event: MouseEvent) => {
      if (!cursorOuter.current || !cursorInner.current) return

      const element = event.target as HTMLElement

      if (
        (["A", "BUTTON"].includes(element.tagName) || element.closest(".cursor-pointer")) &&
        !(element as HTMLButtonElement).disabled
      ) {
        cursorOuter.current.classList.remove("cursor-hover")
        cursorInner.current.classList.remove("cursor-hover")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseenter", handleMouseEnter, {
      capture: true,
    })
    document.body.addEventListener("mouseleave", handleMouseLeave, {
      capture: true,
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div ref={cursorOuter} className="mouse-cursor cursor-outer select-none" />
      <div ref={cursorInner} className="mouse-cursor cursor-inner select-none" />
    </>
  )
}
