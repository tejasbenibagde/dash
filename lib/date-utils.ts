/**
 * Get current Financial Year (April - March)
 * E.g., if current month is April 2024 or later, FY is 2024-25
 * If current month is March 2024 or earlier, FY is 2023-24
 */
export function getCurrentFY(): string {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth() // 0-indexed (January = 0)

  // Financial year starts in April (month = 3)
  if (currentMonth >= 3) {
    // April onwards in current year
    const startYear = currentYear
    const endYear = currentYear + 1
    return `${startYear}-${String(endYear).slice(-2)}`
  } else {
    // January to March in current year
    const startYear = currentYear - 1
    const endYear = currentYear
    return `${startYear}-${String(endYear).slice(-2)}`
  }
}

/**
 * Get current date and time in formatted string
 */
export function getCurrentDateTime(): string {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }
  return now.toLocaleDateString("en-IN", options)
}

/**
 * Get FY start and end dates
 */
export function getFYDateRange(): { start: Date; end: Date } {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()

  if (currentMonth >= 3) {
    return {
      start: new Date(currentYear, 3, 1), // April 1st of current year
      end: new Date(currentYear + 1, 2, 31), // March 31st of next year
    }
  } else {
    return {
      start: new Date(currentYear - 1, 3, 1), // April 1st of previous year
      end: new Date(currentYear, 2, 31), // March 31st of current year
    }
  }
}
