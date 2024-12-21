import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { usersTable } from "./users-schema"

export const betStatusEnum = pgEnum("bet_status", ["open", "won", "lost"])

export const betSlipsTable = pgTable("bet_slips", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .references(() => usersTable.userId, { onDelete: "cascade" })
    .notNull(),
  status: betStatusEnum("status").notNull().default("open"),
  betDetails: text("bet_details").notNull().default("{}"),
  odds: text("odds"),
  stake: text("stake"),
  potentialWinnings: text("potential_winnings"),
  result: text("result"),
  screenshotUrl: text("screenshot_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertBetSlip = typeof betSlipsTable.$inferInsert
export type SelectBetSlip = typeof betSlipsTable.$inferSelect 