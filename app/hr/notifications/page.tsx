"use client"

import { SectionPage } from "@/components/section-page"
import { mockNotifications } from "@/constants/mock-data"
import { IconBell } from "@tabler/icons-react"

export default function NotificationsPage() {
  return (
    <SectionPage
      title="Notifications"
      description="All your recent notifications and updates."
    >
      <div className="grid gap-4">
        {mockNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`rounded-lg border ${
              !notif.read
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            } p-6`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold">{notif.title}</h3>
              <div className="flex items-center gap-2">
                {!notif.read && (
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                )}
                <IconBell className="size-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{notif.message}</p>
            <p className="text-xs text-muted-foreground">
              {notif.date.toLocaleDateString()} {notif.date.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
