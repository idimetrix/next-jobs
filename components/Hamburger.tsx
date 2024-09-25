import { HTMLAttributes, useMemo } from "react"
import { useMenuStore } from "../stores/menu"
import { cn } from "../utils"

type Props = HTMLAttributes<HTMLButtonElement> & { sticky?: boolean }

export function Hamburger({ sticky, className, ...rest }: Props) {
  const menuStore = useMenuStore()

  const color = useMemo(() => {
    if (!sticky || menuStore.active) return "bg-white"
    return "bg-white"
  }, [menuStore.active, sticky])

  return (
    <button
      aria-label="Menu"
      className={cn("group relative flex", className)}
      onClick={() => menuStore.setActive(!menuStore.active)}
      {...rest}
    >
      <div className="relative flex size-[50px] items-center justify-center overflow-hidden rounded-full transition-all duration-200">
        <div className="flex h-[20px] w-[24px] origin-center flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={cn(
              "h-[2px] w-10 origin-left transition-all duration-300 transform",
              color,
              menuStore.active && "translate-x-10"
            )}
          />
          <div
            className={cn(
              "h-[2px] w-10 rounded transition-all delay-75 duration-300 transform",
              color,
              menuStore.active && "translate-x-10"
            )}
          />
          <div
            className={cn(
              "h-[2px] w-10 origin-left transition-all delay-150 duration-300 transform",
              color,
              menuStore.active && "translate-x-10"
            )}
          />
          <div
            className={cn(
              "absolute top-2.5 flex w-0 items-center justify-between transition-all duration-300 -translate-x-10 transform",
              menuStore.active && "w-12 translate-x-0"
            )}
          >
            <div
              className={cn(
                "absolute h-[2px] w-6 transition-all delay-300 duration-300 rotate-0 transform",
                color,
                menuStore.active && "rotate-45"
              )}
            />
            <div
              className={cn(
                "absolute h-[2px] w-6 transition-all delay-300 duration-300 -rotate-0 transform",
                color,
                menuStore.active && "-rotate-45"
              )}
            />
          </div>
        </div>
      </div>
    </button>
  )
}
