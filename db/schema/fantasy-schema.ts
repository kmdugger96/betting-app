import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { usersTable } from "./users-schema"

export const fantasyTeamsTable = pgTable("fantasy_teams", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .references(() => usersTable.userId, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  league: text("league").notNull(),
  scoringFormat: text("scoring_format").notNull(),
  season: text("season").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export const fantasyPlayersTable = pgTable("fantasy_players", {
  id: uuid("id").defaultRandom().primaryKey(),
  teamId: uuid("team_id")
    .references(() => fantasyTeamsTable.id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  team: text("team").notNull(),
  stats: text("stats").default("{}"),
  projections: text("projections").default("{}"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertFantasyTeam = typeof fantasyTeamsTable.$inferInsert
export type SelectFantasyTeam = typeof fantasyTeamsTable.$inferSelect

export type InsertFantasyPlayer = typeof fantasyPlayersTable.$inferInsert
export type SelectFantasyPlayer = typeof fantasyPlayersTable.$inferSelect 