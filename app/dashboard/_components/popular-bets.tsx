"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PopularBets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Bets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">No popular bets</p>
              <p className="text-sm text-muted-foreground">
                Popular bets will appear here
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 