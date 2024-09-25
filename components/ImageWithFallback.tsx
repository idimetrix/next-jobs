import { StaticImageData, StaticImport, StaticRequire } from "next/dist/shared/lib/get-img-props"
import Image, { ImageProps } from "next/image"
import { forwardRef, memo, useCallback, useMemo, useState } from "react"
import { cn } from "../utils"

const fallbackImage = "/placeholder-dark.jpg"

interface Props extends ImageProps {
  fallback?: ImageProps["src"]
  alternatives?: ImageProps["src"][]
  size?: number
}

const tryImage = (src: string | StaticImport) => {
  const image = document.createElement("img")
  const source = typeof src === "string" ? src : (src as StaticImageData).src || (src as StaticRequire).default.src

  return new Promise<void>((resolve, reject) => {
    image.onerror = () => {
      image.remove()
      reject()
    }
    image.onload = () => {
      image.remove()
      resolve()
    }
    image.src = source
  })
}

const tryImageViaFindAlternative = (
  src: string | StaticImport,
  alternatives: (string | StaticImport)[] = []
): Promise<string | StaticImport> => {
  const images = [src, ...alternatives]
  return new Promise((resolve, reject) => {
    ;(async function tryNext() {
      const image = images.shift()
      if (image) {
        try {
          await tryImage(image)
          resolve(image)
        } catch (error) {
          await tryNext()
        }
      } else {
        reject()
      }
    })()
  })
}

export const ImageWithFallback = memo(
  forwardRef<HTMLImageElement, Props>(function ImageWithFallback(
    {
      fallback = fallbackImage,
      size,
      width,
      height,
      alt,
      title,
      src,
      alternatives = [],
      unoptimized = true,
      className,
      ...rest
    }: Props,
    ref
  ) {
    const [ready, setReady] = useState(false)
    const [imageSrc, setImageSrc] = useState<string | StaticImport>(src)

    const onLoadingComplete = useCallback(
      async (img: HTMLImageElement) => {
        if ((img.naturalWidth && img.naturalHeight) || ready) {
          setReady(true)
          return
        }

        try {
          setImageSrc(await tryImageViaFindAlternative(src, alternatives))
        } catch (error) {
          setImageSrc(fallback)
        } finally {
          setReady(true)
        }
      },
      [alternatives, fallback, src, ready]
    )

    const style = useMemo(
      () =>
        size
          ? {
              width: `${size}px`,
              height: `${size}px`,
              minWidth: `${size}px`,
              minHeight: `${size}px`,
              maxWidth: `${size}px`,
              maxHeight: `${size}px`,
            }
          : {},
      [size]
    )

    return (
      <Image
        ref={ref}
        unoptimized={unoptimized}
        width={size ? size : width}
        height={size ? size : height}
        style={style}
        alt={alt}
        title={title || alt}
        onLoadingComplete={onLoadingComplete}
        src={imageSrc}
        className={cn(
          "flex h-full w-full select-none bg-transparent transition-all duration-300",
          "opacity-0 blur-sm",
          ready && "opacity-100 blur-none",
          className
        )}
        {...rest}
      />
    )
  }),
  (prevProps: Readonly<Props>, nextProps: Readonly<Props>) => {
    return (
      prevProps.src === nextProps.src && prevProps.width === nextProps.width && prevProps.height === nextProps.height
    )
  }
)
