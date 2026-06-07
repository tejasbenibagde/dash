"use client"

import { SectionPage } from "@/components/section-page"
import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"

export default function OtherServicesPage() {
  const services = [
    { name: "Email Server", status: "Operational", uptime: "100%", users: 200 },
    { name: "File Server", status: "Operational", uptime: "99.9%", users: 180 },
  ]

  return (
    <SectionPage
      title="Other Services"
      description="Status and metrics for other organizational services."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.name} href="#">
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold">{service.name}</h3>
                <IconArrowRight className="size-4 text-muted-foreground" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status:</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="font-medium text-green-600">{service.status}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime:</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Users:</span>
                  <span className="font-medium">{service.users}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionPage>
  )
}
