import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { usersTable } from "./users-schema"

export const chatGroupsTable = pgTable("chat_groups", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export const chatMembershipsTable = pgTable("chat_memberships", {
  id: uuid("id").defaultRandom().primaryKey(),
  groupId: uuid("group_id")
    .references(() => chatGroupsTable.id, { onDelete: "cascade" })
    .notNull(),
  userId: text("user_id")
    .references(() => usersTable.userId, { onDelete: "cascade" })
    .notNull(),
  isMuted: text("is_muted").default("false"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export const chatMessagesTable = pgTable("chat_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  groupId: uuid("group_id")
    .references(() => chatGroupsTable.id, { onDelete: "cascade" })
    .notNull(),
  userId: text("user_id")
    .references(() => usersTable.userId, { onDelete: "cascade" })
    .notNull(),
  content: text("content").notNull(),
  parentMessageId: uuid("parent_message_id").references(() => chatMessagesTable.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertChatGroup = typeof chatGroupsTable.$inferInsert
export type SelectChatGroup = typeof chatGroupsTable.$inferSelect

export type InsertChatMembership = typeof chatMembershipsTable.$inferInsert
export type SelectChatMembership = typeof chatMembershipsTable.$inferSelect

export type InsertChatMessage = typeof chatMessagesTable.$inferInsert
export type SelectChatMessage = typeof chatMessagesTable.$inferSelect 