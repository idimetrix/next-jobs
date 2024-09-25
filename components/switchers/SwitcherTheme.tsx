"use client"

import { useTheme } from "next-themes"
import { FC, HTMLAttributes, useEffect, useState } from "react"
import { HiOutlineMoon as MoonIcon, HiOutlineSun as SunIcon } from "react-icons/hi"
import { cn } from "../../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SwitcherTheme: FC<Props> = ({ className, ...rest }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => setMounted(true), [])

  if (!mounted) return <>...</>

  return (
    <div className={cn("cursor-pointer", className)} {...rest}>
      {currentTheme === "dark" && <SunIcon className="size-6" onClick={() => setTheme("light")} />}
      {currentTheme === "light" && <MoonIcon className="size-6 text-gray-900" onClick={() => setTheme("dark")} />}
    </div>
  )
}
