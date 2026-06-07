"use client"

import Link from "next/link"
import { IconArrowRight, IconAlertCircle, IconCircleCheck, IconFileText, IconCalendarEvent, IconUsers, IconBell, IconClipboardList, IconTrendingUp } from "@tabler/icons-react"
import { mockNews, mockTasks, mockBirthdays, mockEvents, mockNotifications, mockDocuments } from "@/constants/mock-data"

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* News & Updates */}
      <Link href="/organization/news" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">News & Updates</h3>
            <IconArrowRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">{mockNews.length}</div>
          <p className="text-xs text-muted-foreground">Latest: {mockNews[0]?.title}</p>
        </div>
      </Link>

      {/* Pending Tasks */}
      <Link href="/hr/tasks" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">Tasks</h3>
            <IconClipboardList className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">
            {mockTasks.filter((t) => t.status === "In Progress").length}
          </div>
          <p className="text-xs text-muted-foreground">In progress tasks</p>
        </div>
      </Link>

      {/* Notifications */}
      <Link href="/hr/notifications" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">Notifications</h3>
            <IconBell className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">
            {mockNotifications.filter((n) => !n.read).length}
          </div>
          <p className="text-xs text-muted-foreground">Unread notifications</p>
        </div>
      </Link>

      {/* Upcoming Events */}
      <Link href="/organization/events" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">Events</h3>
            <IconCalendarEvent className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">{mockEvents.length}</div>
          <p className="text-xs text-muted-foreground">Upcoming events</p>
        </div>
      </Link>

      {/* Approved Documents */}
      <Link href="/hr/documents" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">Approved Docs</h3>
            <IconFileText className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">{mockDocuments.length}</div>
          <p className="text-xs text-muted-foreground">Recent approvals</p>
        </div>
      </Link>

      {/* Upcoming Birthdays */}
      <Link href="/organization/birthdays" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">Birthdays</h3>
            <IconUsers className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">{mockBirthdays.length}</div>
          <p className="text-xs text-muted-foreground">Upcoming this month</p>
        </div>
      </Link>

      {/* System Metrics */}
      <Link href="/dashboard/metrics" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">System Metrics</h3>
            <IconTrendingUp className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-sm text-primary mb-2">All Systems Operational</div>
          <p className="text-xs text-muted-foreground">View services & network status</p>
        </div>
      </Link>

      {/* Activities */}
      <Link href="/organization/activities" className="group">
        <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold">Activities</h3>
            <IconCircleCheck className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div className="text-sm text-green-600 mb-2">Recent updates</div>
          <p className="text-xs text-muted-foreground">Across the organization</p>
        </div>
      </Link>
    </div>
  )
}
