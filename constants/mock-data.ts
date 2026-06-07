// Mock data for dashboard sections

export const mockNews = [
  {
    id: 1,
    title: "Q1 Performance Review Meeting Scheduled",
    content: "The quarterly performance review meetings will be held from 15th to 20th of this month.",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    category: "General",
  },
  {
    id: 2,
    title: "New CRM System Launch",
    content: "Our new CRM system will go live next week. Please attend the training sessions.",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    category: "Systems",
  },
  {
    id: 3,
    title: "Company Outing Announced",
    content: "Annual company outing has been scheduled for the third weekend of next month.",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    category: "Events",
  },
]

export const mockNotices = [
  {
    id: 1,
    title: "Workplace Safety Guidelines",
    content: "All employees must comply with the updated workplace safety guidelines effective immediately.",
    issuedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    priority: "High",
  },
  {
    id: 2,
    title: "Revised Work From Home Policy",
    content: "Effective from next month, WFH policy has been revised. Please refer to the notice board.",
    issuedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    priority: "Medium",
  },
]

export const mockActivities = [
  {
    id: 1,
    title: "Team Meeting - Engineering",
    date: new Date(),
    participant: "Engineering Team",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Project Kickoff - Mobile App",
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    participant: "Mobile Development Team",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    participant: "Sales & Marketing",
    status: "Completed",
  },
]

export const mockEvents = [
  {
    id: 1,
    title: "Annual Tech Conference",
    date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    location: "Convention Center",
    attendees: 250,
  },
  {
    id: 2,
    title: "Team Building Activity",
    date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
    location: "Adventure Park",
    attendees: 45,
  },
  {
    id: 3,
    title: "Quarterly Awards Ceremony",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    location: "Main Auditorium",
    attendees: 150,
  },
]

export const mockBirthdays = [
  {
    id: 1,
    name: "Rajesh Kumar",
    department: "Engineering",
    date: "15-06",
    daysUntil: 8,
  },
  {
    id: 2,
    name: "Priya Singh",
    department: "HR",
    date: "18-06",
    daysUntil: 11,
  },
  {
    id: 3,
    name: "Amit Patel",
    department: "Finance",
    date: "22-06",
    daysUntil: 15,
  },
]

export const mockTasks = [
  {
    id: 1,
    title: "Complete Q2 Budget Review",
    assignee: "Finance Team",
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    priority: "High",
    status: "In Progress",
    completion: 65,
  },
  {
    id: 2,
    title: "Update Documentation",
    assignee: "Technical Writers",
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    priority: "Medium",
    status: "Pending",
    completion: 0,
  },
  {
    id: 3,
    title: "Client Deliverable - Phase 1",
    assignee: "Development Team",
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    priority: "High",
    status: "In Progress",
    completion: 85,
  },
]

export const mockDocuments = [
  {
    id: 1,
    title: "Leave Approval - John Doe",
    type: "Leave Request",
    submittedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "Approved",
    approvedBy: "HR Manager",
  },
  {
    id: 2,
    title: "Purchase Order - Office Supplies",
    type: "Purchase Request",
    submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    status: "Approved",
    approvedBy: "Finance Manager",
  },
  {
    id: 3,
    title: "Travel Request - Conference",
    type: "Travel Request",
    submittedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "Approved",
    approvedBy: "Department Head",
  },
]

export const mockNotifications = [
  {
    id: 1,
    title: "Your Leave Request has been Approved",
    message: "Your leave request for 15-17 June has been approved.",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 2,
    title: "New Project Assigned",
    message: "You have been assigned to the Mobile App Redesign project.",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: 3,
    title: "System Maintenance Scheduled",
    message: "System maintenance will be performed on 25th June from 10 PM - 12 AM.",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    read: true,
  },
]

export const mockServiceMetrics = {
  crm: {
    name: "CRM System",
    status: "Operational",
    uptime: "99.8%",
    responseTime: "245ms",
    lastUpdate: new Date(Date.now() - 5 * 60 * 1000),
    users: 125,
  },
  erp: {
    name: "ERP System",
    status: "Operational",
    uptime: "99.5%",
    responseTime: "312ms",
    lastUpdate: new Date(Date.now() - 3 * 60 * 1000),
    users: 89,
  },
  email: {
    name: "Email Server",
    status: "Operational",
    uptime: "100%",
    responseTime: "120ms",
    lastUpdate: new Date(Date.now() - 1 * 60 * 1000),
    users: 200,
  },
  fileServer: {
    name: "File Server",
    status: "Operational",
    uptime: "99.9%",
    responseTime: "180ms",
    lastUpdate: new Date(Date.now() - 2 * 60 * 1000),
    users: 180,
  },
}

export const mockSystemMetrics = {
  internetSpeed: {
    download: 85.5, // Mbps
    upload: 42.3, // Mbps
    ping: 12, // ms
    lastMeasured: new Date(Date.now() - 10 * 60 * 1000),
  },
  serverPing: {
    localServer: 2, // ms
    primaryServer: 15, // ms
    backupServer: 18, // ms
    status: "All Healthy",
  },
  systemHealth: {
    cpuUsage: 45,
    memoryUsage: 62,
    diskUsage: 55,
    networkUtilization: 38,
  },
}
