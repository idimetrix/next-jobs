import { FC, HTMLAttributes, useCallback } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  color: string
  name: string
  value: string
}

export const Color: FC<Props> = ({ color, name, value, className, ...rest }: Props) => {
  const handleCopy = useCallback((value: string) => () => {}, [])

  return (
    <div className={cn("flex flex-col items-start overflow-hidden text-xs", className)} {...rest}>
      <button
        onClick={handleCopy(color)}
        title={color}
        className={cn("mb-1.5 h-10 w-20 rounded dark:ring-1 dark:ring-inset dark:ring-white/10")}
        style={{ background: color }}
      ></button>
      <button
        className="cursor-pointer text-slate-900 hover:underline dark:text-white"
        onClick={handleCopy(`${name}-${value}`)}
      >{`${value}`}</button>
      <button className="cursor-pointer text-slate-500 hover:underline dark:text-slate-400" onClick={handleCopy(color)}>
        {color}
      </button>
    </div>
  )
}
