"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentBets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">No recent bets</p>
              <p className="text-sm text-muted-foreground">
                Your recent bets will appear here
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 