"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import data from "@/constants/data"

export function DynamicBreadcrumb() {
  const pathname = usePathname()

  // Find the matching breadcrumb from navigation data
  const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs: { title: string; href: string }[] = []

    for (const parent of data.navMain) {
      for (const item of parent.items) {
        if (item.url === segments.join("/")) {
          return [
            { title: parent.title, href: `/${parent.url}` },
            { title: item.title, href: `/${item.url}` },
          ]
        }
      }
    }

    return []
  }

  const breadcrumbs = getBreadcrumbs()

  if (breadcrumbs.length === 0) {
    return null
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-1.5">
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>
                  {crumb.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
