"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { IconChevronRight } from "@tabler/icons-react"

export function BreadcrumbNav() {
  const pathname = usePathname()

  // Remove leading slash and split into segments
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) return null

  // Convert URL segments to readable breadcrumb titles
  const breadcrumbs = segments.map((segment, index) => {
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    const href = "/" + segments.slice(0, index + 1).join("/")

    return { label, href }
  })

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <IconChevronRight className="size-4" />
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-foreground transition-colors">
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
