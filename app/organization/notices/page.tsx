"use client"

import { SectionPage } from "@/components/section-page"
import { mockNotices } from "@/constants/mock-data"
import { IconAlertTriangle } from "@tabler/icons-react"

export default function NoticesPage() {
  return (
    <SectionPage
      title="Notices"
      description="Important notices and official announcements for all employees."
    >
      <div className="grid gap-4">
        {mockNotices.map((notice) => {
          const priorityColor =
            notice.priority === "High"
              ? "border-red-200 bg-red-50 dark:bg-red-950/20"
              : "border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20"
          const priorityBadgeColor =
            notice.priority === "High"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"

          return (
            <div
              key={notice.id}
              className={`rounded-lg border ${priorityColor} p-6`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{notice.title}</h3>
                <div className="flex items-center gap-2">
                  <IconAlertTriangle className="size-4" />
                  <span className={`px-2 py-1 text-xs font-medium rounded ${priorityBadgeColor}`}>
                    {notice.priority}
                  </span>
                </div>
              </div>
              <p className="text-foreground mb-3">{notice.content}</p>
              <p className="text-xs text-muted-foreground">
                Issued: {notice.issuedDate.toLocaleDateString()}
              </p>
            </div>
          )
        })}
      </div>
    </SectionPage>
  )
}
