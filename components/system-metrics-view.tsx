"use client"

import { mockServiceMetrics, mockSystemMetrics } from "@/constants/mock-data"
import { IconServer, IconWifi, IconCpu, IconTrendingUp } from "@tabler/icons-react"

export function SystemMetricsView() {
  return (
    <div className="space-y-6">
      {/* Service Status */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Service Status</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(mockServiceMetrics).map(([key, service]) => (
            <div key={key} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-green-600">
                    {service.status}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime:</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response:</span>
                  <span className="font-medium">{service.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Users:</span>
                  <span className="font-medium">{service.users}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Internet Speed */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <IconWifi className="size-5" />
            <h2 className="text-lg font-semibold">Internet Speed</h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Download</p>
                <p className="text-3xl font-bold">
                  {mockSystemMetrics.internetSpeed.download}
                  <span className="text-lg text-muted-foreground"> Mbps</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Upload</p>
                <p className="text-3xl font-bold">
                  {mockSystemMetrics.internetSpeed.upload}
                  <span className="text-lg text-muted-foreground"> Mbps</span>
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground mb-1">Ping Latency</p>
                <p className="text-3xl font-bold">
                  {mockSystemMetrics.internetSpeed.ping}
                  <span className="text-lg text-muted-foreground"> ms</span>
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Last measured: {new Date(
                mockSystemMetrics.internetSpeed.lastMeasured
              ).toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* Server Ping */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <IconServer className="size-5" />
            <h2 className="text-lg font-semibold">Server Status</h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Local Server</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Ping: {mockSystemMetrics.serverPing.localServer} ms
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Primary Server</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Ping: {mockSystemMetrics.serverPing.primaryServer} ms
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Backup Server</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Ping: {mockSystemMetrics.serverPing.backupServer} ms
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium text-green-600">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Health */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <IconCpu className="size-5" />
          <h2 className="text-lg font-semibold">System Health</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SystemHealthCard
            title="CPU Usage"
            value={mockSystemMetrics.systemHealth.cpuUsage}
            threshold={80}
          />
          <SystemHealthCard
            title="Memory Usage"
            value={mockSystemMetrics.systemHealth.memoryUsage}
            threshold={85}
          />
          <SystemHealthCard
            title="Disk Usage"
            value={mockSystemMetrics.systemHealth.diskUsage}
            threshold={90}
          />
          <SystemHealthCard
            title="Network Util."
            value={mockSystemMetrics.systemHealth.networkUtilization}
            threshold={75}
          />
        </div>
      </div>
    </div>
  )
}

interface SystemHealthCardProps {
  title: string
  value: number
  threshold: number
}

function SystemHealthCard({ title, value, threshold }: SystemHealthCardProps) {
  const isWarning = value > threshold
  const percentage = Math.round((value / 100) * 100)

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="text-sm font-medium mb-3">{title}</p>
      <div className="space-y-2">
        <div className="text-2xl font-bold">{value}%</div>
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <div
            className={`h-full transition-all ${
              isWarning ? "bg-orange-500" : "bg-green-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {isWarning ? "⚠️ High" : "✓ Normal"}
        </p>
      </div>
    </div>
  )
}
