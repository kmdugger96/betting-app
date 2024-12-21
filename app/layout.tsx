"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { PostHogProvider } from "posthog-js/react"
import { Toaster } from "sonner"
import { posthog } from "@/lib/posthog"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <PostHogProvider client={posthog}>
          <ClerkProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </ClerkProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
