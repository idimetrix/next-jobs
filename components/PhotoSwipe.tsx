import PhotoSwipeLightbox from "photoswipe/lightbox"
import { HTMLAttributes, useEffect, useId } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const PhotoSwipe = ({ className, children, ...rest }: Props) => {
  const id = useId().replace(/:/g, "")

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + id,
      children: "a",
      pswpModule: () => import("photoswipe"),
      zoom: true,
      loop: true,
      showAnimationDuration: 200,
    })

    lightbox.init()

    return () => {
      lightbox.destroy()
    }
  }, [id])

  return (
    <div id={id} className={cn("transition-none duration-0 transform-none", className)} {...rest}>
      {children}
    </div>
  )
}
