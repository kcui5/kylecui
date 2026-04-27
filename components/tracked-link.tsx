"use client"

import posthog from "posthog-js"
import type { AnchorHTMLAttributes } from "react"

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  destination: string
}

export function TrackedLink({
  destination,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        posthog.capture("external_link_clicked", { destination })
        onClick?.(event)
      }}
    />
  )
}
