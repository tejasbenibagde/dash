"use client"

import { SectionPage } from "@/components/section-page"
import { mockEvents } from "@/constants/mock-data"
import { IconMapPin, IconUsers } from "@tabler/icons-react"

export default function EventsPage() {
  return (
    <SectionPage
      title="Events"
      description="Upcoming company events and activities."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {mockEvents.map((event) => (
          <div key={event.id} className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <IconMapPin className="size-4" />
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <IconUsers className="size-4" />
                {event.attendees} attendees expected
              </div>
              <div className="pt-2 text-sm font-medium">
                {event.date.toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
