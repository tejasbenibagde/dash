"use client"

import { SectionPage } from "@/components/section-page"

export default function CRMPage() {
  return (
    <SectionPage
      title="CRM System Status"
      description="Monitor your CRM system performance and metrics."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold mb-4">System Status</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status:</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-green-600">Operational</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Uptime:</span>
              <span className="font-medium">99.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Response Time:</span>
              <span className="font-medium">245ms</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold mb-4">Active Users</h3>
          <div className="text-4xl font-bold text-primary">125</div>
          <p className="text-sm text-muted-foreground mt-2">Currently using the system</p>
        </div>
      </div>
    </SectionPage>
  )
}
