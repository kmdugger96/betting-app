import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const membershipEnum = pgEnum("membership", ["free", "paid", "premium"])

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  email: text("email").notNull(),
  membership: membershipEnum("membership").notNull().default("free"),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  notificationPreferences: text("notification_preferences").default("{}"),
  layoutConfig: text("layout_config").default("{}"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect 