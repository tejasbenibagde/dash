"use client"

import { SectionPage } from "@/components/section-page"
import { mockDocuments } from "@/constants/mock-data"
import { IconCircleCheck } from "@tabler/icons-react"

export default function DocumentsPage() {
  return (
    <SectionPage
      title="Approved Documents"
      description="View all approved documents and submissions."
    >
      <div className="grid gap-4">
        {mockDocuments.map((doc) => (
          <div key={doc.id} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">{doc.title}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded inline-block mt-2">
                  {doc.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <IconCircleCheck className="size-5" />
                <span className="text-sm font-medium">Approved</span>
              </div>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>Submitted: {doc.submittedDate.toLocaleDateString()}</div>
              <div>Approved by: {doc.approvedBy}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  )
}
