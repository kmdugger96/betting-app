"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DashboardHeader } from "../dashboard/_components/dashboard-header"
import { DashboardShell } from "../dashboard/_components/dashboard-shell"

export default async function ChatPage() {
  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Chat Groups"
        text="Join discussions with fellow bettors."
      >
        <Button>New Group</Button>
      </DashboardHeader>

      <div className="grid gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">No chat groups</h3>
              <p className="text-sm text-muted-foreground">
                Create or join a group to start chatting
              </p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardShell>
  )
} 