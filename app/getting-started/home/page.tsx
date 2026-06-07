import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb"

export default function GettingStartedHomePage() {
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
            <h1 className="text-3xl font-bold">Getting Started - Home</h1>
            <p className="text-muted-foreground">
              Welcome to the Getting Started section! This is the home page for getting started with DASH.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-semibold mb-2">Introduction</h2>
              <p className="text-sm text-muted-foreground">
                Learn the basics and get up and running with DASH in minutes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-semibold mb-2">Quick Start</h2>
              <p className="text-sm text-muted-foreground">
                Follow our quick start guide to set up your first project.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-semibold mb-2">Documentation</h2>
              <p className="text-sm text-muted-foreground">
                Dive deeper into the comprehensive documentation available in the API Reference.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-semibold mb-2">Examples</h2>
              <p className="text-sm text-muted-foreground">
                Check out real-world examples and use cases.
              </p>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
