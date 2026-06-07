"use client"

import { SectionPage } from "@/components/section-page"
import { mockBirthdays } from "@/constants/mock-data"
import { IconCake } from "@tabler/icons-react"

export default function BirthdaysPage() {
  return (
    <SectionPage
      title="Birthdays"
      description="Celebrate your teammates' special days!"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockBirthdays.map((birthday) => (
          <div key={birthday.id} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold">{birthday.name}</h3>
                <p className="text-sm text-muted-foreground">{birthday.department}</p>
              </div>
              <IconCake className="size-5 text-orange-500" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{birthday.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Days until:</span>
                <span className="font-medium text-primary">{birthday.daysUntil} days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
