"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb"
import { SystemMetricsView } from "@/components/system-metrics-view"

export default function MetricsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <DynamicBreadcrumb />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">System Metrics</h1>
            <p className="text-muted-foreground">
              Monitor your organization's services and network performance.
            </p>
          </div>
          <SystemMetricsView />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
