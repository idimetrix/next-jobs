import { animated, AnimationProps, Spring } from "@react-spring/web"
import { CSSProperties, FC, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "../utils"

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: number
  styles?: CSSProperties
  configs?: AnimationProps["config"]
  comma?: boolean
  locale?: string
}

export const AnimatedNumber: FC<Props> = ({
  value,
  styles = {},
  configs,
  comma = true,
  locale,
  className,
  ...rest
}) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  const keyCount = useRef(0)

  const animationString = comma ? Math.abs(value).toLocaleString(locale || "en-US") : String(Math.abs(value))

  const valuesArr = Array.from(animationString, Number).map((x, idx) => (isNaN(x) ? animationString[idx] : x))

  const [numberHeight, setNumberHeight] = useState(0)

  const numberDivRef = useRef<HTMLDivElement | null>(null)

  const setConfig = useCallback((configs: any, number: number | string, index: number) => {
    if (typeof configs === "function") {
      return configs(number, index)
    }
    return configs ? configs[getRandomIntInclusive(0, configs.length - 1)] : undefined
  }, [])

  useEffect(() => {
    const height = numberDivRef.current?.getClientRects()?.[0]?.height || 0
    if (height) {
      setNumberHeight(height)
    }
  }, [value, styles])

  if (!numberHeight)
    return (
      <div ref={numberDivRef} style={styles} className={cn("absolute top-[-9999]", className)} {...rest}>
        {0}
      </div>
    )

  return (
    <div ref={ref} className={cn("animated-container flex", className)} {...rest}>
      {inView && value < 0 && <div style={styles}>-</div>}
      {inView &&
        valuesArr.map((n, index) => {
          if (typeof n === "string") {
            return (
              <div key={index} style={{ ...styles }}>
                {n}
              </div>
            )
          }

          return (
            <div
              key={index}
              style={{
                height: numberHeight,
                overflow: "hidden",
              }}
            >
              <Spring
                key={`${keyCount.current++}`}
                from={{
                  transform: "translateY(0px)",
                }}
                to={{
                  transform: `translateY(${-1 * (numberHeight * +valuesArr[index]) - numberHeight * 20})`,
                }}
                config={setConfig(configs, n, index)}
              >
                {(props) =>
                  NUMBERS.map((number, i) => (
                    <animated.div key={i} style={{ ...styles, ...props }}>
                      {number}
                    </animated.div>
                  )) as any
                }
              </Spring>
            </div>
          )
        })}
    </div>
  )
}
