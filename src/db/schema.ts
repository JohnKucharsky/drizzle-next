import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
  score: integer("score"),
});

export const profiles = pgTable("profiles", {});
// export const moodEnum = pgEnum("mood", ["sad", "ok", "happy"]);
// export const testTable = pgTable("testTable", {
//   id: serial("id").primaryKey(),
//   qty: bigint("qty", { mode: "number" }),
//   price: numeric("price", { precision: 7, scale: 2 }),
//   score: doublePrecision("score"),
//   delivered: boolean("delivered"),
//   description: varchar("description", { length: 256 }),
//   date: timestamp("date", { mode: "date" }).defaultNow(),
//   mood: moodEnum("mood").default("ok").notNull(),
// });
