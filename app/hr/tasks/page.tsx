"use client"

import { SectionPage } from "@/components/section-page"
import { mockTasks } from "@/constants/mock-data"

export default function TasksPage() {
  const priorityColors = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  }

  return (
    <SectionPage
      title="Tasks"
      description="Manage and track your ongoing tasks and assignments."
    >
      <div className="grid gap-4">
        {mockTasks.map((task) => (
          <div key={task.id} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <span className={`text-xs font-semibold ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                {task.priority}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{task.assignee}</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium">{task.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Due:</span>
                <span className="font-medium">{task.dueDate.toLocaleDateString()}</span>
              </div>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-full rounded-full transition-all"
                style={{ width: `${task.completion}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{task.completion}% complete</p>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
