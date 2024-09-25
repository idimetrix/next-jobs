import { faCaretRight } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Fragment, HTMLAttributes, ReactNode } from "react"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  breadcrumbs: Record<string, ReactNode>
}

export function Breadcrumbs({ breadcrumbs, className, ...rest }: Props) {
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5 2xs:gap-3", className)} {...rest}>
      {Object.entries(breadcrumbs).map(([key, value], index, array) => (
        <Fragment key={key}>
          {index < array.length - 1 ? (
            typeof value === "string" ? (
              <Link prefetch={false} aria-label={key} className="hover:text-nila-blue" href={value} target="_blank">
                {key}
              </Link>
            ) : (
              value
            )
          ) : (
            <span className="max-w-[168px] truncate opacity-80 md:max-w-md">{key}</span>
          )}
          {index < array.length - 1 && <FontAwesomeIcon icon={faCaretRight} className="size-3" />}
        </Fragment>
      ))}
    </div>
  )
}
