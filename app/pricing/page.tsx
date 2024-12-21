"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Check } from "lucide-react"

export default async function PricingPage() {
  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Free Tier */}
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Essential features to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$0</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Basic betting analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Limited chat access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Basic fantasy insights</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        {/* Paid Tier */}
        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>Advanced features for serious bettors.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$19.99</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Advanced AI predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Unlimited chat access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Advanced fantasy tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Real-time odds tracking</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Upgrade to Pro</Button>
          </CardFooter>
        </Card>

        {/* Premium Tier */}
        <Card>
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>Everything you need to win big.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$49.99</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>All Pro features</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Priority support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Custom dashboard layout</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Bet slip tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Early access to features</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Upgrade to Premium</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 