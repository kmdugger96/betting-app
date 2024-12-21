"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getUserAction } from "@/actions/db/users-actions"
import { DashboardHeader } from "./_components/dashboard-header"
import { DashboardShell } from "./_components/dashboard-shell"
import { BettingOverview } from "./_components/betting-overview"
import { RecentBets } from "./_components/recent-bets"
import { PopularBets } from "./_components/popular-bets"

export default async function DashboardPage() {
  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  const { data: user } = await getUserAction(userId)
  if (!user) redirect("/sign-in")

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="View your betting analytics and insights."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <BettingOverview className="col-span-4" />
        <div className="col-span-3">
          <div className="grid gap-4">
            <RecentBets />
            <PopularBets />
          </div>
        </div>
      </div>
    </DashboardShell>
  )
} 