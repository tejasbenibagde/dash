"use client"

import { SectionPage } from "@/components/section-page"
import { mockNews } from "@/constants/mock-data"
import { IconCalendar } from "@tabler/icons-react"

export default function NewsPage() {
  return (
    <SectionPage
      title="News & Updates"
      description="Stay updated with the latest news and announcements from the organization."
    >
      <div className="grid gap-4">
        {mockNews.map((news) => (
          <div key={news.id} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg">{news.title}</h3>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                {news.category}
              </span>
            </div>
            <p className="text-muted-foreground mb-3">{news.content}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <IconCalendar className="size-3" />
              {news.date.toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
