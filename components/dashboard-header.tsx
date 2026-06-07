"use client"

import { useState, useEffect } from "react"
import { getCurrentFY, getCurrentDateTime } from "@/lib/date-utils"
import { IconClock, IconCalendar } from "@tabler/icons-react"

export function DashboardHeader() {
  const [dateTime, setDateTime] = useState<string>("")
  const [fy, setFY] = useState<string>("")

  useEffect(() => {
    setDateTime(getCurrentDateTime())
    setFY(getCurrentFY())

    // Update time every second
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's your organizational overview.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:items-end">
        <div className="flex items-center gap-2 text-sm">
          <IconCalendar className="size-4 text-primary" />
          <span className="font-semibold">FY: {fy}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <IconClock className="size-4" />
          <span>{dateTime}</span>
        </div>
      </div>
    </div>
  )
}
