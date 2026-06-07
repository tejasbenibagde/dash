"use client"

import { SectionPage } from "@/components/section-page"
import { mockActivities } from "@/constants/mock-data"
import { IconCircleCheck } from "@tabler/icons-react"

export default function ActivitiesPage() {
  const statusColors = {
    Completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Ongoing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Scheduled: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  }

  return (
    <SectionPage
      title="Activities"
      description="Track ongoing and completed organizational activities."
    >
      <div className="grid gap-4">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg">{activity.title}</h3>
              <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[activity.status as keyof typeof statusColors]}`}>
                {activity.status}
              </span>
            </div>
            <p className="text-muted-foreground mb-3">{activity.participant}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <IconCircleCheck className="size-3" />
              {activity.date.toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
