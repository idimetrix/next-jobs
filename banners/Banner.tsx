"use client"

import { FC, HTMLAttributes, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import {cn, wait} from "../utils"
import Image, { StaticImageData } from "next/image"
import * as htmlToImage from "html-to-image"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  image?: StaticImageData
  gradient?: string | null;
  header?: ReactNode
  footer?: ReactNode
}

export const Banner: FC<Props> = ({ image, gradient = "linear-gradient(231.05deg, rgba(0, 0, 0, 0) 0%, #000000 82.17%)", header, footer, className, children, ...rest }: Props) => {
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = useCallback(() => {
    //
  }, [])

  const handleDoubleClick = useCallback(async () => {
    if (!ref.current) return

    // ref.current.style.transform = 'scale(2)';
    //
    // await wait(500);

    const content = await htmlToImage.toPng(ref.current,{})

    // ref.current.style.transform = 'scale(1)';

    const link = document.createElement("a")
    link.download = `banner.png`
    link.href = content
    link.click()
    link.remove()
  }, [])

  return (
    <button
      ref={ref}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={cn("relative flex select-none overflow-hidden", className)}
      {...rest}
    >
      {image && <Image src={image} alt="" className="absolute left-0 top-0 size-full object-cover object-center" />}
      {gradient && <div style={{ background: gradient }} className="absolute inset-0 left-0 top-0" />}

      <div className="absolute inset-0 left-0 top-0">{children}</div>
    </button>
  )
}
